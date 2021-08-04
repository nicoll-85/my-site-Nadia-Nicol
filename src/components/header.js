import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

// Initial values
class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }
// Listening events
  componentDidMount() {
    window.addEventListener('scroll', this.handleScrolled)
  }
  // Apply values
  handleScrolled = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop >50) {
      this.setState ({ hasScrolled: true})
    } else {
      this.setState({ hasScrolled: false })
    }
  }
  render() {
    return(
      <div className={this.state.hasScrolled ?' Header HeaderScrolled': 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../images/logo-tnt_1.svg')}width="150"/></Link>
          <Link to="/courses">Features</Link>
          <Link to="/Downloads">Integrations</Link>
          <Link to="/Workshops">Resources</Link>
          <Link to="/Buy"><button>Try it for free!</button></Link> 

        </div>
      </div>
    )
  }
}

export default Header
