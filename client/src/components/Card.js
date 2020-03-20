import React from 'react'

class Card  extends React.Component{
  click = () =>{
    this.props.clickFn(this.props.card)
  }
  render(){
    const {player, card} = this.props
    return (
      <span className='cardBorder'>
        <img className={'card '+ player} src={card.image} alt='' onClick={this.click}/>
      </span>
    )
  }
}

export default Card
