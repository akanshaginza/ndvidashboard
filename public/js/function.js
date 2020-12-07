$(function(){
  $( "#slider" ).slider({
    min: 1930, max: 2016,
    slide: updateSliderValue,
    create: updateSliderValue,
    value: initialValue,
  });
});