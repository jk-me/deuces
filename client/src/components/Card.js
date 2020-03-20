import React from 'react'

class Card  extends React.Component{
  click = () =>{
    const {card, clickFn} = this.props
    clickFn(card)
  }
  render(){
    return (
      <span className='cardBorder'>
        <img className={'card '+ this.props.player} src={this.props.card.image} alt='' onClick={this.click}/>
      </span>
    )
  }
}

export default Card
