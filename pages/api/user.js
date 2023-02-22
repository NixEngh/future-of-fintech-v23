import { PrismaClient } from '@prisma/client'
import { getSession } from '@auth0/nextjs-auth0'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const session = getSession(req, res)
    if (!session) {
        return res.status(401).json({ message: 'Not Authenticated' })
    }

    
    if (req.method === 'POST') {
        console.log(session.sub)
        await prisma.user.create({
            data: {
                userid: session.sub,
            }
        })
        res.status(200).send('ok')
        return
    }


    
    const user = await prisma.user.findMany({
        where: {
            userid: session.sub,
        },
    })
    res.status(200).json(user)
}