# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Start production server
npm start           # runs node server.js on port 8000

# Start development server with auto-reload
npm run nodemon     # uses nodemon for live-reload on changes
```

Server runs on `process.env.PORT || 8000`. No build step required.

## Architecture

**KindahCare** is a telemedicine platform built with a classic MVC pattern on Node.js.

### Stack
- **Backend:** Express.js + Socket.io (v1.7.4) for real-time features
- **Video calls:** EasyRTC (WebRTC wrapper) — server-side in `server.js`, client-side in `public/video.html` and `views/Doctor/docVideoCall.ejs` / `views/Patient/patientVideo.ejs`
- **Views:** EJS server-side templates with Bootstrap 4 UI
- **Frontend:** jQuery + Kendo UI components in `public/js/KendoUi/`

### Request Flow
```
Request → Routes/ → Controller/ → views/ (EJS render)
```
- [Routes/routes.js](Routes/routes.js) — main app routes
- [Routes/AuthRoutes.js](Routes/AuthRoutes.js) — auth routes
- [Controller/controllers.js](Controller/controllers.js) — renders doctor/patient views
- [Controller/AuthController.js](Controller/AuthController.js) — handles auth

### Role-Based UI
Two separate user roles with dedicated view directories:
- `views/Doctor/` — doctor dashboard, appointments, call queue, video call
- `views/Patient/` — patient dashboard, appointments, request appointment, video call

Shared layout components live in `views/Includes/` (nav, side menus, head/end partials). Google Translate is injected in `views/Includes/Head.ejs`.

### Real-Time / Video
Socket.io and EasyRTC are wired together in [server.js](server.js). EasyRTC handles WebRTC signaling; Socket.io handles room join events and call log updates. The standalone `public/video.html` is a separate video call interface independent of the EJS templates.

### Current State
- No database layer — views use hardcoded/static data
- No authentication middleware implemented yet (routes exist, controllers are stubs)
- No test infrastructure
