export interface AnalyzeResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

export interface GenerateResponse {
  images: Array<{
    url: string;
  }>;
}

export interface ApiError {
  error: string;
}

export interface GenerateApiResponse {
  success: boolean;
  images: Array<{
    url: string;
  }>;
}
