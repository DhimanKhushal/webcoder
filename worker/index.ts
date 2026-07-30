import {
  DEFAULT_DEVICE_SIZES,
  DEFAULT_IMAGE_SIZES,
  handleImageOptimization,
} from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS?: Fetcher;
  IMAGES?: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: {
          format: string;
          quality: number;
        }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(
        request,
        {
          fetchAsset: (path) => {
            const assetRequest = new Request(new URL(path, request.url));
            return env.ASSETS?.fetch(assetRequest) ?? fetch(assetRequest);
          },
          ...(env.IMAGES
            ? {
                transformImage: async (
                  body: ReadableStream,
                  { width, format, quality }: {
                    width: number;
                    format: string;
                    quality: number;
                  },
                ) => {
                  const result = await env.IMAGES!.input(body)
                    .transform(width > 0 ? { width } : {})
                    .output({ format, quality });
                  return result.response();
                },
              }
            : {}),
        },
        allowedWidths,
      );
    }

    return handler.fetch(request, env, ctx);
  },
};

export default worker;
