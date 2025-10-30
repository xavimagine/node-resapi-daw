//importamos express y lo metemos en el json  como type module
import express from "express";
import indexRoutes from "./routes/index.routes.js";
import microsoftRoutes from "./routes/microsoft.routes.js";

// creamos con express un servidor
const app = express();
// aqui le decimos que estara escuchando en el puerto 3000
app.use(express.json());
// le importo todas las rutas mediante el servidor

app.use(indexRoutes);
// le aplicamos que todas tenga la ruta de api
app.use("/api/", microsoftRoutes);
app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint Not found",
  });
});
export default app;
