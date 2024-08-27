import React from 'react'
import { MenuUsuarios } from './MenuUsuarios';
import {Login} from './Login';


export const Home = (props) => {

  return (
    <>
      <div className="card">
            <MenuUsuarios/>
            <Login></Login>
        </div>
     
    </>
  )
}


