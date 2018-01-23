import React, {Component} from 'react'
import {Jumbotron} from 'reactstrap'
import './Head.css'

export default class Head extends Component {

    render() {

        return (
            <Jumbotron>
                <h2>Hi, Hello, Welcome!</h2> 
                <h1>I'm Brecht Carnewal.</h1>
                <p>
                    I'm a very passionate software developper. <br/>
                    Ever since I wrote my first few lines of code I knew this was something I'd be doing for the rest of my life, be it as a hobby or a job. <br/>
                    Lately I've mostly been interested in the front- and backend parts of software development for <b>web and mobile</b>. <br/>
                    My favourite tools at this moment would be <b>node.js and React</b>.
                </p>
                <p>
                    This is my portfolio, a place where I keep anything I develop. Future projects or project ideas will be mentioned here.
                </p>
            </Jumbotron>
        )
    }

}