(() => {

  class Motion {

    constructor(...args) {
      this.pos = new SM.Vector(...args.slice(0, 2));
      this.vel = new SM.Vector(...args.slice(2, 4));
      this.acc = new SM.Vector(...args.slice(4, 6));
      this.jerk = new SM.Vector(...args.slice(6, 2));
    }

    copy() {
      let copy = new Motion();
      copy.pos = this.pos.copy();
      copy.vel = this.vel.copy();
      copy.acc = this.acc.copy();
      copy.jerk = this.jerk.copy();
      return copy;
    }

    getFuture(time) {
      time /= 1000;
      let future = this.copy();

      future.pos = future.pos
        .add(future.vel.mul(time))
        .add(future.acc.mul(time * time * .5))
        .add(future.jerk.mul(time * time * time * 1.0 / 6.0));

      future.vel = future.vel
        .add(future.acc.mul(time))
        .add(future.jerk.mul(time * time * .5));

      future.acc = future.acc.add(future.jerk.mul(time));

      return future;
    }

  }

  SM.Motion = Motion;

})();
