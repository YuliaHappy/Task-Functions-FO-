function createSecretHolder(secret) {
  function SecretHolder() {
    this._secret  = secret;
  };

  SecretHolder.prototype.getSecret = function() {
    return this._secret;
  };

  SecretHolder.prototype.setSecret = function(secr) {
    this._secret = secr;
  }; 

  return new SecretHolder();
}