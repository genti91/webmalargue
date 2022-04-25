import React from 'react'
import { Card } from 'react-bootstrap'
import parse from 'html-react-parser'

import './Card.scss'

export const BlogCard = ({img, text,}) => {
    return (
        <Card 
            className='blogCard'
        >
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Text>
                    {parse(text)}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
