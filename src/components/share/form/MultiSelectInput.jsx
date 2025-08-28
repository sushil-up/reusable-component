"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const MultiSelectInput = ({
  name,
  form,
  label,
  placeholder = "Select options",
  options,
  className,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <FormField
      control={form?.control}
      name={name}
      render={({ field, fieldState }) => {
        const selectedValues = Array.isArray(field.value) ? field.value : [];
        return (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "form-control-height border-color-grey h-12 w-full justify-between whitespace-normal rounded text-left font-normal !shadow-none",
                    fieldState.invalid && "border-red-500",
                    className
                  )}
                >
                  <div className="max-h-[100px] w-full flex-1 overflow-y-auto pr-4 text-xs">
                    {selectedValues.length > 0 ? (
                      <span>
                        {options
                          ?.filter((option) =>
                            selectedValues.includes(option.value)
                          )
                          .map((option) => option.label)
                          .join(", ")}
                      </span>
                    ) : (
                      <span className="text-sm text-muted-foreground">
                        {placeholder}
                      </span>
                    )}
                  </div>
                  <ChevronDown className="ml-2 h-4 w-4 shrink-0" />
                </Button>
              </PopoverTrigger>

              <PopoverContent
                side="bottom"
                sideOffset={4}
                align="start"
                className="z-50 w-full max-w-sm p-0"
              >
                <div
                  className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-500"
                  onWheel={(e) => e.stopPropagation()}
                  tabIndex={0}
                  style={{
                    overscrollBehavior: "contain",
                    WebkitOverflowScrolling: "touch",
                  }}
                >
                  {options?.map((option) => (
                    <div
                      key={option.value}
                      className={`flex items-center space-x-2 rounded p-2 ${
                        option.disabled
                          ? "cursor-not-allowed text-gray-400"
                          : "cursor-pointer hover:bg-gray-100"
                      }`}
                      onClick={() => {
                        if (option.disabled) return;
                        const newValue = selectedValues.includes(option.value)
                          ? selectedValues.filter((val) => val !== option.value)
                          : [...selectedValues, option.value];
                        field.onChange(newValue);
                      }}
                    >
                      <Checkbox
                        checked={selectedValues.includes(option.value)}
                        disabled={option.disabled}
                      />
                      <span>{option.label}</span>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
            <FormDescription />
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default MultiSelectInput;

export const codeMultiSelect = `

'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const MultiSelectInput = ({
  name,
  form,
  label,
  placeholder = 'Select options',
  options,
  className
}) => {
  const [open, setOpen] = useState(false)

  return (
    <FormField
  control={form?.control}
  name={name}
  render={({ field, fieldState }) => {
    const selectedValues = Array.isArray(field.value) ? field.value : []
    return (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant='outline'
              className={cn(
                'form-control-height border-color-grey h-12 w-full justify-between whitespace-normal rounded text-left font-normal !shadow-none',
                fieldState.invalid && 'border-red-500',
                className
              )}
            >
              <div className='max-h-[100px] w-full flex-1 overflow-y-auto pr-4 text-xs'>
                {selectedValues.length > 0 ? (
                  <span>
                    {options
                      ?.filter(option => selectedValues.includes(option.value))
                      .map(option => option.label)
                      .join(', ')}
                  </span>
                ) : (
                  <span className='text-sm text-muted-foreground'>
                    {placeholder}
                  </span>
                )}
              </div>
              <ChevronDown className='ml-2 h-4 w-4 shrink-0' />
            </Button>
          </PopoverTrigger>

          <PopoverContent
            side='bottom'
            sideOffset={4}
            align='start'
            className='z-50 w-full max-w-sm p-0'
          >
            <div
              className='max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-500'
              onWheel={e => e.stopPropagation()}
              tabIndex={0}
              style={{
                overscrollBehavior: 'contain',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {options?.map(option => (
                <div
                  key={option.value}
                  className={\`flex items-center space-x-2 rounded p-2 $ {  //remove space after $
                   option . disabled
                      ? 'cursor-not-allowed text-gray-400'
                      : 'cursor-pointer hover:bg-gray-100'
                  }\`}
                  onClick={() => {
                    if (option.disabled) return
                    const newValue = selectedValues.includes(option.value)
                      ? selectedValues.filter(val => val !== option.value)
                      : [...selectedValues, option.value]
                    field.onChange(newValue)
                  }}
                >
                  <Checkbox
                    checked={selectedValues.includes(option.value)}
                    disabled={option.disabled}
                  />
                  <span>{option.label}</span>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )
  }}
/>

  )
}
 export default MultiSelectInput
`;
export const codeMultipleComponent = `  
//  install dependencies before using this component
// npm i react-hook-form
// npx shadcn@latest add sonner
'use client'
  import { useForm, FormProvider } from "react-hook-form";
  import { toast } from "sonner";
  import { Button } from "../ui/button";
  import MultiSelectInput from "../share/form/MultiSelectInput";
 export const Example =()=>{
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
     const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3", disabled: true },
    { label: "Option 4", value: "option4" },
    { label: "Option 5", value: "option5" },
  ];
  return(<>
  
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
  </>)
  }
 

`;
