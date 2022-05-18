// n = 5   
// c=[0, 4]
function flatlandSpaceStations(n, c) {
    let m = c.length;
    let distancias = [];
    if (m === n) {
        return 0;
    }
    for (let i = 0; i < n; i++) {
        
        let min = Math.abs(c[0] - i);
        for (let j = 0; j < c.length; j++) {
            let x = Math.abs(c[j] - i);
            if (x < min) {
                min = x;
            }
        }
        distancias[i] = min;
    }
    let max = distancias[0];
    for ( let k = 0; k < distancias.length; k++){
        if (distancias[k] > max) {
            max = distancias[k];
        }
    }
    return max;
}

console.log(flatlandSpaceStations(6, [0,1,2,3,4,5]));