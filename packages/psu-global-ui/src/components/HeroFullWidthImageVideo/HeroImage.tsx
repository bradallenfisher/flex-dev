/** @jsx jsx */
/* eslint-disable no-undef */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import * as React from "react";
import heroImage from './assets/hero-image.png';
import heroImageLg from './assets/hero-image-lg.png';
import heroTablet from './assets/hero-image-table.png';
import heroImageXlg from './assets/hero-image-xlg.png';

interface HeroImageProps {
    image?: string;
};

export const HeroImage = ({
    image,
}: HeroImageProps) => {
    return (
        <>
            <img
                sx={{ 
                    display: 'none',    
                    '@media screen and (max-width: 360px)': {
                        width: '21.125rem',
                        height: '12.75rem',
                        display: 'block',
                    }
                }}
                src={image ?? heroImage}
                alt="Hero background"
            />
            <img
                sx={{ 
                    display: 'none',    
                    '@media screen and (min-width: 361px) and (max-width: 768px)': {
                      width: '100%',
                      display: 'block',
                    }
                }}
                src={image ?? heroImageLg}
                alt="Hero background"
            />
            <img
                sx={{ 
                    display: 'none',    
                    '@media screen and (min-width: 769px) and (max-width: 1080px)': {
                      width: '100%',
                      display: 'block',
                    }
                }}
                src={image ?? heroTablet}
                alt="Hero background"
            />
            <img
                sx={{ 
                    display: 'none',    
                    '@media screen and (min-width: 1081px)': {
                      width: '100%',
                      display: 'block',
                    }
                }}
                src={image ?? heroImageXlg}
                alt="Hero background"
            />
        </>
    );
};