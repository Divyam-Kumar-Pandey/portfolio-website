'use client';

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation";

const StairTransition = () => {
    const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
        <motion.div />
    </AnimatePresence>
  )
}

export default StairTransition