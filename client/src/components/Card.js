import React from 'react'

class Card  extends React.Component{
  click = () =>{
    this.props.clickFn(this.props.card)
  }
  render(){
    return (
      <span className='cardBorder'>
        <img className={this.props.player} src={this.props.card.image} alt='' height='100' onClick={this.click}/>
      </span>
    )
  }
}

export default Card
