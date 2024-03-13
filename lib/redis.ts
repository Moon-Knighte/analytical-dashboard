import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://apn1-rested-quail-35021.upstash.io",
  token: process.env.REDIS_KEY!,
});
