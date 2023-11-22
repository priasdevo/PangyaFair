import { useApi } from "@/context/apiContext";
import { useEffect, useState } from "react";

type company = {
  id: string;
  name: string;
  picture: string;
};

const useAllCompanyCard = () => {
  const [allCompany, setAllCompany] = useState<company[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [delete_id, setDeleteId] = useState("");
  const [delted_name, setDeletedName] = useState("");
  const { sendRequest } = useApi();

  async function getAllCompany() {
    try {
      const response = await sendRequest("GET", {}, "/api/v1/companies", [
        "companies",
      ]);
      console.log("Prias response : ", response.data);
      setAllCompany(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  async function deleteCompany() {
    try {
      const response = await sendRequest(
        "DELETE",
        {},
        `/api/v1/companies/${delete_id}`,
        ["companies"]
      );
      getAllCompany();
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllCompany();
  }, []);

  const onDelClikcHandle = (comp_id: string, comp_name: string) => {
    setDeleteId(comp_id);
    setDeletedName(comp_name);
    setIsModalOpen(true);
  };

  const onModalCancelHandle = () => {
    setIsModalOpen(false);
    setDeleteId("");
    setDeletedName("");
  };

  const onModalConfirmHandle = () => {
    deleteCompany();
    setIsModalOpen(false);
    setDeleteId("");
    setDeletedName("");
  };

  return {
    allCompany,
    getAllCompany,
    isModalOpen,
    onDelClikcHandle,
    delted_name,
    onModalCancelHandle,
    onModalConfirmHandle,
  };
};

export default useAllCompanyCard;
