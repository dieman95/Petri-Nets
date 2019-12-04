
var PetriNet = {};

/**
 * @param {function(string)} log - Out put goes here, e.g. console.log.
 */
PetriNet.Simulator = function (log) {
    'use strict';
    var places = [],
        self = this;

    this.currentPlace = '10c';
    this.currentPlaceId = 'null';
    this.currentMultiplicity = [];
    this.atEnd = false;

    places.push('[object Object]');
    places.push('[object Object]');
    places.push('[object Object]');
    places.push('[object Object]');
    places.push('[object Object]');

    this.initialize = function () {
        self.currentPlace = '10c';
        self.currentPlaceId = 'null';
        self.currentMultiplicity = 0;
        self.atEnd = false;
        self.enterEvent();
    };

    this.enterEvent = function (currentInput) {
        if (self.currentPlaceId === "/H/W") {
            if (currentInput === '1') {
                log('Switching state to +10c (/H/kY)');
                self.currentPlaceId = '/H/kY';
                self.currentPlace = '+10c';
                self.enterEvent();
            } else if (currentInput === '1') {
                log('Switching state to +5c (/H/c)');
                self.currentPlaceId = '/H/c';
                self.currentPlace = '+5c';
                self.enterEvent();
            } else {
                self.currentMultiplicity = [1];
                log('Possible multiplicity for arc(s): 1');
            }
        } else if (self.currentPlaceId === "/H/WL") {
            if (currentInput === '1') {
                log('Switching state to +10c (/H/g)');
                self.currentPlaceId = '/H/g';
                self.currentPlace = '+10c';
                self.enterEvent();
            } else if (currentInput === '1') {
                log('Switching state to +5c (/H/e)');
                self.currentPlaceId = '/H/e';
                self.currentPlace = '+5c';
                self.enterEvent();
            } else {
                self.currentMultiplicity = [1];
                log('Possible multiplicity for arc(s): 1');
            }
        } else if (self.currentPlaceId === "/H/D") {
            if (currentInput === '1') {
                log('Switching state to 20c bar (/H/s)');
                self.currentPlaceId = '/H/s';
                self.currentPlace = '20c bar';
                self.enterEvent();
            } else {
                self.currentMultiplicity = [1];
                log('Possible multiplicity for arc(s): 1');
            }
        } else if (self.currentPlaceId === "/H/d") {
            if (currentInput === '1') {
                log('Switching state to +5c (/H/bp)');
                self.currentPlaceId = '/H/bp';
                self.currentPlace = '+5c';
                self.enterEvent();
            } else if (currentInput === '1') {
                log('Switching state to 15c bar (/H/i)');
                self.currentPlaceId = '/H/i';
                self.currentPlace = '15c bar';
                self.enterEvent();
            } else {
                self.currentMultiplicity = [1];
                log('Possible multiplicity for arc(s): 1');
            }
        } else if (self.currentPlaceId === "/H/a") {
            if (currentInput === '1') {
                log('Switching state to +10c (/H/A)');
                self.currentPlaceId = '/H/A';
                self.currentPlace = '+10c';
                self.enterEvent();
            } else if (currentInput === '1') {
                log('Switching state to +5c (/H/G)');
                self.currentPlaceId = '/H/G';
                self.currentPlace = '+5c';
                self.enterEvent();
            } else {
                self.currentMultiplicity = [1];
                log('Possible multiplicity for arc(s): 1');
            }
        }

        if (currentInput === 'exit') {
            self.atEnd = true;
        } else if (places.indexOf(self.currentPlaceId) !== -1) {
            log('At a final state ' + self.currentPlace + '(' + self.currentPlaceId + ')');
            self.atEnd = true;
        }
    };

    this.getCurrentMultiplicity = function () {
        return self.currentMultiplicity;
    };

    this.getCurrentPlace = function () {
        return {
            id: self.currentPlaceId,
            name: self.currentPlace
        };
    };
};