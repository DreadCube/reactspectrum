import React, { Component } from 'react'
import ReactAnimationFrame from 'react-animation-frame'
import Input from 'react-toolbox/lib/input'
import * as THREE from 'three'

class Spectrum extends Component {
	constructor(props) {
		super(props)


		this.track = new Audio();
		this.track.src = 'videoplayback.mp3'
		this.track.play()

		let ctx = new AudioContext()
        this.analyser = ctx.createAnalyser();
        this.analyser.smoothingTimeConstant = 0.8;
        this.source = ctx.createMediaElementSource(this.track);
        this.source.connect(this.analyser);
        this.analyser.connect(ctx.destination);

        this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount);


	/*	this.state = {
			playing: false,
			track: '',
			...this.state.props.spectrum
		}
*/
		//this.renderObjects = this.renderObjects.bind(this)
	}

   /* componentDidMount() {
    	window.addEventListener('resize', this.onWindowResize.bind(this), false);
        
        this.Scene = new THREE.Scene();
        this.Camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.Renderer = new THREE.WebGLRenderer();
        this.Renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('root').appendChild(this.Renderer.domElement);

        this.createObjects();
        this.renderObjects();
    }

    onWindowResize() {
        this.Camera.aspect = window.innerWidth / window.innerHeight;
        this.Camera.updateProjectionMatrix();
        this.Renderer.setSize(window.innerWidth, window.innerHeight);

    }

    createObjects() {
    	this.Scene = new THREE.Scene();
        let {
        	barsWidth,
        	barsHeigh,
        	barsCount,
        	barsSpace,
        	bgColor,
        	color,
        	wireframe
        	rotSpeedX,
        	cameraX,
        	cameraY,
        	cameraZ
        } = this.state


        for(var i = 0; i < barsCount; i++) {
            let geo = new THREE.BoxGeometry(barsWidth, barsHeight, barsWidth);
            let mat = new THREE.MeshBasicMaterial({
                color: color,
                wireframe: wireframe
            });

            let obj = new THREE.Mesh(geo, mat);
            obj.name = 'bar' + [i];
            obj.position.x = lastElemPosX + barsWidth + barsSpace;
            lastElemPosX = obj.position.x;
            this.Scene.add(obj);
        }
    }

    renderObjects() {
    	requestAnimationFrame(this.renderObjects);

        let childs = this.Scene.children;

        let {

        } = this.state

   //     let frequencies = getFrequencies();
        let frequencies = []

        for(let i = 0; i < childs.length; i++) {
            // Rotation
            childs[i].rotation.x = childs[i].rotation.x + (this.rotSpeedX / 1000);
            childs[i].rotation.y = childs[i].rotation.y + (this.rotSpeedY / 1000);
            childs[i].rotation.z = childs[i].rotation.z + (this.rotSpeedZ / 1000);

            // -AudioObject.freqData[i] 
            childs[i].scale.y = (-frequencies[i] * this.barsHeight / 100) + 0.1;

           // childs[i].scale.y = 10;
            //console.log(childs[i].scale.y);
            //Bars Color
            childs[i].material.color.set(this.color);
        }

        document.body.style.backgroundColor = this.bgColor;
        this.Scene.background = new THREE.Color(this.bgColor);

        this.Camera.position.x = this.cameraX;
        this.Camera.position.y = this.cameraY;
        this.Camera.position.z = this.cameraZ;

        this.Renderer.render(this.Scene, this.Camera);
    }
	*/

	/*componentDidMount() {
		this.renderObjects();
	}

	renderObjects() {
		requestAnimationFrame(this.renderObjects)
		console.log('renderObjects')
	}*/

	onAnimationFrame(time) {
		this.analyser.getByteFrequencyData(this.frequencyData)
	}

	render() {
		return (
			<div>
				<Input type="text" label="test" />
			</div>
		)
	}
}

export default ReactAnimationFrame(Spectrum)