"use client";

import CommonLayout from "@/components/CommanLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AccordianComponent, { AccordianCode } from "@/components/UiComponents/Accordian";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { toast } from "sonner";


const Accordian = () => {
  const [copied, setCopied] = useState(false);
  const [checkboxCodeInstall, setCheckboxCodeInstall] = useState(false);
  const commandInstall = "npx shadcn@latest add accordion";
  const handleCopy = async () => {
    await navigator.clipboard.writeText(AccordianCode);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };
  const handleCommandCode = async () => {
    await navigator.clipboard.writeText(commandInstall);
    setCheckboxCodeInstall(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCheckboxCodeInstall(false), 2000);
  };
  const accordionItems = [
    {
      title: "Product Information",
      className:"flex flex-col gap-4 text-balance",
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
      className:"flex flex-col gap-4 text-balance",
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
      className:"flex flex-col gap-4 text-balance ",
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
      <CommonLayout pageTitle={"Accordian"} />

      <Card>
        <CardHeader>
          <CardTitle></CardTitle>
          <CardDescription>
            A vertically stacked set of interactive headings that each reveal a
            section of content.
          </CardDescription>
          Command
          <div className="relative items-center">
            <Button
              onClick={handleCommandCode}
              className="absolute right-2 top-1 z-10"
              variant="outline"
              size="sm"
            >
              {checkboxCodeInstall ? "Copied!" : "Copy"}
            </Button>
            <SyntaxHighlighter language="javascript">
              {commandInstall}
            </SyntaxHighlighter>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="preview">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview">
              <AccordianComponent items={accordionItems} type="single" className="w-full"/>
            </TabsContent>
            <TabsContent value="code">
              <div className="relative">
                <Button
                  onClick={handleCopy}
                  className="absolute right-2 top-2 z-10"
                  variant="outline"
                  size="sm"
                >
                  {copied ? "Copied!" : "Copy"}
                </Button>
                <SyntaxHighlighter language="javascript">
                  {AccordianCode}
                </SyntaxHighlighter>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
};

export default Accordian;
