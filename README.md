# power-ec-redis

`power-ec-redis` is a lightweight utility package that simplifies connecting to **Amazon ElastiCache for Redis**.
It can also be used locally via a Redis Docker container.

> **Note:** Cluster mode is **not supported** at this time.

---

## 🏷️ Badges

![npm version](https://img.shields.io/npm/v/@awsmag/power-ec-redis)
![npm downloads](https://img.shields.io/npm/dw/@awsmag/power-ec-redis)
![node-current](https://img.shields.io/node/v/@awsmag/power-ec-redis)
![types](https://img.shields.io/badge/TypeScript-supported-blue)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

---

## ✨ Features

* ✅ Simple Redis client initialization
* ✅ Works with AWS ElastiCache & local Redis
* ✅ Optional Koa middleware support
* ✅ Optional env-based config
* ✅ TypeScript ready

---

## 📦 Installation

```bash
npm install @awsmag/power-ec-redis
```

---

## ⚙️ Environment Variables

| Variable                        | Description          |
| ------------------------------- | -------------------- |
| `POWER_EC_REDIS_CONNECTION_URI` | Redis connection URI |

Environment variables are **optional**. You may configure them or pass a URI directly.

Example:

```
POWER_EC_REDIS_CONNECTION_URI=redis://localhost:6379
```

---

## 🚀 Usage

### Using env variables

```ts
import { getRedisClient } from "@awsmag/power-ec-redis";

async function demo() {
  const client = await getRedisClient(); // uses POWER_EC_REDIS_CONNECTION_URI
}
```

### Passing URI directly

```ts
import { getRedisClient } from "@awsmag/power-ec-redis";

async function demo() {
  const client = await getRedisClient("redis://localhost:6379");
}
```

---

## 🧩 Koa Middleware

Injects a Redis client instance onto `ctx.redisClient`.

```ts
import { getRedisClient, getRedisClientMw } from "@awsmag/power-ec-redis";
import Koa from "koa";

(async () => {
  const app = new Koa();

  await getRedisClient("redis://localhost:6379");
  app.use(getRedisClientMw());

  app.use(async (ctx) => {
    const redisClient = ctx.redisClient;
    await redisClient.set("foo", "bar");
    ctx.body = await redisClient.get("foo");
  });

  app.listen(3000);
  console.log("Server running on port 3000");
})();
```

---

## 🐳 Local Development

Use Docker to test locally:

```bash
docker run -d \
  --name redis \
  -p 6379:6379 \
  redis:latest
```

Then set:

```
export POWER_EC_REDIS_CONNECTION_URI="redis://localhost:6379"
```

---

## ❗ Limitations

* ❌ Redis Cluster mode is **not supported**

---

## 👨‍🔧 Maintainers

This package is developed and maintained by:

* **[S25Digital](https://s25.digital)**
* **[AWSMAG](https://awsmag.com)**

---

## 📄 License

MIT — Free to use & modify
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
