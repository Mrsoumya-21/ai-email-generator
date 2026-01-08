# AI-Powered Email Template Generator Service

This project is a backend microservice that generates customer-friendly email templates based on user input.

## Features
- POST API to generate email templates
- Accepts purpose, recipient name, and tone
- Modular controller-service architecture
- Logs AI response time
- Environment variable support

## Tech Stack
- Node.js
- Express.js
- Nodemon

## API Endpoint

### POST /api/email/generate

#### Request Body
```json
{
  "purpose": "delay in delivery",
  "recipient_name": "Rahul",
  "tone": "polite"
}
```
#### Response
```json
{
  "email": "Dear Rahul,\n\nThank you for reaching out regarding delay in delivery. We appreciate your patience and are currently working on this issue.\n\nBest regards,\nCustomer Support Team",
  "ai_response_time_ms": 2
}
```

## Frontend Demo

A simple frontend interface is included within the backend project to demonstrate real-world usage of the API without relying on Postman.

### Features
- HTML, CSS, and JavaScript are separated into different files
- User-friendly form to enter purpose, recipient name, and tone
- API is called using Fetch API
- Generated email and AI response time are displayed in the browser

### How to Access
After starting the server, open the following URL in the browser:
 http://localhost:3000 

