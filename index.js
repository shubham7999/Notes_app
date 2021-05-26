console.log("shubha");

// If user add a note add it to the local storage in the browser

shownotestome();

let addbtn = document.getElementById('addbtn');

addbtn.addEventListener("click", function (e) {

    let addtx = document.getElementById('addtxt');

    let notes = localStorage.getItem('notes');

    var noteobj = [];

    if (notes !== null) {
        noteobj = JSON.parse(notes);

    }

    noteobj.push(addtxt.value);
    localStorage.setItem('notes', JSON.stringify(noteobj));
    addtx.value = "";

    shownotestome();

});


// Function to show all the notes stors in the local storage
function shownotestome() {

    let notes = localStorage.getItem('notes');
    var noteobj=[];

    if (notes !== null) {
        noteobj = JSON.parse(notes);

    }

    let html = "";

    for (let i = 0; i < noteobj.length; i++) {


        // Template literals used

        html +=

        `<div class="card my-2 mx-2 setcard" style="width: 18rem; >
        <div class="card-body">
          <h5 class="card-title">Notes ${i+1} </h5>
          <p class="card-text">  ${noteobj[i]} </p>
          <button id= "${i}" class="btn btn-primary deletebtn" onclick="alert(this.id)">Delete</button>
        </div>
      </div>

      `
    }

        let noteselem = document.getElementById('notes');

        if (noteobj.length != 0) {
            noteselem.innerHTML = html;
        }

        else{
            noteselem.innerHTML= ` <h2 style = "color : grey;" >Nothing to show click the add button to add the new notes</h2>`
        }


    }

    // function to delete notes
   function alert(idx)
   {
      // console.log(idx);

    let notes = localStorage.getItem('notes');

    var noteobj=[];

    if (notes !== null) {
        noteobj = JSON.parse(notes);

    }

    

    noteobj.splice(idx,1);

    localStorage.setItem('notes' ,JSON.stringify(noteobj));

    shownotestome();
   }



  let inputvalue = document.getElementById("searchTxt");
  inputvalue.addEventListener('input' , function()
  {
     let val = inputvalue.value;
     console.log(val);
     
    let cards = document.getElementsByClassName('setcard');
    console.log(cards);

     for(let  i=0;i<cards.length;i++)
     {
         let para= cards[i].getElementsByTagName('p')[0].innerHTML;
         if(para.includes(val)===false)
         {
             cards[i].style.display="none";
         }
         else{
            cards[i].style.display="flex";

         }

     }



  });
