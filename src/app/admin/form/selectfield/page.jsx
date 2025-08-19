"use client";
import CommonLayout from "@/components/CommanLayout";
import MultiSelectField from "@/components/FieldsAndCode/MultiSelectField";
import SelectField from "@/components/FieldsAndCode/SelectField";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const Select = () => {
  return (
    <>
    <CommonLayout pageTitle={"Select "} />
      <Card>
        <CardHeader>
          <CardTitle>Select Fields</CardTitle>
        </CardHeader>
        <CardContent>
          <SelectField />
          <MultiSelectField />
        </CardContent>
      </Card>
    </>
  );
};

export default Select;
