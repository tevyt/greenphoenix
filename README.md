# Portolio
My portfolio, available [here](http://travisalexandersmith.me).


## Running the project.

This project was built using [GatsbyJS](https://www.gatsbyjs.org/). In order to run the application you will need [NodeJS](https://nodejs.org/en/) installed.

You will need to configure the following to run this application:

### Contentful
#### Variables
* `GATSBY_PORTFOLIO_CONTENTFUL_SPACE_ID` - The id for a contentful space to load data from
* `GATSBY_PORTFOLIO_CONTENTFUL_ACCESS_TOKEN` - Access token for the contentful space mentioned above
* `GATSBY_PORTFOLIO_CONTENTFUL_HOST` - Host serving content. `preview.contentful.com` for draft content. `cdn.contentful.com` for published content.

The application assumes the following content models within contentful: 

#### Data models.
* Project

| FieldName  | Datatype | Description          |
|----------- |----------|----------------------|
| name|Short text|The name of a project.|
| thumbnail| Media|Image representing the project|
| description|Short text|A brief description|
| sourceCodeUrl(optional)| Short text | URL of project source code.|
| liveDemoUrl(optional)| Short text | URL of project live demo|

* Certification

| FieldName  | Datatype | Description          |
|----------- |----------|----------------------|
| name|Short text| Name of the certification|
| link| Short text|Link to certificate document|
| icon | Media | Certification badge |


### AWS 

This project makes use of [Amazon SES](https://aws.amazon.com/ses/) and [Amazon Cognito](https://aws.amazon.com/cognito/) to send email messages.

#### Variables

* `GATSBY_PORTFOLIO_AWS_REGION`: AWS region where SES and Cognito are configured.
* `GATSBY_PORTFOLIO_COGNITO_IDENTITY_POOL_ID`: Id for anonymous cognito identity used to send emails.
* `GATSBY_PORTFOLIO_SES_MESSAGE_DESTINATION`: Target of messages to be sent.
* `GATSBY_PORTFOLIO_SES_MESSAGE_SOURCE`: Sender of messages.

#### SES

An email template named `PortfolioMessage` must be added to SES. The file `message.json` contains the template it can be added to SES using the aws cli:
`aws ses create-template --cli-input-json file://message.json`.

#### Cognito

The configured cognito identity must have permission to send Templated messages via SES.


### Running the application

Run `npm install` followed by `npm start`.

### Automatic Deployment
This application is automatically distributed to CloudFront upon release creation using github actions. The following secrets are used by the deployment workflow.

- `AWS_ACCESS_KEY_ID`: Access key for IAM user. Must have permission to write to the S3 bucket hosting the application as well permissions sufficient to invalidate CloudFront caches.
- `AWS_SECRET_ACCESS_KEY`: Secret access key for the above IAM user.
- `COGNITO_IDENTITY_POOL`: Anonymous cognito identity used to send emails.
- `CONTENTFUL_SPACE_ID`: Space ID for Contentful space.
- `CONTENTFUL_ACCESS_TOKEN`: Access token for the above contentful space.
- `CLOUDFRONT_DISTRIBUTION_ID`: ID for CloudFront distribution hosting the website.