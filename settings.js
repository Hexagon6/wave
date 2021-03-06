//settings.js

"use strict";

var js = {
    settings: true
};

var settings = {
    version: '0.6',
    date: '2016-09-15',
    algorithms: {
        'GH': {
            neighborhood: {
                type: 'neumann', //neumann or moore
                r: 1 //distance
            },
        },
        'TT' : {
            neighborhood: {
                type: 'random',
                r: 2
            }
        },
        'GoL' : {
            neighborhood: {
                type: 'moore',
                r: 1
            }
        }
    },
    algorithm: 'GH', // default algorithm
    algorithm_state: 0,
    canvas: {
        size: 640
    },
    clock: {
        state: false
    },
    cycle: 0,
    debug: false,
    detail: {
        initial: 4,
        max: 9
    },
    grid: {
        lines: false
    },
    intro: true,
    touched: false,
    ready: false,
    save: false,
    speed: 75,
    steps: 3,
    verbose: false,
    state: 'wave'
}
