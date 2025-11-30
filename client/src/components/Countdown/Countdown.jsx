import React, { useState, useEffect, useRef } from 'react';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isFinished, setIsFinished] = useState(false);
  const targetDateRef = useRef(targetDate);

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDateRef.current - now;

    if (difference <= 0) {
      // Countdown finished
      setIsFinished(true);
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (difference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    setTimeLeft({
      days,
      hours,
      minutes,
      seconds
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // -------- UI ---------
  if (isFinished) {
    return (
      <div className="flex flex-col items-center mt-10">
        <p className="text-3xl font-bold text-white text-center">
          🎉 Welcome to Prajwalan 24 🎉
        </p>
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center justify-between mt-8 bg-transparent sm:bg-transparent'>
      <p className='text-xl text-white font-bold mb-2 mt-10 sm:text-3xl sm:mt-4 text-center'>
        Prajwalan is on the way
      </p>

      <div className='flex sm:flex-row justify-center items-center sm:ml-8 p-2 pb-14 sm:pb-36 mt-4'>

        {/* Days */}
        <div className='text-4xl flex flex-col text-center text-white mb-8 sm:mb-0 mr-4 sm:mr-8 shadow-2xl rounded-[10px] h-14 w-14 p-8 sm:p-12 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
          <span className='text-gray-200 text-4xl sm:text-6xl'>{timeLeft.days}</span>
          <div className='text-xs sm:text-lg font-bold text-white mt-7'>DAYS</div>
        </div>

        {/* Hours */}
        <div className='text-4xl flex flex-col text-center text-white mb-8 sm:mb-0 mr-4 sm:mr-8 shadow-2xl rounded-[10px] h-14 w-14 p-8 sm:p-12 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
          <span className='text-gray-200 text-4xl sm:text-6xl'>{timeLeft.hours}</span>
          <div className='text-xs sm:text-lg font-bold text-white mt-7'>HOURS</div>
        </div>

        {/* Minutes */}
        <div className='text-4xl flex flex-col text-center text-white mb-8 sm:mb-0 mr-4 sm:mr-8 shadow-2xl rounded-[10px] h-14 w-14 p-8 sm:p-12 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
          <span className='text-gray-200 text-4xl sm:text-6xl'>{timeLeft.minutes}</span>
          <div className='text-xs sm:text-lg font-bold text-white mt-7'>MINUTES</div>
        </div>

        {/* Seconds */}
        <div className='text-4xl flex flex-col text-center text-white shadow-2xl rounded-[10px] h-14 w-14 p-8 sm:p-12 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
          <span className='text-gray-200 text-4xl sm:text-6xl'>{timeLeft.seconds}</span>
          <div className='text-xs sm:text-lg font-bold text-white mt-7'>SECONDS</div>
        </div>

      </div>
    </div>
  );
};

export default Countdown;
