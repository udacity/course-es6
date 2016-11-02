/* eslint object-property-newline: off */

function Tree(size, leaves) {
    this.size = size || 10;
    this.leaves = leaves || {spring: 'green', summer: 'green', fall: 'orange', winter: null};
    this.leafColor = null;
}

Tree.prototype.changeSeason = function (season) {
    this.leafColor = this.leaves[season];
    if (season === 'spring') {
        this.size += 1;
    }
};

function Maple(syrupQty, size, barkColor, leaves) {
    Tree.call(this, size, barkColor, leaves);
    this.syrupQty = (typeof syrupQty !== 'undefined') ? syrupQty : 15;
}

Maple.prototype = Object.create(Tree.prototype);
Maple.prototype.constructor = Maple;

Maple.prototype.changeSeason = function (season) {
    Tree.prototype.changeSeason.call(this, season);
    if (season === 'spring') {
        this.syrupQty += 1;
    }
};

Maple.prototype.gatherSyrup = function () {
    this.syrupQty -= 3;
};


var myMaple = new Maple(15, 5);
console.log(myMaple);

myMaple.changeSeason('fall');
console.log(myMaple);

myMaple.gatherSyrup();
console.log(myMaple);

myMaple.changeSeason('spring');
console.log(myMaple);
