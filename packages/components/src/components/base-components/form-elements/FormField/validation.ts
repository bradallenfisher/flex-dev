const getFormFieldValidation = (
  label: string,
  maxLength: number | undefined
) => {
  return {
    text: {
      errorMessage: label + ' is required',
      rules: {
        maxLength: maxLength
          ? { value: maxLength, message: 'Too many characters' }
          : null,
      },
    },
    email: {
      errorMessage: 'Please enter a valid email',
      rules: {
        pattern: { value: emailRegex, message: 'Incorrect email format' },
      },
    },
    tel: {
      errorMessage: 'Please enter a valid phone number',
      rules: {
        pattern: {
          value: phoneRegex,
          message: 'Incorrect phone number format',
        },
      },
    },
  };
};

const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export { getFormFieldValidation };
