class Quiz {
  constructor(){}

  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to show a heading for showing the result of Quiz
    
    text("Results: ",120,100)

    //call getContestantInfo( ) here
    Contestant.getContestantInfo();

    if(allContestants !== undefined){
      var display_position = 130;
      for(var plr in allContestants){
        if (plr === "player" + contestant.index)
          fill("red")
        else 
          fill("black");

        display_position+=20;
        textSize(15);
        text(allContestants[plr].name + ": " + allContestants[plr].distance, 120,display_position)
      }
    }

    //write condition to check if contestantInfor is not undefined


    //write code to add a note here


    //write code to highlight contest who answered correctly

    
  }

}
