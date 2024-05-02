import { DrupalClient, DrupalClientOptions } from "next-drupal"

const clientOptions: DrupalClientOptions = {
  previewSecret: process.env.DRUPAL_PREVIEW_SECRET,
  forceIframeSameSiteCookie: process.env.NODE_ENV === "development",
  debug: process.env.NODE_ENV === "development" && process.env?.DRUPAL_DEBUG_ENABLED === "true",
};

const clientId = process.env.DRUPAL_CLIENT_ID ?? '';
const clientSecret = process.env.DRUPAL_CLIENT_SECRET ?? '';
if (clientId && clientSecret) {
  clientOptions.auth = { clientId, clientSecret };
  clientOptions.withAuth = true;
}

export const drupal = new DrupalClient(
  process.env.NEXT_PUBLIC_DRUPAL_BASE_URL ?? '',
  clientOptions
);
