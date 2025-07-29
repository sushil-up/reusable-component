"use client";

import { routesUrl } from "@/components/utils/routesUrl";
import InputField from "@/components/share/form/InputField";
import { errorMessage } from "@/components/ToasterMessage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";


export default function Home() {
  const { data: session } = useSession()
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [isSigningIn, setIsSigningIn] = useState(false);
  const router = useRouter();
  const onLoginUser = async (data) => {
    const { email, password } = data;
    setIsSigningIn(true);
    try {
      const signInResponse = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (signInResponse?.status === 401) {
        errorMessage({ description: "Invalid email or password" });
        return;
      }
      if (!signInResponse?.ok) {
        errorMessage({
          description: signInResponse?.error || "An error occurred",
        });
        return;
      }
      setIsSigningIn(false);
      form.reset();
      router.replace(routesUrl.adminPannel);
    } catch (error) {
      errorMessage({ description: error?.response?.data?.message });
    } finally {
      setIsSigningIn(false);
    }
  };
  useEffect(() => {
    if (session?.user) {
      router.replace(routesUrl.adminPannel);
    }
  }, [session, router]);
  
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <Card className="custom-box-shadow w-full max-w-lg space-y-6 rounded-lg bg-background px-6 py-8">
          <CardTitle className="text-center text-3xl font-bold">
            Login
          </CardTitle>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onLoginUser)}>
              <CardContent>
                <InputField
                  form={form}
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  className="mb-4"
                />
                <InputField
                  form={form}
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  className="mb-4"
                />
                <CardFooter>
                  <Button type="submit" className="site-button">
                    Submit
                  </Button>
                </CardFooter>
              </CardContent>

              {/* Your form fields go here */}
            </form>
          </Form>
        </Card>
      </div>
    </>
  );
}
