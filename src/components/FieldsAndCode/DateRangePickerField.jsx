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
import FormDatePickerRange from "../share/form/FormDateRangePicker";
import { dateRangePickerCode } from "../CodeString";

const DateRangePickerField = () => {
  const form = useForm();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(dateRangePickerCode);
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
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Date Range Picker Field</CardTitle>
          <CardDescription>
            Displays a form daterangepicker or a component that looks like a
            daterangepicker.
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
                  <FormDatePickerRange
                    form={form}
                    name="dateRange"
                    label="Date Range Picker"
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
                  {dateRangePickerCode}
                </SyntaxHighlighter>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
};

export default DateRangePickerField;
