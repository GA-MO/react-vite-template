import { Canvas, useFrame } from '@react-three/fiber'

import * as THREE from 'three'
import GSAP from 'gsap'

import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'
import { useMemo, useRef } from 'react'
import { Mesh, ShaderMaterial } from 'three'
import { useControls } from 'leva'

// Helper function to convert hex to RGB
function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? [parseInt(result[1], 16) / 255, parseInt(result[2], 16) / 255, parseInt(result[3], 16) / 255]
    : [1, 1, 1]
}

function Geometry() {
  const settings: Record<string, { start: number; end: number }> = {
    // vertex
    uFrequency: {
      start: 0,
      end: 4
    },
    uAmplitude: {
      start: 4,
      end: 4
    },
    uDensity: {
      start: 1,
      end: 1
    },
    uStrength: {
      start: 0,
      end: 1.1
    },
    // fragment
    uDeepPurple: {
      // max 1
      start: 1,
      end: 0
    },
    uOpacity: {
      // max 1
      start: 0.1,
      end: 0.66
    }
  }

  const uniforms = useMemo(
    () => ({
      uFrequency: { value: settings.uFrequency.start },
      uAmplitude: { value: settings.uAmplitude.start },
      uDensity: { value: settings.uDensity.start },
      uStrength: { value: settings.uStrength.start },
      uDeepPurple: { value: settings.uDeepPurple.start },
      uOpacity: { value: settings.uOpacity.start },
      uColor: { value: new THREE.Vector3(1.0, 1.0, 1.0) } // Default white color
    }),
    []
  )

  const shaderRef = useRef<ShaderMaterial>(null)
  const meshRef = useRef<Mesh>(null)

  const geometryControls = useControls('Geometry', {
    uFrequency: {
      value: settings.uFrequency.start,
      min: 0,
      max: 10
    },
    uAmplitude: {
      value: settings.uAmplitude.start,
      min: 0,
      max: 10
    },
    uDensity: {
      value: settings.uDensity.start,
      min: 0,
      max: 10
    },
    uStrength: {
      value: settings.uStrength.start,
      min: 0,
      max: 10
    },
    uDeepPurple: {
      value: settings.uDeepPurple.start,
      min: 0,
      max: 1
    },
    uOpacity: {
      value: settings.uOpacity.start,
      min: 0,
      max: 1
    },
    color: {
      value: '#ffffff'
    },
    rotationX: {
      value: 0,
      min: -10,
      max: 10
    },
    rotationY: {
      value: 0,
      min: -10,
      max: 10
    },
    rotationZ: {
      value: 0,
      min: -10,
      max: 10
    }
  })

  const cameraControls = useControls('Camera', {
    positionX: {
      value: 0,
      min: -10,
      max: 10
    },
    positionY: {
      value: 0,
      min: -10,
      max: 10
    },
    positionZ: {
      value: 4,
      min: -10,
      max: 10
    }
  })

  useFrame((state) => {
    if (meshRef.current && shaderRef.current) {
      GSAP.to(meshRef.current.rotation, {
        x: geometryControls.rotationX,
        y: geometryControls.rotationY,
        z: geometryControls.rotationZ
      })

      for (const key in settings) {
        if (settings[key].start !== settings[key].end) {
          GSAP.to(shaderRef.current?.uniforms?.[key], {
            value: settings[key].start + (settings[key].end - settings[key].start) * 0.05
          })
        }
      }

      // Update color from hex
      const [r, g, b] = hexToRgb(geometryControls.color)
      GSAP.to(shaderRef.current.uniforms.uColor.value, {
        x: r,
        y: g,
        z: b
      })

      // const mouseX = state.pointer.x * 4
      // const mouseY = state.pointer.y * 2

      GSAP.to(shaderRef.current.uniforms.uFrequency, { value: geometryControls.uFrequency })
      GSAP.to(shaderRef.current.uniforms.uAmplitude, { value: geometryControls.uAmplitude })
      GSAP.to(shaderRef.current.uniforms.uDensity, { value: geometryControls.uDensity })
      GSAP.to(shaderRef.current.uniforms.uStrength, { value: geometryControls.uStrength })

      // meshRef.current?.scale.set(
      //   state.viewport.width < state.viewport.height ? 0.75 : 1,
      //   state.viewport.width < state.viewport.height ? 0.75 : 1,
      //   state.viewport.width < state.viewport.height ? 0.75 : 1
      // )

      GSAP.to(state.camera.position, {
        x: cameraControls.positionX,
        y: cameraControls.positionY,
        z: cameraControls.positionZ
      })
    }
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 64]} />
      <shaderMaterial
        ref={shaderRef}
        wireframe
        blending={THREE.AdditiveBlending}
        transparent
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}

export default function MyGeometry() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45, near: 0.1, far: 1000 }}
      gl={{ antialias: true, alpha: true }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh'
      }}
    >
      <ambientLight intensity={0.5} />
      <Geometry />
    </Canvas>
  )
}
