import Header from './Components/Header'
import Nav from './Components/Nav'
import Reviews from './Components/Reviews';
import Categories from './Components/Categories';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Footer from './Components/Footer';

const App=()=> {
  return (
    <section className="App">
          <Header />
          <Nav />
          <Routes>
            <Route path='/' element={<Reviews/>}/>
            <Route path="/reviews" element={<Reviews/>} />
            <Route path='/reviews/:category' element={<Reviews/>}/>
            <Route path="/categories" element={<Categories />} />
          </Routes>
          <Footer/>
        </section>
  );
}

export default App;
