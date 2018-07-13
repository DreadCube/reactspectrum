var fs = require('fs');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var ffmpeg = require('ffmpeg-static');
import Providers from './src/providers'

const ytdl = require('ytdl-core');


const backend = {
	youtube_download: (id) => {
		ytdl(`http://www.youtube.com/watch?v=${id}`, {
			filter: 'audioonly',
			'highWaterMark': 10000
		})
		.pipe(fs.createWriteStream(id + '.mp3'));
	}
}

app.get('/', function(req, res){
	res.send('<h1>Hello world</h1>');
});

io.on('connection', function(socket) {
	socket.on('getProviders', (socket) => {
		this.emit('sendProviders', Providers)
	})

	socket.on('send', function(params) {
		for(let i = 0; i < Providers.length; i++) {
			if(Providers[i].providerId === params.providerId) {
				backend[params.providerId +'_' + params.function](params.args)
				//let provider = Providers[i]
				//console.log(provider)

				//let result = provider[params.function](params.args)
				//socket.emit('receive', result)
				break;
			}
		}		
	})
})



http.listen(3001, function(){
 	console.log('listening on *:3001');
});