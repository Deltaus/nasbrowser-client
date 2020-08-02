import React from "react";
import requireAuth from "../requireAuth";
import VideoForm from "./VideoForm";

class VideoEdit extends React.Component {
    render() {
        return (
            <div>
                Video Edit Page
            </div>
        )
    }
}

export default requireAuth(VideoEdit);