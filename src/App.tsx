import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { SideBar } from "./components/SideBar/SideBar";
import { TopBar } from "./components/TopBar/TopBar";
import { Conversation } from "./pages/Conversation/Conversation";
import { Profile } from "./pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopBar />
        <div className="container">
          <SideBar />
          <div className="context">
            <Route path="/account/profile" component={Profile} />
            <Route
              path="/conversation/allConversations"
              component={Conversation}
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
