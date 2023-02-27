import { motion } from "framer-motion";

const Review = (props: { body: string, name: string, left: boolean }) => {
  const { body, name, left } = props;
  let wrapperStyle: string;

  if (left) {
    wrapperStyle = "self-end rounded-l-md";
  } else {
    wrapperStyle = "rounded-r-md";
  }

  return (
    <motion.div
      className={`${wrapperStyle} relative bg-stone-200 shadow-lg text-black p-7 w-3/4 mb-20`}
      initial={left ? { left: 100 } : { right: 100 }}
      whileInView={left ? { left: 0 } : { right: 0 }}
    >
      <p>{body}</p>
      <p className="font-bold text-lg text-right mt-4">-- {name}</p>
    </motion.div>
  )
}

export default Review;