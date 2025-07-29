"use client";

import DatePicker from "@/components/share/form/DatePicker";
import RadioButton from "@/components/share/form/RadioButton";
import { SelectInput } from "@/components/share/form/SelectInput";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { TestValidation } from "@/components/Form-Validation.jsx/TestValidation";
import TextEditor from "@/components/share/form/TextEditor";
import MultiSelectInput from "@/components/share/form/MultiSelectInput";
import UploadFiles from "@/components/share/form/UploadFiles";
import PageLayout from "@/components/PageTitle";
import CheckBox from "@/components/share/form/Checkbox";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import UseContext from "@/context/UseContext";
const page = () => {
  const form = useForm();
  const session = useSession()
  const { testData, setTestData, } = useContext(UseContext)
  const options = [
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
  // form.setValue("select", "1");
  const onSubmitData = (data) => {
    // optionally extract plain text if needed
    try {
      const storedData =
        editIndex !== null
          ? studentData?.map((item, index) =>
            item.studentid === editIndex ? formData : item
          )
          : [...studentData, setid];
      setEditIndex(null);
      setLoader(true)
      editIndex !== null
        ? successMsg("Student information has been successfully edited.")
        : successMsg("Student record created successfully.");
      setStudentData(storedData);
      reset();
      setOpenForm(false);
    } catch (error) { }

    // Handle form submission logic here
    // For example, send data to an API or update state
  };
  return (
    <>
      <div >
        {/* <Card className=" "> */}
        <PageLayout pageTitle={'Admin DashBoard'} />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmitData)}>
            <div className="grid grid-cols-2 gap-4">
              <SelectInput
                options={options}
                form={form}
                name="select"
                label="Select"
              />
              <DatePicker
                form={form}
                name="date"
                label="Date Picker"
                placeHolder="Select Date"
              />
              <RadioButton
                name="radio"
                form={form}
                label="Rdio Button"
                options={[
                  { label: "Reject", value: "rejected" },
                  { label: "Approve", value: "approved" },
                ]}
              />
              <Textarea
                form={form}
                name="textArea"
                placeholder="Enter Address"
                label="Text Area"
              />

              <MultiSelectInput form={form} name='multiSelect' label='Select Option' placeholder="Select Options" options={options} />
              <UploadFiles form={form} name='uploadFiles' placeHolder='Select File To Upload' />
              <CheckBox
                name='Discrepancy'
                // label='Delay'
                className='mx-2 my-5 !text-base'
                form={form}
                items={[
                  {
                    value: 'true',
                    label: 'True'
                  },
                  {
                    value: 'false',
                    label: 'False'
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
            <Button type="submit" className="mt-4">
              Submit
            </Button>
          </form>
        </Form>
        {/* </Card> */}
      </div>
    </>
  );
};

export default page;
