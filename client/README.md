# Running React App

   1. Set Up the Environment File
      a. Navigate to the client folder.
      b. Create a new file named .env.
      c. Add the following lines to the .env file:
      REACT_APP_API_URL=https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english
      REACT_APP_API_KEY=hf_XXXXXXXXXXXXXXXXXXXXXXXXXX

   2. Create an Account on Hugging Face
      a. Go to Hugging Face and sign up (if you don’t have an account).

   3. Generate an API Token on Hugging Face
      a. Open Hugging Face Tokens. (settings -> tokens)
      b. Click "Create new token", select the appropriate permissions, and generate it.
      c. Copy the generated token.
      d. Replace hf_XXXXXXXXXXXXXXXXXXXXXXXXXX in the .env file with your copied token.

   4. Install and Run the React App
      a. Open a terminal and navigate to the client folder:
      cd hugging-face-sentiment/client

      b. Install dependencies:
      npm install

      c. Start the development server:
      npm start

# Run ESLint (Code Linting)
   npx eslint path/to/file 
   e.g.
   npx eslint src/sentiment/SentimentView.tsx

# Run Prettier (Code Formatting)
   npx prettier . --check

# Run test
   npm run test

# Technologies Used

   1. React ia a JavaScript library for building user interfaces, especially single-page applications (SPAs). It allows for a component-based structure, making the code modular and   reusable. The project uses React with TypeScript to ensure better type safety and maintainability.

   2. ESLint & Prettier. ESLint is a static code analysis tool that helps enforce coding standards and detect potential errors.
      Prettier is a code formatter that ensures consistent styling throughout the project.

   3. Husky is used to enforce pre-commit hooks, ensuring that code is linted and formatted correctly before being pushed to the repository. 

   4. React Testing Library is used to write unit tests for the application.

# Challenges Faced
   The hardest was resolving dependency conflicts – integrating ESLint, Prettier, and Husky and Unit Test.
