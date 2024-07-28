const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  const result=[];
	let current_sum=0;
	let current_subarray=[];
	for (cont num of arr) {
		if(current_sum+num>n){
			result.push(current_subarray);
			current_sum=num;
			current_subarray=[num];
		}
		else{
			current_sum+=num; // currentsum+=num;
			current_subarray.push(num);
		}
	}
	if(current_subarray.length>0){
		result.push(current_subarray);
	}
		
	}
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
