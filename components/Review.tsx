import { motion } from "framer-motion";

const Review = (props: { body: string, name: string, left: boolean }) => {
  const { body, name, left } = props;
  let wrapperStyle: string;

  if (left) {
    wrapperStyle = "self-end rounded-l-md md:rounded-md self-end";
  } else {
    wrapperStyle = "rounded-r-md md:rounded-md self-start";
  }

  return (
    <motion.div
      className={`relative ${wrapperStyle} bg-stone-200 shadow-lg text-black p-7 w-3/4 max-w-xl mb-20`}
      initial={left ? { left: 100, opacity: .2 } : { right: 100, opacity: .2 }}
      whileInView={left ? { left: 0, opacity: 1 } : { right: 0, opacity: 1 }}
    >
      <p>{body}</p>
      <p className="font-bold text-lg text-right mt-4">-- {name}</p>
    </motion.div>
  )
}

export default Review;