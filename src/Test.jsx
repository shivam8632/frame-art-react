import * as THREE  from "../node_modules/three/build/three.module";
import {GUI} from '../node_modules/dat.gui/build/dat.gui.module.js';
import {OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls.js"
import { useEffect } from "react";


// Setting the scene

const Testing = require => {
    useEffect(() => {
        function boxModal() {
            let  controls , width  , height;
            var scene = new THREE.Scene();

            // Camera Object

            // adding first cube...
            var camera = new THREE.PerspectiveCamera(2, window.innerWidth / window.innerHeight, 3, 1000);
            camera.position.set(-30,40,40)
            camera.lookAt(scene.position);
            scene.add(camera);

            // Making the cube
            var geometry = new THREE.BoxGeometry(0.1, 3 , 3) 
            var material = new THREE.MeshBasicMaterial({
                transparent: false,  
            })
            var cube= new THREE.Mesh(geometry , material)
            cube.position.set(0, 0, 0);
            cube.rotation.set(0, 0, 0);
            scene.add(cube);

            // adding second frame...
            var geome = new THREE.BoxGeometry(0.1, 2.5, 2.5);
            var mater = new THREE.MeshBasicMaterial({transparent:false});
            var mesh = new THREE.Mesh(geome , mater);
            cube.add(mesh);
            mesh.position.set(0, 0, 0);

            // Making StandoffTexturee
            var geom = new THREE.CylinderGeometry( 0.1,0.1, 0.3,64 );
            var mate = new THREE.MeshBasicMaterial({color: 0x000});
            var standoff = new THREE.Mesh(geom , mate);
            cube.add(standoff);
            geom.rotateZ(-Math.PI * 0.5);
            standoff.position.set(0,1.2,1.3);

            var geom2 = new THREE.CylinderGeometry( 0.1,0.1,0.3,64 );
            var mate2= new THREE.MeshBasicMaterial({color: 0x000});
            var standoff2 = new THREE.Mesh(geom2 , mate2);
            cube.add(standoff2);
            geom2.rotateZ(-Math.PI * 0.5);
            standoff2.position.set(0,1.2,-1.3);

            var geom3 = new THREE.CylinderGeometry( 0.1,0.1,0.3 ,64 );
            var mate3 = new THREE.MeshBasicMaterial({color: 0x000});
            var standoff3 = new THREE.Mesh(geom3 , mate3);
            cube.add(standoff3);
            geom3.rotateZ(-Math.PI * 0.5);
            standoff3.position.set(0,-1.2,1.3);

            var geom4 = new THREE.CylinderGeometry( 0.1,0.1,0.3,64 );
            var mate4 = new THREE.MeshBasicMaterial({color: 0x000});
            var standoff4 = new THREE.Mesh(geom4 , mate4);
            cube.add(standoff4);
            geom4.rotateZ(-Math.PI * 0.5);
            standoff4.position.set(0,-1.2,-1.3);


            // STANDOFF Texture offset
            var renderer = new THREE.WebGLRenderer({ antialias: true , alpha: true ,preserveDrawingBuffer: true } );
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.getElementById('prod-image').appendChild(renderer.domElement);

            // controls
            controls = new OrbitControls( camera, renderer.domElement );

            //controls.update() must be called after any manual changes to the camera's transform
            camera.position.set( 440, 200, 100 );
            controls.update();
            controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
            controls.dampingFactor = 0.5;
            camera.position.set( 400, 200, 100 );
            controls.screenSpacePanning = true;
            controls.minDistance = 100;
            controls.maxDistance = 500;
            controls.maxPolarAngle = Math.PI * 2 ;

            // Options to be added to the GUI

            var options = {
                velx: 0,
                vely: 0,
                camera: {
                speed: 0
                },
                stop: function() {
                    this.velx = 0;
                    this.vely = 0;
                    camera.position.z = 200;
                    camera.position.x = 400;
                    camera.position.y = 100;
                    cube.scale.x = 1;
                    cube.scale.y = 1;
                    cube.scale.z = 1;
                    mesh.scale.x = 1;
                    mesh.scale.y = 1;
                    mesh.scale.z = 1;
                },
                reset: function() {
                    this.velx = 0;   
                    this.vely = 0;
                    camera.position.z = 200;
                    camera.position.x = 400;
                    camera.position.y = 100;
                    cube.scale.x = 1;
                    cube.scale.y = 1;
                    cube.scale.z = 1;
                    cube.material.color.set(0xffffff);
                    mesh.scale.x = 1;
                    mesh.scale.y = 1;
                    mesh.scale.z = 1;
                    material = new THREE.MeshBasicMaterial({map:0xffffff})
                    mesh.material =material;
                    wireframe.material.color.set(0x000000)
                    standoff.material.color.set(0x000000)
                    standoff2.material.color.set(0x000000)
                    standoff3.material.color.set(0x000000)
                    standoff4.material.color.set(0x000000)
                },
            };  


            var gui = new GUI();

            var cam = gui.addFolder('Camera');
            // cam.add(options.camera, 'speed', 0, 0.0010).listen();
            cam.add(camera.position,'y', 0, 1000).listen();
            cam.open();


            
            // Height Weidth and Length Controler
            var box = gui.addFolder('Cube' );
            box.add(cube.scale, 'x', 0, 0.1).name('Width');//.listen();
            box.add(cube.scale, 'y', 0, 3 ).name('Height');//.listen();
            box.add(cube.scale, 'z', 0, 6).name('Length');//.listen();

            box.open();

            var frameOne = document.getElementById('frame-1').value;
            console.log(frameOne)
            cube.scale.y = frameOne;
            console.log('cube.scale.x', cube.scale.y)
            // cube.scale.y = 20

            // color'

            var abc = gui.addFolder('Color' );
            var conf = { color : '#ffae23' };    
            gui.addColor(conf, 'color').onChange( function(colorValue) {
            cube.material.color.set(colorValue);

            })
            abc.open();
            // Iamge Section


            var image = gui.addFolder('Add-Image')
            image.open();
            var GuiConfig = function  () {
            this['Image Path'] = 'Image-Path';  // default image path
            image.src = 'webgl/mdm_webgl_20.png';

            this['Upload Image'] = function(upload) {
                // you need to create an input element in HTML
                var input = document.getElementById('img-path');
                input.addEventListener('change', function(e) {
                    var file = e.target.files[0];
                    
                    var reader = new FileReader();
                    reader.onloadend = (onload)=> {
                        console.log('RESULT', reader.result)
                        new THREE.TextureLoader().load(reader.result ,function onLoad(texture){

                        var material = [
                            new THREE.MeshBasicMaterial({map:texture,transparent:false}),
                            new THREE.MeshBasicMaterial({ transparent: false}),
                            new THREE.MeshBasicMaterial(),
                            new THREE.MeshBasicMaterial(),
                            new THREE.MeshBasicMaterial(),
                            new THREE.MeshBasicMaterial(),
                        ]

                        console.log(material)
                        console.log(cube)
                        material.depthtset = false;
                        mesh.material = material;
                        material.map= texture
            })
                        return reader;
                    }
                    reader.readAsDataURL(file);
                    
                });    
                input.click()
                }
            };

                    
            var config = new GuiConfig();
            gui.add(config, 'Image Path', config['reader.result']);
            gui.add(config, 'Upload Image');
            gui.add(options, 'stop');
            gui.add(options, 'reset');// onClick="refreshPage()");


            var geo = new THREE.EdgesGeometry( cube.geometry )
            var mat = new THREE.LineBasicMaterial({ color :0x000000 ,	linewidth: 2,})

            var wireframe = new THREE.LineSegments( geo, mat );
            cube.add(wireframe)

            //Wireframe color Setting GUI

            var cde = gui.addFolder('Frame Color' );
            var confi = { colour : '#ffae23' };    
            gui.addColor(confi, 'colour').onChange( function(colorValue2) {
            wireframe.material.color.set(colorValue2, 'colour')
            cde.open();
            })

            var saveLink = document.createElement('div');
            saveLink.style.position = 'absolute';
            saveLink.style.top = '10px';
            saveLink.style.width = '100%';
            saveLink.style.color = 'white !important';
            saveLink.style.textAlign = 'center';
        
            //  StandoffTexture Color 
            var sta = gui.addFolder('Standoff  Color' );
            var off = { color : '#ffae23' };    
            gui.addColor(off, 'color').onChange( function(colorValue2) {
            standoff.material.color.set(colorValue2, 'color')
            standoff2.material.color.set(colorValue2, 'color')
            standoff3.material.color.set(colorValue2, 'color')
            standoff4.material.color.set(colorValue2, 'color')
            sta.open();
            })

            // REnder Function
            function animate() {
            requestAnimationFrame( animate  , abc);

            // required if controls.enableDamping or controls.autoRotate are set to true
            controls.update();
            renderer.render( scene, camera  );
            };

            animate();
            // RESIZE EVENTS
            window.addEventListener('resize', onResize);

            function onResize() {
                width = window.innerWidth;
                height = window.innerHeight;
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                renderer.setSize(width, height);
            }

            // var z  = document.getElementsByClassName('c')[3];
            // console.log("Class", z)
            // document.getElementById('frame-1').appendChild(z);
        }
        setTimeout(boxModal, 1000);
    }, [])
      
}

export default Testing;