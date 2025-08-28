"use client";

import { Controller } from "react-hook-form";
import {
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

const TextEditor = ({
  name,
  form,
  label,
  className = "",
  placeholder = "",
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <FormItem className={className}>
      {label && <FormLabel>{label}</FormLabel>}
      <FormControl>
        <Controller
          name={name}
          control={form.control}
          defaultValue=""
          render={({ field }) => (
            <ReactQuill
              // theme="snow"
              className="!bg-white [&_.ql-container]:!bg-white [&_.ql-editor]:!bg-white [&_.ql-toolbar]:!bg-white"
              value={field.value || ""}
              onChange={field.onChange}
              placeholder={placeholder}
            />
          )}
        />
      </FormControl>
      <FormDescription />
      <FormMessage />
    </FormItem>
  );
};

export default TextEditor;

export const textEditorCode = `
"use client";

import { Controller } from "react-hook-form";
import {
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

const TextEditor = ({
  name,
  form,
  label,
  className = "",
  placeholder = "",
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <FormItem className={className}>
      {label && <FormLabel>{label}</FormLabel>}
      <FormControl>
        <Controller
          name={name}
          control={form.control}
          defaultValue=""
          render={({ field }) => (
            <ReactQuill
              // theme="snow"
              className="!bg-white [&_.ql-container]:!bg-white [&_.ql-editor]:!bg-white [&_.ql-toolbar]:!bg-white"
              value={field.value || ""}
              onChange={field.onChange}
              placeholder={placeholder}
            />
          )}
        />
      </FormControl>
      <FormDescription />
      <FormMessage />
    </FormItem>
  );
};

export default TextEditor;
`;
export const textEditorComponent = `
// install dependencies before using this component
// npm i react-quill-new
// npx shadcn@latest add sonner
// npm i react-hook-form
"use client";
import { useForm, FormProvider } from "react-hook-form";
import { toast } from "sonner";
import TextEditor from "@/components/share/form/TextEditor";
import { Button } from "@/components/ui/button";
export const Example = () => {
  const form = useForm();
  const onSubmit = (data) => {
    toast("You submitted the following values", {
      description: (  
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };
  return(<>
      <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
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
  </>)
}
export default Example
                      `;
