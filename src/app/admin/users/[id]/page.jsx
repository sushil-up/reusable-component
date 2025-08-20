"use client";
import React, { use, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import CommonLayout from "@/components/CommanLayout";
import FormInputField from "@/components/share/form/FormInputField";
import { SelectInput } from "@/components/share/form/SelectInput";
import { options } from "@/components/StaticValue";
import RadioButton from "@/components/share/form/RadioButton";
import FormTextArea from "@/components/share/form/TextArea";
import MultiSelectInput from "@/components/share/form/MultiSelectInput";
import UploadFiles from "@/components/share/form/UploadFiles";
import CheckBox from "@/components/share/form/Checkbox";
import TextEditor from "@/components/share/form/TextEditor";
import { Button } from "@/components/ui/button";
import DatePicker from "@/components/share/form/DatePicker";
import { useRouter } from "next/navigation";
import { routesUrl } from "@/components/utils/routesUrl";

const EditUser = ({ params }) => {
  const { id } = use(params); // ✅ unwrap Promise
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      name: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      username: "",
      birthDate: "",
      gender: "",
      role: "",
      textArea: "",
      multiSelect: [],
      content: "",
      Discrepancy: [],
      uploadFiles: [],
      dateRange: null,
    },
  });

  const fetchUserData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/users/${id}`);
      const data = await response.json();

      form.reset({
        name: `${data.firstName} ${data.lastName}`,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        username: data.username,
        birthDate: data.birthDate,
        gender: data.gender,
        role: data.role,
        textArea: data.address?.address || "",
        multiSelect: [data.company?.department, data.bloodGroup].filter(
          Boolean
        ),
        content: data.company?.title || "",
        Discrepancy: data.role === "admin" ? ["true"] : ["false"],
        uploadFiles: [],
        dateRange: null,
      });
    } catch (error) {
      console.error("Failed to fetch user", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [id]);

  const onSubmitData = async (values) => {
    try {
      const res = await fetch(`https://dummyjson.com/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const updatedUser = await res.json();
      router.push(routesUrl.userList);
      console.log("User updated:", updatedUser);
    } catch (err) {
      console.error("Failed to update user:", err);
    }
  };

  return (
    <>
      <CommonLayout pageTitle={"Update Form"} />
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmitData)}>
          <div className="grid grid-cols-2 gap-4">
            {/* Name fields */}
            <FormInputField
              form={form}
              name="firstName"
              label="First Name"
              placeholder="Enter First Name"
            />
            <FormInputField
              form={form}
              name="lastName"
              label="Last Name"
              placeholder="Enter Last Name"
            />

            {/* Email & Phone */}
            <FormInputField
              form={form}
              name="email"
              label="Email"
              placeholder="Enter Email"
            />
            <FormInputField
              form={form}
              name="phone"
              label="Phone"
              placeholder="Enter Phone Number"
            />

            {/* Username & Role */}
            <FormInputField
              form={form}
              name="username"
              label="Username"
              placeholder="Enter Username"
            />
            <SelectInput
              options={[
                { label: "Admin", value: "admin" },
                { label: "User", value: "user" },
              ]}
              form={form}
              name="role"
              label="Role"
            />

            {/* Birthdate & Gender */}
            <DatePicker
              form={form}
              name="birthDate"
              label="Birth Date"
              placeHolder="Select Birth Date"
            />
            <RadioButton
              name="gender"
              form={form}
              label="Gender"
              options={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
              ]}
            />

            {/* Address */}
            <FormTextArea
              form={form}
              name="textArea"
              placeholder="Enter Address"
              label="Address"
            />

            {/* Multi Select (Department + BloodGroup) */}
            <MultiSelectInput
              form={form}
              name="multiSelect"
              label="Department / Blood Group"
              placeholder="Select Options"
              options={options}
            />

            {/* Upload Files */}
            <UploadFiles
              form={form}
              name="uploadFiles"
              placeHolder="Select File To Upload"
            />

            {/* Discrepancy Checkbox */}
            <CheckBox
              name="Discrepancy"
              label="Discrepancy"
              className="!text-base"
              form={form}
              items={[
                { value: "true", label: "True" },
                { value: "false", label: "False" },
              ]}
            />
          </div>

          {/* Rich Text Editor */}
          <div className="mt-3">
            <TextEditor
              name="content"
              form={form}
              label="Job Title / Content"
              placeholder="Start typing..."
            />
          </div>

          {/* Submit Button */}
          <div className="mt-14">
            <Button
              type="submit"
              className="cursor-pointer text-white bg-red-800"
            >
              Update
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default EditUser;
