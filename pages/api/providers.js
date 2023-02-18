import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {

  const providers = await prisma.provider.findMany({
    select: {
      name: true,
      PricingModel: {
        select: {
          name: true,
          PricingParameter: {
            select: {
              name: true,
              value: true,
            },
          },
        },
      }
    }
  });


  res.status(200).json(providers);
}
