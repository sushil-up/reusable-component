"use client";
import CardComponent from "@/components/UiComponents/CardComponent";
import React from "react";
import AllUsers from "../../users/page";
import TabsDemo from "@/components/UiComponents/TabsComponent";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { TableCode } from "@/components/DataTable/Table";
import CommonLayout from "@/components/CommanLayout";

const TableComponent = () => {
  const [copied, setCopied] = useState(false);
  const [codeCopi, setCodeCopy] = useState(false);
  const [checkboxCodeInstall, setCheckboxCodeInstall] = useState(false);
  const commandInstall = `npx shadcn@latest add table
npx shadcn@latest add pagination`;
  const componentCallCode = `   <TableList
  data={list}
  columns={UserColumn(handleDeleteUser,handleEditUser)}
  length={limit}
  totalRecord={totalRecord}
  page={page}
  setPage={setPage}
/>`;
  const handleCopy = async () => {
    await navigator.clipboard.writeText(TableCode);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };
  const handleComponentCode = async () => {
    await navigator.clipboard.writeText(componentCallCode);
    setCodeCopy(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCodeCopy(false), 2000);
  };
  const handleCommandCode = async () => {
    await navigator.clipboard.writeText(commandInstall);
    setCheckboxCodeInstall(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCheckboxCodeInstall(false), 2000);
  };
  const tableTabs = [
    {
      triggerTitle: "Preview",
      value: "preview",
      content: <AllUsers />,
    },
    {
      triggerTitle: "Code",
      value: "code",
      content: (
        <>
          <div className="relative">
            <Button
              onClick={handleCopy}
              className="absolute right-2 top-2 z-10"
              variant="outline"
              size="sm"
            >
              {copied ? "Copied!" : "Copy"}
            </Button>
            <SyntaxHighlighter language="javascript">
              {TableCode}
            </SyntaxHighlighter>
          </div>
        </>
      ),
    },
    {
      triggerTitle: "Component Call",
      value: "componentCall",
      content: (
        <>
          <div className="relative">
            <Button
              onClick={handleComponentCode}
              className="absolute right-2 top-2 z-10"
              variant="outline"
              size="sm"
            >
              {codeCopi ? "Copied!" : "Copy"}
            </Button>
            <SyntaxHighlighter language="javascript">
              {componentCallCode}
            </SyntaxHighlighter>
          </div>
        </>
      ),
    },
  ];
  const cardTableContent = {
    description: "A responsive table component.",
    content: (
      <>
        <TabsDemo item={tableTabs} />
      </>
    ),
    extra: (
      <>
        <>
          Command
          <div className="relative items-center">
            <Button
              onClick={handleCommandCode}
              className="absolute right-2 top-3 z-10"
              variant="outline"
              size="sm"
            >
              {checkboxCodeInstall ? "Copied!" : "Copy"}
            </Button>
            <SyntaxHighlighter language="javascript">
              {commandInstall}
            </SyntaxHighlighter>
          </div>
        </>
      </>
    ),
  };
  return (
    <>
      <CommonLayout pageTitle={"Table With Pagignation"} />
      <CardComponent item={cardTableContent} />
    </>
  );
};

export default TableComponent;
