"use client";

import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import { sideBarCode } from "@/components/app-sidebar/app-sidebar";
import { navBarcode } from "@/components/app-sidebar/nav-main";
import { navUserCode } from "@/components/app-sidebar/nav-user";
import { layoutCode } from "@/components/UiComponents/SiderBarCode";

import CommonLayout from "@/components/CommanLayout";
import { Button } from "@/components/ui/button";
import CardComponent from "@/components/UiComponents/CardComponent";
import TabsDemo from "@/components/UiComponents/TabsComponent";
import { toast } from "sonner";

const SideBarDemo = () => {
    const [copiedId, setCopiedId] = useState(null);
    const [copiedCommand, setCopiedCommand] = useState(false);

    const commandInstall = `npx shadcn@latest add sidebar`;

    const handleCopy = async (code, id) => {
        try {
            await navigator.clipboard.writeText(code);
            setCopiedId(id);
            toast.success("Copied to clipboard!");
            setTimeout(() => setCopiedId(null), 2000);
        } catch (err) {
            toast.error("Failed to copy");
        }
    };
    const handleCopyCommand = async () => {
        try {
            await navigator.clipboard.writeText(commandInstall);
            setCopiedCommand(true);
            toast.success("Copied to clipboard!");
            setTimeout(() => setCopiedCommand(false), 2000);
        } catch (err) {
            toast.error("Failed to copy");
        }
    };

    // 🧩 Tabs Content
    const tabsItem = [
        {
            triggerTitle: "Code",
            value: "code",
            content: (
                <>
                    {/* Sidebar Component Code */}
                    <div className="relative mb-6">
                        <Button
                            onClick={() => handleCopy(sideBarCode, "sidebar")}
                            className="absolute right-2 top-2 z-10"
                            variant="outline"
                            size="sm"
                        >
                            {copiedId === "sidebar" ? "Copied!" : "Copy"}
                        </Button>
                        <div className="mb-2 px-1 text-xs font-mono text-muted-foreground">
                            components/app-sidebar.jsx
                        </div>
                        <SyntaxHighlighter language="javascript">
                            {sideBarCode}
                        </SyntaxHighlighter>
                    </div>

                    {/* Nav Main Code */}
                    <div className="relative mb-6">
                        <Button
                            onClick={() => handleCopy(navBarcode, "nav-main")}
                            className="absolute right-2 top-2 z-10"
                            variant="outline"
                            size="sm"
                        >
                            {copiedId === "nav-main" ? "Copied!" : "Copy"}
                        </Button>
                        <div className="mb-2 px-1 text-xs font-mono text-muted-foreground">
                            components/nav-main.jsx
                        </div>
                        <SyntaxHighlighter language="javascript">
                            {navBarcode}
                        </SyntaxHighlighter>
                    </div>

                    {/* Nav User Code */}
                    <div className="relative mb-6">
                        <Button
                            onClick={() => handleCopy(navUserCode, "nav-user")}
                            className="absolute right-2 top-2 z-10"
                            variant="outline"
                            size="sm"
                        >
                            {copiedId === "nav-user" ? "Copied!" : "Copy"}
                        </Button>
                        <div className="mb-2 px-1 text-xs font-mono text-muted-foreground">
                            components/nav-user.jsx
                        </div>
                        <SyntaxHighlighter language="javascript">
                            {navUserCode}
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
                    {/* Layout Code */}
                    <div className="relative mb-6">
                        <Button
                            onClick={() => handleCopy(layoutCode, "layout")}
                            className="absolute right-2 top-2 z-10"
                            variant="outline"
                            size="sm"
                        >
                            {copiedId === "layout" ? "Copied!" : "Copy"}
                        </Button>
                        <div className="mb-2 px-1 text-xs font-mono text-muted-foreground">
                            app/layout.jsx
                        </div>
                        <SyntaxHighlighter language="javascript">
                            {layoutCode}
                        </SyntaxHighlighter>
                    </div>
                </>
            ),
        },
    ];

    const mainCard = {
        description:
            "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.",
        content: <TabsDemo item={tabsItem} />,
        extra: (
            <>
                <div className="mb-4 text-sm text-muted-foreground text-red-800">
                    We have not included a preview of the sidebar, as it is already used
                    throughout our platform.
                </div>

                <div className="text-sm font-semibold mb-2">Install Command</div>

                <div className="relative items-center">
                    <Button
                        onClick={handleCopyCommand}
                        className="absolute right-2 top-1 z-10"
                        variant="outline"
                        size="sm"
                    >
                        {copiedCommand ? "Copied!" : "Copy"}
                    </Button>

                    <SyntaxHighlighter language="bash">
                        {commandInstall}
                    </SyntaxHighlighter>
                </div>
            </>
        ),
    };

    return (
        <>
            <CommonLayout pageTitle="Side Bar" />
            <CardComponent item={mainCard} />
        </>
    );
};

export default SideBarDemo;
