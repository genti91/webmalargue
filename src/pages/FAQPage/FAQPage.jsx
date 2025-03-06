import { BannerHeader } from '../../components/BannerHeader/BannerHeader'
import headerFaqs from '../../assets/img/header-faqs.png'
import { faqsData } from './faqsData'
import { useWindowSize } from '../../hooks/useWindowSize'
import ReusableAccordion from '../../components/Accordion/ReusableAccordion'

const FAQPage = () => {
  const { width } = useWindowSize()

  return (
    <div>
      <BannerHeader lineaPrincipal='FAQs' image={headerFaqs} />
      <div style={{ margin: width > 1440 ? '96px 323px 104px 323px' : '40px 24px', }}>
        <h2
          style={{
            color: '#2F3394',
            fontSize: '32px',
            fontWeight: 600,
            
          }}
        >
          Aquí encontraras las respuestas a las preguntas que nos realizan con
          más frecuencia
        </h2>
        <ReusableAccordion data={faqsData} />

      </div>
    </div>
  )
}

export default FAQPage
