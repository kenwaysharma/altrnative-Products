

//function
function filter(e){
   let tr=myTable.getElementsByTagName('tr');
   let filterTarget=e.target.value;//Check the value of select 

  console.log(filterTarget)
    for(var i=1;i<tr.length;i++){
        let td = tr[i].getElementsByTagName('td');
        const tdCountry=td[5].innerHTML
        if(filterTarget!='all'){//Check if the select is on all
            if(filterTarget===tdCountry){//Check if country selected is found
                tr[i].classList.add('found');
            }
            else{
            
                tr[i].classList.remove('found')
            }
            for(var j=1;j<tr.length;j++){
                if(tr[j].classList.contains('found')){
                    tr[j].style.display="";
                }else{
                    tr[j].style.display="none"
                }
        }
        }else{
            tr[i].style.display=""
    }
}
    
}

//Searching in product name
function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    console.log(tr)
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  //Searching in made in country
  function myFunction2() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput2");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    console.log(tr)
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[5];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

function FunctionH() {
  const cardSpl=document.getElementById('cardSpl');
  console.log(cardSpl)
  cardSpl.style.display="none";
}