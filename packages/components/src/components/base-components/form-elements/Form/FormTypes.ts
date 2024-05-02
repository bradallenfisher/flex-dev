export type FormVariants = 'standard';
export type FormFieldsSizes = 'sm' | 'md' | 'lg';
export interface FormProps {
  data?: {
    textFieldContent?: any;
    textAreaContent?: any;
    isRequired: boolean;
  };
  formElementVariant?: any;
  formElementSize?: any;
}
