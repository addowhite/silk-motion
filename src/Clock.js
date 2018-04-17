(() => {

  class Clock {

    constructor() {
      this.tick();
      this.tps = 0;
      this.tpsTickCount = 0;
      this.tpsElapsedTime = 0;
    }

    tick() {
      this.tpsTickCount++;
      const timeDiff = -this.lastTick + (this.lastTick = performance.now());
      if ((this.tpsElapsedTime += timeDiff) > 1000) {
        this.tps = this.tpsTickCount / this.tpsElapsedTime * 1000;
        this.tpsTickCount = this.tpsElapsedTime = 0;
      }
      return timeDiff;
    }

  }

  SM.Clock = Clock;

})();
