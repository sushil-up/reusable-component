import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const FormTextArea = ({
    name,
    form,
    label,
    placeholder,
    disabled,
    type,
    className,
}) => {
    return (
        <>
            <FormField
                control={form.control}
                name={name}
                render={({ field, fieldState }) => (
                    <FormItem>
                        <FormLabel>{label}</FormLabel>
                        <FormControl>
                            <Textarea
                             className={`form-control-height bg-white ${className}`}
                                {...field}
                                placeholder={placeholder}
                                disabled={disabled}
                                type={type}
                                value={field.value}
                                id={field.name}
                            />
                        </FormControl>
                        <FormMessage>
                            {fieldState.error ? fieldState.error.message : ""}
                        </FormMessage>
                    </FormItem>
                )}
            />
        </>
    );
};

export default FormTextArea;





export const codeStringTextArea = `
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const FormTextArea = ({
    name,
    form,
    label,
    placeholder,
    disabled,
    type,
    className,
}) => {
    return (
        <>
            <FormField
                control={form.control}
                name={name}
                render={({ field, fieldState }) => (
                    <FormItem>
                        <FormLabel>{label}</FormLabel>
                        <FormControl>
                            <Textarea
                             className={\'form-control-height bg-white $ {className}'} // use backticks here for template literals
                                {...field}
                                placeholder={placeholder}
                                disabled={disabled}
                                type={type}
                                value={field.value}
                                id={field.name}
                            />
                        </FormControl>
                        <FormMessage>
                            {fieldState.error ? fieldState.error.message : ""}
                        </FormMessage>
                    </FormItem>
                )}
            />
        </>
    );
};

export default FormTextArea;
`;
export const textAreaImport = ` 
// install dependencies before using this component
// npm i react-hook-form
// npx shadcn@latest add sonner
'use client'
    import { useForm, FormProvider } from "react-hook-form";
    import { toast } from "sonner";
    import FormTextArea from "@/components/share/form/TextArea";
export const Example =()=>{
    const form = useForm({
    defaultValues: {
      textArea: "",
    },
    mode: "onChange",
  });   
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
                  <FormTextArea
                    form={form}
                    name="textArea"
                    placeholder="Enter Address"
                    label="Text Area"
                  />
                  <Button type="submit" className="mt-5 text-white bg-red-800">
                    Submit
                  </Button>
                </form>
              </FormProvider>
    </>)}
                  `;