import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TopRaiting} from "./CarType";




function App() {
  const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'},
    {manufacturer:'Audi', model:'rs6'}
  ]
  return (
    <div className="App">
     <TopRaiting modelCar={"Model type"} name={"Best cars"} facture={topCars} model={topCars}/>
    </div>
  );
}

export default App;
