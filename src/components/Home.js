import React from 'react';
import styled from 'styled-components';

import Footer from './Footer';

const Article = styled.article.attrs({
    className: `avenir`
})``

const Display = styled.div.attrs({
    className: `vh-100 dt w-100 tc bg-white dark-gray cover`
})``

const Text = styled.div.attrs({
    className: `dtc v-mid`
})``

const Surname = styled.h3.attrs({
    className: `fw3 f3 f2-ns gray`
})``

const Forename = styled.h1.attrs({
    className: `f-headline fw3 f1 f1-ns gray tracked`
})``

const TitlesParagraph = styled.p.attrs({
    className: `fw3 gray f6 f3-ns center`
})``

export default class Home extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {

        }
    }

    render() {
        return (
            <Article>
                <Display>
                    <Text>
                        <Surname>Yeoh, I'm</Surname>
                        <Forename>Braddy</Forename>
                        <TitlesParagraph>
                            UCD Computer Science<br/>Software Engineer<br/>Foodie<br/>Photographer
                        </TitlesParagraph>
                        <Footer/>
                    </Text>
                </Display>
            </Article>
        )
    }
}