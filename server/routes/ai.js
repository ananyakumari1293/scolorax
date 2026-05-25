import express from "express";

import OpenAI from "openai";

const router = express.Router();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/chat", async (req, res) => {

  try {

    const { message } = req.body;

    const completion =
      await client.chat.completions.create({

        model: "gpt-4o-mini",

        messages: [

          {
            role: "system",

            content:
              `
              You are ScoloraX AI.

              Help students with:
              - scholarships
              - careers
              - degrees
              - study advice
              - college guidance
              - technology careers
              - MBA guidance
              - abroad education
              `,

          },

          {
            role: "user",
            content: message,
          },

        ],

      });

    res.json({

      reply:
        completion.choices[0]
          .message.content,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "AI failed",
    });

  }

});

export default router;