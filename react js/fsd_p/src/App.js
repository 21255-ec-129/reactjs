
//import logo from './logo.svg';
import './App.css';
import Home from './home.js';
import About from './about';
import {trainee,a} from './person';
import Img from './img';
import Ser from './sevices';
import Con from './contacts';
import Menu from './menu';
// import St from './student';
import Trainee from './trainees';
import Eve from './events';
import Events1 from './events1';
import Task from './task1';
import IncrementDecrementButton from './task2';
import Hook from './hooks';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Array from './task3';
import Form from './form';
import Form1 from './forml';
import Newproducts from './Newproducts';
import Products1 from './products';
import Testeffect from './texteffect';
import Categories from './categiries';
import Productinfo from './productsinfo';
import Newproduct from './catgiry2';

function App(){
  console.log(trainee)
  console.log(a)
  return(
    <div className='App'>
      {/* <Home />
      <About />
      <Img/> */}
      <BrowserRouter> 
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Ser name='gayathri' id='2'/>}/>
        <Route path="/contacts" element={<Con/>}/>
        {/* <Route path="/student" element={<St/>}/>
        <Route path="/student" element={<St name='gaya3' rollno='153'/>}/> */}
        <Route path="/trainees" element={<Trainee/>}/>
        <Route path="/events" element={<Eve/>}/>
        <Route path="/events1" element={<Events1/>}/>
        <Route path="/task1" element={<Task/>}/>
        <Route path="/task2" element={<IncrementDecrementButton/>}/>
        <Route path="/hooks" element={<Hook/>}/>
        <Route path="/task3" element={<Array/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/forml" element={<Form1/>}/>
        <Route path="/Newproducts" element={< Newproducts/>}/>
        <Route path="/products" element={<Products1/>}/>
        <Route path="/texteffect" element={<  Testeffect/>}/>
         <Route path="/categiries" element={<  Categories/>}/> 
         <Route path="/productinfo" element={<  Productinfo/>}/> 
         <Route path="/catgiry2" element={<  Newproduct/>}/> 
         <Route path ="productinfo/:id" element ={<Productinfo/>}/>


        </Routes>
        </BrowserRouter>
      <trainee />
    </div>
  );
}
export default App;


