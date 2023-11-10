import express, { Application, Request, Response } from "express";
import cors from "cors";
import OpenAI from "openai";
import * as dotenv from "dotenv";

const PORT: number = 8000;
dotenv.config();

// Open AI Package init
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const app: Application = express();
app.use(cors());
app.use(express.json());

app.post("/completions", async (req: Request, res: Response) => {
	try {
		const response = await openai.chat.completions.create({
			model: "gpt-3.5-turbo-1106",
			messages: [
				{
					role: "user",
					content: "Create a SQL request to " + req.body.message,
				},
			],
		});
		res.send(response.choices[0].message);
	} catch (error) {
		console.error(error);
		res.status(500).send("Server Error");
	}
});

app.listen(PORT, () => console.log(`Your server is running on PORT ${PORT}`));
