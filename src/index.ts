import { RedisClientType } from "redis";
import config from "./config";
import { getClient } from "./client";

export * from "./koa-mw";

export function getRedisClient(
  url: string = config.url,
) {
  if (!url) {
    throw new Error("url is required");
  }

  return getClient(url);
}

export type RedisClient = RedisClientType;