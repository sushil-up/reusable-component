export const codeStringInput = `import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
  } from '@/components/ui/form'
  import { Input } from '@/components/ui/input'
  
  const FormInputField = ({
    name,
    form,
    placeholder,
    label,
    disable,
    type,
    className,
    onClick,
    value,
    defaultValue,
    max,
    readOnly,
    inputType,
    searchError = ""
  }) => {
    return (
      <FormField
        control={form?.control}
        name={name}
        render={({ field, fieldState }) => (
          <FormItem>
            {label && <FormLabel>{label}</FormLabel>}
            <FormControl>
              <Input
                {...field}
                onClick={onClick}
                disabled={disable}
                value={value ?? field.value}
                readOnly={readOnly}
                defaultValue={defaultValue}
                className={\`custom-radius border-color-grey h-12 !rounded bg-white !shadow-none \${fieldState.error ? 'border-red-500' : ''} \${className}\`}
                placeholder={placeholder}
                type={inputType}
                min={0}
                max={max}
                step="any"
              />
            </FormControl>
            <FormMessage className={searchError} />
          </FormItem>
        )}
      />
    )
  }
  
  export default FormInputField`;
export const codeStringInputComponent = `<FormInputField
                  form={form}
                  name="name"
                  label="Name"
                  placeholder="Enter Name"
                />`;
export const codeStringTextArea = `import {
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
                                className={className}
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
export const textAreaImport = ` <FormTextArea
                    form={form}
                    name="textArea"
                    placeholder="Enter Address"
                    label="Text Area"
                  />`;

export const codeStringSelect = `import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import React from "react";

export const SelectInput = ({ options: fullOptions, form, name, label }) => {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const filteredOptions = React.useMemo(() => {
    if (search.trim() === "") {
      const topOptions = fullOptions.slice(0, 10);
      const selectedOption = fullOptions.find(
        (o) => o.value === form.getValues(name)
      );
      const isSelectedInTop = topOptions.some(
        (o) => o.value === selectedOption?.value
      );
      return isSelectedInTop || !selectedOption
        ? topOptions
        : [selectedOption, ...topOptions];
    }

    return fullOptions.filter((option) =>
      option.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, fullOptions, form, name]);

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field,fieldState }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
            <FormControl>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className={cn(
                  "w-full justify-between",
                  !field.value && "text-muted-foreground"
                )}
              >
                {field.value
                  ? fullOptions.find((option) => option.value === field.value)
                      ?.label
                  : "Select an option"}
                <ChevronsUpDown className="ml-2 h-4 w-4" />
              </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
              <Command>
                <CommandInput
                  placeholder="Search..."
                  value={search}
                  onValueChange={(val) => setSearch(val)}
                />
                <CommandList>
                  <CommandEmpty>No options found.</CommandEmpty>
                  <CommandGroup>
                    {filteredOptions.map((option) => (
                      <CommandItem
                        key={option.value}
                        onSelect={() => {
                          form.setValue(name, option.value);
                          field.onChange(option.value);
                          setOpen(false);
                          setSearch("");
                        }}
                      >
                        {option.label}
                        {field.value === option.value && (
                          <Check className="ml-auto h-4 w-4" />
                        )}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
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
`;
export const codeStringComponent = ` <SelectInput
                    options={options}
                    form={form}
                    name="select"
                    label="Select"
                  />`;
export const codeMultiSelect = `
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
                'border-color-grey h-12 w-full justify-between whitespace-normal rounded text-left font-normal !shadow-none',
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
                  className={flex items-center space-x-2 rounded p-2 {
                    option.disabled
                      ? 'cursor-not-allowed text-gray-400'
                      : 'cursor-pointer hover:bg-gray-100'
                  }}
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
export const codeMultipleComponent = ` <MultiSelectInput
                    options={options}
                    form={form}
                    name="select"
                    label="Select"
                  />`;
export const datePickerCode = `import React, { useState } from "react";
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
                  className=" justify-between font-normal"
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
export const datePickerComponent = `<DatePicker
                form={form}
                name="date"
                label="Date Picker"
                placeHolder="Select Date"
              />`;
export const dateRangePickerCode = `import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  FormControl,
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
import { format } from 'date-fns'
import { FieldValues, Path, UseFormReturn } from 'react-hook-form'

import { CalendarIcon } from 'lucide-react'
import { useState } from 'react'


const FormDatePickerRange = ({
  name,
  form,
  label,
  disabled
}) => {
  const [open, setOpen] = useState(false)

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
                <Button
                  id='date'
                  variant='outline'
                  className={cn(
                    'h-12 w-full pl-3 text-left font-normal rounded border-color-grey !shadow-none',
                    !field.value && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className='mr-2 h-4 w-4' />
                  {field.value?.from ? (
                    field.value.to ? (
                      <>
                        {format(field.value.from, 'LLL dd, y')} -{' '}
                        {format(field.value.to, 'LLL dd, y')}
                      </>
                    ) : (
                      format(field.value.from, 'LLL dd, y')
                    )
                  ) : (
                    <span>Pick a start & end date</span>
                  )}
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0' align='start'>
              <Calendar
                className='bg-white !shadow-[0_0_15px_-13px_black] shadow-slate-100'
                initialFocus
                mode='range'
                defaultMonth={field.value?.from}
                selected={field.value}
                onSelect={date => {
                  if (date?.from && date?.to) {
                    setOpen(false) // Close the calendar when both dates are selected
                  }
                  field.onChange(date)
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
  )
}

export default FormDatePickerRange`;
export const dateRangeComponent = `<FormDatePickerRange
                    form={form}
                    name="dateRange"
                    label="Date Range Picker"
                  />`;
export const radioButtonCode = `import {
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
            <FormLabel>{label}</FormLabel>
            <FormControl
              className='!flex-nowrap !flex-row !mb-5 gap-4 radio-collunm'
            >
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
                    className="flex items-center space-x-3 space-y-0 !mt-0 radio-btn"
                  >
                    <FormControl>
                      <RadioGroupItem value={option.value} />
                    </FormControl>
                    <FormLabel className="font-normal !ml-2">
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
export const radioButtonComponent = `  <RadioButton
                        name="radio"
                        form={form}
                        label="Rdio Button"
                        options={[
                          { label: "Reject", value: "rejected" },
                          { label: "Approve", value: "approved" },
                        ]}
                      />`;
// CheckBox
export const checkboxCode = `import { Checkbox } from '@/components/ui/checkbox'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'

const CheckBox = ({ name, form, items = [], label, className }) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <div className='mb-2'>
              <FormLabel className='text-base'>{label}</FormLabel>
            </div>
          )}
          <div className={className}>
            {items.map(item => (
              <FormItem
                key={item.id || item.value}
                className='flex flex-row items-center space-x-3 space-y-0'
              >
                <label className='flex cursor-pointer flex-row items-center space-x-3'>
                  <FormControl>
                    <Checkbox
                      checked={
                        Array.isArray(field.value) &&
                        field.value.includes(item.value)
                      }
                      onCheckedChange={checked => {
                        const current = Array.isArray(field.value)
                          ? field.value
                          : []

                        const updated = checked
                          ? [...current, item.value]
                          : current.filter(v => v !== item.value)

                        field.onChange(updated)
                      }}
                    />
                  </FormControl>
                  <span className='text-sm font-normal'>{item.label}</span>
                </label>
              </FormItem>
            ))}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default CheckBox
`;
export const checkboxImport = `   <CheckBox
                name="Discrepancy"
                label='Discrepancy'
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
              />`;

export const textEditorCode = `"use client";

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
              theme="snow"
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
export const textEditorComponent = `  <TextEditor
                        name="content"
                        form={form}
                        label="Post Content"
                        placeholder="Start typing..."
                      />`;
