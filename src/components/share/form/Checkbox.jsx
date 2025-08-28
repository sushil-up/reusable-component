import { Checkbox } from '@/components/ui/checkbox'
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
                <label className='flex cursor-pointer flex-row items-center space-x-2 '>
                  <FormControl>
                    <Checkbox
                      className="
                        border border-black
                        data-[state=checked]:border-[#b82025]
                        data-[state=checked]:bg-[#b82025]
                      "
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


export const checkboxCode = `
import { Checkbox } from '@/components/ui/checkbox'
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
                <label className='flex cursor-pointer flex-row items-center space-x-2 '>
                  <FormControl>
                    <Checkbox
                      className="
                        border border-black
                        data-[state=checked]:border-[#b82025]
                        data-[state=checked]:bg-[#b82025]
                      "
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
export const checkboxImport = `  
//  install dependencies before using this component
// npm i react-hook-form
// npx shadcn@latest add sonner
"use client"
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useForm, FormProvider } from "react-hook-form";
import { CheckBox } from "../share/form/Checkbox";
export const Example =()=>{
  const form = useForm({
    defaultValues: {
      Discrepancy: [],
    }
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
  return(
  <>
    <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <CheckBox
                    name="Discrepancy"
                    label="Discrepancy"
                    className=" !text-base flex gap-4"
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
                  />
                  <Button type="submit" className="mt-5 text-white bg-red-800">
                    Submit
                  </Button>
                </form>
              </FormProvider>
  
  </>
  )}
              `;