import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const ContactList = ({ filteredContacts }) => {
  return (
    <>
      {filteredContacts.map(({ id, name, number }) => {
        return <ContactItem key={id} id={id} name={name} number={number} />;
      })}
    </>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      phone: PropTypes.string,
    })
  ),
};

export default ContactList;
