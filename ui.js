var flag=0,value1=0,value2=0,results,op;
$( " button.number1" ).click(function() {
 if(flag===0){
  	var v = $( this ).text();
 	$('#answer').val($('#answer').val() + v);
 	value1=$('#answer').val();
	}
else
	{
	var v = $( this ).text();
    $('#answer').val($('#answer').val() + v);
    value2=$('#answer').val();	
	}
});

//$(":submit").click(function(){
//	$('#answer').val("");
//});

$(":Reset").click(function(){
$('#answer').val("");
value1=0;
value2=0;
results=0;
flag=0;
});

$(" #plus").click(function(){
	op=1;
	$('#answer').val("");
	flag=1;
});
$(" #minus").click(function(){
	op=2;
	$('#answer').val("");
	flag=1;
});
$(" #product").click(function(){
	op=3;
	$('#answer').val("");
	flag=1;
});
$(" #devide").click(function(){
	op=4;
	$('#answer').val("");
	flag=1;
});



//$(" button.optr").click(function(){
//	op=$('#plus').val();
//	$('#answer').val("");
//	op=$(this).val();
//	alert(op);
//	flag=1;
//});

$(" button.ans").click(function(){
	$('#answer').val("");
	if(op==1)
	{
	results=Number(value1)+Number(value2);
	}
	if(op==2)
	{
	results=Number(value1)-Number(value2);
	}
	if(op==3)
	{
	results=Number(value1)*Number(value2);
	}
	if(op==4)
	{
	results=Number(value1)/Number(value2);
	}
	$('#answer').val(results);
	value1=results;
	value2=0;
});


