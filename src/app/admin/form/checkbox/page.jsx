"use client";
import { checkboxCode, checkboxImport } from "@/components/CodeString";
import CommonLayout from "@/components/CommanLayout";
import CheckBox from "@/components/share/form/Checkbox";
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

const CheckBoxField = () => {
  const form = useForm();
  const [copied, setCopied] = useState(false);
  const [codeCopi, setCodeCopy] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(checkboxCode);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };
  const handleComponentCode = async () => {
    await navigator.clipboard.writeText(checkboxImport);
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
      <CommonLayout pageTitle={"Checkbox"} />
      <Card>
        <CardHeader>
          <CardTitle></CardTitle>
        </CardHeader>
        <CardContent>
          <Card className="mt-5">
            <CardHeader>
              <CardTitle>Checkbox</CardTitle>
              <CardDescription>
                A control that allows the user to toggle between checked and not
                checked.
              </CardDescription>
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
                      <CheckBox
                        name="Discrepancy"
                        label="Discrepancy"
                        className=" !text-base"
                        form={form}
                        items={[
                          {
                            value: "true",
                            label: "True",
                          },
                          {
                            value: "false",
                            label: "False",
                          },
                        ]}
                      />
                      <Button
                        type="submit"
                        className="mt-5 text-white bg-red-800"
                      >
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
                      {checkboxCode}
                    </SyntaxHighlighter>
                  </div>
                </TabsContent>
                <TabsContent value="import">
                  <Button
                    onClick={handleComponentCode}
                    className="absolute right-2 top-2 z-10"
                    variant="outline"
                    size="sm"
                  >
                    {codeCopi ? "Copied!" : "Copy"}
                  </Button>
                  <SyntaxHighlighter language="javascript">
                    {checkboxImport}
                  </SyntaxHighlighter>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </>
  );
};

export default CheckBoxField;
