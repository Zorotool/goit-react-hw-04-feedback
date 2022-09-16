
import PropTypes from "prop-types";
import styles from "./OptionsFeedback.module.css";

const OptionsFeedback = ({ options, clickFeedback }) => {

  const optionsKey = Object.keys(options);
  
  return (
    optionsKey.map(option => (
      <button
        type="button"
        name={option}
        className={styles.btn}
        onClick={clickFeedback}
      >
        {option}
      </button>
    )))
}


OptionsFeedback.propTypes = {
  options: PropTypes.shape(PropTypes.number.isRequired).isRequired,
  clickFeedback: PropTypes.func.isRequired,
};

export default OptionsFeedback;