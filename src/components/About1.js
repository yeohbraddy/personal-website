import React from 'react';
import styled from 'styled-components';

import MERN from '../assets/img/mern.jpg'
import python from "../assets/img/python.jpg"

const AboutContainer = styled.div.attrs({
  className: `flex flex-column avenir pt7`
})``

const AboutSection = styled.div.attrs({
  className: `flex flex-column`
})``

const AboutParagraphs = styled.div.attrs({
  className: `flex flex-column flex-wrap-ns`
})``

const TechCards = styled.div.attrs({
  className: `flex flex-wrap`
})``

const Section = styled.div.attrs({
  className: `dtc v-mid pl3`
})``

const Subtitle = styled.div.attrs({
  className: `tc fw2 f1 pt5 pb3 bb w-100 mb5 f2 tracked`
})``

const Paragraph = styled.p.attrs({
  className: `w-100 pt4 lh-copy fw4 dark-gray f5 f4-ns tj tc-ns center`
})``

const TechParagraph = styled.p.attrs({
  className: `tc center lh-copy fw4 f4 dark-gray tracked pt6 pb4`
})``

const Card = styled.div.attrs({
  className: `db center mw5 tc black grow`
})``

const CardImage = styled.img.attrs({
  className: `db ba b--black-10`,
  src: props => props.url
})``

const CardDetails = styled.dl.attrs({
  className: `mt2 f6 lh-copy pb5 `
})``

const CardDT = styled.dt.attrs({
  className: `f4 tracked fw5 bb`
})``

const CardDD = styled.dd.attrs({
  className: `tc center f5 f4-ns fw3`
})``

const FavList = styled.dl.attrs({
  className: `lh-title pa2 mt0 center tc`
})``

const FavTitle = styled.dt.attrs({
  className: `f4 b`
})``

const FavData = styled.dd.attrs({
  className: `f4 ml0`
})``



/* Need to fix media queries here */

export default class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          topics: [
            {
              title: "Web Development",
              img: MERN,
              data: [
                "React/Redux",
                "Express.js",
                "RESTful APIs",
                "Node.js",
                "PostgresSQL",
                "SAPUI5",
                "Session Management"
              ]
            },
            {
              title: "Programming Languages",
              img: python,
              data: [
                "C",
                "Java",
                "Python",
                "Ruby",
                "JavaScript",
                "BASH",
                "SQL"
              ]
            },
          ],
          aboutMe: [
            {
              title: "Age",
              data: "21"
            },
            {
              title: "Starsign",
              data: "Leo"
            },
            {
              title: "Nationality",
              data: "Malaysian & Ireland"
            },
            {
              title: "Hobbies",
              data: "Programming, Video Games, Music, Eating, Photography, Sports"
            },
            {
              title: "Favorite Artists",
              data: "Khalid, Mokita, Rich Brian"
            }, 
            {
              title: "Favorite Food",
              data: "Fried Chicken"
            },
            {
              title: "Favorite Drinks",
              data: "Taro bubble tea, green tea, water"
            }
          ]
        }
    }

    render() {
        return (
            <AboutContainer>

              <Subtitle> 
                About me 
              </Subtitle>

              <AboutSection>
                <AboutParagraphs>
                  
                  <div>
                    {
                      this.state.aboutMe.map((entry, i) => {
                        return (
                          <FavList>
                            <FavTitle>
                              {entry.title}
                            </FavTitle>
                            <FavData>
                              {entry.data}
                            </FavData>
                          </FavList>
                        )
                      })
                    }
                  </div>

                  <Paragraph>
                    I'm a UCD Computer Science student. Currently in my penultimate year, expecting to graduate in September 2021.
                  </Paragraph>

                  <Paragraph>
                    Goal is to continually improve as a software engineer and change people's life
                  </Paragraph>

                  <Paragraph>
                    Love learning
                    <br/>
                    Enthusiastic to solve complex challenges.
                    <br/>
                    Passion for eating and cooking.
                    <br/>
                    Self-taught photographer
                    <br/>
                    Enjoy playing basketball and table tennis
                  </Paragraph>
                </AboutParagraphs>

                <TechParagraph>
                  Technologies I've been working on recently
                </TechParagraph>

                <TechCards>
                  {
                    this.state.topics.map((topic, i) => {
                      return (
                        <Card>
                          <CardImage
                            url={topic.img}
                          />
                            <CardDetails>
                              <CardDT> 
                                {topic.title}
                              </CardDT>
                                {
                                  topic.data.map((entry, i) => {
                                    return (
                                      <CardDD>
                                        {entry}
                                      </CardDD>
                                    )
                                  })
                                }
                            </CardDetails>
                        </Card>
                      )
                    })
                  }
                </TechCards>
              </AboutSection>
            </AboutContainer>
        )
    }
}