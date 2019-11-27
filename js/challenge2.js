$( "#useBilling" ).change(function(){
  let home = $("#home");
  let billing = $("#billing")

  if (this.checked){
    home.val(billing.val());
    home.prop('disabled', true);
  } else {
    home.val("");
    home.prop('disabled', false);
  }
}
)
