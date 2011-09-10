// #!/usr/bin/env js

// https://github.com/dbb/js
//
// this is going to be a standard deviation calculator eventually

var myArr = new Array();
var mySum;

function insert(val){
    myArr = val.split(',');
}

function show() {
    mySum = 0;
    var data_string="";
    for(i = 0; i < myArr.length; i++) {
        data_string =data_string+myArr[i]+", ";
        mySum += Number( myArr[i] );
    } // end for

    var avg = mySum / myArr.length;

    if(myArr.length > 0)
        document.getElementById('myData').innerHTML = data_string;
        document.getElementById('mySum').innerHTML = mySum;
        document.getElementById('myAvg').innerHTML = avg;
} // end show()


