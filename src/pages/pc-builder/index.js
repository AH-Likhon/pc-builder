import RootLayout from "@/components/Layout/RootLayout";
import Image from "next/image";
import Link from "next/link";

const items = [
  "Motherboard",
  "Processor",
  "Ram",
  "Power Supply",
  "Storage",
  "Monitor",
];

const PC_Builder = () => {
  return (
    <div className="w-11/12 mx-auto py-10  flex items-center justify-center flex-col">
      <h2 className="text-2xl font-bold mb-10">
        {" "}
        Please select all required field: <small>note: * is required</small>
      </h2>
      {items.map((item) => (
        <div key={item} className="w-full md:w-3/4">
          <div className="flex w-full justify-between items-center">
            <h2 className="font-semibold">{item} *</h2>
            <button className="btn w-[20%] md:w-[12%]">
              <Link href={`/pc-builder/${item}`}>Select</Link>
            </button>
          </div>
          <div className="divider w-full mx-auto my-4"></div>
        </div>
      ))}
      <button
        onClick={() => toast.success("you build the pc successfully")}
        // disabled={!buildButton}
        className="btn"
      >
        Complete Build
      </button>
    </div>
  );
};

export default PC_Builder;

PC_Builder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
