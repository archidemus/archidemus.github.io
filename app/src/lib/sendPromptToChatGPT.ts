import OpenAI from "openai";

export default async function sendPromptToChatGPT({
  prompt,
  apiKey,
}: {
  prompt: string;
  apiKey?: string;
}) {
  if (!apiKey) {
    console.error("API key is required to send prompt to GPT.");
    return;
  }
  try {
    const openai = new OpenAI({
      apiKey,
      dangerouslyAllowBrowser: true,
    });
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: prompt,
        },
      ],
    });
    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error sending prompt to GPT: ", error);
  }
}
