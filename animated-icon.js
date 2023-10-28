let counter = 0; let frames = [
  // You may change these links to your own links
  // They will serve as frames for your animated icon
  // The first link in the JavaScript file should always be the link as the HTML5 icon link
  'https://cdn.discordapp.com/attachments/1085710779732467742/1085710815446978652/ramen_scene_1.png',
  'https://cdn.discordapp.com/attachments/1085710779732467742/1085710822778617926/ramen_scene_2.png',
  'https://cdn.discordapp.com/attachments/1085710779732467742/1085710844626747492/ramen_scene_3.png',
  'https://cdn.discordapp.com/attachments/1085710779732467742/1085710859432624168/ramen_scene_4.png',
  'https://cdn.discordapp.com/attachments/1085710779732467742/1085710879749840956/ramen_scene_5.png'
]
window.onload = function() {
  setInterval(function() {
    document.getElementById('icon').href = frames[counter];
    if (counter < frames.length - 1)
      counter++
    else
      counter = 1;
  }, 5);
};
