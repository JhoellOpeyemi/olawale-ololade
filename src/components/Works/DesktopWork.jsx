import { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { WorksContext } from "../../context";

const DesktopWork = ({ work, index, data }) => {
  const { setSelected, setIndexOfSelected } = useContext(WorksContext);

  const handleClick = (work) => {
    setSelected(work);
    setIndexOfSelected(index);
  };

  return (
    <div className="work-wrapper">
      <div className="title-n-progress">
        <p className="work-title work-text">
          <span>{work.title}</span>
        </p>
        <p className="progress">
          0{index + 1} / 0{data.length}
        </p>
      </div>
      <Link
        to={work.slug}
        className="work-image-wrapper"
        onClick={() => handleClick(work)}
        aria-label={`View ${work.title} images`}
      >
        <img src={work.src} alt="" />
        <div className="overlay" />
      </Link>
      <p className="work-images-number work-text">{work.number} Pictures</p>
    </div>
  );
};

DesktopWork.propTypes = {
  work: PropTypes.object,
  index: PropTypes.number,
  data: PropTypes.array,
};

export default DesktopWork;
