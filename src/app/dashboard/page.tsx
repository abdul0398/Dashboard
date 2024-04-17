import { redirect } from "next/navigation"

export default function NewListing() {
    // redirect to the new listing page

    redirect('/dashboard/listings')


    return (
        <iframe src="https://abdul0398.github.io/newListing/" className="w-full h-full"></iframe>
    )
}