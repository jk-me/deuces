import React from 'react'
import Button from 'react-bootstrap/Button'


class SessionTableRow  extends React.Component{

  click = () =>{
    this.props.deleteSess(this.props.s.id)
  }

  render(){
    return (
      <tr>
        <td>{this.props.s.id}</td>
        <td>{this.props.s.hand1*1}</td>
        <td>{this.props.s.hand2*1}</td>
        <td>{this.props.s.hand1 + this.props.s.hand2}</td>
        <td>
          <Button variant='outline-light' onClick={this.click}>Delete</Button>
        </td>

      </tr>
    )
  }
}

export default SessionTableRow
