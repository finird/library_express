const app = require('./app');
const dbAdapter = require('./db.connector');

const [port, host] = [3000, 'localhost'];
dbAdapter.connect((error) => {
  if (error) {
    console.error('[Mysql Adapter]:', error.message);
  } else {
    app.listen(port, host, () => console.log(`👉: http://${host}:${port}`));
  }
});
