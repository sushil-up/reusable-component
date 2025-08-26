import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabsDemo = ({ item }) => {
  return (
    <Tabs defaultValue={item.length > 0 ? item[0].value : ""}>
      <TabsList>
        {item.map(({ triggerTitle, value }, index) => (
          <TabsTrigger key={`${value}-${index}`} value={value}>
            {triggerTitle}
          </TabsTrigger>
        ))}
      </TabsList>

      {item.map(({ value, content }, index) => (
        <TabsContent key={`${value}-${index}`} value={value}>
          {content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabsDemo;
export const TabsDemoCode = `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabsDemo = ({ item }) => {
  return (
    <Tabs defaultValue={item.length > 0 ? item[0].value : ""}>
      <TabsList>
        {item.map(({ triggerTitle, value }) => (
          <TabsTrigger key={value} value={value}>
            {triggerTitle}
          </TabsTrigger>
        ))}
      </TabsList>

      {item.map(({ value, content }) => (
        <TabsContent key={value} value={value}>
          {content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabsDemo;`;

export const TabsComponentCall = `
import CardComponent from "@/components/UiComponents/CardComponent";
import TabsDemo from "@/components/UiComponents/TabsComponent";
 const TabsComponentCall =()=>{
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
    
    return (
    <>
       <TabsDemo item={tabsItem}
    </>
)
    
    }


`;
