(() => {

  class Vector {

    constructor(...args) {
      args = this._prepArgs(args);
      this.x = args[0] || 0;
      this.y = args[1] || 0;
    }

    _prepArgs(args) {
      let newArgs = args.slice(0, 2);

      if (args.length === 1) {
        if (typeof args[0] === 'number') {
          newArgs[1] = args[0];
        } else {
          newArgs[1] = args[0].y;
          newArgs[0] = args[0].x;
        }
      }

      return newArgs;
    }

    copy() {
      return new Vector(this);
    }

    add(...args) {
      args = this._prepArgs(args);
      return new Vector(this.x + args[0], this.y + args[1]);
    }

    sub(...args) {
      args = this._prepArgs(args);
      return new Vector(this.x - args[0], this.y - args[1]);
    }

    mul(...args) {
      args = this._prepArgs(args);
      return new Vector(this.x * args[0], this.y * args[1]);
    }

    div(...args) {
      args = this._prepArgs(args);
      return new Vector(this.x / args[0], this.y / args[1]);
    }

    mag() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    normalize() {
      let mag = this.mag();
      return new Vector(this.x / mag, this.y / mag);
    }

  }

  SM.Vector = Vector;

})();
