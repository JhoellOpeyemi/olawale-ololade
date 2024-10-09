import { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { WorksContext } from "../../context";

const DesktopWork = ({ work, index, data }) => {
  const { setSelected } = useContext(WorksContext);

  const handleClick = (work) => {
    setSelected(work);
  };

  return (
    <div className="work-wrapper">
      <div className="title-n-progress">
        <Link
          to={work.slug}
          className="work-title work-text"
          onClick={() => handleClick(work)}
        >
          <span>{work.title}</span>
        </Link>
        <p className="progress">
          0{index + 1} / 0{data.length}
        </p>
      </div>
      <Link
        to={work.slug}
        className="work-image-wrapper"
        onClick={() => handleClick(work)}
      >
        <img src={work.src} alt="" />
        <div className="overlay" />
      </Link>
      <Link
        to={work.slug}
        className="work-images-number work-text"
        onClick={() => handleClick(work)}
      >
        {work.number} Pictures
      </Link>
    </div>
  );
};

DesktopWork.propTypes = {
  work: PropTypes.object,
  index: PropTypes.number,
  data: PropTypes.array,
};

export default DesktopWork;
