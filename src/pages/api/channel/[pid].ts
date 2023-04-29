import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Prisma } from "@prisma/client";

import { IResChannel } from "@/types/channel";
import { prismaFormatError } from "@/utils/prisma";

const prisma = new PrismaClient();

export default function handler(req: NextApiRequest, res: NextApiResponse<IResChannel>) {
    try {
        const { method } = req;

        switch (method) {
            case "DELETE":
                deleteChannel(req, res);
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
 * Delete un channel
 */
const deleteChannel = async (req: NextApiRequest, res: NextApiResponse<IResChannel>) => {
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
