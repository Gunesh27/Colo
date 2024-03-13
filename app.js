
let btn = document.querySelector('.btn');

btn.addEventListener('click',()=>{
    
    let hexArr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
    function clrFlip(arr){
        let hexVal = "#";
        for(i=0;i<=5;i++){
            let hex = Math.floor(Math.random()*16);
            hexVal += arr[hex];
        }
        return hexVal;
    }
    let hexVal = clrFlip(hexArr)
    document.getElementById('con').style.backgroundColor = hexVal;
    document.querySelector('.btn').style.backgroundColor = hexVal;
    


    
})



