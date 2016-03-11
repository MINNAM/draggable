# draggable
A minimal javascript library for handling click and drag.

##### Basic Example

```HTML

<script src='draggable.js'></script>

```



```HTML

<script>
  
    var foo = new Draggable({ el: document.body });
    
</script>

```
Try this on an empty HTML and see what's being written in a console.
el, must be a HTML DOM element and must be supplied.

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

