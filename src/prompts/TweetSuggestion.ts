export function TweetSuggestion(tweetText: string) {
  const prompt = `This is the user's tweet: "${tweetText}".

  Please generate the following responses in JSON format:
  
  1. **Suggested Tweets:**
     - Provide a list of 4 distinct tweet suggestions that maintain the original context and hashtags, but with improved grammar, spelling, punctuation, and phrasing.
  
  2. **Grammar Correction:**
     - Provide the original tweet with only grammatical,punctuation corrections, preserving the original content and structure as much as possible.
  
  Arrange the response as a  valid JSON array with the following format:
     ["Suggestion 1", "Suggestion 2", "Suggestion 3", "Suggestion 4", "Grammar Correction"]
     dont add " json" template string or somthing like that,first test that this is valid and then give.
  
`;

  return prompt;
}
