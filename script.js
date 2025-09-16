function scrollingText() {
    // make JS vars from HTML id
    const text = document.getElementById('text').value;
    const messageElement = document.getElementById('message');
    const hiddenInput = document.getElementById('hiddenMessage')
    const shareLink = document.getElementById('shareLink');
    const visible = document.getElementById('visible');

    // add text content from text
    messageElement.textContent = text;

    // clone the marquee to restart animation
    const newMarquee = messageElement.cloneNode(true);
    newMarquee.textContent = text;
    messageElement.parentNode.replaceChild(newMarquee, messageElement);

    // add hidden value for PHP
    hiddenInput.value = text;

    // display link
    shareLink.value = "https://pro70crazy.wuaze.com/HTMLtest/scrolling_text/scroll.php?msg=" + encodeURIComponent(text).replace(/%20/g, "+");

    // marquee and buttons go visible
    visible.style.display = "block";
}

// detect Enter key on input
document.getElementById("text").addEventListener("keydown", function(event) {
if (event.key === "Enter") {
  event.preventDefault(); // stop form submit/refresh
  document.getElementById("button").click(); // trigger button click
}
});

// when Reset button is clicked, it will reload the page
function refresh() {
  location.reload();
}

// Copy link feature
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

// full screen feature 
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

// in case the function doesn't trigger by button
document.getElementById("fsBtn").addEventListener("click", enterFullscreen);