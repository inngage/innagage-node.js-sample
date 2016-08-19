var https = require('https');

// Objeto com os dados do push
var post_data = JSON.stringify({
    'sendPushRequest': {
        "app_token": "45ca292644b422c7c9bb5f1ed9c766e9",
        "identifier": "all",
        "title": "Titulo",
        "message": "message",
        "additional_data": {
            "tipo": "esse tipo",
            "idServico": "123",
            "plataforma": "plat"
        }
    }
});

// Objeto com as opções para onde será enviada a requisição
var post_options = {
    host: 'api.inngage.com.br',
    path: '/v1/message/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(post_data)
    }
};

// Envia a requisição
var post_req = https.request(post_options, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('Response: ' + chunk);
    });
});

// Envia e finaliza a requisição
post_req.write(post_data);
post_req.end();
