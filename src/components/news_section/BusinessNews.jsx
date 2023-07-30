import DataFetching from "../DataFetching";

const BusinessNews = ({ data }) => {
  return (
    <DataFetching
      data={data}
      category={"business"}
      section={"Business News"}
      url={"mockBusinessNews"}
    />
  );
};

export default BusinessNews;
