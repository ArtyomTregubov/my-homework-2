import { useState, useEffect } from "react";

function Clock() {

    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
        const timerId = setInterval(() => {
        setTime(new Date());
        }, 1000);
        
        return () => clearInterval(timerId);
    }, []);
    
    const minutes = time.getMinutes();
    const isDivisibleBy5 = minutes % 5 === 0;
    
    return (

        <section className="clock">
            <div className="clock__container">
                <div className="clock__item">Текущее время: {time.toLocaleTimeString()}</div>
                <div className="clock__item">Дата: {time.toLocaleDateString()}</div>
            </div>
            {isDivisibleBy5 && <div className="clock__division">Время делится на 5</div>}
        </section>

    )
}

export default Clock