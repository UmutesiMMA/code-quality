function roundRobin(jobs,slice,index){
    let result = []
    while(jobs[index]>0){
        for(let i of jobs){
            if(i>0){
                if(i>=slice){
                    i-=slice
                    result.push(slice)
                }
                else{
                    result.push(i)
                    i-=i            
                }
            }
        }
    }
    return result
}
console.log(roundRobin([10,20,1],5,0))