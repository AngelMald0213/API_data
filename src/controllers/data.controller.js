import DataDAO from '../dao/data.dao.js';

// Función asíncrona para obtener todos los datos
export const getAll = async (req, res) => {
    try {
        // Llamada a DataDAO para obtener todos los datos
        const datas = await DataDAO.getAll();
        // Devolver los datos en formato JSON
        res.json(datas);
    } catch (error) {
        // Manejar errores y devolver un mensaje de error al cliente
        res.status(500).json({ status: "Server unavailable", message: error.message });
    }
};



// Función asíncrona para insertar datos
export const insertData = async (req, res) => {
    try {
        // Llamada a DataDAO para insertar datos
        const result = await DataDAO.insertData(req.body);
        // Comprobar si la inserción fue exitosa
        if (result) {
            // Devolver el resultado en formato JSON
            res.json(result);
        } else {
            // Devolver un mensaje de error si la inserción falló
            res.status(500).json({ status: "Server unavailable" });
        }
    } catch (error) {
        // Manejar errores y devolver un mensaje de error al cliente
        res.status(500).json({ status: "Server unavailable", message: error.message });
    }
};
