import { NextRequest, NextResponse } from "next/server";
import { GenerateResponse, GenerateApiResponse } from "@/app/types/api";

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "No prompt provided" },
        { status: 400 }
      );
    }

    // 生成图片
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.SILICONFLOW_API_KEY}`,
      },
      body: JSON.stringify({
        model: "stabilityai/stable-diffusion-3-5-large",
        prompt: prompt,
        width: 512,
        height: 512,
        batch_size: 3,  // 生成3张相似风格的图片
      }),
    };

    const response = await fetch(
      "https://api.siliconflow.cn/v1/images/generations",
      options
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`生成图片API请求失败: ${response.status} - ${errorText}`);
    }

    const data = await response.json() as GenerateResponse;

    if (!data.images || data.images.length === 0) {
      throw new Error("生成图片API返回的数据格式不正确");
    }

    const images = data.images.map(img => ({
      url: img.url
    }));

    return NextResponse.json({
      success: true,
      images: images,
    } as GenerateApiResponse);
  } catch (error) {
    console.error("Error generating images:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "图片生成失败" },
      { status: 500 }
    );
  }
}
