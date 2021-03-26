import React from 'react'

import {Drop, DropTitle, Span, Form, FormInput, InputText,
InputEmail,InputSub, Textarea, InputSubmit} from './style.js'

import Footer from './../Footer/Footer'

const Contact = () => {
    return (
        <React.Fragment>
         <Drop>
            <div class="container">
                <DropTitle><Span>Drop </Span>Me A line</DropTitle>
                <Form action="">
                    <FormInput>
                        <InputText type="text" placeholder="Your Name" />
                        <InputEmail type="email" placeholder="Your Email" />
                    </FormInput>
                    <InputSub type="text" placeholder="Your Subject" />
                    <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                    <InputSubmit type="submit" value="Send Message"/>
                </Form>
            </div>
        </Drop>

        <Footer/>
        </React.Fragment>
    )
}

export default Contact
