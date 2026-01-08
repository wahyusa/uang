import { makeGenericAPIRouteHandler } from "@keystatic/core/api/generic";
import config from "../../../keystatic.config";

export const onRequest = (context: any) => {
  // 1. Grab keys from Cloudflare Context (NOT process.env)
  const env = context.env;

  // 2. Initialize Keystatic INSIDE the request
  const handler = makeGenericAPIRouteHandler({
    config,
    // Explicitly map your Cloudflare Env Vars to Keystatic config
    clientId: env.NEXT_PUBLIC_KEYSTATIC_GITHUB_CLIENT_ID,
    clientSecret: env.KEYSTATIC_GITHUB_CLIENT_SECRET,
    secret: env.KEYSTATIC_SECRET,
  });

  // 3. Handle the request
  return handler(context.request);
};
