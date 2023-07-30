import DataFetching from "../DataFetching";

const ScienceNews = ({ data }) => {
  return (
    <DataFetching
      data={data}
      category={"science"}
      section={"Science News"}
      url={"mockScienceNews"}
    />
  );
};

export default ScienceNews;
