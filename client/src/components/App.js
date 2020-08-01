import React from "react";
import {Router, Route} from "react-router-dom";

import history from "../history";
import Home from "./Home";
import VideoForm from "./videos/VideoForm";
import VideoEdit from "./videos/VideoEdit";
import VideoDelete from "./videos/VideoDelete";
import VideoList from "./videos/VideoList";
import VideoShow from "./videos/VideoShow";
import VideoCreate from "./videos/VideoCreate";

const App = () => {
    return (
        <div className='ui container'>
            <Router history={history}>
                <div>
                    <switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/media/v' exact component={VideoList} />
                        <Route path='/media/v/new' exact component={VideoCreate} />
                        <Route path='/media/v/delete/:id' exact component={VideoDelete} />
                        <Route path='/media/v/edit/:id' exact component={VideoEdit} />
                        <Route path='/media/v/:id' exact component={VideoShow} />
                    </switch>
                </div>
            </Router>
        </div>
    )
}

export default App;