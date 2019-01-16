import fs from 'fs';
import path from 'path'
/**
 * @description this method generate random number
 */
export default class RandomNumberGen {
  /**
   * @param {*} req
   * @param {*} res
   * @returns {object} object
   */
  static generateNumber(req, res) {
    const userId = req.body.id;
    const value = req.body.numGen;
    const dataHold = [];
    if (userId !== '24025' || undefined || null) return res.status(401).json({ status: 'fail', msg: 'you are not authorized to perform this task' });
    for (let i = 0; i < value; i++) {
      const firstRandomNum = Math.random().toString().slice(2, 7);
      const secondRandomNum = Date.now().toString().slice(9, 13);
      const phoneNumber = (firstRandomNum + secondRandomNum).padStart(10, '0');

      const data = {
        phoneNumber,
        dateCreated: new Date(),
      };
      dataHold.push(data);
    }
    fs.writeFileSync(path.join(__dirname, '../database/dataStore.json'),
      JSON.stringify(dataHold), (err) => {
        if (err) {
          return res.status(500).json({ msg: 'something went wrong' });
        }
      });
    return res.status(200).json({ dataHold });
  }

  /**
   * @description get all generated number
   * @param {*} req
   * @param {*} res
   * @returns {object} object
   */
  static getAllNumber(req, res) {
    const readfile = fs.readFileSync(path.join(__dirname, '../database/dataStore.json'), 'utf8');
    if (!readfile) return res.status(500).json({ msg: 'somthing went wrong' });
    const data = JSON.parse(readfile);
    const count = data.length;
    return res.status(200).json({ msg: 'success', count, data });
  }
}
