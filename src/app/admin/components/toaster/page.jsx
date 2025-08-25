"use client";
import CommonLayout from "@/components/CommanLayout";
import { Button } from "@/components/ui/button";
import CardComponent from "@/components/UiComponents/CardComponent";
import TabsDemo from "@/components/UiComponents/TabsComponent";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { toast } from "sonner";
export const ToolTipCode = `
export const ToolTipCode=()=>{
    import { toast } from "sonner";
    import { Button } from "@/components/ui/button";
    return(
    <> 
          <Button
                  variant="outline"
                      onClick={() =>
                       toast("Event has been created", {
                          description: "Sunday, December 03, 2023 at 9:00 AM",
                            action: {
                                label: "Undo",
                                onClick: () => console.log("Undo"),
                                },
                            })
                        }
                    >
                        Show Toast
                    </Button>
    </>
    )
    }
`;
const ToasterMessage = () => {
    const [copied, setCopied] = useState(false);
    const [checkboxCodeInstall, setCheckboxCodeInstall] = useState(false);
    const commandInstall = `npx shadcn@latest add sonner`;
    const handleCopy = async () => {
        await navigator.clipboard.writeText(ToolTipCode);
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
                    <Button
                        variant="outline"
                        onClick={() =>
                            toast("Event has been created", {
                                description: "Sunday, December 03, 2023 at 9:00 AM",
                                action: {
                                    label: "Undo",
                                    onClick: () => console.log("Undo"),
                                },
                            })
                        }
                    >
                        Show Toast
                    </Button>
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
                            {ToolTipCode}
                        </SyntaxHighlighter>
                    </div>
                </>
            ),
        },
    ];

    const mainCard = {
        // title: "Tool Tip",
        description: "An opinionated toast component for React.",
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
            <CommonLayout pageTitle={"Sonner (Toaster)"} />
            <CardComponent item={mainCard} />
        </>
    );
};

export default ToasterMessage;
