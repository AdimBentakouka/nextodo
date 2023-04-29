import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Prisma } from "@prisma/client";

import { IResProject } from "@/types/project";
import { prismaFormatError } from "@/utils/prisma";

const prisma = new PrismaClient();

/**
 * Retourne la liste des projets
 */
export const getAllProject = async (req: NextApiRequest, res: NextApiResponse<IResProject>) => {
    try {
        const projects = await prisma.project.findMany({
            orderBy: {
                name: 'asc'
            }
        });
        res.status(200).json({ data: projects });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Server error!" });
    }
};

/**
 * Ajouter un projet
 */
export const createProject = async (req: NextApiRequest, res: NextApiResponse<IResProject>) => {
    const name = req.body?.name as string;

    if (!name) {
        return res
            .status(400)
            .send({ error: "Le nom du projet est manquant !" });
    }

    try {
        await prisma.project.create({
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
            error: `Erreur lors de l'insertation du project ${name}`,
        });
    }
};

/**
 * Delete un projet
 */
export const deleteProject = async (req: NextApiRequest, res: NextApiResponse<IResProject>) => {
    try {
        const pid  = Number(req.query.pid as string);

        if(isNaN(pid))
        {
          return res
          .status(400)
          .send({ error: "L'id n'est pas un nombre' !" });
        }
        await prisma.project.delete({
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
            error: `Erreur lors de la suppression d'un projet`,
        });
    }
};
