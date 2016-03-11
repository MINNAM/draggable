# draggable
A minimal javascript library for handling click and drag.

##### Basic Example

```HTML

<script src='./draggable.js'></script>

```



```HTML

<script>
  
    var foo = new Draggable({ el: document.body });
    
</script>

```
Try this on an empty HTML and see what's being written in a console.
**el** must be a HTML DOM element and must be supplied.

##### Callback Function Signature

```javascript

function( x, y, el ){
      
    console.log( 
        
        ' x:     ' + x + 
        ' y:     ' + y + 
        ' class: ' + el.getAttribute( 'class' ) + 
        ' id:    ' + el.getAttribute( 'id' ) 
          
    );
        
}
  
```

##### Implementing Individual Callback Functions
```HTML
<script>

    var foo = new Draggable({
        
        el:   document.body,
        move: function( x, y, el ){
            //...
        },
        drag: function( x, y, el ){
            //...
        },
        down: function( x, y, el ){
            //...
        },
        up  : function( x, y, el ){
            //...
        },
      
    });

</script>
```

or

```HTML

<script>
  
    var foo = new Draggable({ el: document.body });
      
    foo.set( 'up', function( x, y, el ){
      
        //...
        
    });
</script>

```

##### Canvas Example

```HTML
<canvas id = 'myCanvas' width = '500' height = '500'></canvas>
<script src='./draggable.js'></script>
<script>

    var myCanvas = document.getElementById( 'myCanvas' ),
    ctx     	 = mainView.getContext( '2d'  ),
    rectangle    = { x: 0, y: 0, width: 0, height: 0 },
    draggable    = new Draggable({ el: myCanvas });
    
    drag.set( 'move', function( x, y, el ) {
        
        /* Clear the whole canvas */
        ctx.clearRect( 0, 0, el.clientWidth, el.clientHeight );
    
    });
    
    drag.set( 'drag', function( x, y, el ) {
    
    	ctx.beginPath();
    
    		rectangle.width  = x - rectangle.x;
    		rectangle.height = y - rectangle.y;
    
    		ctx.rect( rectangle.x, rectangle.y, rectangle.width, rectangle.height );
    		ctx.stroke();
    
    	ctx.closePath();
    
    });
    
    drag.set( 'down', function( x, y, el ) {
    
    	rectangle.x = x;
    	rectangle.y = y;
    
    });
    
    drag.set( 'up', function(){} );

</script>

```
