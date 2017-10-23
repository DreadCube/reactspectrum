import React, { Component } from 'react';
import * as THREE from 'three';
import './index.css';

class Bars extends Component {

    constructor(props) {
    	super(props)
        this.state = {
        	data: props.data,
            audioFreqData: props.audioFreqData
        }

        this.Scene = new THREE.Scene();
        this.Camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.Renderer = new THREE.WebGLRenderer();
        this.Renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('root').appendChild(this.Renderer.domElement);

        this.renderObjects = this.renderObjects.bind(this);
        this.createObjects();
        this.renderObjects();
    }

    componentDidMount() {
      //  window.addEventListener('resize', this.onWindowResize.bind(this), false);
    }

    onWindowResize() {
        this.Camera.aspect = window.innerWidth / window.innerHeight;
        this.Camera.updateProjectionMatrix();
        this.Renderer.setSize(window.innerWidth, window.innerHeight);

    }

    createObjects() {
        this.Scene = new THREE.Scene();
        this.barsWidth = this.state.data.barsWidth.value;
        this.barsHeight = this.state.data.barsHeight.value;
        this.barsCount = this.state.data.barsCount.value;
        this.barsSpace = this.state.data.barsSpace.value;
        this.bgColor = this.state.data.bgColor.value;
        this.color = this.state.data.color.value;
        this.wireframe = this.state.data.wireframe.value;
        this.rotSpeedX = this.state.data.rotSpeedX.value;
        this.rotSpeedY = this.state.data.rotSpeedX.value;
        this.rotSpeedZ = this.state.data.rotSpeedX.value;
        this.cameraX = this.state.data.cameraX.value;
        this.cameraY = this.state.data.cameraY.value;
        this.cameraZ = this.state.data.cameraZ.value;

        let lastElemPosX = 0;

        for(var i = 0; i < this.barsCount; i++) {
            let geo = new THREE.BoxGeometry(this.barsWidth, this.barsHeight, this.barsWidth);
            let mat = new THREE.MeshBasicMaterial({
                color: this.color,
                wireframe: this.wireframe
            });

            let obj = new THREE.Mesh(geo, mat);
            obj.name = 'bar' + [i];
            obj.position.x = lastElemPosX + this.barsWidth + this.barsSpace;
            lastElemPosX = obj.position.x;
            this.Scene.add(obj);
        }
    }

    renderObjects() {
        requestAnimationFrame(this.renderObjects);

        let childs = this.Scene.children;

        for(let i = 0; i < childs.length; i++) {
            // Rotation
            childs[i].rotation.x = childs[i].rotation.x + (this.rotSpeedX / 1000);
            childs[i].rotation.y = childs[i].rotation.y + (this.rotSpeedY / 1000);
            childs[i].rotation.z = childs[i].rotation.z + (this.rotSpeedZ / 1000);

            // -AudioObject.freqData[i] 
            childs[i].scale.y = (-this.state.audioFreqData[i] * this.barsHeight / 100);
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

    render() {

        return (
            <div></div>
        );
    }
}

export default Bars;