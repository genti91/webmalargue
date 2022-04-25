import React from 'react'
import { Card } from 'react-bootstrap'
import parse from 'html-react-parser'

import './Card.scss'

export const BlogCard = ({img, text,}) => {
    return (
        <div
            className='blogCard'
        >
        <Card 
        >
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Text>
                    {parse(text)}
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
}
