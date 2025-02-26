import React from "react";
import FacebookLogin from "@greatsumini/react-facebook-login";

const FacebookAuth = () => {
  const handleResponse = async (response) => {
    console.log("Facebook Response:", response);

    if (response.accessToken) {
      const res = await fetch("http://localhost:2407/api/auth/facebook/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ accessToken: response.accessToken }),
      });

      const data = await res.json();
      console.log("Server Response:", data);
      localStorage.setItem("token", data.token); // Lưu JWT Token
    }
  };

  return (
    <FacebookLogin
      appId="1981387695680457" // Thay bằng App ID của bạn
      onSuccess={handleResponse}
      onFail={(error) => console.error("Login Failed:", error)}
      onProfileSuccess={(profile) => console.log("User Profile:", profile)}
    />
  );
};

export default FacebookAuth;
