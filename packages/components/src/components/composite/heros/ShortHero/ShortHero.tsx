/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import React from 'react';
import { Section } from '@psu-flex/core-ui';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import Image from 'next/image';
import { ImageLoader } from '@psu-flex/core-ui';
import { ShortHeroProps } from './ShortHeroTypes';

export const ShortHero = ({ alt, image, ...props }: ShortHeroProps) => {
  const inspectorProps = useContentfulInspectorMode({ entryId: props.id });

  return (
    <Section
      extraSx={{
        mb: [8, 12, 12, 12],
      }}
      {...inspectorProps({
        fieldId: 'heading',
      })}
    >
      <Image
        className="w-full object-cover block"
        sx={{
          aspectRatio: ['unset', 'unset', '4 / 1', '4 / 1'],
          height: ['192px', '192px', 'auto', 'auto'],
        }}
        loader={ImageLoader}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        width={500}
        height={320}
        src={image}
        alt={alt ? alt : ''}
      />
    </Section>
  );
};
