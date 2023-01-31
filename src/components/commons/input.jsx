import { Field } from 'formik';

// eslint-disable-next-line react/prop-types
export const Input = ({ className, id, name, placeholder, text }) => {
  return <Field className={className} id={id} name={name} placeholder={placeholder} type={text} />;
};
