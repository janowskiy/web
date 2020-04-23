'use strict';

function pascalTriangle() {
    let arr = [];
    let i;
    let j;
    let size=10;
    
    //let size = prompt('Введите размер', '');

    document.write('<p>');
    for (i = 1; i <= size; i++) {
        arr[i] = 0;
    }

    arr[0] = 1;
    for (j = 1; j <= size; j++) {
        for (i = j; i >= 1; i--) {
            document.write('\n<b>' + arr[i - 1] + '</b>');
            //console.log(arr[i-1]);
            arr[i] = arr[i - 1] + arr[i];
        }
        document.write('<p>');

    }
    for (i = 0; i <= size; i++) {
        document.write(' <b>' + arr[i] + '</b>');
        //console.log(arr[i])
    }

}
pascalTriangle();