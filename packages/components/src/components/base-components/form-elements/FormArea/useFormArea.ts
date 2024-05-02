//utility function used to target FormArea component with props from the parent that are intended specifically for the FormArea
export const useFormArea = (props: any) => {
  return {
    placeholder: props.placeholder && props.placeholder,
    wrap: props.wrap && props.wrap,
    maxLength: props.maxLength && props.maxLength,
    form: props.form && props.form,
    disabled: props.disabled && props.disabled,
    autoFocus: props.autoFocus && props.autoFocus,
    cols: props.cols && props.cols,
    rows: props.rows && props.rows,
    defaultValue: props.defaultValue && props.defaultValue,
    readonly: props.readonly && props.readonly,
    dirname: props.dirname && props.dirname
  };
};
