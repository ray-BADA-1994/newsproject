// import React from 'react'

import { Blackbar } from "../components/Blackbar";
// import Card from "../components/card component/Card"

// NEWS SECTION IMPORTS
import BusinessNews from "../components/news_section/BusinessNews";
import SportsNews from "../components/news_section/SportsNews";
import GeneralNews from "../components/news_section/GeneralNews";
import ScienceNews from "../components/news_section/ScienceNews";
import EntertainmentNews from "../components/news_section/EntertainmentNews";
import HealthNews from "../components/news_section/HealthNews";
import TechNews from "../components/news_section/TechNews";
import { useQueries, useQuery } from "@tanstack/react-query";

export const Home = () => {
  // const [
  //   generalNews,
  //   sportNews,
  //   businessNews,
  //   scienceNews,
  //   entertainmentNews,
  //   healthNews,
  //   techNews,
  // ] = useQueries({
  //   queries: [
  //     {
  //       queryKey: ["generalnews"],
  //       queryFn: () =>
  //         fetch(`https://mockjsonapi.onrender.com/mockGeneralNews`).then(
  //           (res) => res.json()
  //         ),
  //     },
  //     {
  //       queryKey: ["sportsnews"],
  //       queryFn: () =>
  //         fetch(`https://mockjsonapi.onrender.com/mockSportNews`).then((res) =>
  //           res.json()
  //         ),
  //     },
  //     {
  //       queryKey: ["businessnews"],
  //       queryFn: () =>
  //         fetch(`https://mockjsonapi.onrender.com/mockBusinessNews`).then(
  //           (res) => res.json()
  //         ),
  //     },
  //     {
  //       queryKey: ["sciencenews"],
  //       queryFn: () =>
  //         fetch(`https://mockjsonapi.onrender.com/mockScienceNews`).then(
  //           (res) => res.json()
  //         ),
  //     },
  //     {
  //       queryKey: ["entertainmentnews"],
  //       queryFn: () =>
  //         fetch(`https://mockjsonapi.onrender.com/mockEntertainmentNews`).then(
  //           (res) => res.json()
  //         ),
  //     },
  //     {
  //       queryKey: ["healthnews"],
  //       queryFn: () =>
  //         fetch(`https://mockjsonapi.onrender.com/mockHealthNews`).then((res) =>
  //           res.json()
  //         ),
  //     },
  //     {
  //       queryKey: ["technews"],
  //       queryFn: () =>
  //         fetch(`https://mockjsonapi.onrender.com/mockTechNews`).then((res) =>
  //           res.json()
  //         ),
  //     },
  //   ],
  // });

  const generalNews = useQuery({
    queryKey: ["generalnews"],
    queryFn: () =>
      fetch(`https://mockjsonapi.onrender.com/mockGeneralNews`).then((res) =>
        res.json()
      ),
  });

  const sportNews = useQuery({
    queryKey: ["sportsnews"],
    queryFn: () =>
      fetch(`https://mockjsonapi.onrender.com/mockSportNews`).then((res) =>
        res.json()
      ),
  });

  const businessNews = useQuery({
    queryKey: ["businessnews"],
    queryFn: () =>
      fetch(`https://mockjsonapi.onrender.com/mockBusinessNews`).then((res) =>
        res.json()
      ),
  });

  const scienceNews = useQuery({
    queryKey: ["sciencenews"],
    queryFn: () =>
      fetch(`https://mockjsonapi.onrender.com/mockScienceNews`).then((res) =>
        res.json()
      ),
  });

  const entertainmentNews = useQuery({
    queryKey: ["entertainmentnews"],
    queryFn: () =>
      fetch(`https://mockjsonapi.onrender.com/mockEntertainmentNews`).then(
        (res) => res.json()
      ),
  });
  const healthNews = useQuery({
    queryKey: ["healthnews"],
    queryFn: () =>
      fetch(`https://mockjsonapi.onrender.com/mockHealthNews`).then((res) =>
        res.json()
      ),
  });

  const techNews = useQuery({
    queryKey: ["technews"],
    queryFn: () =>
      fetch(`https://mockjsonapi.onrender.com/mockTechNews`).then((res) =>
        res.json()
      ),
  });

  const isLoading =
    generalNews.isLoading ||
    sportNews.isLoading ||
    businessNews.isLoading ||
    scienceNews.isLoading ||
    entertainmentNews.isLoading ||
    healthNews.isLoading ||
    techNews.isLoading;

  const isError =
    generalNews.isError ||
    sportNews.isError ||
    businessNews.isError ||
    scienceNews.isError ||
    entertainmentNews.isError ||
    healthNews.isError ||
    techNews.isError;

  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 w-full h-[100vh] bg-[rgba(0,0,0,0.4)] flex justify-center items-center">
        <div className="spinner"></div>
      </div>
    );
  }

  if (isError) {
    return <h1>{Error}</h1>;
  }

  // const newsDatas = [
  //   generalNews.data,
  //   sportNews.data,
  //   businessNews.data,
  //   scienceNews.data,
  //   entertainmentNews.data,
  //   healthNews.data,
  //   techNews.data,
  // ];

  return (
    <div className="pt-5">
      <Blackbar />
      <div className=" main-index-container-layout mt-3">
        <GeneralNews data={generalNews.data} />
        {sportNews.data[0].data.length != 0 && (
          <SportsNews data={sportNews.data} />
        )}
        <BusinessNews data={businessNews.data} />
        <ScienceNews data={scienceNews.data} />
        <EntertainmentNews data={entertainmentNews.data} />
        <HealthNews data={healthNews.data} />
        <TechNews data={techNews.data} />
      </div>
    </div>
  );
};
