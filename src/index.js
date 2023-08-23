const app = require('./servidor');
const PORTA = 3000

app.listen(PORTA, () => console.log(`Servidor rodando na porta, ${PORTA}`));