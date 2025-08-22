"use client";
import CommonLayout from "@/components/CommanLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CardComponent from "@/components/UiComponents/CardComponent";
import TabsDemo, {
  TabsComponentCall,
  TabsDemoCode,
} from "@/components/UiComponents/TabsComponent";
import React from "react";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { toast } from "sonner";

const TabAction = () => {
  const CardItemsAccount = {
    title: "Account",
    description: (
      <>Make changes to your account here. Click save when you&apos;re done.</>
    ),
    action: <Button variant="link">Sign Up</Button>,
    content: (
      <>
        <div className="grid gap-3">
          <Label htmlFor="tabs-demo-name">Name</Label>
          <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="tabs-demo-username">Username</Label>
          <Input id="tabs-demo-username" defaultValue="@peduarte" />
        </div>
      </>
    ),
    footer: (
      <>
        <Button>Save changes</Button>
      </>
    ),
    footerClass: "flex-col gap-2",
  };
  const CardItemsPassword = {
    title: "Password",
    description: (
      <> Change your password here. After saving, you&apos;ll be logged out.</>
    ),
    action: <Button variant="link">Sign Up</Button>,
    content: (
      <>
        <div className="grid gap-3">
          <Label htmlFor="tabs-demo-current">Current password</Label>
          <Input id="tabs-demo-current" type="password" />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="tabs-demo-new">New password</Label>
          <Input id="tabs-demo-new" type="password" />
        </div>
      </>
    ),
    footer: (
      <>
        <Button>Save password</Button>
      </>
    ),
    footerClass: "flex-col gap-2",
  };
  const tabsItem = [
    {
      triggerTitle: "Account",
      value: "account",
      content: <CardComponent item={CardItemsAccount} />,
    },
    {
      triggerTitle: "Password",
      value: "password",
      content: <CardComponent item={CardItemsPassword} />,
    },
  ];

  const [copied, setCopied] = useState(false);
  const [codeCopi, setCodeCopy] = useState(false);
  const commandInstall=`npx shadcn@latest add tabs`
  const [checkboxCodeInstall,setCheckboxCodeInstall]= useState(false)
  const handleCopy = async () => {
    await navigator.clipboard.writeText(TabsDemoCode);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };
  const handleComponentCode = async () => {
    await navigator.clipboard.writeText(TabsComponentCall);
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
  const copyTabsItem = [
    {
      triggerTitle: "Preview",
      value: "preview",
      content: <TabsDemo item={tabsItem} />,
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
              {TabsDemoCode}
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
              {TabsComponentCall}
            </SyntaxHighlighter>
          </div>
        </>
      ),
    },
  ];
  const tabsExample = {
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    content: (
      <>
        {" "}
        <TabsDemo item={copyTabsItem} />
      </>
    ),
    extra:(
        <>
        Command
                  <div className="relative items-center">
                    <Button
                      onClick={handleCommandCode}
                      className="absolute right-2 top-1 z-10"
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
              )
  };
  return (
    <>
      <CommonLayout pageTitle={"Tabs"} />
      <CardComponent item={tabsExample} />
    </>
  );
};

export default TabAction;
