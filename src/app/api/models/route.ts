export async function GET() {
  const models = [
    {
      id: 'blink-1.0-lite',
      name: 'Blink 1.0 Lite',
      description: 'Fast and efficient model for quick builds',
      speed: 'fast',
      quality: 'good',
    },
    {
      id: 'blink-1.0',
      name: 'Blink 1.0',
      description: 'Balanced model for most app builds',
      speed: 'medium',
      quality: 'great',
    },
    {
      id: 'blink-1.0-pro',
      name: 'Blink 1.0 Pro',
      description: 'Premium model for complex applications',
      speed: 'slow',
      quality: 'best',
    },
    {
      id: 'gpt-4o',
      name: 'GPT-4o',
      description: 'OpenAI\'s most capable model',
      speed: 'medium',
      quality: 'best',
    },
    {
      id: 'claude-3.5-sonnet',
      name: 'Claude 3.5 Sonnet',
      description: 'Anthropic\'s intelligent and fast model',
      speed: 'medium',
      quality: 'great',
    },
  ];

  return Response.json({ models });
}
