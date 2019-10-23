import AWS from "aws-sdk"

AWS.config.update({ region: process.env.GATSBY_PORTFOLIO_AWS_REGION })
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: process.env.GATSBY_PORTFOLIO_COGNITO_IDENTITY_POOL_ID,
})

function sendEmail(name, emailAddress, message) {
  const ses = new AWS.SES({ apiVersion: "2010-12-01" })
  const params = {
    Destination: {
      ToAddresses: [process.env.GATSBY_PORTFOLIO_SES_MESSAGE_DESTINATION],
    },
    Source: process.env.GATSBY_PORTFOLIO_SES_MESSAGE_SOURCE,
    Template: "PortfolioMessage",
    TemplateData: JSON.stringify({
      name,
      email: emailAddress,
      message,
    }),
  }

  const emailSendPromise = new Promise((resolve, reject) => {
    ses.sendTemplatedEmail(params, err => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })

  return emailSendPromise
}

export default sendEmail
