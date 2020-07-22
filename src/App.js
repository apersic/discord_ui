import React from 'react';
import './App.scss';
import Home from './components/Home'
import ServersConstant from './components/ServersConstant'
import Servers from './components/Servers'
import ChannelsNav from './components/ChannelsNav'
import ChannelsToolbar from './components/ChannelsToolbar'
import MainContentToolbar from './components/MainContentToolbar'
import {Switch, Route} from 'react-router-dom';
import Online from './components/Online'
import Pending from './components/Pending'
import Blocked from './components/Blocked'
import All from './components/All'

const App = () => {
  return (
    <div className="outerWrap">
      <div className="App">
        <div className="serverSidebar">
          <Home />
          <div className="lineSeparator"></div>
          {/*TO DO add json mapping to servers component*/}
          <Servers />
          <ServersConstant />
        </div>
        <div className="mainContentWrapper">
          <div className="channelsSidebar">
            {/*TO DO add json mapping to private channels component*/}
            <ChannelsNav />
            <ChannelsToolbar />
          </div>
          <div className="mainContent">
            <MainContentToolbar />
            <div className="pageContent">
              <div className="displayedPage">
                <Switch>
                  <Route path="/" exact component={Online}></Route>
                  <Route path="/all" component={All}></Route>
                  <Route path="/pending" component={Pending}></Route>
                  <Route path="/blocked" component={Blocked}></Route>
                  <Route path="/add-friend">Add a friend</Route>
                </Switch>
              </div>
              <div className="activeUsers">
                <h2>ACTIVE NOW</h2>
                <div className="activeContainer">
                  <h2>It's quiet for now...</h2>
                  <span>When a friend starts and activity-like playing a game or hanging out on voice-we'll show it here!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
