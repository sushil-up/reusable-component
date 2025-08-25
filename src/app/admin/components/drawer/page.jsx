"use client";
import CommonLayout from "@/components/CommanLayout";
import { Button } from "@/components/ui/button";
import CardComponent from "@/components/UiComponents/CardComponent";
import DrawerComponent, { DrawerCode } from "@/components/UiComponents/DrawerComponent";
import TabsDemo from "@/components/UiComponents/TabsComponent";
import React from "react";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

const Drawer = () => {
    const [copied, setCopied] = useState(false);
    const commandInstall = `npx shadcn@latest add drawer`;
    const [checkboxCodeInstall, setCheckboxCodeInstall] = useState(false);
    const handleCopy = async () => {
        await navigator.clipboard.writeText(DrawerCode);
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
    const tabsItem = [
        {
            triggerTitle: "Preview",
            value: "preview",
            content: (
                <>
                    {" "}
                    <DrawerComponent />
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
                            {DrawerCode}
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
    return <>
        <CommonLayout pageTitle={'Drawer'} />
        <CardComponent item={mainCard} />
    </>;
};

export default Drawer;
