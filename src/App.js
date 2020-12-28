import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Beranda from './pages/Beranda/Beranda';
import Kontak from './pages/Kontak/Kontak';
import Lisan from './pages/Lisan/Lisan';
import Dokumen from './pages/Dokumen/Dokumen';
import Legalisasi from './pages/Legalisasi/Legalisasi';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Beranda} exact />
        <Route path='/lisan' component={Lisan} exact />
        <Route path='/dokumen' component={Dokumen} exact />
        <Route path='/legalisasi' component={Legalisasi} exact />
        <Route path='/kontak' component={Kontak} exact />
      </Switch>
    </Router>
  );
}

export default App;
