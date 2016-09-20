/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {

    'use strict';


    var templateSkParallax = '<div><ng-transclude></ng-transclude></div>';
    var templateParallaxAnim = '<div class=\'skParallaxAnim\'><ng-transclude></ng-transclude></div>';
    
    var precalcular_position_real=function(position, animationStart, animationEnd){
        if(!animationStart || !animationEnd){
            return position;
        }
        
        if(position===null){
            return null;
        }
        if(position>animationEnd){
            return 100;
        }
        if(position<animationStart){
            return 0.0;
        }
        
        return (position-animationStart)*100/(animationEnd-animationStart);
        
        
    };

    var getRelativePosition = function (elemento) {
        var window_height = $(window).height();
        var window_top_position = $(window).scrollTop();
        var window_bottom_position = (window_top_position + window_height);



        var $element = $(elemento);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        var position_final = element_bottom_position - element_top_position;
        var position_actual = window_bottom_position - element_top_position;


        var position_relative = position_actual * 100 / position_final;
        if(position_relative<0||position_relative>100){
            position_relative=null;
        }
        return position_relative;

    };
    
    var animaciones_predefinidas={
        fadeIn: function (elemento, position) {
            
            if (position!==null) {
                position = position / 100;
                elemento.css("opacity", position);
            } else {
                elemento.css("opacity", 1);
            }
        },
        sideLeft: function(elemento, position){
            var width=elemento.width();
            if (position!==null) {
                position = -width+(width*position/100) ;
                elemento.css("position","relative");
                
                elemento.css("left", position);
            } else {
                elemento.css("left", 0);
            }
        },
        sideRight: function(elemento, position){
            var width=elemento.width();
            if (position!==null) {
                position = -width+(width*position/100) ;
                elemento.css("position","relative");
                
                elemento.css("right", position);
            } else {
                elemento.css("right", 0);
            }
        },
        sideBottom: function(elemento, position){
            
            var height=elemento.height();
            if (position!==null) {
                position = -height+(height*position/100) ;
                elemento.css("position","relative");
                
                elemento.css("bottom", position);
            } else {
                elemento.css("bottom", 0);
            }
        }
    };


    var isInsideView = function (elemento) {
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
            return true;
        } else {
            $element.removeClass('in-view');
            return false;
        }

    };

    var skParallaxElement = function ($window, $parse) {
        return{
            restrict: 'A',
            require: '^^skParallaxAnim',
            scope: {
                animation: '@skAnimation',
                animationComplex: '&skAnimationComplex',
                animationStart: '@skAnimationStart',
                animationEnd: '@skAnimationEnd'
            },
            link: function (scope, elemento, attrs, controller) {
                var element = $(elemento);
                element.addClass('parallax-element');
                
                angular.element($window).bind('scroll', function () {
                    scope.$apply(function () {
                        
                        var position=controller.position();
                        
                        position=precalcular_position_real(position, scope.animationStart, scope.animationEnd);
                        if(!scope.animation){
                     
                       scope.animationComplex()(elemento,position);
                     
                            
                        }else{
                            animaciones_predefinidas[scope.animation](element,position);
                        }
                        
                       
                        
                        
                    });

                });
            }
        };
    };


    var skParallaxAnim = function ($window) {
        return{
            restrict: 'E',
            template: templateParallaxAnim,
            replace: true,
            transclude: true,
            link: function (scope, element, attrs) {
            },
            controller: function ($scope, $element) {
                $scope.isInsideView = isInsideView;
                this.position=function(){return getRelativePosition($element);};
               
                this.height=angular.element($element).height();
                


            }
        };
    };

    var skParallax = function () {
        return {
            restrict: 'E',
            template: templateSkParallax,
            transclude: true,
            replace: true,
            link: function (scope, element, attrs) {
                var element = $(element);
                var width = attrs.width || '100%';
                var height = attrs.height || '500px';
                if (!attrs.image) {
                    throw 'Se debe definir la imagen';
                }
                element.css({
                    backgroundImage: 'url(' + attrs.image + ')',
                    backgroundRepeat: 'no-repeat',
                    width: width,
                    height: height,
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed'

                });
            }
        };
    };


    var angularParallax = angular.module('angularParallax', []);

    angularParallax.directive('skParallax', skParallax);

    angularParallax.directive('skParallaxAnim', skParallaxAnim);
    
    angularParallax.directive('skParallaxElement',skParallaxElement);
})();
