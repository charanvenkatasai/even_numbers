let arr=[1,2,3,4,5,6,7,8,9,10]
function even(){
    for(i=0;i<arr.length+1;i++){
        if (arr[i]%2==0){
            console.log(arr[i])
        }
    }
}
even(arr)