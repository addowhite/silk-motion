(() => {

  let clock = new SM.Clock();

  function update() {
    SM.Time.deltaTime = clock.tick();
  }

  SM.Time = {};
  SM.Time.deltaTime = 0;
  SM.Time.update = update;

})();
