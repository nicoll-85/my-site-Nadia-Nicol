import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell'
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 31px;
  text-transform:uppercase;
  color: #94A4BA;
  text-align:center;
`
const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-column-gap:20px;
  padding: 0 20px;

  @media (max-width:800px) {
    grid-template-columns: repeat(1,1fr);
  }


`

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>The perfect way to ask!</h1>
        <p>The easiest way to generate leads, make it easy to generate registration forms, application forms, surveys and contact forms.</p>
        <Link to="/page-2/">Try it!</Link>
        <div className="Logos">
          <img src={require('../images/logo-tnt_1.svg')} width="400" margin="0 auto"/>
        </div>
        <Wave/>
      </div>
    </div>
    <div className="Cards">
      <h2>One tool - Endless opportunities</h2>
      <div className="CardGroup">
        <Card 
          title="Designed to impress"
          text="In ut quam vitae odio lacinia tincidunt. Quisque libero metus, condimentum nec."
          image={require('../images/bg-typeform.svg')}
        />
        <Card 
          title="It's all about results"
          text="In ut quam vitae odio lacinia tincidunt. Quisque libero metus, condimentum nec."
          image={require('../images/bg-typeform.svg')}
        />
        <Card 
          title="Save your time"
          text="In ut quam vitae odio lacinia tincidunt. Quisque libero metus, condimentum nec."
          image={require('../images/bg-typeform.svg')}
        />
      </div>
    </div>
     <Section
      image={require('../images/bg-typeform.svg')}
      logo={require('../images/logo-tnt-icon.svg')}
      title="How it works!"
      text="With TNT-forms you can create quizzes, polls & surveys in only a few minutes. Publish them and they will look amazing on all sorts of screens. Engage your users in real time!."
    /> 
     
    <SectionCaption>Join us!</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell =>(
        <Cell
          title={cell.title}
          image={cell.image}
        />
      ))} 
    </SectionCellGroup>
  </div>
)

export default IndexPage




