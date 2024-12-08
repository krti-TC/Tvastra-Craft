const { readdirSync } = require('fs');
const mine = require('../../commands/tools/mine');

module.exports = (client) => {
    client.handleComponents = async () => {
        const componentFolder = readdirSync('./src/components');
        for (const folder of componentFolder) {
            const componentFiles = readdirSync(`./src/components/${folder}`).filter(file => file.endsWith('.js'));

        }

        const { buttons } = client
        function handleComponents(folder) {
        switch (folder) {
            case "buttons":
                for (const file of componentFiles) {
                    const button = require(`../../components/${folder}/${file}`);
                    buttons.set(button.data.name, button);
                }


                break;

            default:
                break;
        }

    }
    };
};