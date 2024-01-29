import CountUp from "react-countup";
const Counter = ({ number }) => {
  return <CountUp duration={3} className="stat-value " end={number} />;
};

export default Counter;
