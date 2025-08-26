"use client";
import CommonLayout from "@/components/CommanLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CardComponent from "@/components/UiComponents/CardComponent";
import SheetComponent, {
    sheetComponentCall,
    sheetComponentCode,
} from "@/components/UiComponents/SheetComponent";
import TabsDemo from "@/components/UiComponents/TabsComponent";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

const page = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const [codeCopi, setCodeCopy] = useState(false);
    const commandInstall = `npx shadcn@latest add sheet`;
    const [checkboxCodeInstall, setCheckboxCodeInstall] = useState(false);
    const handleCopy = async () => {
        await navigator.clipboard.writeText(sheetComponentCode);
        setCopied(true);
        toast.success("Copied to clipboard!");
        setTimeout(() => setCopied(false), 2000);
    };
    const handleCommandCode = async () => {
        await navigator.clipboard.writeText(commandInstall);
        setCheckboxCodeInstall(true);
        toast.success("Copied to clipboard!");
        setTimeout(() => setCheckboxCodeInstall(false), 2000);
    };
    const handleComponentCode = async () => {
        await navigator.clipboard.writeText(sheetComponentCall);
        setCodeCopy(true);
        toast.success("Copied to clipboard!");
        setTimeout(() => setCodeCopy(false), 2000);
    };
    const sheetItem = {
        sheetTrigger: (
            <Button variant="outline" onClick={() => setIsOpen(!isOpen)}>
                Open
            </Button>
        ),
        SheetTitle: <>Edit profile</>,
        sheetDescription: (
            <>Make changes to your profile here. Click save when you&apos;re done.</>
        ),
        sheetContent: (
            <>
                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                    <div className="grid gap-3">
                        <Label htmlFor="sheet-demo-name">Name</Label>
                        <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="sheet-demo-username">Username</Label>
                        <Input id="sheet-demo-username" defaultValue="@peduarte" />
                    </div>
                </div>
            </>
        ),
        sheetFooter: (
            <>
                <Button type="submit" onClick={() => setIsOpen(!isOpen)}>
                    Save changes
                </Button>
            </>
        ),
        sheetClose: (
            <>
                <Button variant="outline" onClick={() => setIsOpen(!isOpen)}>
                    Close
                </Button>
            </>
        ),
    };
    const tabsItem = [
        {
            triggerTitle: "Preview",
            value: "preview",
            content: (
                <>
                    {" "}
                    <SheetComponent
                        item={sheetItem}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                    />
                </>
            ),
        },
        {
            triggerTitle: "Code",
            value: "code",
            content: (
                <>
                    {" "}
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
                            {sheetComponentCode}
                        </SyntaxHighlighter>
                    </div>
                </>
            ),
        },
        {
            triggerTitle: "Component Call",
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
                            {sheetComponentCall}
                        </SyntaxHighlighter>
                    </div>
                </>
            ),
        },
    ];
    const mainCard = {
        // title: "Tool Tip",
        description:
            "Extends the Dialog component to display content that complements the main content of the screen.",
        content: (
            <>
                <TabsDemo item={tabsItem} />
            </>
        ),
        extra: (
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
        ),
    };
    return (
        <>
            <CommonLayout pageTitle={"Dialog"} />
            <CardComponent item={mainCard} />
        </>
    );
};

export default page;
