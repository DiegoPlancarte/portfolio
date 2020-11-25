import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Table } from 'react-bootstrap'
import useRead from '../hooks/useRead'

const ReadMessages = (props) => {

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
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((v,i) => {
            return(
            <tr key={i}>
              <td>{v.id}</td>
              <td><Link to={`/messageinfo/${v.id}`} className="text-truncate text-white">{v.name}</Link></td>
              <td><Link to={`/messageinfo/${v.id}`} className="text-truncate text-white">{v.title}</Link></td>
              <td><Link to={`/messageinfo/${v.id}`} className="text-truncate text-white">{v.body}</Link></td>
              <td>{v.status}</td>
            </tr>
            )
          })}
        </tbody>
      </Table>
    </React.Fragment>
  );
}

export default ReadMessages;