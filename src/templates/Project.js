import React, { Component } from 'react'

import { Container, Hero } from '../components/Blocks'
import Projects from '../components/Projects'

class Project extends Component {
    render() {
        return (
            <>
                <Container>
                    <Hero 
                        title={this.props.title} 
                        subtitle={this.props.subtitle}
                    />
                    
                </Container>

                <Projects />
            </>
        )
    }
}

export default Project