// import {useEffect, useState} from 'react';
// // import {fetch} from 'node-fetch';
// import axios from 'axios';


// const character = () => {

//     const [characters, setcharacters] = useState([]);
//     const [search, setsearch] = useState('');

//     useEffect(() => {
//         fetchData('iron');
//     }, []);

//     const fetchData = async (searchData) => {
//         const result_character = await fetch(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/1588223984659099/search/${searchData}`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         const data = await result_character.json();
//         console.log(data);
//         setcharacters(data.results);

        
//     }

//     const handleChange = (e) => {
//         setsearch(e.target.value);
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(search);
//         fetchData(search);
//     }

  

//     return (<>
//       <div>
//           <h1 className='text-3xl mb-3' style={{'display' : 'flex', 'justify-content' : 'center'}}>Marvel</h1>
//       </div>

//       <div className='flex justify-center'>
//             <input onChange={handleChange} value={search} type="text" className='py-2 px-1 bg-slate-200 rounded-md' placeholder="Enter the Character Name" />
//             <div>
//                 <button className='py-3 px-1 bg-blue-400 ml-3 text-white rounded-md' onClick={handleSubmit}>Search</button>
//             </div>
//       </div>

              

//         <div className=''>
//             <div className='flex flex-wrap'>
//                 {characters && characters.map((character, index) => {
//                     return <div key={index} className='w-1/5  p-3'>
//                         <div className='bg-white rounded-md shadow-md'>
//                             <div className='flex justify-center'>
//                                 <img src={character.image.url} alt={character.name} className='h-64'/>
//                             </div>
//                             <div className='flex justify-center py-5'>
//                                 <h3 className='text-center text-xl'>{character.name}</h3>
//                             </div>
//                             <div className='flex justify-center'>
//                                 <p className='text-center text-sm'>{character.description}</p>
//                             </div>
//                         </div>
//                     </div>
//                 }
//                 )}
//             </div>
//         </div>


//     </>
//     )
//   }
  
//   export default character;