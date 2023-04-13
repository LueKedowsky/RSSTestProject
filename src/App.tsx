import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Page404 from './Components/Page404/Page404';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import data from './store/state';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home data={data} />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </>
    );
  }
}

export default App;
