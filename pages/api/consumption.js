// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { withApiAuthRequired, getSession} from "@auth0/nextjs-auth0";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default withApiAuthRequired(async function handler(req, res) {
  const { user } = await getSession(req, res);
  if (!user) {
    return res.status(401).json({ message: "Not Authenticated" });
  }
  const consumption = await prisma.consumptionUnit.findMany({
    where: {
      userId: user.sub,
    },
  });
  res.status(200).json(consumption);
});

