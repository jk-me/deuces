import React from 'react'
import {connect} from 'react-redux'
import {fetchGames} from '../actions/gameActions'
import Table from 'react-bootstrap/Table'

class SessionInfo extends React.Component{

  componentDidMount(){
    this.props.fetchGames()
  }

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
      <div className='App'>
        <h2>Previous Game Data</h2>
        <Table bordered striped variant='dark'>
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
        </Table>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return{
    sessions: state.sessions
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    fetchGames: () => dispatch(fetchGames()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionInfo)
