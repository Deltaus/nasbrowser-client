import React from "react";
import requireAuth from "../requireAuth";

class VideoShow extends React.Component {
    render() {
        return (
            <div>
                Video show Page
            </div>
        )
    }
}

export default requireAuth(VideoShow);