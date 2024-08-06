import React from "react";
import CelebritiesList from "../ui/celebrities/CelebritiesList";
const url = "https://api.api-ninjas.com/v1/celebrity";
const fetchCelebrities = async () => {
  const response = await fetch(url);
  if (!response) {
    throw new Error("Failed to fetch quote...");
  }
  const data = await response.json();
  console.log(data);
  return data;
};
const CelebritiesPage = async () => {
  <div>
    <h1 className="text-7xl"> Celebrity page</h1>
  </div>;
};

export default CelebritiesPage;
