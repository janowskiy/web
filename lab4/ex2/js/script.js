"use strict";

window.addEventListener("load",function(){
    let button = document.getElementById("add_tr");
    let table = document.getElementById('table');
    let delete_tr = document.getElementsByClassName("delete_tr");
    let diagrama = document.getElementById("diagrama");
    let block_for_diagrama = document.getElementsByClassName("block_for_diagrama");

    button.addEventListener('click',function(){
        
        let obl = +prompt("Введіть рік (2000 рік і пізніше)");
        let sq = +prompt("Введіть кількість ДТП");
        
        if(isNaN(obl) || obl<2000 || obl>2020 || isNaN(sq) || sq>35000){
            alert("Помилка введення!");
            return;
        }

        let tr = document.createElement('tr');
        table.appendChild(tr);
        tr.classList.add("tr");
        tr.classList.add("tr:nth-child(2n)");

        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");

        tr.appendChild(td1);
        td1.classList.add("td");
        td1.innerHTML = "<button class='delete_tr'>Видалити</button>";

        tr.appendChild(td2);
        td2.classList.add("td");
        td2.innerHTML = obl;

        tr.appendChild(td3);
        td3.classList.add("td");
        td3.innerHTML = sq;



        let block = document.createElement("div");
        diagrama.appendChild(block);
        block.classList.add("block_for_diagrama");
        block.style.height = sq*100/33314 + "%";
        block.setAttribute("title",sq);

        let p = document.createElement("p");
        block.appendChild(p);
        p.innerText = obl;
        p.classList.add("rotate");

        for(let k=0;k<delete_tr.length;k++){
            delete_tr[k].addEventListener("click", function(){
                let row = delete_tr[k].parentNode.parentNode;
                row.parentNode.removeChild(row);
                diagrama.removeChild(block_for_diagrama[k]);
            })
        }
    })

    for(let i=0;i<delete_tr.length;i++){
        delete_tr[i].addEventListener("click", function(){
            let row = delete_tr[i].parentNode.parentNode;
            row.parentNode.removeChild(row);
            diagrama.removeChild(block_for_diagrama[i]);
        })
    }

})