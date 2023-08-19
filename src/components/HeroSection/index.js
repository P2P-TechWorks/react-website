import React from 'react'
import { HeroContainer, HeroLeftContainer, HeroInnerContainer, Title, Para, Ps} from './HeroStyle'
import Image1 from '../../images/img.png';


const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title><Para>DIVE INTO PROGRAMMING WITH NO COST <Ps style={{color: '#6677F0'}}>@LOW COST</Ps></Para></Title>
                    </HeroLeftContainer>
                    <img src={Image1} alt="" style={{width: "50%"}}></img>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection