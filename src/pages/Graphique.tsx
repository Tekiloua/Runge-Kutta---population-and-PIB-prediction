import Barcharts from "../components/Barcharts";
import { motion } from "framer-motion";

export const Graphique = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col"
    >
      <Barcharts />
    </motion.div>
  );
};
