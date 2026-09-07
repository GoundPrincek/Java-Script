const div = document.createElement("div");
div.classList.add("card");

const heading = document.createElement("h2");
// Fix: Add text content so it is visible
heading.textContent = "JavaScript DOM Revision"; 


div.append(heading);
document.body.append(div);