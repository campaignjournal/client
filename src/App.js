import React from "react";
import { Switch, Route } from "react-router-dom"

import LoginForm from "./components/LoginForm"
import Register from "./components/Register"
import Dashboard from "./components/Dashboard"
import CampaignInfo from "./components/CampaignInfo"
import CampaignAdd from "./components/CampaignAdd"
import CampaignEdit from "./components/CampaignEdit"

import "./App.css"

function App() {
  return (
    <div className="App">
      <Switch>

        <Route path="/add-campaign/:id" >
          <CampaignAdd />
        </Route>

        <Route path="/campaign/:id/edit" >
          <CampaignEdit />
        </Route>

        <Route path="/campaign/:id" >
          <CampaignInfo />
        </Route>

        <Route path="/home/:id" >
          <Dashboard />
        </Route>

        <Route path="/register" >
          <Register />
        </Route>

        <Route exact path="/" >
          <LoginForm />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
