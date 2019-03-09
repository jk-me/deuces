import React from 'react'
import Card from './Card'

const SheddedPile = props =>{
  return(
    <div>
      {props.cards.cards.map( card => {return <Card card={card}/>})}
    </div>
  )
}

export default SheddedPile