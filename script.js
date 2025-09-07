function scrollingText() {
    const text = document.getElementById('text').value;
    const messageElement = document.getElementById('message');
    const visible = document.getElementById('visible');
    const fullscreen = document.getElementById("fullscreen");

    messageElement.textContent = text;
    visible.innerHTML = `<marquee direction="left" behavior="scroll" scrollamount="50">${text}</marquee>`;
    visible.style.display = "block";
}

// detect Enter key on input
document.getElementById("text").addEventListener("keydown", function(event) {
if (event.key === "Enter") {
  event.preventDefault(); // stop form submit/refresh
  document.getElementById("button").click(); // trigger button click
}
});

function refresh() {
  location.reload();
}
