import React from "react";
import SubleaseInput from "@/components/SubleaseInput";
import Image from "next/image";

export default function AddSublease() {
  return (
    <div className="px-12 py-8 h-screen bg-slate-100 align-middle content-center">
      <div className="container mx-auto lg:px-10 mb-8 px-2 ">
        <div className="grid lg:grid-cols-2 lg:gap-3 bg-white rounded-xl">
          <div className="text-center content-center align-middle p-8 ">
            <h1 className="font-semibold text-gray-700 text-4xl">
              Add Sublease
            </h1>
            <SubleaseInput />
          </div>
          <div className="col-span-1">
            <div className="flex h-full align-bottom items-center justify-center ">
              <Image
                src="/static/images/uploadImage.png"
                alt="Upload Image"
                width={800}
                height={800}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
