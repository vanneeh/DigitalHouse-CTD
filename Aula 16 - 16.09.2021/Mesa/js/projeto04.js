/* 
function show(){
    var option = document.getElementById(" id do que vai definir a mudança").value;
 */
//pra mudar o display
//document.getElementById(" id do que vai mudar ").style.display="none";

function show() {
    let option = document.getElementById("encomenda").value;
    switch (option) {
        case "1":
            document.getElementById("quantpessoas").style.display = "inline";
            document.getElementById("quantpessoas").value = "0";
            document.getElementById("bolo-camadas").style.display = "inline";
            document.getElementById("bolo-camadas").value = "0";
            document.getElementById("unidades").style.display = "none";
            document.getElementById("unidades").value = "0";
            document.getElementById("quantsabores").style.display = "inline";
            document.getElementById("quantsabores").value = "0";

        case "4":
        case "5":
        case "6":
            document.getElementById("quantpessoas").style.display = "inline";
            document.getElementById("quantpessoas").value = "0";
            document.getElementById("bolo-camadas").style.display = "inline";
            document.getElementById("bolo-camadas").value = "0";
            document.getElementById("unidades").style.display = "none";
            document.getElementById("unidades").value = "0";
            document.getElementById("quantsabores").style.display = "inline";
            document.getElementById("quantsabores").value = "0";
            break;
        case "2":
        case "3":
            document.getElementById("quantpessoas").style.display = "none";
            document.getElementById("quantpessoas").value = "0";
            document.getElementById("bolo-camadas").style.display = "none";
            document.getElementById("bolo-camadas").value = "0";
            document.getElementById("unidades").style.display = "inline";
            document.getElementById("unidades").value = "0";
            document.getElementById("quantsabores").style.display = "inline";
            document.getElementById("quantsabores").value = "0";
            break;
    }
}

function checkLimit(){

	var marcados = 0;

	var verifyCheckeds = function($checks) {
		if( marcados>=2 ) {
			loop($checks, function($element) {
				$element.disabled = $element.checked ? '' : 'disabled';
			});
		} else {
			loop($checks, function($element) {
				$element.disabled = '';
			});
		}
	};
	var loop = function($elements, cb) {
		var max = $elements.length;
		while(max--) {
			cb($elements[max]);
		}
	}
	var count = function($element) {
		return $element.checked ? marcados + 1 : marcados - 1;
	}
	window.onload = function(){
		var $checks = document.querySelectorAll('input[type="checkbox"]');
		loop($checks, function($element) {
			$element.onclick = function(){
				marcados = count(this);
				verifyCheckeds($checks);
			}
			if($element.checked) marcados = marcados + 1;
		});
		verifyCheckeds($checks);
	}
}