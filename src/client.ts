import { RedisClientType, createClient } from "redis";
import config from "./config";

let client: RedisClientType;

async function connectRedis(url: string) {
  if (!url) {
    throw new Error("Connection url is required");
  }

  client = createClient({
    url: url,
  });

  await client.connect();
}

export async function getClient(url: string = config.connectionURI) {
  if (!client) {
    await connectRedis(url);
  }

  if (!client.isOpen) {
    await client.connect();
  }

  return client;
}
