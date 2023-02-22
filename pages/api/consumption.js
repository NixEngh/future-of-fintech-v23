// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getConsumption = async (user) => {
  const consumption = await prisma.consumptionUnit.findMany({
    where: {
      userId: user.sub,
    },
  });

  return consumption;
};

export default withApiAuthRequired(async function handler(req, res) {
  const { user } = await getSession(req, res);
  if (!user) {
    return res.status(401).json({ message: "Not Authenticated" });
  }

  if (req.method === "POST") {
    const data = req.body;

    try {
      data.forEach(async (unit) => {
        await prisma.consumptionUnit.create({
          data: {
            userId: user.sub,
            from: unit.from,
            to: unit.to,
            consumption: unit.consumption,
            unit: unit.unit,
          },
        });
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
      return;
    }

    res.status(200).send("ok");
    return;
  }

  const consumption = await getConsumption(user);

  res.status(200).json(consumption)

});
