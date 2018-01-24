import React, {Component} from 'react'
import './Timeline.css'
import Item from './Item/'
import {Button, ListGroup, ListGroupItem, Collapse} from 'reactstrap'
import ReactMarkdown from 'react-markdown'

/**
 * Snippet by luisrudge
 * https://bootsnipp.com/snippets/featured/timeline-responsive
 * 
 */
export default class Timeline extends Component {

    render() {

        const {isTimelineFutureOpen, toggleTimelineFuture, pastItems, futureItems} = this.props


        return (
            <section id='timeline'>
                <div className='container'>
                        <h1>Looking back is good. Looking forward even better!</h1>
                        <br/>
                        <p>Here's a blast from the past, but I'm sure the future has a lot in store for me as well!</p>
                        <br/>
                        <ListGroup>
                            <ListGroupItem onClick={toggleTimelineFuture} active><h5>Future goals {!isTimelineFutureOpen && '(click to expand)' || '(click to close)'}</h5></ListGroupItem>
                            
                            
                            <Collapse isOpen={isTimelineFutureOpen}>
                                {futureItems.map((f,i) => <ListGroupItem key={i}><ReactMarkdown source={f.title} /></ListGroupItem>)}
                            </Collapse>
                        </ListGroup>
                    <ul className='timeline'>    
                        {pastItems
                            .map((e,i) => <Item {...e} inverted={!!+(i%2)}/>)
                        }
                    </ul>

                </div>
            </section>
        )

    }
}