function calc(){
    var n1 = parseFloat(document.getElementById('n1').value);
    var ti = parseFloat(document.getElementById('ti').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    var tr = parseFloat(document.getElementById('tr').value);

    if (document.getElementById('resultados').selectedIndex == 0){  //n1

        document.getElementById('pn1').style.backgroundColor='mediumseagreen';

        document.getElementById('imgn1').style.display='block';
        document.getElementById('imgn2').style.display='none';
        document.getElementById('imgti').style.display='none';
        document.getElementById('imgtr').style.display='none';

        document.getElementById('n1r').value = 0;
        document.getElementById('tir').value = 0;
        document.getElementById('n2r').value = 0;
        document.getElementById('trr').value = 0;

    } else if (document.getElementById('resultados').selectedIndex == 1) {  //tI
        
        document.getElementById('pn1').style.backgroundColor='mediumseagreen';
        document.getElementById('pti').style.backgroundColor='white';
        document.getElementById('pn2').style.backgroundColor='mediumseagreen';
        document.getElementById('ptr').style.backgroundColor='mediumseagreen';


        document.getElementById('imgn1').style.display='none';
        document.getElementById('imgn2').style.display='none';
        document.getElementById('imgti').style.display='block';
        document.getElementById('imgtr').style.display='none';

        document.getElementById('n1r').value = 0;
        document.getElementById('tir').value = 0;
        document.getElementById('n2r').value = 0;
        document.getElementById('trr').value = 0;

    } else if (document.getElementById('resultados').selectedIndex == 2) {  //n2
        
        document.getElementById('pn1').style.backgroundColor='mediumseagreen';
        document.getElementById('pti').style.backgroundColor='mediumseagreen';
        document.getElementById('pn2').style.backgroundColor='white';
        document.getElementById('ptr').style.backgroundColor='mediumseagreen';

        document.getElementById('imgn1').style.display='none';
        document.getElementById('imgn2').style.display='block';
        document.getElementById('imgti').style.display='none';
        document.getElementById('imgtr').style.display='none';



        document.getElementById('n1r').value = 0;
        document.getElementById('tir').value = 0;
        document.getElementById('n2r').value = 0;
        document.getElementById('trr').value = 0;

    } else if (document.getElementById('resultados').selectedIndex == 3) {  //tR
        
        document.getElementById('pn1').style.backgroundColor='mediumseagreen';
        document.getElementById('pn1').style.backgroundColor.sub='mediumseagreen';
        document.getElementById('pti').style.backgroundColor='mediumseagreen';
        document.getElementById('pn2').style.backgroundColor='mediumseagreen';
        document.getElementById('ptr').style.backgroundColor='white';

        document.getElementById('imgn1').style.display='none';
        document.getElementById('imgn2').style.display='none';
        document.getElementById('imgti').style.display='none';
        document.getElementById('imgtr').style.display='block';
        
        var DEG1 = ( ti*( Math.PI/180 ) );   //ti RADIAN -> ti DEGREES
        var DEG2 = ( n1*(Math.sin(DEG1)/n2));
        
        var trr = (Math.asin(DEG2))*(180/Math.PI);

        document.getElementById('n1r').value = 0;
        document.getElementById('tir').value = 0;
        document.getElementById('n2r').value = 0;
        document.getElementById('trr').value = trr;
    }
}