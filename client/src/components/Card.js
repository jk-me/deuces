import React from 'react'

class Card  extends React.Component{
  click = () =>{
    this.props.clickFn(this.props.card)
  }
  render(){
    return (
        <img src={this.props.card.image} alt='' height='100' onClick={this.click}/>
    )
  }
}

export default Card
