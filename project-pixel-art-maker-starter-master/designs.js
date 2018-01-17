// Select color input
var color = $('#colorPicker');
// Select size input
var height = $('#input_height');
var width  = $('#input_width');
//select table
var	table  =$('#pixel_canvas');

function makeGrid() { 
	   // creat the table each time the function is run
  let table = $('#pixel_canvas');
        // empty the table to prevent table pinding 
  table.empty();
       // creating rows
  for (var r = 0; r < height.val(); r++) {
      // creating html row
      table.append("<tr class='rows'></tr>");
      // creating columns
      for (var c = 0; c < width.val(); c++) {
      // creating cells
        $('.rows').last().append("<td></td>");
      }
  };
};

var message=$('#removeMessage');

// When size is submitted by the user, call makeGrid()
$('input[type="submit"]').click(function(e){
  e.preventDefault();
  makeGrid();
  message.text('Double click to remove cell color');
});


//change background color when user clicks on the cell
table.on('click', 'td', function(){
    $(this).css('background-color', color.val());
  });

//whiten when double clicked 
table.on('dblclick', 'td', function(){
    $(this).css('background-color', '#ffffff');
  });

//clear the grid

$('#reset').click(function(e){
  e.preventDefault();
  table.empty();
  message.empty();
});




