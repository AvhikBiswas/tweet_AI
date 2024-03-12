export function TweetSuggestion(tweetText: string) {
  const prompt = `This is the user's tweet: "${tweetText}". I want to make a suggestion for a tweet without changing the ${tweetText} and hashtags. In response, provide an array of suggested tweets that the user can use in the following format:

    Suggested Tweets:
    -> Provide tweet suggestions with numbered increments.`;

  return prompt;
}
