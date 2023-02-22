import { PrismaClient } from "@prisma/client";
import { getSession } from "@auth0/nextjs-auth0";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const session = await getSession(req, res);

  if (!session) {
    return res.status(401).json({ message: "Not Authenticated" });
  }


  if (req.method === "POST") {

    try {
      await prisma.user.create({
        data: {
          userId: session.user.sub,
        },
      });
    } catch (err) {res.status(500).send("something went wrong")}

    res.status(200).send("ok");
    return;
  }

  const user = await prisma.user.findMany({
    where: {
      userId: session.user.sub,
    },
  });
  res.status(200).json(user);
}
