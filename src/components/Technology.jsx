import { motion } from "framer-motion";

function Technology({ title, src, link }) {
  return (
    <motion.a
      href={link}
      whileHover={{
        scale: 1.1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex px-6 gap-2"
      target="_"
    >
      <div className=" max-w-fit  py-1">{title} </div>
      <motion.img
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        src={src}
        height={24}
        width={24}
      />
    </motion.a>
  );
}

export default Technology;
