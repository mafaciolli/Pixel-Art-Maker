
// When size is submitted by the user, call makeGrid()
const table = document.getElementById('pixelCanvas');

// A Grid should appear when clicking on "Create grid" button
function makeGrid() {

    // clear Contents when calling the Function
    table.innerHTML = '';

 
    // The input "Grid Height" will determine the table Rows (numbers from 1 to 30).
    // The input "Grid Width" will determine the number of cells in each row (numbers 1 to 30)
    // After clicking on "Create Grid", a blank grid should apear with your specifications (Grid Hight x Grid Width)
    var height = document.getElementById('inputHeight').value;
    var width = document.getElementById('inputWidth').value;
    if (Number(height) > 0 && Number(height) < 46 && Number(width) > 0 && Number(width) < 46) {
        for (var i = 0; i < height; i++) {
            let line = document.createElement('tr');
            for (var j = 0; j < width; j++) {
                let data = document.createElement('td');

                // After selecting a color trough the Color picker:
                // Clicking on the cell grid should fill the Grid Cell with the selected color
                data.addEventListener('click', function() {
                    let selectedColor = document.getElementById('colorPicker').value;

                        this.classList.add('color');
                        this.style = 'background-color: ' + selectedColor;
                    });

                // Allows to erase a color when using Right Click (if there's any color on the cell)
                data.addEventListener('contextmenu', function(e) {
                    e.preventDefault();
                    if (this.classList.contains('color')) {
                        this.classList.remove('color');
                        this.style = '';
                    }

                    return false;
                });
                line.appendChild(data);
            }

            table.appendChild(line);
        }
    } else {
        alert('The Hight and width for this table should be between 1 and 45!!');
    }
}
