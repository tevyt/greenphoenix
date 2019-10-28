# Portolio

A portfolio to display projects I have worked on.

## Running the project.

This project was built using [GatsbyJS](https://www.gatsbyjs.org/). In order to run the application you will need [NodeJS](https://nodejs.org/en/) installed.

You will need to configure the following to run this application:

### Contentful
#### Variables
* `PORTFOLIO_CONTENTFUL_SPACE_ID` - The id for a contentful space to load data from
* `PORTFOLIO_CONTENTFUL_ACCESS_TOKEN` - Access token for the contentful space mentioned above

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
