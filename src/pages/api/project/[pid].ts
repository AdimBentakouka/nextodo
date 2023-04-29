import { NextApiRequest, NextApiResponse } from "next";

import { IResProject } from "@/types/project";
import { deleteProject } from "@/controllers/project.controller";


export default function handler(req: NextApiRequest, res: NextApiResponse<IResProject>) {
    try {
        const { method } = req;

        switch (method) {
            case "DELETE":
                deleteProject(req, res);
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
