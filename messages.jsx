import { useEffect, useState } from "react";

export const Messages = () => {
  const [advice, setAdvice] = useState("");
  
  useEffect(() => {
    const url = "https://api.adviceslip.com/advice";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json.slip.advice);
        setAdvice(json.slip.advice);
      } catch (error) {
        console.log("Error ", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <p className="text-center text-2xl text-green-600">Случайный совет: <span className="text-red-500">{advice}</span></p>
    </div>
  );
};
