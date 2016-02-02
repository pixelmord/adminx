
module.exports = function(casper, scenario, vp) {
  casper.echo("Setting cookies");
  casper.then(function(){
    casper.page.addCookie({
      name: scenario.sessionCookie,
      value: scenario.sessionCookieValue,
      path: scenario.basePath
    });
  });

  casper.thenOpen(scenario.url);

};

