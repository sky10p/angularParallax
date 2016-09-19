/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var templateSkParallax='<div><ng-transclude></ng-transclude></div>';
var templateParallaxAnim='<div class=\'skParallaxAnim\'><ng-transclude></ng-transclude></div>';

var isInsideView=function(elemento){
    var window_height = $(window).height();
  var window_top_position = $(window).scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  
  
    var $element = $(elemento);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  
};



var skParallaxAnim=function(){
    return{
        restrict:'E',
        template: templateParallaxAnim,
        replace:true,
        transclude:true,
        link:function(scope, element, attrs){
            
        },
        controller: function($scope){
            $scope.isInsideView=isInsideView;
        }
    };
}

var skParallax=function(){
    return {
        restrict: 'E',
        template: templateSkParallax,
        transclude:true,
        replace:true,
        link:function(scope, element, attrs){
            var element=$(element);
            var width=attrs.width||'100%';
            var height=attrs.height||'500px';
            if(!attrs.image){
                throw 'Se debe definir la imagen';
            }
            element.css({
                backgroundImage: 'url('+attrs.image+')',
                backgroundRepeat: 'no-repeat',
                width: width,
                height: height,
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed'
                
            });
        }
    };
};


var angularParallax=angular.module('angularParallax',[]);

angularParallax.directive('skParallax',skParallax);

angularParallax.directive('skParallaxAnim',skParallaxAnim);