import React from 'react';
import useRead from '../hooks/useRead'

const ReadContact = (props) => {

  const [contacts, setContacts, contactsLoading, contactErrors ] = useRead('contacts')

  return ( 
    <React.Fragment>
      {contacts.map((v,i) => {
        return(
        <div key={i}>
          <p>{v.name}</p>
          <p>{v.email}</p>
          <p>{v.phone}</p>
          <p>{v.title}</p>
          <p>{v.body}</p>
          <p>{v.status}</p>
        </div>
        )
      })}
    </React.Fragment>
  );
}

export default ReadContact;