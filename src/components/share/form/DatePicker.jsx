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
                  className="w-48 justify-between font-normal"
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
