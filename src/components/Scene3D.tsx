"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useInView, useReducedMotion } from "framer-motion";
import * as THREE from "three";

const POINT_COUNT = 130;
const PACKET_COUNT = 28;

function buildField() {
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i < POINT_COUNT; i += 1) {
    pts.push(
      new THREE.Vector3(
        (Math.random() - 0.5) * 8.5,
        (Math.random() - 0.5) * 4.6,
        (Math.random() - 0.5) * 3.2,
      ),
    );
  }

  const positions = new Float32Array(POINT_COUNT * 3);
  pts.forEach((point, index) => point.toArray(positions, index * 3));

  const lines: number[] = [];
  for (let i = 0; i < pts.length; i += 1) {
    for (let j = i + 1; j < pts.length; j += 1) {
      if (pts[i].distanceTo(pts[j]) < 1.15 && lines.length < 1500) {
        lines.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z);
      }
    }
  }

  return { positions, linePositions: new Float32Array(lines) };
}

// Built once at module load so the layout stays stable across re-renders.
const field = buildField();
const packetPositions = new Float32Array(PACKET_COUNT * 3);

/** Soft round sprite, because WebGL points are square by default. */
function makeDotTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 64;
  const context = canvas.getContext("2d");
  if (context) {
    const glow = context.createRadialGradient(32, 32, 0, 32, 32, 32);
    glow.addColorStop(0, "rgba(255,255,255,1)");
    glow.addColorStop(0.45, "rgba(255,255,255,0.9)");
    glow.addColorStop(1, "rgba(255,255,255,0)");
    context.fillStyle = glow;
    context.fillRect(0, 0, 64, 64);
  }
  return new THREE.CanvasTexture(canvas);
}

function NetworkField() {
  const reduceMotion = useReducedMotion();
  const groupRef = useRef<THREE.Group>(null);
  const packetAttr = useRef<THREE.BufferAttribute>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const dot = useMemo(() => makeDotTexture(), []);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      pointer.current.x = event.clientX / window.innerWidth - 0.5;
      pointer.current.y = event.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((state) => {
    if (reduceMotion || !groupRef.current) return;
    const elapsed = state.clock.getElapsedTime();

    // Slow drift, eased toward the cursor.
    const group = groupRef.current;
    group.rotation.y += (elapsed * 0.05 + pointer.current.x * 0.6 - group.rotation.y) * 0.04;
    group.rotation.x += (Math.sin(elapsed * 0.22) * 0.05 + pointer.current.y * 0.3 - group.rotation.x) * 0.04;

    // Bright packets travel along the network's connections.
    const lines = field.linePositions;
    const segments = lines.length / 6;
    if (!packetAttr.current || segments === 0) return;
    for (let i = 0; i < PACKET_COUNT; i += 1) {
      const start = ((i * 37) % segments) * 6;
      const t = (i / PACKET_COUNT + elapsed * (0.25 + (i % 5) * 0.08)) % 1;
      for (let axis = 0; axis < 3; axis += 1) {
        packetPositions[i * 3 + axis] =
          lines[start + axis] + (lines[start + 3 + axis] - lines[start + axis]) * t;
      }
    }
    packetAttr.current.needsUpdate = true;
  });

  return (
    <group ref={groupRef} position={[1.6, 0.2, 0]}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[field.positions, 3]} />
        </bufferGeometry>
        <pointsMaterial map={dot} depthWrite={false} size={0.07} color="#22d3ee" transparent opacity={0.9} />
      </points>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[field.linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#38bdf8" transparent opacity={0.32} />
      </lineSegments>

      {reduceMotion ? null : (
        <points frustumCulled={false}>
          <bufferGeometry>
            <bufferAttribute ref={packetAttr} attach="attributes-position" args={[packetPositions, 3]} />
          </bufferGeometry>
          <pointsMaterial map={dot} depthWrite={false} size={0.16} color="#a5f3fc" transparent opacity={1} />
        </points>
      )}
    </group>
  );
}

export default function Scene3D() {
  // Rendering stops once the hero scrolls away, so the rest of the page keeps its full frame rate.
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(wrapperRef);

  return (
    <div
      ref={wrapperRef}
      className="pointer-events-none absolute inset-0 -z-10 opacity-70 dark:opacity-100"
    >
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 48 }}
        dpr={[1, 1.5]}
        frameloop={isVisible ? "always" : "never"}
      >
        <NetworkField />
      </Canvas>
    </div>
  );
}
