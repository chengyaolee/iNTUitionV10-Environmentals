"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import SkeletonOne from "./SkeletonOne";
import { useAuth } from "@/hooks/AuthProvider";
import heartIcon from "/heart.svg";

export const LayoutGrid = ({ cards, range, userCollections }) => {
  const [selected, setSelected] = useState();
  const [lastSelected, setLastSelected] = useState();
  const { user } = useAuth();

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-6 pt-0 grid grid-cols-2 md:grid-cols-3  max-w-7xl mx-auto gap-4 ">
      {cards.map((card, i) => (
        <div
          key={i}
          className={cn(
            card.className,
            "flex justify-center items-center",
            card.id >= range[0] && card.id <= range[1] ? "" : "hidden"
          )}
        >
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-md cursor-pointer fixed inset-0 h-[90vw] w-[80vw] max-h-[500px] max-w-[500px] md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-sm h-[10rem] w-[10rem]"
                : "bg-white rounded-sm h-[10rem] w-[10rem]",
              userCollections[card.id - 1]
                ? userCollections[card.id - 1].count > 0
                  ? ""
                  : "grayscale"
                : ""
            )}
            layout
          >
            {selected?.id === card.id && (
              <SelectedCard
                selected={selected}
                userCollections={userCollections}
              />
            )}
            <BlurImage card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const BlurImage = ({ card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={card.thumbnail}
      onLoad={() => setLoaded(true)}
      className={cn(
        "border-4 border-stone-700 absolute inset-0 h-full w-full transition duration-200",
        loaded ? "blur-none" : "blur-md"
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected, userCollections }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected ? (
          <SkeletonOne
            name={selected.name}
            element={selected.element}
            rarity={selected.rarity}
            description={selected.description}
            owned={
              userCollections[selected.id - 1]
                ? userCollections[selected.id - 1].count > 0
                  ? false
                  : true
                : false
            }
            id={selected.id}
          />
        ) : null}
      </motion.div>
    </div>
  );
};
