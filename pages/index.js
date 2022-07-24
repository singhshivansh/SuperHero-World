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

  const [showModal, setShowModal] = useState(false);

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

  const randomColor = () => {
    return Math.floor(Math.random()*16777215).toString(16);
  }

  const openModal = async (id) => {
    
    const response = await fetch('/api/characters/'+id);
    const data = await response.json();
    console.log(data);
    setselectedCharacter(data);
    
    setShowModal(true);
    // console.log("Hekki");


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
                <div key={index} className="lg:w-1/6 md:w-1/4 sm:w-2/4 h-64 p-3 cursor-pointer" onClick={()=>openModal(character[0])}>
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
    
    <>
     
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative my-6 py-5 pt-32 mx-auto max-w-7xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {selectedCharacter.name}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex">
                  <div className='w-1/3 px-1'>
                    <img src={selectedCharacter.images.lg} alt="character" className="w-80 rounded-md" />  
                  </div>
                  <div className='px-1 w-2/3'>
                    <div className='flex justify-between'>
                      <div className='w-1/2'>
                        <p className="text-center text-md font-mono text-bold pb-0">Full Name</p>
                        <p className="text-center text-lg font-semibold  font-mono pt-0">{selectedCharacter.biography.fullName}</p>
                      </div>
                      <div className='w-1/2'>
                        <p className="text-center text-md font-mono text-bold pb-0">Alter Ego</p>
                        <p className="text-center text-lg font-semibold  font-mono pt-0">{selectedCharacter.biography.alterEgos}</p>
                      </div>
                    </div>

                    <hr className='pt-5'></hr>

                    <div className='flex justify-between'>
                      <div className='w-1/2'>
                        <p className="text-center text-md font-mono text-bold pb-0">Place of Birth</p>
                        <p className="text-center text-lg font-semibold  font-mono pt-0">{selectedCharacter.biography.placeOfBirth}</p>
                      </div>
                      <div className='w-1/2'>
                        <p className="text-center text-md font-mono text-bold pb-0">Bases</p>
                        <p className="text-center text-lg font-semibold  font-mono pt-0">{selectedCharacter.work.base.split(',')[0]}</p>
                      </div>
                    </div>

                    <hr className='pt-5'></hr>

                    <div className='flex justify-between'>
                      <div className='w-1/2'> 
                        <p className="text-md font-mono text-center text-bold pb-0">Occupation</p>
                        <p className=" text-lg text-start font-semibold  font-mono pt-0">{selectedCharacter.work.occupation.split(';').slice(0,3).map((alias, index) => {
                          return (
                            <>
                              <p className="text-start text-base font-semibold  font-mono pt-0">{index + 1}. {alias}</p>
                            </>
                          )
                        })}</p>
                      </div>
                      <div className='w-1/2'>
                        <p className="text-center text-md font-mono text-bold pb-0">Aliases</p>
                        <p className="text-center text-lg font-semibold  font-mono pt-0">{selectedCharacter.biography.aliases.slice(0,3).map((alias, index) => {
                          return (
                            <>
                              <p className="text-start text-base font-semibold  font-mono pl-5">{index + 1}. {alias}</p>
                            </>
                          )
                        })}</p>
                      </div>
                    </div>

                    <hr className='pt-5'></hr>

                    <div className='flex justify-between'>
                      <div className='w-1/2'> 
                        <p className="text-md text-center text-bold pb-0">RELATIVES</p>
                        <p className=" text-lg text-start font-semibold  font-mono pt-0">{selectedCharacter.connections.relatives.split(',').slice(0,3).map((alias, index) => {
                          return (
                            <>
                              <p className="text-start text-base font-semibold  font-mono pt-0">{index + 1}. {alias}</p>
                            </>
                          )
                        })}</p>
                      </div>
                      <div className='w-1/2'>
                        <p className="text-center text-md text-bold pb-0">Group Affiliation</p>
                        <p className="text-center text-lg font-semibold  font-mono pt-0">{selectedCharacter.connections.groupAffiliation.split(',').slice(0,3).map((alias, index) => {
                          return (
                            <>
                              <p className="text-start text-base font-semibold  font-mono pl-5">{index + 1}. {alias}</p>
                            </>
                          )
                        })}</p>
                      </div>
                    </div>


                    <hr className='py-3'></hr>

                    <div className='flex justify-evenly'>
                      <div className=''>
                        <p className="text-center text-md font-mono text-bold pb-0">Height</p>
                        <p className="text-center text-lg font-semibold  font-mono pt-0">{selectedCharacter.appearance.height[0]}</p>
                      </div>
                      <div className=''>
                        <p className="text-center text-md font-mono text-bold pb-0">Weight</p>
                        <p className="text-center text-lg font-semibold  font-mono pt-0">{selectedCharacter.appearance.weight[1]}</p>
                      </div>
                      <div className=''>
                        <p className="text-center text-md font-mono text-bold pb-0">Race</p>
                        <p className="text-center text-lg font-semibold  font-mono pt-0">{selectedCharacter.appearance.race}</p>
                      </div>
                      <div className=''>
                        <p className="text-center text-md font-mono text-bold pb-0">Gender</p>
                        <p className="text-center text-lg font-semibold  font-mono pt-0">{selectedCharacter.appearance.gender}</p>
                      </div>
                    </div>

                    
                  </div>
                </div>

                <div className='grid grid-rows-2 grid-flow-col gap-4 '> 
                  { Object.keys(selectedCharacter?.powerstats).map(x => {
                    return (
                      <> 
                      { selectedCharacter?.powerstats[x] != "null" ? 

                          <div xs={6} lg={4} className="text-center ">
                            <p className="p-3 font-karla-normal text-xl font-thin font-sans"  >
                              <strong className='font-bold'> {x.toUpperCase()}: </strong>
                              <br/>
                              <label className="font-karla-heavy text-5xl font-bold" style={{
                                color: "#" + randomColor(),
                              }} > 
                                { selectedCharacter?.powerstats[x] }
                              </label>
                              <label className='font-bold'>/100</label>
                            </p>
                          </div>
                      
                        : null 
                      }
                      </>
                    )
                  }) }

                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  </>
  )
}

export default Index;