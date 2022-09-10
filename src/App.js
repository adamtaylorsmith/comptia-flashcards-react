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
    id: 4.01,
    question: '',
    answer: '',
  },
  {
    id: 4.02,
    question: '',
    answer: '',
  },
  {
    id: 4.03,
    question: '',
    answer: '',
  },
  {
    id: 4.04,
    question: '',
    answer: '',
  },
  {
    id: 4.05,
    question: '',
    answer: '',
  },
  {
    id: 4.06,
    question: '',
    answer: '',
  },
  {
    id: 4.07,
    question: '',
    answer: '',
  },
  {
    id: 4.08,
    question: '',
    answer: '',
  },
  {
    id: 4.09,
    question: '',
    answer: '',
  },
  {
    id: 4.10,
    question: '',
    answer: '',
  },
  {
    id: 4.11,
    question: '',
    answer: '',
  },
  {
    id: 4.12,
    question: '',
    answer: '',
  },
  {
    id: 4.13,
    question: '',
    answer: '',
  },
  {
    id: 4.14,
    question: '',
    answer: '',
  },
  {
    id: 4.15,
    question: '',
    answer: '',
  },
  {
    id: 4.16,
    question: '',
    answer: '',
  },
  {
    id: 4.17,
    question: '',
    answer: '',
  },
  {
    id: 4.18,
    question: '',
    answer: '',
  },
  {
    id: 4.19,
    question: '',
    answer: '',
  },
  {
    id: 4.20,
    question: '',
    answer: '',
  },
  {
    id: 4.21,
    question: '',
    answer: '',
  },
  {
    id: 4.22,
    question: '',
    answer: '',
  },
  {
    id: 4.23,
    question: '',
    answer: '',
  },
  {
    id: 4.24,
    question: '',
    answer: '',
  },
  {
    id: 4.25,
    question: '',
    answer: '',
  },
  {
    id: 4.26,
    question: '',
    answer: '',
  },
  {
    id: 4.27,
    question: '',
    answer: '',
  },
  {
    id: 4.28,
    question: '',
    answer: '',
  },
  {
    id: 4.29,
    question: '',
    answer: '',
  },
  {
    id: 4.30,
    question: '',
    answer: '',
  },
  {
    id: 4.31,
    question: '',
    answer: '',
  },
  {
    id: 4.32,
    question: '',
    answer: '',
  },
  {
    id: 4.33,
    question: '',
    answer: '',
  },
  {
    id: 4.34,
    question: '',
    answer: '',
  },
  {
    id: 4.35,
    question: '',
    answer: '',
  },
  {
    id: 4.36,
    question: '',
    answer: '',
  },
  {
    id: 4.37,
    question: '',
    answer: '',
  },
]
const seven = [
  {
    id: 7.00,
    question: 'LESSON 7 - Implementing Authentication Controls',
  },
  {
    id: 4.01,
    question: '',
    answer: '',
  },
  {
    id: 4.02,
    question: '',
    answer: '',
  },
  {
    id: 4.03,
    question: '',
    answer: '',
  },
  {
    id: 4.04,
    question: '',
    answer: '',
  },
  {
    id: 4.05,
    question: '',
    answer: '',
  },
  {
    id: 4.06,
    question: '',
    answer: '',
  },
  {
    id: 4.07,
    question: '',
    answer: '',
  },
  {
    id: 4.08,
    question: '',
    answer: '',
  },
  {
    id: 4.09,
    question: '',
    answer: '',
  },
  {
    id: 4.10,
    question: '',
    answer: '',
  },
  {
    id: 4.11,
    question: '',
    answer: '',
  },
  {
    id: 4.12,
    question: '',
    answer: '',
  },
  {
    id: 4.13,
    question: '',
    answer: '',
  },
  {
    id: 4.14,
    question: '',
    answer: '',
  },
  {
    id: 4.15,
    question: '',
    answer: '',
  },
  {
    id: 4.16,
    question: '',
    answer: '',
  },
  {
    id: 4.17,
    question: '',
    answer: '',
  },
  {
    id: 4.18,
    question: '',
    answer: '',
  },
  {
    id: 4.19,
    question: '',
    answer: '',
  },
  {
    id: 4.20,
    question: '',
    answer: '',
  },
  {
    id: 4.21,
    question: '',
    answer: '',
  },
  {
    id: 4.22,
    question: '',
    answer: '',
  },
  {
    id: 4.23,
    question: '',
    answer: '',
  },
  {
    id: 4.24,
    question: '',
    answer: '',
  },
  {
    id: 4.25,
    question: '',
    answer: '',
  },
  {
    id: 4.26,
    question: '',
    answer: '',
  },
  {
    id: 4.27,
    question: '',
    answer: '',
  },
  {
    id: 4.28,
    question: '',
    answer: '',
  },
  {
    id: 4.29,
    question: '',
    answer: '',
  },
  {
    id: 4.30,
    question: '',
    answer: '',
  },
  {
    id: 4.31,
    question: '',
    answer: '',
  },
  {
    id: 4.32,
    question: '',
    answer: '',
  },
  {
    id: 4.33,
    question: '',
    answer: '',
  },
  {
    id: 4.34,
    question: '',
    answer: '',
  },
  {
    id: 4.35,
    question: '',
    answer: '',
  },
  {
    id: 4.36,
    question: '',
    answer: '',
  },
  {
    id: 4.37,
    question: '',
    answer: '',
  },
]
const eight = [
  {
    id: 8.00,
    question: 'LESSON 8 - Implementing Identity and Account Management Controls',
  }, 
  {
    id: 4.01,
    question: '',
    answer: '',
  },
  {
    id: 4.02,
    question: '',
    answer: '',
  },
  {
    id: 4.03,
    question: '',
    answer: '',
  },
  {
    id: 4.04,
    question: '',
    answer: '',
  },
  {
    id: 4.05,
    question: '',
    answer: '',
  },
  {
    id: 4.06,
    question: '',
    answer: '',
  },
  {
    id: 4.07,
    question: '',
    answer: '',
  },
  {
    id: 4.08,
    question: '',
    answer: '',
  },
  {
    id: 4.09,
    question: '',
    answer: '',
  },
  {
    id: 4.10,
    question: '',
    answer: '',
  },
  {
    id: 4.11,
    question: '',
    answer: '',
  },
  {
    id: 4.12,
    question: '',
    answer: '',
  },
  {
    id: 4.13,
    question: '',
    answer: '',
  },
  {
    id: 4.14,
    question: '',
    answer: '',
  },
  {
    id: 4.15,
    question: '',
    answer: '',
  },
  {
    id: 4.16,
    question: '',
    answer: '',
  },
  {
    id: 4.17,
    question: '',
    answer: '',
  },
  {
    id: 4.18,
    question: '',
    answer: '',
  },
  {
    id: 4.19,
    question: '',
    answer: '',
  },
  {
    id: 4.20,
    question: '',
    answer: '',
  },
  {
    id: 4.21,
    question: '',
    answer: '',
  },
  {
    id: 4.22,
    question: '',
    answer: '',
  },
  {
    id: 4.23,
    question: '',
    answer: '',
  },
  {
    id: 4.24,
    question: '',
    answer: '',
  },
  {
    id: 4.25,
    question: '',
    answer: '',
  },
  {
    id: 4.26,
    question: '',
    answer: '',
  },
  {
    id: 4.27,
    question: '',
    answer: '',
  },
  {
    id: 4.28,
    question: '',
    answer: '',
  },
  {
    id: 4.29,
    question: '',
    answer: '',
  },
  {
    id: 4.30,
    question: '',
    answer: '',
  },
  {
    id: 4.31,
    question: '',
    answer: '',
  },
  {
    id: 4.32,
    question: '',
    answer: '',
  },
  {
    id: 4.33,
    question: '',
    answer: '',
  },
  {
    id: 4.34,
    question: '',
    answer: '',
  },
  {
    id: 4.35,
    question: '',
    answer: '',
  },
  {
    id: 4.36,
    question: '',
    answer: '',
  },
  {
    id: 4.37,
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
    id: 4.01,
    question: '',
    answer: '',
  },
  {
    id: 4.02,
    question: '',
    answer: '',
  },
  {
    id: 4.03,
    question: '',
    answer: '',
  },
  {
    id: 4.04,
    question: '',
    answer: '',
  },
  {
    id: 4.05,
    question: '',
    answer: '',
  },
  {
    id: 4.06,
    question: '',
    answer: '',
  },
  {
    id: 4.07,
    question: '',
    answer: '',
  },
  {
    id: 4.08,
    question: '',
    answer: '',
  },
  {
    id: 4.09,
    question: '',
    answer: '',
  },
  {
    id: 4.10,
    question: '',
    answer: '',
  },
  {
    id: 4.11,
    question: '',
    answer: '',
  },
  {
    id: 4.12,
    question: '',
    answer: '',
  },
  {
    id: 4.13,
    question: '',
    answer: '',
  },
  {
    id: 4.14,
    question: '',
    answer: '',
  },
  {
    id: 4.15,
    question: '',
    answer: '',
  },
  {
    id: 4.16,
    question: '',
    answer: '',
  },
  {
    id: 4.17,
    question: '',
    answer: '',
  },
  {
    id: 4.18,
    question: '',
    answer: '',
  },
  {
    id: 4.19,
    question: '',
    answer: '',
  },
  {
    id: 4.20,
    question: '',
    answer: '',
  },
  {
    id: 4.21,
    question: '',
    answer: '',
  },
  {
    id: 4.22,
    question: '',
    answer: '',
  },
  {
    id: 4.23,
    question: '',
    answer: '',
  },
  {
    id: 4.24,
    question: '',
    answer: '',
  },
  {
    id: 4.25,
    question: '',
    answer: '',
  },
  {
    id: 4.26,
    question: '',
    answer: '',
  },
  {
    id: 4.27,
    question: '',
    answer: '',
  },
  {
    id: 4.28,
    question: '',
    answer: '',
  },
  {
    id: 4.29,
    question: '',
    answer: '',
  },
  {
    id: 4.30,
    question: '',
    answer: '',
  },
  {
    id: 4.31,
    question: '',
    answer: '',
  },
  {
    id: 4.32,
    question: '',
    answer: '',
  },
  {
    id: 4.33,
    question: '',
    answer: '',
  },
  {
    id: 4.34,
    question: '',
    answer: '',
  },
  {
    id: 4.35,
    question: '',
    answer: '',
  },
  {
    id: 4.36,
    question: '',
    answer: '',
  },
  {
    id: 4.37,
    question: '',
    answer: '',
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