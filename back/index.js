require("dotenv").config();
const app = require("./src/server");
const conDB = require("./src/config/conDB");

conDB()
  .then((res) => {
    app.listen(process.env.PORT, () => {
      console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error al conectar la BDD");
  });
