
var val=0,flag=0,val2=0,op,res_value;

function move_input(num)
{
if(flag===0)
{

calc.result.value+=num;
//alert(num);
val=calc.result.value;
document.getElementById("result").value=val;
}
else
{
	
calc.result.value+=num;
val2=calc.result.value;
document.getElementById("result").value=val2;
}
}

function optr(num)
{

	op=num;                
	clear_input();
	flag=1;
}

function compute_result()
{
	if(op===1)
		res_value=Number(val)+Number(val2);
		//document.getElementById("result").value=Number(val)+Number(val2);
	if(op===2)
		res_value=Number(val)-Number(val2);
		//document.getElementById("result").value=Number(val)-Number(val2);
	if(op===3)
		res_value=Number(val)*Number(val2);
		//document.getElementById("result").value=Number(val)*Number(val2);
	if(op===4)
		res_value=Number(val)/Number(val2);
		//document.getElementById("result").value=Number(val)/Number(val2);		
	document.getElementById("result").value=res_value;
	val=res_value;
	val2=0;
	flag=0;
	

}
function clear_input()
{
	document.getElementById("result").value=" ";
}