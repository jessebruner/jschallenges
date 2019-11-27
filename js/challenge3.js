$("#ch3form").submit(function() {

  var fruit = $('input[name="fruit"]');
  var standing = $('input[name="standing"]');
  state = false
  fruit.each(function(i){
    if (this.checked){
      standing.each(function(i){
        if (this.checked){
        state = true
    }
}
)}})
  if (state == true)
  return true
  else{
  alert("You must pick a fruit and standing!!!")
  return false;
}
})
