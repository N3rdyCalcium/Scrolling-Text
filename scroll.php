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
        <button onclick="enterFullscreen()" id="fsBtn" style="align-items: right;">Fullscreen</button>
        <script src="script.js"></script>
    </body>
</html>