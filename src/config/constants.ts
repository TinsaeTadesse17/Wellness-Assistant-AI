// AI Configuration
export const AI_CONFIG = {
  MODEL: 'gemini-pro',
  SAFETY_PROMPT: `You are a professional mental health and wellness assistant. Follow these guidelines:

1. Response Structure:
   Always structure your responses in clear sections:

   Understanding:
   • Begin with empathetic acknowledgment
   • Validate the user's experience
   • Show you understand their concern

   Strategy:
   • Explain evidence-based approaches
   • Reference relevant psychological frameworks
   • Provide context for recommendations

   Action Plan:
   • List specific, actionable steps
   • Include practical exercises
   • Offer clear, numbered instructions

   Summary:
   • Recap key points
   • Provide encouragement
   • Remind about professional help if needed

2. Formatting:
   • Use bullet points for lists
   • Keep paragraphs short and focused
   • Add space between sections
   • Use clear section headers

3. Content Guidelines:
   • Focus on evidence-based approaches
   • Maintain professional boundaries
   • Provide specific, actionable advice
   • Include relevant exercises or techniques

4. Safety Protocols:
   • Identify crisis situations
   • Provide emergency resources when needed
   • Encourage professional help appropriately
   • Maintain appropriate boundaries`
} as const;

export const CRISIS_RESOURCES = {
  GLOBAL_RESOURCES: [
    {
      country: 'Global',
      resources: [
        {
          name: '7 Cups',
          contact: 'www.7cups.com',
          hours: '24/7',
          details: 'Online emotional support (Multiple languages)'
        },
        {
          name: 'Befrienders Worldwide',
          contact: 'www.befrienders.org',
          hours: '24/7',
          details: 'Global crisis helpline database'
        }
      ]
    },
    {
      country: 'Ethiopia',
      resources: [
        {
          name: 'Ethiopian Mental Health Association',
          contact: '+251 911 224 326',
          hours: 'Mon-Fri, 9 AM - 5 PM EAT',
          details: 'Mental health support and referrals'
        },
        {
          name: 'Tele Mental Health Service',
          contact: '8294',
          hours: 'Mon-Fri, 9 AM - 5 PM EAT',
          details: 'National mental health helpline'
        },
        {
          name: 'Amanuel Mental Specialized Hospital',
          contact: '+251 111 239 602',
          hours: '24/7',
          details: 'Emergency psychiatric services'
        },
        {
          name: 'Eminence Center',
          contact: '+251 116 393 037',
          hours: 'Mon-Sat, 9 AM - 6 PM EAT',
          details: 'Professional counseling services'
        }
      ]
    },
    {
      country: 'Regional Support',
      resources: [
        {
          name: 'Africa Mental Health Foundation',
          contact: 'www.africamentalhealthfoundation.org',
          hours: '24/7',
          details: 'Mental health resources for Africa'
        },
        {
          name: 'African Alliance for Mental Health',
          contact: '+251 116 172 763',
          hours: 'Mon-Fri, 9 AM - 5 PM EAT',
          details: 'Regional mental health support'
        }
      ]
    }
  ]
} as const;

// Initial chat history
export const INITIAL_CHAT_HISTORY = [
  {
    role: 'user' as const,
    parts: AI_CONFIG.SAFETY_PROMPT,
  },
  {
    role: 'model' as const,
    parts: 'I understand and will provide professional, evidence-based wellness guidance while maintaining appropriate boundaries.',
  },
];