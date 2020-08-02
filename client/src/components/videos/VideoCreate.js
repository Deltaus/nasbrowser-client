import React from "react";
import requireAuth from "../requireAuth";
import VideoForm from "./VideoForm";

class VideoCreate extends React.Component {
    render() {
        return (
            <div>
                Video Create Page
            </div>
        )
    }
}

export default requireAuth(VideoCreate);