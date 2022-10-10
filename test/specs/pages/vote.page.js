class VotePage {
    get voteTitle(){
        return $('body > div.container-fluid > div:nth-child(6) > div > h4');
    }

    // Radio buttons
    get voteItemXmen(){
        return $('#heroMovieRadio1');
    }

    get voteItemAvengers(){
        return $('#heroMovieRadio2');
    }

    get voteItemDeadpool(){
        return $('#heroMovieRadio3');
    }

    get voteItemSpiderman(){
        return $('#heroMovieRadio4');
    }

    get voteItemIronman(){
        return $('#heroMovieRadio5');
    }

    // Labels
    get voteItemLabelXmen(){
        return $('#vote-form > div:nth-child(1) > label');
    }

    get voteItemLabelAvengers(){
        return $('#vote-form > div:nth-child(2) > label');
    }

    get voteItemLabelDeadpool(){
        return $('#vote-form > div:nth-child(3) > label');
    }

    get voteItemLabelSpiderman(){
        return $('#vote-form > div:nth-child(4) > label');
    }

    get voteItemLabelIronman(){
        return $('#vote-form > div:nth-child(5) > label');
    }

    
    get submitButton(){
        return $('#vote-form > button');
    }

    get thanksAlert(){
        return $('#vote-alert')
    }

    // Movie Title Grid / Number of votes
    get voteItemTextXmen(){
        return $('#movieName1');
    }

    get voteItemValXmen(){
        return $('#movieVotes1');
    }

    get voteItemTextAvengers(){
        return $('#movieName2');
    }

    get voteItemValAvengers(){
        return $('#movieVotes2');
    }

    get voteItemTextDeadpool(){
        return $('#movieName3');
    }

    get voteItemValDeadpool(){
        return $('#movieVotes3');
    }

    get voteItemTextSpiderman(){
        return $('#movieName4');
    }

    get voteItemValSpiderman(){
        return $('#movieVotes4');
    }

    get voteItemTextIronman(){
        return $('#movieName5');
    }

    get voteItemValIronman(){
        return $('#movieVotes5');
    }
}

module.exports = new VotePage();