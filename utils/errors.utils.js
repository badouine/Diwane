module.exports.signUpErrors = (err) => {
    let errors = { email: "", password: "" };
  
    if (err.message.includes("tel"))
      errors.tel = "numero deja enregistre par un  autre";
  
    if (err.message.includes("email")) errors.email = "Email incorrect";
  
    if (err.message.includes("password"))
      errors.password = "Le mot de passe doit faire 6 caractères minium";
  
    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
      errors.tel = "Numero déjà pris entrer par autrui";
  
    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
      errors.email = "Cet email est déjà enregistré";
  
    return errors;
  };


  module.exports.signInErrors = (err) => {
    let errors = { email: '', password: ''}
  
    if (err.message.includes("email")) 
      errors.email = "Email inconnu";
    
    if (err.message.includes('password'))
      errors.password = "Le mot de passe ne correspond pas"
  
    return errors;
  }

  module.exports.uploadErrors = (err) => {
    let errors = { format: '', maxSize: '' };

    if(err.message.includes('invalide file'))
      errors.format = 'Format incompatible';

      if(err.message.includes('max size'))
        errors.maxSize = 'le fichier depasse 500ko';

        return errors
  }