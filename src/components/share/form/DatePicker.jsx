import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
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
import { ChevronDownIcon } from "lucide-react";
import { Form, useFormContext } from "react-hook-form";

const DatePicker = ({ name, label, className, placeHolder }) => {
  const { control } = useFormContext();
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState();

  return (
    <FormField
      control={control}
      name={name}
      className={className}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>

          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  id="date"
                  className="form-control-height justify-between font-normal outline-none focus:ring-0"
                >
                  {date
                    ? date.toLocaleDateString()
                    : placeHolder || "Select date"}
                  <ChevronDownIcon className="ml-2 h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="start"
            >
              <Calendar
                mode="single"
                selected={date}
                captionLayout="dropdown"
                onSelect={(selectedDate) => {
                  setDate(selectedDate);
                  field.onChange(selectedDate);
                  setOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>

          <FormMessage>
            {fieldState.error ? fieldState.error.message : ""}
          </FormMessage>
        </FormItem>
      )}
    />
  );
};

export default DatePicker;

export const datePickerCode = `
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
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
import { ChevronDownIcon } from "lucide-react";
import { Form, useFormContext } from "react-hook-form";

const DatePicker = ({ name, label, className, placeHolder }) => {
  const { control } = useFormContext();
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState();

  return (
    <FormField
      control={control}
      name={name}
      className={className}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>

          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  id="date"
                  className="form-control-height justify-between font-normal outline-none focus:ring-0"
                >
                  {date
                    ? date.toLocaleDateString()
                    : placeHolder || "Select date"}
                  <ChevronDownIcon className="ml-2 h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="start"
            >
              <Calendar
                mode="single"
                selected={date}
                captionLayout="dropdown"
                onSelect={(selectedDate) => {
                  setDate(selectedDate);
                  field.onChange(selectedDate);
                  setOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>

          <FormMessage>
            {fieldState.error ? fieldState.error.message : ""}
          </FormMessage>
        </FormItem>
      )}
    />
  );
};

export default DatePicker;
`;
export const datePickerComponent = `
//  install dependencies before using this component
// npm i react-hook-form
// npx shadcn@latest add sonner
'use client';
import React from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { FormProvider, useForm } from "react-hook-form";
import DatePicker from "../share/form/DatePicker";
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
  return (
  <>
          <FormProvider {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <DatePicker
                      form={form}
                      name="date"
                      label="Date Picker"
                      placeHolder="Select Date"
                    />
                    <Button type="submit" className="mt-5 text-white bg-red-800">
                      Submit
                    </Button>
                  </form>
                </FormProvider>
  </>
  );
};
`;
