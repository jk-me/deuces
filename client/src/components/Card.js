import React from 'react'

class Card  extends React.Component{
  click = () =>{
    console.log('clicked!')
  }
  render(){
    return (
        <img src={this.props.image} alt='' height='100' onClick={this.click}/>
    )
  }
}

export default Card
