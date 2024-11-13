import React, { useEffect, useState } from "react";
import Forms from "./components/forms";

const App = () => {
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const storedUser = localStorage.getItem("user"); 
    if (storedUser) {
      setUser(JSON.parse(storedUser)); 
    }
  }, []);  

  const handleAddUser = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData)); 
    setUser(userData); 
  };

  return (
    <div>
     
      <Forms onAddUser={handleAddUser} />  
    </div>
  );
};

export default App;
