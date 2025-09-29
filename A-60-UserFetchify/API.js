 
     document.getElementById("LodeUser").addEventListener('click',function () {
        const countText =    document.getElementById("userCount").value;
        const count = parseInt  (countText);
        
        fetch('https://jsonplaceholder.typicode.com/users')
           .then(res => res.json ())
           .then(data =>{
             data = data.slice(0,count )
               const  usersContainer = document.getElementById("users")
               usersContainer.innerHTML = '';
               for (let i = 0; i < data.length; i++) {
                   const user = data[i];  
                   const p = document.createElement('p')
                   p.innerHTML = `
                    <p  class= "user" >Name: <strong> ${user.name} </ strong> <button  onClick= "getUserDetali( ${user.id})" > Get-
                     - ${ user.id} </button> `;
                   usersContainer.appendChild(p)
                    
               // console.log(user);
                   
               }
           })
       //  console.log(count);
        })
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
           function getUserDetali(userId) {
               fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                .then(res => res.json()) 
                .then(data => {
                    
                    console.log(data)
    
                   const detail = document.getElementById("userDetail")
                   detail.innerHTML = `
                   <h1>${data.name} </h1>
                     <h4> Email:${data.email} </h4>
                   <p> Phon:${data.phone} </p>
                    
                   `
                })
   
           }