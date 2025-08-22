import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const CardComponent = ({ item, className }) => {
  return (
    <Card className={className || ""}>
      <CardHeader>
        <CardTitle className={item?.tittleclass}>{item?.title || ""}</CardTitle>
        <CardDescription>{item?.description || ""}</CardDescription>
        {item?.extra || ""}
        {item?.action && <CardAction>{item.action || ""}</CardAction>}
      </CardHeader>
      <CardContent>{item?.content || ""}</CardContent>
      <CardFooter className={item?.footerClass || ""}>
        {item?.footer || ""}
      </CardFooter>
    </Card>
  );
};

export default CardComponent;

export const cardCode = `
import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const CardComponent = ({ item,className }) => {
  return (
    <Card className={className||''}>
      <CardHeader>
        <CardTitle>{item?.title||''}</CardTitle>
        <CardDescription>{item?.description||''}</CardDescription>
        {item?.action && <CardAction>{item.action||''}</CardAction>}
      </CardHeader>
      <CardContent>{item?.content||''}</CardContent>
      <CardFooter className={item?.footerClass||''}>{item?.footer||''}</CardFooter>
    </Card>
  );
};

export default CardComponent;
`;

export const CardComponentCall = `
import CardComponent from "@/components/UiComponents/CardComponent";
const CardComponetCall=()=>{ 
       const CardItems = {
        title: "Login to your account",
        description: "Enter your email below to login to your account",
        action: <Button variant="link">Sign Up</Button>,
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
                <Button type="submit" className="w-full">
                    Login
                </Button>
                <Button variant="outline" className="w-full">
                    Login with Google
                </Button>
            </>
        ),
        footerClass: "flex-col gap-2",
    };
    return (
       <CardComponent item={CardItems} className="w-full max-w-sm" />
        )
    }

`;
