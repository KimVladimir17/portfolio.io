import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function MainPlayLike() {
  const [likes, setLikes] = useState(9);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const savedLikes = localStorage.getItem("likes");
    const savedState = localStorage.getItem("liked");
    if (savedLikes) setLikes(Number(savedLikes));
    if (savedState) setLiked(savedState === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("likes", likes.toString());
    localStorage.setItem("liked", liked.toString());
  }, [likes, liked]);

  const toggleLike = () => {
    if (liked) {
      setLikes((prev) => prev - 1);
      setLiked(false);
    } else {
      setLikes((prev) => prev + 1);
      setLiked(true);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg card-hover border border-gray-200  ">
      <h2 className="text-2xl font-bold  mb-4 flex items-center gap-5">
        <FaHeart color="#DC2626" /> Like Counter
      </h2>

      <div className="main-like flex flex-col items-center py-14">
        <motion.span
          key={likes}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-4xl font-bold text-red-600 mb-4"
        >
          {likes}
        </motion.span>
        <motion.button
          onClick={toggleLike}
          whileTap={{ scale: 0.9 }}
          animate={{
            scale: liked ? 1 : 1,
            rotate: liked ? [0, 10, -10, 0] : 0,
          }}
          transition={{ duration: 0.4 }}
          className={` flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700`}
        >
          <FaHeart className="text-white" />
          Like
        </motion.button>
      </div>
    </div>
  );
}
