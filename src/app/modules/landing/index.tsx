
import Image from "next/image";
import { DepartmentData } from "@/app/data/Department";
import { useRouter } from "next/navigation";
import { useState } from "react";
import RightArrowIcon from "@/app/icons/custom-right-arrow"
import LeftArrowIcon from "@/app/icons/custom-left-arrow"

const Landing = () => {

  const MAX_PAGE = 3;
  const [indexPage, setIndexPage] = useState<number>(0)
  
  const handleNextPage = () => {
    setIndexPage((prev) => (prev >= MAX_PAGE ? 0 : prev + 1));
  };

  const handlePrevPage = () => {
    setIndexPage((prev) => (prev <= 0 ? MAX_PAGE : prev - 1));
  };

  const router = useRouter()

  const handleOnClick = () => {
    router.push("/result")
  };

    return (
      <div className="my-8 flex flex-col items-center">
        <div className="my-4 text-xs sm:text-sm md:text-base">
          ยินดีต้อนรับเข้าสู่ Young Web Master Camp 20th
        </div>

        <Image
          src="/jpeg/ywc20.jpg"
          alt="YWC 20th logo"
          width={500}
          height={500}
          className="w-72 sm:w-96 md:w-[500px] h-auto rounded-lg"
        />

        <div className="text-xs sm:text-sm md:text-base mt-8">
          ผลการคัดเลือกเข้ารอบสัมภาษณ์ได้ถูกประกาศแล้ว
        </div>

        <button
          onClick={handleOnClick}
          className="sm:w-56 sm:text-sm md:w-64 md:text-base w-48 h-12 text-xs mt-4 cursor-pointer bg-linear-to-r from-[#FD1D1D] to-[#FCB045] rounded-lg hover:opacity-90 duration-100"
        >
          ดูผลการคัดเลือกเข้ารอบสัมภาษณ์
        </button>

        <div className="text-base sm:text-xl md:text-2xl mt-8  font-bold">
          <p className="mb-4 text-center">สาขาที่รับสมัคร</p>
          <div className="w-full flex flex-row justify-around items-center">
            <LeftArrowIcon
              className="w-8 h-8 mr-6 sm:w-10 sm:h-10 sm:mr-8 md:w-12 md:h-12 bg-white rounded-full cursor-pointer hover:opacity-90 duration-100 "
              onClick={handlePrevPage}
            />
            <div className="bg-linear-to-b from-[#DC2424] to-[#4A569D] rounded-4xl w-56 h-32 sm:w-64 sm:h-40 md:w-72 md:h-48 flex flex-col items-center justify-center">
              <Image
                src={DepartmentData[indexPage].image}
                alt="web"
                width={100}
                height={100}
                className="w-16 sm:w-20 md:w-[100px]"
              />
              <p>{DepartmentData[indexPage].name}</p>
              <p>สมัครแล้ว {DepartmentData[indexPage].amount} คน</p>
            </div>
            <RightArrowIcon
              className="w-8 h-8 ml-6 sm:w-10 sm:h-10 sm:ml-8 md:w-12 md:h-12 bg-white rounded-full cursor-pointer hover:opacity-90 duration-100"
              onClick={handleNextPage}
            />
          </div>
        </div>
      </div>
    );
};

export default Landing;
