describe( '`ArrayUtils` Tests:', function() {
	it( 'Should be importable', function() {
		const ArrayUtils = require( '../lib/array-utils' );

		// Sanity check. If test does not throw error, then module is 'importable'.
		expect( true ).toBe( true );
	} );
} );

describe( '`ArrayUtils#sample` Tests:', function() {
	it( 'Should be a function', function() {
		const ArrayUtils = require( '../lib/array-utils' );
		const { sample } = ArrayUtils;

		expect( typeof sample ).toBe( 'function' );
	} );

	it( 'Should return `null` if invoked with a non-array value', function() {
		const ArrayUtils = require( '../lib/array-utils' );
		const { sample } = ArrayUtils;

		var input = 'Test Value';
		var result = sample( input );

		expect( result ).toBe( null );
	} );

	it( 'Should return `null` if invoked with am empty array', function() {
		const ArrayUtils = require( '../lib/array-utils' );
		const { sample } = ArrayUtils;

		var input = [];
		var result = sample(  );

		expect( result ).toBe( null );
	} );

	it( 'Should return a random item of a given array.', function() {
		const ArrayUtils = require( '../lib/array-utils' );
		const { sample } = ArrayUtils;

		var input = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ];
		var result = sample( input );

		expect( input.indexOf( result ) !== -1 ).toBe( true );
	} );
} );

describe( '`ArrayUtils#sampleIndex` Tests:', function() {
	it( 'Should be a function', function() {
		const ArrayUtils = require( '../lib/array-utils' );
		const { sampleIndex } = ArrayUtils;

		expect( typeof sampleIndex ).toBe( 'function' );
	} );

	it( 'Should return `null` if invoked with a non-array value', function() {
		const ArrayUtils = require( '../lib/array-utils' );
		const { sampleIndex } = ArrayUtils;

		var input = 'Test Value';
		var result = sampleIndex( input );

		expect( result ).toBe( null );
	} );

	it( 'Should return `null` if invoked with am empty array', function() {
		const ArrayUtils = require( '../lib/array-utils' );
		const { sampleIndex } = ArrayUtils;

		var input = [];
		var result = sampleIndex( input );

		expect( result ).toBe( null );
	} );

	it( 'Should return an integer when invoked with a valid array.', function() {
		const ArrayUtils = require( '../lib/array-utils' );
		const { sampleIndex } = ArrayUtils;

		var input = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ];
		var result = sampleIndex( input );

		expect( parseInt( result, 10 ) === parseInt( result, 10 ) ).toBe( true );
	} );

	it( 'Should return an integer between -1 and the length of the input array.', function() {
		const ArrayUtils = require( '../lib/array-utils' );
		const { sampleIndex } = ArrayUtils;

		var input = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ];
		var result = sampleIndex( input );

		expect( result > -1 && result < input.length ).toBe( true );
	} );
} );
