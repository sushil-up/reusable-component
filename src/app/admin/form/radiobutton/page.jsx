"use client";
import { radioButtonCode } from "@/components/CodeString";
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

  const handleCopy = async () => {
    await navigator.clipboard.writeText(radioButtonCode);
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
    <>
    <CommonLayout pageTitle={"Radio"} />
      <Card>
        <CardHeader>
          <CardTitle></CardTitle>
        </CardHeader>
        <CardContent>
          <Card className="mt-5">
            <CardHeader>
              <CardTitle>Radio Button</CardTitle>
              <CardDescription>
                A set of checkable buttons—known as radio buttons—where no more
                than one of the buttons can be checked at a time.
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
                      <RadioButton
                        name="radio"
                        form={form}
                        label="Rdio Button"
                        options={[
                          { label: "Reject", value: "rejected" },
                          { label: "Approve", value: "approved" },
                        ]}
                      />
                      <Button type="submit" className="mt-5">
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
              </Tabs>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </>
  );
};

export default RadioButtonField;
