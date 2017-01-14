const lambdaToolkit = require( 'aws-lambda-toolkit' );

if ( process.argv[ process.argv.length - 1 ] === 'deploy' ) {
    lambdaToolkit.deploy();
}

if ( process.argv[ process.argv.length - 1 ] === 'publish' ) {
    lambdaToolkit.deploy( {
        publish: true
    } );
}

if ( process.argv[ process.argv.length - 1 ] === 'test' ) {
    lambdaToolkit.test();
}