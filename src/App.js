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
    question: 'Vulnerability',
    answer: '',
  },
  {
    id: 2.02,
    question: 'Threat',
    answer: '',
  },
  {
    id: 2.03,
    question: 'Risk',
    answer: '',
  },
  {
    id: 2.04,
    question: 'What are two critical attributes to know about threat actors',
    answer: '',
  },
  {
    id: 2.05,
    question: 'Black Hat',
    answer: '',
  },
  {
    id: 2.06,
    question: 'White Hat',
    answer: '',
  },
  {
    id: 2.07,
    question: 'Grey Hat',
    answer: '',
  },
  {
    id: 2.08,
    question: 'Script Kiddie',
    answer: '',
  },
  {
    id: 2.09,
    question: 'Hacktivist',
    answer: '',
  },
  {
    id: 2.10,
    question: 'APT - Advanced Persistent Threat',
    answer: '',
  },
  {
    id: 2.11,
    question: 'State Actors',
    answer: '',
  },
  {
    id: 2.12,
    question: 'Criminal Syndicate',
    answer: '',
  },
  {
    id: 2.13,
    question: 'Shadow IT',
    answer: '',
  },
  {
    id: 2.14,
    question: 'Attack Surface',
    answer: '',
  },
  {
    id: 2.15,
    question: 'Attack Vector',
    answer: '',
  },
  {
    id: 2.16,
    question: 'Deep Web',
    answer: '',
  },
  {
    id: 2.17,
    question: 'Dark Net',
    answer: '',
  },
  {
    id: 2.18,
    question: 'Dark Web',
    answer: '',
  },
  {
    id: 2.19,
    question: 'Reputational Threat Intelligence',
    answer: '',
  },
  {
    id: 2.20,
    question: 'CTI - Cyber Threat Intelligence',
    answer: '',
  },
  {
    id: 2.21,
    question: 'Closed / Proprietary CTI',
    answer: '',
  },
  {
    id: 2.22,
    question: 'Vendor CTI',
    answer: '',
  },
  {
    id: 2.23,
    question: 'ISAC - Information Sharing and Analysis Centers',
    answer: '',
  },
  {
    id: 2.24,
    question: 'OSINT - Open Source Intelligence',
    answer: '',
  },
  {
    id: 2.25,
    question: 'TTP - Tactic, Technique, and Procedure',
    answer: '',
  },
  {
    id: 2.26,
    question: 'IoC - Indicator of Compromise',
    answer: '',
  },
  {
    id: 2.27,
    question: 'STIX - Structured Threat Information eXpression',
    answer: '',
  },
  {
    id: 2.28,
    question: 'TAXII - Trusted Automated eXchange of Indicator Information',
    answer: '',
  },
  {
    id: 2.29,
    question: 'AIS - Automated Indicator Sharing',
    answer: '',
  },
  {
    id: 2.30,
    question: 'Threat Map',
    answer: '',
  },
  {
    id: 2.31,
    question: 'CVE - Common Vulnerabilities and Exposures',
    answer: '',
  },
]
const three = [
  {
    id: 3.00,
    question: 'LESSON 3 - Performing Security Assessments',
  },
  {
    id: 3.01,
    question: 'ipconfig',
    answer: '',
  },
  {
    id: 3.02,
    question: 'ifconfig',
    answer: '',
  },
  {
    id: 3.03,
    question: 'ip',
    answer: '',
  },
  {
    id: 3.04,
    question: 'ping',
    answer: '',
  },
  {
    id: 3.05,
    question: 'arp',
    answer: '',
  },
  {
    id: 3.06,
    question: 'route',
    answer: '',
  },
  {
    id: 3.07,
    question: 'tracert',
    answer: '',
  },
  {
    id: 3.08,
    question: 'traceroute',
    answer: '',
  },
  {
    id: 3.09,
    question: 'pathping',
    answer: '',
  },
  {
    id: 3.10,
    question: 'mtr',
    answer: '',
  },
  {
    id: 3.11,
    question: 'nmap',
    answer: '',
  },
  {
    id: 3.12,
    question: 'netstat',
    answer: '',
  },
  {
    id: 3.13,
    question: 'nslookup',
    answer: '',
  },
  {
    id: 3.14,
    question: 'dig',
    answer: '',
  },
  {
    id: 3.15,
    question: 'theHarvester',
    answer: '',
  },
  {
    id: 3.16,
    question: 'curl',
    answer: '',
  },
  {
    id: 3.17,
    question: 'Nessus',
    answer: '',
  },
  {
    id: 3.18,
    question: 'Packet Analysis',
    answer: '',
  },
  {
    id: 3.19,
    question: 'Protocol Analysis',
    answer: '',
  },
  {
    id: 3.20,
    question: 'tcpdump',
    answer: '',
  },
  {
    id: 3.21,
    question: 'Wireshark',
    answer: '',
  },
  {
    id: 3.22,
    question: 'hping',
    answer: '',
  },
  {
    id: 3.23,
    question: 'tcpreplay',
    answer: '',
  },
  {
    id: 3.24,
    question: 'Exploitation Framework',
    answer: '',
  },
  {
    id: 3.25,
    question: 'netcat (nc)',
    answer: '',
  },
  {
    id: 3.26,
    question: 'Zero Day',
    answer: '',
  },
  {
    id: 3.27,
    question: 'Vendor Management',
    answer: '',
  },
  {
    id: 3.28,
    question: 'Vulnerability Assessment',
    answer: '',
  },
  {
    id: 3.29,
    question: 'Vulnerability Scanner',
    answer: '',
  },
  {
    id: 3.30,
    question: 'SCAP - Security Content Application Protocol',
    answer: '',
  },
  {
    id: 3.31,
    question: 'OVAL - Open Vulnerability and Assessment Language',
    answer: '',
  },
  {
    id: 3.32,
    question: 'XCCDF - Extensible Configuration Checklist Description Format',
    answer: '',
  },
  {
    id: 3.33,
    question: 'CVSS - Common Vulnerability Scoring System',
    answer: '',
  },
  {
    id: 3.34,
    question: 'Non-intrusive Scanning',
    answer: '',
  },
  {
    id: 3.35,
    question: 'Active Scanning',
    answer: '',
  },
  {
    id: 3.36,
    question: 'False Positive',
    answer: '',
  },
  {
    id: 3.37,
    question: 'False Negative',
    answer: '',
  },
  {
    id: 3.38,
    question: '',
    answer: '',
  },
  {
    id: 3.39,
    question: '',
    answer: '',
  },
  {
    id: 3.40,
    question: '',
    answer: '',
  },
  {
    id: 3.41,
    question: '',
    answer: '',
  },
  {
    id: 3.42,
    question: '',
    answer: '',
  },
  {
    id: 3.43,
    question: '',
    answer: '',
  },
  {
    id: 3.44,
    question: '',
    answer: '',
  },
  {
    id: 3.45,
    question: '',
    answer: '',
  },
  {
    id: 3.46,
    question: '',
    answer: '',
  },
  {
    id: 3.47,
    question: '',
    answer: '',
  },
  {
    id: 3.48,
    question: '',
    answer: '',
  },
  {
    id: 3.49,
    question: '',
    answer: '',
  },
  {
    id: 3.50,
    question: '',
    answer: '',
  },
  {
    id: 3.51,
    question: '',
    answer: '',
  },
  {
    id: 3.52,
    question: '',
    answer: '',
  },
  {
    id: 3.53,
    question: '',
    answer: '',
  },
  {
    id: 3.54,
    question: '',
    answer: '',
  },
  {
    id: 3.55,
    question: '',
    answer: '',
  },
  {
    id: 3.56,
    question: '',
    answer: '',
  },
  {
    id: 3.57,
    question: '',
    answer: '',
  },
  {
    id: 3.58,
    question: '',
    answer: '',
  },
  {
    id: 3.59,
    question: '',
    answer: '',
  },
]
const four = [
  {
    id: 4.00,
    question: 'LESSON 4 - Identifying Social Engineering and Malware',
  },
  {
    id: 4.01,
    question: 'Social Engineering',
    answer: '',
  },
  {
    id: 4.02,
    question: 'Four Social Engineering Principles',
    answer: '',
  },
  {
    id: 4.03,
    question: 'Impersonation',
    answer: '',
  },
  {
    id: 4.04,
    question: 'Dumpster Diving',
    answer: '',
  },
  {
    id: 4.05,
    question: 'Tailgating',
    answer: '',
  },
  {
    id: 4.06,
    question: 'Piggybacking',
    answer: '',
  },
  {
    id: 4.07,
    question: 'Identity Fraud',
    answer: '',
  },
  {
    id: 4.08,
    question: 'Shoulder Surfing',
    answer: '',
  },
  {
    id: 4.09,
    question: 'Lunchtime Attack',
    answer: '',
  },
  {
    id: 4.10,
    question: 'Phishing',
    answer: '',
  },
  {
    id: 4.11,
    question: 'Spear Phishing',
    answer: '',
  },
  {
    id: 4.12,
    question: 'Whaling',
    answer: '',
  },
  {
    id: 4.13,
    question: 'Vishing',
    answer: '',
  },
  {
    id: 4.14,
    question: 'SMiShing',
    answer: '',
  },
  {
    id: 4.15,
    question: 'Spim',
    answer: '',
  },
  {
    id: 4.16,
    question: 'Spam',
    answer: '',
  },
  {
    id: 4.17,
    question: 'Hoax',
    answer: '',
  },
  {
    id: 4.18,
    question: 'Prepending',
    answer: '',
  },
  {
    id: 4.19,
    question: 'Pharming',
    answer: '',
  },
  {
    id: 4.20,
    question: 'Typosquatting',
    answer: '',
  },
  {
    id: 4.21,
    question: 'Watering Hole',
    answer: '',
  },
  {
    id: 4.22,
    question: 'Credential Harvesting',
    answer: '',
  },
  {
    id: 4.23,
    question: 'Influence Campaign',
    answer: '',
  },
  {
    id: 4.24,
    question: 'Trojan',
    answer: '',
  },
  {
    id: 4.25,
    question: 'PUP - Potentially Unwanted Programs',
    answer: '',
  },
  {
    id: 4.26,
    question: 'Virus',
    answer: '',
  },
  {
    id: 4.27,
    question: 'Non-resident / File Infector Virus',
    answer: '',
  },
  {
    id: 4.28,
    question: 'Memory Resident Virus',
    answer: '',
  },
  {
    id: 4.29,
    question: 'Boot Sector Virus',
    answer: '',
  },
  {
    id: 4.30,
    question: 'Script and Macro Viruses',
    answer: '',
  },
  {
    id: 4.31,
    question: 'Multipartite Virus',
    answer: '',
  },
  {
    id: 4.32,
    question: 'Polymorphic Virus',
    answer: '',
  },
  {
    id: 4.33,
    question: 'Worm',
    answer: '',
  },
  {
    id: 4.34,
    question: 'Shellcode',
    answer: '',
  },
  {
    id: 4.35,
    question: 'Cookies',
    answer: '',
  },
  {
    id: 4.36,
    question: 'Adware',
    answer: '',
  },
  {
    id: 4.37,
    question: 'Spyware',
    answer: '',
  },
  {
    id: 4.38,
    question: '',
    answer: '',
  },
  {
    id: 4.39,
    question: '',
    answer: '',
  },
  {
    id: 4.40,
    question: '',
    answer: '',
  },
  {
    id: 4.41,
    question: '',
    answer: '',
  },
  {
    id: 4.42,
    question: '',
    answer: '',
  },
  {
    id: 4.43,
    question: '',
    answer: '',
  },
  {
    id: 4.44,
    question: '',
    answer: '',
  },
  {
    id: 4.45,
    question: '',
    answer: '',
  },
  {
    id: 4.46,
    question: '',
    answer: '',
  },
  {
    id: 4.47,
    question: '',
    answer: '',
  },
  {
    id: 4.48,
    question: '',
    answer: '',
  },
  {
    id: 4.49,
    question: '',
    answer: '',
  },
  {
    id: 4.50,
    question: '',
    answer: '',
  },
  {
    id: 4.51,
    question: '',
    answer: '',
  },
  {
    id: 4.52,
    question: '',
    answer: '',
  },
]
const five = [
  {
    id: 5.00,
    question: 'LESSON 5 - Summarizing Basic Cryptographic Concepts',
  },
  {
    id: 5.01,
    question: 'Cryptography',
    answer: '',
  },
  {
    id: 5.02,
    question: 'Plaintext',
    answer: '',
  },
  {
    id: 5.03,
    question: 'Ciphertext',
    answer: '',
  },
  {
    id: 5.04,
    question: 'Cipher',
    answer: '',
  },
  {
    id: 5.05,
    question: 'Cryptanalysis',
    answer: '',
  },
  {
    id: 5.06,
    question: 'Hashing',
    answer: '',
  },
  {
    id: 5.07,
    question: 'Checksum / Message Digest / Hash',
    answer: '',
  },
  {
    id: 5.08,
    question: 'SHA - Secure Hashing Algorithm',
    answer: '',
  },
  {
    id: 5.09,
    question: 'MD5 - Message Digest Algorithm #5',
    answer: '',
  },
  {
    id: 5.10,
    question: 'Substitution Cipher',
    answer: '',
  },
  {
    id: 5.11,
    question: 'Transposition Cipher',
    answer: '',
  },
  {
    id: 5.12,
    question: 'Symmetric Encryption',
    answer: '',
  },
  {
    id: 5.13,
    question: 'Stream Cipher',
    answer: '',
  },
  {
    id: 5.14,
    question: 'Block Cipher',
    answer: '',
  },
  {
    id: 5.15,
    question: 'AES - Advanced Encryption Standard',
    answer: '',
  },
  {
    id: 5.16,
    question: 'Asymmetric Encryption',
    answer: '',
  },
  {
    id: 5.17,
    question: 'RSA Algorithm',
    answer: '',
  },
  {
    id: 5.18,
    question: 'Trapdoor Function',
    answer: '',
  },
  {
    id: 5.19,
    question: 'ECC - Elliptic Curve Cryptography',
    answer: '',
  },
  {
    id: 5.20,
    question: 'Digital Signature',
    answer: '',
  },
  {
    id: 5.21,
    question: 'DSA - Digital Signature Algorithm',
    answer: '',
  },
  {
    id: 5.22,
    question: 'Key Exchange',
    answer: '',
  },
  {
    id: 5.23,
    question: 'Digital Certificates',
    answer: '',
  },
  {
    id: 5.24,
    question: 'PFS - Perfect Forward Secrecy',
    answer: '',
  },
  {
    id: 5.25,
    question: 'DHE - Diffie-Hellman Ephemeral / ECDHE - Elliptic Curve Diffie-Hellman Ephemeral',
    answer: '',
  },
  {
    id: 5.26,
    question: 'Cipher Suite',
    answer: '',
  },
  {
    id: 5.27,
    question: 'CBC - Cipher Block Chaining',
    answer: '',
  },
  {
    id: 5.28,
    question: 'Counter Mode',
    answer: '',
  },
  {
    id: 5.29,
    question: 'MAC - Message Authentication Code',
    answer: '',
  },
  {
    id: 5.30,
    question: 'Cryptographic Primitive',
    answer: '',
  },
  {
    id: 5.31,
    question: 'Symmetric encryption provides..',
    answer: '',
  },
  {
    id: 5.32,
    question: 'Hashing algorithms provide..',
    answer: '',
  },
  {
    id: 5.33,
    question: 'Asymmetric encryption provides..',
    answer: '',
  },
  {
    id: 5.34,
    question: 'Obfuscation',
    answer: '',
  },
  {
    id: 5.35,
    question: 'Cryptographic Performance Limitations',
    answer: '',
  },
  {
    id: 5.36,
    question: 'Cryptographic Security Limitations',
    answer: '',
  },
  {
    id: 5.37,
    question: 'Entropy',
    answer: '',
  },
  {
    id: 5.38,
    question: '',
    answer: '',
  },
  {
    id: 5.39,
    question: '',
    answer: '',
  },
  {
    id: 5.40,
    question: '',
    answer: '',
  },
  {
    id: 5.41,
    question: '',
    answer: '',
  },
  {
    id: 5.42,
    question: '',
    answer: '',
  },
  {
    id: 5.43,
    question: '',
    answer: '',
  },
  {
    id: 5.44,
    question: '',
    answer: '',
  },
  {
    id: 5.45,
    question: '',
    answer: '',
  },
  {
    id: 5.46,
    question: '',
    answer: '',
  },
  {
    id: 5.47,
    question: '',
    answer: '',
  },
  {
    id: 5.48,
    question: '',
    answer: '',
  },
  {
    id: 5.49,
    question: '',
    answer: '',
  },
  {
    id: 5.50,
    question: '',
    answer: '',
  },
  {
    id: 5.51,
    question: '',
    answer: '',
  },
  {
    id: 5.52,
    question: '',
    answer: '',
  },
  {
    id: 5.53,
    question: '',
    answer: '',
  },
  {
    id: 5.54,
    question: '',
    answer: '',
  },
]
const six = [
  {
    id: 6.00,
    question: 'LESSON 6 - Implementing Public Key Infrastructure',
  },
  {
    id: 6.01,
    question: 'PKI - Public Key Infrastructure',
    answer: '',
  },
  {
    id: 6.02,
    question: 'CA - Certificate Authority',
    answer: '',
  },
  {
    id: 6.03,
    question: 'Certificate Chaining',
    answer: '',
  },
  {
    id: 6.04,
    question: 'Online CA',
    answer: '',
  },
  {
    id: 6.05,
    question: 'Offline CA',
    answer: '',
  },
  {
    id: 6.06,
    question: 'CSR - Certificate Signing Request',
    answer: '',
  },
  {
    id: 6.07,
    question: 'RA - Registration Authority',
    answer: '',
  },
  {
    id: 6.08,
    question: 'Digital Certificate',
    answer: '',
  },
  {
    id: 6.09,
    question: 'What standard is used for digital certificates?',
    answer: '',
  },
  {
    id: 6.10,
    question: 'SAN - Subject Alternative Name',
    answer: '',
  },
  {
    id: 6.11,
    question: 'Server Certificate',
    answer: '',
  },
  {
    id: 6.12,
    question: 'DV - Domain Validation',
    answer: '',
  },
  {
    id: 6.13,
    question: 'EV - Extended Validation',
    answer: '',
  },
  {
    id: 6.14,
    question: 'Root Certificate',
    answer: '',
  },
  {
    id: 6.15,
    question: 'Self-signed Certificate',
    answer: '',
  },
  {
    id: 6.16,
    question: 'Key Management Life Cycle',
    answer: '',
  },
  {
    id: 6.17,
    question: 'M-of-N Control',
    answer: '',
  },
  {
    id: 6.18,
    question: 'Key Escrow',
    answer: 'Keys are managed by a third party, e.g. a trusted CA',
  },
  {
    id: 6.19,
    question: 'CRL - Certificate Revocation List',
    answer: 'A list of digital certificate revocations and suspensions that CAs maintain and distribute throughout the hierarchy',
  },
  {
    id: 6.20,
    question: 'OCSP - Online Certificate Status Protocol',
    answer: 'An alternative to CRLs; instead of returning the whole list, it gives you the status of just the requested cert',
  },
  {
    id: 6.21,
    question: 'OCSP Stapling',
    answer: 'An improvement to OCSP that reduces the high demands on the CA by having a web server periodically get a time-stamped OCSP response and storing it in a cache to pull from',
  },
  {
    id: 6.22,
    question: 'Certificate Pinning',
    answer: 'Several techniques used to ensure that when a client inspects a certificate presented by a server or app, it is inspecting the right certificate',
  },
  {
    id: 6.23,
    question: 'DER - Distinguished Encoding Rules',
    answer: 'An X.509 encoding format, the data is processed as binary',
  },
  {
    id: 6.24,
    question: 'PEM - Privacy-Enhanced Electronic Mail',
    answer: 'An X.509 encoding format where binary data is represented as ASCII text characters using Base64',
  },
  {
    id: 6.25,
    question: 'PKCS #12 Format',
    answer: 'Allows the export of private keys with certificates; on Windows seen as .PFX, MacOS as .P12',
  },
  {
    id: 6.26,
    question: 'P7B Format',
    answer: 'Allows us to bundle multiple certificates into the same file',
  },
  {
    id: 6.27,
    question: 'OpenSSL',
    answer: 'Enables us to generate, sign, manage and validate certificates in Linux, as opposed to something like Active Directory in Windows',
  },
]
const seven = [
  {
    id: 7.00,
    question: 'LESSON 7 - Implementing Authentication Controls',
  },
  {
    id: 7.01,
    question: 'Identification',
    answer: 'Creating an account or ID that uniquely represents a user, device, or process on the network',
  },
  {
    id: 7.02,
    question: 'Authentication',
    answer: 'Proving a subject is who or what it claims to be when it attempts to access a resource',
  },
  {
    id: 7.03,
    question: 'Authorization',
    answer: 'Determining what rights subjects should have on each resource and enforcing those rights',
  },
  {
    id: 7.04,
    question: 'Accounting',
    answer: 'Tracking authorized usage of a resource or use of rights by a subject and alerting when unauthorized use is detected or attempted',
  },
  {
    id: 7.05,
    question: 'Something You Know Authentication',
    answer: 'Passwords, PINs, personal challenge questions, swipe patterns',
  },
  {
    id: 7.06,
    question: 'Something You Have Authentication',
    answer: 'Smart cards, key fobs, OTPs',
  },
  {
    id: 7.07,
    question: 'Something You Are Authentication',
    answer: 'Fingerprints, facial recognition, retinal and iris scans',
  },
  {
    id: 7.08,
    question: 'Something You Do Authentication',
    answer: 'Voice recognition, how you sign your name, how you type, how you walk',
  },
  {
    id: 7.09,
    question: 'PAM - Pluggable Authentication Module',
    answer: 'A package for enabling different authentication providers, like a smart-card login',
  },
  {
    id: 7.10,
    question: 'Three Heads of Kerberos',
    answer: 'Client, application server, KDC',
  },
  {
    id: 7.11,
    question: 'PAP - PAssword Authentication Protocol',
    answer: 'A weak authentication protocol that passes all information in cleartext; depreciated and avoided',
  },
  {
    id: 7.12,
    question: 'Challenge Handshake Authentication Protocol',
    answer: 'An older three-way authentication handshake for authenticating over a remote link',
  },
  {
    id: 7.13,
    question: 'CHAP Three-Way Handshake',
    answer: 'Challenge issued by server / response from client verification / if aok connection is granted',
  },
  {
    id: 7.14,
    question: 'MS-CHAPv2',
    answer: 'Microsoft version of CHAP. v2 is still using vulnerable hashes, so still unsecure overall, but does offer mutual authentication',
  },
  {
    id: 7.15,
    question: 'Online Password Attack',
    answer: 'The attacker interacts with the authentication service directly; like submitting passwords on a website over and over',
  },
  {
    id: 7.16,
    question: 'Password Spraying',
    answer: 'Taking a list of possible user accounts and trying very common passwords with them',
  },
  {
    id: 7.17,
    question: 'Offline Password Attack',
    answer: 'Attempt to discover passwords from a captured database or captured packet scan',
  },
  {
    id: 7.18,
    question: 'Brute-force Attack',
    answer: 'An attack on passwords or encryption that tries every possible character combination for passwords or encryption keys',
  },
  {
    id: 7.19,
    question: 'Dictionary Attack',
    answer: 'A password attack that uses ordinary or common words to guess password',
  },
  {
    id: 7.20,
    question: 'Rainbow Tables',
    answer: 'In password cracking, a set of precalculated hashed passwords located in a lookup table',
  },
  {
    id: 7.21,
    question: 'Hybrid Password Attack',
    answer: 'A password attack using a combination of dictionary and brute-force attacks',
  },
  {
    id: 7.22,
    question: 'Smart Card',
    answer: 'Some are powerful enough to generate key material using a cryptoprocessor in the card',
  },
  {
    id: 7.23,
    question: 'USB Key',
    answer: 'Some are powerful enough to generate key material using a cryptoprocesser in the USB',
  },
  {
    id: 7.24,
    question: 'TPM - Trusted Platform Module',
    answer: 'A secure cryptoprocessor implemented in a device, typically a module within the CPU; generates keys for the device user',
  },
  {
    id: 7.25,
    question: 'Hardware Security Module',
    answer: 'A standalone device designed to perform centralized PKI management for a network of other devices; can archive or act as escrow for keys',
  },
  {
    id: 7.26,
    question: '802.1X/PNAC relies on',
    answer: 'EAP Extensible Authentication Protocol',
  },
  {
    id: 7.27,
    question: 'Three Parts of 802.1X AAA Architecture',
    answer: 'Supplicant device requesting access / Network Access Server NAS; switches, APs, VPN gateways / AAA Server authentication server in internal network',
  },
  {
    id: 7.28,
    question: 'RADIUS',
    answer: 'AAA server; open source; uses UDP; only encrypts authentication information',
  },
  {
    id: 7.29,
    question: 'TACACS+',
    answer: 'AAA server; Cisco product; uses TCP; encrypts entire packet',
  },
  {
    id: 7.30,
    question: 'OTP - One-Time Password',
    answer: 'An authentication code that can be used only once',
  },
  {
    id: 7.31,
    question: 'OATH - Initiative for Open Authentication',
    answer: 'An industry body established with the aim of developing an open, strong authentication framework',
  },
  {
    id: 7.32,
    question: 'HOTP - HMAC-Based One-Time Password',
    answer: 'HMAC-based algorithm used to generate a one-time password; delivered to user as a form of 2FA',
  },
  {
    id: 7.33,
    question: 'TOTP - Time-Based One-Time Password',
    answer: 'A refinement of HOTP; the password generated expires after a short window of time',
  },
  {
    id: 7.34,
    question: 'FRR - False Rejection Rate',
    answer: 'Type 1 error; when a legitimate user is not recognized; measured as a percentage',
  },
  {
    id: 7.35,
    question: 'FAR - False Acceptance Rate',
    answer: 'Type II error; when an unauthorized user is accepted; measured as percentage',
  },
  {
    id: 7.36,
    question: 'Crossover Error Rate',
    answer: 'The point at which FRR and FAR meet; the lower the better',
  },
  {
    id: 7.37,
    question: 'Retinal Scan',
    answer: 'Infrared light shines into eye to identify the pattern of blood vessels; highly accurate; expensive',
  },
  {
    id: 7.38,
    question: 'Iris Scan',
    answer: 'Matches patterns on the surface of the eye using near-infrared imaging; accurate but less intrusive than retinal; can be fooled by high-res images',
  },
]
const eight = [
  {
    id: 8.00,
    question: 'LESSON 8 - Implementing Identity and Account Management Controls',
  }, 
  {
    id: 8.01,
    question: '',
    answer: '',
  },
  {
    id: 8.02,
    question: '',
    answer: '',
  },
  {
    id: 8.03,
    question: '',
    answer: '',
  },
  {
    id: 8.04,
    question: '',
    answer: '',
  },
  {
    id: 8.05,
    question: '',
    answer: '',
  },
  {
    id: 8.06,
    question: '',
    answer: '',
  },
  {
    id: 8.07,
    question: '',
    answer: '',
  },
  {
    id: 8.08,
    question: '',
    answer: '',
  },
  {
    id: 8.09,
    question: '',
    answer: '',
  },
  {
    id: 8.10,
    question: '',
    answer: '',
  },
  {
    id: 8.11,
    question: '',
    answer: '',
  },
  {
    id: 8.12,
    question: '',
    answer: '',
  },
  {
    id: 8.13,
    question: '',
    answer: '',
  },
  {
    id: 8.14,
    question: '',
    answer: '',
  },
  {
    id: 8.15,
    question: '',
    answer: '',
  },
  {
    id: 8.16,
    question: '',
    answer: '',
  },
  {
    id: 8.17,
    question: '',
    answer: '',
  },
  {
    id: 8.18,
    question: '',
    answer: '',
  },
  {
    id: 8.19,
    question: '',
    answer: '',
  },
  {
    id: 8.20,
    question: '',
    answer: '',
  },
  {
    id: 8.21,
    question: '',
    answer: '',
  },
  {
    id: 8.22,
    question: '',
    answer: '',
  },
  {
    id: 8.23,
    question: '',
    answer: '',
  },
  {
    id: 8.24,
    question: '',
    answer: '',
  },
  {
    id: 8.25,
    question: '',
    answer: '',
  },
  {
    id: 8.26,
    question: '',
    answer: '',
  },
  {
    id: 8.27,
    question: '',
    answer: '',
  },
  {
    id: 8.28,
    question: '',
    answer: '',
  },
  {
    id: 8.29,
    question: '',
    answer: '',
  },
  {
    id: 8.30,
    question: '',
    answer: '',
  },
  {
    id: 8.31,
    question: '',
    answer: '',
  },
  {
    id: 8.32,
    question: '',
    answer: '',
  },
  {
    id: 8.33,
    question: '',
    answer: '',
  },
  {
    id: 8.34,
    question: '',
    answer: '',
  },
  {
    id: 8.35,
    question: '',
    answer: '',
  },
  {
    id: 8.36,
    question: '',
    answer: '',
  },
  {
    id: 8.37,
    question: '',
    answer: '',
  },
  {
    id: 8.38,
    question: '',
    answer: '',
  },
  {
    id: 8.39,
    question: '',
    answer: '',
  },
  {
    id: 8.40,
    question: '',
    answer: '',
  },
  {
    id: 8.41,
    question: '',
    answer: '',
  },
  {
    id: 8.42,
    question: '',
    answer: '',
  },
  {
    id: 8.43,
    question: '',
    answer: '',
  },
  {
    id: 8.44,
    question: '',
    answer: '',
  },
  {
    id: 8.45,
    question: '',
    answer: '',
  },
  {
    id: 8.46,
    question: '',
    answer: '',
  },
  {
    id: 8.47,
    question: '',
    answer: '',
  },
  {
    id: 8.48,
    question: '',
    answer: '',
  },
  {
    id: 8.49,
    question: '',
    answer: '',
  },
  {
    id: 8.50,
    question: '',
    answer: '',
  },
  {
    id: 8.51,
    question: '',
    answer: '',
  },
  {
    id: 8.52,
    question: '',
    answer: '',
  },
]
const nine = [
  {
    id: 9.00,
    question: 'LESSON 9 - Implementing Secure Network Designs',
  },
  {
    id: 9.01,
    question: '',
    answer: '',
  },
  {
    id: 9.02,
    question: '',
    answer: '',
  },
  {
    id: 9.03,
    question: '',
    answer: '',
  },
  {
    id: 9.04,
    question: '',
    answer: '',
  },
  {
    id: 9.05,
    question: '',
    answer: '',
  },
  {
    id: 9.06,
    question: '',
    answer: '',
  },
  {
    id: 9.07,
    question: '',
    answer: '',
  },
  {
    id: 9.08,
    question: '',
    answer: '',
  },
  {
    id: 9.09,
    question: '',
    answer: '',
  },
  {
    id: 9.10,
    question: '',
    answer: '',
  },
  {
    id: 9.11,
    question: '',
    answer: '',
  },
  {
    id: 9.12,
    question: '',
    answer: '',
  },
  {
    id: 9.13,
    question: '',
    answer: '',
  },
  {
    id: 9.14,
    question: '',
    answer: '',
  },
  {
    id: 9.15,
    question: '',
    answer: '',
  },
  {
    id: 9.16,
    question: '',
    answer: '',
  },
  {
    id: 9.17,
    question: '',
    answer: '',
  },
  {
    id: 9.18,
    question: '',
    answer: '',
  },
  {
    id: 9.19,
    question: '',
    answer: '',
  },
  {
    id: 9.20,
    question: '',
    answer: '',
  },
  {
    id: 9.21,
    question: '',
    answer: '',
  },
  {
    id: 9.22,
    question: '',
    answer: '',
  },
  {
    id: 9.23,
    question: '',
    answer: '',
  },
  {
    id: 9.24,
    question: '',
    answer: '',
  },
  {
    id: 9.25,
    question: '',
    answer: '',
  },
  {
    id: 9.26,
    question: '',
    answer: '',
  },
  {
    id: 9.27,
    question: '',
    answer: '',
  },
  {
    id: 9.28,
    question: '',
    answer: '',
  },
  {
    id: 9.29,
    question: '',
    answer: '',
  },
  {
    id: 9.30,
    question: '',
    answer: '',
  },
  {
    id: 9.31,
    question: '',
    answer: '',
  },
  {
    id: 9.32,
    question: '',
    answer: '',
  },
  {
    id: 9.33,
    question: '',
    answer: '',
  },
  {
    id: 9.34,
    question: '',
    answer: '',
  },
  {
    id: 9.35,
    question: '',
    answer: '',
  },
  {
    id: 9.36,
    question: '',
    answer: '',
  },
  {
    id: 9.37,
    question: '',
    answer: '',
  },
  {
    id: 9.38,
    question: '',
    answer: '',
  },
  {
    id: 9.39,
    question: '',
    answer: '',
  },
  {
    id: 9.40,
    question: '',
    answer: '',
  },
  {
    id: 9.41,
    question: '',
    answer: '',
  },
  {
    id: 9.42,
    question: '',
    answer: '',
  },
  {
    id: 9.43,
    question: '',
    answer: '',
  },
  {
    id: 9.44,
    question: '',
    answer: '',
  },
  {
    id: 9.45,
    question: '',
    answer: '',
  },
  {
    id: 9.46,
    question: '',
    answer: '',
  },
  {
    id: 9.47,
    question: '',
    answer: '',
  },
  {
    id: 9.48,
    question: '',
    answer: '',
  },
  {
    id: 9.49,
    question: '',
    answer: '',
  },
  {
    id: 9.50,
    question: '',
    answer: '',
  },
  {
    id: 9.51,
    question: '',
    answer: '',
  },
  {
    id: 9.52,
    question: '',
    answer: '',
  },
  {
    id: 9.53,
    question: '',
    answer: '',
  },
  {
    id: 9.54,
    question: '',
    answer: '',
  },
  {
    id: 9.55,
    question: '',
    answer: '',
  },
  {
    id: 9.56,
    question: '',
    answer: '',
  },
  {
    id: 9.57,
    question: '',
    answer: '',
  },
  {
    id: 9.58,
    question: '',
    answer: '',
  },
  {
    id: 9.59,
    question: '',
    answer: '',
  },
  {
    id: 9.60,
    question: '',
    answer: '',
  },
  {
    id: 9.61,
    question: '',
    answer: '',
  },
  {
    id: 9.62,
    question: '',
    answer: '',
  },
  {
    id: 9.63,
    question: '',
    answer: '',
  },
  {
    id: 9.64,
    question: '',
    answer: '',
  },
  {
    id: 9.65,
    question: '',
    answer: '',
  },
  {
    id: 9.66,
    question: '',
    answer: '',
  },
  {
    id: 9.67,
    question: '',
    answer: '',
  },
  {
    id: 9.68,
    question: '',
    answer: '',
  },
  {
    id: 9.69,
    question: '',
    answer: '',
  },
  {
    id: 9.70,
    question: '',
    answer: '',
  },
  {
    id: 9.71,
    question: '',
    answer: '',
  },
  {
    id: 9.72,
    question: '',
    answer: '',
  },
]
const ten = [
  {
    id: 10.00,
    question: 'LESSON 10 - Implementing Network Security Appliances',
  },
  {
    id: 10.01,
    question: '',
    answer: '',
  },
  {
    id: 10.02,
    question: '',
    answer: '',
  },
  {
    id: 10.03,
    question: '',
    answer: '',
  },
  {
    id: 10.04,
    question: '',
    answer: '',
  },
  {
    id: 10.05,
    question: '',
    answer: '',
  },
  {
    id: 10.06,
    question: '',
    answer: '',
  },
  {
    id: 10.07,
    question: '',
    answer: '',
  },
  {
    id: 10.08,
    question: '',
    answer: '',
  },
  {
    id: 10.09,
    question: '',
    answer: '',
  },
  {
    id: 10.10,
    question: '',
    answer: '',
  },
  {
    id: 10.11,
    question: '',
    answer: '',
  },
  {
    id: 10.12,
    question: '',
    answer: '',
  },
  {
    id: 10.13,
    question: '',
    answer: '',
  },
  {
    id: 10.14,
    question: '',
    answer: '',
  },
  {
    id: 10.15,
    question: '',
    answer: '',
  },
  {
    id: 10.16,
    question: '',
    answer: '',
  },
  {
    id: 10.17,
    question: '',
    answer: '',
  },
  {
    id: 10.18,
    question: '',
    answer: '',
  },
  {
    id: 10.19,
    question: '',
    answer: '',
  },
  {
    id: 10.20,
    question: '',
    answer: '',
  },
  {
    id: 10.21,
    question: '',
    answer: '',
  },
  {
    id: 10.22,
    question: '',
    answer: '',
  },
  {
    id: 10.23,
    question: '',
    answer: '',
  },
  {
    id: 10.24,
    question: '',
    answer: '',
  },
  {
    id: 10.25,
    question: '',
    answer: '',
  },
  {
    id: 10.26,
    question: '',
    answer: '',
  },
  {
    id: 10.27,
    question: '',
    answer: '',
  },
  {
    id: 10.28,
    question: '',
    answer: '',
  },
  {
    id: 10.29,
    question: '',
    answer: '',
  },
  {
    id: 10.30,
    question: '',
    answer: '',
  },
  {
    id: 10.31,
    question: '',
    answer: '',
  },
  {
    id: 10.32,
    question: '',
    answer: '',
  },
  {
    id: 10.33,
    question: '',
    answer: '',
  },
  {
    id: 10.34,
    question: '',
    answer: '',
  },
  {
    id: 10.35,
    question: '',
    answer: '',
  },
  {
    id: 10.36,
    question: '',
    answer: '',
  },
  {
    id: 10.37,
    question: '',
    answer: '',
  },
  {
    id: 10.38,
    question: '',
    answer: '',
  },
  {
    id: 10.39,
    question: '',
    answer: '',
  },
  {
    id: 10.40,
    question: '',
    answer: '',
  },
  {
    id: 10.41,
    question: '',
    answer: '',
  },
  {
    id: 10.42,
    question: '',
    answer: '',
  },
  {
    id: 10.43,
    question: '',
    answer: '',
  },
  {
    id: 10.44,
    question: '',
    answer: '',
  },
  {
    id: 10.45,
    question: '',
    answer: '',
  },
  {
    id: 10.46,
    question: '',
    answer: '',
  },
  {
    id: 10.47,
    question: '',
    answer: '',
  },
  {
    id: 10.48,
    question: '',
    answer: '',
  },
  {
    id: 10.49,
    question: '',
    answer: '',
  },
  {
    id: 10.50,
    question: '',
    answer: '',
  },
  {
    id: 10.51,
    question: '',
    answer: '',
  },
  {
    id: 10.52,
    question: '',
    answer: '',
  },
  {
    id: 10.53,
    question: '',
    answer: '',
  },
  {
    id: 10.54,
    question: '',
    answer: '',
  },
  {
    id: 10.55,
    question: '',
    answer: '',
  },
  {
    id: 10.56,
    question: '',
    answer: '',
  },
]
const eleven = [
  {
    id: 11.00,
    question: 'LESSON 11 - Implementing Secure Network Protocols',
  },
  {
    id: 11.01,
    question: '',
    answer: '',
  },
  {
    id: 11.02,
    question: '',
    answer: '',
  },
  {
    id: 11.03,
    question: '',
    answer: '',
  },
  {
    id: 11.04,
    question: '',
    answer: '',
  },
  {
    id: 11.05,
    question: '',
    answer: '',
  },
  {
    id: 11.06,
    question: '',
    answer: '',
  },
  {
    id: 11.07,
    question: '',
    answer: '',
  },
  {
    id: 11.08,
    question: '',
    answer: '',
  },
  {
    id: 11.09,
    question: '',
    answer: '',
  },
  {
    id: 11.10,
    question: '',
    answer: '',
  },
  {
    id: 11.11,
    question: '',
    answer: '',
  },
  {
    id: 11.12,
    question: '',
    answer: '',
  },
  {
    id: 11.13,
    question: '',
    answer: '',
  },
  {
    id: 11.14,
    question: '',
    answer: '',
  },
  {
    id: 11.15,
    question: '',
    answer: '',
  },
  {
    id: 11.16,
    question: '',
    answer: '',
  },
  {
    id: 11.17,
    question: '',
    answer: '',
  },
  {
    id: 11.18,
    question: '',
    answer: '',
  },
  {
    id: 11.19,
    question: '',
    answer: '',
  },
  {
    id: 11.20,
    question: '',
    answer: '',
  },
  {
    id: 11.21,
    question: '',
    answer: '',
  },
  {
    id: 11.22,
    question: '',
    answer: '',
  },
  {
    id: 11.23,
    question: '',
    answer: '',
  },
  {
    id: 11.24,
    question: '',
    answer: '',
  },
  {
    id: 11.25,
    question: '',
    answer: '',
  },
  {
    id: 11.26,
    question: '',
    answer: '',
  },
  {
    id: 11.27,
    question: '',
    answer: '',
  },
  {
    id: 11.28,
    question: '',
    answer: '',
  },
  {
    id: 11.29,
    question: '',
    answer: '',
  },
  {
    id: 11.30,
    question: '',
    answer: '',
  },
  {
    id: 11.31,
    question: '',
    answer: '',
  },
  {
    id: 11.32,
    question: '',
    answer: '',
  },
  {
    id: 11.33,
    question: '',
    answer: '',
  },
  {
    id: 11.34,
    question: '',
    answer: '',
  },
  {
    id: 11.35,
    question: '',
    answer: '',
  },
  {
    id: 11.36,
    question: '',
    answer: '',
  },
  {
    id: 11.37,
    question: '',
    answer: '',
  },
  {
    id: 11.38,
    question: '',
    answer: '',
  },
  {
    id: 11.39,
    question: '',
    answer: '',
  },
  {
    id: 11.40,
    question: '',
    answer: '',
  },
  {
    id: 11.41,
    question: '',
    answer: '',
  },
  {
    id: 11.42,
    question: '',
    answer: '',
  },
  {
    id: 11.43,
    question: '',
    answer: '',
  },
  {
    id: 11.44,
    question: '',
    answer: '',
  },
  {
    id: 11.45,
    question: '',
    answer: '',
  },
  {
    id: 11.46,
    question: '',
    answer: '',
  },
  {
    id: 11.47,
    question: '',
    answer: '',
  },
  {
    id: 11.48,
    question: '',
    answer: '',
  },
  {
    id: 11.49,
    question: '',
    answer: '',
  },
  {
    id: 11.50,
    question: '',
    answer: '',
  },
]
const twelve = [
  {
    id: 12.00,
    question: 'LESSON 12 - Implementing Host Security Solutions',
  },
  {
    id: 12.01,
    question: '',
    answer: '',
  },
  {
    id: 12.02,
    question: '',
    answer: '',
  },
  {
    id: 12.03,
    question: '',
    answer: '',
  },
  {
    id: 12.04,
    question: '',
    answer: '',
  },
  {
    id: 12.05,
    question: '',
    answer: '',
  },
  {
    id: 12.06,
    question: '',
    answer: '',
  },
  {
    id: 12.07,
    question: '',
    answer: '',
  },
  {
    id: 12.08,
    question: '',
    answer: '',
  },
  {
    id: 12.09,
    question: '',
    answer: '',
  },
  {
    id: 12.10,
    question: '',
    answer: '',
  },
  {
    id: 12.11,
    question: '',
    answer: '',
  },
  {
    id: 12.12,
    question: '',
    answer: '',
  },
  {
    id: 12.13,
    question: '',
    answer: '',
  },
  {
    id: 12.14,
    question: '',
    answer: '',
  },
  {
    id: 12.15,
    question: '',
    answer: '',
  },
  {
    id: 12.16,
    question: '',
    answer: '',
  },
  {
    id: 12.17,
    question: '',
    answer: '',
  },
  {
    id: 12.18,
    question: '',
    answer: '',
  },
  {
    id: 12.19,
    question: '',
    answer: '',
  },
  {
    id: 12.20,
    question: '',
    answer: '',
  },
  {
    id: 12.21,
    question: '',
    answer: '',
  },
  {
    id: 12.22,
    question: '',
    answer: '',
  },
  {
    id: 12.23,
    question: '',
    answer: '',
  },
  {
    id: 12.24,
    question: '',
    answer: '',
  },
  {
    id: 12.25,
    question: '',
    answer: '',
  },
  {
    id: 12.26,
    question: '',
    answer: '',
  },
  {
    id: 12.27,
    question: '',
    answer: '',
  },
  {
    id: 12.28,
    question: '',
    answer: '',
  },
  {
    id: 12.29,
    question: '',
    answer: '',
  },
  {
    id: 12.30,
    question: '',
    answer: '',
  },
  {
    id: 12.31,
    question: '',
    answer: '',
  },
  {
    id: 12.32,
    question: '',
    answer: '',
  },
  {
    id: 12.33,
    question: '',
    answer: '',
  },
  {
    id: 12.34,
    question: '',
    answer: '',
  },
  {
    id: 12.35,
    question: '',
    answer: '',
  },
  {
    id: 12.36,
    question: '',
    answer: '',
  },
  {
    id: 12.37,
    question: '',
    answer: '',
  },
  {
    id: 12.38,
    question: '',
    answer: '',
  },
  {
    id: 12.39,
    question: '',
    answer: '',
  },
]
const thirteen = [
  {
    id: 13.00,
    question: 'LESSON 13 - Implementing Secure Mobile Solutions',
  },
  {
    id: 13.01,
    question: '',
    answer: '',
  },
  {
    id: 13.02,
    question: '',
    answer: '',
  },
  {
    id: 13.03,
    question: '',
    answer: '',
  },
  {
    id: 13.04,
    question: '',
    answer: '',
  },
  {
    id: 13.05,
    question: '',
    answer: '',
  },
  {
    id: 13.06,
    question: '',
    answer: '',
  },
  {
    id: 13.07,
    question: '',
    answer: '',
  },
  {
    id: 13.08,
    question: '',
    answer: '',
  },
  {
    id: 13.09,
    question: '',
    answer: '',
  },
  {
    id: 13.10,
    question: '',
    answer: '',
  },
  {
    id: 13.11,
    question: '',
    answer: '',
  },
  {
    id: 13.12,
    question: '',
    answer: '',
  },
  {
    id: 13.13,
    question: '',
    answer: '',
  },
  {
    id: 13.14,
    question: '',
    answer: '',
  },
  {
    id: 13.15,
    question: '',
    answer: '',
  },
  {
    id: 13.16,
    question: '',
    answer: '',
  },
  {
    id: 13.17,
    question: '',
    answer: '',
  },
  {
    id: 13.18,
    question: '',
    answer: '',
  },
  {
    id: 13.19,
    question: '',
    answer: '',
  },
  {
    id: 13.20,
    question: '',
    answer: '',
  },
  {
    id: 13.21,
    question: '',
    answer: '',
  },
  {
    id: 13.22,
    question: '',
    answer: '',
  },
  {
    id: 13.23,
    question: '',
    answer: '',
  },
  {
    id: 13.24,
    question: '',
    answer: '',
  },
  {
    id: 13.25,
    question: '',
    answer: '',
  },
  {
    id: 13.26,
    question: '',
    answer: '',
  },
  {
    id: 13.27,
    question: '',
    answer: '',
  },
]
const fourteen = [
  {
    id: 14.00,
    question: 'LESSON 14 - Implementing Secure Application Concepts',
  },
  {
    id: 14.01,
    question: '',
    answer: '',
  },
  {
    id: 14.02,
    question: '',
    answer: '',
  },
  {
    id: 14.03,
    question: '',
    answer: '',
  },
  {
    id: 14.04,
    question: '',
    answer: '',
  },
  {
    id: 14.05,
    question: '',
    answer: '',
  },
  {
    id: 14.06,
    question: '',
    answer: '',
  },
  {
    id: 14.07,
    question: '',
    answer: '',
  },
  {
    id: 14.08,
    question: '',
    answer: '',
  },
  {
    id: 14.09,
    question: '',
    answer: '',
  },
  {
    id: 14.10,
    question: '',
    answer: '',
  },
  {
    id: 14.11,
    question: '',
    answer: '',
  },
  {
    id: 14.12,
    question: '',
    answer: '',
  },
  {
    id: 14.13,
    question: '',
    answer: '',
  },
  {
    id: 14.14,
    question: '',
    answer: '',
  },
  {
    id: 14.15,
    question: '',
    answer: '',
  },
  {
    id: 14.16,
    question: '',
    answer: '',
  },
  {
    id: 14.17,
    question: '',
    answer: '',
  },
  {
    id: 14.18,
    question: '',
    answer: '',
  },
  {
    id: 14.19,
    question: '',
    answer: '',
  },
  {
    id: 14.20,
    question: '',
    answer: '',
  },
  {
    id: 14.21,
    question: '',
    answer: '',
  },
  {
    id: 14.22,
    question: '',
    answer: '',
  },
  {
    id: 14.23,
    question: '',
    answer: '',
  },
  {
    id: 14.24,
    question: '',
    answer: '',
  },
  {
    id: 14.25,
    question: '',
    answer: '',
  },
  {
    id: 14.26,
    question: '',
    answer: '',
  },
  {
    id: 14.27,
    question: '',
    answer: '',
  },
  {
    id: 14.28,
    question: '',
    answer: '',
  },
  {
    id: 14.29,
    question: '',
    answer: '',
  },
  {
    id: 14.30,
    question: '',
    answer: '',
  },
  {
    id: 14.31,
    question: '',
    answer: '',
  },
  {
    id: 14.32,
    question: '',
    answer: '',
  },
  {
    id: 14.33,
    question: '',
    answer: '',
  },
  {
    id: 14.34,
    question: '',
    answer: '',
  },
  {
    id: 14.35,
    question: '',
    answer: '',
  },
  {
    id: 14.36,
    question: '',
    answer: '',
  },
  {
    id: 14.37,
    question: '',
    answer: '',
  },
  {
    id: 14.38,
    question: '',
    answer: '',
  },
  {
    id: 14.39,
    question: '',
    answer: '',
  },
  {
    id: 14.40,
    question: '',
    answer: '',
  },
  {
    id: 14.41,
    question: '',
    answer: '',
  },
  {
    id: 14.42,
    question: '',
    answer: '',
  },
  {
    id: 14.43,
    question: '',
    answer: '',
  },
  {
    id: 14.44,
    question: '',
    answer: '',
  },
  {
    id: 14.45,
    question: '',
    answer: '',
  },
  {
    id: 14.46,
    question: '',
    answer: '',
  },
  {
    id: 14.47,
    question: '',
    answer: '',
  },
  {
    id: 14.48,
    question: '',
    answer: '',
  },
  {
    id: 14.49,
    question: '',
    answer: '',
  },
  {
    id: 14.50,
    question: '',
    answer: '',
  },
  {
    id: 14.51,
    question: '',
    answer: '',
  },
  {
    id: 14.52,
    question: '',
    answer: '',
  },
  {
    id: 14.53,
    question: '',
    answer: '',
  },
  {
    id: 14.54,
    question: '',
    answer: '',
  },
  {
    id: 14.55,
    question: '',
    answer: '',
  },
  {
    id: 14.56,
    question: '',
    answer: '',
  },
  {
    id: 14.57,
    question: '',
    answer: '',
  },
  {
    id: 14.58,
    question: '',
    answer: '',
  },
  {
    id: 14.59,
    question: '',
    answer: '',
  },
  {
    id: 14.60,
    question: '',
    answer: '',
  },
  {
    id: 14.61,
    question: '',
    answer: '',
  },
  {
    id: 14.62,
    question: '',
    answer: '',
  },
  {
    id: 14.63,
    question: '',
    answer: '',
  },
  {
    id: 14.64,
    question: '',
    answer: '',
  },
  {
    id: 14.65,
    question: '',
    answer: '',
  },
  {
    id: 14.66,
    question: '',
    answer: '',
  },
  {
    id: 14.67,
    question: '',
    answer: '',
  },
  {
    id: 14.68,
    question: '',
    answer: '',
  },
  {
    id: 14.69,
    question: '',
    answer: '',
  },
  {
    id: 14.70,
    question: '',
    answer: '',
  },
]
const fifteen = [
  {
    id: 15.00,
    question: 'LESSON 15 - Implementing Secure Cloud Solutions',
  },
  {
    id: 15.01,
    question: '',
    answer: '',
  },
  {
    id: 15.02,
    question: '',
    answer: '',
  },
  {
    id: 15.03,
    question: '',
    answer: '',
  },
  {
    id: 15.04,
    question: '',
    answer: '',
  },
  {
    id: 15.05,
    question: '',
    answer: '',
  },
  {
    id: 15.06,
    question: '',
    answer: '',
  },
  {
    id: 15.07,
    question: '',
    answer: '',
  },
  {
    id: 15.08,
    question: '',
    answer: '',
  },
  {
    id: 15.09,
    question: '',
    answer: '',
  },
  {
    id: 15.10,
    question: '',
    answer: '',
  },
  {
    id: 15.11,
    question: '',
    answer: '',
  },
  {
    id: 15.12,
    question: '',
    answer: '',
  },
  {
    id: 15.13,
    question: '',
    answer: '',
  },
  {
    id: 15.14,
    question: '',
    answer: '',
  },
  {
    id: 15.15,
    question: '',
    answer: '',
  },
  {
    id: 15.16,
    question: '',
    answer: '',
  },
  {
    id: 15.17,
    question: '',
    answer: '',
  },
  {
    id: 15.18,
    question: '',
    answer: '',
  },
  {
    id: 15.19,
    question: '',
    answer: '',
  },
  {
    id: 15.20,
    question: '',
    answer: '',
  },
  {
    id: 15.21,
    question: '',
    answer: '',
  },
  {
    id: 15.22,
    question: '',
    answer: '',
  },
  {
    id: 15.23,
    question: '',
    answer: '',
  },
  {
    id: 15.24,
    question: '',
    answer: '',
  },
  {
    id: 15.25,
    question: '',
    answer: '',
  },
  {
    id: 15.26,
    question: '',
    answer: '',
  },
  {
    id: 15.27,
    question: '',
    answer: '',
  },
  {
    id: 15.28,
    question: '',
    answer: '',
  },
  {
    id: 15.29,
    question: '',
    answer: '',
  },
  {
    id: 15.30,
    question: '',
    answer: '',
  },
  {
    id: 15.31,
    question: '',
    answer: '',
  },
  {
    id: 15.32,
    question: '',
    answer: '',
  },
  {
    id: 15.33,
    question: '',
    answer: '',
  },
  {
    id: 15.34,
    question: '',
    answer: '',
  },
  {
    id: 15.35,
    question: '',
    answer: '',
  },
  {
    id: 15.36,
    question: '',
    answer: '',
  },
  {
    id: 15.37,
    question: '',
    answer: '',
  },
  {
    id: 15.38,
    question: '',
    answer: '',
  },
  {
    id: 15.39,
    question: '',
    answer: '',
  },
  {
    id: 15.40,
    question: '',
    answer: '',
  },
  {
    id: 15.41,
    question: '',
    answer: '',
  },
  {
    id: 15.42,
    question: '',
    answer: '',
  },
  {
    id: 15.43,
    question: '',
    answer: '',
  },
  {
    id: 15.44,
    question: '',
    answer: '',
  },
  {
    id: 15.45,
    question: '',
    answer: '',
  },
  {
    id: 15.46,
    question: '',
    answer: '',
  },
  {
    id: 15.47,
    question: '',
    answer: '',
  },
  {
    id: 15.48,
    question: '',
    answer: '',
  },
  {
    id: 15.49,
    question: '',
    answer: '',
  },
  {
    id: 15.50,
    question: '',
    answer: '',
  },
  {
    id: 15.51,
    question: '',
    answer: '',
  },
  {
    id: 15.52,
    question: '',
    answer: '',
  },
  {
    id: 15.53,
    question: '',
    answer: '',
  },
  {
    id: 15.54,
    question: '',
    answer: '',
  },
]
const sixteen = [
  {
    id: 16.00,
    question: 'LESSON 16 - Explaining Data Privacy and Protection Concepts',
  },
  {
    id: 16.01,
    question: '',
    answer: '',
  },
  {
    id: 16.02,
    question: '',
    answer: '',
  },
  {
    id: 16.03,
    question: '',
    answer: '',
  },
  {
    id: 16.04,
    question: '',
    answer: '',
  },
  {
    id: 16.05,
    question: '',
    answer: '',
  },
  {
    id: 16.06,
    question: '',
    answer: '',
  },
  {
    id: 16.07,
    question: '',
    answer: '',
  },
  {
    id: 16.08,
    question: '',
    answer: '',
  },
  {
    id: 16.09,
    question: '',
    answer: '',
  },
  {
    id: 16.10,
    question: '',
    answer: '',
  },
  {
    id: 16.11,
    question: '',
    answer: '',
  },
  {
    id: 16.12,
    question: '',
    answer: '',
  },
  {
    id: 16.13,
    question: '',
    answer: '',
  },
  {
    id: 16.14,
    question: '',
    answer: '',
  },
  {
    id: 16.15,
    question: '',
    answer: '',
  },
  {
    id: 16.16,
    question: '',
    answer: '',
  },
  {
    id: 16.17,
    question: '',
    answer: '',
  },
  {
    id: 16.18,
    question: '',
    answer: '',
  },
  {
    id: 16.19,
    question: '',
    answer: '',
  },
  {
    id: 16.20,
    question: '',
    answer: '',
  },
  {
    id: 16.21,
    question: '',
    answer: '',
  },
  {
    id: 16.22,
    question: '',
    answer: '',
  },
  {
    id: 16.23,
    question: '',
    answer: '',
  },
  {
    id: 16.24,
    question: '',
    answer: '',
  },
  {
    id: 16.25,
    question: '',
    answer: '',
  },
  {
    id: 16.26,
    question: '',
    answer: '',
  },
  {
    id: 16.27,
    question: '',
    answer: '',
  },
  {
    id: 16.28,
    question: '',
    answer: '',
  },
  {
    id: 16.29,
    question: '',
    answer: '',
  },
  {
    id: 16.30,
    question: '',
    answer: '',
  },
  {
    id: 16.31,
    question: '',
    answer: '',
  },
  {
    id: 16.32,
    question: '',
    answer: '',
  },
  {
    id: 16.33,
    question: '',
    answer: '',
  },
  {
    id: 16.34,
    question: '',
    answer: '',
  },
  {
    id: 16.35,
    question: '',
    answer: '',
  },
  {
    id: 16.36,
    question: '',
    answer: '',
  },
  {
    id: 16.37,
    question: '',
    answer: '',
  },
  {
    id: 16.38,
    question: '',
    answer: '',
  },
  {
    id: 16.39,
    question: '',
    answer: '',
  },
  {
    id: 16.40,
    question: '',
    answer: '',
  },
  {
    id: 16.41,
    question: '',
    answer: '',
  },
  {
    id: 16.42,
    question: '',
    answer: '',
  },
  {
    id: 16.43,
    question: '',
    answer: '',
  },
  {
    id: 16.44,
    question: '',
    answer: '',
  },
  {
    id: 16.45,
    question: '',
    answer: '',
  },
  {
    id: 16.46,
    question: '',
    answer: '',
  },
]
const seventeen = [
  {
    id: 17.00,
    question: 'LESSON 17 - Performing Incident Response',
  },
  {
    id: 17.01,
    question: '',
    answer: '',
  },
  {
    id: 17.02,
    question: '',
    answer: '',
  },
  {
    id: 17.03,
    question: '',
    answer: '',
  },
  {
    id: 17.04,
    question: '',
    answer: '',
  },
  {
    id: 17.05,
    question: '',
    answer: '',
  },
  {
    id: 17.06,
    question: '',
    answer: '',
  },
  {
    id: 17.07,
    question: '',
    answer: '',
  },
  {
    id: 17.08,
    question: '',
    answer: '',
  },
  {
    id: 17.09,
    question: '',
    answer: '',
  },
  {
    id: 17.10,
    question: '',
    answer: '',
  },
  {
    id: 17.11,
    question: '',
    answer: '',
  },
  {
    id: 17.12,
    question: '',
    answer: '',
  },
  {
    id: 17.13,
    question: '',
    answer: '',
  },
  {
    id: 17.14,
    question: '',
    answer: '',
  },
  {
    id: 17.15,
    question: '',
    answer: '',
  },
  {
    id: 17.16,
    question: '',
    answer: '',
  },
  {
    id: 17.17,
    question: '',
    answer: '',
  },
  {
    id: 17.18,
    question: '',
    answer: '',
  },
  {
    id: 17.19,
    question: '',
    answer: '',
  },
  {
    id: 17.20,
    question: '',
    answer: '',
  },
  {
    id: 17.21,
    question: '',
    answer: '',
  },
  {
    id: 17.22,
    question: '',
    answer: '',
  },
  {
    id: 17.23,
    question: '',
    answer: '',
  },
  {
    id: 17.24,
    question: '',
    answer: '',
  },
  {
    id: 17.25,
    question: '',
    answer: '',
  },
  {
    id: 17.26,
    question: '',
    answer: '',
  },
  {
    id: 17.27,
    question: '',
    answer: '',
  },
  {
    id: 17.28,
    question: '',
    answer: '',
  },
  {
    id: 17.29,
    question: '',
    answer: '',
  },
  {
    id: 17.30,
    question: '',
    answer: '',
  },
  {
    id: 17.31,
    question: '',
    answer: '',
  },
  {
    id: 17.32,
    question: '',
    answer: '',
  },
  {
    id: 17.33,
    question: '',
    answer: '',
  },
  {
    id: 17.34,
    question: '',
    answer: '',
  },
  {
    id: 17.35,
    question: '',
    answer: '',
  },
  {
    id: 17.36,
    question: '',
    answer: '',
  },
  {
    id: 17.37,
    question: '',
    answer: '',
  },
  {
    id: 17.38,
    question: '',
    answer: '',
  },
  {
    id: 17.39,
    question: '',
    answer: '',
  },
  {
    id: 17.40,
    question: '',
    answer: '',
  },
  {
    id: 17.41,
    question: '',
    answer: '',
  },
  {
    id: 17.42,
    question: '',
    answer: '',
  },
  {
    id: 17.43,
    question: '',
    answer: '',
  },
  {
    id: 17.44,
    question: '',
    answer: '',
  },
]
const eighteen = [
  {
    id: 18.00,
    question: 'LESSON 18 - Explaining Digital Forensics',
  },
  {
    id: 18.01,
    question: '',
    answer: '',
  },
  {
    id: 18.02,
    question: '',
    answer: '',
  },
  {
    id: 18.03,
    question: '',
    answer: '',
  },
  {
    id: 18.04,
    question: '',
    answer: '',
  },
  {
    id: 18.05,
    question: '',
    answer: '',
  },
  {
    id: 18.06,
    question: '',
    answer: '',
  },
  {
    id: 18.07,
    question: '',
    answer: '',
  },
  {
    id: 18.08,
    question: '',
    answer: '',
  },
  {
    id: 18.09,
    question: '',
    answer: '',
  },
  {
    id: 18.10,
    question: '',
    answer: '',
  },
  {
    id: 18.11,
    question: '',
    answer: '',
  },
  {
    id: 18.12,
    question: '',
    answer: '',
  },
  {
    id: 18.13,
    question: '',
    answer: '',
  },
  {
    id: 18.14,
    question: '',
    answer: '',
  },
  {
    id: 18.15,
    question: '',
    answer: '',
  },
  {
    id: 18.16,
    question: '',
    answer: '',
  },
  {
    id: 18.17,
    question: '',
    answer: '',
  },
  {
    id: 18.18,
    question: '',
    answer: '',
  },
  {
    id: 18.19,
    question: '',
    answer: '',
  },
]
const nineteen = [
  {
    id: 19.00,
    question: 'LESSON 19 - Summarizing Risk Management Concepts',
  },
  {
    id: 19.01,
    question: '',
    answer: '',
  },
  {
    id: 19.02,
    question: '',
    answer: '',
  },
  {
    id: 19.03,
    question: '',
    answer: '',
  },
  {
    id: 19.04,
    question: '',
    answer: '',
  },
  {
    id: 19.05,
    question: '',
    answer: '',
  },
  {
    id: 19.06,
    question: '',
    answer: '',
  },
  {
    id: 19.07,
    question: '',
    answer: '',
  },
  {
    id: 19.08,
    question: '',
    answer: '',
  },
  {
    id: 19.09,
    question: '',
    answer: '',
  },
  {
    id: 19.10,
    question: '',
    answer: '',
  },
  {
    id: 19.11,
    question: '',
    answer: '',
  },
  {
    id: 19.12,
    question: '',
    answer: '',
  },
  {
    id: 19.13,
    question: '',
    answer: '',
  },
  {
    id: 19.14,
    question: '',
    answer: '',
  },
  {
    id: 19.15,
    question: '',
    answer: '',
  },
  {
    id: 19.16,
    question: '',
    answer: '',
  },
  {
    id: 19.17,
    question: '',
    answer: '',
  },
  {
    id: 19.18,
    question: '',
    answer: '',
  },
  {
    id: 19.19,
    question: '',
    answer: '',
  },
  {
    id: 19.20,
    question: '',
    answer: '',
  },
  {
    id: 19.21,
    question: '',
    answer: '',
  },
  {
    id: 19.22,
    question: '',
    answer: '',
  },
  {
    id: 19.23,
    question: '',
    answer: '',
  },
  {
    id: 19.24,
    question: '',
    answer: '',
  },
  {
    id: 19.25,
    question: '',
    answer: '',
  },
  {
    id: 19.26,
    question: '',
    answer: '',
  },
  {
    id: 19.27,
    question: '',
    answer: '',
  },
  {
    id: 19.28,
    question: '',
    answer: '',
  },
  {
    id: 19.29,
    question: '',
    answer: '',
  },
  {
    id: 19.30,
    question: '',
    answer: '',
  },
  {
    id: 19.31,
    question: '',
    answer: '',
  },
  {
    id: 19.32,
    question: '',
    answer: '',
  },
]
const twenty = [
  {
    id: 20.00,
    question: 'LESSON 20 - Implementing Cybersecurity Resilience',
  },
  {
    id: 20.01,
    question: '',
    answer: '',
  },
  {
    id: 20.02,
    question: '',
    answer: '',
  },
  {
    id: 20.03,
    question: '',
    answer: '',
  },
  {
    id: 20.04,
    question: '',
    answer: '',
  },
  {
    id: 20.05,
    question: '',
    answer: '',
  },
  {
    id: 20.06,
    question: '',
    answer: '',
  },
  {
    id: 20.07,
    question: '',
    answer: '',
  },
  {
    id: 20.08,
    question: '',
    answer: '',
  },
  {
    id: 20.09,
    question: '',
    answer: '',
  },
  {
    id: 20.10,
    question: '',
    answer: '',
  },
  {
    id: 20.11,
    question: '',
    answer: '',
  },
  {
    id: 20.12,
    question: '',
    answer: '',
  },
  {
    id: 20.13,
    question: '',
    answer: '',
  },
  {
    id: 20.14,
    question: '',
    answer: '',
  },
  {
    id: 20.15,
    question: '',
    answer: '',
  },
  {
    id: 20.16,
    question: '',
    answer: '',
  },
  {
    id: 20.17,
    question: '',
    answer: '',
  },
  {
    id: 20.18,
    question: '',
    answer: '',
  },
  {
    id: 20.19,
    question: '',
    answer: '',
  },
  {
    id: 20.20,
    question: '',
    answer: '',
  },
  {
    id: 20.21,
    question: '',
    answer: '',
  },
  {
    id: 20.22,
    question: '',
    answer: '',
  },
  {
    id: 20.23,
    question: '',
    answer: '',
  },
  {
    id: 20.24,
    question: '',
    answer: '',
  },
  {
    id: 20.25,
    question: '',
    answer: '',
  },
  {
    id: 20.26,
    question: '',
    answer: '',
  },
  {
    id: 20.27,
    question: '',
    answer: '',
  },
  {
    id: 20.28,
    question: '',
    answer: '',
  },
  {
    id: 20.29,
    question: '',
    answer: '',
  },
  {
    id: 20.30,
    question: '',
    answer: '',
  },
  {
    id: 20.31,
    question: '',
    answer: '',
  },
  {
    id: 20.32,
    question: '',
    answer: '',
  },
  {
    id: 20.33,
    question: '',
    answer: '',
  },
  {
    id: 20.34,
    question: '',
    answer: '',
  },
  {
    id: 20.35,
    question: '',
    answer: '',
  },
  {
    id: 20.36,
    question: '',
    answer: '',
  },
  {
    id: 20.37,
    question: '',
    answer: '',
  },
  {
    id: 20.38,
    question: '',
    answer: '',
  },
  {
    id: 20.39,
    question: '',
    answer: '',
  },
  {
    id: 20.40,
    question: '',
    answer: '',
  },
  {
    id: 20.41,
    question: '',
    answer: '',
  },
  {
    id: 20.42,
    question: '',
    answer: '',
  },
  {
    id: 20.43,
    question: '',
    answer: '',
  },
  {
    id: 20.44,
    question: '',
    answer: '',
  },
  {
    id: 20.45,
    question: '',
    answer: '',
  },
]
const twentyone = [
  {
    id: 21.00,
    question: 'LESSON 21 - Explaining Physical Security',
  },
  {
    id: 21.01,
    question: '',
    answer: '',
  },
  {
    id: 21.02,
    question: '',
    answer: '',
  },
  {
    id: 21.03,
    question: '',
    answer: '',
  },
  {
    id: 21.04,
    question: '',
    answer: '',
  },
  {
    id: 21.05,
    question: '',
    answer: '',
  },
  {
    id: 21.06,
    question: '',
    answer: '',
  },
  {
    id: 21.07,
    question: '',
    answer: '',
  },
  {
    id: 21.08,
    question: '',
    answer: '',
  },
  {
    id: 21.09,
    question: '',
    answer: '',
  },
  {
    id: 21.10,
    question: '',
    answer: '',
  },
  {
    id: 21.11,
    question: '',
    answer: '',
  },
  {
    id: 21.12,
    question: '',
    answer: '',
  },
  {
    id: 21.13,
    question: '',
    answer: '',
  },
  {
    id: 21.14,
    question: '',
    answer: '',
  },
  {
    id: 21.15,
    question: '',
    answer: '',
  },
  {
    id: 21.16,
    question: '',
    answer: '',
  },
  {
    id: 21.17,
    question: '',
    answer: '',
  },
  {
    id: 21.18,
    question: '',
    answer: '',
  },
]

export default App;