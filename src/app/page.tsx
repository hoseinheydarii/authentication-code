"use client";
import { useRef } from "react";
import { AuthCode } from "./_components/auth-code";
import { Button } from "./_components/button";
import { AuthCodeRef } from "./_components/auth-code/auth-code.types";

export default function Home() {
  const authCodeRef = useRef<AuthCodeRef>(null);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-[500px] p-10 dark:bg-zinc-700 rounded-xl">
        <h5 className="text-2xl">کد تایید</h5>
        <Button
          className="mt-5"
          variant="warning"
          shape="square"
          size="small"
          onClick={authCodeRef.current?.clear}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </Button>

        <AuthCode
          className="mt-5"
          ref={authCodeRef}
          onChange={(value) => {
            // console.log(value);
          }}
        />

        <Button
          className="mt-5"
          variant="primary"
          shape="full"
          onClick={authCodeRef.current?.focus}
        >
          ارسال
        </Button>
      </div>
    </main>
  );
}
