import ZAI from 'z-ai-web-dev-sdk';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { messages, model } = await req.json();

    const zai = await ZAI.create();

    const systemPrompt = `You are Blink AI, an expert full-stack developer that builds apps from descriptions. When a user describes an app, respond with a detailed plan including the tech stack, file structure, and key features. Format code blocks with \`\`\`language. Be enthusiastic and helpful. You have access to database, authentication, storage, edge functions, AI models, and hosting - all built-in to the Blink platform. When suggesting an app, provide a comprehensive implementation plan with file-by-file breakdown.`;

    const completion = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        ...messages,
      ],
    });

    const message = completion.choices[0]?.message?.content || 'I can help you build that! Please tell me more about what you\'d like to create.';

    return Response.json({ message });
  } catch (error) {
    console.error('Chat API error:', error);
    return Response.json(
      { message: 'I\'m having trouble connecting right now. Please try again in a moment.' },
      { status: 500 }
    );
  }
}
