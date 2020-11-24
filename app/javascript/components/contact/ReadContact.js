import React from 'react';
import useRead from '../hooks/useRead'

const ReadContact = (props) => {

  const [contacts, setContacts, contactsLoading, contactErrors ] = useRead('contacts')

  return ( 
    <React.Fragment>
      
    </React.Fragment>
  );
}

export default ReadContact;