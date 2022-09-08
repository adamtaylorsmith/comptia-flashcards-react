import React, { useState } from 'react';
import './App.css'
import LessonOne from './components/LessonOne'
import LessonTwo from './components/LessonTwo'
import LessonThree from './components/LessonThree'
import LessonFour from './components/LessonFive'
import LessonFive from './components/LessonSix'
import LessonSix from './components/LessonSix'
import LessonSeven from './components/LessonSeven'
import LessonEight from './components/LessonEight'
import LessonNine from './components/LessonNine'
import LessonTen from './components/LessonTen'
import LessonEleven from './components/LessonEleven'
import LessonTwelve from './components/LessonTwelve'
import LessonThirteen from './components/LessonThirteen'
import LessonFourteen from './components/LessonFourteen'
import LessonFifteen from './components/LessonFifteen'
import LessonSixteen from './components/LessonSixteen'
import LessonSeventeen from './components/LessonSeventeen'
import LessonEighteen from './components/LessonEighteen'
import LessonNineteen from './components/LessonNineteen'
import LessonTwenty from './components/LessonTwenty'
import LessonTwentyOne from './components/LessonTwentyone'

function App() {

  const [flashcards, setFlashcards] = useState('')

  const myComponents = {
    'one': <LessonOne flashcards={one} />,
    'two': <LessonTwo flashcards={two} />,
    'three': <LessonThree flashcards={three} />,
    'four': <LessonFour flashcards={four} />,
    'five': <LessonFive flashcards={five} />,
    'six': <LessonSix flashcards={six} />,
    'seven': <LessonSeven flashcards={seven} />,
    'eight': <LessonEight flashcards={eight} />,
    'nine': <LessonNine flashcards={nine} />,
    'ten': <LessonTen flashcards={ten} />,
    'eleven': <LessonEleven flashcards={eleven} />,
    'twelve': <LessonTwelve flashcards={twelve} />,
    'thirteen': <LessonThirteen flashcards={thirteen} />,
    'fourteen': <LessonFourteen flashcards={fourteen} />,
    'fifteen': <LessonFifteen flashcards={fifteen} />,
    'sixteen': <LessonSixteen flashcards={sixteen} />,
    'seventeen': <LessonSeventeen flashcards={seventeen} />,
    'eighteen': <LessonEighteen flashcards={eighteen} />,
    'nineteen': <LessonNineteen flashcards={nineteen} />,
    'twenty': <LessonTwenty flashcards={twenty} />,
    'twentyone': <LessonTwentyOne flashcards={twentyone} />,
  }

  return (
    <>
      <div className='text-3xl font-bold flex justify-center mt-4'>
        CompTIA Security+ SY0-601
      </div>
      <form className='flex justify-center my-6'>
        <select className='text-lg' onChange={(e) => setFlashcards(e.target.value)}>
          <option>Select Lesson to Review</option>
          {/* <option value="ports">Ports</option> */}
          <option value="one">Lesson 1 - Comparing Security Roles and Security Controls</option>
          <option value="two">Lesson 2 - Explaining Threat Actors and Threat Intelligence</option>
          <option value="three">Lesson 3 - Performing Security Assessments</option>
          <option value="four">Lesson 4 - Identifying Social Engineering and Malware</option>
          <option value="five">Lesson 5 - Summarizing Basic Cryptographic Concepts</option>
          <option value="six">Lesson 6 - Implementing Public Key Infrastructure</option>
          <option value="seven">Lesson 7 - Implementing Authentication Controls</option>
          <option value="eight">Lesson 8 - Implementing Identity and Account Management Controls</option>
          <option value="nine">Lesson 9 - Implementing Secure Network Designs</option>
          <option value="ten">Lesson 10 - Implementing Network Security Appliances</option>
          <option value="eleven">Lesson 11 - Implementing Secure Network Protocols</option>
          <option value="twelve">Lesson 12 - Implementing Host Security Solutions</option>
          <option value="thirteen">Lesson 13 - Implementing Secure Mobile Solutions</option>
          <option value="fourteen">Lesson 14 - Implementing Secure Application Concepts</option>
          <option value="fifteen">Lesson 15 - Implementing Secure Cloud Solutions</option>
          <option value="sixteen">Lesson 16 - Explaining Data Privacy and Protection Concepts</option>
          <option value="seventeen">Lesson 17 - Performing Incident Response</option>
          <option value="eighteen">Lesson 18 - Explaining Digital Forensics</option>
          <option value="nineteen">Lesson 19 - Summarizing Risk Management Concepts</option>
          <option value="twenty">Lesson 20 - Implementing Cybersecurity Resilience</option>
          <option value="twentyone">Lesson 21 - Explaining Physical Security</option>
        </select>
      </form>
      <hr/>
      {myComponents[flashcards]}
    </>
  );
}

const one = [
  {
    id: 1.00,
    question: 'LESSON 1 - Comparing Security Roles and Security Controls',
  },
  {
    id: 1.01,
    question: 'Confidentiality',
    answer: '',
  },
  {
    id: 1.02,
    question: 'Integrity',
    answer: '',
  },
  {
    id: 1.03,
    question: 'Availability',
    answer: '',
  },
  {
    id: 1.04,
    question: 'Non-repudiation',
    answer: '',
  },
  {
    id: 1.05,
    question: 'NIST',
    answer: '',
  },
  {
    id: 1.06,
    question: 'NIST Cyber Framework Five Functions',
    answer: '',
  },
  {
    id: 1.07,
    question: 'CISO',
    answer: '',
  },
  {
    id: 1.08,
    question: 'ISSO',
    answer: '',
  },
  {
    id: 1.09,
    question: 'SOC',
    answer: '',
  },
  {
    id: 1.10,
    question: 'DevOps',
    answer: '',
  },
  {
    id: 1.11,
    question: 'DevSecOps',
    answer: '',
  },
  {
    id: 1.12,
    question: 'CIRT / CERT',
    answer: '',
  },
  {
    id: 1.13,
    question: 'Security Control',
    answer: '',
  },
  {
    id: 1.14,
    question: 'Technical Control',
    answer: '',
  },
  {
    id: 1.15,
    question: 'Operational Control',
    answer: '',
  },
  {
    id: 1.16,
    question: 'Managerial Control',
    answer: '',
  },
  {
    id: 1.17,
    question: 'Preventive Control',
    answer: '',
  },
  {
    id: 1.18,
    question: 'Detective Control',
    answer: '',
  },
  {
    id: 1.19,
    question: 'Corrective Control',
    answer: '',
  },
  {
    id: 1.20,
    question: 'Physical Control',
    answer: '',
  },
  {
    id: 1.21,
    question: 'Deterrent Control',
    answer: '',
  },
  {
    id: 1.22,
    question: 'Compensating Control',
    answer: '',
  },
  {
    id: 1.23,
    question: 'CSF - Cybersecurity Framework',
    answer: '',
  },
  {
    id: 1.24,
    question: 'ISO - International Organization for Standardization',
    answer: '',
  },
  {
    id: 1.25,
    question: 'CSA - Cloud Security Alliance',
    answer: '',
  },
  {
    id: 1.26,
    question: 'SSAE - Statement on Standards for Attestation Engagements',
    answer: '',
  },
  {
    id: 1.27,
    question: 'CIS - Center for Internet Security',
    answer: '',
  },
  {
    id: 1.28,
    question: 'OWASP - Open Web Application Security Project',
    answer: '',
  },
  {
    id: 1.29,
    question: 'SOX - Sarbanes-Oxley Act',
    answer: '',
  },
  {
    id: 1.30,
    question: 'CSA - Computer Security Act',
    answer: '',
  },
  {
    id: 1.31,
    question: 'FISMA - Federal Information Security Management Act',
    answer: '',
  },
  {
    id: 1.32,
    question: 'GDRP - General Data Protection Regulation',
    answer: '',
  },
  {
    id: 1.33,
    question: 'PCI DSS - Payment Card Industry Data Security Standard',
    answer: '',
  },
  {
    id: 1.34,
    question: 'ISO 27001',
    answer: '',
  },
  {
    id: 1.35,
    question: 'ISO 27002',
    answer: '',
  },
  {
    id: 1.36,
    question: 'ISO 27017 / 27018',
    answer: '',
  },
  {
    id: 1.37,
    question: 'ISO 31K',
    answer: '',
  },
]
const two = [
  {
    id: 2.00,
    question: 'LESSON 2 - Explaining Threat Actors and Threat Intelligence',
  },
  {
    id: 2.01,
    question: '',
    answer: '',
  },
  {
    id: 2.02,
    question: '',
    answer: '',
  },
  {
    id: 2.03,
    question: '',
    answer: '',
  },
  {
    id: 2.04,
    question: '',
    answer: '',
  },
  {
    id: 2.05,
    question: '',
    answer: '',
  },
  {
    id: 2.06,
    question: '',
    answer: '',
  },
  {
    id: 2.07,
    question: '',
    answer: '',
  },
  {
    id: 2.08,
    question: '',
    answer: '',
  },
  {
    id: 2.09,
    question: '',
    answer: '',
  },
  {
    id: 2.10,
    question: '',
    answer: '',
  },
  {
    id: 2.11,
    question: '',
    answer: '',
  },
  {
    id: 2.12,
    question: '',
    answer: '',
  },
  {
    id: 2.13,
    question: '',
    answer: '',
  },
  {
    id: 2.14,
    question: '',
    answer: '',
  },
  {
    id: 2.15,
    question: '',
    answer: '',
  },
  {
    id: 2.16,
    question: '',
    answer: '',
  },
  {
    id: 2.17,
    question: '',
    answer: '',
  },
  {
    id: 2.18,
    question: '',
    answer: '',
  },
  {
    id: 2.19,
    question: '',
    answer: '',
  },
  {
    id: 2.20,
    question: '',
    answer: '',
  },
  {
    id: 2.21,
    question: '',
    answer: '',
  },
  {
    id: 2.22,
    question: '',
    answer: '',
  },
  {
    id: 2.23,
    question: '',
    answer: '',
  },
  {
    id: 2.23,
    question: '',
    answer: '',
  },
  {
    id: 2.24,
    question: '',
    answer: '',
  },
  {
    id: 2.25,
    question: '',
    answer: '',
  },
  {
    id: 2.26,
    question: '',
    answer: '',
  },
  {
    id: 2.27,
    question: '',
    answer: '',
  },
  {
    id: 2.28,
    question: '',
    answer: '',
  },
  {
    id: 2.29,
    question: '',
    answer: '',
  },
  {
    id: 2.30,
    question: '',
    answer: '',
  },
  {
    id: 2.31,
    question: '',
    answer: '',
  },
]
const three = [
  {
    id: 3.00,
    question: 'LESSON 3 - Performing Security Assessments',
  },
]
const four = [
  {
    id: 4.00,
    question: 'LESSON 4 - Identifying Social Engineering and Malware',
  },
]
const five = [
  {
    id: 5.00,
    question: 'LESSON 5 - Summarizing Basic Cryptographic Concepts',
  },
]
const six = [
  {
    id: 6.00,
    question: 'LESSON 6 - Implementing Public Key Infrastructure',
  },
]
const seven = [
  {
    id: 7.00,
    question: 'LESSON 7 - Implementing Authentication Controls',
  },
]
const eight = [
  {
    id: 8.00,
    question: 'LESSON 8 - Implementing Identity and Account Management Controls',
  }, 
]
const nine = [
  {
    id: 9.00,
    question: 'LESSON 9 - Implementing Secure Network Designs',
  },
]
const ten = [
  {
    id: 10.00,
    question: 'LESSON 10 - Implementing Network Security Appliances',
  },
]
const eleven = [
  {
    id: 11.00,
    question: 'LESSON 11 - Implementing Secure Network Protocols',
  },
]
const twelve = [
  {
    id: 12.00,
    question: 'LESSON 12 - Implementing Host Security Solutions',
  },
]
const thirteen = [
  {
    id: 13.00,
    question: 'LESSON 13 - Implementing Secure Mobile Solutions',
  },
]
const fourteen = [
  {
    id: 14.00,
    question: 'LESSON 14 - Implementing Secure Application Concepts',
  },
]
const fifteen = [
  {
    id: 15.00,
    question: 'LESSON 15 - Implementing Secure Cloud Solutions',
  },
]
const sixteen = [
  {
    id: 16.00,
    question: 'LESSON 16 - Explaining Data Privacy and Protection Concepts',
  },
]
const seventeen = [
  {
    id: 17.00,
    question: 'LESSON 17 - Performing Incident Response',
  },
]
const eighteen = [
  {
    id: 18.00,
    question: 'LESSON 18 - Explaining Digital Forensics',
  },
]
const nineteen = [
  {
    id: 19.00,
    question: 'LESSON 19 - Summarizing Risk Management Concepts',
  },
]
const twenty = [
  {
    id: 20.00,
    question: 'LESSON 20 - Implementing Cybersecurity Resilience',
  },
]
const twentyone = [
  {
    id: 21.00,
    question: 'LESSON 21 - Explaining Physical Security',
  },
]

export default App;