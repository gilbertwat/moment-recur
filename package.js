var packageName = 'gilbertwat:moment-recur';


Package.describe({
  summary: "Depends on official momentjs recurring date plugin for momentjs.",
  name : packageName,
  version: '1.0.5',
  git: "https://github.com/gilbertwat/moment-recur.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.use('momentjs:moment@2.10.0');
  api.addFiles('moment-recur.js');
});
    
