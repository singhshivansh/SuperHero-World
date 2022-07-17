import { useState ,useEffect } from 'react';
import {data} from '../data/data.js';

const index = () => {
  const char = [720, 70, 644, 346, 149];
  const [featuredCharacters, setfeaturedCharacters] = useState([]);
  useEffect(() => {
    console.log(char.includes(346));
    data.filter(item => {
      if(char.includes(parseInt(item[0]))){
        setfeaturedCharacters(prevState => [...prevState, item]);
      }
    })
  }, []);

  return (<>
    <div className="bg-slate-600 flex py-5 justify-center">
        <a className="text-3xl text-white ">SuperHero World 
        </a>
    </div> 

    <div className="flex justify-center ">
      <div className=" w-5/6 ">
        <h3 className="text-4xl ">FEATURED CHARACTERS</h3>
        <hr className="bg-slate-500 mt-3 h-1"></hr>
        <div>
          <div className="flex flex-wrap justify-center">
            {featuredCharacters.slice(0,5).map((character, index) => {
              return (
              <>
                <div key={index} className="lg:w-1/5 md:w-1/4 sm:w-2/4 h-auto p-3">
                  <div className="bg-white rounded-md shadow-md">
                    <div className="flex justify-center">
                      <img src={character[2]} alt="character" className="h-64" />
                    </div>
                    <div className="flex justify-center">
                      <h3 className="text-center text-xl">{character[1]}</h3>
                    </div>
                  </div>
                </div>
              </>)
              })}
            </div>
        </div>
      </div>
    </div>

    <div className="flex justify-center my-3">
        <input className="bg-slate-200 px-2 rounded-md mr-3" placeholder="Enter the Character Name" />
        <button className="py-1 px-3 bg-teal-600 rounded-md text-white">Search</button>
    </div>

    
  </>
  )
}

export default index;