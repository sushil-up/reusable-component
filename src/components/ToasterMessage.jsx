"use client";

import { toast } from "sonner";

export function errorMessage({ description }) {
  toast.error(description, {
    action: {
      label: "Dismiss",
      onClick: () => console.log("Dismissed"),
    },
  });
}
export function successMessage({ description }) {
  toast.success(description, {
    action: {
      label: "Dismiss",
      onClick: () => console.log("Dismissed"),
    },
  });
}
