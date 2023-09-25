const user = {
  id: 1,
  name: "John",
  age: 25,
};


const saveLocalStorage = () => {
  try {

    const saveUser = JSON.stringify(user);
    localStorage.setItem("user", saveUser);

  }

  catch (error) {
    outError(error)
  }

}


const getLocalStorage = () => {
  try {
    const getUser = localStorage.getItem("user");
    const userString = JSON.parse(getUser);
    console.log(userString);

  } catch (error) {
    outError(error)

  }

}


const init = () => {
  saveLocalStorage();
  getLocalStorage();
}

init ();