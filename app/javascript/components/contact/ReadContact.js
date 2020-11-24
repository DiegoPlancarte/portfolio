import React from 'react';
import { Container, Table } from 'react-bootstrap'
import useRead from '../hooks/useRead'

const ReadContact = (props) => {

  const [contacts, setContacts, contactsLoading, contactErrors ] = useRead('contacts')

  if (contactsLoading) {
    return <Container>
              <div >
                <h1 className="text-primary">Loading...</h1>
              </div>
          </Container>
  }

  return ( 
    <React.Fragment>
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Title</th>
            <th>Body</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((v,i) => {
            return(
            <tr key={i}>
              <td>{v.id}</td>
              <td>{v.name}</td>
              <td>{v.title}</td>
              <td>{v.body}</td>
              <td>{v.email}</td>
              <td>{v.phone}</td>
              <td>{v.status}</td>
            </tr>
            )
          })}
        </tbody>
      </Table>
    </React.Fragment>
  );
}

export default ReadContact;