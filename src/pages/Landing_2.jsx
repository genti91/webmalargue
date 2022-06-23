import HeroLanding2 from '../components/HeroLanding2'
import SectionIcons from '../components/SectionIcons'
import MainDoor from '../components/MainDoor'
import MainTraffic from '../components/MainTraffic'
import MainTruck from '../components/MainTruck'
import FooterShipments from '../components/FooterShipments'
import FooterPaymentMethods from '../components/FooterPaymentMethods'

const Landing_2 = () => {
  let icons = [
    { icon: 'envios', text: 'Hacemos envíos a todo el país.' },
    { icon: 'atencion', text: 'Atención personalizada.' },
    { icon: 'puerta-puerta', text: 'Envíos puerta a puerta.' },
    { icon: 'seguimiento', text: 'Hacé el seguimiento de tus envíos.' },
  ]
  return (
    <>
      <HeroLanding2
        image='assets/repartidor-header.jpg'
        title={[
          'Envía lo que necesites,',
          'Nosotros te lo llevamos. Puerta a puerta, así de simple!',
        ]}
        page={true}
      />
      <SectionIcons icons={icons} />
      <MainDoor
        button={{ background: 'secondary', title: 'Consultá por tu envío' }}
        title={[
          'Envíos Puerta a Puerta.',
          'y luego tu paquete o encomienda llega a la puerta de la dirección que nos hayas indicado.',
        ]}
        image='repartidor-chica'
      />
      <MainTraffic
        button={{ background: 'secondary', title: 'Consultá por tu envío' }}
        background='main-bg-gradient'
      />
      <MainTruck
        button={{ background: 'secondary', title: 'Consultá por tu envío' }}
      />
      <FooterShipments
        image='segui-tu-envio-blue.jpg'
        button={{ background: 'secondary', title: 'Consultá por tu envío' }}
      />
      <FooterPaymentMethods />
      <a
        href='https://wa.me/5491163622778?text=Hola Expreso Malargue, Estoy buscando información sobre encomiendas!'
        className='whatsapp'
        target='_blank'
        rel='noreferrer'
      >
        <i className='fa fa-whatsapp whatsapp-icon'></i>
      </a>
    </>
  )
}
export default Landing_2
