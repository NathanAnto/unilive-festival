'use client'

import { useCallback, useEffect, useMemo, useState } from "react";

interface TimeLeft {
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function Countdown() {
    const targetDate: Date = useMemo(() => new Date(2025,5,1,16,0,0,0), []);
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({months: 0, days: 0, hours: 0, minutes: 0, seconds: 0});
    const [isClient, setIsClient] = useState(false)

    const calculateTimeLeft = useCallback(() =>{
        const now = new Date().getTime();
        let difference = targetDate.getTime() - now;
    
        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
        difference -= months * (1000 * 60 * 60 * 24 * 30);
    
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        difference -= days * (1000 * 60 * 60 * 24);
    
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
    
        return { months, days, hours, minutes, seconds };
    }, [targetDate]);

    useEffect(() => {
        setIsClient(true)
        const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
        return () => clearInterval(timer);
      }, [calculateTimeLeft]);

    return (
        <>
            <h1
                className={`flex flex-row justify-center mb-4 text-3xl sm:m-0 md:m-0 font-extrabold leading-none tracking-tight text-primary md:text-3xl lg:text-3xl dark:text-primary`}
            >
                {isClient ? "Unilive Édition 2025 dans:" : <div className="skeleton h-4 w-full"></div>}
            </h1>
            <div className='flex flex-row justify-center gap-5 p-5 text-xs'>
                <div>
                    <span className='countdown font-mono text-4xl'>
                        {isClient ? <span style={{ "--value": timeLeft.months } as React.CSSProperties}></span> : <span></span> }
                    </span>
                    mois
                </div>
                <div>
                    <span className='countdown font-mono text-4xl'>
                        {isClient ? <span style={{ "--value": timeLeft.days } as React.CSSProperties}></span> : <span></span>}
                    </span>
                    jour(s)
                </div>
                <div>
                    <span className='countdown font-mono text-4xl'>
                    {isClient ? <span style={{ "--value": timeLeft.hours } as React.CSSProperties}></span> : <span></span>}
                        
                    </span>
                    heure(s)
                </div>
                <div>
                    <span className='countdown font-mono text-4xl'>
                        {isClient ? <span  style={{ "--value": timeLeft.minutes } as React.CSSProperties}></span>: <span></span>}
                    </span>
                    minute(s)
                </div>
                <div>
                    <span className='countdown font-mono text-4xl'>
                        {isClient ? <span style={{ "--value": timeLeft.seconds } as React.CSSProperties}></span> : <span></span>}
                        
                    </span>
                    seconde(s)
                </div>
            </div>
        </>
    );
}
