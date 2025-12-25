"use client";

import { formatDate, formatTime } from "@/lib/utils";
import Image from "next/image";

import { useEffect, useState } from "react";
import ClockIcon from "./icons/ClockIcon";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  const [displayTime, setDisplayTime] = useState("");
  const [displayDate, setDisplayDate] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setDisplayTime(formatTime(time));
    setDisplayDate(formatDate(time));
  }, [time]);

  return (
    <div className="flex flex-col items-center gap-5 border-2 border-outline rounded-md p-5 bg-primary-container dark:bg-primary-container">
      <div className="flex flex-row gap-5 items-start">
        <div className="text-6xl font-bold text-on-primary-container">
          {displayTime}
        </div>
        <div className="text-1xl text-on-primary-container">
          {time.getHours() >= 12 ? "PM" : "AM"}
        </div>
      </div>
      <ClockIcon size={64} className="stroke-on-primary-container" />
      <div className="text-2xl font-bold text-on-primary-container">
        {displayDate}
      </div>
    </div>
  );
}
