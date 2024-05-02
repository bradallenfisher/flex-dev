/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Flex, Grid, Wrapper } from '@psu-flex/core-ui';
import { CtaButton, FormField, FormArea, SubmitAlert } from '@psu-flex/core-ui';
import { DevTool } from '@hookform/devtools';
import { formWidthObj } from './DynamicFormStyles';
import { DynamicFormProps } from './DynamicFormTypes';
import dayjs from 'dayjs';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { googleServiceAccountAuth } from '@psu-flex/clients';
import { contentContainerMargins } from '@psu-flex/platform-theme';
import { useContent } from '@psu-flex/utility-functions';
export const DynamicForm = ({ data, ...props }: DynamicFormProps) => {
  //the register holds the form state in data variable
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {},
  });
  const { msm } = contentContainerMargins;

  const formRef = useRef(null);
  const alertRef = useRef(null);
  const contentProps = useContent(props);

  //grab field content
  const {
    textAreaContentCollection,
    textFieldContentCollection,
    hideFormAfterSubmitted,
    spreadsheetId,
    sheetId,
  } = data ?? {};

  //make the doc with the spreadsheetId and accountAuth
  const doc = new GoogleSpreadsheet(spreadsheetId, googleServiceAccountAuth);

  //append to the google spreadsheet
  const appendSpreadsheet = async (row) => {
    try {
      // loads document properties and worksheets
      await doc.loadInfo();
      const sheet = doc.sheetsById[sheetId];
      await sheet.addRow(row);
    } catch (e) {
      console.error('Error: ', e);
    }
  };

  //submit the form
  const submitForm = (data, e) => {
    e.preventDefault();

    if (Object.keys(data).length > 0) {
      const newRow = {
        ...data,
        Date: dayjs().format('MM/DD/YY hh:mm:ss A'),
      };
      appendSpreadsheet(newRow);
      reset();
      if (hideFormAfterSubmitted) {
        //@ts-ignore
        formRef.current.style.display = 'none'; // Hide the form
        //@ts-ignore
        alertRef.current.style.display = 'block'; // Show the alert
      }
    }
  };

  return (
    <Container {...contentProps}>
      <Wrapper>
        <Grid>
          <div
            sx={{
              ...(formWidthObj && formWidthObj[data?.formWidth]),
              py: data?.backgroundColor !== 'white' ? [16, 12, 12, 16] : 0,
              px: data?.backgroundColor !== 'white' ? [msm, 12, 12, 20] : 0,
              width: '100%',
              backgroundColor: data?.backgroundColor,
            }}
          >
            <Flex direction="column" className="w-full">
              {/* hidden alert until successful submission */}
              <div style={{ display: 'none' }} ref={alertRef}>
                <SubmitAlert variant="success" alertTitle="Thank you!">
                  Your response was successfully submitted.
                </SubmitAlert>
              </div>

              {/* shown form until successful submission */}
              <form
                style={{ display: 'block' }}
                ref={formRef}
                className="flex-col"
                onSubmit={handleSubmit(submitForm)}
              >
                <Flex direction="column" gap={7}>
                  {textFieldContentCollection?.items.map((item: any, i) => (
                    <FormField
                      key={i}
                      control={control}
                      type={item?.type || 'text'}
                      errors={errors}
                      label={item?.label}
                      placeholder={item?.placeholder}
                      register={register}
                      required={item?.isRequired}
                    />
                  ))}
                  {textAreaContentCollection?.items.map((item: any, i) => (
                    <FormArea
                      key={i}
                      errors={errors}
                      label={item?.label}
                      rows={5}
                      placeholder={item?.placeholder}
                      required={item?.isRequired}
                      register={register}
                      description="Maximum 600 characters"
                    />
                  ))}
                  <CtaButton
                    hocId={contentProps && contentProps.id}
                    variant="primaryFilled"
                    size={data?.ctaButtonSize || 'md'}
                    type="submit"
                    extraSx={{ mt: 4 }}
                  >
                    Submit Form
                  </CtaButton>
                </Flex>
              </form>
              <DevTool control={control} />
            </Flex>
          </div>
        </Grid>
      </Wrapper>
    </Container>
  );
};
