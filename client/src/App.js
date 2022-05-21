import './App.css';
import React, {useState} from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import AllPets from './components/AllPets';
import NewPet from './components/NewPet';
import OnePet from './components/OnePet';
import EditPet from './components/EditPet';

function App() {
  const [newPet, setNewPet] = useState(false);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <AllPets newPet = {newPet} ></AllPets>
        </Route>
        <Route exact path={"/new"}>
          <NewPet newPet = {newPet} setNewPet = {setNewPet} ></NewPet>
        </Route>
        <Route exact path={"/:id"}>
          <OnePet></OnePet>
        </Route>
        <Route exact path={"/edit/:id"}>
          <EditPet></EditPet>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;