//Jquery
$(document).ready(function(){
	$("p").hide();
	$(".btn0").hide();
	$(".btn01").hide();
	$(".btn1").hide();
	$(".btn2").hide();

	$(".body").click(function(){
        //Instruction
		$("p").show();
		$(".btn0").show();
		//design for btn0
			$(".btn0").css("background-color"," #00b300");
			$(".btn0").css("color","white");	
			$(".btn0").css("position","absolute");
			$(".btn0").css("marginLeft","13.6%");
			$(".btn0").css("marginTop","-10px");
			$(".btn0").css("border","1px solid black");
			$(".btn0").css("border-style","box-sizing");
			$(".btn0").css("height","40px");
			$(".btn0").css("width","300px");
			$(".btn0").css("text-align","center");
			$(".btn0").css("paddingLeft","2px");
			$(".btn0").css("paddingTop","10px");
		$(".btn01").show();
		//design for btn01
		$(".btn01").css("background-color"," #00b300");
		$(".btn01").css("color","white");	
		$(".btn01").css("position","absolute");
		$(".btn01").css("marginLeft","62%");
		$(".btn01").css("marginTop","-8px");
		$(".btn01").css("border","1px solid black");
		$(".btn01").css("border-style","box-sizing");
		$(".btn01").css("height","40px");
		$(".btn01").css("width","300px");
		$(".btn01").css("text-align","center");
		$(".btn01").css("paddingLeft","2px");
		$(".btn01").css("paddingTop","10px");
		$(".btn1").show();
		//design for Hit 
			$(".btn1").css("position","relative");
			$(".btn1").css("border","1px solid black");		
			$(".btn1").css("border-style","box-sizing");
			$(".btn1").css("background-color","#e61919");
			$(".btn1").css("color","white");		
			$(".btn1").css("height","40px");
			$(".btn1").css("width","70px");
			$(".btn1").css("text-align","center");
			$(".btn1").css("paddingTop","20px");
			$(".btn1").css("marginLeft","43%");
		$(".btn2").show();
		//design for Missed hit
			$(".btn2").css("position","relative");
			$(".btn2").css("marginLeft","50%");
			$(".btn2").css("marginTop","-62px");
			$(".btn2").css("border","1px groove");
			$(".btn2").css("border-style","box-sizing");
			$(".btn2").css("background-color","#e6e6e6");
			$(".btn2").css("height","40px");
			$(".btn2").css("width","70px");
			$(".btn2").css("text-align","center");
			$(".btn2").css("paddingTop","20px");
		//hide
		$(".body").hide();
	});
});