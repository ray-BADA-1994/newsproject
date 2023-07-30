import DataFetching from "../DataFetching";

const EntertainmentNews = ({ data }) => {
  return (
    <DataFetching
      data={data}
      category={"entertainment"}
      section={"Entertainment News"}
      url={"mockEntertainmentNews "}
    />
  );
};

export default EntertainmentNews;
