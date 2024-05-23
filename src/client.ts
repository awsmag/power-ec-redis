import { RedisClientType, createClient } from "redis";
import config from "./config";

let client: RedisClientType;

export interface IOptions {
  pingInterval?: number
}

async function connectRedis(url: string, opts: IOptions = {}) {
  if (!url) {
    throw new Error("Connection url is required");
  }

  client = createClient({
    url: url,
    ...opts
  });

  await client.connect();
}

export async function getClient(url: string = config.connectionURI, opts: IOptions = {}) {
  if (!client) {
    await connectRedis(url, opts);
  }

  if (!client.isOpen) {
    await client.connect();
  }

  return client;
}
