# Angular Parallax #

Esta librería sirve para añadir varias etiquetas para trabajar con los efectos Parallax y los efectos de animaciones según el scroll.

## Version inicial ##

### 1.0.0 ###

Añadido animacion rotate

###  0.7.2 ###

*Adaptado a bower

### 0.6.0 ###

* Version inicial
* Directiva sk-parallax, sk-parallax-anim y sk-parallax-element
* Añadido documentación.
* Efectos predeterminados nuevos: FadeIn, SideRight, SideLeft, SideBottom

### Como configurarlo ###

* Añadir el modulo a  angular


```
#!javascript

angular.module('yourApp',[
     'angularParallax'
]);
```

# Funcionalidades

## Añadir una imagen con efecto parallax ##


```
#!html

<sk-parallax image="image.jpg"></sk-parallax>
```

Atributos opcionales: 
* width: Permite añadir el width del div de la imagen.
* height: Permite añadir el height del div de la imagen.

## Añadir un efecto a un elemento dentro de un div padre en función del scroll ##

Se define un contenedor padre (sk-parallax-anim) que será el devuelva que porcentaje (de 0 a 100) se está viendo en la pagina, en funcion de estos valores actuara la animacion, para ello está un elemento sk-parallax-element en sus hijos.

Veamos un ejemplo:


```
#!html

<sk-parallax-anim id="fadeIn">
        
        <span class="center"><h1>Animacion FadeIn</h1></span>
        <div sk-parallax-element sk-animation="fadeIn">
            
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
                Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.
            </p>
            <p>
                Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst. Vivamus facilisis diam at odio. Mauris dictum, nisi eget consequat elementum, lacus ligula molestie metus, non feugiat orci magna ac sem. Donec turpis. Donec vitae metus. Morbi tristique neque eu mauris. Quisque gravida ipsum non sapien. Proin turpis lacus, scelerisque vitae, elementum at, lobortis ac, quam. Aliquam dictum eleifend risus. In hac habitasse platea dictumst. Etiam sit amet diam. Suspendisse odio. Suspendisse nunc. In semper bibendum libero.
            </p>
            <p>
                Proin nonummy, lacus eget pulvinar lacinia, pede felis dignissim leo, vitae tristique magna lacus sit amet eros. Nullam ornare. Praesent odio ligula, dapibus sed, tincidunt eget, dictum ac, nibh. Nam quis lacus. Nunc eleifend molestie velit. Morbi lobortis quam eu velit. Donec euismod vestibulum massa. Donec non lectus. Aliquam commodo lacus sit amet nulla. Cras dignissim elit et augue. Nullam non diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Aenean vestibulum. Sed lobortis elit quis lectus. Nunc sed lacus at augue bibendum dapibus.
            </p>
        
        </div>
    </sk-parallax-anim>
```
## sk-animation ##

Define la animacion que se va a realizar, hasta el momento existe:

* fadeIn: El elemento es transparente y aparece según el scroll baja.
* sideLeft-sideRight-sideBottom: El elemento aparece por uno de los lados.
* rotate: El elemento rota según aparece.

## sk-animation-start y sk-animation-end ##

Permite definir entre los porcentajes 0 y 100, cuando empezara y acabara la animacion.


```
#!html

 <sk-parallax-anim id="allEffectsFadeIn">
        
        <span class="center"><h1>Animacion transferencia con distinto tiempo</h1></span>
        <div class="textPequeño" sk-parallax-element sk-animation="fadeIn" sk-animation-start="0" sk-animation-end="33.3">
            
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
           
        
        </div>
        <div class="textPequeño" sk-parallax-element sk-animation="fadeIn" sk-animation-start="33.3" sk-animation-end="66.6">
            
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
           
        
        </div>
        <div class="textPequeño" sk-parallax-element sk-animation="fadeIn" sk-animation-start="66.6" sk-animation-end="100">
            
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
        
        </div>
        <div class="clear"></div>
    </sk-parallax-anim>
```

## sk-animation-complex ##

Se puede definir una función personalizada en el controlador y usarla en la directiva para tus propias animaciones.


```
#!javascript

app.controller('appController', function($scope){
    
    $scope.girar(function(element, position){
       //Aqui ira el codigo que hara el element, segun la posicion relativa(0-100) 
    });
   
});
```


```
#!html

 <sk-parallax-anim>
        
        <div sk-parallax-element sk-animation-complex="girar" sk-animation-start="80" sk-animation-end="95"></div>
        
    </sk-parallax-anim>
```



### Contribution guidelines ###

Estará disponible más adelante.

### Who do I talk to? ###

Estará disponible una forma de contactar conmigo más adelante.