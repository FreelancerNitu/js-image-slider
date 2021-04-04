// var photos = ["img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpg","img/img5.jpg","img/img6.jpg","img/img7.jpg"];
// var imgTag = document.querySelector("img");
// var count = 0;


// function next(){
//  count++;
//  if(count >= photos.length){
//      count=0;
//      imgTag.src=photos[count];
//  }else{
//     imgTag.src=photos[count];
//  }

// }

// function prev(){
//     count--;
//     if(count < 0){
//         count=photos.length-1;
//         imgTag.src=photos[count];
//     }else{
//        imgTag.src=photos[count];
//     }
// }

var photos = ["img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpg","img/img5.jpg","img/img6.jpg","img/img7.jpg"];
var imgTag = document.querySelector("img");
var count = 0;

function next (){
  count++;
  if(count >= photos.length){
      count=0;
      imgTag.src=photos[count];
  }else{
    imgTag.src=photos[count];
  }
 

}

function prev(){
    count--;
    if(count < 0){
        count=photos.length-1;
        imgTag.src=photos[count];
    }else{
      imgTag.src=photos[count];
    }
}