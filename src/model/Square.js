/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function SquareModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/square.gltf');
  return (
    <group
      ref={group}
      position={props.position}
      onClick={() => {
        props.clickMethod(props.me, props.place);
      }}
      scale={props.scale}
      dispose={null}
    >
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials['Material.005']}
        position={[1.14, 1.14, 0.48]}
      />
    </group>
  );
}

useGLTF.preload('/square.gltf');
