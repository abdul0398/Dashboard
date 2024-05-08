import dynamic from "next/dynamic";
const FormComponent = dynamic(
    () => import('./_component/form'),
    { ssr: false }
  );
export default function Form() {
    return (
        <div className="border rounded-xl shadow-lg lg:w-1/2 w-full md:w-1/2 min-h-5/6 m-5 mx-auto p-9">
            <FormComponent/>
        </div>
    )
}