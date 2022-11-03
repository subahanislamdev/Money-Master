
document.getElementById('calculate').addEventListener('click',function(){
    var inputfield = document.getElementById('food')
    var inputvalueFood = parseFloat(inputfield.value)
        inputfield.value = ''
    var inputfield = document.getElementById('rent')
    var inputvalueRent = parseFloat(inputfield.value)
        inputfield.value = ''
    var inputfield = document.getElementById('clothe')
    var inputvalueClothe = parseFloat(inputfield.value)
        inputfield.value = ''
    // total expensive calculate
  var totalexpensive = inputvalueFood + inputvalueRent + inputvalueClothe;
    var outputexpensive = document.getElementById('totalexpensive')
        outputexpensive.innerText = totalexpensive;
   var inputfield = document.getElementById('income')
   var inputvalueIncome = parseFloat(inputfield.value)
  // total balance calculate
   var Newbalance = inputvalueIncome - totalexpensive;
   var outputfield = document.getElementById('balance')
    outputfield.innerText = Newbalance;
     inputfield.value = ''

     document.getElementById('total-calculate').addEventListener('click',function(){
        var inputfieldSaving = document.getElementById('saving')
        var inputvalueSaving = parseFloat(inputfieldSaving.value)
    // total saving amount
        var outputsavingamount = document.getElementById('savingAmount')
        outputsavingamount.innerText = (inputvalueSaving*(outputfield.innerText))/100;
        var outputRemaining = document.getElementById('remainingAmount')
        outputRemaining.innerText = (outputfield.innerText - outputsavingamount.innerText )
        inputfieldSaving.value = ''
    })

})
