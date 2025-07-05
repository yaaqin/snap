import React from "react";
import Header from "../../components/header";
import CreateBransForm from "../../components/createBransForm";
import city from '../../assets/outline-landmarks-skyline 1.png'

export const CreateBrand: React.FC = () => {

  return (
    <section className="flex justify-center items-center min-h-screen bg-[#EBFBFF] relative">
      <img src={city} alt="" className="w-full absolute z-0"></img>
      <div className="relative z-20 w-full">
        <Header />
        <CreateBransForm />
      </div>
    </section>
  );
};

