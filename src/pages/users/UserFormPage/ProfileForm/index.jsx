import { Field, Formik, Form } from 'formik';
import { subYears } from 'date-fns';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { GENDER_INPUT_VALUES } from '../../../../constants';

import DateInput from '../../../../components/inputs/DateInput';
import RadioGroupInput from '../../../../components/inputs/RadioGroupInput';
import AddressInput from '../../../../components/inputs/AddressInput';
import TextInput from '../../../../components/inputs/TextInput';
import NavButtons from '../../../../components/StepWizard/NavButtons';

import styles from './styles.module.scss';

const validationSchema = Yup.object().shape({
  // TODO custom validation
  firstName: Yup.string()
    .min(2, 'User Name is too short')
    .max(70, 'User Name is too long')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'User Name Too Short')
    .max(70, 'User Name Too Long')
    .required('Required'),
  email: Yup.string().email('Incorrect email format').required('Required'),
  // TODO Support timezones
  birthDate: Yup.date().max(subYears(Date.now(), 18), 'User must be older 18').required('Required'),
  gender: Yup.string().oneOf(GENDER_INPUT_VALUES).required('Required'),
});

const ProfileForm = ({ onBack, onNext, isFirst, isLast }) => {
  const { firstName, lastName, email, birthDate, gender, address, ...rest } = useSelector(
    (state) => state.form.user,
  );
  const onSubmit = (values) => onNext({ ...values, ...rest });

  return (
    <Formik
      initialValues={{ firstName, lastName, email, birthDate, gender, address }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      <Form className={styles.form}>
        <div className={styles.formInner}>
          <div className={styles.fieldsWrapper}>
            <Field name="firstName" label="First Name" component={TextInput} />
            <Field name="lastName" label="Last Name" component={TextInput} />
            <Field name="birthDate" label="Birth date" component={DateInput} />
          </div>
          <div className={styles.fieldsWrapper}>
            <Field name="email" label="Email" component={TextInput} />
            <Field name="address" label="Address" component={AddressInput} />
            <RadioGroupInput name="gender" values={GENDER_INPUT_VALUES} />
          </div>
        </div>
        <NavButtons isFirst={isFirst} isLast={isLast} onBack={onBack} />
      </Form>
    </Formik>
  );
};

ProfileForm.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func.isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
};

ProfileForm.defaultProps = {
  onBack: () => {},
};

export default ProfileForm;
