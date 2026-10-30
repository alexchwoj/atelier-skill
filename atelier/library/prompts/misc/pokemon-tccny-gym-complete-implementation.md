# Pokemon TCCNY GYM - Complete Implementation

> # Pokemon-Style Gym Entrance Animation - Complete Implementation ## Overview A Pokemon-style animated intro scene where a trainer walks from a dock to a gym building, then the scene fades out with a classic iris wipe transition to reveal a hidden page behind it. ## Required Assets 1. **background.png** (1536x1024) - Top-down Pokemon-style town scene 2. **trainer.png** - Sprite sheet (4x4 grid, each frame 96x96 pixels) 3. **trees.png** - Animated tree sprite sheet (4 frames horizontal, each 120x200 pixels) --- ## COMPLETE HTML ```html <!DOCTYPE html> <html lang="en"> <head>     <meta charset="UTF-8">     <meta name="viewport" content="width=device-width, initial-scale=1.0">     <title>Pokemon TCCNY GYM</title>     <style>         * {             margin: 0;             padding: 0;             box-sizing: border-box;         }         html, body {             width: 100%;             height: 100%;             overflow: hidden;             background: #1a1a2e;         }         .game-container {             position: relative;             width: 100vw;             height: 100vh;             overflow: hidden;             clip-path: circle(150% at 50% 50%);         }         .game-container.iris-close {             animation: irisClose 2s ease-in forwards;         }         @keyframes irisClose {             0% { clip-path: circle(100% at 50% 50%); }             100% { clip-path: circle(0% at 50% 50%); }         }         .background {             position: absolute;             top: 0;             left: 0;             width: 100%;             height: 100%;             object-fit: fill;             image-rendering: pixelated;         }         .sprite {             position: absolute;             background-image: url('trainer.png');             image-rendering: pixelated;             z-index: 100;             left: 0;             top: 0;             transition: opacity 0.6s ease-out;         }         .sprite.fade-out {             opacity: 0;         }         .tree {             position: absolute;             left: 0;             top: 0;             background-image: url('trees.png');             image-rendering: pixelated;             z-index: 50;         }         .shadow {             position: absolute;             z-index: 99;             left: 0;             top: 0;             display: flex;             flex-direction: column;             align-items: center;             justify-content: center;             gap: 0;             transition: opacity 0.6s ease-out;         }         .shadow.fade-out {             opacity: 0;         }         .shadow-row {             display: flex;             gap: 0;         }         .shadow-pixel {             background: transparent;         }         .shadow-pixel.filled {             background: #1a1a1a;         }         .hidden-page {             position: fixed;             top: 0;             left: 0;             width: 100%;             height: 100%;             background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);             display: flex;             flex-direction: column;             align-items: center;             justify-content: center;             z-index: 500;             opacity: 0;             pointer-events: none;             transition: opacity 0.5s ease-in;         }         .hidden-page.visible {             opacity: 1;             pointer-events: auto;         }         .hidden-page h1 {             font-family: 'Press Start 2P', monospace, sans-serif;             font-size: 2.5rem;             color: #e94560;             text-shadow: 4px 4px 0 #0f3460;             margin-bottom: 1rem;             text-align: center;         }         .hidden-page p {             font-family: 'Press Start 2P', monospace, sans-serif;             font-size: 1rem;             color: #eee;             text-align: center;             line-height: 2;         }     </style> </head> <body>     <div class="hidden-page" id="hiddenPage">         <h1>TCCNY GYM</h1>         <p>Welcome, Trainer!</p>     </div>     <div class="game-container" id="gameContainer">         <img src="background.png" class="background" id="background">         <div class="shadow" id="shadow"></div>         <div class="sprite" id="trainer"></div>     </div>     <script>         // ============================================         // CONSTANTS         // ============================================         const ORIGINAL_WIDTH = 1536;         const ORIGINAL_HEIGHT = 1024;         const BASE_FRAME_WIDTH = 96;         const BASE_FRAME_HEIGHT = 96;         const BASE_TREE_WIDTH = 120;         const BASE_TREE_HEIGHT = 200;         const FRAME_SEQUENCE = [0, 1, 2, 3];         const ANIMATION_SPEED = 100;         const DIRECTIONS = { down: 0, right: 1, left: 2, up: 3 };         // ============================================         // DOM ELEMENTS         // ============================================         const gameContainer = document.getElementById('gameContainer');         const trainer = document.getElementById('trainer');         const shadow = document.getElementById('shadow');         const hiddenPage = document.getElementById('hiddenPage');         // ============================================         // TRAINER PATH (percentage coordinates)         // ============================================         const PATH_PERCENT = [             { x: 24.5, y: 82 },  // Start on dock             { x: 24.5, y: 75 },  // Walk up from dock             { x: 24.5, y: 65 },  // Continue up path             { x: 24.5, y: 55 },  // Approaching junction             { x: 24.5, y: 47 },  // At junction             { x: 35, y: 47 },    // Turn right             { x: 50, y: 47 },    // At center junction             { x: 50, y: 35 },    // Turn up toward gym             { x: 50, y: 22 },    // Near gym entrance (TRIGGER FADE)             { x: 50, y: 15 },    // At gym entrance         ];         // ============================================         // TREE POSITIONS (percentage coordinates)         // ============================================         const BORDER_TREES = [             // TOP LEFT             { x: -15, y: -30 }, { x: -8, y: -28 }, { x: -1, y: -30 },             { x: 6, y: -28 }, { x: 13, y: -30 }, { x: 20, y: -28 },             { x: -12, y: -20 }, { x: -5, y: -18 }, { x: 2, y: -20 },             { x: 9, y: -18 }, { x: 16, y: -20 },             // TOP RIGHT             { x: 68, y: -30 }, { x: 75, y: -28 }, { x: 82, y: -30 },             { x: 89, y: -28 }, { x: 96, y: -30 }, { x: 103, y: -28 },             { x: 71, y: -20 }, { x: 78, y: -18 }, { x: 85, y: -20 },             { x: 92, y: -18 }, { x: 99, y: -20 },             // LEFT BORDER             { x: -20, y: -25 }, { x: -20, y: -15 }, { x: -20, y: -5 },             { x: -20, y: 5 }, { x: -20, y: 15 }, { x: -20, y: 25 },             { x: -13, y: -20 }, { x: -13, y: -10 }, { x: -13, y: 0 },             { x: -13, y: 10 }, { x: -13, y: 20 }, { x: -13, y: 30 },             // RIGHT BORDER             { x: 96, y: -25 }, { x: 96, y: -15 }, { x: 96, y: -5 },             { x: 96, y: 5 }, { x: 96, y: 15 }, { x: 96, y: 25 },             { x: 103, y: -20 }, { x: 103, y: -10 }, { x: 103, y: 0 },             { x: 103, y: 10 }, { x: 103, y: 20 }, { x: 103, y: 30 },         ];         const PROMINENT_TREES = [             // Waterfront             { x: 35, y: 34 }, { x: 43, y: 32 }, { x: 51, y: 34 },             { x: 59, y: 32 }, { x: 67, y: 34 }, { x: 75, y: 32 },             // Left side             { x: -2, y: 5 },             // Right side             { x: 97, y: 5 }, { x: 95, y: 18 },             // Other grass             { x: 5, y: 25 },         ];         // ============================================         // SCALING SYSTEM (CRITICAL FOR TREES)         // ============================================         // MUST store initial dimensions at page load BEFORE any resize         const initialWidth = window.innerWidth;         const initialHeight = window.innerHeight;         const initialScale = Math.min(initialWidth / 800, initialHeight / 533);         // Current dimensions (updated on resize)         let scale = 1;         let containerWidth = 0;         let containerHeight = 0;         function calculateDimensions() {             containerWidth = window.innerWidth;             containerHeight = window.innerHeight;             scale = Math.min(containerWidth / 800, containerHeight / 533);         }         function percentToPixel(xPercent, yPercent) {             return {                 x: (xPercent / 100) * containerWidth,                 y: (yPercent / 100) * containerHeight             };         }         // Trainer uses uniform scale         function getScaledSpriteDimensions() {             return {                 width: BASE_FRAME_WIDTH * scale,                 height: BASE_FRAME_HEIGHT * scale             };         }         // TREES use proportional scale (CRITICAL - do not change this formula)         function getScaledTreeDimensions() {             const width = BASE_TREE_WIDTH * initialScale * (containerWidth / initialWidth);             const height = BASE_TREE_HEIGHT * initialScale * (containerHeight / initialHeight);             return { width, height };         }         // ============================================         // SHADOW         // ============================================         const SHADOW_PATTERN = [             [0, 1, 1, 1, 1, 1, 1, 0],             [1, 1, 1, 1, 1, 1, 1, 1],             [0, 1, 1, 1, 1, 1, 1, 0],         ];         function createPixelShadow() {             shadow.innerHTML = '';             SHADOW_PATTERN.forEach(row => {                 const rowDiv = document.createElement('div');                 rowDiv.className = 'shadow-row';                 row.forEach(pixel => {                     const pixelDiv = document.createElement('div');                     pixelDiv.className = 'shadow-pixel' + (pixel ? ' filled' : '');                     rowDiv.appendChild(pixelDiv);                 });                 shadow.appendChild(rowDiv);             });         }         function updateShadowSize() {             const dims = getScaledSpriteDimensions();             const pixelSize = Math.max(2, Math.floor(dims.width / 16));             shadow.querySelectorAll('.shadow-pixel').forEach(p => {                 p.style.width = pixelSize + 'px';                 p.style.height = pixelSize + 'px';             });         }         // ============================================         // TREES         // ============================================         const borderTreeElements = [];         const prominentTreeElements = [];         function createTrees() {             BORDER_TREES.forEach((pos, index) => {                 const tree = document.createElement('div');                 tree.className = 'tree';                 tree.dataset.type = 'border';                 tree.dataset.frame = Math.floor(Math.random() * 4);                 gameContainer.appendChild(tree);                 borderTreeElements.push(tree);             });             PROMINENT_TREES.forEach((pos, index) => {                 const tree = document.createElement('div');                 tree.className = 'tree';                 tree.dataset.type = 'prominent';                 gameContainer.appendChild(tree);                 prominentTreeElements.push(tree);             });             updateTreePositions();         }         function updateTreePositions() {             const treeDims = getScaledTreeDimensions();             borderTreeElements.forEach((tree, index) => {                 const pos = BORDER_TREES[index];                 const pixelPos = percentToPixel(pos.x, pos.y);                 tree.style.width = treeDims.width + 'px';                 tree.style.height = treeDims.height + 'px';                 tree.style.transform = `translate(${pixelPos.x}px, ${pixelPos.y}px)`;                 tree.style.backgroundSize = `${treeDims.width * 4}px ${treeDims.height}px`;                 const staticFrame = parseInt(tree.dataset.frame);                 tree.style.backgroundPosition = `${-staticFrame * treeDims.width}px 0`;             });             prominentTreeElements.forEach((tree, index) => {                 const pos = PROMINENT_TREES[index];                 const pixelPos = percentToPixel(pos.x, pos.y);                 tree.style.width = treeDims.width + 'px';                 tree.style.height = treeDims.height + 'px';                 tree.style.transform = `translate(${pixelPos.x}px, ${pixelPos.y}px)`;                 tree.style.backgroundSize = `${treeDims.width * 4}px ${treeDims.height}px`;             });         }         // Tree animation (prominent only)         let treeFrame = 0;         setInterval(() => {             treeFrame = (treeFrame + 1) % 4;             const treeDims = getScaledTreeDimensions();             prominentTreeElements.forEach(tree => {                 tree.style.backgroundPosition = `${-treeFrame * treeDims.width}px 0`;             });         }, 350);         // ============================================         // TRAINER         // ============================================         let frame = 0;         let pathIndex = 1;         let xPercent = PATH_PERCENT[0].x;         let yPercent = PATH_PERCENT[0].y;         const SPEED_PERCENT = 0.22;         let direction = 'down';         let startDelay = 60;         let isMoving = false;         function updateSpriteSize() {             const dims = getScaledSpriteDimensions();             trainer.style.width = dims.width + 'px';             trainer.style.height = dims.height + 'px';             trainer.style.backgroundSize = `${dims.width * 4}px ${dims.height * 4}px`;         }         function updateSprite() {             const dims = getScaledSpriteDimensions();             const row = DIRECTIONS[direction];             const col = FRAME_SEQUENCE[frame];             trainer.style.backgroundPosition = `${-col * dims.width}px ${-row * dims.height}px`;         }         function updateTrainerPosition() {             const pixelPos = percentToPixel(xPercent, yPercent);             const dims = getScaledSpriteDimensions();             trainer.style.transform = `translate(${pixelPos.x - dims.width / 2}px, ${pixelPos.y - dims.height}px)`;             const pixelSize = Math.max(2, Math.floor(dims.width / 16));             const shadowWidth = pixelSize * 8;             const shadowHeight = pixelSize * 3;             shadow.style.transform = `translate(${pixelPos.x - shadowWidth / 2}px, ${pixelPos.y - shadowHeight / 2}px)`;         }         function getSegmentDirection(fromIdx, toIdx) {             const dx = PATH_PERCENT[toIdx].x - PATH_PERCENT[fromIdx].x;             const dy = PATH_PERCENT[toIdx].y - PATH_PERCENT[fromIdx].y;             if (Math.abs(dy) >= 1) return dy > 0 ? 'down' : 'up';             return dx > 0 ? 'right' : 'left';         }         // Walk animation         setInterval(() => {             if (isMoving) {                 frame = (frame + 1) % 4;                 updateSprite();             }         }, ANIMATION_SPEED);         // ============================================         // FADE SEQUENCE         // ============================================         let fadeTriggered = false;         function triggerGymEntrance() {             if (fadeTriggered) return;             fadeTriggered = true;             trainer.classList.add('fade-out');             shadow.classList.add('fade-out');             setTimeout(() => {                 gameContainer.classList.add('iris-close');             }, 400);             setTimeout(() => {                 gameContainer.style.visibility = 'hidden';                 hiddenPage.classList.add('visible');             }, 2400);         }         // ============================================         // MAIN LOOP         // ============================================         let lastWidth = 0;         let lastHeight = 0;         function move() {             // Resize detection (CRITICAL for trees)             if (lastWidth !== window.innerWidth || lastHeight !== window.innerHeight) {                 lastWidth = window.innerWidth;                 lastHeight = window.innerHeight;                 calculateDimensions();                 updateTreePositions();                 updateSpriteSize();                 updateShadowSize();             }             // Start delay             if (startDelay > 0) {                 startDelay--;                 if (startDelay === 0) {                     direction = getSegmentDirection(0, 1);                     isMoving = true;                 }                 return;             }             if (pathIndex >= PATH_PERCENT.length) {                 isMoving = false;                 return;             }             // Trigger fade at waypoint 8             if (pathIndex === 8 && !fadeTriggered) {                 triggerGymEntrance();             }             const target = PATH_PERCENT[pathIndex];             const dx = target.x - xPercent;             const dy = target.y - yPercent;             const dist = Math.sqrt(dx * dx + dy * dy);             if (dist < SPEED_PERCENT) {                 xPercent = target.x;                 yPercent = target.y;                 pathIndex++;                 if (pathIndex < PATH_PERCENT.length) {                     direction = getSegmentDirection(pathIndex - 1, pathIndex);                 }                 return;             }             xPercent += (dx / dist) * SPEED_PERCENT;             yPercent += (dy / dist) * SPEED_PERCENT;             updateTrainerPosition();             updateSprite();         }         setInterval(move, 16);         // ============================================         // RESIZE HANDLER         // ============================================         function onResize() {             requestAnimationFrame(() => {                 calculateDimensions();                 updateSpriteSize();                 updateShadowSize();                 updateTreePositions();                 updateTrainerPosition();                 updateSprite();             });         }         window.addEventListener('resize', onResize);         // ============================================         // INITIALIZE         // ============================================         calculateDimensions();         createTrees();         createPixelShadow();         updateSpriteSize();         updateShadowSize();         updateTrainerPosition();         updateSprite();     </script> </body> </html> ``` --- ## Key Technical Notes 1. **Tree Scaling Formula** (DO NOT MODIFY):    ```javascript    width = BASE_TREE_WIDTH * initialScale * (containerWidth / initialWidth);    height = BASE_TREE_HEIGHT * initialScale * (containerHeight / initialHeight);    ``` 2. **Background must use `object-fit: fill`** to stretch with viewport 3. **Trees positioned with `transform: translate()`** not left/top 4. **Resize detection in animation loop** keeps trees synced 5. **Shadow is pixel-art oval** (8x3 pattern) positioned under trainer's feet

- Source: https://superdesign.dev/library/pokemon-tccny-gym-complete-implementation
- Category: other
- Tags: -
- Preview: https://p.superdesign.dev/draft/cef46187-f26c-450b-a7db-97386e70deea
- Thumbnail: https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/screenshots/drafts/cef46187-f26c-450b-a7db-97386e70deea/1769051295509.png
- Author: Aaron Kaucky

---

# Pokemon-Style Gym Entrance Animation - Complete Implementation

## Overview

A Pokemon-style animated intro scene where a trainer walks from a dock to a gym building, then the scene fades out with a classic iris wipe transition to reveal a hidden page behind it.

## Required Assets

1. **background.png** (1536x1024) - Top-down Pokemon-style town scene
2. **trainer.png** - Sprite sheet (4x4 grid, each frame 96x96 pixels)
3. **trees.png** - Animated tree sprite sheet (4 frames horizontal, each 120x200 pixels)

---

## COMPLETE HTML

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokemon TCCNY GYM</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html, body {
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: #1a1a2e;
        }

        .game-container {
            position: relative;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            clip-path: circle(150% at 50% 50%);
        }

        .game-container.iris-close {
            animation: irisClose 2s ease-in forwards;
        }

        @keyframes irisClose {
            0% { clip-path: circle(100% at 50% 50%); }
            100% { clip-path: circle(0% at 50% 50%); }
        }

        .background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: fill;
            image-rendering: pixelated;
        }

        .sprite {
            position: absolute;
            background-image: url('trainer.png');
            image-rendering: pixelated;
            z-index: 100;
            left: 0;
            top: 0;
            transition: opacity 0.6s ease-out;
        }

        .sprite.fade-out {
            opacity: 0;
        }

        .tree {
            position: absolute;
            left: 0;
            top: 0;
            background-image: url('trees.png');
            image-rendering: pixelated;
            z-index: 50;
        }

        .shadow {
            position: absolute;
            z-index: 99;
            left: 0;
            top: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0;
            transition: opacity 0.6s ease-out;
        }

        .shadow.fade-out {
            opacity: 0;
        }

        .shadow-row {
            display: flex;
            gap: 0;
        }

        .shadow-pixel {
            background: transparent;
        }

        .shadow-pixel.filled {
            background: #1a1a1a;
        }

        .hidden-page {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 500;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.5s ease-in;
        }

        .hidden-page.visible {
            opacity: 1;
            pointer-events: auto;
        }

        .hidden-page h1 {
            font-family: 'Press Start 2P', monospace, sans-serif;
            font-size: 2.5rem;
            color: #e94560;
            text-shadow: 4px 4px 0 #0f3460;
            margin-bottom: 1rem;
            text-align: center;
        }

        .hidden-page p {
            font-family: 'Press Start 2P', monospace, sans-serif;
            font-size: 1rem;
            color: #eee;
            text-align: center;
            line-height: 2;
        }
    </style>
</head>
<body>
    <div class="hidden-page" id="hiddenPage">
        <h1>TCCNY GYM</h1>
        <p>Welcome, Trainer!</p>
    </div>

    <div class="game-container" id="gameContainer">
        <img src="background.png" class="background" id="background">
        <div class="shadow" id="shadow"></div>
        <div class="sprite" id="trainer"></div>
    </div>

    <script>
        // ============================================
        // CONSTANTS
        // ============================================
        const ORIGINAL_WIDTH = 1536;
        const ORIGINAL_HEIGHT = 1024;

        const BASE_FRAME_WIDTH = 96;
        const BASE_FRAME_HEIGHT = 96;
        const BASE_TREE_WIDTH = 120;
        const BASE_TREE_HEIGHT = 200;

        const FRAME_SEQUENCE = [0, 1, 2, 3];
        const ANIMATION_SPEED = 100;

        const DIRECTIONS = { down: 0, right: 1, left: 2, up: 3 };

        // ============================================
        // DOM ELEMENTS
        // ============================================
        const gameContainer = document.getElementById('gameContainer');
        const trainer = document.getElementById('trainer');
        const shadow = document.getElementById('shadow');
        const hiddenPage = document.getElementById('hiddenPage');

        // ============================================
        // TRAINER PATH (percentage coordinates)
        // ============================================
        const PATH_PERCENT = [
            { x: 24.5, y: 82 },  // Start on dock
            { x: 24.5, y: 75 },  // Walk up from dock
            { x: 24.5, y: 65 },  // Continue up path
            { x: 24.5, y: 55 },  // Approaching junction
            { x: 24.5, y: 47 },  // At junction
            { x: 35, y: 47 },    // Turn right
            { x: 50, y: 47 },    // At center junction
            { x: 50, y: 35 },    // Turn up toward gym
            { x: 50, y: 22 },    // Near gym entrance (TRIGGER FADE)
            { x: 50, y: 15 },    // At gym entrance
        ];

        // ============================================
        // TREE POSITIONS (percentage coordinates)
        // ============================================
        const BORDER_TREES = [
            // TOP LEFT
            { x: -15, y: -30 }, { x: -8, y: -28 }, { x: -1, y: -30 },
            { x: 6, y: -28 }, { x: 13, y: -30 }, { x: 20, y: -28 },
            { x: -12, y: -20 }, { x: -5, y: -18 }, { x: 2, y: -20 },
            { x: 9, y: -18 }, { x: 16, y: -20 },
            // TOP RIGHT
            { x: 68, y: -30 }, { x: 75, y: -28 }, { x: 82, y: -30 },
            { x: 89, y: -28 }, { x: 96, y: -30 }, { x: 103, y: -28 },
            { x: 71, y: -20 }, { x: 78, y: -18 }, { x: 85, y: -20 },
            { x: 92, y: -18 }, { x: 99, y: -20 },
            // LEFT BORDER
            { x: -20, y: -25 }, { x: -20, y: -15 }, { x: -20, y: -5 },
            { x: -20, y: 5 }, { x: -20, y: 15 }, { x: -20, y: 25 },
            { x: -13, y: -20 }, { x: -13, y: -10 }, { x: -13, y: 0 },
            { x: -13, y: 10 }, { x: -13, y: 20 }, { x: -13, y: 30 },
            // RIGHT BORDER
            { x: 96, y: -25 }, { x: 96, y: -15 }, { x: 96, y: -5 },
            { x: 96, y: 5 }, { x: 96, y: 15 }, { x: 96, y: 25 },
            { x: 103, y: -20 }, { x: 103, y: -10 }, { x: 103, y: 0 },
            { x: 103, y: 10 }, { x: 103, y: 20 }, { x: 103, y: 30 },
        ];

        const PROMINENT_TREES = [
            // Waterfront
            { x: 35, y: 34 }, { x: 43, y: 32 }, { x: 51, y: 34 },
            { x: 59, y: 32 }, { x: 67, y: 34 }, { x: 75, y: 32 },
            // Left side
            { x: -2, y: 5 },
            // Right side
            { x: 97, y: 5 }, { x: 95, y: 18 },
            // Other grass
            { x: 5, y: 25 },
        ];

        // ============================================
        // SCALING SYSTEM (CRITICAL FOR TREES)
        // ============================================

        // MUST store initial dimensions at page load BEFORE any resize
        const initialWidth = window.innerWidth;
        const initialHeight = window.innerHeight;
        const initialScale = Math.min(initialWidth / 800, initialHeight / 533);

        // Current dimensions (updated on resize)
        let scale = 1;
        let containerWidth = 0;
        let containerHeight = 0;

        function calculateDimensions() {
            containerWidth = window.innerWidth;
            containerHeight = window.innerHeight;
            scale = Math.min(containerWidth / 800, containerHeight / 533);
        }

        function percentToPixel(xPercent, yPercent) {
            return {
                x: (xPercent / 100) * containerWidth,
                y: (yPercent / 100) * containerHeight
            };
        }

        // Trainer uses uniform scale
        function getScaledSpriteDimensions() {
            return {
                width: BASE_FRAME_WIDTH * scale,
                height: BASE_FRAME_HEIGHT * scale
            };
        }

        // TREES use proportional scale (CRITICAL - do not change this formula)
        function getScaledTreeDimensions() {
            const width = BASE_TREE_WIDTH * initialScale * (containerWidth / initialWidth);
            const height = BASE_TREE_HEIGHT * initialScale * (containerHeight / initialHeight);
            return { width, height };
        }

        // ============================================
        // SHADOW
        // ============================================
        const SHADOW_PATTERN = [
            [0, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 0],
        ];

        function createPixelShadow() {
            shadow.innerHTML = '';
            SHADOW_PATTERN.forEach(row => {
                const rowDiv = document.createElement('div');
                rowDiv.className = 'shadow-row';
                row.forEach(pixel => {
                    const pixelDiv = document.createElement('div');
                    pixelDiv.className = 'shadow-pixel' + (pixel ? ' filled' : '');
                    rowDiv.appendChild(pixelDiv);
                });
                shadow.appendChild(rowDiv);
            });
        }

        function updateShadowSize() {
            const dims = getScaledSpriteDimensions();
            const pixelSize = Math.max(2, Math.floor(dims.width / 16));
            shadow.querySelectorAll('.shadow-pixel').forEach(p => {
                p.style.width = pixelSize + 'px';
                p.style.height = pixelSize + 'px';
            });
        }

        // ============================================
        // TREES
        // ============================================
        const borderTreeElements = [];
        const prominentTreeElements = [];

        function createTrees() {
            BORDER_TREES.forEach((pos, index) => {
                const tree = document.createElement('div');
                tree.className = 'tree';
                tree.dataset.type = 'border';
                tree.dataset.frame = Math.floor(Math.random() * 4);
                gameContainer.appendChild(tree);
                borderTreeElements.push(tree);
            });

            PROMINENT_TREES.forEach((pos, index) => {
                const tree = document.createElement('div');
                tree.className = 'tree';
                tree.dataset.type = 'prominent';
                gameContainer.appendChild(tree);
                prominentTreeElements.push(tree);
            });

            updateTreePositions();
        }

        function updateTreePositions() {
            const treeDims = getScaledTreeDimensions();

            borderTreeElements.forEach((tree, index) => {
                const pos = BORDER_TREES[index];
                const pixelPos = percentToPixel(pos.x, pos.y);
                tree.style.width = treeDims.width + 'px';
                tree.style.height = treeDims.height + 'px';
                tree.style.transform = `translate(${pixelPos.x}px, ${pixelPos.y}px)`;
                tree.style.backgroundSize = `${treeDims.width * 4}px ${treeDims.height}px`;
                const staticFrame = parseInt(tree.dataset.frame);
                tree.style.backgroundPosition = `${-staticFrame * treeDims.width}px 0`;
            });

            prominentTreeElements.forEach((tree, index) => {
                const pos = PROMINENT_TREES[index];
                const pixelPos = percentToPixel(pos.x, pos.y);
                tree.style.width = treeDims.width + 'px';
                tree.style.height = treeDims.height + 'px';
                tree.style.transform = `translate(${pixelPos.x}px, ${pixelPos.y}px)`;
                tree.style.backgroundSize = `${treeDims.width * 4}px ${treeDims.height}px`;
            });
        }

        // Tree animation (prominent only)
        let treeFrame = 0;
        setInterval(() => {
            treeFrame = (treeFrame + 1) % 4;
            const treeDims = getScaledTreeDimensions();
            prominentTreeElements.forEach(tree => {
                tree.style.backgroundPosition = `${-treeFrame * treeDims.width}px 0`;
            });
        }, 350);

        // ============================================
        // TRAINER
        // ============================================
        let frame = 0;
        let pathIndex = 1;
        let xPercent = PATH_PERCENT[0].x;
        let yPercent = PATH_PERCENT[0].y;
        const SPEED_PERCENT = 0.22;
        let direction = 'down';
        let startDelay = 60;
        let isMoving = false;

        function updateSpriteSize() {
            const dims = getScaledSpriteDimensions();
            trainer.style.width = dims.width + 'px';
            trainer.style.height = dims.height + 'px';
            trainer.style.backgroundSize = `${dims.width * 4}px ${dims.height * 4}px`;
        }

        function updateSprite() {
            const dims = getScaledSpriteDimensions();
            const row = DIRECTIONS[direction];
            const col = FRAME_SEQUENCE[frame];
            trainer.style.backgroundPosition = `${-col * dims.width}px ${-row * dims.height}px`;
        }

        function updateTrainerPosition() {
            const pixelPos = percentToPixel(xPercent, yPercent);
            const dims = getScaledSpriteDimensions();
            trainer.style.transform = `translate(${pixelPos.x - dims.width / 2}px, ${pixelPos.y - dims.height}px)`;

            const pixelSize = Math.max(2, Math.floor(dims.width / 16));
            const shadowWidth = pixelSize * 8;
            const shadowHeight = pixelSize * 3;
            shadow.style.transform = `translate(${pixelPos.x - shadowWidth / 2}px, ${pixelPos.y - shadowHeight / 2}px)`;
        }

        function getSegmentDirection(fromIdx, toIdx) {
            const dx = PATH_PERCENT[toIdx].x - PATH_PERCENT[fromIdx].x;
            const dy = PATH_PERCENT[toIdx].y - PATH_PERCENT[fromIdx].y;
            if (Math.abs(dy) >= 1) return dy > 0 ? 'down' : 'up';
            return dx > 0 ? 'right' : 'left';
        }

        // Walk animation
        setInterval(() => {
            if (isMoving) {
                frame = (frame + 1) % 4;
                updateSprite();
            }
        }, ANIMATION_SPEED);

        // ============================================
        // FADE SEQUENCE
        // ============================================
        let fadeTriggered = false;

        function triggerGymEntrance() {
            if (fadeTriggered) return;
            fadeTriggered = true;

            trainer.classList.add('fade-out');
            shadow.classList.add('fade-out');

            setTimeout(() => {
                gameContainer.classList.add('iris-close');
            }, 400);

            setTimeout(() => {
                gameContainer.style.visibility = 'hidden';
                hiddenPage.classList.add('visible');
            }, 2400);
        }

        // ============================================
        // MAIN LOOP
        // ============================================
        let lastWidth = 0;
        let lastHeight = 0;

        function move() {
            // Resize detection (CRITICAL for trees)
            if (lastWidth !== window.innerWidth || lastHeight !== window.innerHeight) {
                lastWidth = window.innerWidth;
                lastHeight = window.innerHeight;
                calculateDimensions();
                updateTreePositions();
                updateSpriteSize();
                updateShadowSize();
            }

            // Start delay
            if (startDelay > 0) {
                startDelay--;
                if (startDelay === 0) {
                    direction = getSegmentDirection(0, 1);
                    isMoving = true;
                }
                return;
            }

            if (pathIndex >= PATH_PERCENT.length) {
                isMoving = false;
                return;
            }

            // Trigger fade at waypoint 8
            if (pathIndex === 8 && !fadeTriggered) {
                triggerGymEntrance();
            }

            const target = PATH_PERCENT[pathIndex];
            const dx = target.x - xPercent;
            const dy = target.y - yPercent;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < SPEED_PERCENT) {
                xPercent = target.x;
                yPercent = target.y;
                pathIndex++;
                if (pathIndex < PATH_PERCENT.length) {
                    direction = getSegmentDirection(pathIndex - 1, pathIndex);
                }
                return;
            }

            xPercent += (dx / dist) * SPEED_PERCENT;
            yPercent += (dy / dist) * SPEED_PERCENT;

            updateTrainerPosition();
            updateSprite();
        }

        setInterval(move, 16);

        // ============================================
        // RESIZE HANDLER
        // ============================================
        function onResize() {
            requestAnimationFrame(() => {
                calculateDimensions();
                updateSpriteSize();
                updateShadowSize();
                updateTreePositions();
                updateTrainerPosition();
                updateSprite();
            });
        }

        window.addEventListener('resize', onResize);

        // ============================================
        // INITIALIZE
        // ============================================
        calculateDimensions();
        createTrees();
        createPixelShadow();
        updateSpriteSize();
        updateShadowSize();
        updateTrainerPosition();
        updateSprite();
    </script>
</body>
</html>
~~~

---

## Key Technical Notes

1. **Tree Scaling Formula** (DO NOT MODIFY):

   ~~~javascript
   width = BASE_TREE_WIDTH * initialScale * (containerWidth / initialWidth);
   height = BASE_TREE_HEIGHT * initialScale * (containerHeight / initialHeight);
   ~~~

2. **Background must use** `object-fit: fill` to stretch with viewport

3. **Trees positioned with** `transform: translate()` not left/top

4. **Resize detection in animation loop** keeps trees synced

5. **Shadow is pixel-art oval** (8x3 pattern) positioned under trainer's feet

Here is a reference implementation:

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokemon TCCNY GYM</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            image-rendering: pixelated;
        }

        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            background: #000;
            font-family: 'Inter', sans-serif;
        }

        .root-container {
            width: 100vw;
            height: 100vh;
            background: #000;
            position: relative;
        }

        .game-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            clip-path: circle(150% at 50% 50%);
            z-index: 1000;
        }

        .game-container.iris-close {
            animation: irisClose 2s ease-in forwards;
        }

        @keyframes irisClose {
            0% { clip-path: circle(100% at 50% 50%); }
            100% { clip-path: circle(0% at 50% 50%); }
        }

        .background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: fill;
        }

        .sprite {
            position: absolute;
            background-image: url('https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/b407ce49-97cf-4bbf-a64d-2cad5b1d2669/1769050057516-e98ba078/trainer.png');
            z-index: 100;
            left: 0;
            top: 0;
            transition: opacity 0.6s ease-out;
        }

        .sprite.fade-out {
            opacity: 0;
        }

        .tree {
            position: absolute;
            left: 0;
            top: 0;
            background-image: url('https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/b407ce49-97cf-4bbf-a64d-2cad5b1d2669/1769050059337-fb863397/trees.png');
            z-index: 50;
            transition: opacity 0.6s ease-out;
        }

        .tree.fade-out {
            opacity: 0;
        }

        .shadow {
            position: absolute;
            z-index: 99;
            left: 0;
            top: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0;
            transition: opacity 0.6s ease-out;
            pointer-events: none;
        }

        .shadow.fade-out {
            opacity: 0;
        }

        .shadow-row {
            display: flex;
            gap: 0;
        }

        .shadow-pixel {
            background: transparent;
        }

        .shadow-pixel.filled {
            background: rgba(0, 0, 0, 0.4);
        }

        .hidden-page {
            position: fixed;
            inset: 0;
            background: linear-gradient(135deg, #0a0a0c, #16161e, #0c0c0e);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 500;
            opacity: 0;
            pointer-events: none;
            transition: opacity 1s ease-in-out;
        }

        .hidden-page.visible {
            opacity: 1;
            pointer-events: auto;
        }

        .retro-font {
            font-family: 'Press Start 2P', cursive;
            line-height: 1.6;
        }

        .nav-line {
            transition: width 0.3s ease-in-out;
        }

        .group:hover .nav-line {
            width: 100%;
        }

        .scanline {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
            z-index: 2000;
            background-size: 100% 4px, 3px 100%;
            pointer-events: none;
            opacity: 0.15;
        }
    </style>
</head>
<body>
    <div class="root-container">
        <div class="scanline"></div>

        <!-- Game Scene -->
        <div class="game-container" id="gameContainer">
            <img src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/b407ce49-97cf-4bbf-a64d-2cad5b1d2669/1769050051744-27156646/background.png" class="background" id="background" alt="Pokemon Town">
            <div class="shadow" id="shadow"></div>
            <div class="sprite" id="trainer"></div>
        </div>

        <!-- Hidden Page Reveal -->
        <main class="hidden-page" id="hiddenPage">
            <div class="max-w-4xl w-full px-6 flex flex-col items-center text-white text-center space-y-12">
                <div class="space-y-4">
                    <div class="inline-block px-4 py-1 border border-white/20 rounded-full text-[10px] retro-font text-blue-400 mb-4">
                        LEVEL 99 DEVELOPER REACHED
                    </div>
                    <h1 class="text-4xl md:text-6xl font-bold tracking-tighter">The Creative Collective New York</h1>
                    <p class="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Crafting digital experiences that feel like high-adventure RPGs. 
                        Minimalist aesthetics meeting maximalist technical performance.
                    </p>
                </div>

                <nav class="flex flex-wrap justify-center gap-8 md:gap-16">
                    <a id="nav-projects-link" href="#" class="group flex flex-col items-center space-y-2">
                        <span class="text-[10px] retro-font group-hover:text-blue-400 transition-colors uppercase tracking-widest">Quests</span>
                        <div class="h-px w-0 bg-blue-500 nav-line"></div>
                    </a>
                    <a id="nav-about-link" href="#" class="group flex flex-col items-center space-y-2">
                        <span class="text-[10px] retro-font group-hover:text-blue-400 transition-colors uppercase tracking-widest">Lore</span>
                        <div class="h-px w-0 bg-blue-500 nav-line"></div>
                    </a>
                    <a id="nav-contact-link" href="#" class="group flex flex-col items-center space-y-2">
                        <span class="text-[10px] retro-font group-hover:text-blue-400 transition-colors uppercase tracking-widest">Guild</span>
                        <div class="h-px w-0 bg-blue-500 nav-line"></div>
                    </a>
                </nav>

                <div class="pt-12 border-t border-white/5 w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <h3 class="text-xs retro-font text-blue-300 mb-4">DURABILITY</h3>
                        <p class="text-sm text-gray-400">Building robust, production-grade applications that withstand the test of time.</p>
                    </div>
                    <div class="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <h3 class="text-xs retro-font text-purple-300 mb-4">AGILITY</h3>
                        <p class="text-sm text-gray-400">Responsive design systems that adapt to any viewport or device size.</p>
                    </div>
                    <div class="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <h3 class="text-xs retro-font text-green-300 mb-4">CHARISMA</h3>
                        <p class="text-sm text-gray-400">Memorable UI/UX that engages users and drives meaningful interactions.</p>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <script>
        // ============================================
        // CONSTANTS
        // ============================================
        const BASE_FRAME_WIDTH = 96;
        const BASE_FRAME_HEIGHT = 96;
        const BASE_TREE_WIDTH = 120;
        const BASE_TREE_HEIGHT = 200;

        const FRAME_SEQUENCE = [0, 1, 2, 3];
        const ANIMATION_SPEED = 100;
        const DIRECTIONS = { down: 0, right: 1, left: 2, up: 3 };

        // ============================================
        // DOM ELEMENTS
        // ============================================
        const gameContainer = document.getElementById('gameContainer');
        const trainer = document.getElementById('trainer');
        const shadow = document.getElementById('shadow');
        const hiddenPage = document.getElementById('hiddenPage');

        // ============================================
        // TRAINER PATH
        // ============================================
        const PATH_PERCENT = [
            { x: 24.5, y: 82 },
            { x: 24.5, y: 75 },
            { x: 24.5, y: 65 },
            { x: 24.5, y: 55 },
            { x: 24.5, y: 47 },
            { x: 35, y: 47 },
            { x: 50, y: 47 },
            { x: 50, y: 35 },
            { x: 50, y: 22 }, // Trigger Fade
            { x: 50, y: 15 },
        ];

        // ============================================
        // TREE POSITIONS
        // ============================================
        const BORDER_TREES = [
            { x: -15, y: -30 }, { x: -8, y: -28 }, { x: -1, y: -30 },
            { x: 6, y: -28 }, { x: 13, y: -30 }, { x: 20, y: -28 },
            { x: -12, y: -20 }, { x: -5, y: -18 }, { x: 2, y: -20 },
            { x: 9, y: -18 }, { x: 16, y: -20 },
            { x: 68, y: -30 }, { x: 75, y: -28 }, { x: 82, y: -30 },
            { x: 89, y: -28 }, { x: 96, y: -30 }, { x: 103, y: -28 },
            { x: 71, y: -20 }, { x: 78, y: -18 }, { x: 85, y: -20 },
            { x: 92, y: -18 }, { x: 99, y: -20 },
            { x: -20, y: -25 }, { x: -20, y: -15 }, { x: -20, y: -5 },
            { x: -20, y: 5 }, { x: -20, y: 15 }, { x: -20, y: 25 },
            { x: 96, y: -25 }, { x: 96, y: -15 }, { x: 96, y: -5 },
            { x: 96, y: 5 }, { x: 96, y: 15 }, { x: 96, y: 25 }
        ];

        const PROMINENT_TREES = [
            { x: 35, y: 34 }, { x: 43, y: 32 }, { x: 51, y: 34 },
            { x: 59, y: 32 }, { x: 67, y: 34 }, { x: 75, y: 32 },
            { x: -2, y: 5 }, { x: 97, y: 5 }, { x: 95, y: 18 }, { x: 5, y: 25 }
        ];

        // ============================================
        // SCALING SYSTEM
        // ============================================
        const initialWidth = window.innerWidth;
        const initialHeight = window.innerHeight;
        const initialScale = Math.min(initialWidth / 800, initialHeight / 533);

        let scale = 1;
        let containerWidth = initialWidth;
        let containerHeight = initialHeight;

        function calculateDimensions() {
            containerWidth = window.innerWidth;
            containerHeight = window.innerHeight;
            scale = Math.min(containerWidth / 800, containerHeight / 533);
        }

        function percentToPixel(xPercent, yPercent) {
            return {
                x: (xPercent / 100) * containerWidth,
                y: (yPercent / 100) * containerHeight
            };
        }

        function getScaledTreeDimensions() {
            const width = BASE_TREE_WIDTH * initialScale * (containerWidth / initialWidth);
            const height = BASE_TREE_HEIGHT * initialScale * (containerHeight / initialHeight);
            return { width, height };
        }

        function getScaledSpriteDimensions() {
            return {
                width: BASE_FRAME_WIDTH * scale,
                height: BASE_FRAME_HEIGHT * scale
            };
        }

        // ============================================
        // SHADOW
        // ============================================
        const SHADOW_PATTERN = [
            [0, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 0],
        ];

        function createPixelShadow() {
            shadow.innerHTML = '';
            SHADOW_PATTERN.forEach(row => {
                const rowDiv = document.createElement('div');
                rowDiv.className = 'shadow-row';
                row.forEach(pixel => {
                    const pixelDiv = document.createElement('div');
                    pixelDiv.className = 'shadow-pixel' + (pixel ? ' filled' : '');
                    rowDiv.appendChild(pixelDiv);
                });
                shadow.appendChild(rowDiv);
            });
        }

        // ============================================
        // TREES
        // ============================================
        const treeElements = [];

        function createTrees() {
            [...BORDER_TREES, ...PROMINENT_TREES].forEach((pos, idx) => {
                const tree = document.createElement('div');
                tree.className = 'tree';
                tree.dataset.x = pos.x;
                tree.dataset.y = pos.y;
                tree.dataset.anim = idx >= BORDER_TREES.length ? 'true' : 'false';
                tree.dataset.frame = Math.floor(Math.random() * 4);
                gameContainer.appendChild(tree);
                treeElements.push(tree);
            });
        }

        function updateTreePositions() {
            const treeDims = getScaledTreeDimensions();
            treeElements.forEach(tree => {
                const pos = percentToPixel(parseFloat(tree.dataset.x), parseFloat(tree.dataset.y));
                tree.style.width = treeDims.width + 'px';
                tree.style.height = treeDims.height + 'px';
                tree.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
                tree.style.backgroundSize = `${treeDims.width * 4}px ${treeDims.height}px`;
            });
        }

        // ============================================
        // ANIMATION LOOP
        // ============================================
        let pathIndex = 1;
        let currentX = PATH_PERCENT[0].x;
        let currentY = PATH_PERCENT[0].y;
        let frame = 0;
        let direction = 'down';
        let isMoving = false;
        let startDelay = 60;
        let fadeTriggered = false;

        function move() {
            if (startDelay > 0) {
                startDelay--;
                if (startDelay === 0) isMoving = true;
                return;
            }

            if (pathIndex >= PATH_PERCENT.length) {
                isMoving = false;
                updateTrainerVisuals();
                return;
            }

            if (pathIndex === 8 && !fadeTriggered) {
                triggerGymEntrance();
            }

            const target = PATH_PERCENT[pathIndex];
            const dx = target.x - currentX;
            const dy = target.y - currentY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const speed = 0.22;

            if (dist < speed) {
                currentX = target.x;
                currentY = target.y;
                pathIndex++;
                if (pathIndex < PATH_PERCENT.length) {
                    const next = PATH_PERCENT[pathIndex];
                    const adx = Math.abs(next.x - currentX);
                    const ady = Math.abs(next.y - currentY);
                    if (ady > adx) direction = next.y > currentY ? 'down' : 'up';
                    else direction = next.x > currentX ? 'right' : 'left';
                }
            } else {
                currentX += (dx / dist) * speed;
                currentY += (dy / dist) * speed;
                if (Math.abs(dy) > Math.abs(dx)) direction = dy > 0 ? 'down' : 'up';
                else direction = dx > 0 ? 'right' : 'left';
            }

            updateTrainerVisuals();
        }

        function updateTrainerVisuals() {
            const pixelPos = percentToPixel(currentX, currentY);
            const dims = getScaledSpriteDimensions();
            
            trainer.style.width = dims.width + 'px';
            trainer.style.height = dims.height + 'px';
            trainer.style.backgroundSize = `${dims.width * 4}px ${dims.height * 4}px`;
            trainer.style.transform = `translate(${pixelPos.x - dims.width / 2}px, ${pixelPos.y - dims.height}px)`;

            const walkCol = isMoving ? FRAME_SEQUENCE[Math.floor(Date.now() / 100) % 4] : 0;
            const dirRow = DIRECTIONS[direction];
            trainer.style.backgroundPosition = `-${walkCol * dims.width}px -${dirRow * dims.height}px`;

            const pixelSize = Math.max(2, Math.floor(dims.width / 16));
            const shadowWidth = pixelSize * 8;
            const shadowHeight = pixelSize * 3;
            shadow.style.transform = `translate(${pixelPos.x - shadowWidth / 2}px, ${pixelPos.y - shadowHeight / 2}px)`;
            
            shadow.querySelectorAll('.shadow-pixel').forEach(p => {
                p.style.width = pixelSize + 'px';
                p.style.height = pixelSize + 'px';
            });
        }

        function triggerGymEntrance() {
            fadeTriggered = true;
            trainer.classList.add('fade-out');
            shadow.classList.add('fade-out');
            treeElements.forEach(t => t.classList.add('fade-out'));

            setTimeout(() => {
                gameContainer.classList.add('iris-close');
            }, 400);

            setTimeout(() => {
                hiddenPage.classList.add('visible');
                gameContainer.style.display = 'none';
            }, 2400);
        }

        // Tree animation separate cycle
        setInterval(() => {
            const treeDims = getScaledTreeDimensions();
            const globalFrame = Math.floor(Date.now() / 350) % 4;
            treeElements.forEach(tree => {
                const f = tree.dataset.anim === 'true' ? globalFrame : parseInt(tree.dataset.frame);
                tree.style.backgroundPosition = `-${f * treeDims.width}px 0`;
            });
        }, 16);

        // Main Loop
        setInterval(move, 16);

        // Resize Handler
        window.addEventListener('resize', () => {
            calculateDimensions();
            updateTreePositions();
            updateTrainerVisuals();
        });

        // Init
        calculateDimensions();
        createTrees();
        createPixelShadow();
        updateTreePositions();
        updateTrainerVisuals();

    </script>
</body>
</html>
~~~
