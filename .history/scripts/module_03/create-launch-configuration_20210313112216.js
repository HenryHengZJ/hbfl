const AWS = require('aws-sdk')
const helpers = require('./helpers')

AWS.config.update({ region: 'us-west-2' })

// Declare local variables
const autoScaling = new AWS.AutoScaling()

const lcName = 'hamsterLC'
const roleName = 'hamsterLCRole'
const sgName = 'hamster_sg'
const keyName = 'hamster_key'

helpers.createIamRole(roleName)
.then(profileArn => createLaunchConfiguration(lcName, profileArn))
.then(data => console.log(data))

function createLaunchConfiguration (lcName, profileArn) {
  const params = {
    IamInstanceProfile: profileArn,
    ImageId: 'ami-0409ded06a872a332',
    InstanceType: 't2.micro',
    LaunchConfigurationName: lcName,
    KeyName: keyName,
    SecurityGroups: [
      sgName
    ],
    UserData: 'IyEvYmluL2Jhc2gNCnN1ZG8gYXB0LWdldCB1cGRhdGUNCnN1ZG8gYXB0LWdldCAteSBpbnN0YWxsIGdpdA0Kc3VkbyBybSAtcmYgL2hvbWUvYml0bmFtaS9oYmZsDQpnaXQgY2xvbmUgaHR0cHM6Ly9naXRodWIuY29tL3J5YW5tdXJha2FtaS9oYmZsLmdpdCAvaG9tZS9iaXRuYW1pL2hiZmwNCmNob3duIC1SIGJpdG5hbWk6IC9ob21lL2JpdG5hbWkvaGJmbA0KY2QgL2hvbWUvYml0bmFtaS9oYmZsDQpzdWRvIG5wbSBpDQpzdWRvIG5wbSBydW4gc3RhcnQ='
  }

  return new Promise((resolve, reject) => {
    autoScaling.createLaunchConfiguration(params, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}
