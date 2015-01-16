jQuery(document).ready(function ($){
  var axel = Math.random() + ""
    , a = axel * 10000000000000
    , attrs = { 
      "src": "http://3990485.fls.doubleclick.net/activityi;src=3990485;type=super0;cat=mbusa003;ord=" + a + "?",
      "width": "1",
      "height": "1",
      "frameborder": "0",
      "style": "display:none"
    }
    , $iframe = $('<iframe>', attrs);
    
  $('body').append($iframe);
});