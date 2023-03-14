import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Component/Card";
import { addToHistory, lasUploadContent } from "../redux/action/actionCreators";
import { GetContent } from "../redux/thunk/getContent";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { filter, content } = state;
  const { loading, contentData } = content;
  const { lastUpload } = filter;

  const timeFilter = () => {
    return contentData.map((t) => t.date);
  };

  const handleAddToHistory = () => {
    const url = window.location.pathname;
    dispatch(addToHistory(url));
  };

  useEffect(() => {
    dispatch(GetContent());
  }, [dispatch]);

  const handleSortByLastUploadDate = (item) => {
    dispatch(lasUploadContent(item));
  };

  return (
    <div>
      <div className="flex gap-2 justify-end">
        <button
          onClick={() => handleSortByLastUploadDate("asc")}
          className="btn btn-xs btn-primary mt-3"
        >
          Last upload
        </button>

        <button
          onClick={() => handleSortByLastUploadDate("desc")}
          className="btn btn-xs btn-primary mt-3"
        >
          Fist upload
        </button>
      </div>

      {Array.isArray(contentData) && contentData.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-4 md:mt-5">
          {contentData
            .sort((a, b) => a.date === "ace")
            .map((item, index) => (
              <Card data={item} handleAddToHistory={handleAddToHistory} />
            ))}
        </div>
      ) : (
        <p>No content available</p>
      )}
    </div>
  );
};

export default Home;
