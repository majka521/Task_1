export const Main = () => {
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
                <input></input>
                <label>Email Address</label>
                <input></input>
                <label>Password</label>
                <input></input>
                <div className="main__box__login__form__submit">
                  <a href="#">Forgot Password?</a>
                  <button className="btn">Login</button>
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
