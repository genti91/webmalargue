import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


import { blogIMG, blog01 } from '../../assets';
import { BannerHeader } from '../../components/BannerHeader/BannerHeader';
import { BlogCard } from '../../components/Card/Card';





const Blog = () => {

    return (
        <section
            id='blogTips'
        >
            <BannerHeader   lineaPrincipal =  'Blogtips'
                            lineaSecundaria = '' // Si no hay linea enviar ''
                            image = {blogIMG}
                            
                            />
            <Container>
                <Row>
                    <Col
                        xs={3}
                    >
                        <BlogCard img={blog01} text={`Utiliza un <span>envoltorio oscuro</span> para que terceras personas no sepan que hay en su interior.  Para ello coloca tu producto en cajas de cartón, o bien envolvelos en bolsas opacas o film stretch negro.`}/>
                    </Col>
                </Row>
            </Container>

        </section>
    
        )};

export default Blog;
