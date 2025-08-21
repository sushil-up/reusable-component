"use client";

import { routesUrl } from "@/components/utils/routesUrl";
import InputField from "@/components/share/form/InputField";
import { errorMessage } from "@/components/ToasterMessage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
  const { data: session } = useSession();
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
    <div className="bg-gradient-to-br from-amber-50 to-red-100">
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="/acewebxlogo.png"
              alt="Logo"
              className=" w-60 drop-shadow-lg"
            />
          </div>

          {/* Login Card */}
          <Card className="rounded-2xl bg-white/80 backdrop-blur-xl border border-white/30 shadow-2xl">
            <CardContent className="px-8 py-10">
              <h1 className="text-center text-3xl font-bold text-[#b82025] drop-shadow-sm">
                Welcome Back 
              </h1>
              <p className="text-center text-sm text-gray-500 mt-2">
                Sign in to continue to your dashboard
              </p>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onLoginUser)}
                  className="space-y-6 mt-8"
                >
                  {/* Email */}
                  <InputField
                    form={form}
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    className="bg-white border border-gray-200 text-gray-700 placeholder-gray-400 rounded-lg h-12 px-4 focus:ring-2 focus:ring-[#b82025]/50 transition"
                  />

                  {/* Password */}
                  <InputField
                    form={form}
                    name="password"
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    className="bg-white border border-gray-200 text-gray-700 placeholder-gray-400 rounded-lg h-12 px-4 focus:ring-2 focus:ring-[#b82025]/50 transition"
                  />

                  {/* Submit Button */}
                  <CardFooter className="flex flex-col space-y-4 px-0">
                    <Button
                      type="submit"
                      disabled={isSigningIn}
                      className="w-full h-12 rounded-lg bg-[#b82025] hover:bg-[#a11d21] text-white font-medium shadow-md hover:shadow-lg transition"
                    >
                      {isSigningIn ? (
                        <span className="flex items-center gap-2">
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Signing in...
                        </span>
                      ) : (
                        "Sign In"
                      )}
                    </Button>

                    {/* <p className="text-center text-sm text-gray-500">
                      Don’t have an account?{" "}
                      <a
                        href="/register"
                        className="text-[#b82025] font-medium hover:underline"
                      >
                        Sign Up
                      </a>
                    </p> */}
                  </CardFooter>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
