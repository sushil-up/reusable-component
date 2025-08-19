"use client";
import CommonLayout from "@/components/CommanLayout";
import TextFieldInput from "@/components/FieldsAndCode/InputField";
import TextAreaInput from "@/components/FieldsAndCode/TextAreaIput";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const TextField = () => {
  return (
    <>
    <CommonLayout pageTitle={"Input"} />
      <Card>
        <CardHeader>
          <CardTitle>Input Fields</CardTitle>
        </CardHeader>
        <CardContent>
          <TextFieldInput />
          <TextAreaInput />
        </CardContent>
      </Card>
    </>
  );
};

export default TextField;
