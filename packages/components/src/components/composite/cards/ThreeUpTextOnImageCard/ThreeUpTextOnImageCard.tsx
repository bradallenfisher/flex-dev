/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { forwardRef } from "react";
import { ThreeUpTextOnImageCardProps } from "./ThreeUpTextOnImageCardTypes";
import { Flex, Card, Heading, RichTextContent } from "@psu-flex/core-ui";

/** ThreeUpTextOnImageCards presents 3-18 Cards used for navigation. */

export const ThreeUpTextOnImageCard = forwardRef(
  function ThreeUpTextOnImageCards(
    {
      itemHeading,
      itemImage,
      imageWidth,
      imageHeight,
      itemRichText,
      to,
      ...props
    }: ThreeUpTextOnImageCardProps,
    ref: any
  ) {
    const stateSx = {
      "&::before": {
        background:
          "var(--color-gradient-imageOverlay, linear-gradient(0deg, rgba(0, 96, 169, 0.90) 0%, rgba(30, 64, 124, 0.90) 50%, rgba(0, 29, 68, 0.90) 100%))",
      },
    };

    let aspectWidth: string;
    let aspectRatio: number;
    aspectRatio = imageWidth / imageHeight;

    if (aspectRatio == 1.5) {
      aspectWidth = "100%";
    } else {
      aspectWidth = "fit-content";
    }

    return (
      <div ref={ref && ref} {...props}>
        <Flex direction="column">
          <Card
            className="h-full aspect3-2"
            square
            extraSx={{
              "&:hover": {
                ...stateSx,
              },
              position: "relative",
              overflow: "hidden",
              "::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "var(--color-gradient-imageOverlay, linear-gradient(0deg, rgba(0, 96, 169, 0.80) 0%, rgba(30, 64, 124, 0.80) 50%, rgba(0, 29, 68, 0.80) 100%))",
              },
            }}
            to={to}
            backgroundImage={itemImage}
            linkWrapperSx={{
              "&:focus-visible > div": {
                ...stateSx,
              },
              width: "100%",
            }}
          >
            <Flex
              alignItems="center"
              className="h-full"
              direction="column"
              justifyContent="center"
              extraSx={{ position: "relative", zIndex: 1, px: [6, 7, 7, 8] }}
            >
              <Heading
                color="white"
                variant={28}
                tag="h4"
                responsiveType="column"
                align="center"
                extraSx={{ textTransform: "upperCase" }}
              >
                {itemHeading}
              </Heading>
            </Flex>
          </Card>
          {itemRichText && (
            <RichTextContent
              richTextRaw={itemRichText}
              extraSx={{ mt: [3, 3, 4, 4] }}
            />
          )}
        </Flex>
      </div>
    );
  }
);
