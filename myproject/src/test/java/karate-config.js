function fn() {
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = {
    env: "Hola",
    myVarName: 'someValue',
    environment: 'https://api.punkapi.com'
  }
  if (env == 'dev') {
    // customize
    // e.g. config.foo = 'bar';
    config.id=9595
  } 
  if (env == 'qa') {
    // customize
    // e.g. config.foo = 'bar';
    config.id=7575
  } 
  return config;
}