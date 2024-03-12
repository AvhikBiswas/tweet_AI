export function TweetSuggestion(tweetText: string) {
  const prompt = `This is the user's tweet: "${tweetText}". I want to make a suggestion for a tweet without changing the context and hashtags with correct grammer correct spelling correct punctuation and make adjustment if needed. In response, provide an array of suggested tweets that the user can use in the following format:

    Suggested Tweets:
    -> Provide tweet suggestions with numbered increments.
    Spelling Correct:
    -> Provide original tweet with correct grammer and arrengment and spelling.`;
    
    

  return prompt;
}
