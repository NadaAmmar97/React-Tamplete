import React, {Component} from 'react'
import {Socialmedia, Social, Icon, SocialParagraph, Span, Info2} from './style.js'
import axios from 'axios'


class SocialMedia extends Component {

    state = {
        social:[]
    }

    componentDidMount() {
        axios.get("js/data.json")
        .then(res =>
            { this.setState({social : res.data.social}) }
        )
    }
    render(){

    const {social} = this.state;

    const socialData = social.map((socialItem)=>{
        return(
                <Social item={socialItem.id} key={socialItem.id}>
                    <Icon className={socialItem.icon}></Icon>
                    <SocialParagraph>
                        <Span>{socialItem.title}</Span>
                        <Info2>{socialItem.body}</Info2>
                    </SocialParagraph>
                </Social>

        )
    })

    return (
        <Socialmedia>
            {socialData}
        </Socialmedia>
        
    )
    }
}

export default SocialMedia;
