import { DateTime } from 'luxon';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

interface TimeLeftInterface {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export const Counter = () => {
  const targetDate = useMemo(
    () =>
      DateTime.fromISO('2023-12-01T00:00:00', {
        zone: 'America/Mexico_City',
      }),
    []
  );

  const formatNumber = (value: number): string => {
    return value < 10 ? `0${value}` : `${value}`;
  };

  const calculateTimeLeft = useCallback((): TimeLeftInterface => {
    const now = DateTime.local();
    const { days, hours, minutes, seconds } = targetDate
      .diff(now, ['days', 'hours', 'minutes', 'seconds'])
      .toObject();
    return {
      days: formatNumber(Math.max(Math.floor(days || 0), 0)),
      hours: formatNumber(Math.max(Math.floor(hours || 0), 0)),
      minutes: formatNumber(Math.max(Math.floor(minutes || 0), 0)),
      seconds: formatNumber(Math.max(Math.floor(seconds || 0), 0)),
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeftInterface | null>();

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      setTimeLeft(updatedTimeLeft);

      if (
        updatedTimeLeft.days === '00' &&
        updatedTimeLeft.hours === '00' &&
        updatedTimeLeft.minutes === '00' &&
        updatedTimeLeft.seconds === '00'
      ) {
				console.log('first')
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className='timer'>
      <h2 className='timer__title'>FALTAN</h2>
      {timeLeft && (
        <div className='timer__wrapper'>
          <div className='timer__element'>
            <span className='timer__number'>{timeLeft.days}</span>
            <span className='timer__label'>DÍAS</span>
          </div>
          <div className='timer__element'>
            <span className='timer__number'>{timeLeft.hours}</span>
            <span className='timer__label'>HRS</span>
          </div>
          <div className='timer__element'>
            <span className='timer__number'>{timeLeft.minutes}</span>
            <span className='timer__label'>MIN</span>
          </div>
          <div className='timer__element'>
            <span className='timer__number'>{timeLeft.seconds}</span>
            <span className='timer__label'>SEG</span>
          </div>
        </div>
      )}
    </div>
  );
};
