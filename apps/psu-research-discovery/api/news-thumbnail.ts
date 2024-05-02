import { getNewsArticles } from '../lib/news-thumbnail';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const items = await getNewsArticles();
  if (!Array.isArray(items)) {
    return response.json({
      items: [],
      message: 'RSS feed request failed',
    });
  }

  response.json(items);
}
