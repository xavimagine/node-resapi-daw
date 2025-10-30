import { Router } from "express";
import {
  getMicrosoft,
  deleteMicroft,
  postMicrosft,
  updateMicroft,
  getMicro,
} from "./controllers/microsoft.controller.js";
const router = Router();

// cuando hace una peticion devuelve con el res un mensaje que pone:
router.get("/microsoft", getMicrosoft);
// para ejecutar esa ruta deberan pasarle 1 parametro por la ruta que sera nuestro id
router.get("/microsoft/:id", getMicro);

router.post("/microsoft", postMicrosft);
// es para actualizar parcialmente
router.patch("/microsoft/:id", updateMicroft);

router.delete("/microsoft/:id", deleteMicroft);
export default router;
