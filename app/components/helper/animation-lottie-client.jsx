"use client";

import dynamic from "next/dynamic";

// Load lottie-react on client only
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function AnimationLottieClient({ animationData }) {
    return (
        <Lottie
            animationData={animationData}
            loop
            autoplay
            style={{ width: "100%", height: "100%" }}
        />
    );
}
