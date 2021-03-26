/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {ProfileSkills, ProfileSection, ProfileList, ProfileItem, Span, SpanWeb, SkillsSection, SkillsDesc, Bar, Title, Percantage, Parent, ParentSpan, ParentSp1, ParentSp2, ParentSp3, ProfileTitle, SkillsTitle,TitleSpan} from './style.js'

function Profile() {

    const [skills, setSkills] = useState([]);

    useEffect(()=>{
        axios.get("js/data.json").then(res => {setSkills(res.data.profile)})
    }, []);

    const profileSkills = skills.map((skillsItem)=>{
        return(
                    <Bar key={skillsItem.id}>
                        <Title>{skillsItem.title}</Title>
                        <Percantage>{skillsItem.persantage}</Percantage>
                        <Parent>
                            <ParentSp1></ParentSp1>
                        </Parent>
                    </Bar>

        )
    })

    return (
        <ProfileSkills>
            <div class="container">
                <ProfileSection>
                    <ProfileTitle><TitleSpan>My </TitleSpan>Profile</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <Span>Name</Span>
                            Nada Ahmed
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Birthday</Span>
                            25/2/1997
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Address</Span>
                            Fayoum
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Phone</Span>
                            01028211584
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Email</Span>
                            na1351@fayoum.edu.eg
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Website</Span>
                            <SpanWeb>www.google.com</SpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </ProfileSection>
                
                <SkillsSection>
                    <SkillsTitle>Some <TitleSpan>skills</TitleSpan></SkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    
                    {profileSkills}
                </SkillsSection>
                
            </div>
        </ProfileSkills>
    )
}

export default Profile
