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
import { yupResolver } from "@hookform/resolvers/yup";
import { TestValidation } from "@/components/Form-Validation.jsx/TestValidation";
import TextEditor from "@/components/share/form/TextEditor";
import MultiSelectInput from "@/components/share/form/MultiSelectInput";
import UploadFiles from "@/components/share/form/UploadFiles";
import PageLayout from "@/components/PageTitle";
import CheckBox from "@/components/share/form/Checkbox";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import UseContext from "@/context/UseContext";
import FormDatePickerRange from "@/components/share/form/FormDateRangePicker";
import FormTextArea from "@/components/share/form/TextArea";
import FormInputField from "@/components/share/form/FormInputField";
import { options } from "@/components/StaticValue";
import CommonLayout from "@/components/CommanLayout";
const page = () => {
  const form = useForm();
  const session = useSession();
  const { testData, setTestData } = useContext(UseContext);

  // form.setValue("select", "1");
  const onSubmitData = (data) => {
    console.log("datadatadata",data)
    // optionally extract plain text if needed
    try {
      const storedData =
        editIndex !== null
          ? studentData?.map((item, index) =>
              item.studentid === editIndex ? formData : item
            )
          : [...studentData, setid];
      setEditIndex(null);
      setLoader(true);
      editIndex !== null
        ? successMsg("Student information has been successfully edited.")
        : successMsg("Student record created successfully.");
      setStudentData(storedData);
      reset();
      setOpenForm(false);
    } catch (error) {}

    // Handle form submission logic here
    // For example, send data to an API or update state
  };
  return (
    <>
    <CommonLayout pageTitle={"Add Form"} />
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmitData)}>
            <div className="grid grid-cols-2 gap-4">
              <FormInputField 
              form={form}
              name='name'
              label='Name'
              placeholder='Enter Name'
              />
              <SelectInput
                options={options}
                form={form}
                name="select"
                placeholder='Select an option'
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
              <FormTextArea
                form={form}
                name="textArea"
                placeholder="Enter Address"
                label="Text Area"
              />
              <FormDatePickerRange
                form={form}
                name="dateRange"
                label="Date Range Picker"
              />
              <MultiSelectInput
                form={form}
                name="multiSelect"
                label="Select Option"
                placeholder="Select Options"
                options={options}
              />
              <UploadFiles
                form={form}
                name="uploadFiles"
                placeHolder="Select File To Upload"
              />
              <CheckBox
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
              />
            </div>
           
           <div className="mt-3">
           <TextEditor
              name="content"
              form={form}
              label="Post Content"
              placeholder="Start typing..."
            />
           </div>

            <div className="mt-14">
            <Button type="submit" className='cursor-pointer text-white bg-red-800'>
              Submit
            </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default page;
