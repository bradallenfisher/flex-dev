//utility function used to target FormField component with props from the parent that are intended specifically for the FormField
export const useFormField = (props: any) => {
  return {
    placeholder: props.placeholder && props.placeholder,
    type: props.type && props.type,
    maxLength: props.maxLength && props.maxLength,
    minLength: props.minLength && props.minLength,
    max: props.max && props.max,
    min: props.min && props.min,
    form: props.form && props.form,
    disabled: props.disabled && props.disabled,
    autoFocus: props.autoFocus && props.autoFocus,
    pattern: props.pattern && props.pattern,
    defaultValue: props.defaultValue && props.defaultValue
  };
};
