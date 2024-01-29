
import { Redis } from "@upstash/redis";

export const redisClient = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URI,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
})
