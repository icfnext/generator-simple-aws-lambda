# Simple AWS Lambda Generator

A Yeoman generator providing scaffolding for an AWS Lambda. 

## Installation 

`npm install -g generator-simple-aws-lambda`

If you've not done so previously you'll also need to [install Yeoman](http://yeoman.io/learning/index.html).

## Usage

`yo simple-aws-lambda`

### Inputs

| Name | Description |
| ---- | ----------- |
| Lambda name | The name of the Lambda.  This will be used both as the name of the deployed Lambda and the name of the handler's Javascript |
| Author | Author of the Lambda |
| Lambda description | A description of the Lambda |
| Initial version | What version should be attributed to the package.json upon generation |
| AWS region | The region the Lambda will be deployed to |
| Executing role ARN | The AWS IAM role which will be used to execute the Lambda once deployed |
| Will this Lambda process batch events? | Some event sources, such as DynamoDB Streams, send numerous records per event while other sources, such as the API Gateway, send a single event.  The generated handler will differ based on this option. |

## What's Generated

* `[name].js` - The main handler Javascript named based on the `name` input
* `package.json` 
* `.gitignore`
* `tasks.js` - Task definitions for the [AWS Lambda Toolkit](https://github.com/OlsonDigital/aws-lambda-toolkit) used to facilitate Lambda deployment
* `.awstoolkitconfig.json` - Initial configuration for the [AWS Lambda Toolkit](https://github.com/OlsonDigital/aws-lambda-toolkit)
* `README.md` - Provides instructions for testing and deploying the generated Lambda
* `test/test.js` - Unit test scaffolding using [Mocha](https://mochajs.org/), [Should](https://github.com/shouldjs/should.js), and [Promised Lambda Context](https://github.com/OlsonDigital/promised-lambda-context)

