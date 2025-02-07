const data = [];

const create = async (req, res) => {
  try {
    const user = req.body;
    const UserExist = data.find((i) => user.email == i.email);

    if (UserExist) {
      return res.status(400).json({ message: "user exist" });
    }

    const { name, email, country } = req.body;
    if (!name || !email || !country) {
      return res.status(400).json({ meaasge: "All fields are required" });
    }

    data.push({ name, email, country });

    res.status(201).json({ message: "User data saved" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const read = async (req, res) => {
  try {
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const update = async (req, res) => {
  try {
    const { email, name, country } = req.body;

    const user = data.find((i) => i.email == email);
    const index = data.findIndex((i) => i.email == email);
    if (name) {
      user.name = name;
    }
    if (country) {
      user.country = country;
    }

    data[index] = user;

    res.status(200).json({ message: "updated" });
  } catch (err) {
    res.status(500).json({ message: "internal server err" });
  }
};

const Delete = async (req, res) => {
  try {
    const { email } = req.body;

    const userIndex = data.findIndex((i) => i.email == email);

    data.splice(userIndex, 1);

    res.status(200).json({ message: "delete successfull" });
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
  }
};

module.exports = { create, read, update, Delete };
