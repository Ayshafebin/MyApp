import React, { useEffect, useState } from 'react'

const Fetch = () => {

    // const [posts,setPosts] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.postalpincode.in/pincode/673307')
    //     .then(response => response.json())
    //     .then(data => setPosts(data[0].PostOffice))
    // },[])

    // fetch('https://api.postalpincode.in/pincode/673307')
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error(error))

    const fetching = async() => {
      try {
        const response = await fetch('https://api.postalpincode.in/pincode/673307')
        const datas = await response.json()
        const value = datas[0].PostOffice.map((item) => item.Name)
        console.log(value);
      }
      catch(error){
        console.log(error);
      }
    }
    fetching()




  return (
    // <div>
    //     {posts.map((post) => <h3>{post.Name}</h3> )}
    // </div>

    <div>

    </div>
  )
}

export default Fetch

