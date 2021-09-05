let flag = 0;

window.onload = function() {
  vanish_image_data();
}

function vanish_image_data() {
  document.getElementById("Display_image_data_wrapper").style.display = "none";
}

function swap_images(id){
  var left_image = document.getElementById(id);
      right_image = document.getElementById("Skeletor's_image");
      left_src = left_image.src;
      right_src = right_image.src;
  left_image.src = right_src;
  right_image.src = left_src;
  left_image.style.display = "none";
  right_image.style.display = "block";
  show_friends_button();
}

function show_friends_button(){
  document.getElementById("Show_more_friends_button").style.display = "block";
}

function hide_friends_button(){
  document.getElementById("Show_more_friends_button").style.display = "none";
}


function display_table(id) {
  if (id == "Ori's_image") {
    flag = 1;
    document.getElementById("Kirov's_image").style.display = "none";
    document.getElementById("Maspin's_image").style.display = "none";
    document.getElementById("Oded's_image").style.display = "none";
    document.getElementById("Yael's_image").style.display = "none";
    document.getElementById("Skeletor's_image").style.display = "none";
    swap_images(id);
    ori_data();
  }
  if (id == "Kirov's_image") {
    flag = 2;
    document.getElementById("Ori's_image").style.display = "none";
    document.getElementById("Maspin's_image").style.display = "none";
    document.getElementById("Oded's_image").style.display = "none";
    document.getElementById("Yael's_image").style.display = "none";
    document.getElementById("Skeletor's_image").style.display = "none";
    swap_images(id);
    kirov_data();
  }
  if (id == "Maspin's_image") {
    flag = 3;
    document.getElementById("Ori's_image").style.display = "none";
    document.getElementById("Kirov's_image").style.display = "none";
    document.getElementById("Oded's_image").style.display = "none";
    document.getElementById("Yael's_image").style.display = "none";
    document.getElementById("Skeletor's_image").style.display = "none";
    swap_images(id);
    maspin_data();
  }
  if (id == "Oded's_image") {
    flag = 4;
    document.getElementById("Ori's_image").style.display = "none";
    document.getElementById("Kirov's_image").style.display = "none";
    document.getElementById("Maspin's_image").style.display = "none";
    document.getElementById("Yael's_image").style.display = "none";
    document.getElementById("Skeletor's_image").style.display = "none";
    swap_images(id);
    oded_data();
  }
  if (id == "Yael's_image") {
    flag = 5;
    document.getElementById("Ori's_image").style.display = "none";
    document.getElementById("Kirov's_image").style.display = "none";
    document.getElementById("Maspin's_image").style.display = "none";
    document.getElementById("Oded's_image").style.display = "none";
    document.getElementById("Skeletor's_image").style.display = "none";
    swap_images(id);
    yael_data();
  }
  if (id == "Skeletor's_image") {
    // skeletor_data();
    flag = 6;
    play_skeletor();
  }
}

function ori_data() {
  document.getElementById("Display_image_data_wrapper").style.display = "block";
  document.getElementById("Person_in_image_name").innerHTML = "אדון אורי :"
  document.getElementById("my_th_1").innerHTML = "Holes in the shows :";
  document.getElementById("my_td_1").innerHTML = "7";
  document.getElementById("my_th_2").innerHTML = "Arriving late :";
  document.getElementById("my_td_2").innerHTML = "3";
  document.getElementById("row3").style.display = "";
  document.getElementById("my_th_3").innerHTML = "Blabeling :";
  document.getElementById("my_td_3").innerHTML = "919,765,123";
  document.getElementById("my_th_4").innerHTML = "Left orly :";
  document.getElementById("my_td_4").innerHTML = "6";
  document.getElementById("my_th_5").innerHTML = "Who's Orly ???";
  document.getElementById("my_td_5").innerHTML = "התכוונתי מוקדם...לא משנה";
  document.getElementById("my_th_5").style.textAlign = "center";
  document.getElementById("my_td_5").style.textAlign = "center";
  document.getElementById("my_last_tr").style.display = "none";
}

function kirov_data(){
  document.getElementById("Display_image_data_wrapper").style.display = "block";
  document.getElementById("Person_in_image_name").innerHTML = "אדון קירוב :"
  document.getElementById("my_th_1").innerHTML = "Played Yuri with Ori :";
  document.getElementById("my_td_1").innerHTML = "0";
  document.getElementById("my_th_2").innerHTML = "Fixed Eyal a date :";
  document.getElementById("my_td_2").innerHTML = "0";
  document.getElementById("row3").style.display = "none";
  document.getElementById("my_th_4").style.textAlign = "center";
  document.getElementById("my_td_4").style.textAlign = "center";
  document.getElementById("my_th_4").innerHTML = "Spending time watching on tik-tok :";
  document.getElementById("my_td_4").innerHTML = "919,657,333 hours...so far";
  document.getElementById("my_th_5").innerHTML = "Arguments :";
  document.getElementById("my_td_5").innerHTML = "62,761";
  document.getElementById("my_last_tr").style.display = "";
  document.getElementById("my_td_6").innerHTML = "314,901";

}

function maspin_data(){
  document.getElementById("Display_image_data_wrapper").style.display = "block";
  document.getElementById("Person_in_image_name").innerHTML = "אדון יעקב :"
  document.getElementById("my_th_1").innerHTML = "Talking level :";
  document.getElementById("my_td_1").innerHTML = "Non - Stop";
  document.getElementById("my_th_2").innerHTML = "Acting :";
  document.getElementById("my_td_2").innerHTML = "69";
  document.getElementById("row3").style.display = "";
  document.getElementById("my_th_3").innerHTML = "Free-kick level :";
  document.getElementById("my_td_3").innerHTML = "Trees";
  document.getElementById("my_th_4").innerHTML = "Stoned or high :";
  document.getElementById("my_td_4").innerHTML = "919";
  document.getElementById("my_td_5").innerHTML = "10";
  document.getElementById("my_td_6").innerHTML = "Always !!!";
}

function oded_data(){
  document.getElementById("Display_image_data_wrapper").style.display = "block";
  document.getElementById("Person_in_image_name").innerHTML = "אדון עודד :"
  document.getElementById("my_th_1").innerHTML = "Scoring goals :";
  document.getElementById("my_td_1").innerHTML = "Always !!!";
  document.getElementById("my_th_2").innerHTML = "Assists :";
  document.getElementById("my_td_2").innerHTML = "What is it ?";
  document.getElementById("row3").style.display = "";
  document.getElementById("my_th_3").innerHTML = "Haircut :";
  document.getElementById("my_td_3").innerHTML = "Changing 24/7";
  document.getElementById("my_th_4").innerHTML = "Best friend :";
  document.getElementById("my_td_4").innerHTML = "Bar";
  document.getElementById("my_td_5").innerHTML = "0";
  document.getElementById("my_td_6").innerHTML = "Never !!!";
}

function yael_data(){
  document.getElementById("Display_image_data_wrapper").style.display = "block";
  document.getElementById("Person_in_image_name").innerHTML = "גברת יעל :"
  document.getElementById("my_th_1").innerHTML = "Ball control :";
  document.getElementById("my_td_1").innerHTML = "Teach me !!!";
  document.getElementById("my_th_2").innerHTML = "Working out :";
  document.getElementById("my_td_2").innerHTML = "Always !!!";
  document.getElementById("row3").style.display = "";
  document.getElementById("my_th_3").innerHTML = "Mother :";
  document.getElementById("my_td_3").innerHTML = "24/7";
  document.getElementById("my_th_4").innerHTML = "Wife :";
  document.getElementById("my_td_4").innerHTML = "7/24";
  document.getElementById("my_td_5").innerHTML = "1 - Alex's dad";
  document.getElementById("my_td_6").innerHTML = "Who ???";
}

// function skeletor_data(){
//
// }

function play_skeletor(){
  var audio = new Audio("../audio/skeletor_fools.mp3");
  audio.play();
}

function show_friends_images(){
  if(flag == 1){
    swap_images("Ori's_image");
  }
  if(flag == 2){
    swap_images("Kirov's_image");
  }
  if(flag == 3){
    swap_images("Maspin's_image");
  }
  if(flag == 4){
    swap_images("Oded's_image");
  }
  if(flag == 5){
    swap_images("Yael's_image");
  }

  document.getElementById("Ori's_image").style.display = "block";
  document.getElementById("Kirov's_image").style.display = "block";
  document.getElementById("Maspin's_image").style.display = "block";
  document.getElementById("Oded's_image").style.display = "block";
  document.getElementById("Yael's_image").style.display = "block";
  document.getElementById("Skeletor's_image").style.display = "block";
  document.getElementById("Display_image_data_wrapper").style.display = "none";
  document.getElementById("Show_more_friends_button").style.display = "none";
  document.getElementById("My_images_row").style.marginLeft = "-5px";
  document.getElementById("My_images_row").style.marginRight = "-30px";
  hide_friends_button();
}
