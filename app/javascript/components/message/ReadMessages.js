import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Table } from 'react-bootstrap'
import useRead from '../hooks/useRead'
import useUpdate from '../hooks/useUpdate'

const ReadMessages = (props) => {

  const [messages, setMessage, messagesLoading, messageErrors ] = useRead('contacts')
  const [status, statusLoading, statusErrors ] = useUpdate(`contacts/${messages.id}`)

  if (messagesLoading) {
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
          {messages.map((v,i) => {
            const num = i + 1
            return(
            <tr key={i}>
              <td>{num}</td>
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