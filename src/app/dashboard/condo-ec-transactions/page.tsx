"use client"
import { useSearchParams } from "next/navigation";


export default function NewListing() {
    const searchParams = useSearchParams();
    const street = searchParams.get("street");
    const block = searchParams.get("block");


    const url = `https://condo-ec-transacttion.vercel.app/?street=${street}&block=${block}`


    return (
        <iframe src={url} className="w-full h-full"></iframe>
    )
}