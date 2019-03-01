import React, { Component } from 'react'
import CategoryList from './pages/CategoryList'
import PhotoList from './pages/PhotoList'
import PhotoDetail from './pages/PhotoDetail'
// import ThingsLike from '../ThingsLike.json' not working for some reason
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <>
        <main>
          <header>
            <h1>Things I Like</h1>
            <h2>A Photo gallery by Jason Perry</h2>
          </header>
        </main>
        <section>🏡Home</section>
        <switch>
        <Route exact path="/" component={CategoryList} />
        <Route exact path="/:category" component={PhotoList} />
        <Route path="/:category/:index" component={PhotoDetail} />
        </switch>
        </>
      </Router>
    )
  }
}

export default App