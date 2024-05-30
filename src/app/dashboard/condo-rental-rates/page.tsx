"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function NewListing() {
  const params = useSearchParams();
  const project = params.get("project");

  return (
    <Suspense>
      {project ? (
        <iframe
          src={`https://condo-rent-dashboard.vercel.app/?project=${project}`}
          className="w-full h-full"
        />
      ) : (
        <iframe
          src="https://condo-rent-dashboard.vercel.app/"
          className="w-full h-full"
        />
      )}
    </Suspense>
  );
}
