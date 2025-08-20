"use client";
import { textEditorCode } from "@/components/CodeString";
import CommonLayout from "@/components/CommanLayout";
import TextEditor from "@/components/share/form/TextEditor";
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

const TextEditorRich = () => {
  const form = useForm();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(textEditorCode);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const onSubmit = (data) => {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 max-w-[320px] overflow-x-auto rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };
  return (
    <>
      <CommonLayout pageTitle={"TextEditor"} />
      <Card>
        <CardHeader>
          <CardTitle></CardTitle>
        </CardHeader>
        <CardContent>
          <Card className="mt-5">
            <CardHeader>
              <CardTitle>TextEditor</CardTitle>
              <CardDescription>
                A rich text editor that allows users to create and format text
                with features like bold, italics, links, and more.
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
                      <TextEditor
                        name="content"
                        form={form}
                        label="Post Content"
                        placeholder="Start typing..."
                      />
                      <Button type="submit" className="mt-14 text-white bg-red-800" >
                        Submit
                      </Button>
                    </form>
                  </FormProvider>
                </TabsContent>
                <TabsContent value="code">
                  <div className="relative">
                    <Button
                      onClick={handleCopy}
                      className="absolute right-2 top-2 z-10 "
                      variant="outline"
                      size="sm"
                    >
                      {copied ? "Copied!" : "Copy"}
                    </Button>
                    <SyntaxHighlighter language="javascript">
                      {textEditorCode}
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

export default TextEditorRich;
