import { NextRequest, NextResponse } from "next/server";
import { AnalyzeResponse } from "@/app/types/api";

export async function POST(request: NextRequest) {
  const analyze_prompt = `请分析这幅图片，用中文简明扼要地回答以下问题（不超过10句话）：

1. 这是什么类型的作品？（例如：古典油画、现代艺术、二次元插画等）
2. 创作风格特点是什么？
3. 如果是传统艺术作品，请推测可能的作者和创作年代
4. 如果是二次元/现代插画，请分析其艺术风格和可能的创作地区
5. 作品的主要色调和构图特点

请用流畅的语言将这些信息整合成一段连贯的描述。`;

  try {
    const formData = await request.formData();
    const image = formData.get('image') as File;

    if (!image) {
      return NextResponse.json(
        { error: "No image provided" },
        { status: 400 }
      );
    }

    // 将文件转换为Base64
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Image = buffer.toString('base64');
    const imageUrl = `data:image/jpeg;base64,${base64Image}`;

    // 调用SiliconFlow API分析图片
    const analyzeOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.SILICONFLOW_API_KEY}`,
      },
      body: JSON.stringify({
        model: "Qwen/Qwen2-VL-72B-Instruct",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "image_url",
                image_url: { url: imageUrl },
              },
              {
                type: "text",
                text: analyze_prompt,
              },
            ],
          },
        ],
        stream: false,
      }),
    };

    const analyzeResponse = await fetch(
      "https://api.siliconflow.cn/v1/chat/completions",
      analyzeOptions
    );

    if (!analyzeResponse.ok) {
      const errorText = await analyzeResponse.text();
      throw new Error(
        `分析API请求失败: ${analyzeResponse.status} - ${errorText}`
      );
    }

    const analyzeData = await analyzeResponse.json() as AnalyzeResponse;

    if (
      !analyzeData.choices ||
      analyzeData.choices.length === 0 ||
      !analyzeData.choices[0].message ||
      !analyzeData.choices[0].message.content
    ) {
      throw new Error("分析API返回的数据格式不正确");
    }

    const analysis = analyzeData.choices[0].message.content;
    console.log("分析结果:", analysis);

    return NextResponse.json({
      success: true,
      result: analysis,
    });
  } catch (error) {
    console.error("分析失败:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "图片分析失败" },
      { status: 500 }
    );
  }
}
