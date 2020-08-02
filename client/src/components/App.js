import React from "react";
import {Router, Route, Switch} from "react-router-dom";

import history from "../history";
import Home from "./Home";
import Auth from "./auth/Auth";
import AuthOut from "./auth/AuthOut";
import VideoEdit from "./videos/VideoEdit";
import VideoDelete from "./videos/VideoDelete";
import VideoList from "./videos/VideoList";
import VideoShow from "./videos/VideoShow";
import VideoCreate from "./videos/VideoCreate";
import AuthUp from "./auth/AuthUp";
import Header from "./Header";

const App = () => {
    return (
        <div className='ui container'>
            <Router history={history}>
                <Header />
                <div>
                    <Switch>
                        <Route path='/auth/login' exact component={Auth} />
                        <Route path='/auth/signUp' exact component={AuthUp} />
                        <Route path='/auth/signOut' exact component={AuthOut} />
                        <Route path='/' exact component={Home} />
                        <Route path='/media/v' exact component={VideoList} />
                        <Route path='/media/v/new' exact component={VideoCreate} />
                        <Route path='/media/v/delete/:id' exact component={VideoDelete} />
                        <Route path='/media/v/edit/:id' exact component={VideoEdit} />
                        <Route path='/media/v/:id' exact component={VideoShow} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App;