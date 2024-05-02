import {
  Roboto as roboto,
  Roboto_Condensed,
  Roboto_Slab,
} from 'next/font/google';
import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
import '@psu-flex/core-ui/assets/global.css';

import '@contentful/live-preview/style.css';
const Roboto = roboto({
  weight: ['400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const robotoSlab = Roboto_Slab({
  weight: ['700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

const robotoCondensed = Roboto_Condensed({
  weight: ['300', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

function MyApp({ Component, pageProps }) {
  return (
    <ContentfulLivePreviewProvider
      locale="en-US"
      enableLiveUpdates={pageProps.preview}
    >
      <style jsx global>{`
        html {
          font-family: ${Roboto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </ContentfulLivePreviewProvider>
  );
}

export default MyApp;
