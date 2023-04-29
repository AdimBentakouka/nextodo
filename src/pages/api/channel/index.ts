import type { NextApiRequest, NextApiResponse } from "next";
import { IResChannel } from "@/types/channel";
import { createChannel, getAllChannel } from "@/controllers/channel.controller";

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

