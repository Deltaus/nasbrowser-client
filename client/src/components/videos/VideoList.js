import React from "react";
import requireAuth from "../requireAuth";

class VideoList extends React.Component {
    render() {
        return (
            <div>
                Video List Page
            </div>
        )
    }
}

export default requireAuth(VideoList);