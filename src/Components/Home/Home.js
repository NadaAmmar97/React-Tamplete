import React from 'react'
import './style.js'

import {HomeSection, HomeTitle, HomeDesc,Span, HomeBtn, HomeInformation, HomeInfo } from './style'

const Home = () => {
    return (
        <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Nada Ahmed Mohamed</HomeTitle>
                    <HomeInfo>Full Stack Web Developer </HomeInfo>
                    <HomeDesc>
                        Iam a professional <Span>Web Developer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
    )
}

export default Home
