import React, { useState } from "react";
import sculptureList from "../sculptureData";

const SculpturesList = () => {
  //STATE VARIABLE
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false)

  const sculpture = sculptureList[index];

  const handleClickNext = (e) => {
    e.stopPropagation();

    if (index + 1 < sculptureList.length) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      setIndex(0);
    }
  };

  const handleClickMore = (e) =>{
    e.stopPropagation();
    setShowMore(!showMore);
  }

  return (
    <div className="container" onClick={() => alert("container clicked")}>
      <section>
        <div className="top-container">
          <button onClick={handleClickNext}> Next &gt;&gt;</button>
          <h4>
            {sculpture.name} of the {sculpture.artist}
          </h4>
          <h5>
            ({index + 1} of {sculptureList.length})
          </h5>
        </div>
        <button onClick={handleClickMore}>{showMore ? 'Hide' : 'Show'} details</button>
        {showMore && <p>{sculpture.description}</p>}
        
      </section>

      <img src={sculpture.url} alt={sculpture.alt} />
    </div>
  );
};

export default SculpturesList;
