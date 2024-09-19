"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function NewListing() {
  const searchParams = useSearchParams();
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    const street = searchParams.get("street");
    const block = searchParams.get("block");

    if (street && block) {
      setUrl(`https://condo-rent-dashboard.vercel.app/?street=${street}&block=${block}`);
    }
  }, [searchParams]);

  if (!url) return null;

  return (
    <iframe src={url} className="w-full h-full"></iframe>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <NewListing />
    </Suspense>
  );
}
