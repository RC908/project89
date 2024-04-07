
question_turn = "player1";
answer_turn = "player2";
player1_score = 0;
player2_score = 0;
player1_name = localStorage.getItem("P1Name");
player2_name = localStorage.getItem("P2Name");
console.log(player1_name);
console.log(player2_name);


function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4 id='question'>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer: <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}


function check() {
    get_answer = document.getElementById("input_check_box").value;
    if (get_answer == actual_answer) {
        if (answer_turn == "player1") {
            update_player1_score = player1_score + 1;
            player1_score = update_player1_score;
            document.getElementById("player1_score").innerHTML = update_player1_score;
            question_turn = "player1";
            document.getElementById("Questioner").innerHTML = "Question Turn : " + player1_name;
            answer_turn = "player2";
            document.getElementById("Answerer").innerHTML = "Answer Turn : " + player2_name;
            document.getElementById("player1_name").innerHTML = "Player 1:" + player1_name;
            document.getElementById("player2_name").innerHTML = "Player 2:" + player2_name;
        }
        else {
            update_player2_score = player2_score + 1;
            player2_score = update_player2_score;
            document.getElementById("player2_score").innerHTML = update_player2_score;
            question_turn = "player2";
            document.getElementById("Questioner").innerHTML = "Question Turn : " + player2_name;
            answer_turn = "player1";
            document.getElementById("Answerer").innerHTML = "Answer Turn : " + player1_name;
            document.getElementById("player1_name").innerHTML = "Player 1:" + player1_name;
            document.getElementById("player2_name").innerHTML = "Player 2:" + player2_name;
        }
    }
        elseif(get_answer != actual_answer) {
            if (answer_turn == "player1") {
                update_player1_score = player1_score + 0;
                player1_score = update_player1_score;
                document.getElementById("player1_score").innerHTML = update_player1_score;
                question_turn = "player1";
                document.getElementById("Questioner").innerHTML = "Question Turn : " + player1_name;
                answer_turn = "player2";
                document.getElementById("Answerer").innerHTML = "Answer Turn : " + player2_name;
                document.getElementById("player1_name").innerHTML = "Player 1:" + player1_name;
                document.getElementById("player2_name").innerHTML = "Player 2:" + player2_name;
            }
            else {
                update_player2_score = player2_score + 0;
                player2_score = update_player2_score;
                document.getElementById("player2_score").innerHTML = update_player2_score;
                question_turn = "player2";
                document.getElementById("Questioner").innerHTML = "Question Turn : " + player2_name;
                answer_turn = "player1";
                document.getElementById("Answerer").innerHTML = "Answer Turn : " + player1_name;
                document.getElementById("player1_name").innerHTML = "Player 1:" + player1_name;
                document.getElementById("player2_name").innerHTML = "Player 2:" + player2_name;
            }
        }
}