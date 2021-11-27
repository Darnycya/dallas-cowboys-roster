import React from 'react'
import './App.css'
import Players from './screens/Players/Players'
import PlayerCreate from './screens/PlayerCreate/PlayerCreate'
import PlayerEdit from './screens/PlayerEdit/PlayerEdit'
import PlayerDetail from './screens/PlayerDetail/PlayerDetail'
import { Route } from 'react-router-dom'
import Logo from './components/Logo/Logo'

const App = () => {
  return (
    <div className="app">
      <Route path="/" component={Logo}/>
      <Route exact path="/" component={Players} />
        <Route exact path="/players" component={Players} />
        <Route exact path="/add-player" component={PlayerCreate} />
        <Route exact path="/players/:id/edit" component={PlayerEdit} />
        <Route exact path="/players/:id" component={PlayerDetail} />
      
    </div>
  )
}

export default App