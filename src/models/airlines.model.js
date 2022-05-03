const db = require("../config/db");

const airlinesModel = {
  allData: (search) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT COUNT(*) AS total FROM airlines`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },
  listAll: (search, limit, offset) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM airlines WHERE name LIKE '%${search}%' LIMIT ${limit} OFFSET ${offset}`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },
  detailAirlines: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM airlines WHERE id='${id}'`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },
  inputAirlines: (data) => {
    return new Promise((resolve, reject) => {
      const { id, file, name, pic, phone, date, isActive } = data;
      db.query(
        `INSERT INTO airlines ( photo, name, pic, phone, created_date, id, is_active) 
            VALUES ('${file}', '${name}','${pic}', '${phone}', '${date}', '${id}',${isActive})`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },
  updateAirlines: (id, photo, name, pic, phone, date, isActive) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE airlines SET photo='${photo}', name='${name}',pic='${pic}'
                , phone='${phone}', created_date='${date}', is_active='${isActive}' WHERE id='${id}'`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },
  deleteAirlines: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM airlines WHERE id='${id}'`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },
  airlinesControl: (id, isActive) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE airlines SET is_active='${isActive}' WHERE id='${id}'`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },
};

module.exports = airlinesModel;