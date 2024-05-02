import { drupal } from 'lib/drupal'
import { NextApiRequest, NextApiResponse } from 'next'
import { DrupalNode } from 'next-drupal';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { tids } = request.query;
  const params: Record<string, string> = {};
  if (Array.isArray(tids)) {
    params['views-argument[]'] = tids.join('+');
  }
  const view = await drupal.getView<DrupalNode>(
    'upcoming_events--block',
    {
      params
    }
  );

  response.json(view);
}
