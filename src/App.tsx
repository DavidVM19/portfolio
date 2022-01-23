import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Contact from './components/pages/Contact';
import Home from "./components/pages/Home";

const App = () => {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App;
