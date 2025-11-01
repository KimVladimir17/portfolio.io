import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MdTimer } from "react-icons/md";

export default function MainPlayTimer() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isActive) {
      const startTime = Date.now() - time;
      intervalRef.current = window.setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isActive]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    const pad = (n: number, z = 2) => n.toString().padStart(z, "0");
    return (
      <div className="w-[218px]">
        <span className="px-2">{pad(minutes)}</span>:
        <span className="px-2">{pad(seconds)}</span>:
        <span className="px-2">{pad(milliseconds)}</span>
      </div>
    );
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg card-hover border border-gray-200 ">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-5">
        <MdTimer color="#9333ea" />
        Timer
      </h2>
      <div className="flex flex-col justify-center py-14">
        <div className="flex items-center justify-center mb-4">
          <motion.div
            key={time}
            initial={{ opacity: 0.9, y: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-4xl font-bold text-gray-800 select-none"
          >
            {formatTime(time)}
          </motion.div>
        </div>
        <div className="flex justify-center gap-2">
          <button
            onClick={() => setIsActive(true)}
            className={`${
              isActive ? "bg-green-700" : "bg-green-500"
            }  text-white px-4 py-2 rounded-lg hover:bg-green-700 transition`}
          >
            Start
          </button>
          <button
            onClick={() => setIsActive(false)}
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition"
          >
            Stop
          </button>
          <button
            onClick={() => {
              setTime(0);
              setIsActive(false);
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
