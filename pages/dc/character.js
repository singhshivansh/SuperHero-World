// import {useEffect, useState} from 'react';
// // import {fetch} from 'node-fetch';
// import axios from 'axios';


// const character = () => {

//     const [characters, setcharacters] = useState([]);
//     const [search, setsearch] = useState('');

//     useEffect(() => {
//         fetchData('super');
//     }, []);

//     const fetchData = async (searchData) => {
//         const result_character = await fetch(`https://super-hero-world.herokuapp.com/get_dc_character?name_contain=${searchData}`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         const data = await result_character.json();
//         console.log(data);
//         if(data.length > 0){
//             setcharacters(data);
//         }else{
//             setcharacters([]);
//         }

        
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
//                     return <div key={index} className='w-1/5 h-auto p-3'>
//                         <div className='bg-white rounded-md shadow-md'>
//                             <div className='flex justify-center'>
//                                 <img src={character.Image} alt={character.Name} className='h-64' />
//                             </div>
//                             <div className='flex justify-center'>
//                                 <h3 className='text-center text-xl'>{character.Name}</h3>
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