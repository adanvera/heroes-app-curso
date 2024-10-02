import React, { useContext } from 'react'
import { Navbar } from './Navbar'
import { UserContext } from '../12-context/UserContext';

export const MainApp = () => {

  const {
    email,
    name,
  } = useContext(UserContext);


  return (
    <>
        <h1>Main APPPPPPP</h1>
        <Navbar />

        <div>
          <p>{name}</p>
          <p>{email}</p>
        </div>

        <hr />
    </>
  )
}
