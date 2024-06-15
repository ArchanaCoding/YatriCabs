import React from 'react';
import './label.css'; 

const Label = () => {
    return (
        <label className="footer">
            <div className='price'>
            <h3>No over-pricing</h3>
            <p>Cheapest costs | Competitive prices</p>
            </div>
    
            <div>
            <h3>Download Now!</h3>
            <div className="app-links">
                <a href="https://play.google.com/store/apps/details?id=net.openkochi.yatri&hl=en_AU">
                <img className="google-play-logo" src="/img/google.png" alt="Google Play" />
                </a>

                <a href="https://play.google.com/store/apps/details?id=net.openkochi.yatri&hl=en_AU">
                <img className="app-play-logo" src="/img/appStore.png" alt="App Store" /></a>
            </div>
            </div>
            <div>
            <h3>No return fare</h3>
            <p>One-Way cab fare | Nohidden charges</p>
            </div>
        </label>
    );
};

export default Label;
