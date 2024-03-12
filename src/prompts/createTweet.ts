export function generateTweet(topic: string) {
  const prompt = `Prompt/Title: "Compose a tweet about ${topic}"\n\nBest Practices:\n\n* Keep the tweet concise and within the character limit.\n* Make the tweet engaging and easy to understand.\n* Use relevant hashtags to increase visibility.\n* If appropriate, tag relevant accounts.\n* Use a casual and conversational tone, as Twitter is a social platform.\n* Check your spelling and grammar, as professionalism still matters.\n* provide an array of createdNewtweets that the user can use in the following format:

    createdNewtweets:
    -> Provide tweet suggestions with numbered increments. `;

  return prompt;
}
