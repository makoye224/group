import React from "react";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <p className="text-red-500">{error}</p>;
}

export default ErrorMessage;
