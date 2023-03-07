export const register = user => {
    return fetch('http://developers.gictsystems.com/api/dummy/submit/', {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const listofItems =() => {
    return fetch('http://developers.gictsystems.com/api/dummy/items/', {
        method: "GET",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization:'Bearer ALDJAK23423JKSLAJAF23423J23SAD3'
          }
                 })
        .then(response=>{
          return response.json();
         })
    .catch(err=>console.log(err))
    }
