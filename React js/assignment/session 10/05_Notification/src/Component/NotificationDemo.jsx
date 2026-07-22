import React, { useContext } from "react";
import NotificationContext from "./NotificationContext";

function NotificationDemo() {

  const {
    count,
    addNotification,
    clearNotifications
  } = useContext(NotificationContext);


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">

        <h1 className="text-3xl font-bold text-green-600 mb-6">
          WhatsApp Notification Demo
        </h1>


        <h2 className="text-xl font-semibold text-gray-700 mb-8">
          Unread Messages :
          <span className="text-blue-600 ml-2">
            {count}
          </span>
        </h2>


        <div className="flex gap-4 justify-center">

          <button
            onClick={addNotification}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
          >
            New Message
          </button>


          <button
            onClick={clearNotifications}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
          >
            Clear Messages
          </button>

        </div>

      </div>

    </div>
  );
}

export default NotificationDemo;