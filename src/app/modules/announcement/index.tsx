import { useGetCandidateData } from "@/app/data/Candidates";
import { Candidate } from "@/app/data/Candidates";

//อาจจะทำระบบกรอง
const Announcement = () => {

  const { candidates, error, loading } = useGetCandidateData("PG07");

  // Flatten all candidates into a single array
  const allCandidates: Candidate[] = candidates
    ? [
        ...candidates.design,
        ...candidates.programming,
        ...candidates.marketing,
        ...candidates.content,
      ]
    : [];


  if (error) {
    return (
      <div>
        <p className="text-center text-red-500 mt-8">{error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div>
        <p className="text-center mt-8">Loading...</p>
      </div>
    );
  }

  return (
    <div className="mt-8 flex flex-col items-center">
      <div className="w-full max-w-2xl mt-4 px-4">
        <p className="text-center font-bold text-xl mb-4">Congratulations to all candidates</p>
        {allCandidates.length > 0 ? (
          allCandidates.map((candidate) => (
            <div
              key={candidate.interviewRefNo}
              className="bg-white/10 p-4 mb-2 rounded hover:bg-white/20"
            >
              {candidate.firstName} {candidate.lastName} - {candidate.major}
            </div>
          ))
        ) : (
          <div className="text-center">
            No candidates found
          </div>
        )}
      </div>
    </div>
  );
};

export default Announcement;
