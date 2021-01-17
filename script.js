//set variables to count scores
let userScore = 0;
let compScore = 0;

//function for calculating computer's choice
const compChoice = () => {
    //get a random generated number b/w 1 and 3 to determine computer's choice
    let randomNum = Math.floor(Math.random() * 3 + 1);
    //define what each random number represents
    if (randomNum == 1) {
        return 'Rock';
    } else if (randomNum == 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
};

//what happens when user clicks a button
$('.user').on('click', function() {
    //get user's choice
    let user = this.id;
    //run function to get computer choice
    let computer = compChoice();
    
    //outline user's choice and hide other options
    $(this).addClass('highlight'); 
    $('.user').css('visibility', 'hidden');
    $(this).css('visibility', 'visible');
    
    //hide 'choose your weapon' prompt
    $('#prompt').css('visibility', 'hidden');

    //show computer's choice
    $(`.${computer}`).css('visibility', 'visible');
    
    //conditional if statements to see who won
    if (user === 'Rock' && computer === 'Rock') {
        $('#result').html('It\'s a tie!');
    } else if (user === 'Rock' && computer === 'Paper') {
        $('#result').html('You lose!');
        compScore ++;
    } else if (user === 'Rock' && computer === 'Scissors') {
        $('#result').html('You win!');
        userScore ++;
    } else if (user === 'Paper' && computer === 'Rock') {
        $('#result').html('You win!');
        userScore ++;
    } else if (user === 'Paper' && computer === 'Paper') {
        $('#result').html('It\'s a tie!');
    } else if (user === 'Paper' && computer === 'Scissors') {
        $('#result').html('You lose!');
        compScore ++;
    } else if (user === 'Scissors' && computer === 'Rock') {
        $('#result').html('You lose!');
        compScore ++;
    } else if (user === 'Scissors' && computer === 'Paper') {
        $('#result').html('You win!');
        userScore ++;
    } else if (user === 'Scissors' && computer === 'Scissors') {
        $('#result').html('It\'s a tie!');
    } else {
        alert('This shouldn\'t happen.');
    };

    //update user and comp scores
    $('#userCounter').text(userScore);
    $('#compCounter').text(compScore);
    
    //disable buttons after result
    $('.user').prop('disabled', true);

    //make play again pop up appear
    setTimeout(function() {
        $('#popup').css('visibility', 'visible');
    }, 500);
});

//what happens when user clicks play again button
$('#playAgain').on('click', function() {
    //reset page 
    //remove background from selected choice
    $('.user').removeClass('highlight');
    
    //hide computer's choice
    $('.computer').css('visibility', 'hidden');
    
    //show other options again
    $('.user').css('visibility', 'visible');
    
    //show 'choose your weapon' prompt
    $('#prompt').css('visibility', 'visible');

    //make play again pop up disappear
    $('#popup').css('visibility', 'hidden');

    //make choice buttons appear again
    $('.user').prop('disabled', false);
});




