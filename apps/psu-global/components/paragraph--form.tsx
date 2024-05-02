/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { DrupalParagraph } from 'next-drupal';
import {
  Container,
  Flex,
  FormArea,
  FormField,
  Select,
} from '@psu-flex/psu-global-ui';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { contentContainerMargins } from '@psu-flex/platform-theme';
import { Item } from 'react-stately';
import {
  CheckboxGroup,
  CheckboxItem,
  CtaButton,
  RadioGroup,
  RadioItem,
  Icon,
  Heading,
} from '@psu-flex/core-ui';

export interface ParagraphFormProps extends DrupalParagraph {
  field_webform: {
    field_title?: string;
    resourceIdObjMeta: {
      drupal_internal__target_id: string;
    };
  };
}

export function ParagraphForm({ field_webform }: ParagraphFormProps) {
  const [formElements, setFormElements] = useState<any>(null);
  const [buttons, setButtons] = useState<any>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [selectItem, setSelectItem] = useState<{ [key: string]: string }>({});
  const webform_id = field_webform.resourceIdObjMeta.drupal_internal__target_id;

  const {
    register,
    handleSubmit,
    control,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {},
  });

  const { msm } = contentContainerMargins;

  useEffect(() => {
    fetch(`/api/webform/${webform_id}`)
      .then((res) => res.json())
      .then(mapDrupalFormToFormElements)
      .catch(console.error);
  }, []);

  const onSubmit = async (data) => {
    const formData = {
      ...data,
      ...selectItem,
    };
    setIsFormSubmitted(true);
    const response = await fetch(`/api/webform/${webform_id}`, {
      method: 'POST',
      body: JSON.stringify(formData),
    })
    if (!response.ok) {
      throw new Error(response.statusText)
    }
  };

  //clearing errors on select
  const handleSelectionChange = (key: string, selected: any) => {
    setSelectItem((prev) => ({ ...prev, [key]: selected }));
    errors['select'] && clearErrors('select');
  };

  const mapDrupalFormToFormElements = (drupalForm: any) => {
    setButtons(drupalForm.buttons);

    let arr = [];
    const requiredElements = drupalForm?.schema?.required ?? [];
    for (const [key, value] of Object.entries(drupalForm.schema.properties)) {
      let type: string = '';
      let options: any[] = [];
      const required = requiredElements.includes(key);
      const order = drupalForm.ui['ui:order'].indexOf(key);
      const validationMessage =
        drupalForm.ui?.[key]?.['webform:validationErrorMessages'];

      // it's special string input (e.g email), radio or checkboxes
      if (drupalForm.ui?.[key]?.['ui:widget']) {
        type = drupalForm.ui[key]['ui:widget'];
        // it's radio
        if (type === 'radio') {
          options = value.anyOf.map((val) => ({
            key: val.enum[0],
            title: val.title,
          }));
        }
        // it's checkbox
        if (type === 'checkboxes') {
          options = value.items.anyOf.map((val) => ({
            key: val.enum[0],
            title: val.title,
          }));
        }
      } else {
        // it's select or regular text input
        if (value?.type) {
          if (value.type === 'string') {
            if (!value.anyOf) {
              if (value.format) {
                type = value.format;
              } else {
                type = 'text';
              }
              // select type
            } else {
              type = 'select';
              options = value.anyOf.map((val) => ({
                key: val.enum[0],
                title: val.title,
              }));
            }
            // multiselect
          } else if (value.type === 'array') {
            type = 'multiselect';
            options = value.items.anyOf.map((val) => ({
              key: val.enum[0],
              title: val.title,
            }));
          }
        }
      }

      let obj = {
        name: key,
        title: value?.title,
        type,
        ...(options.length && {
          options,
        }),
        required,
        order,
        validationMessage,
      };
      arr.push(obj);
    }
    setFormElements(arr);
  };

  const renderButtons = () =>
    Array.isArray(buttons) &&
    buttons.map((button, index) => (
      <div
        key={index}
        style={{
          margin: '8px 0px',
        }}
      >
        <CtaButton
          variant="primaryFilled"
          size="md"
          type={button.type}
          extraSx={{ mt: 4 }}
        >
          {button.value}
        </CtaButton>
      </div>
    ));

  const renderFormElements = () =>
    Array.isArray(formElements) &&
    formElements
      .sort((a, b) => a.order - b.order)
      .map((formElement, index) => {
        if (
          formElement.type === 'text' ||
          formElement.type === 'email' ||
          formElement.type === 'number' ||
          formElement.type === 'tel'
        ) {
          return (
            <div
              key={index}
              style={{
                margin: '8px 0px',
              }}
            >
              <FormField
                name={formElement.name}
                control={control}
                type={formElement.type}
                errors={errors}
                label={formElement.title}
                placeholder={formElement.title}
                register={register}
                required={formElement.required}
              />
            </div>
          );
        }
        if (formElement.type === 'textarea') {
          return (
            <div
              key={index}
              style={{
                margin: '8px 0px',
              }}
            >
              <FormArea
                name={formElement.name}
                errors={errors}
                label={formElement.title}
                rows={5}
                placeholder={formElement.title}
                register={register}
                required={formElement.required}
              />
            </div>
          );
        }
        if (formElement.type === 'select') {
          return (
            <div
              key={index}
              style={{
                margin: '8px 0px',
              }}
            >
              <Select
                errors={errors}
                label={formElement.title}
                selectedKey={selectItem[formElement.name]}
                required={formElement.required}
                onSelectionChange={(selected: any) =>
                  handleSelectionChange(formElement.name, selected)
                }
              >
                {formElement.options.map((option: any) => (
                  <Item key={option.key}>{option.title}</Item>
                ))}
              </Select>
            </div>
          );
        }
        if (formElement.type === 'radio') {
          return (
            <div
              key={index}
              style={{
                margin: '8px 0px',
              }}
            >
              <RadioGroup
                register={register}
                required={formElement.required}
                errors={errors}
                label={formElement.title}
              >
                {formElement.options.map((option: any) => (
                  <RadioItem key={option.key} name={formElement.name}>
                    {option.title}
                  </RadioItem>
                ))}
              </RadioGroup>
            </div>
          );
        }
        if (formElement.type === 'checkboxes') {
          return (
            <div
              key={index}
              style={{
                margin: '8px 0px',
              }}
            >
              <CheckboxGroup
                required={formElement.required}
                register={register}
                errors={errors}
                label={formElement.title}
              >
                {formElement.options.map((option: any) => (
                  <CheckboxItem key={option.key}>{option.title}</CheckboxItem>
                ))}
              </CheckboxGroup>
            </div>
          );
        }
      });

  return (
    <Container
      extraSx={{
        width: '80%',
      }}
    >
      <Flex
        extraSx={{
          py: [16, 12, 12, 16],
          px: [msm as any, 12, 12, 20],
          width: '100%',
          backgroundColor: 'limestoneMaxLight',
        }}
        direction="column"
      >
        {isFormSubmitted ? (
          <Flex extraSx={{ flexDirection: 'column' }}>
            <Flex>
              <Icon
                size={28}
                extraSx={{ mr: 3 }}
                color="coalyGray"
                icon={'checkCircle'}
              />
              <Heading sx={{ mb: 3 }} color="coalyGray">
                Thank you!
              </Heading>
            </Flex>
            <Heading sx={{ fontWeight: 'normal' }} tag="h4" color="coalyGray">
              Your response was successfully submitted.
            </Heading>
          </Flex>
        ) : (
          <form
            id="form"
            className="flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            {renderFormElements()}
            {renderButtons()}
          </form>
        )}
      </Flex>
    </Container>
  );
}
