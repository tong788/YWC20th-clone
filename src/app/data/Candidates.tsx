import { useState, useEffect } from "react";

interface Candidate {
  firstName: string;
  lastName: string;
  interviewRefNo: string;
  major: string;
}

interface Candidates {
  id: string;
  design: Candidate[];
  programming: Candidate[];
  marketing: Candidate[];
  content: Candidate[];
}

export const useGetCandidateData = (interviewRef: string = "PG07") => {
  const [candidates, setCandidates] = useState<Candidates|null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.ywc20.ywc.in.th/homework/candidates",
          {
            headers: {
              "x-reference-id": interviewRef,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch candidate data");
        }

        const data = await response.json();
        
        setCandidates(data);

      } catch (error) {
        console.error("Fetch error:", error);
        setError(error instanceof Error ? error.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchCandidates();
  }, [interviewRef]);

  return { candidates, error, loading };
};

export type { Candidate }