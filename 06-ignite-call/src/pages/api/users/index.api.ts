import type { NextApiHandler } from "next";
import { setCookie } from "nookies";

import { prisma } from "@/lib/prisma";

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).end();
  }
  const { name, username } = req.body;

  const usernameIsAlreadyUsed = (await prisma.user.count({ where: { username } })) > 0;
  if (usernameIsAlreadyUsed) {
    return res.status(400).json({ error: "username already taken" });
  }

  const user = await prisma.user.create({ data: { name, username } });

  const SEVEN_DAYS_IN_SECONDS = 60 * 60 * 24 * 7;

  setCookie({ res }, "@ignitecall:userId", user.id, {
    maxAge: SEVEN_DAYS_IN_SECONDS,
    path: "/",
  });

  return res.status(201).json({ user });
};

export default handler;
