import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ContactForm from "./message/ContactForm";
import ReadMessages from "./message/ReadMessages";
import MessageInfo from "./message/MessageInfo";

const App = (props) => {

    const {
      logged_in,
      current_user,
      sign_in_route,
      sign_out_route,
      sign_up_route,
      edit_account_route,
      csrf_token
    } = props

  return (
    <React.Fragment>
      <Router>

        <Switch>
          <Route path = '/contactme' render={(props) => <ContactForm {...props} csrf_token={ csrf_token } /> }/>
          <Route path = '/messages' render={(props) => <ReadMessages {...props} csrf_token={ csrf_token } /> }/>
          <Route path = '/messageinfo/:id' render={(props) => <MessageInfo {...props} csrf_token={ csrf_token } /> }/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}


export default App