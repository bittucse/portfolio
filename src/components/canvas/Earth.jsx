import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls,Preload,useGLTF } from "@react-three/drei"

import CanvasLoader from '../Loader'

const Earth = () => {
  const earth=useGLTF('./planet/scene.gltf')
  return (
    <primitive object={earth.scene}
      scale={2.5}
      position-y={0} rotation-y={0}
    />
  )
}


const EarthCanvas=()=>{
  return(
    // to show 3D components we have to use canvas
    <Canvas shadows
    frameloop="demand"
    gl={{preserveDrawingBuffer:true}}
    camera={{ fov:45,near:0.1, far:200,position:[-4,3,6] }}>
    {/* suspense is going to ensure that while our model is loading we have something to show */}
    {/* if not loaded then showCanvas loader else show OrbitControl */}

    {/* Ordbit control used to modify and move around using mouse */}

      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <Earth/>
      </Suspense>
    </Canvas>

  )
}

export default EarthCanvas;