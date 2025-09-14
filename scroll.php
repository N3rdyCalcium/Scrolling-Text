<!DOCTYPE html>
<html>
    <head>
        <title>Your full Scrolling Board</title>
        <link rel=stylesheet href="stylefull.css">
    </head>
    <body class="animated-box">
        <marquee direction="left" behavior="scroll" scrollamount="100"><?php echo $_REQUEST["message"] ?></marquee>
    </body>
</html>