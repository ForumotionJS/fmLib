/* 
* fmLib 
* Copyright to ForumotionJS at GitHub 
*/

/* Wrapped in JOL (JavaScript Object Literal) because I'm too lazy to build a prototype and things */
var fmLib = {
   localData: {
    "user_level" = _userdata.user_level,
    "user_id" = _userdata.user_id,
    "user_lang" = _userdata.user_lang,
    "user_privmgs" = _userdata.user_nb_privmsg,
    "user_posts" = _userdata.user_posts,
    "user_avatar" = _userdata.avatar,
    "user_constructor" = _userdata.constructor,
    "user_reps" = _userdata.point_reputation,
    "user_toolbar" = _userdata.active_toolbar
  },
  add: function(klass, str) {
   var enc = encodeURIComponent(klass);
   if(klass.includes(.)) {
    klass = document.getElementsByTagName;
   }else if(klass.includes(#)){
    klass = document.getElementById;
   }else{
    alert('Not valid!');
   } 
};
