import propTypes from "prop-types";
import "../App.css";
const WhyUs = ({ list }) => {
  return (
    <div className="why-us md:w-1/2 p-10 relative after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0 after:opacity-20 after:bg-white z-10">
      <ul className="relative z-10">
        <h2 className="mb-5 text-2xl text-white font-bold">Why Us</h2>
        {list.map((item) => (
          <li className="text-lg mb-1 font-normal" key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
WhyUs.propTypes = {
  list: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      text: propTypes.string.isRequired,
    })
  ).isRequired,
};
export default WhyUs;
