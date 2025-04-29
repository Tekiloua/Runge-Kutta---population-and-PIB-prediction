import mariadb from "mariadb";

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "madagascar_projet",
  connectionLimit: 5,
});

// Fonction pour récupérer toutes les femmes
export const getFemmes = async () => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM Femmes");
    return rows;
  } catch (err) {
    console.error("Erreur de requête:", err);
    return [];
  } finally {
    if (conn) conn.release(); // Libérer la connexion
  }
};

// Fonction pour récupérer tous les hommes
export const getHommes = async () => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM Hommes");
    return rows;
  } catch (err) {
    console.error("Erreur de requête:", err);
    return [];
  } finally {
    if (conn) conn.release();
  }
};

export const getPibs = async () => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM Pibs");
    return rows;
  } catch (err) {
    console.error("Erreur de requête:", err);
    return [];
  } finally {
    if (conn) conn.release();
  }
};

export const getTousGenres = async () => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM Tous_genres");
    return rows;
  } catch (err) {
    console.error("Erreur de requête:", err);
    return [];
  } finally {
    if (conn) conn.release();
  }
};
