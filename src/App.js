import { Switch, Route } from 'react-router-dom'

import Layout from './components/common/Layout'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/common/Contact'

import './css/App.css'

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path ={['/', '/home']} component={Home} />
        <Route exact path ='/portfolio' component={Portfolio} />
        <Route exact path ='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </Layout>
  )
}

export default App
