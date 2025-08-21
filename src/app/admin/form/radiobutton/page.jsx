"use client";
import { radioButtonCode, radioButtonComponent } from "@/components/CodeString";
import CommonLayout from "@/components/CommanLayout";
import RadioButton from "@/components/share/form/RadioButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import SyntaxHighlighter from "react-syntax-highlighter";
import { toast } from "sonner";

const RadioButtonField = () => {
  const form = useForm();
  const [copied, setCopied] = useState(false);
  const [codeCopi, setCodeCopy] = useState(false);
  const [radioButtonCodeInstall, setRadioButtonCodeInstall] = useState(false);
  const commandInstall = `npx shadcn@latest add radio-group`;

  const handleCommmandCode = async () => {
    await navigator.clipboard.writeText(commandInstall);
    setRadioButtonCodeInstall(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setRadioButtonCodeInstall(false), 2000);
  };
  const handleCopy = async () => {
    await navigator.clipboard.writeText(radioButtonCode);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };
  const handleComponentCode = async () => {
    await navigator.clipboard.writeText(radioButtonComponent);
    setCodeCopy(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };
  const onSubmit = (data) => {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };
  return (
    <>
      <CommonLayout pageTitle={"Radio"} />
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Radio Button</CardTitle>
          <CardDescription>
            A set of checkable buttons—known as radio buttons—where no more than
            one of the buttons can be checked at a time.
          </CardDescription>
          Command
          <div className="relative">
             <Button
                onClick={handleCommmandCode}
                className="absolute right-2 top-1 z-10"
                variant="outline"
                size="sm"
              >
                {radioButtonCodeInstall ? "Copied!" : "Copy"}
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
              <TabsTrigger value="import">Component Call</TabsTrigger>
            </TabsList>

            <TabsContent value="preview">
              <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <RadioButton
                    name="radio"
                    form={form}
                    label="Radio Button"
                    options={[
                      { label: "Reject", value: "rejected" },
                      { label: "Approve", value: "approved" },
                    ]}
                  />
                  <Button type="submit" className="mt-5 text-white bg-red-800">
                    Submit
                  </Button>
                </form>
              </FormProvider>
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
                  {radioButtonCode}
                </SyntaxHighlighter>
              </div>
            </TabsContent>
            <TabsContent value="import">
              <div className="relative">
                <Button
                  onClick={handleComponentCode}
                  className="absolute right-2 top-2 z-10"
                  variant="outline"
                  size="sm"
                >
                  {codeCopi ? "Copied!" : "Copy"}
                </Button>
                <SyntaxHighlighter language="javascript">
                  {radioButtonComponent}
                </SyntaxHighlighter>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
};

export default RadioButtonField;
