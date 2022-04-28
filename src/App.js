import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import SingleCocktail from './pages/SingleCocktail';
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='cocktail/:id' element={<SingleCocktail></SingleCocktail>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </Router>
  )
}
export default App;
