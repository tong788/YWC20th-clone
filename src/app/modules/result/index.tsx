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
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 absolute left-6 top-20 bg-white rounded-full cursor-pointer hover:opacity-90 duration-100"
        onClick={handleOnClick}
      />
      <p className="mb-4 font-bold text-base sm:text-lg md:text-xl">ตรวจสอบผลการคัดเลือกของคุณ</p>
      <form
        className="flex flex-col items-center space-y-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="ชื่อ-นามสกุล e.g. Lora Doyle"
          className="p-2 w-56 sm:w-64 md:w-72 h-8 bg-white rounded-lg text-blue-700"
          value={fullname}
          onChange={(e) => setFullName(e.target.value)}
        />
        <button
          type="submit"
          className="cursor-pointer bg-gradient-to-r from-[#FD1D1D] to-[#FCB045] w-24 sm:w-28 md:w-32 h-10 sm:h-12 text-xs sm:text-sm md:text-base rounded-lg hover:opacity-90 duration-100"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Result;
