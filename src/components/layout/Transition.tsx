"use client"
import { motion } from "framer-motion";
import { ComponentProps } from "react";


type AnimationSettings = Pick<ComponentProps<typeof motion.div>, "initial" | "animate" | "exit" | "transition">

type TransitionProps = {
    children: React.ReactNode
    animation?: AnimationSettings
}

export default function Transition({ children, animation }: TransitionProps) {

    const defaultAnimationSettings: AnimationSettings = {
        initial: {
            opacity: 0,
        },
        transition: {
            duration: .5,
            ease: "easeInOut",
        },
        animate: {
            opacity: 1,
        },
        exit: {
            opacity: 0,
        }
    };
    
    const animationProps: AnimationSettings = animation ?? defaultAnimationSettings

    return (
        <motion.div
            {...animationProps}
        >
            {children}
        </motion.div >
    )
}