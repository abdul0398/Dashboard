import dynamic from "next/dynamic";
const FormComponent = dynamic(() => import("./_component/form"), {
  ssr: false,
});
export default function Form() {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <div className=" lg:w-[90%] w-full md:w-[90%] h-[90%]  m-5 mx-auto p-9">
        <FormComponent />
      </div>
    </div>
  );
}
