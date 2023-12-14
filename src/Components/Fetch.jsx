import React, { useEffect, useState } from 'react'

const Fetch = () => {

    const [posts,setPosts] = useState([]);

    useEffect(() => {
        fetch('https://api.postalpincode.in/pincode/673307')
        .then(response => response.json())
        .then(data => setPosts(data[0].PostOffice))
    },[])


  return (
    <div>
        {posts.map((post) => <h3>{post.Name}</h3> )}
    </div>
  )
}

export default Fetch

