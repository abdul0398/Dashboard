"use client";

import { useSearchParams } from "next/navigation";

export default function NewListing() {
  const params = useSearchParams();
  const street = params.get("street");
  const block = params.get("block");
  const flatType = params.get("flatType");
  return (
    <>
      {street || block || flatType ? (
        <iframe
          src={`https://hdb-rental-portal.vercel.app/?street=${street}&block=${block}&flatType=${flatType}`}
          className="w-full h-full"
        />
      ) : (
        <iframe
          src="https://hdb-rental-portal.vercel.app/"
          className="w-full h-full"
        />
      )}
    </>
  );
}
