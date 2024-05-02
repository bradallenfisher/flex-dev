import React, { forwardRef } from 'react';
import dynamic from 'next/dynamic';

export type VideoProps = {
  children: React.ReactNode;
  src: string;
  [k: string]: any;
};
type Ref = HTMLVideoElement;

export const Video = forwardRef<Ref, VideoProps>((props, ref) => {
  const { src } = props;
  if (!src) return null;
  if (src.startsWith('https://')) {
    const ReactPlayer = dynamic(() => import('react-player/lazy'), {
      ssr: false,
    });
    return <ReactPlayer url={src} ref={ref} {...props} />;
  }
  return <video ref={ref} {...props} />;
});
