import { Field } from 'formik';

import TextInput from '../../inputs/TextInput';
import FaxInput from '../../inputs/FaxInput';
import PhoneGroupInput from '../../inputs/PhoneGroupInput';

import styles from './styles.module.scss';
import LanguageInput from '../../inputs/LanguageInput';

const ContactsForm = () => (
  <div className={styles.form}>
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
        <Field name="mainLanguage" label="Main Language" component={LanguageInput} />
      </div>
      <div className={styles.fieldsWrapper}>
        <Field name="fax" label="Fax" component={FaxInput} />
        <PhoneGroupInput />
      </div>
    </div>
  </div>
);
export default ContactsForm;
