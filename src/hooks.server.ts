import type { Handle } from "@sveltejs/kit";
import { appAuth } from "$lib/appAuth";

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);

  return response;
};

