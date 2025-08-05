import { Container, Row } from 'react-bootstrap';


import { blogIMG, blog01, blog02, blog03, blog04, blog05, blog06, blog07, blog08, blog09, blog10, blog11, blog12, blog13, blog14, blog15, blog16 } from '../../assets';
import { BannerHeader } from '../../components/BannerHeader/BannerHeader';
import { BlogCard } from '../../components/Card/Card';

import './Blog.scss'





const Blog = () => {

    return (
        <section
            id='blogTips'
        >
            <BannerHeader lineaPrincipal='Blogtips'
                lineaSecundaria='' // Si no hay linea enviar ''
                image={blogIMG}
            />
            <Container>
                <Row>
                    <div
                        className='col-md-8'
                    >
                        <h2>
                            ¿Cómo embalar los paquetes o productos enviados?
                        </h2>
                        <h4>
                            Un embalaje adecuado ayudará a que tu envío llegue a destino en buenas condiciones. Por eso Malargüe te ofrece aquí algunos tips de cómo hacerlo.
                        </h4>
                    </div>
                </Row>
                <Row>
                    <div
                        className='col-md-3'
                    >
                        <BlogCard img={blog01}
                            text={`Utiliza un <span>envoltorio oscuro</span> para que terceras personas no sepan que hay en su interior.  Para ello coloca tu producto en cajas de cartón, o bien envolvelos en bolsas opacas o film stretch negro.`} />
                    </div>
                    <div
                        className='col-md-3'
                    >
                        <BlogCard img={blog02}
                            text={`Utiliza <span>envoltorios de burbuja</span> para envolver cada producto en la caja, y rellena todos los huecos con bolsas de aire, papel de diario, cartón corrugado u otro material que evite que el producto quede suelto dentro de la caja.`} />
                    </div>
                    <div
                        className='col-md-3'
                    >
                        <BlogCard img={blog03}
                            text={`Utiliza <span>cinta adhesiva</span> de seguridad para sellar la caja y así prevenir que sea vulnerada.  Si la cinta lleva tu marca sería ideal.`} />
                    </div>
                    <div
                        className='col-md-3'
                    >
                        <BlogCard img={blog04}
                            text={`Utiliza <span>etiquetas o cintas de embalar con la leyenda “frágil”</span> para indicar que esa caja debe manipularse con mucho cuidado.`} />
                    </div>
                </Row>
                <Row>
                    <div
                        className='col-md-8'
                    >
                        <h2>
                            Recomendaciones particulares por tipo de producto
                        </h2>
                    </div>
                </Row>
                <Row>
                    <div
                        className='col-md-3'
                    >
                        <BlogCard img={blog05}
                            text={`<span>Sillones:</span> Utiliza un mínimo de 3 capas de cartón corrugado asegurado con film stretch.  En las partes más expuestas como los bordes, coloca esquineros gruesos de goma o telgopor.`} />
                    </div>
                    <div
                        className='col-md-3'
                    >
                        <BlogCard img={blog06}
                            text={`<span>Bazar y hogar:</span> vajilla, vasos, luces, etc.  Se deben colocar dentro de una caja, pero cada una de las piezas debe tener un envoltorio individual, y deben rellenarse los huecos con polietileno de burbujas o cartón. `} />
                    </div>
                    <div
                        className='col-md-3'
                    >
                        <BlogCard img={blog07}
                            text={`<span>Muebles para armar:</span> Despachalos en la caja cerrada de cartón, tal como te los venden.`} />
                    </div>
                    <div
                        className='col-md-3'
                    >
                        <BlogCard img={blog08}
                            text={`<span>Mármol, mamparas, muebles laqueados, heladeras mostrador, otros.</span>  Deben despacharse con esqueleto de madera, sin excepción.`} />
                    </div>
                    <div
                        className='col-md-3'
                    >
                        <BlogCard img={blog09}
                            text={`<span>Colchones:</span> es ideal enviarlos con el envoltorio propio del colchón o sommier con patas y accesorios embalados para proteger de los golpes.  Se recomienda darle un segundo embolsado para prevenir que el envoltorio original pueda tajearse durante el manipuleo.  Si es un producto usado, utiliza los criterios sugeridos para los sillones.`} />
                    </div>
                    <div
                        className='col-md-3'
                    >
                        <BlogCard img={blog10}
                            text={`<span>Productos sanitarios (inodoros, bidets, etc.), campanas de cocina, bachas:</span>  Estos productos deben embalarse en esqueletos de madera o pallets, cubriéndolos con cartón grueso y sujetando los mismos con mínimo 3 vueltas de film.`} />
                    </div>
                    <div
                        className='col-md-3'
                    >
                        <BlogCard img={blog11}
                            text={`<span>Electrónicos:</span> Notebooks, Celulares, consolas de videojuegos, televisores y similares.  Por su alto valor, deben empaquetarse en una caja contenedora con cinta de seguridad, o bien debe ser envueltos con film stretch oscuro para que no pueda verse el contenido de la caja.`} />
                    </div>
                    <div
                        className='col-md-3'
                    >
                        <BlogCard img={blog12}
                            text={`<span>Botellas:</span> Utilizar cajas contenedoras de cartón resistentes con separadores para evitar que se provoquen roturas por la vibración de la mercadería durante el viaje.  La altura de la caja debe permitir cerrar completamente la misma.`} />
                    </div>
                    <div
                        className='col-md-3'
                    >
                        <BlogCard img={blog13}
                            text={`<span>Vajilla, Regalería, plafones, vasos, etc.</span> El embalaje interno debe proteger de manera independiente a cada una de las piezas, estas no deben golpear entre sí en los movimientos y manipulación y traslado. Utilizar Telgopor, polietileno con burbujas o cartón. No utilizar papel como protección interna, ya que este elemento no evita las roturas por manipulación y movimiento de traslado.`} />
                    </div>
                    <div
                        className='col-md-3'
                    >
                        <BlogCard img={blog14}
                            text={`<span>Electrodomésticos:</span> Lo aconsejable es utilizar la caja original y/o cajas similares de cartón duro.  Para evitar el movimiento del producto en la manipulación y traslado en el interior se debe fijar el producto con telgopor.  Se recomienda colocar polietileno con burbujas como envoltorio interno.  Se consideran productos frágiles por lo que la caja se debe cerrar con cinta de seguridad con la identificación de “Frágil” en todos los extremos y juntas de las solapas.`} />
                    </div>
                    <div
                        className='col-md-3'
                    >
                        <BlogCard img={blog15}
                            text={`<span>Puertas, ventanas, portones, etc.</span>  Despachar las mismas en pallets, apiladas una al lado de la otra recubiertas con cartón firme y envueltas en film stretch.  En los casos de que alguna de las piezas esté compuesta por vidrio, debe despacharse por separado en esqueleto de madera.`} />
                    </div>
                    <div
                        className='col-md-3'
                    >
                        <BlogCard img={blog16}
                            text={`<span>Sillas / Mesas / Muebles:</span> Si el producto es de madera, utiliza cartón grueso para proteger las patas con esquineros de cartón. Luego cubrí con al menos 3 capas de film. En el caso que el material sea metal, utiliza telgopor, cartón, polietileno con burbujas, siempre asegurado con mínimo 3 capas de film.`} />
                    </div>
                </Row>
            </Container>

        </section>

    )
};

export default Blog;
 //
//xs lg="2"