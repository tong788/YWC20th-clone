"use client";

import { useState } from "react";
import CustomLeftArrow from "@/app/icons/custom-left-arrow";
import { useRouter } from "next/navigation";

const Result = () => {
  const router = useRouter();
  const [fullname, setFullName] = useState<string>("");

  const handleOnClick = () => {
    router.back();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
      console.log("Submitted name:", fullname);
      router.push(`/result/${fullname}`)
  };

  return (
    <div className="flex flex-col items-center">
      <CustomLeftArrow
        className="absolute left-6 top-20 bg-white rounded-full cursor-pointer hover:opacity-90 duration-100"
        onClick={handleOnClick}
      />
      <p className="mb-4 font-bold text-xl">ตรวจสอบผลการคัดเลือกของคุณ</p>
      <form
        className="flex flex-col items-center space-y-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="ชื่อ-นามสกุล e.g. Lora Doyle"
          className="p-2 w-72 h-8 bg-white rounded-lg text-blue-700"
          value={fullname}
          onChange={(e) => setFullName(e.target.value)}
        />
        <button
          type="submit"
          className="cursor-pointer bg-gradient-to-r from-[#FD1D1D] to-[#FCB045] w-32 h-12 rounded-lg hover:opacity-90 duration-100"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Result;
