
document.getElementsByTagName("body")[0].onresize = function () { mainFunction() };

mainFunction();

var image_width;
var image_height;

var col, row;

var image_number;

function mainFunction() {

  var main_div = document.querySelector('.container');
  var width = main_div.offsetWidth;

  var tmp1 = Math.floor(width / 100);
  image_width = width / tmp1;

  var text_div = document.querySelector('#text');
  var height = text_div.offsetHeight;

  var tmp2 = Math.floor(height / 100);

  if (tmp2 != 0) {
    image_height = height / tmp2;
  }

  else {
    image_height = 100;
  }

  col = Math.floor(width / 100);
  row = Math.floor(height / 100);

  var per = height % 100;

  if (per != 0) {
    row = row + 1;
  }

  image_number = (col * 2) + (row * 2);

  var r = document.querySelector(':root');

  r.style.setProperty('--colRepeat', col);
  r.style.setProperty('--rowRepeat', row + 2);

  r.style.setProperty('--colEnd', col);
  r.style.setProperty('--rowEnd', row + 2);

  r.style.setProperty('--imageWidth', image_width + "px");

  loadImage();
}

function loadImage() {

  var imageArray = new Array("imageFolder/image-01.jfif", "imageFolder/image-02.jfif", "imageFolder/image-03.jpg", "imageFolder/image-04.jpg", "imageFolder/image-05.jfif"
    , "imageFolder/image-06.jfif", "imageFolder/image-07.png", "imageFolder/image-08.jfif", "imageFolder/image-09.jfif", "imageFolder/image-10.jfif"
    , "imageFolder/image-11.jpg", "imageFolder/image-12.jfif", "imageFolder/image-13.jpg", "imageFolder/image-14.jpg", "imageFolder/image-15.jfif"
    , "imageFolder/image-16.jfif", "imageFolder/image-17.jfif", "imageFolder/image-18.jfif", "imageFolder/image-19.jfif", "imageFolder/image-20.jpg"
    , "imageFolder/image-21.jpg", "imageFolder/image-22.jpg", "imageFolder/image-23.jfif", "imageFolder/image-24.jfif", "imageFolder/image-25.jfif"
    , "imageFolder/image-26.jpg", "imageFolder/image-27.jpg", "imageFolder/image-28.jpg", "imageFolder/image-29.jpg", "imageFolder/image-30.jpg"
    , "imageFolder/image-31.jpg", "imageFolder/image-32.jpg", "imageFolder/image-33.jfif", "imageFolder/image-34.jpg", "imageFolder/image-35.jfif"
    , "imageFolder/image-36.jfif", "imageFolder/image-37.jpg", "imageFolder/image-38.jfif", "imageFolder/image-39.jpg", "imageFolder/image-40.jpg");


  var i;

  for (i = 1; i <= 40; i++) {
    var elem = document.getElementById("frame" + i);

    if (elem.lastChild != null && elem.style.display == "block") {
      elem.style.display = "none";
      elem.removeChild(elem.lastChild);
    }
  }

  for (i = 1; i <= image_number; i++) {

    var img_elem = document.createElement("img");
    img_elem.src = imageArray[i - 1];
    img_elem.alt = "No Image Found"

    img_elem.style.width = image_width + "px";
    img_elem.style.height = "100px";

    var elem = document.getElementById("frame" + i);
    elem.style.display = "block";
    elem.appendChild(img_elem);
  }

  for (i = image_number + 1; i <= 40; i++) {
    var elem = document.getElementById("frame" + i);

    if (elem.lastChild != null && elem.style.display == "block") {
      elem.style.display = "none";
      elem.removeChild(elem.lastChild);
    }
  }
}

swapImage();

var srt = 1, dst = 2;

function swapImage() {

  var val = Math.floor(Math.random() * (image_number + 1));

  if (val == 0) {
    val = 1;
  }

  var col1_start = 1;
  var col1_end_minus_one = col - 1;

  var col2_start = (col + (row * 2)) + 1;
  var col2_end_minus_one = ((col * 2) + (row * 2)) - 1;

  var col1_end = col;
  var row_end_minus_one = (col + (row * 2)) - 1;

  var row_end = col + (row * 2);
  var col_end = (col * 2) + (row * 2);

  if (val >= col1_start && val <= col1_end_minus_one) {
    srt = val;
    dst = val + 1;

    leftToRight();
  }

  else if (val >= col2_start && val <= col2_end_minus_one) {
    srt = val;
    dst = val + 1;

    leftToRight();
  }

  else if (val >= col1_end && val <= row_end_minus_one) {
    srt = val;
    dst = val + 2;

    upToDown();
  }

  else if (val == row_end) {
    srt = val;
    dst = col_end;

    upToDown();
  }

  else if (val == col_end) {
    srt = row_end;
    dst = val;

    upToDown();
  }

  setTimeout(swapImage, 2000);
}

function leftToRight() {

  var swp1 = document.getElementById("frame" + srt);
  var swp2 = document.getElementById("frame" + dst);

  if (swp1.lastChild != null && swp2.lastChild != null) {

    var img1 = document.createElement("img");
    img1.src = swp1.lastChild.src;
    img1.alt = "No Image Found"

    img1.style.width = image_width + "px";
    img1.style.height = "100px";
    img1.className = "swapRight";

    var img2 = document.createElement("img");
    img2.src = swp2.lastChild.src;
    img2.alt = "No Image Found"

    img2.style.width = image_width + "px";
    img2.style.height = "100px";
    img2.className = "swapLeft";

    swp1.removeChild(swp1.lastChild);
    swp2.removeChild(swp2.lastChild);

    swp1.appendChild(img2);
    swp2.appendChild(img1);
  }
}

function upToDown() {

  var swp1 = document.getElementById("frame" + srt);
  var swp2 = document.getElementById("frame" + dst);

  if (swp1.lastChild != null && swp2.lastChild != null) {

    var img1 = document.createElement("img");
    img1.src = swp1.lastChild.src;
    img1.alt = "No Image Found"

    img1.style.width = image_width + "px";
    img1.style.height = "100px";
    img1.className = "swapDown";

    var img2 = document.createElement("img");
    img2.src = swp2.lastChild.src;
    img2.alt = "No Image Found"

    img2.style.width = image_width + "px";
    img2.style.height = "100px";
    img2.className = "swapUp";

    swp1.removeChild(swp1.lastChild);
    swp2.removeChild(swp2.lastChild);

    swp1.appendChild(img2);
    swp2.appendChild(img1);
  }
}
