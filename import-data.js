import { initializeApp } from 'firebase/app';
import { getFirestore, collection, writeBatch, doc } from 'firebase/firestore';

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
    "name": "Add py",
    "file": "tasks/addPy.html"
  },
  {
    "name": "Check by 14",
    "file": "tasks/checkBy14.html"
  },
  {
    "name": "Difference by 13",
    "file": "tasks/differenceBy13.html"
  },
  {
    "name": "Add characters",
    "file": "tasks/addCharacters.html"
  },
  {
    "name": "Area of triangle",
    "file": "tasks/areaofTriangle.html"
  },
  {
    "name": "Check Java with string",
    "file": "tasks/checkJavaWithString.html"
  },
  {
    "name": "Check number range",
    "file": "tasks/checkNumberRange.html"
  },
  {
    "name": "Date format",
    "file": "tasks/dateFormat.html"
  },
  {
    "name": "Days left",
    "file": "tasks/daysLeft.html"
  },
  {
    "name": "Get Url",
    "file": "tasks/getURL.html"
  },
  {
    "name": "Change Temperature",
    "file": "tasks/changeTemperature.html"
  },
  {
    "name": "Compare with 50",
    "file": "tasks/compareWith50.html"
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
    "name": "Display Grade Student",
    "file": "tasks/displayGradeStudent.html"
  },
  {
    "name": "Display Time",
    "file": "tasks/displayTime.html"
  },
  {
    "name": "Each Word Capitalize",
    "file": "tasks/eachWordCapitalize.html"
  },
  {
    "name": "Leap year",
    "file": "tasks/leafYear.html"
  },
  {
    "name": "Matched numbers",
    "file": "tasks/matchedNumbers.html"
  },
  {
    "name": "multiplication and division of 2 numbers",
    "file": "tasks/mul-divofTwoNumbers.html"
  },
  {
    "name": "Multiplication of 3 or 7",
    "file": "tasks/mulof3-or-7.html"
  },
  {
    "name": "Remove character",
    "file": "tasks/removeCharacter.html"
  },
  {
    "name": "Spin and Win",
    "file": "tasks/spin&Win.html"
  },
  {
    "name": "Sum of Two numbers",
    "file": "tasks/sumofTwoNumbers.html"
  },
  {
    "name": "Uppercase and lowercase",
    "file": "tasks/uppercase&lowercase.html"
  }
];

async function importData() {
  try {
    const batch = writeBatch(db);
    const tasksCollection = collection(db, 'tasks');
    
    tasksData.forEach(task => {
      const docRef = doc(tasksCollection);
      batch.set(docRef, task);
    });
    
    await batch.commit();
    console.log('All tasks imported successfully!');
  } catch (error) {
    console.error('Error during import:', error);
  }
}

importData();