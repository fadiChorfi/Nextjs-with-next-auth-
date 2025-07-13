"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { signUpAction } from "@/app/actions/sign-up/action";

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [state, formAction] = useActionState(signUpAction, {
    success: false,
    error: null,
    email: "",
    password: "",
  });

  useEffect(() => {
    if (state.success && state.email && state.password) {
      signIn("credentials", {
        email: state.email,
        password: state.password,
        callbackUrl: "/dashboard",
      });
    }
  }, [state]);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Enter your information below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <div className="flex flex-col gap-6">
              {state?.error && (
                <div className="p-3 text-sm text-red-500 bg-red-50 border border-red-200 rounded">
                  {state.error}
                </div>
              )}
              {state?.success && (
                <div className="p-3 text-sm text-green-500 bg-green-50 border border-green-200 rounded">
                  Account created successfully!
                </div>
              )}
            </div>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="userName">Username</Label>
                <Input
                  id="userName"
                  name="userName"
                  type="text"
                  placeholder="johndoe"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Create Account
                </Button>
                <Button variant="outline" className="w-full" type="button">
                  Sign up with Google
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <a href="/login" className="underline underline-offset-4">
                Login
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
