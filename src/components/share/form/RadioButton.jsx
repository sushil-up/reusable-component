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
            <FormLabel>{label}</FormLabel>
            <FormControl
              className={`!flex-nowrap !flex-row  gap-4 radio-collunm`}
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
                    <FormLabel className="font-normal ">
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
