/**
 * author: Min Nam
 * url: https://github.com/MINNAM/draggable
 * 
 * Draggable handles click and drag events.
 * 
 * @param {HTML DOM ELEMENT} param.el
 * @param {function} param.move Default event, triggered when mouse is moved.
 * @param {function} param.drag Drag event, triggered when drag flag is on. 
 * @param {function} param.up   Mouse up event, sets drag flag off
 * @param {function} param.down Mouse down event, sets drag flag on
 */
var Draggable = function( param ) {

	var Draggable = {},
	_el,
	_flag         = { drag : false, toggle : false },
	_callbacks    = { 

		move : function( a, b ){ console.log( 'x: ' + a + ' y: ' + b + ' mouse moving.' ); },
		double : function( a, b ){ console.log( 'x: ' + a + ' y: ' + b + ' mouse double clicked.' ); },
		drag : function( a, b ){ console.log( 'x: ' + a + ' y: ' + b + ' mouse dragging.' ); },
		up   : function( a, b ){ console.log( 'x: ' + a + ' y: ' + b + ' mouse up' ); },
		down : function( a, b ){ console.log( 'x: ' + a + ' y: ' + b + ' mouse down' ); }
		
	},
	_temp = { 

		move: function(){},
		double: function(){},
		drag: function(){},
		up  : function(){},
		down: function(){}

	},
	_global = { node: null };
	
	/**
	 * Add events done here.
	 * @return {Object} Draggable object
	 */
	var init = function() {

		try {

			if( param.el === undefined ) {

				throw "Draggable: HTML DOM Element must be supplied."; 

			}

			_el = param.el;

			for( var key in param ) {

				if( _callbacks[ key ] != undefined ) {

					this.set( key, param[ key ] ); 
				}
				
			}

			_el.addEventListener( 'mousemove', function( e ) {

				var x = e.clientX - this.offsetLeft, 
				y 	  = e.clientY - this.offsetTop;

				_callbacks[ 'move' ]( x, y, this, _global );

				if( _flag.drag ) {

					_callbacks[ 'drag' ]( x, y, this, _global  );

				}
				
			});

			_el.addEventListener( 'dblclick', function( e ) {

				var x = e.clientX - this.offsetLeft, 
				y 	  = e.clientY - this.offsetTop;

				_callbacks[ 'double' ]( x, y, this, _global );

			});

			_el.addEventListener( 'mouseup', function( e ) {

				var x = e.clientX - this.offsetLeft, 
				y 	  = e.clientY - this.offsetTop;

				_flag.drag = false;

				_callbacks[ 'up' ]( x, y, this, _global  );

			});

			_el.addEventListener( 'mousedown', function( e ) {

				var x = e.clientX - this.offsetLeft, 
				y 	  = e.clientY - this.offsetTop;

				_flag.drag = true;

				_callbacks[ 'down' ]( x, y, this, _global  );

			});

			

		} catch( err ) { 

			console.error( err );

		}

		return Draggable;

	}

	/**
	 * Calls callback function
	 * 
	 * @param  {string} a Key of a callback function to call.
	 */
	Draggable.call = function( a ) {

		if( _callbacks[ a ] !== undefined ) {

			_callbacks[ a ]();

		}
		
	}
	/**
	 * Sets callback function.
	 * 
	 * @param {string}   a Key of a callback function to replace.
	 * @param {Function} b Callback function.
	 */
	Draggable.set = function( a, b ) {

		if( typeof b === "function" ) {

				_callbacks[ a ] = b ;

		} else {

			throw "Draggable: ( " + a + " ) must be a type of Function.";

		}

	}

	Draggable.toggle = function( a ) {

		if( a === undefined ) {

			return 	_flag.toggle;

		}

		if( a ) {

			if( !_flag.toggle ) {

				var temp     = _callbacks;
				_callbacks   = _temp;
				_temp        = temp;
				_flag.toggle = true;

			}

		} else {
			
			if( _flag.toggle ) {

				var temp     = _callbacks;
				_callbacks   = _temp;
				_temp        = temp;
				_flag.toggle = false;

			}
		}

	}

	Draggable.move = function( a ) {

		_callbacks[ 'move' ] = a ;

		return this;

	}

	Draggable.double = function( a ) {

		_callbacks[ 'double' ] = a ;

		return this;
		
	}

	Draggable.drag = function( a ) {

		_callbacks[ 'drag' ] = a ;

		return this;
		
	}

	Draggable.down = function( a ) {

		_callbacks[ 'down' ] = a ;

		return this;
		
	}

	Draggable.up = function( a ) {

		_callbacks[ 'up' ] = a ;

		return this;
		
	}

	return init();

}

var List = function() {

	var List = {},
	nodes    = [];

	List.add = function( a, b ) {

		nodes[ a ] = b;

	}

	List.get = function( a ) {

		return nodes[ a ];

	}

	List.nodes = function() {

		return nodes;

	}

	List.size = function() {

		console.log( nodes.length );
		return nodes.length;

	}

	return List;

}

var DraggableManager = function() {

	var DraggableManager = new List();

	DraggableManager.toggle = function( a ) {

		var draggables = this.nodes();

		for( var key in draggables ) {

			if( key == a ) {

				draggables[ key ].toggle( false );
				continue;

			} 

			if( draggables[ key ] !== undefined ) {

				draggables[ key ].toggle( true );

			}

		}

	}

	return DraggableManager;

}();

var DraggableFactory = {

	new : function( param ) {

		var temp = new Draggable({ el: param.node });

		DraggableManager.add( param.name, temp );

		return temp;

	}

}