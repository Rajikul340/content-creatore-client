import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Component/Card";
import {
  addTagFilter,
  addToHistory,
  lasUploadContent,
  removeTagFilter,
  searchContent,
} from "../redux/action/actionCreators";
import { GetContent } from "../redux/thunk/getContent";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { filters, content } = state;
  const { loading, contentData, search } = content;

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

  let displyContent ;

   if(contentData){
    displyContent= Array.isArray(contentData) && contentData.length > 0 ? (
      <div className="grid md:grid-cols-3 gap-4 md:mt-5">
        {contentData?.map((item, index) => (
          <Card key={item._id} data={item} handleAddToHistory={handleAddToHistory} />
        ))}
      </div>
    ) : (
      <p>No content available</p>
    )
   }
  if (search) {
    displyContent = Array.isArray(contentData) && contentData.length > 0 ? (
      <div className="grid md:grid-cols-3 gap-4 md:mt-5">
        {contentData?.filter(seacrContent=>seacrContent.tags.toLowerCase().includes(search.toLowerCase())).map((item, index) => (
          <Card key={item._id} data={item} handleAddToHistory={handleAddToHistory} />
        ))}
      </div>
    ) : (
      <p>No content available</p>
    )
  }
  return (
    <div>
      <div className="flex gap-2 justify-end">
        <input
          type="text"
          className="border outline-0 mt-2"
          placeholder="filter content"
          id="title"
          onChange={(e) => dispatch(searchContent(e.target.value))}
        />
  
        <button className="btn btn-xs btn-primary mt-3">Filter</button>
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
 {
  displyContent
 }
    
    </div>
  );
};

export default Home;
