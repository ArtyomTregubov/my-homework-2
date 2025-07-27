import timeStore from "./timeStore";

class RootStore {
  constructor() {
    this.timeStore = timeStore;
  }
}

const rootStore = new RootStore();
export default rootStore;