"use client";

import Lottie from "lottie-react";

export default function AnimationLottie({ animationData }) {
    return (
        <Lottie
            animationData={animationData}
            loop
            autoplay
            style={{ width: "100%", height: "100%" }}
        />
    );
}
