import React from "react";
export function Input({ className = "", ...props }: any) {
  return <input className={`border p-2 rounded-md w-full ${className}`} {...props} />;
}
