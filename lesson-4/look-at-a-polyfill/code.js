if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
        position = position || 0;
        return this.substr(position, searchString.length) === searchString;
    };
}

/* sample usage */
'Udacity'.startsWith('Udac'); // returns `true`
'Udacity'.startsWith('Udac', 2); // returns `false`
'Udacity'.startsWith('ES6'); // returns `false`
