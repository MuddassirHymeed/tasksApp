// import-data.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBboqAV9ZBgIESiioqIDJ5k6xy6p6JoieM",
  authDomain: "tasks-list-app-4b02e.firebaseapp.com",
  projectId: "tasks-list-app-4b02e",
  storageBucket: "tasks-list-app-4b02e.appspot.com",
  messagingSenderId: "892735097",
  appId: "1:892735097:web:fc53680b183c113943cea8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const tasksData = [
  {
    "name": "Check number range",
    "file": "tasks/checkNumberRange.html"
  },
  {
    "name": "Add characters",
    "file": "tasks/addCharacters.html"
  },
  {
    "name": "Difference by 13",
    "file": "tasks/differenceBy13.html"
  },
  {
    "name": "Check Java with string",
    "file": "tasks/checkJavaWithString.html"
  },
  {
    "name": "Compare with 50",
    "file": "tasks/compareWith50.html"
  },
  {
    "name": "Days left",
    "file": "tasks/daysLeft.html"
  },
  {
    "name": "Difference by 19",
    "file": "tasks/differenceBy19.html"
  },
  {
    "name": "Display Date",
    "file": "tasks/displayDate.html"
  },
  {
    "name": "Check by 14",
    "file": "tasks/checkBy14.html"
  },
  {
    "name": "Uppercase and lowercase",
    "file": "tasks/uppercase&lowercase.html"
  },
  {
    "name": "Remove character",
    "file": "tasks/removeCharacter.html"
  },
  {
    "name": "Change Temperature",
    "file": "tasks/changeTemperature.html"
  },
  {
    "name": "Area of traingle",
    "file": "tasks/areaofTraingle.html"
  },
  {
    "name": "Display Time",
    "file": "tasks/displayTime.html"
  },
  {
    "name": "Each Word Capitilize",
    "file": "tasks/eachWordCapitalize.html"
  },
  {
    "name": "Date format",
    "file": "tasks/dateFormat.html"
  },
  {
    "name": "Get Url",
    "file": "tasks/getURL.html"
  },
  {
    "name": "multiplication and dividion of 2 numbers",
    "file": "tasks/mul-divofTwoNumbers.html"
  },
  {
    "name": "Multiplication of 3 or 7",
    "file": "tasks/mulof3-or-7.html"
  },
  {
    "name": "Spin and Win",
    "file": "tasks/spin&Win.html"
  },
  {
    "name": "Add py",
    "file": "tasks/addPy.html"
  },
  {
    "name": "Matched numbers",
    "file": "tasks/matchedNumbers.html"
  },
  {
    "name": "Sum of Two numbers",
    "file": "tasks/sumofTwoNumbers.html"
  },
  {
    "name": "Leap year",
    "file": "tasks/leafYear.html"
  },
  {
    "name": "Display Grade Student",
    "file": "tasks/displayGradeStudent.html"
  }
];

async function importData() {
  const tasksCollection = collection(db, 'tasks');
  
  for (const task of tasksData) {
    try {
      await addDoc(tasksCollection, task);
      console.log(`Added: ${task.name}`);
    } catch (error) {
      console.error(`Error adding ${task.name}:`, error);
    }
  }
  
  console.log('Import completed');
}

importData();