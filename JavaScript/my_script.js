// This function is being triggered when the user clicked on one of the riddles buttons
function get_click(id) {
  if (id == "riddle_1") {
    document.getElementById("RIDDLE_1_BOX").style.display = "block";
    document.getElementById("RIDDLE_2_BOX").style.display = "none";
    document.getElementById("RIDDLE_3_BOX").style.display = "none";
    document.getElementById("RIDDLE_4_BOX").style.display = "none";
    document.getElementById("RIDDLE_5_BOX").style.display = "none";
    document.getElementById("RIDDLE_6_BOX").style.display = "none";
    document.getElementById("give_up_button_1").style.display = "block";
    document.getElementById("answer_1").style.display = "none";
  }
  if (id == "riddle_2") {
    document.getElementById("RIDDLE_1_BOX").style.display = "none";
    document.getElementById("RIDDLE_2_BOX").style.display = "block";
    document.getElementById("RIDDLE_3_BOX").style.display = "none";
    document.getElementById("RIDDLE_4_BOX").style.display = "none";
    document.getElementById("RIDDLE_5_BOX").style.display = "none";
    document.getElementById("RIDDLE_6_BOX").style.display = "none";
    document.getElementById("give_up_button_2").style.display = "block";
    document.getElementById("answer_2").style.display = "none";
  }
  if(id == "riddle_3"){
    document.getElementById("RIDDLE_1_BOX").style.display = "none";
    document.getElementById("RIDDLE_2_BOX").style.display = "none";
    document.getElementById("RIDDLE_3_BOX").style.display = "block";
    document.getElementById("RIDDLE_4_BOX").style.display = "none";
    document.getElementById("RIDDLE_5_BOX").style.display = "none";
    document.getElementById("RIDDLE_6_BOX").style.display = "none";
    document.getElementById("give_up_button_3").style.display = "block";
    document.getElementById("answer_3").style.display = "none";
  }
  if(id == "riddle_4"){
    document.getElementById("RIDDLE_1_BOX").style.display = "none";
    document.getElementById("RIDDLE_2_BOX").style.display = "none";
    document.getElementById("RIDDLE_3_BOX").style.display = "none";
    document.getElementById("RIDDLE_4_BOX").style.display = "block";
    document.getElementById("RIDDLE_5_BOX").style.display = "none";
    document.getElementById("RIDDLE_6_BOX").style.display = "none";
    document.getElementById("give_up_button_4").style.display = "block";
    document.getElementById("answer_4").style.display = "none";
  }
  if(id == "riddle_5"){
    document.getElementById("RIDDLE_1_BOX").style.display = "none";
    document.getElementById("RIDDLE_2_BOX").style.display = "none";
    document.getElementById("RIDDLE_3_BOX").style.display = "none";
    document.getElementById("RIDDLE_4_BOX").style.display = "none";
    document.getElementById("RIDDLE_5_BOX").style.display = "block";
    document.getElementById("RIDDLE_6_BOX").style.display = "none";
    document.getElementById("give_up_button_5").style.display = "block";
    document.getElementById("answer_5").style.display = "none";
  }
  if(id == "riddle_6"){
    document.getElementById("RIDDLE_1_BOX").style.display = "none";
    document.getElementById("RIDDLE_2_BOX").style.display = "none";
    document.getElementById("RIDDLE_3_BOX").style.display = "none";
    document.getElementById("RIDDLE_4_BOX").style.display = "none";
    document.getElementById("RIDDLE_5_BOX").style.display = "none";
    document.getElementById("RIDDLE_6_BOX").style.display = "block";
    document.getElementById("give_up_button_6").style.display = "block";
    document.getElementById("answer_6").style.display = "none";
  }
}



// This function is being triggered every time someone clicked on the give up button
function show_answer(id) {
  if (id == "give_up_button_1") {
    document.getElementById(id).style.display = "none";
    document.getElementById("answer_1").style.display = "block";
  }
  if (id == "give_up_button_2") {
    document.getElementById("give_up_button_2").style.display = "none";
    document.getElementById("answer_2").style.display = "block";
  }
  if(id == "give_up_button_3"){
    document.getElementById("give_up_button_3").style.display = "none";
    document.getElementById("answer_3").style.display = "block";
  }
  if(id == "give_up_button_4"){
    document.getElementById("give_up_button_4").style.display = "none";
    document.getElementById("answer_4").style.display = "block";
  }
  if(id == "give_up_button_5"){
    document.getElementById("give_up_button_5").style.display = "none";
    document.getElementById("answer_5").style.display = "block";
  }
  if(id == "give_up_button_6"){
    document.getElementById("give_up_button_6").style.display = "none";
    document.getElementById("answer_6").style.display = "block";
  }
}



/* This function is being triggered every time someone clicked on the riddles link -
      from any html page except for the riddles.html page
*/
window.onload = function(){
  vanish_all_riddles();
}



/* This function is being triggered every time someone clicked on the riddles link -
      from the riddles.html page
*/
function vanish_all_riddles(){
  document.getElementById("RIDDLE_1_BOX").style.display = "none";
  document.getElementById("RIDDLE_2_BOX").style.display = "none";
  document.getElementById("RIDDLE_3_BOX").style.display = "none";
  document.getElementById("RIDDLE_4_BOX").style.display = "none";
  document.getElementById("RIDDLE_5_BOX").style.display = "none";
  document.getElementById("RIDDLE_6_BOX").style.display = "none";
  document.getElementById("give_up_button_1").style.display = "none";
  document.getElementById("give_up_button_2").style.display = "none";
  document.getElementById("give_up_button_3").style.display = "none";
  document.getElementById("give_up_button_4").style.display = "none";
  document.getElementById("give_up_button_5").style.display = "none";
  document.getElementById("give_up_button_6").style.display = "none";
  document.getElementById("answer_1").style.display = "none";
  document.getElementById("answer_2").style.display = "none";
  document.getElementById("answer_3").style.display = "none";
  document.getElementById("answer_4").style.display = "none";
  document.getElementById("answer_5").style.display = "none";
  document.getElementById("answer_6").style.display = "none";
}
