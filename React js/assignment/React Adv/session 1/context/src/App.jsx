import Feed from "./components/Feed";
import { UserContext } from "./context/UserContext";

function App() {
  const user = {
    name: "Rahul",
    email: "rahul@gmail.com",
  };

  return (
    <UserContext.Provider value={user}>
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="mx-auto max-w-2xl px-4">
          
          <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
            React Context API
          </h1>

          <Feed />

        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;