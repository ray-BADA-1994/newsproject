/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react'
import CardTesting from "./card component/CardTesting";
import usePosts from "../hooks/useFetch";
import CardTestingLoader from "./card component/CardTestingLoader";
import jsonData from "../data/data.json";
import { useState, useEffect, createContext } from "react";
import { useQuery } from "@tanstack/react-query";

// import { useState } from 'react'

export const dataContext = createContext();

const DataFetching = (props) => {
  const { section, url, data } = props;

  return (
    <dataContext.Provider value={{ data, section, url }}>
      <CardTesting />
    </dataContext.Provider>
  );
};

export default DataFetching;
