import { useApi } from "@/context/apiContext";
import { revalidateTag } from "next/cache";
import { useState } from "react";
import { revalidTag } from "@/server_actions/revalidate";

const useCreateCompany = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [business, setBusiness] = useState("");
  const [province, setProvince] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [tel, setTel] = useState("");
  const [picture, setPicture] = useState("");
  const [success, setSuccess] = useState(false);
  const { sendRequest } = useApi();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const handleBusinessChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBusiness(event.target.value);
  };

  const handleProvinceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProvince(event.target.value);
  };

  const handlePostalcodeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPostalcode(event.target.value);
  };

  const handleTelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTel(event.target.value);
  };

  const handlePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPicture(event.target.value);
  };

  const handleSubmit = async () => {
    const req = {
      name,
      address,
      business,
      province,
      postalcode,
      tel,
      picture,
    };
    try {
      setSuccess(false);
      const data = await sendRequest("POST", req, "/api/v1/companies");
      setSuccess(true);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    name,
    address,
    business,
    province,
    postalcode,
    tel,
    picture,
    handleNameChange,
    handleAddressChange,
    handleBusinessChange,
    handlePictureChange,
    handlePostalcodeChange,
    handleTelChange,
    handleProvinceChange,
    handleSubmit,
    success,
  };
};

export default useCreateCompany;
