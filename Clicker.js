var nextThingtoclick = document.querySelector('.right');
var likeCount = 0;
 
function doStart() {
    likeCount++;
    console.log('Liked ' + likeCount);
    var nextTime = Math.random() * (14000 - 4000) + 4000;
    if ($(".hearted")[0]){
        console.log('it liked before');
    } else {
        $('.new_fav').click();
    }
    setTimeout(function() {nextThingtoclick.click();}, 1000);
    if (likeCount < 50) {
        setTimeout(doStart, nextTime);
    } else {
        console.log('Nice! Time for a break.');
    }
}
 
doStart();
