function scrollingText() {
    const text = document.getElementById('text').value;
    const messageElement = document.getElementById('message');
    const hiddenInput = document.getElementById('hiddenMessage')
    const visible = document.getElementById('visible');

    messageElement.textContent = text;

      // clone the marquee to restart animation
    const newMarquee = messageElement.cloneNode(true);
    newMarquee.textContent = text;
    messageElement.parentNode.replaceChild(newMarquee, messageElement);

    hiddenInput.value = text;
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
