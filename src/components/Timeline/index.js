import React, {Component} from 'react'
import './Timeline.css'
import Item from './Item/'
import {Button, ListGroup, ListGroupItem, Jumbotron} from 'reactstrap'
import ReactMarkdown from 'react-markdown'

/**
 * Snippet by luisrudge
 * https://bootsnipp.com/snippets/featured/timeline-responsive
 * 
 */
export default class Timeline extends Component {
    futureItems = [
        {title: 'Build something with **WebGL** or a WebGL Framework like **Three or WHS**. My goal has always been to make a fun (Local) Multiplayer game in the browser to play with friends.'},
        {title: 'Learn C/C++ thoroughly to later work with **WebAssembly**.'},
        {title: 'Make something cool with my **esp8266** Wi-Fi module. '},
        {title: 'Get my **spaghetti** recipe on point.'},
        {title: 'Stick to the **motto**. *"Failure is not fatal, but failure to change might be" -John Wooden*'},
    ]
    pastItems = [
        {
            year: '2018',
            title: 'A new start.', 
            description: 'Like every student here in Ghent, my new year started with an exam period. After lying awake for a whole night contemplating my existence and future, I decided that the course I was following wasn\'t for me.',
        },
        {
            year: '2017',
            title: 'Some tinkering but studies come first.', 
            description: 'This year'
        },
        {
            year: '2016',
            title: 'A great year for development.', 
            description: 'O'
        },
        {
            year: '2015',
            title: 'Improving my skills.', 
            description: 'Hack the future'
        },
        {
            year: '2014',
            title: 'Im learndink!', 
            description: ''
        },
        {
            year: '2013',
            title: 'A great year for development', 
            description: 'O'
        },
        {
            year: '2012',
            title: 'A great year for development', 
            description: 'O'
        },
        {
            year: '2011',
            title: 'A great year for development', 
            description: 'O'
        },
        {
            year: '2010',
            title: 'A great year for development', 
            description: 'O'
        },
    ]

    showFuture = true

    render() {

        const {showFuture, pastItems, futureItems} = this


        return (
            <section id='timeline'>
                <div className='container'>
                        <h1>Looking back is good. Looking forward even better!</h1>
                        <br/>
                        <p>Here's a blast from the past, but I'm sure the future has a lot in store for me as well!</p>
                        <br/>

                    {
                        showFuture && (
                            <ListGroup>
                                <ListGroupItem active><h5>Future goals</h5></ListGroupItem>
                                {futureItems.map(f => <ListGroupItem><ReactMarkdown source={f.title} /></ListGroupItem>)}
                            </ListGroup>
                        )
                    }
                    <ul className='timeline'>    

                        {this.pastItems
                            .map((e,i) => <Item {...e} inverted={!!+(i%2)}/>)
                        }
                    </ul>

                </div>
            </section>
        )

    }
}