import React, { useState, useEffect } from "react";

export const Main = () => {
  //Login button validation
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabledLogIn, setDisabledLogIn] = useState(true);
  const [nameOfClassLogIn, setNameOfClassLogIn] = useState("btn-inActive");

  useEffect(() => {
    const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
    if (username !== "" && username.length <= 100 && email !== "" && reg.test(email) && password.length >= 7 && password.length <= 25) {
      setNameOfClassLogIn("");
      setDisabledLogIn("");
    } else {
      setNameOfClassLogIn("btn-inActive");
      setDisabledLogIn(true);
    }
  }, [username, email, password]);

  const handleLogIn = (e) => {
    e.preventDefault();
    console.log("Log In");
  };

  return (
    <main className="main">
      <div className="container">
        <div className="main--wrapper">
          <h1>Login</h1>
          <h2>To access your account</h2>
          <div className="main__box">
            <div className="main__box__login">
              <form className="main__box__login__form">
                <label>Username</label>
                <input type="text" placeholder={"john123"} name="Username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <label>Email Address</label>
                <input type="email" placeholder={"john.doe@gmail.com"} name="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label>Password</label>
                <input type="password" placeholder={"**********"} name="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <div className="main__box__login__form__submit">
                  <a href="#">Forgot Password?</a>
                  <button disabled={disabledLogIn} onClick={handleLogIn} className={`${nameOfClassLogIn} btn`}>
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className="main__box__register">
              <p>Not a member?</p>
              <button className="btn">Register today</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
