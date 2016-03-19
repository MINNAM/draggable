var CanvasManager = function() {

	var CanvasList = new List();

	return CanvasList;

}

var Canvas = function( _id ) {

	var Canvas = {},
	_node,
	_ctx;

	Canvas.init = function() {

		_node = document.getElementById( _id );
		_ctx  = _node.getContext( '2d' );

		_node.width  = _node.clientWidth;
		_node.height = _node.clientHeight;

		return Canvas;

	}

	Canvas.node = function() {

		return _node;

	}

	Canvas.ctx = function(){

		return _ctx;

	}

	Canvas.clear = function() {

		_ctx.clearRect( 0, 0, _node.clientWidth, _node.clientHeight );

	}

	Canvas.width = function() {

		return _node.offsetWidth;
	}

	Canvas.height = function() {

		return _node.offsetHeight;
	}

	Canvas.path = function( callback ) {

		_ctx.beginPath();

			callback( _ctx );

		_ctx.closePath();

	}

	return Canvas.init();

}