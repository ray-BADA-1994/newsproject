/* eslint-disable react/prop-types */
import DataFetching from "../DataFetching";

const GeneralNews = ({ data }) => {
  return (
    <DataFetching data={data} section={"World News"} url={"mockGeneralNews"} />
  );
};

export default GeneralNews;
