"use client";
import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CarProps } from "@/types";
import { generateCarImageUrl } from "@/utils";

interface CarDetailsProps {
  isOpen: boolean;
  car: CarProps;
  closeModal: () => void;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return <div>cardetails</div>;
};

export default CarDetails;
