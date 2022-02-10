
//Problem 2: Reaping the flowers

function plant(seed, water, fert, temp){
    let stem = "-";
    let ans = "";
    
    if(temp<20 || temp>30){
        for(let i=0; i<water; i++){
            ans += stem.repeat(water);
        }
        ans += seed;
    }
    
    else{
        for(let i=0; i<water; i++){
            ans += stem.repeat(water)+seed.repeat(fert);
        }
    }
    
    return ans;
}
console.log("Problem 2 results:")
console.log(plant("@", 3, 3, 25));
console.log(plant("#", 1, 5, 30));
console.log(plant("&", 5, 1, 20));
console.log(plant("§", 3, 3, 15));
