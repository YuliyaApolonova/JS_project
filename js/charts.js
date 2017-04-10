/**
 * Created by Yura on 09.04.2017.
 */
$(function() {
   $('.chart').easyPieChart({
      easing: 'easeOutBounce',
      delay: 6000,
      barColor: '#ffe600',
      trackColor: '#fff',
      scaleColor: false,
      lineWidth: 20,
      trackWidth: 16,
      lineCap: 'butt',
      onStep: function(from, to, percent) {
         $(this.el).find('.percent').text(Math.round(percent));
      }
   });
   // var chart = window.chart = $('.chart').data('easyPieChart');
   // $('.js_update').on('click', function() {
   //    chart.update(Math.random()*200-100);
   // });
});