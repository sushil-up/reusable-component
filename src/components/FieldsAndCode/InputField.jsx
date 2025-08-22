"use client";
import {
  codeStringInput,
  codeStringInputComponent,
} from "@/components/CodeString";
import FormInputField from "@/components/share/form/FormInputField";
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

const TextFieldInput = () => {
  const form = useForm();
  const [copied, setCopied] = useState(false);
  const [codeCopi, setCodeCopy] = useState(false);
  const [inputCodeInstall, setInputCodeInstall] = useState(false);
  const commandInstall = `npx shadcn@latest add input`;

  const handleCommmandCode = async () => {
    await navigator.clipboard.writeText(commandInstall);
    setInputCodeInstall(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setInputCodeInstall(false), 2000);
  };
  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeStringInput);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };
  const handleComponentCode = async () => {
    await navigator.clipboard.writeText(codeStringInputComponent);
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
    <Card className='mt-5'>
      <CardHeader>
        <CardTitle>Text Input Field</CardTitle>
        <CardDescription>
          Displays a form input field or a component that looks like an input
          field.
        </CardDescription>
        Command
        <div className="relative">
          <Button
            onClick={handleCommmandCode}
            className="absolute right-2 top-1 z-10"
            variant="outline"
            size="sm"
          >
            {codeCopi ? "Copied!" : "Copy"}
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
                <FormInputField
                  form={form}
                  name="name"
                  label="Name"
                  placeholder="Enter Name"
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
                {codeStringInput}
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
                {codeStringInputComponent}
              </SyntaxHighlighter>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TextFieldInput;
