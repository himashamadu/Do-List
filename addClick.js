let i = 0;

function addItem() {
    //Task--------------------------------------------------------------------
    let taskAdd = document.getElementById("doThis").value;

    //date-------------------------------------------------------------------
    let dateAdd = document.getElementById("dateThis").value;

    //new button------------------------------------------------------------------
    const placebtn = document.getElementById("editeDetail");

    //number
    let number = document.getElementById("addTask").value;

    if (taskAdd != '' && dateAdd != '') {
        //display Task and Number----------------------------------------------------
        i++;
        number = i;
        const para = document.createElement('p');
        para.innerText = i + "." + taskAdd;
        document.querySelector("#addTask").append(para);
        console.log(i);

        //display Date-----------------------------------------------------
        const paraDate = document.createElement('p');
        paraDate.innerText = dateAdd;
        document.querySelector("#addDate").appendChild(paraDate);

        // display Button--------------------------------------------------------  
        const newbtn = document.createElement("button");
        newbtn.innerHTML = "X";
        newbtn.style.color = "red";
        newbtn.style.font = "bold";
        newbtn.style.margin = "9px";

        placebtn.appendChild(newbtn);
        const lineBreak = document.createElement('br');
        newbtn.onclick = function() {
            para.remove();
            paraDate.remove();
            newbtn.remove();
            lineBreak.remove();
        }
        placebtn.appendChild(lineBreak);

    }

}