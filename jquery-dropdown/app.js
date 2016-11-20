//Problem: Looks bad in small viewports

//Create a select and append to menu
var $select = $("<select></select>");
$("#menu").append($select);

//Cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);
//Create an option
  var $option = $("<option></option>");
//option's value is href of the link
  
if( $anchor.parent().hasClass("selected")){
  $option.prop("selected", true);
} 
  
  $option.val($anchor.attr("href"));
//option's text is the text of the link  
  $option.text($anchor.text());
//append option to select
  $select.append($option);
});

$select.change(function(){


//go to select's location
  window.location = $select.val();
});

  
//Modify SCC to hide links on small widths and show button and select
//Also hides select and button on larger width and show's links
//Deal with selected options depending on current page