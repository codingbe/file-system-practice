import fs from "fs";

export const getFile = (req, res) => {
  res.render("home");
};

export const postFile = (req, res) => {
  const {
    file: { path },
  } = req;
  try {
    const text = fs.readFileSync(path, "utf8");
    res.render("home", { text });
  } catch (error) {
    res.redirect("/");
  }
};
