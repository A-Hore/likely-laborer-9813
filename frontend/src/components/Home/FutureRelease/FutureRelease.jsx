import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFeatureReleasedData } from "../../../Redux/AppReducer/action";
// import "../Trending.css";
const FutureReleased = () => {
  const dispatch = useDispatch();
  const Featured_data = useSelector((state) => state.AppReducer.Featured);
  console.log(Featured_data);
  const isLoading = useSelector((state) => state.AppReducer.isLoading);
  useEffect(() => {
    dispatch(getFeatureReleasedData);
  }, [dispatch]);
  return (
    <>
      <h1 className="Watchfree">Watch Entire seasons</h1>
      <div className="TrendingDiv">
        {isLoading && <h1>Loading....</h1>}
        {Featured_data.length > 0 &&
          Featured_data.map((item) => {
            return (
              <Link to={`Future/${item._id}`}>
                <img src={item.Poster} alt={item.Title} />
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default FutureReleased;
