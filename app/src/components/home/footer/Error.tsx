import React from "react";

const Error: React.FC<{ message: string }> = ({ message }) => {
  return <p className="error-msg">{message}</p>;
};

export default Error;
