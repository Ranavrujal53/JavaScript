import React from "react";
import { NotificationProvider } from "./Component/NotificationContext";
import NotificationDemo from "./Component/NotificationDemo";


function App() {

  return (

    <NotificationProvider>

      <NotificationDemo />

    </NotificationProvider>

  );
}

export default App;