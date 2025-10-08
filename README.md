Skinstric

Skinstric is an interactive AI-powered facial analysis web app that allows users to upload or scan their faces to receive automated demographic predictions such as age and race. Built with React, it offers a smooth, intuitive experience with real-time image preview, permission prompts, and animated loading states.

🚀 Features

AI Face Analysis – Upload or scan your face to let the AI predict demographic data.

Camera and Gallery Access – Choose between capturing a live photo or selecting one from your device.

Instant Image Preview – See a preview of the uploaded image before analysis.

Animated Loading State – Displays a “Preparing your analysis…” animation while the AI processes the image.

Responsive Navigation – Includes dynamic navigation behavior and route-based visibility for buttons.

Simple Back Navigation – Easy-to-use “Back” button to return to previous screens.

🧠 Tech Stack

React – UI framework

React Router DOM – Page navigation and routing

Framer Motion (optional if used) – Smooth animations

CSS3 / Flexbox – Layout and styling

JavaScript (ES6) – Logic and interactivity

📸 Core Components

Analysis.jsx – Handles file upload, camera permissions, image preview, and loading animations.

Nav.jsx – Displays navigation bar with route-specific logic (e.g., hides “ENTER CODE” button on certain pages).

index.html – Contains the main app entry point and document title.

⚙️ How It Works

The user clicks “Allow A.I. to Scan Your Face” or “Allow A.I. to Access Gallery.”

If a photo is chosen, it’s converted to Base64 and displayed as a preview.

The app automatically uploads the image to trigger AI processing.

While waiting, an animated loading state appears.

Once complete, results such as demographics and predicted age are shown.
