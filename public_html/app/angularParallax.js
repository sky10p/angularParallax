/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var templateSkParallax='<div><ng-transclude></ng-transclude></div>';

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