export default function DayBox({ day }) {
  return (
    <div className="w-full p-2">
      <fieldset className="border rounded-lg border-slate-800 border-4">
        {/* labels each box */}
        <legend className="mx-4 px-2 uppercase font-extrabold">{day}</legend>
        <label htmlFor="scheduleInput" className="text-center block">
          What are you up for?
        </label>
        <div className="w-full flex">
          <input
            type="text"
            className="m-auto border-2 p-2 rounded-lg text-center"
            id="scheduleInput"
            placeholder={"Type your plan for " + day}
          />
        </div>
      </fieldset>
    </div>
  );
}
