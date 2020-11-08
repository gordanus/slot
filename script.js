$(document).ready(function () {

    var prviBroj = $('#prvi');
    var drugiBroj = $('#drugi');
    var treciBroj = $('#treci');
    var kredit = 100;

    var rand1;
    var rand2;
    var rand3;


    $('#spin').click(function () {

        if (kredit != 0 || kredit > 0) {

            $('#rez').html("");

            var interval = setInterval(generateRandom, 100);

            setTimeout(function () {

                if (rand1 === rand2 && rand2 === rand3) {
                    $('#rez').html("Čestitamo! Osvojili ste 100 dinara kredita.");
                    kredit = kredit + 100;
                    $('#kredit b').html(kredit);
                    $('#rez').css("color", "green");
                } else if ((rand1 === rand2 && rand2 != rand3) || (rand2 === rand3 && rand3 != rand1)) {
                    $('#rez').html("Čestitamo! Osvojili ste 50 dinara kredita.");
                    kredit = kredit + 50;
                    $('#kredit b').html(kredit);
                    $('#rez').css("color", "blue");
                } else {
                    $('#rez').html("Izgubili ste 100 dinara kredita");
                    kredit = kredit - 100;
                    $('#kredit b').html(kredit);
                    $('#rez').css("color", "red");
                };
                clearInterval(interval);
            }, 2000);
        } else {
            $('#rez').html("Kraj igre!");

        }
    });

    $('#nova').click(function(){
        location.reload();
    })

    function generateRandom() {
        rand1 = Math.round(Math.random() * 10 + 1);
        rand2 = Math.round(Math.random() * 10 + 1);
        rand3 = Math.round(Math.random() * 10 + 1);
        prviBroj.html(rand1);
        drugiBroj.html(rand2);
        treciBroj.html(rand3);
    };


});