import { BannerHeader } from '../../components/BannerHeader/BannerHeader'
import headerFaqs from '../../assets/img/header-faqs.png'
import accordionMinus from '../../assets/img/accordion-minus.png'
import accordionPlus from '../../assets/img/accordion-plus.png'
import { Accordion, Stack } from 'react-bootstrap'
import { faqsData } from './faqsData'
import { useState } from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'

const FAQPage = () => {
  const [activeKey, setActiveKey] = useState(0)

  const { width } = useWindowSize()

  return (
    <div>
      <BannerHeader lineaPrincipal='FAQs' image={headerFaqs} />
      <Stack
        style={{
          margin: width > 1440 ? '96px 323px 104px 323px' : '40px 24px',
        }}
      >
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
        <div
          style={{
            marginTop: '40px',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '24px',
          }}
        >
          {faqsData.map(({ question, response }, index) => {
            const active = activeKey === index
            return (
              <Accordion
                defaultActiveKey='0'
                activeKey={activeKey}
                onSelect={setActiveKey}
              >
                <Accordion.Item
                  eventKey={index}
                  style={{ borderRadius: 0, border: 0 }}
                >
                  <div
                    style={{
                      backgroundColor: active ? '#141685' : '#EEEEEE',
                      cursor: 'pointer',
                      padding: '8px 3px 8px 16px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderRadius: 0,
                    }}
                    // onClick={e=>console.log({e})}
                    onClick={() => setActiveKey(index)}
                  >
                    <h2
                      style={{
                        color: active ? '#FFFFFF' : '#141685',
                        width: '80%',
                        textAlign: 'start',
                        fontSize: '16px',
                        fontWeight: 600,
                        margin: 0,
                      }}
                    >
                      {question}
                    </h2>
                    <img
                      style={{
                        marginRight: '8px',
                        width: '20px',
                        height: '20px',
                      }}
                      src={active ? accordionMinus : accordionPlus}
                      alt='plus-menis-button'
                    />
                  </div>
                  <Accordion.Body
                    xs={{ padding: 0 }}
                    style={{
                      marginTop: '32px',
                      paddingInline: 0,
                    }}
                    dangerouslySetInnerHTML={{ __html: response }}
                  ></Accordion.Body>
                </Accordion.Item>
              </Accordion>
            )
          })}
        </div>
      </Stack>
    </div>
  )
}

export default FAQPage
