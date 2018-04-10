# Silk Motion
A javascript library that handles integration of motion irrespective of framerate.

# Installation & Building
Open a terminal and navigate to the directory where you wish to clone this library's source code, then execute the following commands:
```
git clone https://www.github.com/addowhite/silk-motion.git
cd silk-motion
npm install
npm run build
```
There should now be a file called "silk-motion-min.js" in the "dist" folder. This is the file you copy and include in your project.
There's also an example usage html file in the "examples" folder.
Now that you've built the library, you can open this in your browser of choice (yes, even Microsoft Edge).

# Usage
All library members are accessed via the global 'SM' object. e.g. `SM.Time.deltaTime`

If you call `SM.Time.update()` at the start of each frame/iteration of your game/animation/visualisation you can then use the `SM.Time.deltaTime` variable to get the number of milliseconds since the last iteration.

In the case that you have multiple update loops running at different rates you can use the `SM.Clock` class.
Create `Clock` instance with `var myClock = new SM.Clock()`, then calling `myClock.tick()` will return the elapsed milliseconds since the last tick.

The `SM.Motion` class is what actually handles the motion integration.
Create an instance with `var myMovement = new SM.Motion(posX, posY, velX, velY, accX, accY, jerkX, jerkY)`, all arguments are optional and will default to zero if omitted, null or undefined.
These values can also be set with `myMovement.acc.x = 10` or `myMovement.pos.y = 20` etc.

You can then call `myMovement.getFuture(milliseconds)` which does not modify the `Motion` instance and instead returns a new `Motion` representing the future state.
This means that integrated, framerate-independant motion can be achieved simply by running the following code every frame:
```
SM.Time.update();
myMovement = myMovement.getFuture(SM.Time.deltaTime);
```
