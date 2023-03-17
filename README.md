# Bruin-Subleasing

Bruin-Subleasing is a web application that connects UCLA students and community members for subleasing opportunities. Users can register, create, and browse sublease listings, simplifying the process of finding temporary housing options around campus. Our presentation for the project is located at `"Bruin Subleasing Presentation"` and `"CS35L Final Report"`

## Prerequisites

Before you begin, ensure you have the following software installed on your system:

1. Node Version Manager (NVM)
2. Node.js (using NVM)

### Install NVM

To install NVM, follow the instructions in the [NVM repository](https://github.com/nvm-sh/nvm#installing-and-updating) for your platform.

### Install Node.js

After installing NVM, install the recommended version of Node.js by running:

```bash
nvm install --lts
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Installation

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/bruin-subleasing.git
```

### Unpack Tarball

If you have a tarball of the project, extract the contents:

```
tar -xvf bruin-subleasing.tar.gz
```

### Install dependencies

Navigate to the project directory and install the required dependencies using NPM:

```
cd bruin-subleasing
npm install
```

# Usage

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## Authentication

Before you can access bruin subleasing, you will need to be authenticated. If this is your first time using our platform, you will need to register for an account.

### Register for an account

1. Fill out the registration form with your details.
2. Click "create an account."
3. You will be now get a success message and be signed in.

### Sign in

1. Enter your email address and password
2. Click "log in."
3. You will be now get a success message and be signed in.

## Create a sublease

1. After logging in, click the "Add sublease" button in the top navigation bar.
2. Fill out the sublease listing form with the required information. To submit a sublease you need to provide the following information:

- Apartment address
- Monthly rent
- Relevant UCLA quarter
- Relevant year
- Number of bedrooms
- Number of bathrooms
- URL to an image of the sublease
- Square footage
- Number of roommates

3. You will also have the option to select any amenities your sublease may have.
4. Click "Create sublease" to add your listing to the platform. You're all set!

## Browse and Interact with Sublease Listings

1. After logging in, click the "Listings" button in the top navigation bar.

You will now see a series of all of the listings currently posted to our platform! From here, you can click on any listings that capture your attention and learn more about both them and the contact information of the poster.

Alternatively, you could navigate to the `Search` button at the top navigation bar where you will find the ability to search for a specific listing you may have heard about.

## Contact us

If you have any questions, comments, or concerns, please feel free to contact us. You can reach us by filling out the contact form on our website. You can access our contact form by navigating to `/contact` or by clicking the `contact` button on the navbar at the top.

Simply fill out the form with your name, email, and message. Once you click the "Submit" button, your message will be sent to our team.

Thank you for your interest in our product, and we look forward to hearing from you!

## Page overviews

### Home

Our home page is where you can find more information about Bruin Subleasing. Here we discuss what differentiates us from other subleasing platforms.

### Support

If you'd like to get in touch with our team or reach out for support, please navigate to the bottom of the Home page.

### About

If you'd like to learn more about our mission at Bruin Subleasing and some of our key values, check out our About page!

You can start editing the page by modifying `pages/index.js`. The project is configured to automatically listen to refreshed and update as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages, meaning a files name is how it will be accessed in your url.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Framework

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Repository Structure

```python
📦bruin-subleasing
 ┣ 📂components
 ┃ ┣ 📂card
 ┃ ┃ ┣ 📜Card.jsx               # Card for Post Previews
 ┃ ┃ ┗ 📜CardGrid.jsx           # Layout Grid for Post Previews
 ┃ ┣ 📂login
 ┃ ┃ ┣ 📜Guard.jsx              # Page Protection for Unauthenticated Users
 ┃ ┃ ┣ 📜LoginForm.jsx          # Login Form
 ┃ ┃ ┣ 📜LoginRegister.jsx      # Login + Register
 ┃ ┃ ┣ 📜RegisterForm.jsx       # Register Form
 ┃ ┃ ┣ 📜UserComponent.jsx      # Contact Card
 ┃ ┃ ┗ 📜UserList.jsx           # List of Users
 ┃ ┣ 📂post
 ┃ ┃ ┣ 📜AmenityCard.jsx        # Amenities in Post Detail
 ┃ ┃ ┗ 📜Post.jsx               # Post Detail
 ┃ ┣ 📜DeleteCard.jsx           # Card for Authenticated Delete
 ┃ ┣ 📜DynamicPost.jsx          # Implements Query for Detail Post
 ┃ ┣ 📜Footer.jsx               # Footer Component
 ┃ ┣ 📜Hero.jsx                 # Home Styling
 ┃ ┣ 📜Infotab.jsx              # Home Styling
 ┃ ┣ 📜Layout.jsx               # Layout with Navbar
 ┃ ┣ 📜MyPosts.jsx              # All Posts
 ┃ ┣ 📜NavUpdated.jsx           # Navbar
 ┃ ┣ 📜Search.jsx               # Search Feature
 ┃ ┣ 📜SubleaseInput.jsx        # Input Form
 ┃ ┗ 📜Supportpage.jsx          # Support Page
 ┣ 📂context
 ┃ ┗ 📜AuthContext.js           # All Authentication Functions + Context Creation
 ┣ 📂data
 ┃ ┣ 📜app_routes.js            # Protected Routes
 ┃ ┗ 📜posts.js                 # Development Posts
 ┣ 📂pages
 ┃ ┣ 📂admin
 ┃ ┃ ┗ 📜users.js               # User Page
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📜firebase-config.js     # Firebase Info
 ┃ ┣ 📂posts
 ┃ ┃ ┗ 📜[postId].js            # Detail Post Page
 ┃ ┣ 📂users
 ┃ ┃ ┗ 📜[uid].js               # Detail Author Page
 ┃ ┣ 📜_app.js                  # App
 ┃ ┣ 📜_document.js             # SEO
 ┃ ┣ 📜about.js                 # About Page
 ┃ ┣ 📜add-sublease.js          # Add Sublease Page
 ┃ ┣ 📜browse.js                # Browse Page
 ┃ ┣ 📜homepage.js              # Home Page
 ┃ ┣ 📜index.js                 # Reroutes to Home
 ┃ ┣ 📜listings.js              # All Listings
 ┃ ┣ 📜register.js              # Register Page
 ┃ ┗ 📜search.js                # Search Page
 ┣ 📂public
 ┃ ┗ 📂static
 ┃ ┃ ┗ 📂images                 # All Static Images
 ┣ 📂styles
 ┃ ┗ 📜globals.css              # Global Styles
 ┣ 📜.env                       # Firebase Tokens
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜jsconfig.json
 ┣ 📜next.config.js
 ┣ 📜postcss.config.js
 ┗ 📜tailwind.config.js         # Tailwind Config
```
