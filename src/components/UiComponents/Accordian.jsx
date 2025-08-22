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
          <AccordionTrigger>{item.title}</AccordionTrigger>
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
