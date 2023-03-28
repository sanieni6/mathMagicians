/* eslint-disable import/no-extraneous-dependencies */
import {
  Routes, Route, Link,
} from 'react-router-dom';
import Calc from './components/Calculator';
import Quote from './components/quote';
import Home from './components/home';
import './scss/App.scss';

function App() {
  return (
    <>
      <header className="header">
        <h1 className="header__title">Math Magicians</h1>
        <ul className="header__navBar">
          <li className="Header__navBar-element">
            {' '}
            <Link to="/" className="link-header">Home</Link>
          </li>
          <li className="Header__navBar-element">
            {' '}
            <Link to="/Calc" className="link-header">Calc</Link>
          </li>
          <li className="Header__navBar-element">
            {' '}
            <Link to="/Quote" className="link-header">Quote</Link>
          </li>
        </ul>
      </header>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calc" element={<Calc />} />
          <Route path="/Quote" element={<Quote />} />
        </Routes>

      </div>
      <footer className="footer">
        <h2 className="footer-title">
          Made with love by
          <a href="https://github.com/sanieni6" className="title-link" title="link to github account"> @sanieni6</a>
        </h2>
      </footer>

    </>

  );
}

export default App;
