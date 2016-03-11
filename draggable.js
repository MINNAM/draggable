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
	_flag         = false,
	_callbacks    = { 

		move : function( a, b ){ console.log( 'x: ' + a + ' y: ' + b + ' mouse moving.' ); },
		drag : function( a, b ){ console.log( 'x: ' + a + ' y: ' + b + ' mouse dragging.' ); },
		up   : function( a, b ){ console.log( 'x: ' + a + ' y: ' + b + ' mouse up' ); },
		down : function( a, b ){ console.log( 'x: ' + a + ' y: ' + b + ' mouse down' ); }
		
	}
	
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

				_callbacks[ 'move' ]( x, y, this );

				if( _flag ) {

					_callbacks[ 'drag' ]( x, y, this );

				}
				
			});

			_el.addEventListener( 'mouseup', function( e ) {

				var x = e.clientX - this.offsetLeft, 
				y 	  = e.clientY - this.offsetTop;

				_flag = false;

				_callbacks[ 'up' ]( x, y, this );

			});

			_el.addEventListener( 'mousedown', function( e ) {

				var x = e.clientX - this.offsetLeft, 
				y 	  = e.clientY - this.offsetTop;

				_flag = true;

				_callbacks[ 'down' ]( x, y, this );

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

	return init();

}