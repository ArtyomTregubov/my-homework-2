import { observer } from "mobx-react";
import timeStore from "../stores/timeStore";

const Clock = observer(() => {
  return (
    <section className="clock">
      <div className="clock__container">
        <div className="clock__item">Текущее время: {timeStore.formattedTime}</div>
        <div className="clock__item">Дата: {timeStore.formattedDate}</div>
      </div>
      {timeStore.isDivisibleBy5 && (
        <div className="clock__division">Время делится на 5</div>
      )}
    </section>
  );
});

export default Clock;