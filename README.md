# draggable
A minimal javascript library for handling click and drag.

##### Basic Example

Try this on an empty HTML and see what's being written in a console.

```javscript
  var foo = new Draggable({ el: document.body });
```

###### Callback Function Signature

```javscript
  function( x, y, el ){
  
    console.log( 
      'x: ' + x + ' y: ' + y + 
      ' class: ' + el.getAttribute( 'class' ) + 
      ' id: ' + el.getAttribute( 'id' ) 
    );
    
  }
```

###### Implementing Individual Callback Functions
```javscript

  var foo = new Draggable({
    
    el:   document.body,
    move: function( x, y, el ){
      ...
    },
    drag: function( x, y, el ){
      ...
    },
    down: function( x, y, el ){
      ...
    },
    up  : function( x, y, el ){
      ...
    },
  
  });

```

or

```javscript
  var foo = new Draggable({ el: document.body });
  
  foo.set( 'up', function( x, y, el ){
  
    ...
    
  });
  
```

