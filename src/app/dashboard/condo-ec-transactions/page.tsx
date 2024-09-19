"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function NewListing() {
  const searchParams = useSearchParams();
    const street = searchParams.get("street");
    const block = searchParams.get("block");

    let url = `https://condo-ec-transacttion.vercel.app/?street=${street}&block=${block}`;


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

