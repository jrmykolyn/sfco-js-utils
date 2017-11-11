// --------------------------------------------------
// DECLARE FUNCTIONS
// --------------------------------------------------
/**
 * Given an array, function returns a random item.
 *
 * Function returns `null` if invoked with empty array/non-array values.
 *
 * @param {Array} `arr`
 * @return {any|null}
 */
function sample( arr ) {
	if ( !arr || !Array.isArray( arr ) || !arr.length ) {
		return null;
	}

	return arr[ Math.floor( Math.random() * arr.length ) ];
}

/**
 * ...
 */
function sampleIndex( arr ) {
	if ( !arr || !Array.isArray( arr ) || !arr.length ) {
		return null;
	}

	return arr[ Math.floor( Math.random() * arr.length ) ];
}

// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
module.exports = {
	sample,
	sampleIndex,
}
