import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

interface ProjectDemoModalProps {
  videoUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDemoModal({
  videoUrl,
  isOpen,
  onClose,
}: ProjectDemoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-20 bg-black h-[542px] w-[316px] bg-opacity-70 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative w-full h-full max-w-5xl max-h-[80vh] ">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white text-2xl hover:text-red-400 transition z-50"
            >
              <FaTimes />
            </button>
            <motion.iframe
              src={videoUrl}
              title="Project Demo"
              className="w-full h-full rounded-lg"
              allow="autoplay; encrypted-media"
              allowFullScreen
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
