"use client";

import { useState, JSX } from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface Screen {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

const screens: Screen[] = [
  {
    id: 1,
    title: "Welcome to YetaGo 🚗💨",
    subtitle: "Send and receive parcels easily through trusted local drivers.",
    image: "/truck.gif",
  },
  {
    id: 2,
    title: "Smart Pickup Points 📦",
    subtitle:
      "Drop your packages at nearby YetaGo pickup spots — quick, safe, and convenient.",
    image: "/deliver.gif",
  },
  {
    id: 3,
    title: "Track Every Move 📍",
    subtitle: "Know where your parcel is, every step of the way.",
    image: "/pack.gif",
  },
];

export default function OnboardingScreens(): JSX.Element {
  const [index, setIndex] = useState<number>(0);
  const isLast = index === screens.length - 1;

  const handleNext = (): void => {
    if (isLast) {
      // Only show AuthScreen when clicking "Get Started" on the last screen
      return;
    }
    setIndex((prev) => prev + 1);
  };
  
  const handleBack = (): void => setIndex((prev) => (prev > 0 ? prev - 1 : prev));

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    if (info.offset.x < -100 && !isLast) handleNext();
    if (info.offset.x > 100) handleBack();
  };

  const handleGetStarted = (): void => {
    // Only show AuthScreen when clicking "Get Started" on the last screen
    if (isLast) {
      setShowAuth(true);
    } else {
      handleNext();
    }
  };

  const [showAuth, setShowAuth] = useState<boolean>(false);

  if (showAuth) {
    return <AuthScreen />;
  }

  const { title, subtitle, image } = screens[index];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-between p-6 text-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          className="flex flex-col items-center gap-6  cursor-grab active:cursor-grabbing"
        >
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            className="rounded-2xl "
            quality={50}
          />
          <h1 className="text-3xl font-bold text-black">{title}</h1>
          <p className="text-gray-700 pb-6 max-w-xs">{subtitle}</p>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between flex-col-reverse space-y-3 items-center w-full max-w-sm mb-10">
        <button
          onClick={handleBack}
          disabled={index === 0}
          className="text-gray-500 font-medium disabled:opacity-40"
        >
          Back
        </button>
        <div className="flex gap-2 pt-5">
          {screens.map((_, i) => (
            <div
              key={i}
              className={`w-20 h-2 rounded-full ${
                i === index ? "bg-black" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center   text-white rounded-full overflow-hidden">
          {!isLast ? (
            <button
              onClick={handleNext}
              className="flex bg-black items-center gap-2 px-8 py-3 font-medium"
            >
              Continue <ArrowRight size={16} />
            </button>
          ) : (
            <button
              onClick={handleGetStarted}
              className="bg-lime-400 text-black font-semibold px-8 py-3  rounded-full hover:bg-lime-300 w-full"
            >
              Get Started
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function AuthScreen(): JSX.Element {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);

  const router = useRouter()

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold text-lime-300 mb-8">YetaGo</h1>
      <div className="bg-gray-900 rounded-3xl shadow-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h2>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
          />
          <button className="bg-lime-300 text-black font-semibold hover:bg-lime-400 p-3 rounded-xl">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <div className="flex items-center justify-center mt-6">
          <p className="text-gray-400 text-sm">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
          </p>
          <button
            onClick={() => router.push('/home')}
            className="ml-2 text-lime-300 font-semibold hover:underline"
          >
            {isSignUp ? "Sign In" : "Create one"}
          </button>
        </div>
        <div className="flex flex-col items-center mt-6">
          <button className="flex items-center justify-center gap-2 w-full bg-white text-black font-semibold rounded-xl p-3 hover:bg-gray-100">
            <Image src="/icons/google.svg" alt="Google" width={20} height={20} />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}