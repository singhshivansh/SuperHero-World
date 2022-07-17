const index = () => {
  return (<>
    <div>
        <h1 style={{'display' : 'flex', 'justify-content' : 'center'}}>Marvel</h1>
    </div>

    <div>
        <h2 style={{'display' : 'flex', 'justify-content' : 'center'}}>Characters</h2>
    </div>
    <div className='d-flex justify-content-center'>
        <input className='form-control' placeholder='Enter to search the Character' />
    </div>            
  </>
  )
}

export default index