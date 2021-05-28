import PropTypes from 'prop-types';
// import FormikForm from '../../FormikForm';

const ContactsForm = ({ children }) => <div>{children}</div>;

ContactsForm.propTypes = {
  children: PropTypes.node,
};

ContactsForm.defaultProp = {
  children: null,
};

export default ContactsForm;
