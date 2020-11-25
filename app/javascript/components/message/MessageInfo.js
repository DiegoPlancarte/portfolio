import React from 'react';
import { Container, Button } from 'react-bootstrap'
import { IconContext} from 'react-icons';
import { FaRegTrashAlt, FaEnvelope, FaEnvelopeOpen } from 'react-icons/fa'

import useRead from '../hooks/useRead'
import useUpdate from '../hooks/useUpdate'
import useDelete from '../hooks/useDelete'

const MessageInfo = (props) => {

  const [ message, setMessage, messageLoading, messageError ] = useRead(`contacts/${props.match.params.id}`)
  const [status, statusLoading, statusErrors ] = useUpdate(`contacts/${message.id}`)
  const [ deleteMessage ] = useDelete(`contacts/${props.match.params.id}`, props, 'messages')

  if (messageLoading) {
    return <Container>
              <div >
                <h1 className="text-primary">Loading...</h1>
              </div>
          </Container>
  }

  const handleDelete = () => {
    return (
      <IconContext.Provider value={{ size: "2em", color: 'red' }}>
        <div className="p-3 icon">
          <FaRegTrashAlt onClick={ deleteMessage }/>
        </div>
      </IconContext.Provider>
      )
  }

  const handleRead = () => {
    if(message.status === 'Read'){
    return (
      <IconContext.Provider value={{ size: "2em", color: 'blue' }}>
        <div className="p-3 icon">
          <FaEnvelope onClick={ deleteMessage }/>
        </div>
      </IconContext.Provider>
      )}
      return (
        <IconContext.Provider value={{ size: "2em", color: 'grey' }}>
          <div className="p-3 icon">
            <FaEnvelope onClick={ deleteMessage }/>
          </div>
        </IconContext.Provider>
        )
  }

  const handleUnread = () => {
    if(message.status === 'Unread'){
    return (
      <IconContext.Provider value={{ size: "2em", color: 'blue' }}>
        <div className="p-3 icon">
          <FaEnvelopeOpen onClick={ deleteMessage }/>
        </div>
      </IconContext.Provider>
      )}
      return (
        <IconContext.Provider value={{ size: "2em", color: 'grey' }}>
          <div className="p-3 icon">
            <FaEnvelopeOpen onClick={ deleteMessage }/>
          </div>
        </IconContext.Provider>
        )
  }


  return ( 
    <React.Fragment>
      <Container>
        { handleDelete() }
        { handleRead() }
        { handleUnread() }
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