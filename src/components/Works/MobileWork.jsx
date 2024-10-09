import { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { WorksContext } from "../../context";

const MobileWork = ({ work, index, data }) => {
  const { setSelected } = useContext(WorksContext);

  const handleClick = (work) => {
    setSelected(work);
  };

  return (
    <div className="work-wrapper">
      <Link
        to={work.slug}
        className="work-image-wrapper"
        onClick={() => handleClick(work)}
      >
        <img src={work.src} alt="" />
        <div className="overlay" />
      </Link>

      <div className="title-n-number">
        <Link
          to={work.slug}
          className="work-title work-text"
          onClick={() => handleClick(work)}
        >
          {work.title}
        </Link>
        <Link
          to={work.slug}
          className="work-images-number work-text"
          onClick={() => handleClick(work)}
        >
          {work.number} Pictures
        </Link>
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
