import React from 'react'
import Navbar from './components/Navbar';
// import Users from './pages/Users';
// import Home from './pages/Home';
// import Movies from './pages/Movies';
import routes from './routes';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Routes>
          {routes.map(route => {
            return (
              <Route
                key={route.path}
                path={route.path}
                exact
                element={<route.component />}>
              </Route>
            )
          })}
        </Routes>
      </div>
    </Router>
  )
}
export default App;



