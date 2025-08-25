"use client";
import CommonLayout from "@/components/CommanLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CardComponent from "@/components/UiComponents/CardComponent";
import DialogComponent, {
    dialogCode,
    dialogComponentCall,
} from "@/components/UiComponents/DialogComponent";
import TabsDemo from "@/components/UiComponents/TabsComponent";
import React from "react";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { toast } from "sonner";

const Dialog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const [codeCopi, setCodeCopy] = useState(false);
    const commandInstall = `npx shadcn@latest add dialog`;
    const [checkboxCodeInstall, setCheckboxCodeInstall] = useState(false);
    const handleCopy = async () => {
        await navigator.clipboard.writeText(dialogCode);
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
        await navigator.clipboard.writeText(dialogComponentCall);
        setCodeCopy(true);
        toast.success("Copied to clipboard!");
        setTimeout(() => setCodeCopy(false), 2000);
    };

    const dialogItem = {
        dialogTrigger: (
            <>
                <Button variant="outline" onClick={() => setIsOpen(!isOpen)}>
                    Open Dialog
                </Button>{" "}
            </>
        ),
        dialogTitle: "Edit profile",
        dialogDescription:
            " Make changes to your profile here. Click save when you&apos;redone.",
        content: (
            <>
                <div className="grid gap-4">
                    <div className="grid gap-3">
                        <Label htmlFor="name-1">Name</Label>
                        <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="username-1">Username</Label>
                        <Input id="username-1" name="username" defaultValue="@peduarte" />
                    </div>
                </div>
            </>
        ),
        dialogClose: (
            <>
                {" "}
                <Button variant="outline" onClick={() => setIsOpen(!isOpen)}>
                    Cancel
                </Button>
            </>
        ),
        dialogFooter: (
            <>
                <Button type="submit" onClick={() => setIsOpen(!isOpen)}>
                    Save changes
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
                    <DialogComponent
                        item={dialogItem}
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
                            {dialogCode}
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
                            {dialogComponentCall}
                        </SyntaxHighlighter>
                    </div>
                </>
            ),
        },
    ];

    const mainCard = {
        // title: "Tool Tip",
        description:
            "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.",
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

export default Dialog;
