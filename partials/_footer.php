<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
    document.addEventListener("contextmenu", function(event) {
        event.preventDefault();
        alert('Right Click is Disabled');
    }, false);
    AOS.init();
    $("#menus").hide();
    $("#sidepanel").hide();
    $("#check").click(function() {

        $("#menus").toggle('');

        $("#sidepanel").toggle('');
    });

    updateScreen();
    window.addEventListener('resize', updateScreen);

    function updateScreen() {
        if (window.innerWidth < 600) {
            $("#menus").addClass("d-none");
            $("#sidepanel").removeClass("d-none");
        } else {
            $("#menus").removeClass("d-none");
            $("#sidepanel").addClass("d-none");
        }
    }


    window.onscroll = function() {
        myFunction()
    };

    function myFunction() {
        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {

        } else {

        }
    }
</script>