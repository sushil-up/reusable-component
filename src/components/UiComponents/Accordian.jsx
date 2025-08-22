import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const AccordianComponent = ({ items, type, className }) => {
  return (
    <Accordion
      type={type}
      collapsible
      className={className}
      defaultValue={`item-${items.length > 0 ? 1 : ""}`}
    >
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger className={item?.titleClass}>{item?.title}</AccordionTrigger>
          <AccordionContent className={item?.className}>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordianComponent;

export const AccordianCode = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const AccordianComponent = ({ items, type, className }) => {
  return (
    <Accordion
      type={type}
      collapsible
      className={className}
       defaultValue={\`item-\${items.length > 0 ? 1 : ""}\`}
    >
      {items.map((item, index) => (
        <AccordionItem key={index}  value={\`item-\${index + 1}\`}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent className={item?.className}>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordianComponent;`;


export const AccordianComponentCall =`
"use client";
import AccordianComponent, {
  AccordianCode,
  AccordianComponentCall,
} from "@/components/UiComponents/Accordian";


const Accordian = () => {

  const accordionItems = [
    {
      title: "Product Information",
      className: "flex flex-col gap-4 text-balance",
      content: (
        <>
          <p>
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </>
      ),
    },
    {
      title: "Shipping Details",
      className: "flex flex-col gap-4 text-balance",
      content: (
        <>
          <p>
            We offer worldwide shipping through trusted courier partners.
            Standard delivery takes 3-5 business days, while express shipping
            ensures delivery within 1-2 business days.
          </p>
          <p>
            All orders are carefully packaged and fully insured. Track your
            shipment in real-time through our dedicated tracking portal.
          </p>
        </>
      ),
    },
    {
      title: "Return Policy",
      className: "flex flex-col gap-4 text-balance ",
      content: (
        <>
          <p>
            We stand behind our products with a comprehensive 30-day return
            policy. If you're not completely satisfied, simply return the item
            in its original condition.
          </p>
          <p>
            Our hassle-free return process includes free return shipping and
            full refunds processed within 48 hours of receiving the returned
            item.
          </p>
        </>
      ),
    },
  ];
  return (
    <>

              <AccordianComponent
                items={accordionItems}
                type="single"
                className="w-full"
              />
          
          
    </>
  );
};

export default Accordian;

`