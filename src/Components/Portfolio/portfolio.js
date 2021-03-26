import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {PortfolioSection, PortfolioTitle, PortfolioList, PortofolioItem, Span, ImageRuber, Overlay,Image, OverlaySpan} from './style'

function Portfolio() {

    const [images, setImsges]= useState([]);

    useEffect(()=>{
        axios.get("js/data.json").then(res => {setImsges(res.data.portfolio)})
    }, []);

    const PortfolioImages = images.map((imageItem)=>{
        return(
            <ImageRuber key={imageItem.id}>
                    <Image src={imageItem.image}  alt="" />
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </ImageRuber>
        )
    }) 

    return (
        <PortfolioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortofolioItem active>All</PortofolioItem>
                <PortofolioItem>HTML</PortofolioItem>
                <PortofolioItem>Photoshop</PortofolioItem>
                <PortofolioItem>Wordpress</PortofolioItem>
                <PortofolioItem>Mobile</PortofolioItem>
            </PortfolioList>
            
            <div className='box'>
                
                {PortfolioImages}
                
                
            </div>
        
        </PortfolioSection>
    )
}

export default Portfolio;