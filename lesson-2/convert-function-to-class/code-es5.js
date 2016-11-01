function Plane(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
}

Plane.prototype.startEngines = function () {
    console.log('starting engines...');
    this.enginesActive = true;
};

const richardsPlane = new Plane(1);
richardsPlane.startEngines();

const jamesPlane = new Plane(4);
jamesPlane.startEngines();
