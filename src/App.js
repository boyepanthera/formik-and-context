import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginPage from './pages/Login.pages'
import DetailPage from './pages/Detail.pages'
import DetailPage2 from './pages/Detail2.pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/detail'>
          <DetailPage />
        </Route>
        <Route path='/detail-2'>
          <DetailPage2 />
        </Route>
        <Route path='/'>
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
