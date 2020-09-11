import React from 'react';
import './Resume.css';
import resume from './resume91020.pdf';
import Nav from '../Nav/Nav';

export default function Resume () {
    return (
        <>
        <Nav />
        <div className="resume-page">
            <iframe height="100%" width="100%" src={resume} title="Ross MacDonald Resume">
            </iframe>
        </div>
        </>

    )
}