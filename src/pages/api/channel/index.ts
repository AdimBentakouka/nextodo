import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Prisma } from "@prisma/client";
import { IResChannel } from "@/types/channel";
import { prismaFormatError } from "@/utils/prisma";


const prisma = new PrismaClient();

/**
 * Dispatche les methodes
 */
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IResChannel>
) {
    try {
        const { method } = req;

        switch (method) {
            case "GET":
                getAllChannel(req, res);
                break;
            case "POST":
                createChannel(req, res);
                break;
            default:
                return res.status(405).send({ error: "Method not allowed." });
        }
    } catch (error) {
        // Catch and log errors - return a 500 with a message
        console.error(error);
        res.status(500).send({ error: "Server error!" });
    }
}

/**
 * Retourne la liste des channels
 */
const getAllChannel = async (req: NextApiRequest, res: NextApiResponse<IResChannel>) => {
    try {
        const channels = await prisma.channel.findMany({
            orderBy: {
                name: 'asc'
            }
        });
        res.status(200).json({ data: channels });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Server error!" });
    }
};

/**
 * Ajouter un channel
 */
const createChannel = async (req: NextApiRequest, res: NextApiResponse<IResChannel>) => {
    const name = req.body?.name as string;

    if (!name) {
        return res
            .status(400)
            .send({ error: "Le nom du channel est manquant !" });
    }

    try {
        await prisma.channel.create({
            data: {
                name: name,
            },
        });

        res.status(200).end();
    } catch (error) {
        console.error(error);
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return res
                .status(500)
                .send({ error: prismaFormatError(error) });
        }
        res.status(500).send({
            error: `Erreur lors de l'insertation du channel ${name}`,
        });
    }
};