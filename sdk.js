require('dotenv').config()
const { THXAPIClient } = require('@thxnetwork/sdk');

async function main() {
    const thx = new THXAPIClient({
        clientId: process.env.clientId,
        clientSecret: process.env.clientSecret,
    })
    
    // Get a new Identity
    // const identity = await thx.identity.create();

    // Get an Identity for a salt
    const identity = await thx.identity.get("0x000...");    
        
    // Register Event for Identity
    await thx.events.create({
        event: 'event_name',
        identity,
    });
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
