function compareTriplets(a, b) {
    // Write your code here
    let alice = 0;
    let bob = 0;

    for (let i = 0; i < a.length; i++){
        let inA = a[i];
        let inB = b[i];
        
        if ( inA > inB){
            alice = alice + 1;          
        }
        else if ( inA < inB ){
            bob = bob +1;
        }
    }
    return [alice, bob];
}

console.log(compareTriplets([1,2,3], [3,2,1]))


