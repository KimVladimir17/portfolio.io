import pokeball from "/pokeball.png";
import "./Loading.css";
import { AnimatePresence, motion } from "framer-motion";

export default function Loading() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="loading h-48"
      >
        <div className="loading-back"></div>
        <img src={pokeball}></img>
      </motion.div>
    </AnimatePresence>
  );
}
