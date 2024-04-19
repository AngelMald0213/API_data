import Data from '../models/data.model.js';

const DataDAO = {};

DataDAO.getAll = async () => {
    const datas = await Data.find();
    return datas;
};


DataDAO.insertData = async (data) => {
    const newData = new Data(data);
    await newData.save();
    return true;
};


export default DataDAO;
