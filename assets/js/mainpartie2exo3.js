function grow (zoomType) {
    var imageWidth = document.getElementById('monImage').clientWidth ;
    if (zoomType == 'plus') {
         document.getElementById('monImage').style.width=(imageWidth + 20) +"px" ;
    }
   if (zoomType == 'moins')
   document.getElementById('monImage').style.width=(imageWidth - 20) +"px" ;
}

