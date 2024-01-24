import { baseUrl } from "@/config";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useFetchOutlets() {
  const API_URI = `${baseUrl}/api/outlets`;

  const { data: outlets, isLoading } = useQuery({
    queryKey: ["outlets"],
    queryFn: async () => {
      const { data } = await axios.get(API_URI);
      return data;
    },
  });

  return { outlets, isLoading };
}

export default useFetchOutlets;
