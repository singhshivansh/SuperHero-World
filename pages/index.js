import { useState ,useEffect } from 'react';
import {data} from '../data/data.js';

const Index = () => {
  const char = [720, 70, 644, 346, 149, 659];
  const [featuredCharacters, setfeaturedCharacters] = useState([]);
  const [searchedCharacters, setsearchedCharacters] = useState([]);
  const [search, setsearch] = useState('');
  const [selectedCharacter, setselectedCharacter] = useState({
    id : '',
    name : '',
  });

  const [showModal, setshowModal] = useState(false);

  useEffect(() => {
    console.log(char.includes(346));
    data.filter(item => {
      if(char.includes(parseInt(item[0]))){
        setfeaturedCharacters(prevState => [...prevState, item]);
      }
    })

    var randoms = [...Array(10)].map(() => Math.floor(Math.random() * 700));
    data.filter(item=>{
      if(randoms.includes(parseInt(item))){
        setsearchedCharacters(prevState => [...prevState, item]);
      }
    })
  }, []);


  const handleChange = (e) => {
    setsearch(e.target.value);
    let arr = [];
    data.filter(item => {
      if(item[1].toLowerCase().includes(e.target.value.toLowerCase())){
        arr.push(item);
        // setsearchedCharacters(prevState => [...prevState, item]);
      }
    })
    setsearchedCharacters(arr);
  }

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
            {featuredCharacters.slice(0,6).map((character, index) => {
              return (
              <>
                <div key={index} className="lg:w-1/6 md:w-1/4 sm:w-2/4 h-64 p-3" onClick={()=>{
                  setselectedCharacter({
                    id : character[0],
                    name : character[1],
                  });
                }}>
                  <div className="bg-white rounded-md shadow-md ">
                    <div className="flex justify-center w-full">
                      <div className='flex flex-col justify-end'>
                        <img src={character[2]} alt="character" className="h-48" />
                        <h3 className="text-center text-xl">{character[1]}</h3>
                      </div>
                    </div>
                    <div className="flex justify-center">
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
        <input className="bg-slate-200 px-2 rounded-md mr-3" placeholder="Enter the Character Name" onChange={handleChange}/>
        <button className="py-1 px-3 bg-teal-600 rounded-md text-white">Search</button>
    </div>

    <div className="flex justify-center ">
      <div className=" w-5/6 ">
        <h3 className="text-4xl ">SEARCHED CHARACTERS</h3>
        <hr className="bg-slate-500 mt-3 h-1"></hr>
        <div className='min-h-full'>
          <div className="flex flex-wrap justify-center " style={{'minHeight' : '500px'}}>
            {searchedCharacters.slice(0, 12).map((character, index) => {
              return (
              <>
                <div key={index} className="lg:w-1/6 md:w-1/4 sm:w-2/4 p-3 h-64">
                  <div className="bg-white rounded-md shadow-md">
                    <div className="flex justify-center">
                      <img src={character[2]} alt="character" className="h-48" />
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
    
  </>
  )
}

export default Index;