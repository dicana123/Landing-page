import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  const { message } = await req.json();

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "Você é o NEXO Brain. Um consultor de negócios simples que ajuda microempreendedores a aumentar lucro e organizar vendas."
      },
      {
        role: "user",
        content: message
      }
    ]
  });

  return Response.json({
    reply: response.choices[0].message.content
  });
}
