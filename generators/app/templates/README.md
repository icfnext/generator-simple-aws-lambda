# <%= name %>

<%= description %>

## Deployment

The [AWS Lambda Toolkit](https://github.com/OlsonDigital/aws-lambda-toolkit)
is used to deploy <%= name %>.

Prior to deploying or publishing <%= name %>, you must setup 
your AWS credentials.  If you use the AWS CLI you likely have 
these configured in your user home directory. 

AWS credentials can also be provided in a `.awscredentials.json` 
file located in the project root as documented in the 
[AWS Lambda Toolkit README](https://github.com/OlsonDigital/aws-lambda-toolkit#configuration).
This file should NEVER be committed to source control.
  
### Deploy

`npm run deploy`

Replaces the current version of the Lambda with the new 
packaged code.

### Publish

`npm run publish`

Creates a new version of the Lambda using the new packaged code.