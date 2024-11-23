/**
 * Formats the AI response by:
 * - Removing markdown asterisks
 * - Converting asterisk bullets to proper bullet points
 * - Adding proper spacing and structure
 * - Enhancing readability with clear sections
 */
export function formatResponse(text: string): string {
  return text
    // Remove markdown formatting
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    
    // Format section headers
    .replace(/^(Understanding|Strategy|Action Plan|Summary):/gm, '\n\n$1:\n')
    
    // Convert markdown bullets to proper bullet points with spacing
    .replace(/^\s*-\s*/gm, '\n• ')
    .replace(/^\s*\*\s*/gm, '\n• ')
    
    // Ensure proper spacing after bullet points
    .replace(/•\s*/g, '• ')
    
    // Add extra line break before new sections
    .replace(/\n([A-Z][a-z]+:)/g, '\n\n$1')
    
    // Ensure proper spacing after periods
    .replace(/\.\s*/g, '. ')
    
    // Add spacing after colons in sections
    .replace(/:\n([^\n])/g, ':\n\n$1')
    
    // Remove excessive line breaks
    .replace(/\n{4,}/g, '\n\n\n')
    
    // Ensure proper spacing around bullet points
    .replace(/\n(•)/g, '\n\n$1')
    
    // Clean up any remaining formatting issues
    .trim();
}