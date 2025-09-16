import { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { WorksContext } from "../../context";

const MobileWork = ({ work, index, data }) => {
  const { setSelected, setIndexOfSelected } = useContext(WorksContext);

  const handleClick = (work) => {
    setSelected(work);
    setIndexOfSelected(index);
  };

  return (
    <div className="work-wrapper">
      <Link
        to={work.slug}
        className="work-image-wrapper"
        onClick={() => handleClick(work)}
        aria-label={`View ${work.title} images`}
      >
        <img src={work.src} alt="" />
        <div className="overlay" />
      </Link>

      <div className="title-n-number">
        <p className="work-title work-text">{work.title}</p>
        <p className="work-images-number work-text">{work.number} Pictures</p>
      </div>

      <p className="progress">
        0{index + 1} / 0{data.length}
      </p>
    </div>
  );
};

MobileWork.propTypes = {
  work: PropTypes.object,
  index: PropTypes.number,
  data: PropTypes.array,
};

export default MobileWork;
