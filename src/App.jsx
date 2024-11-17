import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

import DayBox from "./components/DayBox";
import Header from "./components/Header";

function App() {
  const app = initializeApp();

  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <>
      <Header>SueChodule</Header>
      <section className="flex-column border-4 md:flex">
        {weekdays.map((day) => (
          <DayBox key={day} day={day}>
            {day}
          </DayBox>
        ))}
      </section>
      <div className="">
        <button className="float-right mx-6 capitalize border px-2 border-2">
          submit
        </button>
      </div>
    </>
  );
}

export default App;
