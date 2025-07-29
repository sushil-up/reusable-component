import * as Yup from 'yup'

// Make sure this is inside the correct file
export const TestValidation = Yup.object().shape({
  select: Yup.string().required('Select is required'),
  date: Yup.date().required('date is required'),
  radio: Yup.string().required('radio is required'),
  textArea: Yup.string().required('textArea is required'),
});

