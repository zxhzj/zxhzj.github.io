/* 
 * BackgroundService
 * Creates a web worker for generating puzzles in the background.
 * (c) 2015 Q42
 * http://q42.com | @q42
 * Written by Martin Kool
 * martin@q42.nl | @mrtnkl
 */
var BackgroundService = new (function() {
	var self = this,
			enabled = (window.Worker && (window.Blob || window.MSApp))? true : false,
			worker = null;

	if (Game.debug)
		console.log('BackgroundService:', enabled);
	
	function generateGridAndSolution(size) {
	  var d = new Date();
	  var grid = new Grid(size);
	  grid.generate(size);
	  grid.maxify(size);
	  var result = {};
	  result.size = size;
	  result.full = grid.getValues();
	  grid.breakDown();
	  result.empty = grid.getValues();
	  result.quality = grid.quality;
	  result.ms = new Date() - d;
	  self.postMessage(JSON.stringify(result));
	}

	function createWorker() {
		if (window.MSApp) {
			worker = new Worker('js/win-webworker.js');
			if (Game.debug)
				console.log('Web worker created statically')
		}
		// otherwise generate worker on the fly based on existing code
		else {
			if (Game.debug)
				console.log('Web worker created on the fly')
			
			var js1 = "var HintType = " + JSON.stringify(HintType) + ";" +
								"Tile.Type = {Unknown: 'Unknown',Dot: 'Dot',Wall: 'Wall',Value: 'Value'};" +
								"var Directions = {Left: 'Left',Right: 'Right',Up: 'Up',Down: 'Down'};";

			var js = [
				Utility,Grid,Tile,generateGridAndSolution,
				js1,
				'\nvar Utils = new Utility();',
				'\nfunction Hint() { this.active = false; }',
				'self.onmessage = function(e) {generateGridAndSolution(e.data.size)};'
			].join('');

			var blob = new Blob([js], { type: "text/javascript" });
			worker = new Worker(window.URL.createObjectURL(blob));
		}
		worker.onmessage = function(e) {
			var puzzle = JSON.parse(e.data);			
			onPuzzleGenerated(puzzle);
		}
	}

	function onPuzzleGenerated(puzzle) {
		if (Game.debug)
			console.log('generated puzzle', puzzle);
		Levels.addSize(puzzle.size, puzzle);
	}

	function generatePuzzle(size) {
		if (!enabled) return;
		if (!worker) {
			createWorker();
		}
		worker.postMessage({'size':size});
	}

	function kick() {
		// todo: check levels for which to create...
		if (Levels.needs()) {
			generatePuzzle(Levels.needs());
		}
	}

	this.generatePuzzle = generatePuzzle;
	this.kick = kick;
	this.__defineGetter__('enabled', function() { return enabled; });
})();