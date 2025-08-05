import accordionMinus from '../../assets/img/accordion-minus.png'
import accordionPlus from '../../assets/img/accordion-plus.png'
import { Accordion, Stack } from 'react-bootstrap'
// import { faqsData } from './faqsData'
import { useState } from 'react'

const ReusableAccordion = ({ data }) => {
  const [activeKey, setActiveKey] = useState(0);

  return (
    <Stack>
      <div
        style={{
          marginTop: '40px',
          display: 'flex',
          flexDirection: 'column',
          rowGap: '24px',
        }}
      >
        {data.map(({ question, response, image, alt }, index) => {
          const active = activeKey === index
          return (
            <Accordion
              key={index}
              defaultActiveKey='0'
              activeKey={activeKey}
              onSelect={setActiveKey}
            >
              <Accordion.Item
                eventKey={index}
                style={{ borderRadius: 0, border: 0, cursor: 'pointer' }}
                onClick={() => setActiveKey(activeKey === index ? null : index)}
              >
                <div
                  style={{
                    backgroundColor: active ? '#141685' : '#EEEEEE',

                    padding: '8px 3px 8px 16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderRadius: 0,
                  }}
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
                    alt='plus-minus-button'
                  />
                </div>
                <Accordion.Body
                  xs={{ padding: 0 }}
                  style={{
                    marginTop: '32px',
                    paddingInline: 0,
                    width: '100%',
                  }}
                >
                  <div dangerouslySetInnerHTML={{ __html: response }} />
                  {image && (
                    <img
                      src={image}
                      alt={alt}
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                        display: 'block',
                        marginTop: '16px',
                      }}
                    />
                  )}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          )
        })}
      </div>
    </Stack>
  )
}

export default ReusableAccordion
