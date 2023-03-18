import * as THREE  from "../node_modules/three/build/three.module";
import {color, GUI} from '../node_modules/dat.gui/build/dat.gui.module.js';
import {OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls.js"
import { useEffect,useContext,useState, useCallback } from "react";
import UserContext from "./components/context/UserContext";

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
            // const urlTexture= new URL('../src/assets/Threejs_Textures/MetalFrameYellow.jpg' , import.meta.url)
            // const textureer = new THREE.TextureLoader().load(urlTexture);
            // new THREE.TextureLoader().load(textureer ,function onLoad(textureer){

            // console.log("textureer----------->" , textureer);
            var material = new THREE.MeshBasicMaterial({
                // map: textureer,
                transparent : false,
                color: 0xffffff,
                metalness: 1,    
                roughness: 0,
                opacity : 1
            })
            var cube= new THREE.Mesh(geometry , material)
            cube.position.set(0, 0, 0);
            material.needsUpdate= true
            scene.add(cube);
   
            // adding for the image part 
            var geome = new THREE.BoxGeometry(0.08,2.5 ,2.5 );
            var mater = new THREE.MeshBasicMaterial({transparent : false , color : 0x3d3d3d});
            var ImageMesh = new THREE.Mesh(geome , mater);
            cube.add(ImageMesh);
            ImageMesh.needsUpdate= true
            ImageMesh.position.set(0.1,0, 0);

            // adding second frame  (mirror frame)...
            var geome = new THREE.BoxGeometry(0.05, 3, 3);
            var mater = new THREE.MeshPhongMaterial({color: 0xffffff,
                shininess:80,
                metal : true,
                wrapAround:true,
                metalness: 0,
                roughness: 1,
                // envMapIntensity: 1,
                thickness : 0,
                clearcoat: 1,
                transparent: true,
                emissive : 0xffe87c,
                emissiveIntensity : 0,
                lightMapIntensity : 1,
                transmission: .95,
                opacity: 0.4,
                reflectivity: 1
            });

            var mesh = new THREE.Mesh(geome , mater);
            cube.add(mesh);
            mater.needsUpdate = true
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            mesh.position.set(0.24,0, 0);

            const cubeCamera = new THREE.CubeCamera(50, 100, 512); 
            scene.add(cubeCamera);
            const stereo = new THREE.StereoCamera();
            scene.add(stereo)
            
             
            const al = new THREE.AmbientLight(0x404040)
            scene.add(al); 

            const dl = new THREE.DirectionalLight(0x00fffc)
            scene.add( dl );
            // const light = new THREE.PointLight( {color: 0xffe87b, intensity: 1, distance : 1000});
            // light.position.set( 22,2.5, 0 );
            // light.castShadow = true;
            // scene.add( light );
	
            // Making StandoffTextureeimage

            // 1st StandOff
            var geom = new THREE.CylinderGeometry( 0.06,0.06, 0.33,65 );
            var mate = new THREE.MeshPhongMaterial({color: 0x000,
                shininess: 80,
                metal: true,
                wrapAround: true,
            });
            var standoff = new THREE.Mesh(geom , mate);
            cube.add(standoff);
            geom.rotateZ(-Math.PI * 0.5);
            standoff.position.set(0.08,1.3,1.3);


            var geom1_3 = new THREE.CylinderGeometry( 0.03,0.03, 0.02,64 );
            var mate1_3 = new THREE.MeshPhongMaterial({color: 0xffffff,
                shininess: 80,
                metal: true,
                wrapAround: true,
            });
            geom1_3.rotateZ(-Math.PI * 0.5);
            var standoffparent1_3 = new THREE.Mesh(geom1_3 , mate1_3);
            standoff.add(standoffparent1_3);
            standoffparent1_3.position.set(-0.17,0,0); 


            var geom1_1 = new THREE.CylinderGeometry( 0.03,0.03, 0.03,64 );
            var mate1_1 = new THREE.MeshPhongMaterial({color: 0xffffff,
                shininess: 80,
                metal: true,
                wrapAround: true,
            });
            geom1_1.rotateZ(-Math.PI * 0.5);
            var standoffparent1 = new THREE.Mesh(geom1_1 , mate1_1);
            standoff.add(standoffparent1);
            standoffparent1.position.set(0.18,0,0);

            var geom1_2 = new THREE.CylinderGeometry( 0.055,0.055, 0.05,64 );
            var mate1_2 = new THREE.MeshPhongMaterial({color: 0x000,
                shininess: 80,
                metal: true,
                wrapAround: true,
            });
            var standoffchild1 = new THREE.Mesh(geom1_2 , mate1_2);
            standoffparent1.add(standoffchild1);
            geom1_2.rotateZ(-Math.PI * 0.5);
            standoffchild1.position.set(0.04,0,0);

// 2nd StandOff 
            var geom2 = new THREE.CylinderGeometry(  0.06,0.06, 0.33,65  );
            var mate2= new THREE.MeshPhongMaterial({color: 0x000,
                shininess: 80,
                metal: true,
                wrapAround: true,
            });
            var standoff2 = new THREE.Mesh(geom2 , mate2);
            cube.add(standoff2);
            geom2.rotateZ(-Math.PI * 0.5);
            standoff2.position.set(0.08,1.3,-1.3);


            var geom2_3 = new THREE.CylinderGeometry( 0.03,0.03, 0.02,64 );
            var mate2_3 = new THREE.MeshPhongMaterial({color: 0xffffff,
                shininess: 80,
                metal: true,
                wrapAround: true,
            });
            geom2_3.rotateZ(-Math.PI * 0.5);
            var standoffparent2_3 = new THREE.Mesh(geom2_3 , mate2_3);
            standoff2.add(standoffparent2_3);
            standoffparent2_3.position.set(-0.17,0,0); 



            var geom2_1 = new THREE.CylinderGeometry(  0.03,0.03, 0.03,64 );
            var mate2_1 = new THREE.MeshPhongMaterial({color: 0xffffff,
                shininess: 80,
                metal: true,
                wrapAround: true,
            });
            geom2_1.rotateZ(-Math.PI * 0.5);
            var standoffparent2 = new THREE.Mesh(geom2_1 , mate2_1);
            standoff2.add(standoffparent2);
            standoffparent2.position.set(0.18,0,0);

            var geom2_2 = new THREE.CylinderGeometry( 0.055,0.055, 0.05,64 );
            var mate2_2 = new THREE.MeshPhongMaterial({color: 0x000,
                shininess: 80,
                metal: true,
                wrapAround: true,
            });
            var standoffchild2 = new THREE.Mesh(geom2_2 , mate2_2);
            standoffparent2.add(standoffchild2);
            geom2_2.rotateZ(-Math.PI * 0.5);
            standoffchild2.position.set(0.04,0,0);

// 3Rd StabdOff
            var geom3 = new THREE.CylinderGeometry(  0.06,0.06, 0.33,65  );
            var mate3 = new THREE.MeshPhongMaterial({color: 0x000,
                shininess: 80,
                metal: true,
                wrapAround: true,
            });
            var standoff3 = new THREE.Mesh(geom3 , mate3);
            cube.add(standoff3);
            geom3.rotateZ(-Math.PI * 0.5);
            standoff3.position.set(0.08,-1.3,1.3);

            var geom3_1 = new THREE.CylinderGeometry( 0.03,0.03, 0.03,64 );
            var mate3_1 = new THREE.MeshPhongMaterial({color: 0xffffff,
                shininess: 80,
                metal: true,
                wrapAround: true,
            });
            geom3_1.rotateZ(-Math.PI * 0.5);
            var standoffparent3 = new THREE.Mesh(geom3_1 , mate3_1);
            standoff3.add(standoffparent3);
            standoffparent3.position.set(0.18,0,0);


            var geom3_3 = new THREE.CylinderGeometry( 0.03,0.03, 0.02,64 );
            var mate3_3 = new THREE.MeshPhongMaterial({color: 0xffffff,
                shininess: 80,
                metal: true,
                wrapAround: true,
            });
            geom3_3.rotateZ(-Math.PI * 0.5);
            var standoffparent3_3 = new THREE.Mesh(geom3_3 , mate3_3);
            standoff3.add(standoffparent3_3);
            standoffparent3_3.position.set(-0.17,0,0); 

            var geom3_2 = new THREE.CylinderGeometry( 0.055,0.055, 0.05,64 );
            var mate3_2 = new THREE.MeshPhongMaterial({color: 0x000,
                shininess: 80,
                metal: true,
                wrapAround: true,
            });
            var standoffchild3 = new THREE.Mesh(geom3_2 , mate3_2);
            standoffparent3.add(standoffchild3);
            geom3_2.rotateZ(-Math.PI * 0.5);
            standoffchild3.position.set(0.04,0,0);



// 4Th Standoff

            var geom4 = new THREE.CylinderGeometry(  0.06,0.06, 0.33,65  );
            var mate4 = new THREE.MeshPhongMaterial({color: 0x000,
                shininess: 80,
                metal: true,
                wrapAround: true,
            });
            var standoff4 = new THREE.Mesh(geom4 , mate4);
            cube.add(standoff4);
            geom4.rotateZ(-Math.PI * 0.5);
            standoff4.position.set(0.08,-1.3,-1.3);


            var geom4_3 = new THREE.CylinderGeometry( 0.03,0.03, 0.02,64 );
            var mate4_3 = new THREE.MeshPhongMaterial({color: 0xffffff,
                shininess: 80,
                metal: true,
                wrapAround: true,
            });
            geom4_3.rotateZ(-Math.PI * 0.5);
            var standoffparent4_3 = new THREE.Mesh(geom4_3 , mate4_3);
            standoff4.add(standoffparent4_3);
            standoffparent4_3.position.set(-0.17,0,0); 


            var geom4_1 = new THREE.CylinderGeometry( 0.03,0.03, 0.03,64 );
            var mate4_1 = new THREE.MeshPhongMaterial({color: 0xffffff,
                shininess: 80,
                metal: true,
                wrapAround: true,
            });
            geom4_1.rotateZ(-Math.PI * 0.5);
            var standoffparent4 = new THREE.Mesh(geom4_1 , mate4_1);
            standoff4.add(standoffparent4);
            standoffparent4.position.set(0.18,0,0);

            var geom4_2 = new THREE.CylinderGeometry( 0.055,0.055, 0.05,64 );
            var mate4_2 = new THREE.MeshPhongMaterial({color: 0x000,
                shininess: 80,
                metal: true,
                wrapAround: true,
            });
            var standoffchild4 = new THREE.Mesh(geom4_2 , mate4_2);
            standoffparent4.add(standoffchild4);
            geom4_2.rotateZ(-Math.PI * 0.5);
            standoffchild4.position.set(0.04,0,0);

            // STANDOFF Texture offset
            var renderer = new THREE.WebGLRenderer({ antialias: true , alpha: true ,preserveDrawingBuffer: true } );
            renderer.setSize(window.innerWidth, window.innerHeight);
			renderer.setPixelRatio( window.devicePixelRatio );
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            renderer.outputEncoding = THREE.sRGBEncoding;
            // cubeCamera.updateCubeMap(renderer, scene);
		
            document.getElementById('prod-image').appendChild(renderer.domElement);

            // controls
            controls = new OrbitControls( camera, renderer.domElement );

            //controls.update() must be called after any manual changes to the camera's transform
            camera.position.set( 440, 200, 100 );
            // controls.update();
            controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
            controls.dampingFactor = 0.5;
            camera.position.set( 400, 200, 100 );
            controls.screenSpacePanning = true;
            controls.minDistance = 100;
            controls.maxDistance = 500;
            controls.maxPolarAngle = Math.PI * 2 ;

            // Options to be added to the GUI

           
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
            var StandOffSide = false;

            if (document.getElementById('frame-2').value >= 6){

                // 5Th StandOff
                var geom = new THREE.CylinderGeometry(  0.06,0.06, 0.33,65   );
                var mate = new THREE.MeshPhongMaterial({color: 0x000,
                    shininess: 80,
                    metal: true,
                    wrapAround: true,
                });
                var standoff5 = new THREE.Mesh(geom , mate);
                cube.add(standoff5);
                geom.rotateZ(-Math.PI * 0.5);
                standoff5.position.set(0.08,-0,-1.3);



                var geom5_3 = new THREE.CylinderGeometry( 0.03,0.03, 0.02,64 );
                var mate5_3 = new THREE.MeshPhongMaterial({color: 0xffffff,
                    shininess: 80,
                    metal: true,
                    wrapAround: true,
                });
                geom5_3.rotateZ(-Math.PI * 0.5);
                var standoffparent5_3 = new THREE.Mesh(geom5_3 , mate5_3);
                standoff5.add(standoffparent5_3);
                standoffparent5_3.position.set(-0.17,0,0); 


                var geom5_1 = new THREE.CylinderGeometry(  0.03,0.03, 0.03,64 );
                var mate5_1 = new THREE.MeshPhongMaterial({color: 0xffffff,
                    shininess: 80,
                    metal: true,
                    wrapAround: true,
                });
                geom5_1.rotateZ(-Math.PI * 0.5);
                var standoffparent5 = new THREE.Mesh(geom5_1 , mate5_1);
                standoff5.add(standoffparent5);
                standoffparent5.position.set(0.18,0,0);

                var geom5_2 = new THREE.CylinderGeometry( 0.055,0.055, 0.05,64 );
                var mate5_2 = new THREE.MeshPhongMaterial({color: 0x000,
                    shininess: 80,
                    metal: true,
                    wrapAround: true,
                });
                var standoffchild5 = new THREE.Mesh(geom5_2 , mate5_2);
                standoffparent5.add(standoffchild5);
                geom5_2.rotateZ(-Math.PI * 0.5);
                standoffchild5.position.set(0.04,0,0);
    


// 6Th StandOff 
                var geom = new THREE.CylinderGeometry( 0.06,0.06, 0.33,65   );
                var mate = new THREE.MeshPhongMaterial({color: 0x000,
                    shininess: 80,
                    metal: true,
                    wrapAround: true,
                });
                var standoff6 = new THREE.Mesh(geom , mate);
                cube.add(standoff6);
                geom.rotateZ(-Math.PI * 0.5);
                standoff6.position.set(0.08,0,1.3);  


                var geom6_3 = new THREE.CylinderGeometry( 0.03,0.03, 0.02,64 );
                var mate6_3 = new THREE.MeshPhongMaterial({color: 0xffffff,
                    shininess: 80,
                    metal: true,
                    wrapAround: true,
                });
                geom6_3.rotateZ(-Math.PI * 0.5);
                var standoffparent6_3 = new THREE.Mesh(geom6_3 , mate6_3);
                standoff6.add(standoffparent6_3);
                standoffparent6_3.position.set(-0.17,0,0); 


                var geom6_1 = new THREE.CylinderGeometry( 0.03,0.03, 0.03,64);
                var mate6_1 = new THREE.MeshPhongMaterial({color: 0xffffff,
                    shininess: 80,
                    metal: true,
                    wrapAround: true,
                });
                geom6_1.rotateZ(-Math.PI * 0.5);
                var standoffparent6 = new THREE.Mesh(geom6_1 , mate6_1);
                standoff6.add(standoffparent6);
                standoffparent6.position.set(0.18,0,0);
    
                var geom6_2 = new THREE.CylinderGeometry( 0.055,0.055, 0.05,64 );
                var mate6_2 = new THREE.MeshPhongMaterial({color: 0x000,
                    shininess: 80,
                    metal: true,
                    wrapAround: true,
                });
                var standoffchild6 = new THREE.Mesh(geom6_2 , mate6_2);
                standoffparent6.add(standoffchild6);
                geom6_2.rotateZ(-Math.PI * 0.5);
                standoffchild6.position.set(0.04,0,0);

                StandOffSide = true;
            }



            var StandOffUpSide = false;
            document.getElementById('frame-3').defaultValue = 5;
            if (document.getElementById('frame-3').value >=6){
                // 7Th StandOff
                var geom = new THREE.CylinderGeometry( 0.06,0.06, 0.33,65   );
                var mate = new THREE.MeshPhongMaterial({color: 0x000,
                    shininess: 80,
                    metal: true,
                    wrapAround: true,
                });
                var standoff7 = new THREE.Mesh(geom , mate);
                cube.add(standoff7);
                geom.rotateZ(-Math.PI * 0.5);
                standoff7.position.set(0.08,-1.3,0);


                var geom7_3 = new THREE.CylinderGeometry( 0.03,0.03, 0.02,64 );
                var mate7_3 = new THREE.MeshPhongMaterial({color: 0xffffff,
                    shininess: 80,
                    metal: true,
                    wrapAround: true,
                });
                geom7_3.rotateZ(-Math.PI * 0.5);
                var standoffparent7_3 = new THREE.Mesh(geom7_3 , mate7_3);
                standoff7.add(standoffparent7_3);
                standoffparent7_3.position.set(-0.17,0,0); 



                var geom7_1 = new THREE.CylinderGeometry( 0.03,0.03, 0.03,64);
                var mate7_1 = new THREE.MeshPhongMaterial({color: 0xffffff,
                    shininess: 80,
                    metal: true,
                    wrapAround: true,
                });
                geom7_1.rotateZ(-Math.PI * 0.5);
                var standoffparent7 = new THREE.Mesh(geom7_1 , mate7_1);
                standoff7.add(standoffparent7);
                standoffparent7.position.set(0.18,0,0);

                var geom7_2 = new THREE.CylinderGeometry( 0.055,0.055, 0.05,64 );
                var mate7_2 = new THREE.MeshPhongMaterial({color: 0x000,
                    shininess: 80,
                    metal: true,
                    wrapAround: true,
                });
                var standoffchild7 = new THREE.Mesh(geom7_2 , mate7_2);
                standoffparent7.add(standoffchild7);
                geom7_2.rotateZ(-Math.PI * 0.5);
                standoffchild7.position.set(0.04,0,0);

// 8Th StandOff 

                var geom = new THREE.CylinderGeometry( 0.06,0.06, 0.33,65  );
                var mate = new THREE.MeshPhongMaterial({color: 0x000,
                    shininess: 80,
                    metal: true,
                    wrapAround: true,
                });
                var standoff8 = new THREE.Mesh(geom , mate);
                cube.add(standoff8);
                geom.rotateZ(-Math.PI * 0.5);
                standoff8.position.set(0.08,1.3,0); 



                var geom8_3 = new THREE.CylinderGeometry( 0.03,0.03, 0.02,64 );
                var mate8_3 = new THREE.MeshPhongMaterial({color: 0xffffff,
                    shininess: 80,
                    metal: true,
                    wrapAround: true,
                });
                geom8_3.rotateZ(-Math.PI * 0.5);
                var standoffparent8_3 = new THREE.Mesh(geom8_3 , mate8_3);
                standoff8.add(standoffparent8_3);
                standoffparent8_3.position.set(-0.17,0,0); 



                var geom8_1 = new THREE.CylinderGeometry( 0.03,0.03, 0.03,64);
                var mate8_1 = new THREE.MeshPhongMaterial({color: 0xffffff,
                    shininess: 80,
                    metal: true,
                    wrapAround: true,
                });
                geom8_1.rotateZ(-Math.PI * 0.5);
                var standoffparent8 = new THREE.Mesh(geom8_1 , mate8_1);
                standoff8.add(standoffparent8);
                standoffparent8.position.set(0.18,0,0);
    
                var geom8_2 = new THREE.CylinderGeometry( 0.055,0.055, 0.05,64 );
                var mate8_2 = new THREE.MeshPhongMaterial({color: 0x000,
                    shininess: 80,
                    metal: true,
                    wrapAround: true,
                });
                var standoffchild8 = new THREE.Mesh(geom8_2 , mate8_2);
                standoffparent8.add(standoffchild8);
                geom8_2.rotateZ(-Math.PI * 0.5);
                standoffchild8.position.set(0.04,0,0);

                StandOffUpSide = true;
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

            // var abc = gui.addFolder('Color' );
            // var conf = { color : '#ffae23' };    
            // gui.addColor(conf, 'color').onChange( function(colorValue) {
            // cube.material.color.set(colorValue)
            // material.needsUpdate = true
            // console.log("Select Value", cube.material.color)
            // })
            // abc.open();

            var getValue = document.getElementById('frame-5').selectedOptions[0].value;
            console.log("getValue", getValue);
            
            var colorMap = {
              'black': new THREE.Color(0, 0, 0),
              'white': new THREE.Color(1, 1, 1),
              'charcoal': new THREE.Color(0.3176470588235294, 0.3176470588235294, 0.3176470588235294),
              'grey': new THREE.Color(0.48627450980392156, 0.48627450980392156, 0.48627450980392156)
            };
            
            var newColor = colorMap[getValue.toLowerCase()];
            
            if (newColor && !newColor.equals(cube.material.color)) {
              cube.material.color.copy(newColor);
              cube.material.needsUpdate = false;
            }
            

            // var abc2 = gui.addFolder('Color frame' );
            // var conf2 = { color : '#ffae23' };    
            // gui.addColor(conf2, 'color').onChange( function(colorValue) {
            //     mesh.material.needsUpdate = false;

            // mesh.material.color.set(colorValue)
            // console.log("Select Glass Value", mesh.material.color)
            // material.needsUpdate = false
            // })
            // abc2.open();

            var getGlassValue = document.getElementById('frame-6').selectedOptions[0].value;
            console.log("getGlassValue", mesh.material.sheenColorMap );
            if(getGlassValue == 'frosted' || getGlassValue == 'Frosted') {
                console.log('Frosted');
                mesh.material.color.b = 240;
                mesh.material.color.g = 240;
                mesh.material.color.r = 234;
                mesh.material.needsUpdate = false;
                color.needsUpdate = false;
            }
            if(getGlassValue == 'Transparent Yellow') {
                console.log('Transparent Yellow');
                // mesh.material.color.b = 0;
                // mesh.material.color.g = 255;
                // mesh.material.color.r = 255;
                mesh.material.color.set(0xfff200)
                color.needsUpdate = false;
                material.needsUpdate = false;
            }
            if(getGlassValue == 'Transparent Orange') {
                // mesh.material.color.r = 255;
                // mesh.material.color.g = 170;
                mesh.material.color.set(0xfc8200)
                // mesh.material.color.b = 102;
                console.log("Orange" ,mesh.material.color.r);
                material.needsUpdate = false;
                color.needsUpdate = false;

            }
            if(getGlassValue == 'Transparent Green') {
                // mesh.material.color.b = 0;
                // mesh.material.color.g = 255;
                // mesh.material.color.r = 0;
                mesh.material.color.set(0x004200)
                    
                material.needsUpdate = false;
                color.needsUpdate = false;

            }
            if(getGlassValue == 'Transparent Blue') {
                // mesh.material.color.b = 255;
                // mesh.material.color.g = 0;
                // mesh.material.color.r = 0;
                mesh.material.color.set(0x0088ff)
                material.needsUpdate = false;
                color.needsUpdate = false;
                
            }




            

            // Iamge Section
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
                        material.needsUpdate = false
                        ImageMesh.material = material;
                        texture.needsUpdate = false;
                        material.map= texture
            })
                    }
                    reader.readAsDataURL(file);
                    
                });   


            var geo = new THREE.EdgesGeometry( mesh.geometry )
            var mat = new THREE.LineBasicMaterial({color :0xeeeeee ,transparent:true	,opacity :1,linewidth: 1})

            var wireframe = new THREE.LineSegments( geo, mat );
            // cube.add(wireframe)
            mesh.add(wireframe)
            // var geo3 = new THREE.EdgesGeometry( mesh.geometry )
            // var mat3 = new THREE.LineBasicMaterial({color :0xeeeeee ,transparent:false	,opacity :1,linewidth: 1})
            // var wireframe3 = new THREE.LineSegments( geo3, mat3 );

            // cube.add(wireframe3)
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
        
            standoffparent1.material.color.set(colorValue2, 'color')
            standoffparent2.material.color.set(colorValue2, 'color')
            standoffparent3.material.color.set(colorValue2, 'color')
            standoffparent4.material.color.set(colorValue2, 'color')

            standoffchild1.material.color.set(colorValue2, 'color')
            standoffchild2.material.color.set(colorValue2, 'color')
            standoffchild3.material.color.set(colorValue2, 'color')
            standoffchild4.material.color.set(colorValue2, 'color')


            standoff5.material.color.set(colorValue2, 'color')
            standoff6.material.color.set(colorValue2, 'color')
            standoff7.material.color.set(colorValue2, 'color')
            standoff8.material.color.set(colorValue2, 'color')

            standoffparent5.material.color.set(colorValue2, 'color')
            standoffparent6.material.color.set(colorValue2, 'color')
            standoffparent7.material.color.set(colorValue2, 'color')
            standoffparent8.material.color.set(colorValue2, 'color')
           
            standoffchild5.material.color.set(colorValue2, 'color')
            standoffchild6.material.color.set(colorValue2, 'color')
            standoffchild7.material.color.set(colorValue2, 'color')
            standoffchild8.material.color.set(colorValue2, 'color')

         
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


                standoffparent1.material.color.b = 1;
                standoffparent1.material.color.g = 1;
                standoffparent1.material.color.r = 1;

                standoffparent2.material.color.b = 1;
                standoffparent2.material.color.g = 1;
                standoffparent2.material.color.r = 1;

                standoffparent3.material.color.b = 1;
                standoffparent3.material.color.g = 1;
                standoffparent3.material.color.r = 1;

                standoffparent4.material.color.b = 1;
                standoffparent4.material.color.g = 1;
                standoffparent4.material.color.r = 1;

                standoffchild1.material.color.b = 0;
                standoffchild1.material.color.g = 0;
                standoffchild1.material.color.r = 0;

                standoffchild2.material.color.b = 0;
                standoffchild2.material.color.g = 0;
                standoffchild2.material.color.r = 0;

                standoffchild3.material.color.b = 0;
                standoffchild3.material.color.g = 0;
                standoffchild3.material.color.r = 0;

                standoffchild4.material.color.b = 0;
                standoffchild4.material.color.g = 0;
                standoffchild4.material.color.r = 0;

/////////////////---------------------------------------------------


                if (StandOffSide){
                standoff5.material.color.b = 0;
                standoff5.material.color.g = 0;
                standoff5.material.color.r = 0;

                standoff6.material.color.b = 0;
                standoff6.material.color.g = 0;
                standoff6.material.color.r = 0;
                standoffparent5.material.color.b = 1;
                standoffparent5.material.color.g = 1;
                standoffparent5.material.color.r = 1;

                standoffparent6.material.color.b = 1;
                standoffparent6.material.color.g = 1;
                standoffparent6.material.color.r = 1;


                standoffchild5.material.color.b = 0;
                standoffchild5.material.color.g = 0;
                standoffchild5.material.color.r = 0;

                standoffchild6.material.color.b = 0;
                standoffchild6.material.color.g = 0;
                standoffchild6.material.color.r = 0;
                }

                if (StandOffUpSide){

                standoff7.material.color.b = 0;
                standoff7.material.color.g = 0;
                standoff7.material.color.r = 0;

                standoff8.material.color.b = 0;
                standoff8.material.color.g = 0;
                standoff8.material.color.r = 0;
                
                standoffparent7.material.color.b = 1;
                standoffparent7.material.color.g = 1;
                standoffparent7.material.color.r = 1;

                standoffparent8.material.color.b = 1;
                standoffparent8.material.color.g = 1;
                standoffparent8.material.color.r = 1;

                standoffchild7.material.color.b = 0;
                standoffchild7.material.color.g = 0;
                standoffchild7.material.color.r = 0;

                standoffchild8.material.color.b = 0;
                standoffchild8.material.color.g = 0;
                standoffchild8.material.color.r = 0;
                
                }
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

                standoffparent1.material.color.b = 0;
                standoffparent1.material.color.g = 0;
                standoffparent1.material.color.r = 0;

                standoffparent2.material.color.b = 0;
                standoffparent2.material.color.g = 0;
                standoffparent2.material.color.r = 0;

                standoffparent3.material.color.b = 0;
                standoffparent3.material.color.g = 0;
                standoffparent3.material.color.r = 0;

                standoffparent4.material.color.b = 0;
                standoffparent4.material.color.g = 0;
                standoffparent4.material.color.r = 0;

                standoffchild1.material.color.b = 1;
                standoffchild1.material.color.g = 1;
                standoffchild1.material.color.r = 1;

                standoffchild2.material.color.b = 1;
                standoffchild2.material.color.g = 1;
                standoffchild2.material.color.r = 1;

                standoffchild3.material.color.b = 1;
                standoffchild3.material.color.g = 1;
                standoffchild3.material.color.r = 1;

                standoffchild4.material.color.b = 1;
                standoffchild4.material.color.g = 1;
                standoffchild4.material.color.r = 1;



                if (StandOffSide){
                standoff5.material.color.b = 1;
                standoff5.material.color.g = 1;
                standoff5.material.color.r = 1;

                standoff6.material.color.b = 1;
                standoff6.material.color.g = 1;
                standoff6.material.color.r = 1;

                standoffparent5.material.color.b = 0;
                standoffparent5.material.color.g = 0;
                standoffparent5.material.color.r = 0;

                standoffparent6.material.color.b = 0;
                standoffparent6.material.color.g = 0;
                standoffparent6.material.color.r = 0;

                standoffchild5.material.color.b = 1;
                standoffchild5.material.color.g = 1;
                standoffchild5.material.color.r = 1;

                standoffchild6.material.color.b = 1;
                standoffchild6.material.color.g = 1;
                standoffchild6.material.color.r = 1;
                }

                if (StandOffUpSide){
                standoff7.material.color.b = 1;
                standoff7.material.color.g = 1;
                standoff7.material.color.r = 1;

                standoff8.material.color.b = 1;
                standoff8.material.color.g = 1;
                standoff8.material.color.r = 1;

                standoffparent7.material.color.b = 0;
                standoffparent7.material.color.g = 0;
                standoffparent7.material.color.r = 0;

                standoffparent8.material.color.b = 0;
                standoffparent8.material.color.g = 0;
                standoffparent8.material.color.r = 0;

                standoffchild7.material.color.b = 1;
                standoffchild7.material.color.g = 1;
                standoffchild7.material.color.r = 1;

                standoffchild8.material.color.b = 1;
                standoffchild8.material.color.g = 1;
                standoffchild8.material.color.r = 1;
                }
                
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



                standoffparent1.material.color.b = 0;
                standoffparent1.material.color.g = 0;
                standoffparent1.material.color.r = 0;

                standoffparent2.material.color.b = 0;
                standoffparent2.material.color.g = 0;
                standoffparent2.material.color.r = 0;

                standoffparent3.material.color.b = 0;
                standoffparent3.material.color.g = 0;
                standoffparent3.material.color.r = 0;

                standoffparent4.material.color.b = 0;
                standoffparent4.material.color.g = 0;
                standoffparent4.material.color.r = 0;


                standoffchild1.material.color.b = 192;
                standoffchild1.material.color.g = 192;
                standoffchild1.material.color.r = 192;

                standoffchild2.material.color.b = 192;
                standoffchild2.material.color.g = 192;
                standoffchild2.material.color.r = 192;

                standoffchild3.material.color.b = 192;
                standoffchild3.material.color.g = 192;
                standoffchild3.material.color.r = 192;

                standoffchild4.material.color.b = 192;
                standoffchild4.material.color.g = 192;
                standoffchild4.material.color.r = 192;

                



                if (StandOffSide ){
                standoff5.material.color.b = 192;
                standoff5.material.color.g = 192;
                standoff5.material.color.r = 192;

                standoff6.material.color.b = 192;
                standoff6.material.color.g = 192;
                standoff6.material.color.r = 192;

                standoffparent5.material.color.b = 0;
                standoffparent5.material.color.g = 0;
                standoffparent5.material.color.r = 0;

                standoffparent6.material.color.b = 0;
                standoffparent6.material.color.g = 0;
                standoffparent6.material.color.r = 0;


                standoffchild5.material.color.b = 192;
                standoffchild5.material.color.g = 192;
                standoffchild5.material.color.r = 192;

                standoffchild6.material.color.b = 192;
                standoffchild6.material.color.g = 192;
                standoffchild6.material.color.r = 192;

                }
                if (StandOffUpSide){

                standoff7.material.color.b = 192;
                standoff7.material.color.g = 192;
                standoff7.material.color.r = 192;

                standoff8.material.color.b = 192;
                standoff8.material.color.g = 192;
                standoff8.material.color.r = 192;



                standoffparent7.material.color.b = 0;
                standoffparent7.material.color.g = 0;
                standoffparent7.material.color.r = 0;

                standoffparent8.material.color.b = 0;
                standoffparent8.material.color.g = 0;
                standoffparent8.material.color.r = 0;


                standoffchild7.material.color.b = 192;
                standoffchild7.material.color.g = 192;
                standoffchild7.material.color.r = 192;

                standoffchild8.material.color.b = 192;
                standoffchild8.material.color.g = 192;
                standoffchild8.material.color.r = 192;
                }
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

               

                standoffparent1.material.color.b = 0;
                standoffparent1.material.color.g = 0;
                standoffparent1.material.color.r = 0;

                standoffparent2.material.color.b = 0;
                standoffparent2.material.color.g = 0;
                standoffparent2.material.color.r = 0;

                standoffparent3.material.color.b = 0;
                standoffparent3.material.color.g = 0;
                standoffparent3.material.color.r = 0;

                standoffparent4.material.color.b = 0;
                standoffparent4.material.color.g = 0;
                standoffparent4.material.color.r = 0;

                standoffchild1.material.color.b = 0;
                standoffchild1.material.color.g = 215;
                standoffchild1.material.color.r = 255;

                standoffchild2.material.color.b = 0;
                standoffchild2.material.color.g = 215;
                standoffchild2.material.color.r = 255;

                standoffchild3.material.color.b = 0;
                standoffchild3.material.color.g = 215;
                standoffchild3.material.color.r = 255;

                standoffchild4.material.color.b = 0;
                standoffchild4.material.color.g = 215;
                standoffchild4.material.color.r = 255;





                if (StandOffSide){
                standoff5.material.color.b = 0;
                standoff5.material.color.g = 215;
                standoff5.material.color.r = 255;

                standoff6.material.color.b = 0;
                standoff6.material.color.g = 215;
                standoff6.material.color.r = 255;

                standoffparent5.material.color.b = 0;
                standoffparent5.material.color.g = 0;
                standoffparent5.material.color.r = 0;

                standoffparent6.material.color.b = 0;
                standoffparent6.material.color.g = 0;
                standoffparent6.material.color.r = 0;

                standoffchild5.material.color.b = 0;
                standoffchild5.material.color.g = 215;
                standoffchild5.material.color.r = 255;

                standoffchild6.material.color.b = 0;
                standoffchild6.material.color.g = 215;
                standoffchild6.material.color.r = 255;


                }
                if (StandOffUpSide){
                standoff7.material.color.b = 0;
                standoff7.material.color.g = 215;
                standoff7.material.color.r = 255;

                standoff8.material.color.b = 0;
                standoff8.material.color.g = 215;
                standoff8.material.color.r = 255;

               
                standoffparent7.material.color.b = 0;
                standoffparent7.material.color.g = 0;
                standoffparent7.material.color.r = 0;

                standoffparent8.material.color.b = 0;
                standoffparent8.material.color.g = 0;
                standoffparent8.material.color.r = 0;

                standoffchild7.material.color.b = 0;
                standoffchild7.material.color.g = 215;
                standoffchild7.material.color.r = 255;

                standoffchild8.material.color.b = 0;
                standoffchild8.material.color.g = 215;
                standoffchild8.material.color.r = 255;
                }
            }



            // REnder Function
            function animate() {
            requestAnimationFrame( animate  );

            // // required if controls.enableDamping or controls.autoRotate are set to true
            controls.update();
            renderer.render( scene ,camera  );
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
        // });
        }
        setTimeout(boxModal, 1000)
    }, [checkT])
    
}


export default Testing;