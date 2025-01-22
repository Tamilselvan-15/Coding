let s="432"
function combination(index,s,list){
   //base case 
   if(index == s.length){
       console.log(list);
       return;
   }    
   //explore all possilities 
   for(let end=index;end<s.length;end++){
       let part=s.substring(index,end+1);
       combination(end+1,s,[...list,part]);
   }
}
combination(0,s,[]);


// 4+32 43+2 4+3+2  432
let k="4326" 
   //4+326 
     //43+26 
     //432+6 
     //4+3+2+6 
     //4326
