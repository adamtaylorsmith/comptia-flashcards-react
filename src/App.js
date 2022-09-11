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
    answer: 'Certain information should only be known to certain people',
  },
  {
    id: 1.02,
    question: 'Integrity',
    answer: 'Data is stored and transferred as intended; any modification is authorized',
  },
  {
    id: 1.03,
    question: 'Availability',
    answer: 'Information is accessible to those authorized to view/modify it',
  },
  {
    id: 1.04,
    question: 'Non-repudiation',
    answer: 'Security principle wherein a subject cant deny doing something; like creating, modifying, sending a resource',
  },
  {
    id: 1.05,
    question: 'NIST - National Institute of Standards and Technology',
    answer: '',
  },
  {
    id: 1.06,
    question: 'NIST Cyber Framework Five Functions',
    answer: 'Identify, Protect, Detect, Respond, Recover',
  },
  {
    id: 1.07,
    question: 'CISO - Chief Information Security Officer',
    answer: 'Responsible for overall internal security',
  },
  {
    id: 1.08,
    question: 'ISSO - Information Systems Security Officer',
    answer: 'Responsible for implementing, maintaining, and monitoring security policy',
  },
  {
    id: 1.09,
    question: 'SOC - Security Operations Center',
    answer: 'Location where sec professionals monitor and protect critical assets',
  },
  {
    id: 1.10,
    question: 'DevOps',
    answer: 'Cultural shift within an organization to encourage more collaboration between developers and system admins',
  },
  {
    id: 1.11,
    question: 'DevSecOps',
    answer: 'Extension of DevOps that includes security specialists and has security as a primary consideration at every stage of software development',
  },
  {
    id: 1.12,
    question: 'CIRT / CERT',
    answer: 'Cyber Incident / Emergency Response Team. Dedicated response team working as a single point-of-contact for notification of security incidents',
  },
  {
    id: 1.13,
    question: 'Security Control',
    answer: 'Something designed to give a system or asset the properties of CIA (and non-repudiation)',
  },
  {
    id: 1.14,
    question: 'Technical Control',
    answer: 'Control implemented as hardware, software, or firmware. Ex: Firewalls, anti-virus software',
  },
  {
    id: 1.15,
    question: 'Operational Control',
    answer: 'Implemented primarily by people instead of systems. Ex: Security guards, training programs',
  },
  {
    id: 1.16,
    question: 'Managerial Control',
    answer: 'Gives oversight of the information system. Ex: Audits, tools allowing for evaluation of other controls',
  },
  {
    id: 1.17,
    question: 'Preventive Control',
    answer: 'Acts to eliminate or reduce the likelihood that an attack can succeed. Used BEFORE an attack. Ex: ACLs, door locks, SOPs',
  },
  {
    id: 1.18,
    question: 'Detective Control',
    answer: 'May not prevent or deter access, but will identify and record any attempted or successful intrusion. Used DURING attack. Ex: Logs, alarms, video recordings',
  },
  {
    id: 1.19,
    question: 'Corrective Control',
    answer: 'Acts to eliminate or reduce the impact of an intrusion. Works AFTER attack. Ex: Backup system to restore data that was damaged, patch management systems',
  },
  {
    id: 1.20,
    question: 'Physical Control',
    answer: 'Alarms, gateways, locks, lighting, security cameras, guards',
  },
  {
    id: 1.21,
    question: 'Deterrent Control',
    answer: 'May not physically or logically prevent access, but psychologically discourages an attacker from attempting an intrusion. Ex: Warning signs, obvious camera placement',
  },
  {
    id: 1.22,
    question: 'Compensating Control',
    answer: 'Serves as a substitute for a principal control, affording same or better level of protection but using a different method or technology',
  },
  {
    id: 1.23,
    question: 'CSF - Cybersecurity Framework',
    answer: 'List of activities and objectives undertaken to mitigate risks',
  },
  {
    id: 1.24,
    question: 'ISO - International Organization for Standardization',
    answer: 'Has an overall series of information security standards known as 27k, with specific ones for security controls, cloud security, personal data, etc',
  },
  {
    id: 1.25,
    question: 'CSA - Cloud Security Alliance',
    answer: 'A nonprofit organization with a mission to promote best practices for using cloud computing securely',
  },
  {
    id: 1.26,
    question: 'SSAE - Statement on Standards for Attestation Engagements',
    answer: 'Audit specifications designed to assure consumers that service providers meet professional standards',
  },
  {
    id: 1.27,
    question: 'CIS - Center for Internet Security',
    answer: 'Non-profit organization that produces benchmarks for different aspects of cybersecurity; including NIST-complient ones and product-specific ones like for Windows, macOS, Linux, etc',
  },
  {
    id: 1.28,
    question: 'OWASP - Open Web Application Security Project',
    answer: 'Non-profit community that supplies many secure app development resources, like the Top 10 list of the most critical app security risks',
  },
  {
    id: 1.29,
    question: 'SOX - Sarbanes-Oxley Act',
    answer: 'In the US; mandates implementation of risk assessments, internal controls, and audit procedures',
  },
  {
    id: 1.30,
    question: 'CSA - Computer Security Act',
    answer: 'Requires federal agencies to develop security policies for computer systems that process confidential information',
  },
  {
    id: 1.31,
    question: 'FISMA - Federal Information Security Management Act',
    answer: 'Governs the security of data processed by federal government agencies',
  },
  {
    id: 1.32,
    question: 'GDRP - General Data Protection Regulation',
    answer: 'In the EU; means personal data cant be collected, processed, or retained without the individuals informed consent',
  },
  {
    id: 1.33,
    question: 'PCI DSS - Payment Card Industry Data Security Standard',
    answer: 'Defines the safe handling and storage of financial information',
  },
  {
    id: 1.34,
    question: 'ISO 27001',
    answer: 'Focuses on personal data and privacy',
  },
  {
    id: 1.35,
    question: 'ISO 27002',
    answer: 'Classifies security controls',
  },
  {
    id: 1.36,
    question: 'ISO 27017 / 27018',
    answer: 'Reference cloud security',
  },
  {
    id: 1.37,
    question: 'ISO 31K',
    answer: 'ISO more broad, all encompassing framework for enterprise risk management',
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
    answer: 'A weakness that could be trigged accidentally or intentionally to cause a security breach',
  },
  {
    id: 2.02,
    question: 'Threat',
    answer: 'The potential for someone/thing to exploit a vulnerability and breach security',
  },
  {
    id: 2.03,
    question: 'Risk',
    answer: 'The likelihood and impact of a threat actor exploiting a vulnerability',
  },
  {
    id: 2.04,
    question: 'What are two critical attributes to know about threat actors',
    answer: 'Intent and motivation',
  },
  {
    id: 2.05,
    question: 'Black Hat',
    answer: 'Unauthorized',
  },
  {
    id: 2.06,
    question: 'White Hat',
    answer: 'Authorized',
  },
  {
    id: 2.07,
    question: 'Grey Hat',
    answer: 'Semi-authorized',
  },
  {
    id: 2.08,
    question: 'Script Kiddie',
    answer: 'Someone who uses hacker tools without necessarily understanding how they work or being able to craft new attacks themselves',
  },
  {
    id: 2.09,
    question: 'Hacktivist',
    answer: 'Someone, or a group, that use cyber weapons to promote a political agenda',
  },
  {
    id: 2.10,
    question: 'APT - Advanced Persistent Threat',
    answer: 'Refers to the ongoing ability of an adversary to compromise network security - to obtain and maintain access - using a variety of TTPs',
  },
  {
    id: 2.11,
    question: 'State Actors',
    answer: 'Adversaries working on behalf of a nation state government, often very sophisticated and well funded',
  },
  {
    id: 2.12,
    question: 'Criminal Syndicate',
    answer: 'Criminal groups/gangs acting online, typically for financial fraud and extortion purposes',
  },
  {
    id: 2.13,
    question: 'Shadow IT',
    answer: 'When users purchase or introduce computer hardware or software to the workplace without permission and without going through security analysis processes',
  },
  {
    id: 2.14,
    question: 'Attack Surface',
    answer: 'All the points where a malicious threat actor could try to exploit a vulnerability',
  },
  {
    id: 2.15,
    question: 'Attack Vector',
    answer: 'The path a threat actor uses to gain access to a secure system',
  },
  {
    id: 2.16,
    question: 'Deep Web',
    answer: 'Any part of the WWW not indexed by a search engine',
  },
  {
    id: 2.17,
    question: 'Dark Net',
    answer: 'Network established as an overlay to Internet infrastructure; acts to anonymize usage and prevent others from knowing about the networks existence',
  },
  {
    id: 2.18,
    question: 'Dark Web',
    answer: 'Sites, content, and services accessible only over a dark net',
  },
  {
    id: 2.19,
    question: 'Reputational Threat Intelligence',
    answer: 'Lists of IP address and domains associated with malicious behavior, plus signatures of known malware',
  },
  {
    id: 2.20,
    question: 'CTI - Cyber Threat Intelligence',
    answer: 'Feeds of packaged threat data that can integrate with SIEM platforms',
  },
  {
    id: 2.21,
    question: 'Closed / Proprietary CTI',
    answer: 'Threat research and CTI is made available as a paid subscription to a commercial threat intelligence platform',
  },
  {
    id: 2.22,
    question: 'Vendor CTI',
    answer: 'Many vendors make huge amounts of threat research available via their websites for their customers',
  },
  {
    id: 2.23,
    question: 'ISAC - Information Sharing and Analysis Centers',
    answer: 'Sector-specific threat intelligence resources for companies and agencies in critical industries like power supply, financial markets, or aviation',
  },
  {
    id: 2.24,
    question: 'OSINT - Open Source Intelligence',
    answer: 'Information gathered from publicly available ("open") sources, such as radio, television, newspapers, public websites, social media, etc',
  },
  {
    id: 2.25,
    question: 'TTP - Tactic, Technique, and Procedure',
    answer: 'Generalized statement of adversary behavior categorized in terms of strategy (tactics), attack vectors (techniques), and specific tools and methods (procedures)',
  },
  {
    id: 2.26,
    question: 'IoC - Indicator of Compromise',
    answer: 'Residual sign that an asset or network has been successfully attacked or is continuing to be attacked. Evidence of TTP',
  },
  {
    id: 2.27,
    question: 'STIX - Structured Threat Information eXpression',
    answer: 'Provides the syntax for describe CTI',
  },
  {
    id: 2.28,
    question: 'TAXII - Trusted Automated eXchange of Indicator Information',
    answer: 'Protocol that provides a means for transmitting CTI data between servers and clients',
  },
  {
    id: 2.29,
    question: 'AIS - Automated Indicator Sharing',
    answer: 'Service offered by the Department of Homeland Security for companies to participate in threat intelligence sharing',
  },
  {
    id: 2.30,
    question: 'Threat Map',
    answer: 'Animated graphic showing the source, target, and type of attacks that have been detected by a CTI platform',
  },
  {
    id: 2.31,
    question: 'CVE - Common Vulnerabilities and Exposures',
    answer: 'A database of vulnerabilities operated by Mitre, including information about the vulnerability and its severity',
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
    question: 'Threat Hunting',
    answer: '',
  },
  {
    id: 3.39,
    question: 'Maneuver',
    answer: '',
  },
  {
    id: 3.40,
    question: 'Penetration Test',
    answer: 'An authorized test where contractors will use hacking techniques to discover exploitable weaknesses in the targets security system. ACTIVE',
  },
  {
    id: 3.41,
    question: 'Rules of Engagement',
    answer: 'Specify what is and is not permitted in a pen test',
  },
  {
    id: 3.42,
    question: 'Black Box',
    answer: 'Unknown environment; tester is given no privileged info about the network. Simulates external threats',
  },
  {
    id: 3.43,
    question: 'White Box',
    answer: 'Known environment; tester is given complete access to info about the network. Simulates privileged insider threats',
  },
  {
    id: 3.44,
    question: 'Grey Box',
    answer: 'Partially known environment; tester is given some info about the network. Simulates underprivileged insider threats',
  },
  {
    id: 3.45,
    question: 'Bug Bounty',
    answer: 'Program operated by a software vendor or website operator where rewards are given for reporting vulnerabilities',
  },
  {
    id: 3.46,
    question: 'Red Team',
    answer: 'Performs the offensive role to try and infiltrate a target',
  },
  {
    id: 3.47,
    question: 'Blue Team',
    answer: 'Performs the defensive role by operating, monitoring, and alerting controls to detect and prevent infiltration',
  },
  {
    id: 3.48,
    question: 'White Team',
    answer: 'Sets the rules of engagement and monitors the exercise',
  },
  {
    id: 3.49,
    question: 'Purple Team',
    answer: 'Where red and blue teams meet for regular debriefs while an exercise is ongoing',
  },
  {
    id: 3.50,
    question: 'Social Engineering',
    answer: 'Obtaining information, physical access to premises, or even access to a user account through the art of persuasion',
  },
  {
    id: 3.51,
    question: 'Footprinting',
    answer: 'Using software tools like Nmap to obtain information about a host or network topology',
  },
  {
    id: 3.52,
    question: 'War Driving',
    answer: 'Mapping the location and type of wireless networks operated by a target or targets',
  },
  {
    id: 3.53,
    question: 'Drones / Unmanned Aerial Vehicle',
    answer: 'Allow testers/attackers to check out target premises or even perform war driving from the air',
  },
  {
    id: 3.54,
    question: 'Persistence',
    answer: 'The testers or attackers ability to reconnect to a compromised host and use it as a remote access tool or backdoor',
  },
  {
    id: 3.55,
    question: 'Privilege Escalation',
    answer: 'Finding ways to elevate your privileges; so going from a normal user to one with admin rights',
  },
  {
    id: 3.56,
    question: 'Lateral Movement',
    answer: 'Gaining control over other hosts on a network',
  },
  {
    id: 3.57,
    question: 'Pivoting',
    answer: 'The initial foothold into a network, allowing testers/attackers to bypass a network boundary and compromise servers on the inside',
  },
  {
    id: 3.58,
    question: 'Actions on Objectives',
    answer: 'Could mean stealing data, installing malware, in the case of a pen tester just proving/showing that a vulnerability could be exploited; its what the attacker/tester came there to do',
  },
  {
    id: 3.59,
    question: 'Cleanup',
    answer: 'Removing evidence of the attack, or at least evidence that could implicate the attacker. For testers, removing any tools or backdoors they used',
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
    answer: 'Similar to adware, but can also monitor local application activity, take screenshots, and activate devices like microphones or webcams',
  },
  {
    id: 4.38,
    question: 'Keylogger',
    answer: 'Spyware that actively attempts to steal confidential information by recording keystrokes',
  },
  {
    id: 4.39,
    question: 'Backdoor',
    answer: 'Something that gives access to a program or a service that circumvents normal security protections. Can be malicious or accidental',
  },
  {
    id: 4.40,
    question: 'RAT - Remote Access Trojan',
    answer: 'Backdoor malware that mimics the functionality of legitimate remote control programs, designed to operate covertly. Gives attacker remote access to host',
  },
  {
    id: 4.41,
    question: 'Botnet',
    answer: 'A group of compromised computers (bots) that can be used for DDoS, spam campaigns, cryptomining, etc',
  },
  {
    id: 4.42,
    question: 'C&C - Command and Control',
    answer: 'An infrastructure of hosts and services with which attackers direct, distribute, and control malware over botnets',
  },
  {
    id: 4.43,
    question: 'Rootkit',
    answer: 'Malware running with root/System privileges; very hard to detect, hard to remove, can reside in firmware, can make it so local tools cant discover it',
  },
  {
    id: 4.44,
    question: 'Ransomware',
    answer: 'A type of malware that tries to extort money from the victim',
  },
  {
    id: 4.45,
    question: 'Crypto-malware',
    answer: 'Class of ransomware that encrypts data files on any fixed, removable, and network drives. Demands a ransom to hand over decryption key',
  },
  {
    id: 4.46,
    question: 'Logic Bomb',
    answer: 'A computer program or script that lies dormant until it is triggered by a specific time or event',
  },
  {
    id: 4.47,
    question: 'EPP - Endpoint Protection Platform',
    answer: 'A software agent and monitoring system that performs multiple security tasks',
  },
  {
    id: 4.48,
    question: 'UEBA - User and Entity Behavior Analytics',
    answer: 'A system that can provide automated identification of suspicious activity by user accounts and computer hosts',
  },
  {
    id: 4.49,
    question: 'Sandbox',
    answer: 'A system configured to be completely isolated from its host. Can be used to test malware',
  },
  {
    id: 4.50,
    question: 'Anomaly Analysis',
    answer: 'Analyzing file metadata and checking for suspicious files, temporary files, etc, that can help establish a timeline of events for an incident',
  },
  {
    id: 4.51,
    question: 'Abnormal Process Behavior Analysis',
    answer: 'Building up a sense of what is "normal" in a system so that you can spot deviations in a potentially infected system',
  },
  {
    id: 4.52,
    question: 'Sysinternals',
    answer: 'A free suite of tools designed to assist with troubleshooting issues with Windows',
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
    answer: 'The art of making information secure by encoding it',
  },
  {
    id: 5.02,
    question: 'Plaintext',
    answer: 'Cleartext - an unencrypted message',
  },
  {
    id: 5.03,
    question: 'Ciphertext',
    answer: 'An encrypted message',
  },
  {
    id: 5.04,
    question: 'Cipher',
    answer: 'The process or algorithm used to encrypt and decrypt a message',
  },
  {
    id: 5.05,
    question: 'Cryptanalysis',
    answer: 'The art of cracking cryptographic systems',
  },
  {
    id: 5.06,
    question: 'Hashing',
    answer: 'A one-way cryptographic function that takes input of any length and produces a fixed-length string',
  },
  {
    id: 5.07,
    question: 'Checksum / Message Digest / Hash',
    answer: 'The output of a hashing algorithm',
  },
  {
    id: 5.08,
    question: 'SHA - Secure Hashing Algorithm',
    answer: 'Considered the strongest hashing algorithm; the most popular variant is SHA-256 which produces a 256 bit digest',
  },
  {
    id: 5.09,
    question: 'MD5 - Message Digest Algorithm #5',
    answer: 'A weaker hashing algorithm that produces a 128 bit digest; still used because it is faster and more compatible between products',
  },
  {
    id: 5.10,
    question: 'Substitution Cipher',
    answer: 'A cipher that involves replacing characters (a letter or block of letters) in the plaintext with different ones in ciphertext; ex: Caesar cipher, ROT13',
  },
  {
    id: 5.11,
    question: 'Transposition Cipher',
    answer: 'A cipher where the characters stay the same in both plain and ciphertext, but their order is changed; ex: Rail fence cipher',
  },
  {
    id: 5.12,
    question: 'Symmetric Encryption',
    answer: 'An encryption method in which the same key is used to encrypt and decrypt a message. Provides confidentiality. Faster, used for bulk encryption',
  },
  {
    id: 5.13,
    question: 'Stream Cipher',
    answer: 'A type of symmetric encryption where each byte or bit of data in the plaintext is encrypted one at a time',
  },
  {
    id: 5.14,
    question: 'Block Cipher',
    answer: 'A type of symmetric encryption where plaintext is divided into equal-size blocks and then encrypted. Padded to a correct size',
  },
  {
    id: 5.15,
    question: 'AES - Advanced Encryption Standard',
    answer: 'Default symmetric block cipher used for most products; basic key size is 128 bits, but most use AES256 a 256-bit key',
  },
  {
    id: 5.16,
    question: 'Asymmetric Encryption',
    answer: 'AKA public key cryptography; an encryption method where operations are performed by two different but related public and private keys',
  },
  {
    id: 5.17,
    question: 'RSA Algorithm',
    answer: 'De facto asymmetric algorithm used for encryption, digital signatures, and key exchange',
  },
  {
    id: 5.18,
    question: 'Trapdoor Function',
    answer: 'A function that is easy to compute in one direction, yet difficult to compute in the opposite direction',
  },
  {
    id: 5.19,
    question: 'ECC - Elliptic Curve Cryptography',
    answer: 'A type of trapdoor function that can be used in asymmetric ciphers; the advantage is it can use smaller keys that are just as strong as RSAs larger keys',
  },
  {
    id: 5.20,
    question: 'Digital Signature',
    answer: 'An asymmetrically encrypted hash message that provides integrity and authentication of a message; commonly used to sign emails or digital certificates',
  },
  {
    id: 5.21,
    question: 'DSA - Digital Signature Algorithm',
    answer: 'A format of creating digital signatures using ECC rather than the RSA cipher',
  },
  {
    id: 5.22,
    question: 'Key Exchange',
    answer: 'The process of sending and receiving secure cryptographic keys utilizing both asymmetric and symmetric encryption',
  },
  {
    id: 5.23,
    question: 'Digital Certificates',
    answer: 'A technology used to guarantee the identity of a person or server issuing out a public key; signed by CAs who vouch for the person/servers identity',
  },
  {
    id: 5.24,
    question: 'PFS - Perfect Forward Secrecy',
    answer: 'Uses the D-H key agreement to create ephemeral session keys; meaning even if an attacker intercepts the key, it wont be of any use to them',
  },
  {
    id: 5.25,
    question: 'DHE - Diffie-Hellman Ephemeral / ECDHE - Elliptic Curve Diffie-Hellman Ephemeral',
    answer: 'Varients of D-H that are used to implement perfect forward secrecy',
  },
  {
    id: 5.26,
    question: 'Cipher Suite',
    answer: 'Protocols often use separate cryptographic products for different things; the combo of ciphers supported is a suite',
  },
  {
    id: 5.27,
    question: 'CBC - Cipher Block Chaining',
    answer: 'A mode that applies an IV to the 1st plaintext block to make sure it outputs a unique ciphertext; the output is then combined with the next block using an XOR operation',
  },
  {
    id: 5.28,
    question: 'Counter Mode',
    answer: 'A mode of operation that can make the AES block cipher algorithm work as a stream cipher',
  },
  {
    id: 5.29,
    question: 'MAC - Message Authentication Code',
    answer: 'Provides authentication and integrity by hashing a combo of message output and a shared secret key',
  },
  {
    id: 5.30,
    question: 'Cryptographic Primitive',
    answer: 'A single hash function, symmetric cipher, or asymmetric cipher',
  },
  {
    id: 5.31,
    question: 'Symmetric encryption provides..',
    answer: 'Confidentiality',
  },
  {
    id: 5.32,
    question: 'Hashing algorithms provide..',
    answer: 'Integrity',
  },
  {
    id: 5.33,
    question: 'Asymmetric encryption provides..',
    answer: 'Authentication and Non-repudiation',
  },
  {
    id: 5.34,
    question: 'Obfuscation',
    answer: 'The art of making a message/code/etc difficult to understand',
  },
  {
    id: 5.35,
    question: 'Cryptographic Performance Limitations',
    answer: 'Speed, Latency, Size, Computational overheads',
  },
  {
    id: 5.36,
    question: 'Cryptographic Security Limitations',
    answer: 'Low entropy, Weak keys, Predictability, Re-usage',
  },
  {
    id: 5.37,
    question: 'Entropy',
    answer: 'A measure of disorder or randomness',
  },
  {
    id: 5.38,
    question: 'RC4',
    answer: 'A symmetric stream cipher known to have weak keys; seen with WEP and WPA',
  },
  {
    id: 5.39,
    question: 'TRNG - True Random Number Generator',
    answer: 'A number generator that uses truly random input to generate a number, such as atmospheric noise or airwave static',
  },
  {
    id: 5.40,
    question: 'PRNG - Pseudo Random Number Generator',
    answer: 'A number generator that relies on mathematical algorithms that are very close to being completely random themselves',
  },
  {
    id: 5.41,
    question: 'Nonce',
    answer: 'Number only use once; random or pseudo-random value used alongside a cipher',
  },
  {
    id: 5.42,
    question: 'IV - Initialization Vector',
    answer: 'The principal characteristic is that it is a random or pseudo-random number; rarely reused',
  },
  {
    id: 5.43,
    question: 'Salt',
    answer: 'A random or pseudo-random number or string, used specifically in conjunction with hashing passwords',
  },
  {
    id: 5.44,
    question: 'Downgrade Attack',
    answer: 'A type of attack that forces or requests a system to downgrade its security. The attacker then exploits the weaker security control',
  },
  {
    id: 5.45,
    question: 'Key Stretching',
    answer: 'A technique that strengthens potentially weak cryptographic keys by putting them through many additional rounds of hashing',
  },
  {
    id: 5.46,
    question: 'Birthday Attack',
    answer: 'An attack that searches for any two message digests that are the same aka collisions; potentially using this to swap out a benign document for a malicious one',
  },
  {
    id: 5.47,
    question: 'Collision',
    answer: 'When a hashing function produces the same hash values for two different plaintexts',
  },
  {
    id: 5.48,
    question: 'Qubits',
    answer: 'Quantum computing performs processing on these units',
  },
  {
    id: 5.49,
    question: 'Superposition',
    answer: 'An indeterminate state for a qubit, where there is a probability of it being either 1 or 0',
  },
  {
    id: 5.50,
    question: 'Post-Quantum',
    answer: 'The expected state of computing when quantum computers that can perform useful tasks are a reality',
  },
  {
    id: 5.51,
    question: 'Lightweight Cryptography',
    answer: 'A compact cipher suite that is both quantum resistant and can run on battery-powered devices; doesnt exist yet',
  },
  {
    id: 5.52,
    question: 'Homomorphic Encryption',
    answer: 'Enables processing/statistical analysis of encrypted data without the need to decrypt the data',
  },
  {
    id: 5.53,
    question: 'Blockchain',
    answer: 'A concept where an expanding list of transactional records are secured with cryptography; each record is a "block" and run through a hash; that value is added to the next block in the chain, etc',
  },
  {
    id: 5.54,
    question: 'Steganography',
    answer: 'A technique for obscuring the presence of a message',
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
    answer: 'Framework of CAs, digital certificates, software, services, etc deployed for the purpose of validating subject identities',
  },
  {
    id: 6.02,
    question: 'CA - Certificate Authority',
    answer: 'Entity responsible for issuing and guaranteeing certificates',
  },
  {
    id: 6.03,
    question: 'Certificate Chaining',
    answer: 'A process that combines/shows all certificates within a trust model; it includes all the certificates in the chain of trust from the root CA down to the certificate issued to the end user',
  },
  {
    id: 6.04,
    question: 'Online CA',
    answer: 'A CA connected to the network and available to accept and process CSRs',
  },
  {
    id: 6.05,
    question: 'Offline CA',
    answer: 'A CA taken off of the network, disconnected entirely from any network, and usually kept in a powered-off state; will need to be brought back online to add or update intermediate CAs',
  },
  {
    id: 6.06,
    question: 'CSR - Certificate Signing Request',
    answer: 'A structured message sent to a certificate authority requesting a digital certificate',
  },
  {
    id: 6.07,
    question: 'RA - Registration Authority',
    answer: ' specific type of intermediate CA that performs solely certificate registration services on behalf of the root; it does nothing else - no signing, no issuing',
  },
  {
    id: 6.08,
    question: 'Digital Certificate',
    answer: 'Acts as a wrapper for someones public key; contains info about the subject and the certificates issuer; will be digitally signed to prove it was issued by a particular CA',
  },
  {
    id: 6.09,
    question: 'What standard is used for digital certificates?',
    answer: 'X.509',
  },
  {
    id: 6.10,
    question: 'SAN - Subject Alternative Name',
    answer: 'Extension field that represents different types of identifiers, including domain names',
  },
  {
    id: 6.11,
    question: 'Server Certificate',
    answer: 'Guarantees the identity of e-commerce sites or any website where users submit data that should be kept confidential',
  },
  {
    id: 6.12,
    question: 'DV - Domain Validation',
    answer: 'Proves ownership of a particular domain, can be done just through responding to an email, so easily compromised',
  },
  {
    id: 6.13,
    question: 'EV - Extended Validation',
    answer: 'Subjects that require more rigorous checks on the subjects legal identity and control over the domain or software being signed',
  },
  {
    id: 6.14,
    question: 'Root Certificate',
    answer: 'Cert that identifies the CA itself; self-signed',
  },
  {
    id: 6.15,
    question: 'Self-signed Certificate',
    answer: 'Any machine, web server, or program code can be deployed with one; they will be marked as untrusted by OS and browsers',
  },
  {
    id: 6.16,
    question: 'Key Management Life Cycle',
    answer: 'Key generation, Certificate generation, Storage, Revocation, Expiration and renewal',
  },
  {
    id: 6.17,
    question: 'M-of-N Control',
    answer: 'Means that "N" number out of "M" total admins need to be present for access/changes to be granted',
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
    question: 'Whats given to users when they authenticate with SSO?',
    answer: 'A cryptographic token',
  },
  {
    id: 8.02,
    question: 'Three Phases of Personnel Management',
    answer: 'Recruitment, Operation, Termination/Separation',
  },
  {
    id: 8.03,
    question: 'Onboarding',
    answer: 'The process of welcoming a new employee to the organization; same principle for new suppliers or contractors',
  },
  {
    id: 8.04,
    question: 'Onboarding Tasks',
    answer: 'Create user account / Make sure creds are known only to account holder / Asset allocation / Training/policies',
  },
  {
    id: 8.05,
    question: 'Separation of Duties',
    answer: 'Means of establishing checks and balances to mitigate against insider threat compromise',
  },
  {
    id: 8.06,
    question: 'Least Privilege',
    answer: 'Providing only the minimum amount of privileges necessary to perform a job or function',
  },
  {
    id: 8.07,
    question: 'Job Rotation',
    answer: 'No one person is permitted to remain in the same job for an extended period of time; helps enforce separation of duties',
  },
  {
    id: 8.08,
    question: 'Mandatory Vacation',
    answer: 'Employees are forced to take their vacation time so that corporate audits can be done to make sure theres been no discrepancies in the employees activity; helps enforce separation of duties',
  },
  {
    id: 8.09,
    question: 'Offboarding',
    answer: 'The process of ensuring an employee leaves a company gracefully',
  },
  {
    id: 8.10,
    question: 'Offboarding Tasks',
    answer: 'Disable user account and privilege / Retrieve any company assets / Wipe and return personal assets / Change security credentials',
  },
  {
    id: 8.11,
    question: 'Default Account',
    answer: 'Created by OS when installed; has every permission available; Windows = Administrator, Linux = Root',
  },
  {
    id: 8.12,
    question: 'Service Accounts',
    answer: 'Accounts used by scheduled processes and application server software, like databases',
  },
  {
    id: 8.13,
    question: 'Windows System Account',
    answer: 'Service account; has most privileges of any Windows account; full privileges over local computer',
  },
  {
    id: 8.14,
    question: 'Windows Local Service Account',
    answer: 'Service account; has same privileges as standard user; can only access network resources as an anon user',
  },
  {
    id: 8.15,
    question: 'Windows Network Service Account',
    answer: 'Service account; has same privileges as standard user; can present account credentials when accessing network resources',
  },
  {
    id: 8.16,
    question: 'Shared Account',
    answer: 'An account where password or other credentials are known to more than one person',
  },
  {
    id: 8.17,
    question: 'SSH Two Types of Key Pairs',
    answer: 'Host Key Pair: Identifies an SSH server / User Key Pair: Way for specific client to login to SSH server',
  },
  {
    id: 8.18,
    question: 'SID - Security Identifier',
    answer: 'Value assigned to an account by Windows, used by the OS to identify that account',
  },
  {
    id: 8.19,
    question: 'UID - User Identifier',
    answer: 'Value assigned to an account by Linux, used by the OS to identify that account',
  },
  {
    id: 8.20,
    question: 'GPO - Group Policy Object',
    answer: 'A way to deploy per-user and per-computer settings like password policy, account restrictions, etc on a Windows domain',
  },
  {
    id: 8.21,
    question: 'Account Policies',
    answer: 'A set of rules governing user security information, such as password expiration and uniqueness, which can be set globally',
  },
  {
    id: 8.22,
    question: 'Password Aging',
    answer: 'Forces users to select a new password after a set number of days',
  },
  {
    id: 8.23,
    question: 'Password History',
    answer: 'Prevents users from using a password they previously used already',
  },
  {
    id: 8.24,
    question: 'Geofencing',
    answer: 'The practice of creating a virtual boundary based on real-world geography',
  },
  {
    id: 8.25,
    question: 'Geotagging',
    answer: 'The addition of location metadata to files or devices',
  },
  {
    id: 8.26,
    question: 'Recertification',
    answer: 'When a user moves to a new job role, old privileges may need to be revoked and new ones given',
  },
  {
    id: 8.27,
    question: 'Privilege / Permissions Auditing',
    answer: 'Reviewing user privileges regularly to make sure the are appropriate, finding and disabling unnecessary accounts, etc',
  },
  {
    id: 8.28,
    question: 'Usage Auditing',
    answer: 'Reviewing what users are doing with their permissions; setting up security logs to record key indicators and then reviewing the logs for anything suspicious',
  },
  {
    id: 8.29,
    question: 'Account Disablement',
    answer: 'You can manually disable accounts if you suspect compromise; login is permanently prevented until an admin manually re-enables the account',
  },
  {
    id: 8.30,
    question: 'Account Lockout',
    answer: 'Login is prevented for a period of time; can be done manually or by various automatic means like entering the wrong PW too many times',
  },
  {
    id: 8.31,
    question: 'DAC - Discretionary Access Control',
    answer: 'Access control model focusing on the important of the resource owner; they have full control over the resource and can modify its ACL to grant rights to others. Most flexible model, but bad for centralized administration',
  },
  {
    id: 8.32,
    question: 'RBAC - Role-Based Access Control',
    answer: 'Access control model where roles are defined and subjects are allocated to those roles; only system owner can modify roles',
  },
  {
    id: 8.33,
    question: 'MAC - Mandatory Access Control',
    answer: 'The most restrictive access control model, based on security clearance levels; typically found in military settings in which security is of supreme importance',
  },
  {
    id: 8.34,
    question: 'ABAC - Attribute-Based Access Control',
    answer: 'Most detailed access control model; makes access decisions based on a variety of different attributes like group membership, OS type, IP address, patches, etc',
  },
  {
    id: 8.35,
    question: 'Rule-Based Access Control',
    answer: 'Refers to any kind of access control model where the policies are determined by system-enforced rules instead of users; RBAC, ABAC, and MAC are all rule-based',
  },
  {
    id: 8.36,
    question: 'Linux Three Basic Permissions',
    answer: 'Read (r) / Write (w) / Execute (x)',
  },
  {
    id: 8.37,
    question: 'chmod',
    answer: 'Linux command used to modify permissions',
  },
  {
    id: 8.38,
    question: 'Directory Services',
    answer: 'Principal means of providing privilege management and authorization on an enterprise network; storing info about users, computers, security groups, services; much like a database',
  },
  {
    id: 8.39,
    question: 'LDAP - Lightweight Directory Access Protocol',
    answer: 'A protocol used by various client applications when the application needs to query or update an X.500 database',
  },
  {
    id: 8.40,
    question: 'Distinguished Name',
    answer: 'A naming system that uniquely identifies an object in an X.500 directory. Ex: CN=WidgetWeb, OU=Marketing, O=Widget, C=UK, DC=widget',
  },
  {
    id: 8.41,
    question: 'Federation',
    answer: 'Process that provides a shared login capability across multiple systems and enterprises; connects the identity management services of multiple systems',
  },
  {
    id: 8.42,
    question: 'IdP - Identity Provider',
    answer: 'In a federated network, the service that holds the user account and performs authentication',
  },
  {
    id: 8.43,
    question: 'SP - Service Provider',
    answer: 'In a federated network, the network that you are attempting to connect with using your IdP authentication',
  },
  {
    id: 8.44,
    question: 'SAML - Security Assertions Markup Language',
    answer: 'An XML-based data format used to exchange authentication information between a client and a service; used in federations',
  },
  {
    id: 8.45,
    question: 'SOAP - Simple Object Access Protocol',
    answer: 'An XML-based web services protocol used to exchange messages',
  },
  {
    id: 8.46,
    question: 'OAuth - Open Authorization',
    answer: 'Standard for federated identity management, allowing resource servers or consumer sites to work with user accounts created and managed on a separate IdP',
  },
  {
    id: 8.47,
    question: 'OIDC - Open ID Connect',
    answer: 'An authentication protocol that can be implemented as special types of OAuth flows with precisely defined token fields',
  },
  {
    id: 8.48,
    question: 'AUP - Acceptable Use Policy',
    answer: 'A policy that defines the actions users may perform while accessing systems and networking equipment',
  },
  {
    id: 8.49,
    question: 'Code of Conduct',
    answer: 'Sets out expected professional standards',
  },
  {
    id: 8.50,
    question: 'Clean Desk Policy',
    answer: 'Employee work area should be free from any documents left there; aims to prevent sensitive information from being obtained by unauthorized persons',
  },
  {
    id: 8.51,
    question: 'CTF - Capture the Flag',
    answer: 'A gamified competition, typically used in ethical hacking training, where participants complete challenges within a virtualized computing environment to discover flags',
  },
  {
    id: 8.52,
    question: 'CBT - Computer-Based Training',
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
    question: 'Common Network Weaknesses',
    answer: 'SPoF, Complex dependencies, A over CI (CIA triad), Lack of documentation/change control, Overdependence on perimeter security',
  },
  {
    id: 9.02,
    question: 'Network Segment',
    answer: 'One where all hosts attached to the segment can use local (layer 2) forwarding to communicate freely with each other; same broadcast domain',
  },
  {
    id: 9.03,
    question: 'Segregation',
    answer: 'Hosts in one segment are restricted in how they communicate with hosts in other segments',
  },
  {
    id: 9.04,
    question: 'Zone',
    answer: 'An area of the network where the security configuration is the same for all hosts within it',
  },
  {
    id: 9.05,
    question: 'Three Main Zones',
    answer: 'Intranet / Extranet / Internet/Guest',
  },
  {
    id: 9.06,
    question: 'Intranet',
    answer: 'Network of trusted hosts owned and controlled by the organization',
  },
  {
    id: 9.07,
    question: 'Extranet',
    answer: 'Network of semi-trusted hosts, typically business partners, suppliers, or customers; hosts must authenticate to join',
  },
  {
    id: 9.08,
    question: 'Internet/Guest',
    answer: 'Zone that permits anonymous access, or a mix of anon and authenticated access, for untrusted hosts over the Internet',
  },
  {
    id: 9.09,
    question: 'DMZ - Demilitarized Zone',
    answer: 'A segment isolated from the rest of a private network by one or more FWs that accepts connections from the Internet',
  },
  {
    id: 9.10,
    question: 'Bastion Host',
    answer: 'Hosts within the DMZ that are not full trusted by hosts in the internal network',
  },
  {
    id: 9.11,
    question: 'Screened Subnet',
    answer: 'DMZ topology that uses two firewalls placed on either side of the DMZ; one restricts external traffic, one restricts internal traffic. AKA Choke firewall',
  },
  {
    id: 9.12,
    question: 'Triple-homed Firewall',
    answer: 'DMZ topology established using one router/firewall appliance with three network interfaces; one for public, one for the DMZ, and one for internal traffic',
  },
  {
    id: 9.13,
    question: 'Screened Host',
    answer: 'Budget version of a DMZ; uses a dual-homed proxy/gateway server to act as a screened host so that internal hosts still arent directly exposed to external traffic',
  },
  {
    id: 9.14,
    question: 'What is something IPv4 has that IPv6 does not (security related)?',
    answer: 'IPv6 does not perform any kind of address translation; so theres no obscuring a host by translating their private IP to a public IP',
  },
  {
    id: 9.15,
    question: 'North-South Traffic',
    answer: 'Traffic that goes to and from a data center',
  },
  {
    id: 9.16,
    question: 'East-West Traffic',
    answer: 'Traffic going between servers within a data center',
  },
  {
    id: 9.17,
    question: 'Zero Trust',
    answer: 'Security design paradigm where any request must be authenticated before being allowed; based on idea that no perimeter security will be 100% effective 100% of the time',
  },
  {
    id: 9.18,
    question: 'On-Path Attack',
    answer: 'New name for MitM attacks; an attacker sits between two hosts and captures, monitors, and/or relays all communication between them',
  },
  {
    id: 9.19,
    question: 'MAC Cloning',
    answer: 'AKA MAC spoofing; changing the hardware address configured on an adapter or using an arbitrary MAC address',
  },
  {
    id: 9.20,
    question: 'ARP Poisoning',
    answer: 'Attack where an attacker redirects an IP address to the MAC address of a comp that isnt the legit recipient; poisons the ARP caches of hosts',
  },
  {
    id: 9.21,
    question: 'MAC Flooding',
    answer: 'An attacker overflows the switch address table with fake MAC addresses, forcing it to act like a hub, sending packets out all ports',
  },
  {
    id: 9.22,
    question: 'Portfast',
    answer: 'Command/setting used to prevent STP use on access ports',
  },
  {
    id: 9.23,
    question: 'BPDUs',
    answer: 'Used to communicate information about STP topology; should not appear on access ports',
  },
  {
    id: 9.24,
    question: 'BPDU Guard',
    answer: 'An STP feature that disables an access port if any BPDU is received there',
  },
  {
    id: 9.25,
    question: 'DHCP Snooping',
    answer: 'Only allows DHCP messages from trusted ports; inspects DHCP traffic to make sure a host isnt trying to spoof its MAC address',
  },
  {
    id: 9.26,
    question: 'Arp Inspection',
    answer: 'Prevents a host attached to an untrusted port from flooding the segment with gratuitous ARP replies',
  },
  {
    id: 9.27,
    question: 'PNAC - Port-based Network Access Control',
    answer: 'Means that switches will use a AAA server to authenticate the attached device before activating the port',
  },
  {
    id: 9.28,
    question: 'NAC - Network Access Control',
    answer: 'Allows admins to create health policies that devices must meet to be granted network access',
  },
  {
    id: 9.29,
    question: 'Posture Assessment',
    answer: 'The process by which host health checks are performed against a device to verify compliance with the health policy',
  },
  {
    id: 9.30,
    question: 'Persistent NAC Agent',
    answer: 'One that is installed as a software application on the client',
  },
  {
    id: 9.31,
    question: 'Non-persistent NAC Agent',
    answer: 'AKA dissolvable; one that is loaded into the memory during the posture assessment but isnt installed on the device',
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