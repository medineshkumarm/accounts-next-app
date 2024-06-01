import { Button } from "@/components/ui/button";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import React from "react";

export default function page() {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
        <h2 className="text-3xl font-bold">
          Welcome to Account Management App
        </h2>
        <span className="text-emerald-500 font-semibold text-xl">
          Let{"'"}s get started
        </span>
        <div className="flex gap-2">
          <Button variant="default">
            <LoginLink postLoginRedirectURL="/admin/dashboard">
              Sign in{" "}
            </LoginLink>
          </Button>
          <Button variant="default">
            <RegisterLink>Register</RegisterLink>
          </Button>
        </div>
      </div>
    </>
  );
}
