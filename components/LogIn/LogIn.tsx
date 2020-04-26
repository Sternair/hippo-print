import React from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react'

const LogIn: React.FC = () => {
  return (
    <div>
      Login
    </div>
  )
}

export default withAuthenticator(LogIn, {
  usernameAlias: 'email',

})
