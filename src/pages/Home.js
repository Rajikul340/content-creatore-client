import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Component/Card";
import { SmallSpiner } from "../Component/smallSpiner";
import { GetContent } from "../redux/thunk/getContent";

const Home = () => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.content);
  const { error, loading, contentData } = content;

      console.log('loading', loading);
  useEffect(() => {
    dispatch(GetContent());
  }, [dispatch]);

  if (loading) return <p className="text-center">loading....</p>;
 
  return (
    <div className="grid md:grid-cols-3 gap-4 md:mt-5">
     {contentData?.map((singledata) => (
            <Card data={singledata} key={singledata._id} />
          ))}
    </div>
  );
};

export default Home;
