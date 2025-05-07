
import Image from "next/image";
import { DepartmentData } from "@/app/api/Department";
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

  const handleOnclick = () => {
    router.push("/announcement")
  };

    return (
      <div className="my-8 flex flex-col items-center">
        <div className="my-4">
          ยินดีต้อนรับเข้าสู่ Young Web Master Camp 20th
        </div>

        <Image
          src="/jpeg/ywc20.jpg"
          alt="YWC 20th logo"
          width={500}
          height={500}
        />

        <div className="mt-4">ผลการคัดเลือกเข้ารอบสัมภาษณ์ได้ถูกประกาศแล้ว</div>

        <button
          onClick={handleOnclick}
          className="mt-4 cursor-pointer bg-linear-to-r from-[#FD1D1D] to-[#FCB045] w-64 h-12 rounded-lg"
        >
          ดูผลการคัดเลือกเข้ารอบสัมภาษณ์
        </button>

        <div className="mt-8 text-2xl font-bold">
          <p className="mb-4 text-center">สาขาที่รับสมัคร</p>
          <div className="w-xl flex flex-row justify-around items-center">
            <LeftArrowIcon
              className="bg-white rounded-full cursor-pointer"
              onClick={handlePrevPage}
            />
            <div className="bg-linear-to-b from-[#DC2424] to-[#4A569D] rounded-4xl w-72 h-48 flex flex-col items-center justify-center">
              <Image
                src={DepartmentData[indexPage].image}
                alt="web"
                width={100}
                height={100}
              />
              <p>{DepartmentData[indexPage].name}</p>
              <p>สมัครแล้ว {DepartmentData[indexPage].amount} คน</p>
            </div>
            <RightArrowIcon
              className="bg-white rounded-full cursor-pointer"
              onClick={handleNextPage}
            />
          </div>
        </div>
      </div>
    );
};

export default Landing;
