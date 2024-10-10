import PropTypes from "prop-types";

const SplitText = ({ text }) => {
  const textArray = text.split("");

  return (
    <>
      <span className="visible">
        {textArray.map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </span>
      <span className="hidden">
        {textArray.map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </span>
    </>
  );
};

SplitText.propTypes = {
  text: PropTypes.string,
};

export default SplitText;
