import { useState, useEffect } from "react";

function Greeting({ name }) {
  const [prevName, setPrevName] = useState(null);
  const [showChangeMessage, setShowChangeMessage] = useState(false);

  useEffect(() => {
    if (prevName !== null && prevName !== name) {
      setShowChangeMessage(true);
      const timer = setTimeout(() => setShowChangeMessage(false), 2000); 
      return () => clearTimeout(timer);
    }
    setPrevName(name);
  }, [name, prevName]);

  return (
    <section className="greeting">
      {showChangeMessage ? (
        <div className="greeting__change-message">
          Привет, у тебя поменялось имя, теперь ты {name}!
        </div>
      ) : (
        <div className="greeting__normal">Привет, {name}!</div>
      )}
    </section>
  );
}

export default Greeting;