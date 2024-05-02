export type DynamicFormVariants = 'standard';
export type DynamicFormFieldsSizes = 'sm' | 'md' | 'lg';
export interface DynamicFormProps {
  data?: {
    formWidth: any;
    textFieldContentCollection?: any;
    textAreaContentCollection?: any;
    isRequired: boolean;
    backgroundColor?: string;
    ctaButtonSize?: any;
    hideFormAfterSubmitted?: boolean;
    spreadsheetId: any;
    sheetId: any;
  };
  formElementVariant?: any;
  formElementSize?: any;
}
