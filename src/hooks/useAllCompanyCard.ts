import { useApi } from "@/context/apiContext";
import { useEffect, useState } from "react";

type company = {
  id: string;
  name: string;
  picture: string;
};

const useAllCompanyCard = () => {
  const [allCompany, setAllCompany] = useState<company[]>([]);
  const { sendRequest } = useApi();

  async function getAllCompany() {
    try {
      const response = await sendRequest("GET", {}, "/api/v1/companies", [
        "companies",
      ]);
      console.log("Prias response : ", response);
      setAllCompany(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getAllCompany();
  }, []);

  return { allCompany, getAllCompany };
};

export default useAllCompanyCard;
