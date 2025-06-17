import { Accordion as AccordionBoot } from 'react-bootstrap';
import { useState } from 'react';
import './Accordion.scss';

function Accordion({ items }) {
    const [activeKey, setActiveKey] = useState("0");
    return (
        <AccordionBoot
            activeKey={activeKey}
            onSelect={setActiveKey}
        >
            {items.map((item, index) => (
                <AccordionBoot.Item eventKey={String(index)} key={index}>
                    <AccordionBoot.Header>
                        <span className="tw-text-[20px]">
                        {item.header}
                        </span>
                    </AccordionBoot.Header>
                    <AccordionBoot.Body>
                        {item.body}
                    </AccordionBoot.Body>
                </AccordionBoot.Item>
            ))}
        </AccordionBoot>
    );
}

export default Accordion;
