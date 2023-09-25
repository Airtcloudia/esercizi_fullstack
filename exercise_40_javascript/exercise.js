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


saveLocalStorage();
