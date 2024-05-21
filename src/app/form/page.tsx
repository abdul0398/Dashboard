import dynamic from "next/dynamic";
const FormComponent = dynamic(() => import("./_component/form"), {
  ssr: false,
});

export default function Form() {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <div className=" lg:w-[100%] justify-center flex w-full md:w-[100%] h-[100%] m-2 mx-auto lg:p-4 md:p-4 p-3">
        <FormComponent />
      </div>
    </div>
  );
}
