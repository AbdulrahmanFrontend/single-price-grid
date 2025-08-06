import Subscription from "./Subscription";
import WhyUs from "./WhyUs";
import "../App.css";
const Down = () => {
  const list = [
    { id: 1, text: "Tutorials by industry experts" },
    { id: 2, text: "New videos every week" },
    { id: 3, text: "Peer & expert code review" },
    { id: 4, text: "Coding exercises" },
    { id: 5, text: "Access to our GitHub repos" },
    { id: 6, text: "Community forum" },
    { id: 7, text: "Flashcard decks" },
  ];
  return (
    <div className="down w-full md:flex">
      <Subscription />
      <WhyUs list={list} />
    </div>
  );
};
export default Down;
