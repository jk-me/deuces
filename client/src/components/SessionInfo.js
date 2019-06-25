import React from 'react'
import {connect} from 'react-redux'
import {fetchGames, deleteSess} from '../actions/gameActions'
import Table from 'react-bootstrap/Table'
import SessionTableRow from './SessionTableRow'

class SessionInfo extends React.Component{

  componentDidMount(){
    this.props.fetchGames()
  }

  renderTableRows = () =>{
    this.props.sessions.sort((a,b) =>{ return a.id - b.id})
    return this.props.sessions.map(s =>{
      return (
        <SessionTableRow s={s} deleteSess={this.props.deleteSess}/>
      )
    })
    // return this.props.sessions.map(s =>{
    //   return (
    //     <SessionTableRow s={s} deleteSess={this.props.deleteSess}/>
    //   )
    // })
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
            <th>Remove session</th>
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
    deleteSess: (id) => dispatch(deleteSess(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionInfo)
