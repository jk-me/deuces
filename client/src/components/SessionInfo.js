import React from 'react'
import {connect} from 'react-redux'

class SessionInfo extends React.Component{

  renderTableRows = () =>{
    return this.props.sessions.map(s =>{
      return (
        <tr>
          <th>{s.id}</th>
          <th>{s.hand1*1}</th>
          <th>{s.hand2*1}</th>
          <th>{s.hand1 + s.hand2}</th>
        </tr>
      )
    })
  }

  render(){
    return(
      <div>
        <h2>Previous Game Data</h2>
        <table>
          <thead>
          <tr>
            <th>Session</th>
            <th>Player 1 wins</th>
            <th>Player 2 wins</th>
            <th>Total games</th>
          </tr>
          </thead>
          <tbody>
          {this.renderTableRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return{
    sessions: state.sessions
  }
}

export default connect(mapStateToProps)(SessionInfo)
