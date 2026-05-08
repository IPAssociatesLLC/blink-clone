export async function GET() {
  const models = [
    // Blink Models
    { id: 'blink-1.0-lite', name: 'Blink 1.0 Lite', provider: 'Blink', category: 'text', speed: 'fast', quality: 'good', description: 'Fast and efficient model for quick builds' },
    { id: 'blink-1.0', name: 'Blink 1.0', provider: 'Blink', category: 'text', speed: 'medium', quality: 'great', description: 'Balanced model for most app builds' },
    { id: 'blink-1.0-pro', name: 'Blink 1.0 Pro', provider: 'Blink', category: 'text', speed: 'slow', quality: 'best', description: 'Premium model for complex applications' },

    // OpenAI Models
    { id: 'gpt-4.1', name: 'GPT-4.1', provider: 'OpenAI', category: 'text', speed: 'medium', quality: 'great', description: 'OpenAI\'s versatile GPT-4.1 model' },
    { id: 'gpt-4.1-mini', name: 'GPT-4.1 Mini', provider: 'OpenAI', category: 'text', speed: 'fast', quality: 'good', description: 'Fast GPT-4.1 variant for everyday tasks' },
    { id: 'gpt-4.1-nano', name: 'GPT-4.1 Nano', provider: 'OpenAI', category: 'text', speed: 'fastest', quality: 'basic', description: 'Ultra-fast nano model for simple tasks' },
    { id: 'gpt-5-mini', name: 'GPT-5 Mini', provider: 'OpenAI', category: 'text', speed: 'fast', quality: 'great', description: 'GPT-5 mini for balanced performance' },
    { id: 'gpt-5-nano', name: 'GPT-5 Nano', provider: 'OpenAI', category: 'text', speed: 'fastest', quality: 'good', description: 'Ultra-fast GPT-5 nano model' },
    { id: 'gpt-5.1', name: 'GPT-5.1', provider: 'OpenAI', category: 'text', speed: 'medium', quality: 'best', description: 'OpenAI\'s flagship GPT-5.1 model' },
    { id: 'gpt-5.1-codex', name: 'GPT-5.1 Codex', provider: 'OpenAI', category: 'code', speed: 'medium', quality: 'best', description: 'Specialized coding model built on GPT-5.1' },
    { id: 'gpt-5.1-codex-mini', name: 'GPT-5.1 Codex Mini', provider: 'OpenAI', category: 'code', speed: 'fast', quality: 'great', description: 'Fast coding model for everyday development' },
    { id: 'gpt-5.2', name: 'GPT-5.2', provider: 'OpenAI', category: 'text', speed: 'slow', quality: 'best', description: 'OpenAI\'s advanced GPT-5.2 reasoning model' },
    { id: 'gpt-5.4', name: 'GPT-5.4', provider: 'OpenAI', category: 'text', speed: 'slow', quality: 'best', description: 'High-capability reasoning and analysis model' },
    { id: 'gpt-5.5', name: 'GPT-5.5', provider: 'OpenAI', category: 'text', speed: 'slow', quality: 'best', description: 'OpenAI\'s most capable model' },

    // Anthropic Models
    { id: 'claude-3-7-sonnet', name: 'Claude 3.7 Sonnet', provider: 'Anthropic', category: 'text', speed: 'medium', quality: 'great', description: 'Balanced Anthropic model for most tasks' },
    { id: 'claude-haiku-4-5', name: 'Claude Haiku 4.5', provider: 'Anthropic', category: 'text', speed: 'fast', quality: 'good', description: 'Fast and affordable Claude model' },
    { id: 'claude-opus-4-5', name: 'Claude Opus 4.5', provider: 'Anthropic', category: 'text', speed: 'slow', quality: 'best', description: 'Anthropic\'s most powerful model' },
    { id: 'claude-opus-4-6', name: 'Claude Opus 4.6', provider: 'Anthropic', category: 'text', speed: 'slow', quality: 'best', description: 'Advanced Opus with improved reasoning' },
    { id: 'claude-opus-4-7', name: 'Claude Opus 4.7', provider: 'Anthropic', category: 'text', speed: 'slow', quality: 'best', description: 'Latest Opus with cutting-edge capabilities' },
    { id: 'claude-sonnet-4-5', name: 'Claude Sonnet 4.5', provider: 'Anthropic', category: 'text', speed: 'medium', quality: 'great', description: 'Enhanced Sonnet with improved performance' },
    { id: 'claude-sonnet-4-6', name: 'Claude Sonnet 4.6', provider: 'Anthropic', category: 'text', speed: 'medium', quality: 'great', description: 'Latest Sonnet with best speed/quality balance' },

    // Google Models
    { id: 'gemini-2.0-flash', name: 'Gemini 2.0 Flash', provider: 'Google', category: 'text', speed: 'fast', quality: 'good', description: 'Google\'s fast and efficient Gemini model' },
    { id: 'gemini-2.5-flash', name: 'Gemini 2.5 Flash', provider: 'Google', category: 'text', speed: 'fast', quality: 'great', description: 'Improved Flash with better reasoning' },
    { id: 'gemini-2.5-flash-lite', name: 'Gemini 2.5 Flash Lite', provider: 'Google', category: 'text', speed: 'fastest', quality: 'good', description: 'Lightweight Flash for simple tasks' },
    { id: 'gemini-2.5-pro', name: 'Gemini 2.5 Pro', provider: 'Google', category: 'text', speed: 'slow', quality: 'best', description: 'Google\'s most capable Gemini model' },
    { id: 'gemini-3-flash', name: 'Gemini 3 Flash', provider: 'Google', category: 'text', speed: 'fast', quality: 'great', description: 'Next-gen Flash with improved capabilities' },
    { id: 'gemini-3-pro-preview', name: 'Gemini 3 Pro Preview', provider: 'Google', category: 'text', speed: 'slow', quality: 'best', description: 'Preview of Google\'s next-gen Pro model' },
    { id: 'gemini-3.1-pro-preview', name: 'Gemini 3.1 Pro Preview', provider: 'Google', category: 'text', speed: 'slow', quality: 'best', description: 'Latest Gemini Pro preview release' },

    // xAI Models
    { id: 'grok-4-1-fast', name: 'Grok 4.1 Fast', provider: 'xAI', category: 'text', speed: 'fast', quality: 'great', description: 'xAI\'s fast Grok model for quick responses' },
    { id: 'grok-4-latest', name: 'Grok 4 Latest', provider: 'xAI', category: 'text', speed: 'medium', quality: 'best', description: 'xAI\'s latest and most capable Grok model' },
  ];

  const providers = ['Blink', 'OpenAI', 'Anthropic', 'Google', 'xAI'];

  return Response.json({ models, providers });
}
