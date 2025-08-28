import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

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
  searchError = "",
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
              readOnly={readOnly && readOnly}
              defaultValue={defaultValue && defaultValue}
              className={`form-control-height border-color-grey bg-white !shadow-none ${
                fieldState.error ? "border-red-500" : ""
              } ${className}`}
              placeholder={placeholder}
              type={inputType}
              min={0}
              max={max && max}
              step="any"
            />
          </FormControl>
          <FormMessage className={searchError} />
          {/* <FormDescription /> */}
        </FormItem>
      )}
    />
  );
};

export default FormInputField;

export const codeStringInput = `
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

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
  searchError = "",
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
              readOnly={readOnly && readOnly}
              defaultValue={defaultValue && defaultValue}
              className={\'form-control-height border-color-grey bg-white !shadow-none $ { //use backtick for template string
                fieldState.error ? "border-red-500" : ""
              } $ {className} '}
              placeholder={placeholder}
              type={inputType}
              min={0}
              max={max && max}
              step="any"
            />
          </FormControl>
          <FormMessage className={searchError} />
          {/* <FormDescription /> */}
        </FormItem>
      )}
    />
  );
};

export default FormInputField;
`;
export const codeStringInputComponent = `
// install dependencies before using this component
// npm i react-hook-form
// npx shadcn@latest add sonner
'use client'
import { toast } from "sonner";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import FormInputFieldfrom "@/components/share/form/FormInputField";
export const Example = ()=>{
  const form = useForm({
    defaultValues: {
      name: "",
    },
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
                <FormInputField
                  form={form}
                  name="name"
                  label="Name"
                  placeholder="Enter Name"
                />
                <Button type="submit" className="mt-5 text-white bg-red-800">
                  Submit
                </Button>
              </form>
            </FormProvider>
  </>)}
              `;