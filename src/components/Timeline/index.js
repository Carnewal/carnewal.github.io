import React, {Component} from 'react'
import './Timeline.css'
import Item from './Item/'
import {Button} from 'react-bootstrap'


export default class Timeline extends Component {

    entries = [
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

    render() {

        return (
            <section id='timeline'>
                <div className='container'>

                    <p>Here's a blast from the past, but I'm sure the <Button>Future</Button> has a lot in store for me as well!</p>

                    <ul className='timeline'>    

                        {this.entries
                            .map((e,i) => <Item {...e} inverted={!!+(i%2)}/>)
                        }
                    </ul>

                </div>
            </section>
        )

    }
}