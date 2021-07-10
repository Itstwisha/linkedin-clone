import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkedIn News</h2> 
                <InfoIcon />
            </div>
            {newsArticle("Another react project", "Top news - 1036 readers")}
            {newsArticle("Next JavaScript Framework", "Top news - 728 readers")}
            {newsArticle("Tesla hits new heights", "Cars & auto - 320 readears")}
            {newsArticle("Bitcoin Breaks $22k", "Crypto - 9999 readers")}
            {newsArticle("Is Redux easy to learn?", "Top news - 4768 readers")}
            {newsArticle("Web Developer/Designer Twisha Sharma", "Top news - 6593 readers")}
        </div>
        
    )
}

export default Widgets;
