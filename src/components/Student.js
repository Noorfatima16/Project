import React, { useState } from 'react';

 const  Student =() => {
  const [user, setUser] = useState(
        {
            Name: '', Id: '', Number: '' 
        }
    )
    let name, value
      console.log(user)
    const data = (e) =>{
      name = e.target.name;
      value = e.target.value;
      setUser({...user, [name]: value});
    }
    const getdata = async (e) =>{
      const{Name, Id, Number} = user;
        e.preventDefault();
      const options = {
      method: 'POST',
      headers: {
       'Content-Type': 'aplication/json'
    },
    body: JSON.stringify({
          Name, Id, Number 
    })
   }
   const res = await fetch('https://pre-test-425d2-default-rtdb.firebaseio.com/UserData.json',
      options
   )
   if(res)
   {
      alert(" message sent")
   }
   else{
   alert("error occured")
   }
  }
  
  
  return (
    <div className='student'>
      <br /><br />
      <div className="container">
 {/* <form onSubmit={handleSubmit}> */}
       <form method="POST">
        <label>
          Name:
           <input type="text" name="Name" value={user.Name} autoComplete="off" required onChange={data} /> 
          </label>
       <br /><br />
          <label>
          Student ID:
          <input type="text" name="Id" value={user.Id} autoComplete="off" required onChange={data}/>
        </label> 
         <br /><br /> 
        <label>
          Contact Information:
          
          <input type="number" name="Number" value={user.Number} autoComplete="off" required onChange={data} />
        </label>
        <br /><br />
        <button type="submit" onClick={getdata} style={{"border-radius": "10px",border:"white", fontSize:"25px"}}>Submit</button>
      </form>
         </div>
    </div>
  )
}

 export default Student



