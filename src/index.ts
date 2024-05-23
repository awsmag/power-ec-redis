import { RedisClientType } from "redis";
import config from "./config";
import { getClient, IOptions } from "./client";

export * from "./koa-mw";

export function getRedisClient(
  url: string = config.connectionURI,
  options: IOptions = {}
) {
  if (!url) {
    throw new Error("url is required");
  }

  return getClient(url, options);
}

export type RedisClient = RedisClientType;