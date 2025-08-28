import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
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
import { format } from "date-fns";

import { CalendarIcon } from "lucide-react";
import { useState } from "react";

const FormDatePickerRange = ({ name, form, label, disabled }) => {
  const [open, setOpen] = useState(false);

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <div className="relative mt-2 bg-white !border-none">
                  <input
                    type="text"
                    readOnly
                    value={
                      field.value?.from
                        ? field.value.to
                          ? `${format(field.value.from, "LLL dd, y")} - ${format(field.value.to, "LLL dd, y")}`
                          : format(field.value.from, "LLL dd, y")
                        : ""
                    }
                    placeholder="Pick a start & end date"
                    className={cn(
                      "form-control-height w-full rounded-6 border-color-grey px-3 text-sm",
                      !field.value && "text-muted-foreground"
                    )}
                  />
                  <CalendarIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 pointer-events-none" />
                </div>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                className="bg-white !shadow-[0_0_15px_-13px_black] shadow-slate-100"
                initialFocus
                mode="range"
                defaultMonth={field.value?.from}
                selected={field.value}
                onSelect={(date) => {
                  if (date?.from && date?.to) {
                    setOpen(false); // Close the calendar when both dates are selected
                  }
                  field.onChange(date);
                }}
                numberOfMonths={2}
                disabled={disabled}
              />
            </PopoverContent>
          </Popover>
          <FormDescription />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormDatePickerRange;


export const dateRangePickerCode = `
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
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
import { format } from "date-fns";

import { CalendarIcon } from "lucide-react";
import { useState } from "react";

const FormDatePickerRange = ({ name, form, label, disabled }) => {
  const [open, setOpen] = useState(false);

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <div className="relative mt-2 bg-white !border-none">
                  <input
                    type="text"
                    readOnly
                    value={
                      field.value?.from
                        ? field.value.to
                          ? "$ {format(field.value.from, "LLL dd, y")} - $ {format(field.value.to, "LLL dd, y")}" // use backticks instead of double quotes
                          : format(field.value.from, "LLL dd, y")
                        : ""
                    }
                    placeholder="Pick a start & end date"
                    className={cn(
                      "form-control-height w-full rounded-6 border-color-grey px-3 text-sm",
                      !field.value && "text-muted-foreground"
                    )}
                  />
                  <CalendarIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 pointer-events-none" />
                </div>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                className="bg-white !shadow-[0_0_15px_-13px_black] shadow-slate-100"
                initialFocus
                mode="range"
                defaultMonth={field.value?.from}
                selected={field.value}
                onSelect={(date) => {
                  if (date?.from && date?.to) {
                    setOpen(false); // Close the calendar when both dates are selected
                  }
                  field.onChange(date);
                }}
                numberOfMonths={2}
                disabled={disabled}
              />
            </PopoverContent>
          </Popover>
          <FormDescription />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default FormDatePickerRange;`;
export const dateRangeComponent = `
// install dependencies before using this component
// npm i react-hook-form
// npx shadcn@latest add sonner
'use client'
import { useForm, FormProvider } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import FormDatePickerRange from "../share/form/FormDateRangePicker";
export const Exmple =()=>{
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
  return(
  <>
  
    <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormDatePickerRange
                    form={form}
                    name="dateRange"
                    label="Date Range Picker"
                  />
                  <Button type="submit" className="mt-5 text-white bg-red-800">
                    Submit
                  </Button>
                </form>
              </FormProvider>
  </>
  )}
                  
                  `;