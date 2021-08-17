class Quiz {
  constructor(){
    
  }

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

    //write code to change the background color here
    background("pink")
    
    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo()
    console.log(allContestants[plr])

    if(allContestants!==undefined){

    

    //write condition to check if contestantInfor is not undefined

    //write code to add a note here
      var display_Answers = 200
    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correctAns = "2"
      if(correctAns === allContestants[plr].answer){
        fill("green")
        
        
      }
      else{
        fill("red")
      }
      // text(allContestants.contestant1.name,300,200) 
      //   text(allContestants.contestant1.answer,400,200)

      //   text(allContestants.contestant2.name,300,200) 
      //   text(allContestants.contestant2.answer,400,200)

      text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
      display_Answers+=20
    }
    
  }
  }

}







