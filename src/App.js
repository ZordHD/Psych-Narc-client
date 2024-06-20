import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import './fonts/font.css';
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import { check } from './http/userAPI';
import { Spinner } from 'react-bootstrap';

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null);

  useEffect(() => {
    check().then(data => {
        user.setUser(data)
        user.setIsAuth(true)
    }).finally(() => setLoading(false))
}, [])

 if(loading)(
  <Spinner animation='grow'/>
 )
  return (
  <BrowserRouter>
      <AppRouter />
  </BrowserRouter>
  );
});

export default App;