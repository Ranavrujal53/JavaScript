import React, { useEffect, useState } from 'react';

function Userlist() {
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setusers(data);
        setloading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setloading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8">
        
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-2">
          👥 User Directory
        </h2>

        <p className="text-center text-gray-500 mb-8">
          List of users fetched from API
        </p>

        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300 mb-6">
          Load Users
        </button>

        {loading ? (
          <div className="flex justify-center items-center py-10">
            <div className="h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-white rounded-2xl p-5 border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                    {user.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-gray-800">
                      {user.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {user.email}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default Userlist;