import React from 'react';
import './AccessDenied.css'; // Ensure you have the corresponding CSS file

function AccessDenied() {
    return (
        <div className="access-denied">
            <h1>Access Denied</h1>
            <p>You do not have permission to access this page.</p>
            <video autoPlay loop >
                <source src="/AccessDenied.mp4" type="video/mp4" />

                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default AccessDenied;

// https://www.bing.com/videos/riverview/relatedvideo?q=access%20denied%20jurassic%20park&mid=A0510C6BD310AEC60766A0510C6BD310AEC60766&ajaxhist=0