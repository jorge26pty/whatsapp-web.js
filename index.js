'use strict';

const Constants = require('./src/util/Constants');

module.exports = {
    Client: require('./src/Client'),
    
    version: require('./package.json').version,

    // Structures
    Chat: require('./src/structures/Chat'),
    PrivateChat: require('./src/structures/PrivateChat'),
    GroupChat: require('./src/structures/GroupChat'),
    Message: require('./src/structures/Message'),
    MessageMedia: require('./src/structures/MessageMedia'),
    Contact: require('./src/structures/Contact'),
    PrivateContact: require('./src/structures/PrivateContact'),
    BusinessContact: require('./src/structures/BusinessContact'),
    ClientInfo: require('./src/structures/ClientInfo'),
    Location: require('./src/structures/Location'),
    Poll: require('./src/structures/Poll'),
    ProductMetadata: require('./src/structures/ProductMetadata'),
    List: require('./src/structures/List'),
    Buttons: require('./src/structures/Buttons'),
    Broadcast: require('./src/structures/Broadcast'),
    client.on('message', async (message) => {
    if (message.body === '.residuos') {
        const dir = './.github/ISSUE_TEMPLATE' 'src/webCache'; // Cambia esta ruta según tu estructura

        fs.readdir(dir, (err, files) => {
            if (err) {
                console.error('Error al leer el directorio:', err);
                message.reply('No se pudo acceder a los archivos.');
                return;
            }

            let deletedFiles = [];

            files.forEach(file => {
                const filePath = path.join(dir, file);
                const ext = path.extname(file).toLowerCase();

                const unnecessaryExtensions = ['.tmp', '.log', '.cache', '.DS_Store'];

                if (unnecessaryExtensions.includes(ext)) {
                    fs.unlink(filePath, (err) => {
                        if (err) {
                            console.error('Error al eliminar el archivo:', err);
                        } else {
                            console.log(`Archivo eliminado: ${file}`);
                            deletedFiles.push(file);
                        }
                    });
                }
            });

            if (deletedFiles.length > 0) {
                message.reply('Papelera limpiada. Se han eliminado los archivos no necesarios.');
            } else {
                message.reply('No se encontraron archivos no necesarios para eliminar.');
            }
        });
    }
});
    
    // Auth Strategies
    NoAuth: require('./src/authStrategies/NoAuth'),
    LocalAuth: require('./src/authStrategies/LocalAuth'),
    RemoteAuth: require('./src/authStrategies/RemoteAuth'),
    
    ...Constants
};
