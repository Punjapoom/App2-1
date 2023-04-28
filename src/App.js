import React from 'react'
//import {Navbar,Header,Footer}  from './func-components'
//import Calendar from './class-component'
//import MsgBox from './func-props'
//import MsgBox2 from './class-props'
import List from './/list-comp'

function App() {
  return (<List />)
  //return [<MyAbout />,<Mylmage />,<MyData />]

  //return [<Navbar />, <p><Calendar /></p>, <Header />,<Footer />]
  //return[<Calendar />]
  /*return(
      <MsgBox 
        text="Useing props in function component"
        color="red"
        bgColor="#ccc"
        fontSize="16pt"
        border="dotted 1px black "
      />
  )*/
 return(
  <MsgBox2
    text="Using prop in function component"
    color="green"
    bgColor="#ccc"
    fontSize="16pt"
    border="dotted 1px black"
    />
 )
}


export default App;