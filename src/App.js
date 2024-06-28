import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Shop from './pages/Shop';
function App() {
  return (
    <div >
      <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Shop/>}/>
    <Route path='/Men' element={<shopcategory category="Men"/>}/>
    <Route path='/Women' element={<shopcategory category="Women"/>}/>
    <Route path='/Kids' element={<shopcategory category="Kids"/>}/>
    <Route path='/product' element={<product/>}/>
    <Route path=':productId' element={<product/>}/>
    <Route path=':productId' element={<product/>}/>
   <Route/> 
   <Route path='/cart' element={<cart/>}/>
   <Route path='/login' element={<login/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
