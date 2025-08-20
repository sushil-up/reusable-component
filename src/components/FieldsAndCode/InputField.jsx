"use client";
import { codeStringInput } from "@/components/CodeString";
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

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeStringInput);
    setCopied(true);
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
    <Card>
      <CardHeader>
        <CardTitle>Text Input Field</CardTitle>
        <CardDescription>
          Displays a form input field or a component that looks like an input
          field.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="preview">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
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
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TextFieldInput;
