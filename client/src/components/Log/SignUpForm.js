import React, { useState } from "react";
import axios from "axios";

const SignUpForm = () => {
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const terms = document.getElementById('terms');
    const telError = document.querySelector('.tel.error')
    const emailError = document.querySelector('.email.error');
    const passwordError = document.querySelector('.password.error');
    const passwordConfirmError = document.querySelector('.password-confirm.error');
    const termsError = document.querySelector('.terms.error');

    passwordConfirmError.innerHTML = "";
    termsError.innerHTML = "";

    if(password !== controlPassword || !terms.checked) {
      if(password !== controlPassword)
        passwordConfirmError.innerHTML = 'les mots de passe ne correspondent pas';

    if(!terms.checked)
      termsError.innerHTML = 'Veuillez valider les conditions generales';
    } else {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/user/register`,
        data: {
          tel,
          email,
          password
        }
      })
      .then((res) => {
        console.log(res);
        if(res.data.errors) {
          telError.innerHTML = res.data.errors.tel;
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        }
      })
      .catch((err) => console.log(err));
    }

  };

  return (
    <form action="" onSubmit={handleRegister} id="sign-up-form">
      <label htmlFor="tel">Telephone</label>
      <br />
      <input
        type="number"
        name="tel"
        id="tel"
        onChange={(e) => setTel(e.target.value)}
        value={tel}
      />
      <div className="pseudo error"></div>
      <br />
      <label htmlFor="email">Email</label>
      <br />
      <input
        type="email"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <div className="email error"></div>
      <br />
      <label htmlFor="password">Mot de passe</label>
      <br />
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <div className="Password error"></div>
      <br />
      <label htmlFor="password-conf">Confirmer mot de passe</label>
      <br/>
      <input
        type="password-conf"
        name="password"
        id="password"
        onChange={(e) => setControlPassword(e.target.value)}
        value={controlPassword}
      />
      <div className="password-confirm error"></div>
      <br />
      <input type="checkbox" id="terms" />
      <label htmlFor="terms">
        J'accepte les{" "}
        <a href="/" target="_blank" rel="noopener noreferrer">
          conditions generales
        </a>
      </label>
      <div className="terms error"></div>
      <input type="submit" value="Valider inscription" />
    </form>
  );
};

export default SignUpForm;
