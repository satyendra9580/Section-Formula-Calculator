function calculate(event) {
    event.preventDefault();

    // Retrieve the value of the selected shape
    var shape = document.getElementById("shape").value;

    // Retrieve the input values
    let x1 = parseFloat(document.getElementById('x1').value);
    let y1 = parseFloat(document.getElementById('y1').value);
    let z1 = parseFloat(document.getElementById('z1_plane').value);
    let x2 = parseFloat(document.getElementById('x2').value);
    let y2 = parseFloat(document.getElementById('y2').value);
    let z2 = parseFloat(document.getElementById('z2_plane').value);
    let m = parseFloat(document.getElementById('m').value);
    let n = parseFloat(document.getElementById('n').value);
    let p = parseFloat(document.getElementById('p_plane').value);
    let q = parseFloat(document.getElementById('q_plane').value);
    let r = parseFloat(document.getElementById('r_plane').value);

    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2) || isNaN(m) || isNaN(n) || 
    (shape === "plane" && (isNaN(z1) || isNaN(z2) || isNaN(p) || isNaN(q) || isNaN(r)))) {
    alert("Please enter all required values.");
    return;
}

    // Calculate coordinates based on the selected shape
    var x, y, z;
    switch (shape) {
        case "line":
            x = (m * x2 + n * x1) / (m + n);
            y = (m * y2 + n * y1) / (m + n);
            document.getElementById('result').innerText = `Coordinates of the point on the line: (${x}, ${y})`;
            break;
        case "plane":
            x = (m * x2 + n * x1 + p) / (m + n + p);
            y = (m * y2 + n * y1 + q) / (m + n + q);
            z = (m * z2 + n * z1 + r) / (m + n + r);
            document.getElementById('result').innerText = `Coordinates of the point on the plane: (${x}, ${y}, ${z})`;
            break;
        default:
            break;
    }
}

// Set up event listener for form submission
document.getElementById("shapeForm").addEventListener("submit", calculate);

// Function to show relevant input fields based on selected shape
function showDimensions() {
    var shape = document.getElementById("shape").value;

    // Hide all dimension rows initially
    document.getElementById("lineDimensions").style.display = "none";
    document.getElementById("planeDimensions").style.display = "none";

    // Show the relevant dimension row based on the selected shape
    switch (shape) {
        case "line":
            document.getElementById("lineDimensions").style.display = "block";
            break;
        case "plane":
            document.getElementById("planeDimensions").style.display = "block";
            break;
        default:
            break;
    }
}
