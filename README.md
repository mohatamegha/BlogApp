# Blog Management System

A full-stack **Blog Application** built with **Spring Boot** and **MongoDB**, designed for a single-admin setup where the admin can manage blogs and comments efficiently. The app supports **category-based filtering**, **search functionality**, **real-time rich text editing**, and **comment moderation**.

---

## Features:

### 👩‍💻 Admin
- Add, edit, and delete blogs through an intuitive **Quill rich-text editor**.  
- Categorize blogs for organized viewing.  
- Manage and moderate user comments.  
- Receive notifications using **Toast** for various operations (success/error feedback).

### 👥 Viewers
- View all blogs published by the admin.  
- Filter blogs by **category** or **search** by keyword.  
- Add **comments** under blogs with their name.  
- (Future scope) Offensive comments will be automatically detected using **sentiment analysis and AI**.

---

## 🧠 Future Enhancements
- Integrate **AI-based sentiment analysis** to automatically detect and filter offensive comments.  
- Add **multi-admin support**.  
- Include **user authentication** for registered readers.  
- Implement **blog likes, shares, and bookmarking** functionality.

---

## 🏗️ Tech Stack

### **Frontend**
- **React.js**
- **Tailwind CSS** — for modern, responsive styling  
- **Toast** — for notification processing  
- **Quill.js** — as a rich-text editor for creating blogs  

### **Backend**
- **Spring Boot** — for the RESTful backend  
- **Spring Data JPA** — for ORM and data persistence  
- **Spring Security** — for authentication and route protection  
- **Spring Web** — for building REST APIs  
- **MongoDB** (and **MongoDB Atlas**) — as the NoSQL database  

---

⚙️ Setup & Installation
1️⃣ Clone the repository

git clone https://github.com/yourusername/blog-app.git
cd blog-app

2️⃣ Backend Setup (Spring Boot)

Open the project in your preferred IDE (like IntelliJ or Eclipse).

Update application.properties with your MongoDB credentials:

spring.data.mongodb.uri=your-mongodb-atlas-connection-string
spring.application.name=BlogApp


Run the Spring Boot application:

mvn spring-boot:run

3️⃣ Frontend Setup

Navigate to your frontend directory.

Install dependencies:

npm install


Start the frontend:

npm start
