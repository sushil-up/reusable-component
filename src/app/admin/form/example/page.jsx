"use client";
import { exampleForm } from "@/components/CodeString";
import CommonLayout from "@/components/CommanLayout";
import CheckBox from "@/components/share/form/Checkbox";
import DatePicker from "@/components/share/form/DatePicker";
import FormDatePickerRange from "@/components/share/form/FormDateRangePicker";
import FormInputField from "@/components/share/form/FormInputField";
import MultiSelectInput from "@/components/share/form/MultiSelectInput";
import RadioButton from "@/components/share/form/RadioButton";
import { SelectInput } from "@/components/share/form/SelectInput";
import FormTextArea from "@/components/share/form/TextArea";
import TextEditor from "@/components/share/form/TextEditor";
import { options } from "@/components/StaticValue";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import SyntaxHighlighter from "react-syntax-highlighter";
import { toast } from "sonner";

const ExampleFormFields = () => {
  const form = useForm();
  const [copied, setCopied] = useState(false);
  const [exampleCodeInstall, setExampleCodeInstall] = useState(false);
  const commandInstall = `npx shadcn@latest add form`;

  const handleCommmandCode = async () => {
    await navigator.clipboard.writeText(commandInstall);
    setExampleCodeInstall(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setExampleCodeInstall(false), 2000);
  };
  const handleCopy = async () => {
    await navigator.clipboard.writeText(exampleForm);
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
      <CommonLayout pageTitle={"Example"} />
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Example</CardTitle>
          <CardDescription>
            A comprehensive form example showcasing various input components
            including checkboxes, date pickers, text fields, multi-selects,
            radio buttons, and a rich text editor. Switch between preview and
            code to explore both functionality and implementation.
          </CardDescription>
          Command
          <div className="relative">
            <Button
              onClick={handleCommmandCode}
              className="absolute right-2 top-1 z-10 "
              variant="outline"
              size="sm"
            >
              {exampleCodeInstall ? "Copied!" : "Copy"}
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
              <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-2 gap-4">

                    <DatePicker
                      form={form}
                      name="date"
                      label="Date Picker"
                      placeHolder="Select Date"
                    />
                    <FormDatePickerRange
                      form={form}
                      name="dateRange"
                      label="Date Range Picker"
                    />
                    <FormInputField
                      form={form}
                      name="name"
                      label="Name"
                      placeholder="Enter Name"
                    />
                    <MultiSelectInput
                      options={options}
                      form={form}
                      name="select"
                      label="Select"
                    />

                    <SelectInput
                      options={options}
                      form={form}
                      name="select"
                      label="Select"
                      placeholder="Select an option"
                    />
                    <FormTextArea
                      form={form}
                      name="textArea"
                      placeholder="Enter Address"
                      label="Text Area"
                    />
                    <RadioButton
                      name="radio"
                      form={form}
                      label="Radio Button"
                      options={[
                        { label: "Reject", value: "rejected" },
                        { label: "Approve", value: "approved" },
                      ]}
                    />
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
                  </div>
                  <TextEditor
                    name="content"
                    form={form}
                    label="Post Content"
                    placeholder="Start typing..."
                  />
                  <Button type="submit" className="mt-14 text-white bg-red-800">
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
                  {exampleForm}
                </SyntaxHighlighter>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
};

export default ExampleFormFields;
