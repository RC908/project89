
function addUser()
{
    player1Name = document.getElementById("player1_name").value;
    player2Name = document.getElementById("player2_name").value;

    localStorage.setItem("P1Name", player1Name);
    localStorage.setItem("P2Name", player2Name);
    window.location = "quiz_game_page.html";
}