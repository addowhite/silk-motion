(() => {

  let clock = new SM.Clock();

  function update() {
    SM.Time.deltaTime = clock.tick();
    SM.Time.fps = clock.tps;
  }

  SM.Time = {};
  SM.Time.deltaTime = 0;
  SM.Time.fps = 0;
  SM.Time.update = update;

})();
