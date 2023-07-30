import DataFetching from "../DataFetching";

const TechNews = ({ data }) => {
  return (
    <DataFetching
      data={data}
      category={"technology"}
      section={"Tech News"}
      url={"mockTechNews"}
    />
  );
};

export default TechNews;
