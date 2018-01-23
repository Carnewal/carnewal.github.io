import React, {Component} from 'react'
import {Button} from 'reactstrap'
import ReactMarkdown from 'react-markdown'
import {Link} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

export default class Item extends Component {
    render() {

        const {year, title, description, inverted, icon} = this.props

        return (
            <li className={inverted && 'timeline-inverted'}>
                <div class="timeline-badge">
                    {icon
                        ? <FontAwesome name={icon} />
                        : year.toString().split('').slice(2,4).join('')}
                </div>
                <div class="timeline-panel">
                    <div class="timeline-heading">
                    <h4 class="timeline-title">{year} - {title}</h4>
                    </div>
                    <div class="timeline-body">
                    <p>
                        <ReactMarkdown source={description} />
                    </p>
                    <Link to='/portfolio'>More from {year}</Link>
                    </div>
                </div>
            </li>
        )
    }
}