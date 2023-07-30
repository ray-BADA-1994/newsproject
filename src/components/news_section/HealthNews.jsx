import DataFetching from "../DataFetching";

const HealthNews = ({ data }) => {
  return (
    <DataFetching
      data={data}
      category={"health"}
      section={"Health News"}
      url={"mockHealthNews"}
    />
  );
};

export default HealthNews;
