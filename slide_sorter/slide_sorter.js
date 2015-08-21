var box01, box02, box03, box04, mainBox;

function switchClasses(box){

		mainBox = document.getElementById(box);

		if (mainBox.className == 'quarterBox subBox'){
			thirds();
			mainBox.className = 'twoThirdBox subBox';
			
		}
		else if (mainBox.className == 'twoThirdBox subBox'){
		}
		else{
			quarters();
			$('#shrink01').toggleClass('hidden');
		}

}

function quarters(){
	box01.className = 'quarterBox subBox';
	box02.className = 'quarterBox subBox';
	box03.className = 'quarterBox subBox';
	box04.className = 'quarterBox subBox';

}

function thirds(){
	var i;
	var loc;
	var pos;
	var thirdLoc;
	var x = 1;

	for (i = 1; i < 5; i++) {
		pos = ('thirdBox subBox pos' + x);
		loc = eval('box0' + i);


		if (loc != mainBox){
			loc.className = pos;
			x++;
		}//end if

	} //end for
	$('#shrink01').toggleClass('hidden');
}


$(document).ready(function(){
	box01 = document.getElementById('box1');
	box02 = document.getElementById('box2');
	box03 = document.getElementById('box3');
	box04 = document.getElementById('box4');

	$('#box1').click(function() {
		switchClasses('box1');
	});

	$('#box2').click(function() {
		switchClasses('box2');
	});

	$('#box3').click(function() {
		switchClasses('box3');
	});

	$('#box4').click(function() {
		switchClasses('box4');
	});

});
