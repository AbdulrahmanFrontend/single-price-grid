import "../App.css";
const Subscription = () => {
  return (
    <div className="subscription md:w-1/2 p-10">
      <h2 className="mb-6 text-2xl text-white font-bold">
        Monthly Subscription
      </h2>
      <span className="price mb-4 text-5xl text-white font-bold flex items-center">
        $29{" "}
        <span className="interval text-xl font-normal ml-3 my-aut0">
          per month
        </span>
      </span>
      <p className="text-xl text-white mb-10">
        Full access for less than $1 a day
      </p>
      <a
        href="#"
        role="button"
        className="block text-center py-5 shadow-lg text-2xl focus:outline-hidden transition-all duration-300 hover:shadow-xl hover:brightness-95"
      >
        Sign Up
      </a>
    </div>
  );
};
export default Subscription;
