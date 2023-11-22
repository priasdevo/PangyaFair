"use client";

import { useApi } from "@/context/apiContext";
import { useEffect, useState } from "react";
import useCompanyDetails from "./useCompanyDetails";

interface booking {
  _id: string;
  bookingDate: Date;
  company: {
    name: string;
  };
}

const useBooking = (id: string) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState<Date>();
  const [bookings, setBookings] = useState<booking[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [delete_id, setDeleteId] = useState("");
  const [delted_name, setDeletedName] = useState("");
  const [delted_date, setDeletedDate] = useState<Date>();
  const { sendRequest } = useApi();

  const { company, getCompany } = useCompanyDetails();
  useEffect(() => {
    if (id) {
      getCompany(id);
    }
  }, [id]);
  useEffect(() => {
    if (company) {
      setName(company.id);
    }
  }, [company]);

  async function getBookings() {
    try {
      const response = await sendRequest("GET", {}, "/api/v1/bookings");
      setBookings(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function createBooking() {
    try {
      const response = await sendRequest(
        "POST",
        { bookingDate: date },
        `/api/v1/companies/${name}/bookings`
      );
      if (response.success) {
        getBookings();
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getBookings();
  }, []);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleSubmit = () => {
    createBooking();
  };

  const handleDeleteClick = (delId: string, delName: string, delDate: Date) => {
    setDeleteId(delId);
    setDeletedName(delName);
    setDeletedDate(delDate);
    setIsModalOpen(true);
  };

  return {
    name,
    date,
    bookings,
    handleNameChange,
    handleDateChange,
    handleSubmit,
    delted_name,
    delted_date,
    handleDeleteClick,
    isModalOpen,
  };
};

export default useBooking;
