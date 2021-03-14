import React from 'react'
import './Home.css'
import PlayerList from '../../components/PlayerList/PlayerList'

const Home = () => {
  return (
    <>
      <div className="home">
        <PlayerList />
      </div>
    </>
  )
}

export default Home