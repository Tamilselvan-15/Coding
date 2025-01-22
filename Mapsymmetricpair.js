output:
3,4
4,3
1,2
2,1


import java.util.*;
import java.lang.*;
import java.io.*;

/* Name of the class has to be "Main" only if the class is public. */
class Ideone
{ 
	public static void main (String[] args) throws java.lang.Exception
	{
		int [][] arr=new int[][]{{1,2},{3,4},{4,3},{2,1},{5,6}};
		Map<Integer,Integer> map=new HashMap();
		List<List<Integer>> lis=new ArrayList();
	//	int [][]res
		 for(int i=0;i<arr.length;i++){
		 	int pair1=arr[i][0];
		 	int pair2=arr[i][1];
		 	Integer val=map.get(pair2);
		 	if(val != null && val == pair1){
		 		List<Integer> l=new ArrayList();
		 		l.add(pair1);
		 		l.add(pair2);
		 		//arr res[k][0]
		 	//	res[k][1]
		 		//k++;
		 		List<Integer> l1 =new ArrayList();
		 		l1.add(pair2);
		 		l1.add(pair1);
		 		lis.add(l);
		 		lis.add(l1);
		 	}
		 else{
		 	map.put(pair1,pair2);
		 }
		 }
		 for(int i=0;i<lis.size();i++){
		 	System.out.print(lis.get(i).get(0));
		 		System.out.print(",");
		 	System.out.print(lis.get(i).get(1));
		 	System.out.println("");
		 }
		// your code goes here
	}
}
