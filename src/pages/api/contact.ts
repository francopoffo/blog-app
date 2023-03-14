import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import { Message } from "@/types/message";

type Data = {
  message: string | Message;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newMessage: Message = {
      email,
      name,
      message,
    };

    let client: MongoClient;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://francopoffo:0256514@cluster0.lxis1rn.mongodb.net/blog-app?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect." });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage._id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Could not insert." });
      return;
    }

    client.close();

    res.status(201).json({ message: newMessage });
  }
}
