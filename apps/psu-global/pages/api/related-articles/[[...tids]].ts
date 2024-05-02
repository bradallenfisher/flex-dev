import { drupal } from 'lib/drupal'
import { NextApiRequest, NextApiResponse } from 'next'
import { DrupalNode } from 'next-drupal';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {

  const { tids, page } = request.query;
  const numberPerPage = 50;
  // Ensure that the page query parameter is not a negative number.
  const offset = Math.max(Number(page ?? 0), 0);
  const params: Record<string, string | number> = {
    'fields[node--article]': 'title,changed,body,path,field_hero_component,field_components',
    'fields[paragraph--hero_article]': 'field_subtitle,field_media',
    'fields[paragraph--quote]': 'body',
    'fields[paragraph--text]': 'body',
    'fields[file--file]': 'uri,links',
    'fields[media--image]': 'field_image',
    'fields[media--video]': `field_source`,
    'include': 'field_hero_component,field_hero_component.field_media.field_image,field_components',
    'sort': '-changed',
    'filter[status]': 1,
    'page[offset]': offset * numberPerPage,
    'page[limit]': numberPerPage,
  };

  if (Array.isArray(tids) && tids.length !== 0) {
    params['filter[term][condition][path]'] = 'field_tags.meta.drupal_internal__target_id';
    params['filter[term][condition][operator]'] = 'IN';
    tids.forEach((tid, index, arr) => {
      if (arr.indexOf(tid) === index) {
        params[`filter[term][condition][value][${index}]`] = tid;
      }
    });
  }

  const results = await drupal.getResourceCollection<DrupalNode[]>(
    'node--article',
    {
      params
    }
  );

  response.json({ results });
}
