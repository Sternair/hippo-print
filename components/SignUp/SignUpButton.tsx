import React from 'react'
import Link from 'next/link'

import './SignUpButton.scss';

const SignUpButton = () => {
  return (
    <Link href="/login">
      <button className="btn btn-primary btn-sign-up">
        Sign Up for Hippo Print
      </button>
    </Link>
  )
}

export default SignUpButton
