function hehe() {
    var a = document.getElementById('s1').value;
    var b = document.getElementById('s2').value;
    var c = document.getElementById('s3').value;
    var d = document.getElementById('s4').value;
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    d = parseInt(d);
    var percent = (((a+b+c+d)/200)*100);
    document.getElementById('r1').innerHTML = percent;
    var n = document.getElementById('name').value;
    document.getElementById('n1').innerHTML = n;
    if ((percent >= 90) && (percent <= 100)) {
        document.getElementById('r2').innerHTML = "A*";
        document.getElementById('r3').innerHTML = "Pass";
    }
    else if((percent >= 80) && (percent < 90)) {
        document.getElementById('r2').innerHTML = "A";
        document.getElementById('r3').innerHTML = "Pass";
    }
    else if((percent >= 70) && (percent < 80)) {
        document.getElementById('r2').innerHTML = "B";
        document.getElementById('r3').innerHTML = "Pass";
    }
    else if((percent >= 60) && (percent < 70)) {
        document.getElementById('r2').innerHTML = "C";
        document.getElementById('r3').innerHTML = "Pass";
    }
    else if((percent >= 50) && (percent < 60)) {
        document.getElementById('r2').innerHTML = "D";
        document.getElementById('r3').innerHTML = "Pass";
    }
    else if((percent >= 40) && (percent < 50)) {
        document.getElementById('r2').innerHTML = "E";
        document.getElementById('r3').innerHTML = "Pass";
    }
    else if((percent <= 49)) {
        document.getElementById('r2').innerHTML = "U";
        document.getElementById('r3').innerHTML = "Fail";
    }
    else{
        document.getElementById('r2').innerHTML = "Marks are not correct";
    }
}
