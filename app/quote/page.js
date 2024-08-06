import React from "react";
import TypeWriter from "../ui/quote/TypeWriting";
import { Suspense } from "react";
import QuoteSkeleton from "../ui/quote/QuoteSkeleton";
const url = "https://zenquotes.io/api/random";
const fetchQuote = async () => {
  const response = await fetch(url, { cache: "no-store" });
  if (!response) {
    throw new Error("Failed to fetch quote...");
  }
  const data = await response.json();
  return data;
};
const QuotePage = async () => {
  let data = await fetchQuote();

  return (
    <div>
      <TypeWriter data={data} />

      <button className="btn btn-secondary mt-8">Get a new quote</button>
    </div>
  );
};

export default QuotePage;
