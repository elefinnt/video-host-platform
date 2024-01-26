import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

//build this way to avoid multiple instances of prisma client upon saving in development - hot reload will create overflow era
//globalThis is not effected by hot reload

//could do export const db = new PrismaClient(); but in production the above code works the same
