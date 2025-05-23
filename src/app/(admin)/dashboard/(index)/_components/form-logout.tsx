"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ActionResult } from "@/types";
import { LogOut } from "lucide-react";
import React, { useActionState } from "react";
import { Logout } from "../lib/actions";

const initialState: ActionResult = {
  error: "",
};

export default function LogoutForm() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, formAction] = useActionState(Logout, initialState);
  return (
    <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
      <Tooltip>
        <TooltipTrigger asChild>
          <form action={formAction}>
            <button className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8">
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Logout</span>
            </button>
          </form>
        </TooltipTrigger>
        <TooltipContent side="right" className="text-white">
          Logout
        </TooltipContent>
      </Tooltip>
    </nav>
  );
}
