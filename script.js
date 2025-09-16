function scrollingText() {
    const text = document.getElementById('text').value;
    const messageElement = document.getElementById('message');
    const hiddenInput = document.getElementById('hiddenMessage')
    const shareLink = document.getElementById('shareLink');
    const visible = document.getElementById('visible');

    messageElement.textContent = text;

      // clone the marquee to restart animation
    const newMarquee = messageElement.cloneNode(true);
    newMarquee.textContent = text;
    messageElement.parentNode.replaceChild(newMarquee, messageElement);

    hiddenInput.value = text;
    shareLink.value = "https://pro70crazy.wuaze.com/HTMLtest/scrolling_text/scroll.php?msg=" + encodeURIComponent(text).replace(/%20/g, "+");
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

function copyLink() {
  // Get the text field
  var copyText = document.getElementById("shareLink");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  string.innerText = "Copied to Clipboard!"
  setTimeout(() => {
    string.innerText = "Copy Link"
  }, 1000);
}

function enterFullscreen() {
  console.log("Button clicked");
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    fsBtn.innerText = "Exit Fullscreen";
  } else {
    document.exitFullscreen();
    fsBtn.innerText = "Fullscreen";
  }
}
document.getElementById("fsBtn").addEventListener("click", enterFullscreen);