import React from 'react';
import { Container } from 'react-bootstrap'

import useRead from '../hooks/useRead'

const MessageInfo = (props) => {

  const [ message, setMessage, messageLoading, messageError ] = useRead(`contacts/${props.match.params.id}`)
  const [status, statusLoading, statusErrors ] = useUpdate(`contacts/${messages.id}`)
  const [ deleteMessage ] = useDelete(`contacts/${props.match.params.id}`, props, 'messages')

  if (messageLoading) {
    return <Container>
              <div >
                <h1 className="text-primary">Loading...</h1>
              </div>
          </Container>
  }

  return ( 
    <React.Fragment>
      <Container>
        <p>{message.title}</p>
        <p>{message.body}</p>
        <p>{message.name}</p>
        <p>{message.phone}</p>
        <p>{message.email}</p>
        <p>{message.status}</p>
      </Container>
    </React.Fragment>
  );
}

export default MessageInfo;