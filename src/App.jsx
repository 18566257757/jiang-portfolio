import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {
  ArrowRight,
  Building2,
  Database,
  DraftingCompass,
  FileCheck2,
  FlaskConical,
  Mail,
  MoveUpRight,
  Phone,
  Waves,
  X,
} from 'lucide-react';
import GlassSurface from './components/GlassSurface.jsx';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Profile', href: '#profile' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Capabilities', href: '#strengths' },
  { label: 'Contact', href: '#contact' },
];

const assetPath = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

function getSectionScrollTop(href) {
  const target = document.querySelector(href);

  if (!target) {
    return null;
  }

  if (href === '#home') {
    return 0;
  }

  const headerOffset = 118;
  return Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerOffset);
}

function handleSectionNavigation(event, href, afterNavigate) {
  const target = document.querySelector(href);

  if (!target) {
    afterNavigate?.();
    return;
  }

  event.preventDefault();
  afterNavigate?.();

  window.requestAnimationFrame(() => {
    const top = getSectionScrollTop(href);

    if (top === null) {
      return;
    }

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    window.history.pushState(null, '', href);
    window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });
}

const profileSkills = [
  {
    title: 'ESG & GHG',
    detail: 'HKEX ESG Reporting Code, Scope 1/2/3 accounting, boundary setting, emission factors, and disclosure QA/QC.',
  },
  {
    title: 'Data & Automation',
    detail: 'Python, SQL, large-record processing, issuer intelligence, and automated report generation.',
  },
  {
    title: 'BIM & Carbon',
    detail: 'Revit/BIM, AutoCAD, engineering drawing review, MiC, and carbon-emission calculation.',
  },
  {
    title: 'Water Systems',
    detail: 'Treatment design, secondary clarification, sand filtration, environmental monitoring, and water reuse.',
  },
];

const internshipExperience = [
  {
    time: '07/2026 - 08/2026',
    role: 'PAL Advisory Limited - Intern',
    details: [
      'Applied the HKEX ESG Reporting Code to review annual and ESG reports and quantify Scope 1, 2 and 3 GHG emissions for three companies, defining organizational and operational boundaries and applying appropriate emission factors.',
      'Prepared traceable calculation workpapers and drafted, edited, and quality-checked ESG disclosures while documenting data sources, assumptions, gaps, and inconsistencies.',
      'Developed a Codex-assisted workflow to batch-process 100,000+ electronic-forensics records and automation scripts to organize 1,000+ SFC records in a local database.',
      'Built a Python- and SQL-based platform that processes 3,500+ HKEX-listed issuer records per run, generates tailored reports, and reduces end-to-end processing time by more than 90%.',
    ],
  },
  {
    time: '07/2025 - 08/2025',
    role: 'China Construction Installation Engineering Co., Ltd. - Intern',
    details: [
      'Reviewed engineering drawings and Revit/BIM models to support coordination and site inspections for subway, hospital, and water-treatment-plant projects.',
      'Used Revit quantity information to calculate project carbon emissions and support green-building and sustainability assessments.',
      'Evaluated MiC and other low-carbon construction approaches by considering material waste, transportation demand, and site-related emissions.',
      'Researched water-reuse technologies in sewage treatment and assessed environmental benefits and energy-efficiency improvement opportunities.',
    ],
  },
  {
    time: '05/2025 - 06/2025',
    role: 'WWF-Hong Kong - Green City Initiative Project Intern',
    details: [
      'Applied point cloud 3D scanning and modeling to simulate rooftop renovation of cage homes in Sham Shui Po.',
      'Conducted feasibility studies on solar-energy integration to support low-carbon rooftop design.',
      'Built a Python-based data-analysis system to process 2,000+ retail records for the BYO Cup campaign.',
      "Co-authored sustainability research reports aligned with WWF-Hong Kong's conservation objectives.",
    ],
  },
  {
    time: '07/2021',
    role: 'Shenzhen Guochen Environmental Protection Technology Co., Ltd. - Intern',
    details: [
      'Completed water-quality sampling, on-site testing, data recording, and analysis across the environmental monitoring cycle.',
      'Drafted environmental monitoring reports, proposed optimization measures, and supported project implementation planning.',
    ],
  },
];

const workExperience = [
  {
    time: '09/2025 - 06/2026',
    role: 'College of Undergraduate Studies, PolyU - Part-time Student Assistant',
    details: [
      'Supported faculty research on family and youth development through data collection, data entry, and preliminary report drafting while assisting with student activities.',
    ],
  },
];

const projects = [
  {
    title: 'The Role of pH in Arsenic Sequestration via Iron-Arsenic Coprecipitation',
    type: 'Final Year Project / 2025 - 2026',
    summary:
      'An experimental investigation into how strongly alkaline conditions affect arsenate sequestration, treatment performance, and residual management.',
    details: [
      'Investigated Fe(III)-As(V) coprecipitation at pH 7 and pH 12 using a fixed Fe:As molar ratio of 10:1.',
      'Conducted time-resolved aqueous analysis, dynamic light scattering, zeta-potential measurements, SEM-EDS, XRD, ATR-FTIR, sequential extraction, and Visual MINTEQ aqueous-speciation modeling.',
      'Found that Fe precipitated rapidly at both pH levels, while As(V) removal was nearly complete at pH 7 but only 12.66% after 24 hours at pH 12, informing pH control and treatment-process selection.',
    ],
    tags: ['Arsenic removal', 'Fe(III)-As(V)', 'SEM-EDS / XRD', 'Visual MINTEQ'],
  },
  {
    title: 'Wastewater Treatment Plant Design',
    type: 'Integrated Project for Environmental Control',
    summary:
      'A treatment-train design developed from influent characteristics, target effluent quality, process sizing, and performance verification.',
    details: [
      'Selected and integrated appropriate wastewater-treatment units based on influent characteristics and target effluent quality.',
      'Performed engineering calculations for secondary clarification and sand filtration, including unit sizing and solids-removal performance checks.',
      'Calculated final effluent TSS, verified the treatment train against the required target, and documented the design calculations in a technical report.',
    ],
    tags: ['Process design', 'Secondary clarification', 'Sand filtration', 'Effluent TSS'],
  },
  {
    title: 'Green Charge Initiative Project',
    type: 'Campus Sustainability Project / 05/2024',
    summary:
      'A feasibility-led campus charging proposal connecting solar output, user demand, site planning, maintenance, and participation incentives.',
    details: [
      'Analyzed campus solar-panel output, charging demand, expected usage, and energy consumption to assess project feasibility.',
      'Coordinated charging-station site selection and prepared a maintenance plan; proposed shared power-bank stations with a Green Coin incentive mechanism.',
    ],
    tags: ['Solar feasibility', 'Charging demand', 'Site planning', 'Green Coin'],
  },
];

const strengths = [
  {
    icon: FileCheck2,
    title: 'ESG & GHG Accounting',
    copy:
      'HKEX ESG Reporting Code, Scope 1/2/3 accounting, boundary setting, emission-factor application, traceable workpapers, and disclosure QA/QC.',
  },
  {
    icon: Database,
    title: 'Environmental Data Automation',
    copy:
      'Python and SQL workflows that turn large, fragmented records into prioritized information, tailored reports, and repeatable processing systems.',
  },
  {
    icon: Waves,
    title: 'Water & Wastewater Engineering',
    copy:
      'Treatment-train selection, secondary clarification, sand filtration, effluent verification, water-quality monitoring, and water-reuse research.',
  },
  {
    icon: FlaskConical,
    title: 'Laboratory & Process Research',
    copy:
      'Experimental design and interpretation across aqueous analysis, particle characterization, spectroscopy, mineralogy, sequential extraction, and speciation modeling.',
  },
  {
    icon: Building2,
    title: 'Low-Carbon Built Environment',
    copy:
      'Engineering drawing review, Revit/BIM quantity information, carbon-emission calculation, MiC evaluation, and multidisciplinary site coordination.',
  },
  {
    icon: DraftingCompass,
    title: 'Engineering-First Thinking',
    copy:
      'I frame environmental problems through system boundaries, measurable evidence, engineering feasibility, and transparent assumptions before recommending action.',
  },
];

function smoothstep(edge0, edge1, value) {
  const x = Math.min(1, Math.max(0, (value - edge0) / (edge1 - edge0)));
  return x * x * (3 - 2 * x);
}

function createCanvasTexture(canvas, colorSpace = THREE.NoColorSpace) {
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = colorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.needsUpdate = true;
  return texture;
}

function createDerivedEarthMaps(surfaceImage, cloudImage = surfaceImage) {
  const surfaceWidth = surfaceImage.naturalWidth || surfaceImage.width;
  const surfaceHeight = surfaceImage.naturalHeight || surfaceImage.height;
  const sourceWidth = Math.min(2048, surfaceWidth);
  const sourceHeight = Math.round(sourceWidth * (surfaceHeight / surfaceWidth));
  const surfaceCanvas = document.createElement('canvas');
  const cloudSourceCanvas = document.createElement('canvas');
  const bumpCanvas = document.createElement('canvas');
  const specularCanvas = document.createElement('canvas');
  const cloudCanvas = document.createElement('canvas');

  [surfaceCanvas, cloudSourceCanvas, bumpCanvas, specularCanvas, cloudCanvas].forEach((canvas) => {
    canvas.width = sourceWidth;
    canvas.height = sourceHeight;
  });

  const surfaceContext = surfaceCanvas.getContext('2d', { willReadFrequently: true });
  const cloudSourceContext = cloudSourceCanvas.getContext('2d', { willReadFrequently: true });
  const bumpContext = bumpCanvas.getContext('2d');
  const specularContext = specularCanvas.getContext('2d');
  const cloudContext = cloudCanvas.getContext('2d');

  surfaceContext.drawImage(surfaceImage, 0, 0, sourceWidth, sourceHeight);
  cloudSourceContext.drawImage(cloudImage, 0, 0, sourceWidth, sourceHeight);

  const sourcePixels = surfaceContext.getImageData(0, 0, sourceWidth, sourceHeight);
  const cloudSourcePixels = cloudSourceContext.getImageData(0, 0, sourceWidth, sourceHeight);
  const bumpPixels = bumpContext.createImageData(sourceWidth, sourceHeight);
  const specularPixels = specularContext.createImageData(sourceWidth, sourceHeight);
  const cloudPixels = cloudContext.createImageData(sourceWidth, sourceHeight);

  for (let i = 0; i < sourcePixels.data.length; i += 4) {
    const red = sourcePixels.data[i];
    const green = sourcePixels.data[i + 1];
    const blue = sourcePixels.data[i + 2];
    const max = Math.max(red, green, blue);
    const min = Math.min(red, green, blue);
    const lightness = (max + min) * 0.5;
    const saturation = max === 0 ? 0 : (max - min) / max;
    const cloudRed = cloudSourcePixels.data[i];
    const cloudGreen = cloudSourcePixels.data[i + 1];
    const cloudBlue = cloudSourcePixels.data[i + 2];
    const cloudMax = Math.max(cloudRed, cloudGreen, cloudBlue);
    const cloudMin = Math.min(cloudRed, cloudGreen, cloudBlue);
    const cloudLightness = (cloudMax + cloudMin) * 0.5;
    const cloudSaturation = cloudMax === 0 ? 0 : (cloudMax - cloudMin) / cloudMax;
    const cloudDelta = ((cloudRed - red) + (cloudGreen - green) + (cloudBlue - blue)) / 3;
    const ocean =
      smoothstep(7, 68, blue - Math.max(red, green) * 0.8) *
      smoothstep(38, 126, blue) *
      (1 - smoothstep(120, 214, red + green));
    const cloud =
      smoothstep(18, 76, cloudDelta) *
      smoothstep(104, 238, cloudLightness) *
      (1 - smoothstep(0.2, 0.58, cloudSaturation));
    const land = Math.max(0, 1 - ocean);
    const vegetation = smoothstep(78, 176, green) * (1 - smoothstep(178, 235, lightness));
    const desert = smoothstep(84, 164, red) * smoothstep(66, 142, green) * (1 - ocean);
    const bump = Math.round(44 + land * 54 + vegetation * 18 + desert * 15);
    const specular = Math.round(9 + ocean * 190);
    const cloudAlpha = Math.round(Math.min(156, cloud * 215));

    bumpPixels.data[i] = bump;
    bumpPixels.data[i + 1] = bump;
    bumpPixels.data[i + 2] = bump;
    bumpPixels.data[i + 3] = 255;

    specularPixels.data[i] = specular;
    specularPixels.data[i + 1] = specular;
    specularPixels.data[i + 2] = specular;
    specularPixels.data[i + 3] = 255;

    cloudPixels.data[i] = 232;
    cloudPixels.data[i + 1] = 244;
    cloudPixels.data[i + 2] = 255;
    cloudPixels.data[i + 3] = cloudAlpha;
  }

  bumpContext.putImageData(bumpPixels, 0, 0);
  specularContext.putImageData(specularPixels, 0, 0);
  cloudContext.putImageData(cloudPixels, 0, 0);

  return {
    bumpTexture: createCanvasTexture(bumpCanvas),
    cloudTexture: createCanvasTexture(cloudCanvas, THREE.SRGBColorSpace),
    specularTexture: createCanvasTexture(specularCanvas),
  };
}

function EarthBackdrop() {
  const backdropRef = useRef(null);
  const canvasRef = useRef(null);
  const earthSceneRef = useRef(null);
  const progressRef = useRef(0);
  const targetProgressRef = useRef(0);

  useEffect(() => {
    const updateProgress = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const nextProgress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      targetProgressRef.current = nextProgress;
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  useEffect(() => {
    const mount = earthSceneRef.current;

    if (!mount) {
      return undefined;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0, 4.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    renderer.domElement.className = 'earth-webgl-canvas';
    mount.appendChild(renderer.domElement);

    const earthGroup = new THREE.Group();
    scene.add(earthGroup);

    const earthModelGroup = new THREE.Group();
    earthGroup.add(earthModelGroup);

    const cloudGeometry = new THREE.SphereGeometry(1.022, 96, 96);
    const cloudMaterial = new THREE.MeshLambertMaterial({
      color: 0xf2f8ff,
      transparent: true,
      opacity: 0.05,
      depthWrite: false,
      alphaTest: 0.18,
    });
    const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
    cloudMesh.visible = false;
    cloudMesh.renderOrder = 2;
    earthGroup.add(cloudMesh);

    const atmosphereGeometry = new THREE.SphereGeometry(1.038, 96, 96);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      uniforms: {
        glowColor: { value: new THREE.Color(0x7fdcff) },
      },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 glowColor;
        varying vec3 vNormal;
        void main() {
          float rim = pow(0.66 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.8);
          gl_FragColor = vec4(glowColor, clamp(rim, 0.0, 0.24));
        }
      `,
      side: THREE.BackSide,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphereMesh);

    scene.add(new THREE.HemisphereLight(0x7fcfff, 0x020406, 0.48));

    const keyLight = new THREE.DirectionalLight(0xffffff, 4.25);
    keyLight.position.set(-3.6, 1.7, 4.9);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x2f7eb6, 0.34);
    fillLight.position.set(2.8, 0.4, 1.3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x77dbff, 2.05);
    rimLight.position.set(3.6, -0.8, 2.1);
    scene.add(rimLight);

    const modelLoader = new GLTFLoader();
    let disposed = false;
    let earthModel = null;
    const modelGeometries = new Set();
    const modelMaterials = new Set();

    modelLoader.loadAsync(assetPath('assets/nasa-earth.glb')).then((gltf) => {
      if (disposed) {
        return;
      }

      earthModel = gltf.scene;
      const modelBox = new THREE.Box3().setFromObject(earthModel);
      const center = modelBox.getCenter(new THREE.Vector3());
      const size = modelBox.getSize(new THREE.Vector3());
      const modelScale = 2 / Math.max(size.x, size.y, size.z);

      earthModel.position.sub(center);
      earthModel.scale.setScalar(modelScale);
      earthModel.rotation.set(0, Math.PI * 0.56, 0);

      earthModel.traverse((child) => {
        if (!child.isMesh) {
          return;
        }

        modelGeometries.add(child.geometry);
        const materials = Array.isArray(child.material) ? child.material : [child.material];
        materials.forEach((material) => {
          if (!material) {
            return;
          }

          modelMaterials.add(material);
          material.depthWrite = true;
          material.depthTest = true;
          material.toneMapped = true;

          if (material.map) {
            material.map.colorSpace = THREE.SRGBColorSpace;
            material.map.anisotropy = Math.min(16, renderer.capabilities.getMaxAnisotropy());
          }

          if ('roughness' in material) {
            material.roughness = 0.7;
          }

          if ('metalness' in material) {
            material.metalness = 0;
          }

          if ('envMapIntensity' in material) {
            material.envMapIntensity = 0.28;
          }

          material.needsUpdate = true;
        });
      });

      earthModelGroup.add(earthModel);
    }).catch(() => undefined);

    const resize = () => {
      const width = Math.max(1, mount.clientWidth);
      const height = Math.max(1, mount.clientHeight);
      renderer.setPixelRatio(Math.min((window.devicePixelRatio || 1) * 1.35, 2.5));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    resize();

    let animationFrame = 0;
    const render = () => {
      const nextProgress = targetProgressRef.current;
      progressRef.current += (nextProgress - progressRef.current) * 0.085;

      if (Math.abs(nextProgress - progressRef.current) < 0.0005) {
        progressRef.current = nextProgress;
      }

      const p = progressRef.current;
      backdropRef.current?.style.setProperty('--earth-progress', p.toFixed(5));
      earthGroup.rotation.x = 0.34 + p * 0.32;
      earthGroup.rotation.y = -0.5 + p * 4.45;
      earthGroup.rotation.z = 0.03 + p * 0.22;
      cloudMesh.rotation.y = -p * 0.22;
      cloudMesh.rotation.x = p * 0.025;
      atmosphereMesh.rotation.copy(earthGroup.rotation);
      atmosphereMesh.rotation.y *= 0.74;
      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      disposed = true;
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      mount.removeChild(renderer.domElement);
      if (earthModel) {
        earthModelGroup.remove(earthModel);
      }
      modelGeometries.forEach((geometry) => geometry.dispose());
      modelMaterials.forEach((material) => {
        Object.values(material).forEach((value) => {
          if (value?.isTexture) {
            value.dispose();
          }
        });
        material.dispose();
      });
      cloudGeometry.dispose();
      cloudMaterial.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (!canvas || !context) {
      return undefined;
    }

    const particles = Array.from({ length: 110 }, (_, index) => ({
      angle: (index / 110) * Math.PI * 2 + Math.sin(index * 3.7) * 0.08,
      offset: Math.sin(index * 12.9898) * 0.5 + 0.5,
      speed: 0.24 + ((index * 17) % 23) / 120,
      size: 0.35 + ((index * 31) % 5) * 0.16,
    }));

    let animationFrame = 0;
    let time = 0;

    const draw = () => {
      const ratio = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (canvas.width !== Math.round(width * ratio) || canvas.height !== Math.round(height * ratio)) {
        canvas.width = Math.round(width * ratio);
        canvas.height = Math.round(height * ratio);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
      }

      const p = progressRef.current;
      const baseDiameter = Math.min(width * 0.6, height * 0.74, 780);
      const diameter = baseDiameter + width * p * 1.5;
      const radius = diameter * 0.52;
      const centerX = width * (0.7 - p * 0.22);
      const centerY = height * (0.54 + p * 0.2);
      const orbitRotation = p * -0.72 + time * 0.012;

      context.clearRect(0, 0, width, height);
      particles.forEach((particle, index) => {
        const drift = Math.sin(time * particle.speed + particle.offset * 8) * 0.01;
        const angle = particle.angle + drift + orbitRotation;
        const radial = radius + Math.sin(time * 0.5 + index) * 10;
        const x = centerX + Math.cos(angle) * radial;
        const y = centerY + Math.sin(angle) * radial;

        if (x < -40 || x > width + 40 || y < -40 || y > height + 40) {
          return;
        }

        const alpha = 0.08 + p * 0.2 + Math.sin(time + index) * 0.04;
        context.beginPath();
        context.fillStyle = `rgba(205, 235, 255, ${Math.max(0.06, alpha)})`;
        context.arc(x, y, particle.size, 0, Math.PI * 2);
        context.fill();

        if (index % 11 === 0) {
          context.beginPath();
          context.strokeStyle = `rgba(104, 183, 236, ${0.018 + p * 0.07})`;
          context.moveTo(x, y);
          context.lineTo(
            centerX + Math.cos(angle + 0.01) * (radial - Math.max(44, radius * 0.045)),
            centerY + Math.sin(angle + 0.01) * (radial - Math.max(44, radius * 0.045)),
          );
          context.stroke();
        }
      });

      time += 0.009;
      animationFrame = window.requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div ref={backdropRef} className="earth-backdrop" aria-hidden="true">
      <img className="earth-space-layer" src={assetPath('assets/near-earth-space.png')} alt="" />
      <div ref={earthSceneRef} className="earth-webgl" />
      <canvas ref={canvasRef} className="earth-particles" />
    </div>
  );
}

function Header({ activeSection, onNavigate }) {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <GlassSurface
        as="a"
        className={`brand-mark ${activeSection === 'home' ? 'is-active' : ''}`}
        href="#home"
        aria-label="Back to home"
        width={56}
        height={56}
        borderRadius={18}
        backgroundOpacity={0.02}
        saturation={1.8}
        distortionScale={-150}
        onClick={(event) => handleSectionNavigation(event, '#home', onNavigate)}
      >
        <span>JZ</span>
      </GlassSurface>
      <nav>
        {navItems.map((item) => (
          <GlassSurface
            as="a"
            className={`nav-link ${activeSection === item.href.slice(1) ? 'is-active' : ''}`}
            key={item.href}
            href={item.href}
            width={100}
            height={44}
            borderRadius={16}
            backgroundOpacity={0.018}
            saturation={1.9}
            distortionScale={-155}
            redOffset={4}
            greenOffset={14}
            blueOffset={26}
            aria-current={activeSection === item.href.slice(1) ? 'page' : undefined}
            onClick={(event) => handleSectionNavigation(event, item.href, onNavigate)}
          >
            {item.label}
          </GlassSurface>
        ))}
      </nav>
      <GlassSurface
        as="a"
        className="header-cta"
        href="mailto:james.jiang2004@hotmail.com"
        height={50}
        borderRadius={18}
        backgroundOpacity={0.025}
        saturation={1.85}
        distortionScale={-150}
        onClick={onNavigate}
      >
        <Mail size={16} aria-hidden="true" />
        Contact
      </GlassSurface>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1>JIANG ZHIJIAN</h1>
          <p className="hero-role">Environmental Engineering / ESG / Sustainable Development</p>
          <p className="hero-text">
            I use engineering analysis, environmental science, and data automation to turn sustainability
            challenges into traceable, practical decisions.
          </p>
          <div className="hero-actions" aria-label="Portfolio actions">
            <GlassSurface as="a" className="primary-button" href="mailto:james.jiang2004@hotmail.com" height={52}>
              <Mail size={18} aria-hidden="true" />
              james.jiang2004@hotmail.com
            </GlassSurface>
            <GlassSurface
              as="a"
              className="secondary-button"
              href="#projects"
              height={52}
              onClick={(event) => handleSectionNavigation(event, '#projects')}
            >
              View project work
              <ArrowRight size={18} aria-hidden="true" />
            </GlassSurface>
          </div>
        </div>
        <div className="hero-index" aria-label="Portfolio signal">
          <span>Engineering + ESG</span>
          <strong>GHG accounting, water treatment, environmental research, low-carbon construction, and data systems.</strong>
        </div>
      </div>
    </section>
  );
}

function Profile() {
  return (
    <section className="section profile-section" id="profile">
      <div className="profile-copy">
        <p className="section-label">PROFILE</p>
        <h2>Engineering evidence for sustainable decisions.</h2>
        <p>
          I am James Jiang, a Bachelor of Engineering (Honours) student in Environmental Engineering and
          Sustainable Development at The Hong Kong Polytechnic University, graduating in 2027.
        </p>
        <p>
          My work connects ESG reporting and GHG accounting with environmental data automation, water and
          wastewater engineering, low-carbon construction, and laboratory research. I approach each problem
          through clear system boundaries, auditable evidence, and engineering feasibility.
        </p>
      </div>
      <div className="stats-grid">
        {profileSkills.map((skill) => (
          <div className="stat-card" key={skill.title}>
            <strong>{skill.title}</strong>
            <span>{skill.detail}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  const groups = [
    { label: 'INTERNSHIP EXPERIENCE', items: internshipExperience },
    { label: 'WORK EXPERIENCE', items: workExperience },
  ];

  return (
    <section className="section experience-section" id="experience">
      <div className="section-heading narrow">
        <p className="section-label">EXPERIENCE</p>
        <h2>Environmental engineering, ESG, and data systems in practice.</h2>
      </div>
      {groups.map((group) => (
        <div className="experience-group" key={group.label}>
          <h3 className="experience-group-title">{group.label}</h3>
          <div className="experience-rail">
            {group.items.map((item) => (
              <article key={item.role} className="experience-item">
                <span>{item.time}</span>
                <div>
                  <h4>{item.role}</h4>
                  <ul>
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

function Projects({ onSelectProject }) {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading">
        <p className="section-label">SELECTED PROJECTS</p>
        <h2>Research and design for environmental systems.</h2>
        <p>
          Projects connecting laboratory evidence, process design, and feasibility analysis to measurable
          environmental outcomes.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <button
            className="project-card"
            key={project.title}
            type="button"
            onClick={() => onSelectProject(project)}
            aria-label={`Open details for ${project.title}`}
          >
            <div className="project-content">
              <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
              <p>{project.type}</p>
              <h3>{project.title}</h3>
              <span className="project-summary">{project.summary}</span>
              <span className="project-more">
                Open details
                <MoveUpRight size={16} aria-hidden="true" />
              </span>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <small key={tag}>{tag}</small>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function Strengths() {
  return (
    <section className="section strengths-section" id="strengths">
      <div className="section-heading narrow">
        <p className="section-label">CAPABILITIES</p>
        <h2>Technical capabilities across engineering and ESG.</h2>
      </div>
      <div className="strength-grid">
        {strengths.map(({ icon: Icon, title, copy }) => (
          <article className="strength-card" key={title}>
            <Icon size={24} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  return (
    <div className="project-modal-layer" role="presentation" onMouseDown={onClose}>
      <section
        className="project-modal project-modal-text"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="project-modal-content">
          <GlassSurface
            as="button"
            className="modal-close"
            aria-label="Close project details"
            width={44}
            height={44}
            borderRadius={16}
            backgroundOpacity={0.018}
            saturation={1.8}
            onClick={onClose}
          >
            <X size={18} aria-hidden="true" />
          </GlassSurface>
          <p className="section-label">{project.type}</p>
          <h2 id="project-modal-title">{project.title}</h2>
          <p>{project.summary}</p>
          <ul>
            {project.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
          <div className="tag-row modal-tags">
            {project.tags.map((tag) => (
              <small key={tag}>{tag}</small>
            ))}
          </div>
          <GlassSurface as="a" className="secondary-button modal-mail" href="mailto:james.jiang2004@hotmail.com" height={50}>
            Discuss this project
            <ArrowRight size={17} aria-hidden="true" />
          </GlassSurface>
        </div>
      </section>
    </div>
  );
}

function ContactFooter() {
  return (
    <footer className="contact-footer" id="contact">
      <div className="footer-inner">
        <p className="section-label">CONTACT</p>
        <h2>Let's build better environmental systems.</h2>
        <div className="footer-actions">
          <GlassSurface as="a" className="primary-button" href="mailto:james.jiang2004@hotmail.com" height={52}>
            <Mail size={18} aria-hidden="true" />
            Email me
          </GlassSurface>
          <GlassSurface as="a" className="secondary-button" href="tel:+85264006720" height={52}>
            <Phone size={18} aria-hidden="true" />
            Call
          </GlassSurface>
        </div>
        <div className="footer-meta">
          <span>Hong Kong / Shenzhen</span>
          <span>Environmental Engineering / ESG / Sustainable Development</span>
          <GlassSurface
            as="a"
            className="footer-top-button"
            href="#home"
            aria-label="Back to top"
            width={48}
            height={48}
            onClick={(event) => handleSectionNavigation(event, '#home')}
          >
            <MoveUpRight size={18} aria-hidden="true" />
          </GlassSurface>
        </div>
      </div>
      <Building2 className="footer-icon" size={260} aria-hidden="true" />
    </footer>
  );
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const closeProject = () => setSelectedProject(null);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));
    let ticking = false;

    const updateActiveSection = () => {
      const checkpoint = window.scrollY + Math.min(window.innerHeight * 0.38, 360);
      const currentSection = sectionIds.reduce((current, id) => {
        const section = document.getElementById(id);

        if (!section) {
          return current;
        }

        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        return sectionTop <= checkpoint ? id : current;
      }, 'home');

      setActiveSection((previousSection) => (previousSection === currentSection ? previousSection : currentSection));
      ticking = false;
    };

    const scheduleUpdate = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.setTimeout(updateActiveSection, 80);
    window.setTimeout(updateActiveSection, 420);
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('hashchange', scheduleUpdate);

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      window.removeEventListener('hashchange', scheduleUpdate);
    };
  }, []);

  return (
    <>
      <EarthBackdrop />
      <Header activeSection={activeSection} onNavigate={closeProject} />
      <main>
        <Hero />
        <Profile />
        <ExperienceSection />
        <Projects onSelectProject={setSelectedProject} />
        <Strengths />
        <ContactFooter />
      </main>
      <ProjectModal project={selectedProject} onClose={closeProject} />
    </>
  );
}
