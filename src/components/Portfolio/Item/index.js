import React, {Component} from 'react'
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row, Col } from 'reactstrap';
import './Item.css'
import FontAwesome from 'react-fontawesome'
import ReactMarkdown from 'react-markdown'

export default class Item extends Component {
    render() {
        const {year, title, subtitle, description, img, links} = this.props
        return (

            <Col sm="12" md="6" lg="4">
            <Card>
                <CardBody>
                    <CardTitle>{title} <small className='text-muted'>({year})</small></CardTitle>
                    <CardSubtitle>{subtitle}</CardSubtitle>
                </CardBody>

                <img width="100%" src={img} alt={`${title} image`} />

                <CardBody>
                    <CardText>
                        <ReactMarkdown source={description} />
                    </CardText>
                    {links && links.map((l, i) => (
                        <CardLink target='blank' href={l.link}>
                            <FontAwesome
                            name={l.icon}
                            size='2x'
                            />
                        </CardLink>
                    ))}
                </CardBody>
            </Card>
        </Col>


        )
    }
} 