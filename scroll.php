<!DOCTYPE html>
<html>
    <head>
        <title>Your full Scrolling Board</title>
        <link rel=stylesheet href="stylefull.css">
    </head>
    <body>
        <div class="animated-box">
            <marquee direction="left" behavior="scroll" scrollamount="100"><?php echo $_REQUEST["message"] ?></marquee>
        </div>
        <br><br><br><br>
        <button id="fsBtn" style="align-items: right;">Fullscreen</button>
        <script>
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
        </script>
    </body>
</html>