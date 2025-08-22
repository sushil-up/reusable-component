"use client";
import CommonLayout from "@/components/CommanLayout";
import { Button } from "@/components/ui/button";
import CardComponent, {
    cardCode,
    CardComponentCall,
} from "@/components/UiComponents/CardComponent";
import React from "react";
import { Input } from "@/components/ui/input"; // Assuming Input component exists
import { Label } from "@/components/ui/label"; // Assuming Label component exists
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { useState } from "react";
import { toast } from "sonner";

const CardCode = () => {
    const CardItems = {
        title: "Login to your account",
        tittleClass:"text-[#b82025] text-xl mb-1 ",
        description: "Enter your email below to login to your account",
        content: (
            <form>
                <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            <a
                                href="#"
                                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                            >
                                Forgot your password?
                            </a>
                        </div>
                        <Input id="password" type="password" required />
                    </div>
                </div>
            </form>
        ),
        footer: (
            <>
                <Button type="submit" className="w-full bg-[#b82025]">
                    Login
                </Button>
                <Button variant="outline" className="w-full bg-grey-300">
                    Login with Google
                </Button>
                <Button variant="link">Sign Up</Button>
            </>
        ),
        footerClass: "flex-col gap-2",
    };
    const [copied, setCopied] = useState(false);
    const [checkboxCodeInstall, setCheckboxCodeInstall] = useState(false);
    const [codeCopi,setCodeCopy]= useState(false)
    const commandInstall = `npx shadcn@latest add card`;
    const handleCopy = async () => {
        await navigator.clipboard.writeText(cardCode);
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
        await navigator.clipboard.writeText(CardComponentCall);
        setCodeCopy(true);
        toast.success("Copied to clipboard!");
        setTimeout(() => setCodeCopy(false), 2000);
      };
    const mainCard = {
        description: "Displays a card with header, content, and footer.",
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
        content: (
            <>
                <Tabs defaultValue="preview">
                    <TabsList>
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                        <TabsTrigger value="code">Code</TabsTrigger>
                        <TabsTrigger value="component">Component Call</TabsTrigger>
                    </TabsList>
                    <TabsContent value="preview">
                        <CardComponent item={CardItems} className="w-full max-w-sm" />
                    </TabsContent>
                    <TabsContent value="code">
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
                                {cardCode}
                            </SyntaxHighlighter>
                        </div>
                    </TabsContent>
                    <TabsContent value='component'>
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
                                {CardComponentCall}
                            </SyntaxHighlighter>
                        </div>
                    </TabsContent>
                </Tabs>
            </>
        ),
    };
    return (
        <>
            <CommonLayout pageTitle={"Card"} />
            <CardComponent item={mainCard} />
        </>
    );
};

export default CardCode;
