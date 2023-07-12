import User from '../models/user.model.js'; // Importa el modelo de Usuario correspondiente a tu base de datos NoSQL
export const crearUsuario = async (req, res) => {
    res.json("Sección de crear usuario")
}
export const createUser = async (req, res) => {
    //Destructuramos el arreglo del request.body
    const { nombre, correo, contrasena, fechaRegistro } = req.body;
    //Guardamos la información en una constante
    const newUser = new User({nombre, correo, contrasena, fechaRegistro})
    //Guardamos el usuario que se ha almacenado en la base de datos
    const userSaved = await newUser.save()
    res.status(201).json(userSaved );
}
export const getUsers = async (req, res) => {
  try {
    const users = await User.find(); // Utiliza la función find() del modelo Usuario para obtener todos los usuarios
    res.json(users);
  } catch (error) {
    return res.status(500).json({
      message: "Can't get the users",
    });
  }
};

