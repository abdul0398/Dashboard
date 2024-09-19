import { Suspense } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full w-full">
      <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
    </div>
  );
}
