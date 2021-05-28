import { Field } from 'formik';
import { subYears } from 'date-fns';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import DateInput from '../../inputs/DateInput';
import RadioGroup from '../../RadioGroup';
import AddressInput from '../../inputs/AddressInput';
import FormikForm from '../../FormikForm';

const validationSchema = Yup.object().shape({
  birthDate: Yup.date().max(subYears(Date.now(), 18), 'User must be older 18').required('Required'),
  gender: Yup.string().oneOf(['Male', 'Female']).required('Required'),
});

const ProfileForm = ({ children, onSubmit }) => {
  const { birthDate, gender, address } = useSelector((state) => state.user);
  const initValues = { birthDate, gender, address };
  return (
    <FormikForm initialValues={initValues} validationSchema={validationSchema} submit={onSubmit}>
      <Field name="birthDate" label="Birth date" component={DateInput} />
      <RadioGroup values={['Male', 'Female']} name="gender" />
      <Field name="address" label="Address" component={AddressInput} />
      {children}
    </FormikForm>
  );
};

ProfileForm.propTypes = {
  children: PropTypes.node,
};

ProfileForm.defaultProp = {
  children: null,
};

export default ProfileForm;
