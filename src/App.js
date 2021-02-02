import './App.css'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepages/homePage'

class App extends React.Component {
    constructor() {
        super()

        this.state = {}
    }
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>
            </>
        )
    }
}

export default App
