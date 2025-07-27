import { makeAutoObservable } from "mobx";

class TimeStore {
  currentTime = new Date();

  constructor() {
    makeAutoObservable(this);
    this.startUpdatingTime();
  }

  // Action для обновления времени
  updateTime() {
    this.currentTime = new Date();
  }

  startUpdatingTime() {
    this.timerId = setInterval(() => {
      this.updateTime(); // Используем action вместо прямого изменения
    }, 1000);
  }

  stopUpdatingTime() {
    clearInterval(this.timerId);
  }

  get minutes() {
    return this.currentTime.getMinutes();
  }

  get isDivisibleBy5() {
    return this.minutes % 5 === 0;
  }

  get formattedTime() {
    return this.currentTime.toLocaleTimeString();
  }

  get formattedDate() {
    return this.currentTime.toLocaleDateString();
  }
}

const timeStore = new TimeStore();
export default timeStore;