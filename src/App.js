import Header from './Components/Header';
import Nav from './Components/Nav';
import Reviews from './Components/Reviews';
import Categories from './Components/Categories';
import './App.css'
import { useState } from 'react';
import UserContext from '../src/util/Contexts';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Users from './Components/Users';
import Errors from './Components/Errors';

const App = () => {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{ user, setUser }}>
    <section className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Reviews />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/:category" element={<Reviews />} />
        <Route path="/categories" element={<Categories />} />
        <Route path='/users' element={<Users/>}/>
        <Route path='*' element={<Errors/>}/>
      </Routes>
      <Footer />
    </section>
    </UserContext.Provider>
  );
};

export default App;
