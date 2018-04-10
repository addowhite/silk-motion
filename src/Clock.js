(() => {

  class Clock {

    constructor() {
      this.tick();
    }

    tick() {
      const prev = this.lastTick;
      return (this.lastTick = performance.now()) - prev;
    }

  }

  SM.Clock = Clock;

})();
