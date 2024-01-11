import {record, string, optional } from "typescript-json-decoder";

const envDecoder = record({
  EC_REDIS_CONNECTION_URI: optional(string)
});

const data = envDecoder(process.env);

const config: Record<string, any> = {
  connectionURI: data.EC_REDIS_CONNECTION_URI
}

export default Object.freeze(config);