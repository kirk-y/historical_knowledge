
function check(num){
    const answerInput = document.getElementById('answer');
    const answerValue = answerInput.value;
    console.log("answer: " + answerValue + ", game-" + num)
    correct_answer = ['3214', '3412', '1324', '1432', '2431', '3412']
    console.log(correct_answer)
    if(answerValue === correct_answer[num]){
        alert("Mission 2： Narrate the story of ONE picture!");
        window.location.href="../img-info/"+num+"/gameinfo.html";
    } 
    else{
        alert("Your answer -- '" + answerValue + "' is incorrect!");
    }
        
}


