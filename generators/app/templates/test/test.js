const should = require( 'should' ),
    promisedContextFactory = require( 'promised-lambda-context' ),
    handler = require( '../<%= name %>' ).handler;

describe( 'Event Handler', function() {
    it( 'should resolve', function() {
        let context = promisedContextFactory();

        handler( { "fake": "event" }, context );

        return context.should.be.fulfilled();
    } );
} );