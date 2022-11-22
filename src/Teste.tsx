import React from 'react';
import { Context } from './context'

export default function Teste(){
  const { theme } = React.useContext(Context);
  return(
    <div style={{width: '100%', height: '100%', backgroundColor: theme === 'light' ? '#c8c8c7' :'#000'}}>
        <h1> React</h1> 
    </div>  

  )
}