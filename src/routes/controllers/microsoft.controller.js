import { pool } from "../../db.js";
export const getMicrosoft = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM departamentos");
  res.json(rows);
};

export const getMicro = async (req, res) => {
  try {
    // con la ? le dices que va pasar un parametro que ira mediante el request.params y el  que sea
    const [rows] = await pool.query(
      "SELECT * FROM departamentos WHERE id =  ?",
      [req.params.id]
    );
    if (rows.length <= 0) {
      res.status(404).json({
        message: "Empleado no encontrado",
      });
    }
    // le devuelvo un json del parametro introducido
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Hubo algun error",
    });
  }
};

export const postMicrosft = async (req, res) => {
  try {
    const { nombre, personas, planta } = req.body;
    // cuando le pasamos el await deberemos usar asyncronas siempre
    const [rows] = await pool.query(
      //con los ? le pasare en el mismo ordenes lo siguientes paramentros
      "INSERT INTO departamentos(nombre,personas,planta) VALUES (?,?,?)",
      [nombre, personas, planta]
    );
    res.send({ id: rows.insertId, nombre, personas, planta });
    // le estamos diciendo que nos devuelve los valores del propio id
  } catch (error) {
    return res.status(500).json({
      message: "Hubo algun error",
    });
  }
};

export const updateMicroft = async (req, res) => {
  const { id } = req.params;
  const { nombre, personas, planta } = req.body;
  try {
    const [result] = await pool.query(
      // mediante la sentencia ifnull le dices que si no recibe nada mantenga por defecto lo que tenia anteriormente
      "UPDATE departamentos Set nombre = IFNULL(?,nombre), personas = IFNULL(?,personas), planta = IFNULL(?,planta) WHERE id =  ?",
      [nombre, personas, planta, id]
    );
    // conn affectRows Si no existe no afectara a nada asi que devolvera un 0 y entrara al if
    if (result.affectedRows === 0) {
      res.status(404).json({
        message: "Empleado no encontrado",
      });
    }
    const [rows] = await pool.query(
      "SELECT * FROM departamentos WHERE id =  ?",
      [id]
    );
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Hubo algun error",
    });
  }
};

export const deleteMicroft = async (req, res) => {
  try {
    const [rows] = await pool.query("Delete FROM departamentos WHERE id =  ?", [
      req.params.id,
    ]);
    // conn affectRows Si no existe no afectara a nada asi que devolvera un 0 y entrara al if
    if (rows.affectedRows <= 0) {
      message: "No existe ese empleado";
    }
    res.status(204);
  } catch (error) {
    return res.status(500).json({
      message: "Hubo algun error",
    });
  }
};
