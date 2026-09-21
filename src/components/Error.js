import React from "react";
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div style={{ textAlign: "center", padding: "80px 20px" }}>
      <div style={{ fontSize: "80px" }}>😕</div>
      <h1 style={{ fontSize: "32px", fontWeight: "800", margin: "16px 0 8px" }}>
        {err?.status === 404 ? "Page Not Found" : "Oops! Something went wrong"}
      </h1>
      <p style={{ color: "#93959f", marginBottom: "32px" }}>
        {err?.data || err?.message || "An unexpected error occurred."}
      </p>
      <Link to="/">
        <button className="contact-submit-btn" style={{ width: "auto", padding: "12px 32px" }}>
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
