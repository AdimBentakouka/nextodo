import { Prisma } from "@prisma/client";
/**
 * Mise en forme des erreurs prisma sous la forme PXXX - MESSAGE
 */
export const prismaFormatError = (error: Prisma.PrismaClientKnownRequestError) : string => {
    return `${error.code} - ${error.message}`;
}