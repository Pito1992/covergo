# CoverGo take-home exercise

## 1. Tech Stack

| Package | Version |
| ------ | ------ |
| ReactJS | v18 |
| Redux | v4 |
| React-Redux | v8 |
| Redux Toolkit | v1.8 |
| classnames | v2.3 |
| React-final-form | v6.5 |
| React-select | v5.4 |
| React-router-dom | v6.3 |
| Yarn | v2 |
| TypeScript | |
| Sass | |
| CSS Modules | |

## 2. Project Structure

```
src
├── assets            # Store media files, including fonts, images, icons, etc...
│   └── fonts
│   └── icons
├── components        # Contains reusable components for many purposes
├── constants         # All the constant values will place here
├── pages             # Store 4 pages of the exercise
├── redux             # Handle and control the data flow
├── styles            # Global styling directory contains sass functions, mixins, variables...
├── utils             # Utility functions 
├── App.tsx           # Root router of the application
├── index.tsx         # Set up the configuration of many things such as Redux store, Context API, global styling...
```

## 3. Project Approach
##### I have chosen ReactJS to start the exercise because I have extensive knowledge of ReactJS.
##### To begin, I break the work into smaller parts and continue one by one to finish the work easier. It's like paperwork before starting to code. There were 3 things:
  + Initialization of project, including the npm packages should be used.
  + UI preparation, config some simple actions such as colors, fonts, icons, basic components...
  + Functionality and logic, things will make the app can interactive and finish the exercise.
##### Secondary, I followed and worked on the smaller tasks that had been planned.
- The "Page 1" and "Page 2 - age error" were so similar that I could reusable the code. "Page 3" was easier for the next move so I continued with it. The final one was "Page 2" and it took me longer than the others because I handled some small logic and adjusted the UI.
- On "Page 2", I used react-select for the select box; a custom input component for input text; a custom radio selection for the radio button. Those works weren't hard but they took time to implement. I also used react-final-form for the form submission so this is the stressful part to consist of everything together.
- When the UI had done so far, I moved to the last step to complete the functionality and logic. Actually,  this is the fun part and it didn't take me so much time to finish.
- With the features of react-final-from, I could collect easily the data of the form. And to store the data to use between different pages. I implemented redux to control data flow and caching. Then the result after submitting on "Page 2" could bring to "Page 3".
##### Finally, I reviewed the work again and did some manual tests to ensure no magic cases will happen.