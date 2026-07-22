import React, { useEffect, useState } from 'react'

function IPLScoreFetcher() {
    const [headline, setHeadline] = useState("");

    useEffect(() => {
        fetch(" https://jsonplaceholder.typicode.com/posts")
        .then((Response) => Response.json())
        .then((data) => {
            setHeadline(data[0].title);
        })
        .catch((error) => {
            console.log("Error Fetching data:",error);
            
        });
    },[]);
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
                🏏 IPL Match Headline
            </h2>
            <p className="text-center text-gray-700">
                {headline || "Loading..."}
            </p>
        </div>
  )
}

export default IPLScoreFetcher
