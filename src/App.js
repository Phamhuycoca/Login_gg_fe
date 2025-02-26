import React from "react";
import GoogleAuth from "./GoogleAuth";
import FacebookAuth from "./FacebookAuth";

const App = () => {
  return (
   <>
    <div>
      <h2>Đăng nhập với Google</h2>
      <GoogleAuth />
    </div>
     <div>
     <h2>Đăng nhập với Google</h2>
     <FacebookAuth />
   </div>
   </>
  );
};

export default App;
