import SC from 'node-soundcloud'

const SoundCloud = {
	label: 'SoundCloud',
	connect: () => {
		SC.init({
			id: '6e89b8f060228b9158201e9e80b8b834',
			secret: '0cf895f866e2b629634941064b80557c',
			uri: 'localhost:3000'
		})

		const initOAuth = (req, res) => {
			let url = SC.getConnectUrl();
			console.log(url);
		}
		initOAuth()
	}
}

export default SoundCloud