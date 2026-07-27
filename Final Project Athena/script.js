let round = 0;

let player = {
    total: 0,
};

let computer = {
    total: 0,
};

function score(a, b) {
    if (a == 1 || b == 1) {
        return 0;
    }

    if (a == b) {
        return (a + b) * 2;
    }

    return a + b;
}

$("#roll").click(function () {
    if (round == 3) {
        return;
    }

    round++;

    let p1 = Math.floor(Math.random() * 6) + 1;
    let p2 = Math.floor(Math.random() * 6) + 1;

    let c1 = Math.floor(Math.random() * 6) + 1;
    let c2 = Math.floor(Math.random() * 6) + 1;

    $("#p1")
        .attr("src", "images/die" + p1 + ".png")
        .hide()
        .fadeIn();
    $("#p2")
        .attr("src", "images/die" + p2 + ".png")
        .hide()
        .fadeIn();

    $("#c1")
        .attr("src", "images/die" + c1 + ".png")
        .hide()
        .fadeIn();
    $("#c2")
        .attr("src", "images/die" + c2 + ".png")
        .hide()
        .fadeIn();

    let ps = score(p1, p2);
    let cs = score(c1, c2);

    player.total += ps;
    computer.total += cs;

    $("#pscore").text(ps);
    $("#cscore").text(cs);

    $("#ptotal").text(player.total);
    $("#ctotal").text(computer.total);

    if (round == 3) {
        if (player.total > computer.total) {
            $("#msg").text("You Win!");
        } else if (computer.total > player.total) {
            $("#msg").text("Computer Wins!");
        } else {
            $("#msg").text("It's a Tie!");
        }
    }
});

