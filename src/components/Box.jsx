import React, { useEffect, useState } from "react";
import axios from 'axios';
function Box() {

    const [quote, setquote] = useState([]);

  const generate = async () => {
    const options = {
        method: 'GET',
        url: 'https://random-quote-generator2.p.rapidapi.com/randomQuote',
        headers: {
          'X-RapidAPI-Key': 'ed67f26ca5msh9836f59584af8d5p137bc6jsn2e0fb0b90074',
          'X-RapidAPI-Host': 'random-quote-generator2.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          const quoteData = response.data;
          setquote(quoteData)
        //   console.log(quote)
        //   console.log(response.data);
      } catch (error) {
          console.error(error);
      }
  };  

  return (
    <div className="h-screen w-full bg-slate-400 relative">
      <div className="box border-2 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-500">
        <div className="h-36 w-full bg-red-500 text-green-300 text-center text-5xl font-bold">
          <h1>Random Quotes</h1>
          <button onClick={generate} className="  generate-btn border-2 mt-5 rounded-md text-4xl text-black">
            Generate
          </button>
        </div>
        <div className="w-full p-5 text-2xl ">
          {quote.map((item,index)=>{
            return <p className=" font-mono" key={index}>{item.Quote}</p>
          })}
        </div>
      </div>
    </div>
  );
}

export default Box;
