function select(){

    if(document.getElementById('values').selectedIndex == 1){           //n1

        document.getElementById('pn1').style.display='none';
        document.getElementById('ptI').style.display='block';
        document.getElementById('pn2').style.display='block';
        document.getElementById('ptR').style.display='block';

        document.getElementById('imgn1').style.display='block';
        document.getElementById('imgtI').style.display='none';
        document.getElementById('imgn2').style.display='none';
        document.getElementById('imgtR').style.display='none';

        document.getElementById('pn1r').style.display='block';
        document.getElementById('ptIr').style.display='none';
        document.getElementById('pn2r').style.display='none';
        document.getElementById('ptRr').style.display='none';

    } else if(document.getElementById('values').selectedIndex == 2){    //tI

        document.getElementById('pn1').style.display='block';
        document.getElementById('ptI').style.display='none';
        document.getElementById('pn2').style.display='block';
        document.getElementById('ptR').style.display='block';
        
        document.getElementById('imgn1').style.display='none';
        document.getElementById('imgtI').style.display='block';
        document.getElementById('imgn2').style.display='none';
        document.getElementById('imgtR').style.display='none';

        document.getElementById('pn1r').style.display='none';
        document.getElementById('ptIr').style.display='block';
        document.getElementById('pn2r').style.display='none';
        document.getElementById('ptRr').style.display='none';

    } else if(document.getElementById('values').selectedIndex == 3){    //n2

        document.getElementById('pn1').style.display='block';
        document.getElementById('ptI').style.display='block';
        document.getElementById('pn2').style.display='none';
        document.getElementById('ptR').style.display='block';

        document.getElementById('imgn1').style.display='none';
        document.getElementById('imgtI').style.display='none';
        document.getElementById('imgn2').style.display='block';
        document.getElementById('imgtR').style.display='none';

        document.getElementById('pn1r').style.display='none';
        document.getElementById('ptIr').style.display='none';
        document.getElementById('pn2r').style.display='block';
        document.getElementById('ptRr').style.display='none';

    } else if(document.getElementById('values').selectedIndex == 4){       //tR
        
        document.getElementById('pn1').style.display='block';
        document.getElementById('ptI').style.display='block';
        document.getElementById('pn2').style.display='block';
        document.getElementById('ptR').style.display='none';

        document.getElementById('imgn1').style.display='none';
        document.getElementById('imgtI').style.display='none';
        document.getElementById('imgn2').style.display='none';
        document.getElementById('imgtR').style.display='block';

        document.getElementById('pn1r').style.display='none';
        document.getElementById('ptIr').style.display='none';
        document.getElementById('pn2r').style.display='none';
        document.getElementById('ptRr').style.display='block';

    }
}

function clean(){

    document.getElementById('n1').value = 0;
    document.getElementById('tI').value = 0;
    document.getElementById('n2').value = 0;
    document.getElementById('tR').value = 0;

    document.getElementById('n1r').value = 0;
    document.getElementById('tIr').value = 0;
    document.getElementById('n2r').value = 0;
    document.getElementById('tRr').value = 0;
}

function calc(){

    var n1 = parseFloat(document.getElementById('n1').value);
    var tI = parseFloat(document.getElementById('tI').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    var tR = parseFloat(document.getElementById('tR').value);

    if(document.getElementById('values').selectedIndex == 1){           //n1

        if(tI == 0){
            alert('Theta (I) can not be equal 0.')
        }

        var DegR = tR*(Math.PI/180);
        var DegI = tI*(Math.PI/180); 

        var n1r = (n2*Math.sin(DegR))/Math.sin(DegI);

        document.getElementById('n1r').value = n1r;

    } else if(document.getElementById('values').selectedIndex == 2){    //tI

        var DEG1 = ( tR*( Math.PI/180 ) );   //ti RADIAN -> ti DEGREES
        var DEG2 = ( n2*(Math.sin(DEG1)/n1));
        var tIr = (Math.asin(DEG2))*(180/Math.PI);

        document.getElementById('tIr').value = tIr;

    } else if(document.getElementById('values').selectedIndex == 3){    //n2

        if(tI == 0){
            alert('Theta (R) can not be equal 0.')
        }

        var DegR = tR*(Math.PI/180);
        var DegI = tI*(Math.PI/180); 

        var n2r = (n1*Math.sin(DegI))/Math.sin(DegR);

        document.getElementById('n2r').value = n2r;

    } else if(document.getElementById('values').selectedIndex == 4){    //tR
        
        var DEG1 = ( tI*( Math.PI/180 ) );   //ti RADIAN -> ti DEGREES
        var DEG2 = ( n1*(Math.sin(DEG1)/n2));
        var tRr = (Math.asin(DEG2))*(180/Math.PI);

        document.getElementById('tRr').value = tRr;
    }
}