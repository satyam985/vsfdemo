export default async function (ctx) {
    const contentful = require('contentful')
    const config = {
      space: '72782df9afoq',
      accessToken: 'lqdJV-3zY107xPfTpo9VbBTac7-RlHIPNww4BWzT5ag',
      environment: 'test',
    }
    ctx.$CfClient = contentful.createClient(config);
  }
  