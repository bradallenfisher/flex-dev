/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from "react";
import { Container, CtaButton, Flex, Grid, Wrapper } from '@psu-flex/core-ui';
import {
  Heading,
  Body,
  FormField,
} from '@psu-flex/core-ui';
import { useBreakpoints } from '@psu-flex/utility-hooks';

export interface NewsLetterFormProps {
  itemHeading: string;
  itemBody?: string;
  formError: any;
  formRegister: any;
  buttonText: string;
  onButtonClick?: () => void;
}

export const NewsLetterForm = ({
  itemHeading,
  itemBody = '',
  formError,
  formRegister,
  buttonText,
  onButtonClick,
  ...inputProps
}: NewsLetterFormProps) => {
  const { isSm } = useBreakpoints();
  return (
    <Wrapper>
      <Container>
          <Flex
              extraSx={{
                backgroundColor: 'beaverBlue',
                gap: 'var(--margin-md, 2.5rem)',
                minWidth: '338px',
                mt: 8,
                pt: 8,
                pr: 6,
                pb: 8,
                pl: 6,
              }}
              variant='responsive'
          >
            <div
              sx={{
                paddingRight: 'var(--margin-md, 2.5rem)',
              }}
            >
              <Heading 
                tag="h2"
                variant={36}
                color="white"
                extraSx={{
                  fontFamily: 'Roboto',
                  minWidth: '290px',
                }}
              >{itemHeading}</Heading>
              <Body
                variant={18}
                color="white"
                extraSx={{
                  fontFamily: 'Roboto',
                  mt: 2,
                  minWidth: '290px',
                }}
              >{itemBody}</Body>
            </div>
            <Flex
              extraSx={{
                width: ['auto', 'auto', '640px', '740px'],
                mt: [6, 2, 'auto', 'auto'],
                minWidth: '290px',
              }}
            >
              <input
                      id="form-field-input"
                      type="text"
                      sx={{
                        minWidth: '100px',
                        height: ['3.4rem', '3.5rem'],
                        width: '100%',
                        borderColor: 'white'
                      }}
                      {...inputProps}
                    />
                  <CtaButton
                    size={ isSm ? 'sm' : 'md'}
                    extraSx={{
                      color: 'nittanyNavy',
                      padding: '1rem 3.25rem',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '0.25rem',
                      borderRadius: '0rem 0.25rem 0.25rem 0rem',
                      border: '2px solid var(--color-link-light, #CCE9FF)',
                      background: 'linkLight',
                      fontFamily: 'Roboto',
                      fontSize: ['1rem', '1.125rem'],
                      fontWeight: '500',
                      '@media screen and (max-width: 768px)': {
                        maxWidth: '120px',
                      }
                    }}
                    onClick={onButtonClick}
                  >{buttonText}</CtaButton>
            </Flex>
          </Flex>
      </Container>
    </Wrapper>
  );
};
