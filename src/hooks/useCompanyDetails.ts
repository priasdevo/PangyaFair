import { useApi } from "@/context/apiContext";
import { useState } from "react";
interface company {
  name: string;
  id: string;
  business: string;
  address: string;
  tel: string;
  picture: string;
}

const useCompanyDetails = () => {
  const [company, setCompany] = useState<company>();
  const { sendRequest } = useApi();
  const getCompany = async (id: string) => {
    try {
      const response = await sendRequest("GET", {}, "/api/v1/companies/" + id);
      setCompany(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return { company, getCompany };
};

export default useCompanyDetails;
