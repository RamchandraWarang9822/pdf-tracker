# PDF Tracker

PDF Tracker is a web application designed to manage and track collections of PDFs for projects. It allows you to organize PDFs, track readership, and control access to specific collections.

## Features

- **PDF Management:** Upload, organize, and manage PDF files for your projects.
- **Reader Tracking:** Keep track of who has viewed or accessed specific PDFs.
- **Access Control:** Control access to collections, ensuring only authorized users can view or manage them.
- **User Authentication:** Secure user authentication to manage user accounts and permissions.

## Getting Started

Follow these steps to set up and run the PDF Tracker locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Firebase](https://firebase.google.com/) project for authentication and database

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/pdf-tracker.git
   ```

2. Navigate to the project directory:

   ```bash
   cd pdf-tracker
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a Firebase project and set up authentication and Firestore database.

5. Create a `.env` file in the project root and add your Firebase configuration:

   ```
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   ```

6. Start the application:

   ```bash
   npm run dev
   ```

7. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Firebase CORS Issue

If you encounter CORS issues with Firebase, you can follow [this guide](https://thehotcode.com/firebase-gcloud-fix-cors-issues/) to resolve them through Google Cloud Console.

## Usage

- **Login:** Log in with your credentials or create a new account.
- **Upload PDFs:** Add PDF files to your project collections.
- **Manage Collections:** Create, edit, or delete collections.
- **Track Readers:** View the history of users who accessed specific PDFs.
- **Access Control:** Set permissions for users to control who can access specific collections.

<!-- ## Contributing

Feel free to contribute to the development of PDF Tracker. Check the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines.

## License

This project is licensed under the [MIT License](LICENSE). -->

## Acknowledgments

- Thanks to [Firebase](https://firebase.google.com/) for providing storage and database services.
- Special thanks to [react-pdf-viewer](https://github.com/react-pdf-viewer/react-pdf-viewer) for providing a fantastic PDF viewer component, which greatly contributes to the functionality of this project.

<!-- - Special thanks to contributors who have helped make this project better. -->

