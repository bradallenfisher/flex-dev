import { drupal } from "lib/drupal";
import { NextApiRequest, NextApiResponse } from "next"
import { buildUrl } from "next-drupal";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { webform_id } = request.query;
  let drupalResponse;
  if (request.method === 'GET') {
    const url = buildUrl(`/webform_jsonschema/${webform_id}`);
    drupalResponse = await drupal.fetch(url.toString(), { withAuth: true });
  }
  if (request.method === 'POST') {
    const url = buildUrl('/webform_rest/submit');
    const body = typeof request.body === 'string' ? JSON.parse(request.body) : request.body;
    const options = {
      withAuth: true,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...body, webform_id }),
    };
    drupalResponse = await drupal.fetch(url.toString(), options);
  }

  if (!(drupalResponse && drupalResponse.ok)) {
    return response.status(500).json({
      message: drupalResponse?.statusText ?? 'Unable to call Drupal',
    })
  }
  const drupalJson = await drupalResponse.json();
  return response.json(drupalJson);
}
