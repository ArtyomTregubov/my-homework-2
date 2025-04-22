import Clock from "./Clock"
import Greeting from "./Greeting"
import Header from "./Header"
import { useState, useEffect } from "react";


function Container() {

  const names = ['Артём', 'Евгений', 'Расим', 'Максим', 'Ксения', 'Елена', 'ALexander', 'Кристина'];
  const [name, setName] = useState('');
  
  useEffect(() => {
    generateRandomName();
    
    
    const intervalId = setInterval(generateRandomName, 10000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  const generateRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    setName(names[randomIndex]);
  };

  return (
    <>
      <div className="container">
        <Header/>
        <Greeting
          name={name}
        />
        <Clock/>
      </div>
    </>
  )
}

export default Container
