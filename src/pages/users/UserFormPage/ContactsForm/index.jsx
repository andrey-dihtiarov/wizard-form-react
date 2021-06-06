import { Field, Form, Formik } from 'formik';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

import { LANGUAGES_LIST } from '../../../../constants';

import TextInput from '../../../../components/inputs/TextInput';
import FaxInput from '../../../../components/inputs/FaxInput';
import PhoneGroupInput from '../../../../components/inputs/PhoneGroupInput';
import NavButtons from '../../../../components/StepWizard/NavButtons';
import SelectboxInput from '../../../../components/inputs/SelectboxInput';

import styles from './styles.module.scss';

const selectboxList = Object.entries(LANGUAGES_LIST).map(([key, value]) => ({
  value: key,
  label: value,
}));

const urlRegex =
  /((?:(?:http?|ftp)[s]*:\/\/)?[a-z0-9-%&=?.]+\.[a-z]{2,4}\/?([^\s<>#%",{}\\|^[\]`]+)?)/gi;

const validationSchema = Yup.object().shape({
  company: Yup.string().required('Required'),
  githubLink: Yup.string().matches(urlRegex, 'Url is invalid').required('Required'),
  facebookLink: Yup.string().matches(urlRegex, 'Url is invalid').required('Required'),
  mainLanguage: Yup.mixed().required('Required'),
  fax: Yup.string().required('Required'),
  phoneNumbers: Yup.array().of(Yup.string().required('Required')).required('Required'),
});

const ContactsForm = ({ onBack, onNext, isFirst, isLast }) => {
  const { company, githubLink, facebookLink, mainLanguage, fax, phoneNumbers } = useSelector(
    (state) => state.form,
  );
  const onSubmit = (values) => onNext(values);
  return (
    <Formik
      initialValues={{ company, githubLink, facebookLink, mainLanguage, fax, phoneNumbers }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.formInner}>
          <div className={styles.fieldsWrapper}>
            <Field name="company" label="Company" component={TextInput} />
            <Field
              name="githubLink"
              label="Github Link"
              placeholder="github.com/name"
              component={TextInput}
            />
            <Field
              name="facebookLink"
              label="Facebook Link"
              placeholder="www.facebook.com/your_id"
              component={TextInput}
            />
            <Field
              name="mainLanguage"
              label="Main Language"
              valuesList={selectboxList}
              component={SelectboxInput}
            />
          </div>
          <div className={styles.fieldsWrapper}>
            <Field name="fax" label="Fax" component={FaxInput} />
            <PhoneGroupInput />
          </div>
        </div>
        <NavButtons isFirst={isFirst} isLast={isLast} onBack={onBack} />
      </Form>
    </Formik>
  );
};
export default ContactsForm;
