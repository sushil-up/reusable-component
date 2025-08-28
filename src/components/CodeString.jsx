// CheckBox

export const exampleForm = `    
"use client";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import CheckBox from "../share/form/Checkbox";
import DatePicker from "../share/form/DatePicker";
import FormDatePickerRange from "../share/form/FormDateRangePicker";
import FormInputField from "../share/form/FormInputField";
import MultiSelectInput from "../share/form/MultiSelectInput";
import { SelectInput } from "../share/form/SelectInput";
import FormTextArea from "../share/form/TextArea";
import RadioButton from "../share/form/RadioButton";
import TextEditor from "../share/form/TextEditor";
import { options } from "../StaticValue";
import { toast } from "sonner";
export   const options = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "gatsby", label: "Gatsby" },
  { value: "vue", label: "Vue.js" },
  { value: "react", label: "React" },
  { value: "angular", label: "Angular" },
  { value: "ember", label: "Ember.js" },
  { value: "solid", label: "SolidJS" },
  { value: "preact", label: "Preact" },
  { value: "backbone", label: "Backbone.js" },
  { value: "alpine", label: "Alpine.js" },
  { value: "lit", label: "Lit" },
  { value: "marko", label: "Marko" },
  { value: "qwik", label: "Qwik" },
  { value: "dojo", label: "Dojo" },
  { value: "inferno", label: "Inferno" },
  { value: "1", label: "Mithril.js" },
  { value: "stencil", label: "Stencil" },
  { value: "riot", label: "Riot.js" },
  { value: "recoil", label: "Recoil" },
  { value: "sapper", label: "Sapper" },
  { value: "rsc", label: "React Server Components" },
  { value: "crank", label: "Crank.js" },
  { value: "vanilla", label: "Vanilla JS" },
  { value: "electron", label: "Felicia Stephens" },
  { value: "taro", label: "Taro.js" },
  { value: "wepy", label: "Wepy" },
];
export const ExampleFormFields = () => {
 const form = useForm();
  const onSubmit = (data) => {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 max-w-[320px] overflow-x-auto rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };
      return(
          <>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-2 gap-4">

                    <DatePicker
                      form={form}
                      name="date"
                      label="Date Picker"
                      placeHolder="Select Date"
                    />
                    <FormDatePickerRange
                      form={form}
                      name="dateRange"
                      label="Date Range Picker"
                    />
                    <FormInputField
                      form={form}
                      name="name"
                      label="Name"
                      placeholder="Enter Name"
                    />
                    <MultiSelectInput
                      options={options}
                      form={form}
                      name="select"
                      label="Select"
                    />

                    <SelectInput
                      options={options}
                      form={form}
                      name="select"
                      label="Select"
                      placeholder="Select an option"
                    />
                    <FormTextArea
                      form={form}
                      name="textArea"
                      placeholder="Enter Address"
                      label="Text Area"
                    />
                    <RadioButton
                      name="radio"
                      form={form}
                      label="Radio Button"
                      options={[
                        { label: "Reject", value: "rejected" },
                        { label: "Approve", value: "approved" },
                      ]}
                    />
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
                  </div>
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
                      
                      </>
                      )
                      }
                        `;
