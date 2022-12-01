import * as THREE  from "../node_modules/three/build/three.module";
import {color, GUI} from '../node_modules/dat.gui/build/dat.gui.module.js';
import {OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls.js"
import { useEffect,useContext,useState, useCallback } from "react";
import UserContext from "./components/context/UserContext";
// Setting the scene

const Testing = () => {
    const {checkT}= useContext(UserContext);
    //console.log(context,"====================>>>>>>>>>>>>>>>>>>")
    
    useEffect(() => {
      //  console.log(checkT,">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
      console.log("Check Test", checkT)
        const boxModal = () => {
            let  controls , width  , height;
            var scene = new THREE.Scene();

            // Camera Object

            // adding first cube...
            var camera = new THREE.PerspectiveCamera(3.5, window.innerWidth / window.innerHeight, 3, 1000);
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
            var geome = new THREE.BoxGeometry(0.05, 3, 3);
            var mater = new THREE.MeshBasicMaterial({transparent: true , opacity : 0.7 });
            var mesh = new THREE.Mesh(geome , mater);
            cube.add(mesh);
            mesh.position.set(0.2,0, 0);

            // Making StandoffTexturee
            var geom = new THREE.CylinderGeometry( 0.1,0.1, 0.5,64 );
            var mate = new THREE.MeshBasicMaterial({color: 0x000});
            var standoff = new THREE.Mesh(geom , mate);
            cube.add(standoff);
            geom.rotateZ(-Math.PI * 0.5);
            standoff.position.set(0.1,1.2,1.3);

            var geom2 = new THREE.CylinderGeometry( 0.1,0.1,0.5,64 );
            var mate2= new THREE.MeshBasicMaterial({color: 0x000});
            var standoff2 = new THREE.Mesh(geom2 , mate2);
            cube.add(standoff2);
            geom2.rotateZ(-Math.PI * 0.5);
            standoff2.position.set(0.1,1.2,-1.3);

            var geom3 = new THREE.CylinderGeometry( 0.1,0.1,0.5 ,64 );
            var mate3 = new THREE.MeshBasicMaterial({color: 0x000});
            var standoff3 = new THREE.Mesh(geom3 , mate3);
            cube.add(standoff3);
            geom3.rotateZ(-Math.PI * 0.5);
            standoff3.position.set(0.1,-1.2,1.3);

            var geom4 = new THREE.CylinderGeometry( 0.1,0.1,0.5,64 );
            var mate4 = new THREE.MeshBasicMaterial({color: 0x000});
            var standoff4 = new THREE.Mesh(geom4 , mate4);
            cube.add(standoff4);
            geom4.rotateZ(-Math.PI * 0.5);
            standoff4.position.set(0.1,-1.2,-1.3);



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
                    // mesh.scale.x = 1;
                    // mesh.scale.y = 1;
                    // mesh.scale.z = 1;
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
                    // mesh.scale.x = 1;
                    // mesh.scale.y = 1;
                    // mesh.scale.z = 1;
                    material = new THREE.MeshBasicMaterial({map:0xffffff})
                    // mesh.material =material;
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
            console.log("Y-Axis", camera.position.y)



            
            // Height Weidth and Length Controler
            var box = gui.addFolder('Cube' );
            box.add(cube.scale, 'x', 0, 0.1).name('Width');//.listen();
            box.add(cube.scale, 'y', 0, 3 ).name('Height');//.listen();
            box.add(cube.scale, 'z', 0, 6).name('Length');//.listen();
            // if (cube.scale, 'y' > 5){
                
            // }

            box.open();

            document.getElementById('frame-1').defaultValue = 5;

            document.getElementById('frame-2').defaultValue = 5;
            if (document.getElementById('frame-2').value >= 6){
                var geom = new THREE.CylinderGeometry( 0.1,0.1, 0.5,64 );
                var mate = new THREE.MeshBasicMaterial({color: 0x000});
                var standoff5 = new THREE.Mesh(geom , mate);
                cube.add(standoff5);
                geom.rotateZ(-Math.PI * 0.5);
                standoff5.position.set(0.1,-0,-1.3);
    
    
                var geom = new THREE.CylinderGeometry( 0.1,0.1, 0.5,64 );
                var mate = new THREE.MeshBasicMaterial({color: 0x000});
                var standoff6 = new THREE.Mesh(geom , mate);
                cube.add(standoff6);
                geom.rotateZ(-Math.PI * 0.5);
                standoff6.position.set(0.1,0,1.3);    
            }


            document.getElementById('frame-3').defaultValue = 5;
            if (document.getElementById('frame-3').value >=6){
                
                var geom = new THREE.CylinderGeometry( 0.1,0.1, 0.5,64 );
                var mate = new THREE.MeshBasicMaterial({color: 0x000});
                var standoff7 = new THREE.Mesh(geom , mate);
                cube.add(standoff7);
                geom.rotateZ(-Math.PI * 0.5);
                standoff7.position.set(0,-1.2,0);


                var geom = new THREE.CylinderGeometry( 0.1,0.1, 0.5,64 );
                var mate = new THREE.MeshBasicMaterial({color: 0x000});
                var standoff8 = new THREE.Mesh(geom , mate);
                cube.add(standoff8);
                geom.rotateZ(-Math.PI * 0.5);
                standoff8.position.set(0,1.2,0); 
            }
            document.getElementById('frame-4').defaultValue = 5;
            
            var frameOne = document.getElementById('frame-1').value;
            var frameTwo = document.getElementById('frame-2').value;
            var frameThree = document.getElementById('frame-3').value;
            var frameFour = document.getElementById('frame-4').value;
            console.log(frameOne)
            console.log(frameTwo)
            console.log(frameThree)
            console.log(frameFour)
            cube.scale.x = frameOne;
            cube.scale.y = frameTwo;
            cube.scale.z = frameThree;
            camera.position.y = frameFour;

            var abc = gui.addFolder('Color' );
            var conf = { color : '#ffae23' };    
            gui.addColor(conf, 'color').onChange( function(colorValue) {
            cube.material.color.set(colorValue)
            console.log("Select Value", cube.material.color)
            })
            abc.open();

            var getValue = document.getElementById('frame-5').selectedOptions[0].value;
            console.log("getValue", getValue);
            if(getValue == 'black' || getValue == 'Black') {
                console.log('Black');
                cube.material.color.b = 0;
                cube.material.color.g = 0;
                cube.material.color.r = 0;
            }
            if(getValue == 'White') {
                console.log('White');
                cube.material.color.b = 1;
                cube.material.color.g = 1;
                cube.material.color.r = 1;
            }
            if(getValue == 'Charcoal') {
                console.log('Charcoal');
                cube.material.color.b = 0.3176470588235294;
                cube.material.color.g = 0.3176470588235294;
                cube.material.color.r = 0.3176470588235294;
            }
            if(getValue == 'Grey') {
                console.log('Grey');
                cube.material.color.b = 0.48627450980392156;
                cube.material.color.g = 0.48627450980392156;
                cube.material.color.r = 0.48627450980392156;
            }


            var abc2 = gui.addFolder('Color frame' );
            var conf2 = { color : '#ffae23' };    
            gui.addColor(conf2, 'color').onChange( function(colorValue) {
            mesh.material.color.set(colorValue)
            console.log("Select Glass Value", mesh.material.color)
            })
            abc2.open();

            var getGlassValue = document.getElementById('frame-6').selectedOptions[0].value;
            console.log("getGlassValue", mesh.material.color);
            if(getGlassValue == 'frosted' || getGlassValue == 'Frosted') {
                console.log('Frosted');
                mesh.material.color.b = 240;
                mesh.material.color.g = 240;
                mesh.material.color.r = 234;
            }
            if(getGlassValue == 'Transparent Yellow') {
                console.log('Transparent Yellow');
                mesh.material.color.b = 0;
                mesh.material.color.g = 255;
                mesh.material.color.r = 255;
            }
            if(getGlassValue == 'Transparent Orange') {
                mesh.material.color.r = 255;
                mesh.material.color.g = 128;
                mesh.material.color.b = 0;
                console.log("Orange" ,mesh.material.color.r);
            }
            if(getGlassValue == 'Transparent Green') {
                mesh.material.color.b = 0;
                mesh.material.color.g = 255;
                mesh.material.color.r = 0;
            }
            if(getGlassValue == 'Transparent Blue') {
                mesh.material.color.b = 255;
                mesh.material.color.g = 0;
                mesh.material.color.r = 0;
            }




            

            // Iamge Section
            var image = gui.addFolder('Add-Image')
            image.open();
            var GuiConfig = function () {
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
                        cube.material = material;
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

            console.log("Upload Button", gui.config)

            var geo = new THREE.EdgesGeometry( cube.geometry )
            var mat = new THREE.LineBasicMaterial({ color :0x000000 ,	linewidth: 2,})

            var wireframe = new THREE.LineSegments( geo, mat );
            cube.add(wireframe)

            //Wireframe color Setting GUI

            var cde = gui.addFolder('Frame Color');
            var confi = { colour : '#ffae23' };    
            gui.addColor(confi, 'colour').onChange( function(colorValue2) {
            wireframe.material.color.set(colorValue2, 'colour')
            cde.open();
            })

            var getWireframe = document.getElementById('frame-6').selectedOptions[0].value;
            console.log("Wireframe Value", wireframe.material.color)
            if(getWireframe == 'clear default') {
                console.log('clear default');
                wireframe.material.color.b = 1;
                wireframe.material.color.g = 1;
                wireframe.material.color.r = 1;
            }

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

            var getStandOff = document.getElementById('frame-8').selectedOptions[0].value;
            console.log("Standoff Value", standoff.material.color)
            if(getStandOff == 'Black') {
                console.log('Black');
                standoff.material.color.b = 0;
                standoff.material.color.g = 0;
                standoff.material.color.r = 0;

                standoff2.material.color.b = 0;
                standoff2.material.color.g = 0;
                standoff2.material.color.r = 0;

                standoff3.material.color.b = 0;
                standoff3.material.color.g = 0;
                standoff3.material.color.r = 0;

                standoff4.material.color.b = 0;
                standoff4.material.color.g = 0;
                standoff4.material.color.r = 0;
            }
            if(getStandOff == 'White') {
                console.log('White');
                standoff.material.color.b = 1;
                standoff.material.color.g = 1;
                standoff.material.color.r = 1;

                standoff2.material.color.b = 1;
                standoff2.material.color.g = 1;
                standoff2.material.color.r = 1;

                standoff3.material.color.b = 1;
                standoff3.material.color.g = 1;
                standoff3.material.color.r = 1;

                standoff4.material.color.b = 1;
                standoff4.material.color.g = 1;
                standoff4.material.color.r = 1;
            }
            if(getStandOff == 'Silver') {
                standoff.material.color.b = 192;
                standoff.material.color.g = 192;
                standoff.material.color.r = 192;

                standoff2.material.color.b = 192;
                standoff2.material.color.g = 192;
                standoff2.material.color.r = 192;

                standoff3.material.color.b = 192;
                standoff3.material.color.g = 192;
                standoff3.material.color.r = 192;

                standoff4.material.color.b = 192;
                standoff4.material.color.g = 192;
                standoff4.material.color.r = 192;
            }
            if(getStandOff == 'Gold') {
                standoff.material.color.b = 0;
                standoff.material.color.g = 215;
                standoff.material.color.r = 255;

                standoff2.material.color.b = 0;
                standoff2.material.color.g = 215;
                standoff2.material.color.r = 255;

                standoff3.material.color.b = 0;
                standoff3.material.color.g = 215;
                standoff3.material.color.r = 255;

                standoff4.material.color.b = 0;
                standoff4.material.color.g = 215;
                standoff4.material.color.r = 255;
            }

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

            var z  = document.getElementsByClassName('c')[3];
            console.log("Class", z)
            document.getElementById('frame-1').appendChild(z);

            // var uImg = document.getElementById('img-path');
            // document.getElementById('upload-img').appendChild(uImg);
        }
        setTimeout(boxModal, 2000);
    }, [checkT])
    
}

export default Testing;