import YouTube from 'simple-youtube-api'
import io from 'socket.io-client'


const yt = new YouTube('AIzaSyC-CkgnX5qZ0LM_eqnRACSvdzE4I8zcwdU')
const socket = io(`http://localhost:3001`)


const Youtube = {
    providerId: 'youtube',
    label: 'Youtube',
    connect: false,
    search: (value) => {
        console.log(value)
        return new Promise((fullfill, reject) => {
            yt.searchVideos(value, 3)
                .then(results => {
                    console.log(results)
                    fullfill(results.map(result => {
                        return {
                            thumbnail: result.thumbnails.high.url,
                            title: result.title,
                            id: result.id
                        }
                    }))
                    //fullfill(results.map(result => {thumbnail: result.thumbnails.high, title: result.title}))
                })
        })
    },
    getPlaybackSource: (id) => {
      socket.emit('send', {
            providerId: Youtube.providerId,
            function: 'download',
            args: id
        })
        socket.on('receive', (data) => {
            console.log('loooooool');
        })
    },
}

export default Youtube