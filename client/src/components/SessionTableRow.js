import React from 'react'

class SessionTableRow  extends React.Component{
  
  render(){
    return (
      <tr>
        <td>{this.props.s.id}</td>
        <td>{this.props.s.hand1*1}</td>
        <td>{this.props.s.hand2*1}</td>
        <td>{this.props.s.hand1 + this.props.s.hand2}</td>

      </tr>
    )
  }
}

export default SessionTableRow
