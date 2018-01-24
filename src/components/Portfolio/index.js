import React, {Component} from 'react'
import { Row, Button } from 'reactstrap';
import Item from './Item'
import './Portfolio.css'

/**
 * Searches for text in bold inside an array of strings.
 * @param {*String[]} items An array of markdown strings
 * Returns an [] array of unique bolded text.
 */
const findStringBetween = (items, delim) => {
    return Array.from(items.reduce((acc, item) => {
        const split = item.split(delim)
        for(let i = 1; i < split.length; i=i+2) {
            acc.add(split[i])
        }
        return acc
    }, new Set()))
}

export default class Portfolio extends Component {

    state = {
        tags: [],
        tagFilter: []
    }

    handleTagClick = (id) => () => {
        const index = this.state.tagFilter.indexOf(id)
        const {tagFilter} = this.state
        this.setState({
            ...this.state,
            tagFilter: index >= 0
                ? [...tagFilter.slice(0, index), ...tagFilter.slice(index + 1, )]
                : [...tagFilter, id]
        })
    }

    componentWillMount() {
        const {portfolio} = this.props
        this.setState({
            ...this.state,
            tags: findStringBetween(portfolio.map(p => p.description), '**').sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        })
    }

    render() {
        const {portfolio} = this.props
        const {tags, tagFilter} = this.state

        let filteredTags = tags.filter((t,i) => tagFilter.includes(i))
        
        let filteredPortfolio = filteredTags.length > 0 
        ?  portfolio.filter(
            p => filteredTags.some(
                ft => p.description && p.description.includes(ft)))
        :  portfolio
        
        return (
            <section id='portfolio'>
                <div className='container'>
                <h1>My portfolio.</h1>
                <br/>
                <p>These are the creations I'm proud of and some of the things that helped me accomplish them.</p>
                <h4>
                    {tags.map(
                        (t, i) => (
                            <span><Button 
                                    color='primary'
                                    outline={!tagFilter.includes(i)} 
                                    className='tagbtn' 
                                    onClick={this.handleTagClick(i)}>
                                    {t} 
                                </Button> </span>
                        )
                    )}
                </h4>
                <br/>
                    <Row>
                        {filteredPortfolio.map((p,i) => <Item key={i} {...p} />)}
                    </Row>
                </div>
            </section>
        )
    }
}