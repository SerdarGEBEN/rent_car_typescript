import { CarType } from "../../types";
import Info from "./Info";
import Button from "../button";
import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../modal";
import generateImage from "../../utils/generatelmage";

const Card = ({ car }: { car: CarType }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    /* arabaların kaydırıldığındaki animasyon için */
    <motion.div
      initial={{ scake: 0.5, opacty: 0 }}
      whileInView={{
        scale: 1,
        opacity: 1,
      }}
      className="car-card group"
    >
      {/* araba ismi*/}
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>

      {/*araba fiyatı */}
      <div className="flex-mt-6 text-[19px]">
        <span className="fond-semibold">₺</span>
        <span className="text-[32px]">
          {/* 1500- 8500 rastgele sayı üretiyoruz */}
          {Math.round(Math.random() * 7000 + 1500)}
        </span>
        <span className="font-semibold self-end">/gün</span>
      </div>

      {/* resim alanı */}
      <div className="relative w-full h-40 my-3">
        <img
          className="w-full h-full object-contain"
          src={generateImage(car)}
          alt="car"
        />
      </div>

      {/* alt kısım */}
      <div className="w-full">
        <Info car={car} />
        <div className="hidden group-hover:flex mt-[4px]">
          <Button
            title="Daha Fazla"
            designs="w-full py-[25px]"
            icon="right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <Modal car={car} isOpen={isOpen} close={() => setIsOpen(false)} />
    </motion.div>
  );
};

export default Card;
