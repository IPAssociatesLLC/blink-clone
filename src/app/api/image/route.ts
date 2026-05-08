import ZAI from 'z-ai-web-dev-sdk';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { prompt, size } = await req.json();

    if (!prompt) {
      return Response.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    const zai = await ZAI.create();

    const response = await zai.images.generations.create({
      prompt,
      size: size || '1024x1024',
    });

    const imageBase64 = response.data[0]?.base64;

    if (!imageBase64) {
      return Response.json(
        { error: 'Failed to generate image' },
        { status: 500 }
      );
    }

    return Response.json({ image: imageBase64 });
  } catch (error) {
    console.error('Image generation API error:', error);
    return Response.json(
      { error: 'Failed to generate image. Please try again.' },
      { status: 500 }
    );
  }
}
