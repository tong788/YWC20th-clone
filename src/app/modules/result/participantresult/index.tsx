import { useParams, useRouter } from "next/navigation";
import { useGetCandidateData } from "@/app/data/Candidates";
import { Candidate } from "@/app/data/Candidates";
import { useState, useEffect } from "react";
import CustomLeftArrow from "@/app/icons/custom-left-arrow";
import Image from "next/image";

const ParticipantResult = () => {
  const router = useRouter();
  const params = useParams();

  const handleOnClick = () => {
    router.back();
  };

  // Ensure we extract a clean string
  const fullNameRaw = Array.isArray(params.fullname)
    ? params.fullname[0]
    : params.fullname || "";
  const fullName = decodeURIComponent(fullNameRaw); //Raw fullname will be firstname%20lastname
  const [firstName, lastName] = fullName.trim().split(" ");

  const { candidates, error, loading } = useGetCandidateData("PG07");
  const [participant, setParticipant] = useState<Candidate | null>(null);

  useEffect(() => {
    if (candidates && firstName && lastName) {
      const allCandidates: Candidate[] = [
        ...candidates.design,
        ...candidates.programming,
        ...candidates.marketing,
        ...candidates.content,
      ];

      const found = allCandidates.find(
        (candidate) =>
          candidate.firstName.toLowerCase() === firstName.toLowerCase() &&
          candidate.lastName.toLowerCase() === lastName.toLowerCase()
      );

      setParticipant(found ?? null);
    }
  }, [candidates, firstName, lastName]);

  if (loading) return <div>Loading...</div>;
  if (error) return <p className="text-center text-red-500 mt-8">{error}</p>;

  if (!participant) {
    return (
      <div className="bg-gradient-to-b from-[#101010] to-[#120000] w-1/2 h-[70dvh] rounded-2xl flex flex-col justify-center items-center">
        <CustomLeftArrow
          className="absolute left-6 top-20 bg-white rounded-full cursor-pointer hover:opacity-90 duration-100"
          onClick={handleOnClick}
        />
        <Image
          src="/png/user-profile.png"
          alt="user profile"
          width={150}
          height={150}
        />
        <div className="text-center font-semibold text-xl my-4">
          <p>ขอแสดงความเสียใจกับ</p>
          <p>คุณ {fullName}</p>
        </div>
        <div className="text-center font-semibold mt-4">
          <p>ไม่ได้รับการคัดเลือกเข้าสู่รอบสัมภาษณ์</p>
          <p>Young Webmaster Camp 20</p>
        </div>
        <div className="text-center text-sm mt-4">
          <p>ผู้ที่ไม่ผ่านการคัดเลือกในรอบนี้ ไม่ใช่น้องไม่เก่งนะครับ</p>
          <p className="mb-2">
            แต่ทุกคนมีจังหวะและโอกาสที่ต่างกัน พี่ๆเป็นกำลังใจให้เสมอครับ
          </p>
          <p>
            รอติดตามข่าวสารการรับสมัครของค่าย Young Webmaster Camp
            ในปีถัดๆไปกันไว้ได้เลย
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-[#101010] to-[#120000] w-1/2 h-[70dvh] rounded-2xl flex flex-col justify-center items-center">
      <CustomLeftArrow
        className="absolute left-6 top-20 bg-white rounded-full cursor-pointer hover:opacity-90 duration-100"
        onClick={handleOnClick}
      />
      <Image
        src="/png/user-profile.png"
        alt="user profile"
        width={150}
        height={150}
      />
      <div className="text-center font-semibold text-xl my-4">
        <p>ขอแสดงความยินดีกับ</p>
        <p>
          คุณ {participant.firstName} {participant.lastName}
        </p>
      </div>
      <div className="text-center text-sm">
        <p>เลขประจำตัวผู้เข้าสัมภาษณ์: {participant.interviewRefNo}</p>
        <p>รอบสัมภาษณ์: เช้า 9.00-12.00</p>
      </div>
      <div className="text-center font-semibold mt-4">
        <p>ผ่านเข้ารอบสัมภาษณ์ สาขา {participant.major}🎉</p>
        <p>Young Webmaster Camp 20</p>
      </div>
    </div>
  );
};

export default ParticipantResult;
