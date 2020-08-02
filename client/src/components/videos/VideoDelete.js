import React from "react";
import requireAuth from "../requireAuth";

class VideoDelete extends React.Component {
    render() {
        return (
            <div>
                Video Delete Page
            </div>
        )
    }
}

export default requireAuth(VideoDelete);