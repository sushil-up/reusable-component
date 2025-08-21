"use client";
import CommonLayout from "@/components/CommanLayout";
import DatePickerField from "@/components/FieldsAndCode/DatePicker";
import DateRangePickerField from "@/components/FieldsAndCode/DateRangePickerField";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const DatePicker = () => {
  return (
    <>
    <CommonLayout pageTitle={"Date Picker"} />
    <DatePickerField />
    <DateRangePickerField />
    </>
  );
};

export default DatePicker;
