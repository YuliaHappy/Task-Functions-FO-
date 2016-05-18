function createSecretHolder(secret) {
  getSecret = function() {
    return secret;
  };

  setSecret = function(secr) {
    secret = secr;
  }; 

  return {
    getSecret: getSecret,
    setSecret: setSecret
  };
}