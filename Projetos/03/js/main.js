let cursos = [{
        inst: 'Digital House',
        curso: [{
            nome: 'Certified Tech Developer',
            materias: ['Metodologias Ágeis', 'Front End I', 'Programação Imperativa'],
        }, {
            nome: 'UX',
            materias: ['Prototipação', 'Desk Research', 'Storytelling'],
        }, ],
        notaMin: 8,
    },
    {
        inst: 'Digital Innovation One',
        curso: [{
            nome: 'Web Developer',
            materias: ['Typescript', 'UI/UX', 'Angular'],
        }],
        notaMin: 7,
    }

]
var selectInst = document.getElementById("selectInst");
for (var i = 0; i < cursos.length; i++) {
    var opt = cursos[i].inst;
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;

    selectInst.appendChild(el);
}

function carregarCursos() {
    var selectCurso = document.getElementById("selectCurso");
    let myInst = (selectInst.selectedIndex) - 1;
    console.log(myInst);
    while (selectCurso.length) {
        selectCurso.remove(0);
    }
    var el = document.createElement("option");
    el.textContent = "";
    el.value = "";
    selectCurso.appendChild(el);
    for (var i = 0; i < cursos[myInst].curso.length; i++) {
        var opt = cursos[myInst].curso[i].nome;
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;

        selectCurso.appendChild(el);
    }
    document.getElementById("mats").style.display = "none";
}

function carregarMat() {
    let myInst = (selectInst.selectedIndex) - 1;
    let myCurso = (selectCurso.selectedIndex) - 1;
    console.log(myInst, myCurso);
    document.getElementById("mats").style.display = "inline";
    document.getElementById('mat1').innerHTML = cursos[myInst].curso[myCurso].materias[0];
    document.getElementById('mat2').innerHTML = cursos[myInst].curso[myCurso].materias[1];
    document.getElementById('mat3').innerHTML = cursos[myInst].curso[myCurso].materias[2];
}

function charge() {
    let n1 = parseInt(document.getElementById('nota1').value);
    let n2 = parseInt(document.getElementById('nota2').value);
    let n3 = parseInt(document.getElementById('nota3').value);
    let mat1 = document.getElementById('mat1').innerHTML;
    let mat2 = document.getElementById('mat2').innerHTML;
    let mat3 = document.getElementById('mat3').innerHTML;
    let myInst = (selectInst.selectedIndex) - 1;
    let myCurso = (selectCurso.selectedIndex) - 1;

    let notas = [n1, n2, n3];
    console.log(notas);
    let soma = notas.reduce((soma, nota) => soma += nota, 0);
    console.log(soma);
    let media = soma / 3;
    console.log(media.toFixed(2));
    let nMin = cursos[myInst].notaMin;
    let aviso = 'Você está de recuperação em ';
    if (media >= nMin) {
        alert('Parabéns! Sua média foi de ' + media.toFixed(2) + ', então você foi aprovado.')
    } else if (media < nMin) {
        if (n1<nMin && n2<nMin && n3<nMin){
            alert('Desculpe, você não foi aprovado pois não atingiu a média em nenhuma matéria')
        } else if (n1 < nMin) {
            aviso += mat1;
            if (n2 < nMin) {
                aviso += ' e ' + mat2;
                if (n3 < nMin) {
                    aviso += ' e ' + mat3;

                }
            } else if (n3 < nMin) {
                aviso += ' e ' + mat3;

            }
            alert(aviso);
        } else if (n2 < nMin) {
            aviso += mat2;
            if (n3 < nMin) {
                aviso += ' e ' + mat3;
            }
            alert(aviso);
        } else if (n3 < nMin) {
            aviso += mat3;
            alert(aviso);
        }
        
    }
}