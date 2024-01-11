# power-ec-redis

A package to help connect and work with Amazon Elasticache for Redis. You can run this package locally by connecting to a redis docker container.

This package does not support cluster.

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Environment Variables

The package supports two env variables

`EC_REDIS_CONNECTION_URI`: Connection string to connect

env vars are optional. You can eithr configure these or can pass them to the function.

## Installation

install the package fron npm

```bash
  npm install @awsmag/power-ec-redis
```

## Usage/Examples

```javascript
import { getRedisClient } from "@awsmag/power-ec-redis";

async function useWithEnvVarSet() {
  return await getRedisClient(); // if env variables are set
}

async function useWithoutEnvVarSet() {
  const url = "redis://localhost:6379";
  return await getRedisClient(url); // if env variables are not set
}
```

The package also supports a Koa middleware to attach the client to ctx.

```javascript
import { getRedisClient, getRedisClientMw } from "@awsmag/power-ec-redis";
import Koa from "koa";

const server = new Koa();
const url = "redis://localhost:6379";
(async () => {
  await getRedisClient(url);
  server.use(getRedisClientMw());

  // rest of your code goes here
})();

// it will be available as `redisClient` in ctx. In your handler use it like below.

const redisClient = ctx.redisClient;
// perform functions using redisClient
```
