import DataFetching from "../DataFetching";

const SportsNews = ({ data }) => {
  return (
    <DataFetching
      data={data}
      category={"sports"}
      section={"Sports News"}
      url={"mockSportNews"}
    />
  );
};

export default SportsNews;
