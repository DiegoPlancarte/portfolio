import React from 'react';
import './message.stles.scss'
import useRead from '../hooks/useRead'
import useUpdate from '../hooks/useUpdate'
import useDelete from '../hooks/useDelete'
import Loading from '../../Lo'

const Message = () => {

  const [ message, setMessage, messageLoading, messageError ] = useRead(`contacts/${props.match.params.id}`)
  const [status, statusLoading, statusErrors ] = useUpdate(`contacts/${message.id}`)
  const [ deleteMessage ] = useDelete(`contacts/${props.match.params.id}`, props, 'messages')

  if (messageLoading) {
    return (<Loading/>)
  }

  return (
    <div>
      
    </div>
  );
};

export default Message;