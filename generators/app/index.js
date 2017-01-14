const Generator = require( 'yeoman-generator' );

module.exports = class extends Generator {

    prompting() {
        return this.prompt( [
            {
                type: "input",
                name: "name",
                message: "Lambda name",
                default: this.appname
            },
            {
                type: "input",
                name: "author",
                message: "Author",
                default: ""
            },
            {
                type: "input",
                name: "description",
                message: "Lambda description",
                default: "My Hot Lambda"
            },
            {
                type: "input",
                name: "initialVersion",
                message: "Initial version",
                default: "0.1.0"
            },
            {
                type: "input",
                name: "region",
                message: "AWS region",
                default: "us-east-1"
            },
            {
                type: "input",
                name: "roleArn",
                message: "Executing role ARN",
                default: ""
            },
            {
                type: "confirm",
                name: "batchEvent",
                message: "Will this Lambda process batch events?",
                default: false

            }
        ] )
            .then( function( answers ) {
                this.answers = answers;
            }.bind( this ) );
    }

    writing() {
        this.log( this );
        this.fs.copyTpl(
            this.templatePath('_package.json'),
            this.destinationPath('package.json'),
            this.answers
        );
        this.fs.copyTpl(
            this.templatePath('main.ejs'),
            this.destinationPath(this.answers.name + '.js'),
            this.answers
        );
        this.fs.copyTpl(
            this.templatePath('_awstoolkitconfig.json'),
            this.destinationPath('.awstoolkitconfig.json'),
            this.answers
        );
        this.fs.copyTpl(
            this.templatePath('tasks.js'),
            this.destinationPath('tasks.js'),
            this.answers
        );
        this.fs.copyTpl(
            this.templatePath('test/test.js'),
            this.destinationPath('test/test.js'),
            this.answers
        );
        this.fs.copyTpl(
            this.templatePath('_gitignore'),
            this.destinationPath('.gitignore'),
            this.answers
        );
        this.fs.copyTpl(
            this.templatePath('README.md'),
            this.destinationPath('README.md'),
            this.answers
        );
    }

    installing() {
        this.npmInstall( [ 'aws-lambda-toolkit', 'mocha', 'promised-lambda-context', 'should' ], { "save-dev": true } );
        this.npmInstall( [ 'aws-sdk' ], { "save": true } );
    }

    amessage() {
        this.log( 'Hello' );
    }

};