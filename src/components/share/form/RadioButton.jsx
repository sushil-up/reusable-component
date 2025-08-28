import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";

const RadioButton = ({ name, form, label, options, onChange }) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field, fieldState }) => (
          <FormItem>
            {label && <FormLabel>{label}</FormLabel>}
            <FormControl className="!flex-nowrap !flex-row gap-4 radio-collunm">
              <RadioGroup
                onValueChange={(value) => {
                  field.onChange(value);
                  onChange?.(value);
                }}
                value={field.value}
                className="flex flex-col space-y-1"
              >
                {options?.map((option) => (
                  <FormItem
                    key={option.value}
                    className="flex items-center space-y-0 !mt-0 radio-btn"
                  >
                    <FormControl>
                      <RadioGroupItem
                        value={option.value}
                        className="
                        border border-black 
                        data-[state=checked]:border-[#b82025]
                        data-[state=checked]:bg-[#b82025] 
                        data-[state=checked]:text-[#b82025]
                      "
                      />
                    </FormControl>
                    <FormLabel className="font-normal">
                      {option.label}
                    </FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormDescription />
            <FormMessage>
              {fieldState.error ? fieldState.error.message : ""}
            </FormMessage>
          </FormItem>
        )}
      />
    </>
  );
};

export default RadioButton;


export const radioButtonCode = `
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";

const RadioButton = ({ name, form, label, options, onChange }) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field, fieldState }) => (
          <FormItem>
            {label && <FormLabel>{label}</FormLabel>}
            <FormControl className="!flex-nowrap !flex-row gap-4 radio-collunm">
              <RadioGroup
                onValueChange={(value) => {
                  field.onChange(value);
                  onChange?.(value);
                }}
                value={field.value}
                className="flex flex-col space-y-1"
              >
                {options?.map((option) => (
                  <FormItem
                    key={option.value}
                    className="flex items-center space-y-0 !mt-0 radio-btn"
                  >
                    <FormControl>
                      <RadioGroupItem
                        value={option.value}
                        className="
                        border border-black 
                        data-[state=checked]:border-[#b82025]
                        data-[state=checked]:bg-[#b82025] 
                        data-[state=checked]:text-[#b82025]
                      "
                      />
                    </FormControl>
                    <FormLabel className="font-normal">
                      {option.label}
                    </FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormDescription />
            <FormMessage>
              {fieldState.error ? fieldState.error.message : ""}
            </FormMessage>
          </FormItem>
        )}
      />
    </>
  );
};

export default RadioButton;
`;
export const radioButtonComponent = `  
// install dependencies before using this component
// npm i react-hook-form
// npx shadcn@latest add sonner
  'use client'
  import { useForm, FormProvider } from "react-hook-form";
  import { toast } from "sonner";
  import { Button } from "../ui/button";
  import RadioButton from "../share/form/RadioButton";
 export const Example=()=>{
  const form = useForm({
    defaultValues: {
      radio: "",
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
                  <RadioButton
                    name="radio"
                    form={form}
                    label="Radio Button"
                    options={[
                      { label: "Reject", value: "rejected" },
                      { label: "Approve", value: "approved" },
                    ]}
                  />
                  <Button type="submit" className="mt-5 text-white bg-red-800">
                    Submit
                  </Button>
                </form>
              </FormProvider>
  </>)}
                      `;