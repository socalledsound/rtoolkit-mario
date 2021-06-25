export const INITIAL_STATE = {
    cloud: {
        position : {
            x: window.innerWidth/2,
            y: 50
        },
        size: 100,
    },
    hero: {
        position: {
            x: window.innerWidth/2 + window.innerWidth/4 - 100,
            y: window.innerHeight/2  - 100,
        },
        speed: {
            x: 10,
            y: 10,
        },
        size: 50,
    },
    coins: {
        positions: [
            {x: window.innerWidth/2 + 100, y: window.innerHeight/2 - 200},
            {x: window.innerWidth/2 + 300, y: window.innerHeight/2 - 100},
            {x: window.innerWidth/2 + 350, y: window.innerHeight/2 - 100},
            {x: window.innerWidth/2 + 400, y: window.innerHeight/2 - 100},
            {x: window.innerWidth/2 + 450, y: window.innerHeight/2 - 100},
            {x: window.innerWidth/2 + 500, y: window.innerHeight/2 + 200},
        ],
        collected : [0,0, 0, 0, 0 , 0],
        size: 50,
    }
}