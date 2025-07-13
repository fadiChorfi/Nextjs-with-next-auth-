import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
    
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
