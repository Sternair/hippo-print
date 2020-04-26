import React, { useEffect, useState } from 'react'
import InnerNav from '../InnerNav/InnerNav'
import SignUpButton from '../SignUp/SignUpButton'
import './Main.scss'
import { Auth } from 'aws-amplify'

import img from "../../public/COVR3D_V2.08_fit.jpg";

const Main = () => {
  const [isLoggedIn, setLogIn] = useState(false)

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(() => setLogIn(true))
      .catch(e => { }) // throws if user is not logged in --> ignore
  })

  return (
    <div className="row">
      <article className="col-8 main-info">
        <h2 className="subtitle">Built for Medical Innovators</h2>
        <div className="app-description">
          <b>HIPPO PRINT</b> is a collaborative community in digital manufacturing. We accelerate the adoption of <b>open
            source</b> digital manufacturing technologies that focus on optimizing the medical supply chain and increase
            efficiency
            and agility, while <b>lowering the carbon footprint</b> and price.
          </div>
        {!isLoggedIn && <SignUpButton />}
      </article>
      <div className="col-4">
        <img src={img} alt="COVR3D" className="img-fluid" />
      </div>
    </div>
  )
}

export default Main
