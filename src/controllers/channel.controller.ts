import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Prisma } from "@prisma/client";

import { IResChannel } from "@/types/channel";
import { prismaFormatError } from "@/utils/prisma";

const prisma = new PrismaClient();

/**
 * Retourne la liste des channels
 */
export const getAllChannel = async (req: NextApiRequest, res: NextApiResponse<IResChannel>) => {
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
export const createChannel = async (req: NextApiRequest, res: NextApiResponse<IResChannel>) => {
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

/**
 * Delete un channel
 */
export const deleteChannel = async (req: NextApiRequest, res: NextApiResponse<IResChannel>) => {
    try {
        const pid  = Number(req.query.pid as string);

        if(isNaN(pid))
        {
          return res
          .status(400)
          .send({ error: "L'id n'est pas un nombre' !" });
        }
        await prisma.channel.delete({
            where: {
                id: pid
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
            error: `Erreur lors de la suppression d'un channel`,
        });
    }
};
