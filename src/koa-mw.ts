import { DefaultState, Middleware } from "koa";
import { getClient } from "./client";

export function getRedisClientMw<T = DefaultState>(): Middleware<T> {

  return async (ctx, next) => {
    const client = await getClient();
    ctx.redisClient = client;

    await next();
  };
}
