import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { options } from "../StaticValue";
import MultiSelectInput from "../share/form/MultiSelectInput";
import { codeMultipleComponent, codeMultiSelect } from "../CodeString";

const MultiSelectField = () => {
  const form = useForm();
  const [copied, setCopied] = useState(false);
 const [codeCopi, setCodeCopy] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeMultiSelect);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };
 const handleComponentCode = async () => {
    await navigator.clipboard.writeText(codeMultipleComponent);
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
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>MultiSelect Field</CardTitle>
          <CardDescription>
            Displays a form multiselect or a component that looks like a multiselect.
          </CardDescription>
          Command: npx shadcn@latest add select
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
                  <MultiSelectInput
                    options={options}
                    form={form}
                    name="select"
                    label="Select"
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
                  {codeMultiSelect}
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
                                  {codeMultipleComponent}
                                </SyntaxHighlighter>
                            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
};

export default MultiSelectField;
