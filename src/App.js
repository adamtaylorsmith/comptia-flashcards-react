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
    answer: 'Windows command that shows the IP configuration settings on a PC',
  },
  {
    id: 3.02,
    question: 'ifconfig',
    answer: 'Linux command that shows the IP configuration settings on a PC; being replaced by ip',
  },
  {
    id: 3.03,
    question: 'ip',
    answer: 'Linux command that shows the IP configuration settings on a PC; replacing ifconfig',
  },
  {
    id: 3.04,
    question: 'ping',
    answer: 'Probes a host on a particular IP address or host name using ICMP, shows if a host is up and reachable or not',
  },
  {
    id: 3.05,
    question: 'arp',
    answer: 'Displayed the local machines ARP cache',
  },
  {
    id: 3.06,
    question: 'route',
    answer: 'Command-line tool to view and configure a host's local routing table',
  },
  {
    id: 3.07,
    question: 'tracert',
    answer: 'Windows command that uses ICMP probes to report the round trip time for hops between the local host and a remote host',
  },
  {
    id: 3.08,
    question: 'traceroute',
    answer: 'Linux command that uses UDP probes to perform route discovery between the local host and a remote host',
  },
  {
    id: 3.09,
    question: 'pathping',
    answer: 'Windows tool that provides statistics for latency and packet loss along a route',
  },
  {
    id: 3.10,
    question: 'mtr',
    answer: 'Linux tool that provides statistics for latency and packet loss along a route',
  },
  {
    id: 3.11,
    question: 'nmap',
    answer: 'Open source IP scanner that can perform remote host discovery, service discovery, OS discovery, port scans',
  },
  {
    id: 3.12,
    question: 'netstat',
    answer: 'Shows the state of TCP/UDP ports on a local machine',
  },
  {
    id: 3.13,
    question: 'nslookup',
    answer: 'Windows tool to query name records for a given domain using a particular DNS resolver',
  },
  {
    id: 3.14,
    question: 'dig',
    answer: 'Linux tool to query name records for a given domain using a particular DNS resolver',
  },
  {
    id: 3.15,
    question: 'theHarvester',
    answer: 'A tool for gathering OSINT for a particular domain or company; scans public data sources to gather emails, names, subdomains, IPs, URLs, etc',
  },
  {
    id: 3.16,
    question: 'curl',
    answer: 'Command-line tool for performing data transfers over many types of protocols; can be used to submit HTTP GET and POST requests for web app vulnerability testing',
  },
  {
    id: 3.17,
    question: 'Nessus',
    answer: 'One of the best-known commercial vulnerability scanners',
  },
  {
    id: 3.18,
    question: 'Packet Analysis',
    answer: 'Deep-down, frame-by-frame scrutiny of captured frames',
  },
  {
    id: 3.19,
    question: 'Protocol Analysis',
    answer: 'Using statistical tools to analyze a sequence of packets',
  },
  {
    id: 3.20,
    question: 'tcpdump',
    answer: 'Linux command-line tool for packet capturing',
  },
  {
    id: 3.21,
    question: 'Wireshark',
    answer: 'Open-source graphical packet capture and analysis utility',
  },
  {
    id: 3.22,
    question: 'hping',
    answer: 'Open-source spoofing tool that can craft packets to exploit FWs and IDSs; can do port detection, traceroutes, and flood-based DoS attacks',
  },
  {
    id: 3.23,
    question: 'tcpreplay',
    answer: 'Takes previously captured traffic saved to a .pcap file and replays it through a network interface',
  },
  {
    id: 3.24,
    question: 'Exploitation Framework',
    answer: 'Framework containing a database of exploit code, each targeting a particular CVE; can be used to actually exploit discovered vulnerabilities. Ex: Metasploit',
  },
  {
    id: 3.25,
    question: 'netcat (nc)',
    answer: 'Command-line tool that can be used for port scanning, fingerprinting, or can be configured as a backdoor on a remote machine',
  },
  {
    id: 3.26,
    question: 'Zero Day',
    answer: 'A vulnerability that is eexploited before the developer knows about it or can release a patch',
  },
  {
    id: 3.27,
    question: 'Vendor Management',
    answer: 'Process for selecting supplier companies and evaluating the inherent risks in relying on a third-party product or service',
  },
  {
    id: 3.28,
    question: 'Vulnerability Assessment',
    answer: 'Evaluation of a systems security and ability to meet compliance requirements based on the configuration of the system',
  },
  {
    id: 3.29,
    question: 'Vulnerability Scanner',
    answer: 'Designed to test network hosts; examines an organizations systems, apps, and devices and compares the results to configuration templates + lists of known vulnerabilities. PASSIVE',
  },
  {
    id: 3.30,
    question: 'SCAP - Security Content Application Protocol',
    answer: 'Protocol that allows vulnerability scanners to obtain information and updates from feeds and determine whether or not a host meets a configuration baseline. Uses OVAL and XCCDF to do this',
  },
  {
    id: 3.31,
    question: 'OVAL - Open Vulnerability and Assessment Language',
    answer: 'An XML schema used to describe system security states and for querying vulnerability reports. Used alongside XCCDF by SCAP',
  },
  {
    id: 3.32,
    question: 'XCCDF - Extensible Configuration Checklist Description Format',
    answer: 'An XML schema for developing and auditing best-practice configuration checklists and rules. Used alongside OVAL by SCAP',
  },
  {
    id: 3.33,
    question: 'CVSS - Common Vulnerability Scoring System',
    answer: 'Metrics that generate a score from 0 to 10 for a CVE, based on characteristics of the vulnerability',
  },
  {
    id: 3.34,
    question: 'Non-intrusive Scanning',
    answer: 'Analyzes indirect evidence, like the kinds of traffic generated by a devices. Has the least impact on the network and hosts, but less likely to comprehensively identify vulnerabilities',
  },
  {
    id: 3.35,
    question: 'Active Scanning',
    answer: 'Probing a devices configuration using some sort of network connection with the target. Consumes more bandwidth but can get more comprehensive info',
  },
  {
    id: 3.36,
    question: 'False Positive',
    answer: 'When a security appliance like an IDS flags something as a vulnerability/alert/etc but it actually is not one',
  },
  {
    id: 3.37,
    question: 'False Negative',
    answer: 'When a security appliance like an IDS does not flag something as malicious/an alert/etc but it should have',
  },
  {
    id: 3.38,
    question: 'Threat Hunting',
    answer: 'Assessment technique that utilizes insights from threat intelligence to proactively discover whether a network or system has evidence of TTPs already present',
  },
  {
    id: 3.39,
    question: 'Maneuver',
    answer: 'When an attacker expects/anticipates action being planned or taken against them, and thus attempts to distract the team or get around them in some other way',
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
    answer: 'Hacking the human; getting information from someone or getting them to perform some action for the attacker via persuasion',
  },
  {
    id: 4.02,
    question: 'Four Social Engineering Principles',
    answer: 'Familiarity/Liking, Consensus/Social Proof, Authority/Intimidation, Scarcity/Urgency',
  },
  {
    id: 4.03,
    question: 'Impersonation',
    answer: 'Pretending to be someone else; a basic social engineering technique that can be combined with one or more social engineering principles',
  },
  {
    id: 4.04,
    question: 'Dumpster Diving',
    answer: 'Going through an individuals or organizations trash to try and find useful documents',
  },
  {
    id: 4.05,
    question: 'Tailgating',
    answer: 'A means of entering a secure area without authorization by following close behind the person that has been allowed in',
  },
  {
    id: 4.06,
    question: 'Piggybacking',
    answer: 'A means of entering a secure area with an employees permission; typically by impersonating a staff member or delivery person, etc',
  },
  {
    id: 4.07,
    question: 'Identity Fraud',
    answer: 'Specific type of impersonation where the attacker uses specific details of someones identity',
  },
  {
    id: 4.08,
    question: 'Shoulder Surfing',
    answer: 'Threat actors learning a password or PIN or other secure info by watching the user type it in. Could be literally over shoulder or via CCTV, binoculars, etc',
  },
  {
    id: 4.09,
    question: 'Lunchtime Attack',
    answer: 'When a user leaves their workstation unattended while still logged on, and an attacker physically gains access to the system during that window of time',
  },
  {
    id: 4.10,
    question: 'Phishing',
    answer: 'Combo of social engineering and spoofing; persuades or tricks target into interacting with a malicious resource or providing sensitive info. Typically using email',
  },
  {
    id: 4.11,
    question: 'Spear Phishing',
    answer: 'Phishing scam where the attacker has some information to target an individual specifically, making them more likely to be fooled',
  },
  {
    id: 4.12,
    question: 'Whaling',
    answer: 'A type of spear phishing attack that targets specifically upper levels of management in an organization (CEOs, CIOs, etc)',
  },
  {
    id: 4.13,
    question: 'Vishing',
    answer: 'A phishing attack conducted through a voice channel; telephone or VoIP, for example',
  },
  {
    id: 4.14,
    question: 'SMiShing',
    answer: 'Phishing attacks committed using text messages (SMS)',
  },
  {
    id: 4.15,
    question: 'Spim',
    answer: 'Spam that is delivered through instant messaging',
  },
  {
    id: 4.16,
    question: 'Spam',
    answer: 'Unsolicited email',
  },
  {
    id: 4.17,
    question: 'Hoax',
    answer: 'Common social engineering technique, often combined with phishing. Email alert or pop-up will claim to has identified a problem, tell user to download its product to fix it, etc',
  },
  {
    id: 4.18,
    question: 'Prepending',
    answer: 'Adding text that appears to have been generated by the mail system. "RE:" or "MAILSAFE: PASSED"',
  },
  {
    id: 4.19,
    question: 'Pharming',
    answer: 'A passive way of redirecting users from a legitimate website to a malicious one. Corrupts the name resolution process',
  },
  {
    id: 4.20,
    question: 'Typosquatting',
    answer: 'Registering domain names very similar to those of legit sites in hopes of receiving traffic from users who mistakenly enter an incorrect URL in their browsers',
  },
  {
    id: 4.21,
    question: 'Watering Hole',
    answer: 'Relies on a group of targets all using the same unsecure third-party website. The attacker "poisons the watering hole", aka corrupts the third-party website, and all targets that visit the page get infected',
  },
  {
    id: 4.22,
    question: 'Credential Harvesting',
    answer: 'A campaign specifically designed to steal account credentials, often to sell the database of information',
  },
  {
    id: 4.23,
    question: 'Influence Campaign',
    answer: 'A major problem launched by highly capable adversaries like a nation-state or terrorist group; the goal is to shift public opinion on a topic through spreading misinformation, making fake accounts to push the fake info, etc',
  },
  {
    id: 4.24,
    question: 'Trojan',
    answer: 'Malware concealed within a software installer package that appears to be legitimate. Designed to operate secretly, but can be found with common tools',
  },
  {
    id: 4.25,
    question: 'PUP - Potentially Unwanted Programs',
    answer: 'Software installed alongside a package, maybe bundled with a new computer system. Not necessarily malicious, but unwanted. Can be called grayware',
  },
  {
    id: 4.26,
    question: 'Virus',
    answer: 'Malware designed to replicate and spread from computer to computer, typically by infecting executable apps or code',
  },
  {
    id: 4.27,
    question: 'Non-resident / File Infector Virus',
    answer: 'Virus contained within a host executable file and that runs with the host process',
  },
  {
    id: 4.28,
    question: 'Memory Resident Virus',
    answer: 'A virus that creates a new process for itself in memory, which remains in memory even if the host process is terminated',
  },
  {
    id: 4.29,
    question: 'Boot Sector Virus',
    answer: 'Virus code written to the disk boot sector or partition table of a disk or USB media, executes as memory resident process with the OS starts or the media is connected to a computer',
  },
  {
    id: 4.30,
    question: 'Script and Macro Viruses',
    answer: 'Viruses that use the programming features in local scripting engines; PowerShell, WMI, JavaScript, PDFs with JavaScript enabled, etc',
  },
  {
    id: 4.31,
    question: 'Multipartite Virus',
    answer: 'A virus that uses multiple vectors of infection',
  },
  {
    id: 4.32,
    question: 'Polymorphic Virus',
    answer: 'A virus that can dynamically change or obfuscate its code to evade detection',
  },
  {
    id: 4.33,
    question: 'Worm',
    answer: 'Memory-resident malware that can run without user intervention and self-replicate over network resources',
  },
  {
    id: 4.34,
    question: 'Shellcode',
    answer: 'Code executed by a target program due to an exploit and used to open a remote shell so that an attacker can use that shell to further interact with the victims system',
  },
  {
    id: 4.35,
    question: 'Cookies',
    answer: 'Plain text files that can be used to record pages visited, search queries, browser metadata, IP address, etc',
  },
  {
    id: 4.36,
    question: 'Adware',
    answer: 'Class of PUP that shows lots of ads, may be installed as a program or browser extension/plug-in, can change your default search provider, open a sponser page at startup, add bookmarks, etc',
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
    question: 'Agentless NAC Assessments',
    answer: 'Useful when NAC solution needs to support a wide range of devices, but returns less detailed information',
  },
  {
    id: 9.33,
    question: 'Route Injection',
    answer: 'Pray on weak (security-wise) routing protocols; can redirect traffic, send traffic to a black hole, or make traffic loop continuously',
  },
  {
    id: 9.34,
    question: 'Source Routing',
    answer: 'Technique in which the originator of a packet can attempt to partially or completely control the path through the network to the destination; can be used to try and avoid FWs',
  },
  {
    id: 9.35,
    question: 'CCI - Co-Channel Interference',
    answer: 'When two WAPs close to each other use the same channel, they compete for bandwidth; as signals collide they need to be retransmitted',
  },
  {
    id: 9.36,
    question: 'ACI - Adjacent Channel Interference',
    answer: 'When channels chosen for WAPs arent spaced far enough apart, interference can cause many errors and bandwidth loss',
  },
  {
    id: 9.37,
    question: 'Site Survey',
    answer: 'An in-depth examination and analysis of a wireless LAN site; used to measure signal strength and channel usage throughout the intended area',
  },
  {
    id: 9.38,
    question: 'Heat Map',
    answer: 'Graphical representation of how strong or weak wireless signal is in a certain area',
  },
  {
    id: 9.39,
    question: 'Wireless Controllers',
    answer: 'Give us a centralized way of managing and monitoring multiple WAPs',
  },
  {
    id: 9.40,
    question: 'Fat WAP',
    answer: 'One that has enough processing logic to function autonomously without a wireless controller',
  },
  {
    id: 9.41,
    question: 'Thin WAP',
    answer: 'One that requires a wireless controller in order to function',
  },
  {
    id: 9.42,
    question: 'What cipher does WEP use?',
    answer: 'RC4',
  },
  {
    id: 9.43,
    question: 'What cipher and security does WPA use?',
    answer: 'RC4 + TKIP',
  },
  {
    id: 9.44,
    question: 'What cipher and security does WPA2 use?',
    answer: 'AES + CCMP',
  },
  {
    id: 9.45,
    question: 'What cipher and security does WPA3 use?',
    answer: 'AES + GCMP',
  },
  {
    id: 9.46,
    question: 'SAE - Simultaneous Authentication of Equals',
    answer: 'Feature of WPA3; replaces WPA 4-way handshake with the Dragonfly handshake based on D-H key agreement',
  },
  {
    id: 9.47,
    question: 'Enhanced Open',
    answer: 'Feature of WPA3; enables encryption for the open authentication method; intended to replace WPS',
  },
  {
    id: 9.48,
    question: 'PSK - Pre-Shared Key',
    answer: 'A shared secret that has been shared between parties and is used to establish a secure channel',
  },
  {
    id: 9.49,
    question: 'WPS - Wi-Fi Protected Setup',
    answer: 'A standard included on many WAPs and clients to make secure connections easier to configure; very weak to brute force attacks',
  },
  {
    id: 9.50,
    question: 'EAP-TLS',
    answer: 'One of the strongest types of authentication; creates TLS tunnel and uses certificates for both client and server - mutual authentication',
  },
  {
    id: 9.51,
    question: 'PEAP',
    answer: 'Creates an encrypted tunnel but only requires a server-side certificate; can be set up for mutual authentication though; MUST use MS-CHAPv2 or EAP-GTC as "inner" auth mechanism',
  },
  {
    id: 9.52,
    question: 'EAP-TTLS',
    answer: 'Basically the same as PEAP except that it can use any inner authentication mechanism it wants',
  },
  {
    id: 9.53,
    question: 'EAP-FAST',
    answer: 'Similar to PEAP, but uses a Protected Access Credential (PAC) generated for each user from the servers master key instead of certificates',
  },
  {
    id: 9.54,
    question: 'RADIUS Federation',
    answer: 'Multiple organizations allow access to one anothers users by joining their RADIUS servers into a hierarchy or mesh',
  },
  {
    id: 9.55,
    question: 'Rogue Access Point',
    answer: 'An unauthorized access point on a network; can be accidental or malicious',
  },
  {
    id: 9.56,
    question: 'Evil Twin',
    answer: 'A rogue AP set up by an attacker with the same or similar SSID of a legitimate AP',
  },
  {
    id: 9.57,
    question: 'Deauthentication Attack',
    answer: 'Attacker sends spoofed frames to cause a client to fully deauthenticate them from the WAP',
  },
  {
    id: 9.58,
    question: 'Disassociation Attack',
    answer: 'Attacher sends spoofed disassociation packets; victim wont be fully deauthenticated from the WAP, but it wont be able to communicate either unless it reassociates',
  },
  {
    id: 9.59,
    question: 'Jamming',
    answer: 'A wireless attack that aims to purposefully interfere with a WAP by using devices that emit radio waves',
  },
  {
    id: 9.60,
    question: 'SYN Flood Attack',
    answer: 'Type of DoS attack in which the attacker sends multiple SYN messages initializing TCP connections with a target server, then never finishes with the final ACK',
  },
  {
    id: 9.61,
    question: 'What two protocols are often used in amplification attacks?',
    answer: 'DNS and NTP',
  },
  {
    id: 9.62,
    question: 'OT - Operational Technology Network',
    answer: 'Network established between embedded system devices and their controllers; valves, motors, gauges, sensors, etc',
  },
  {
    id: 9.63,
    question: 'Load Balancer',
    answer: 'A dedicated network device that can direct client requests to different servers based on a variety of factors; work at layer 4 or 7',
  },
  {
    id: 9.64,
    question: 'Round Robin',
    answer: 'Simplest load balancing scheduling algorithm; just means picking the next node in line',
  },
  {
    id: 9.65,
    question: 'Session Affinity',
    answer: 'Offered by layer 4 load balancers; when a client establishes a session, it becomes "stuck" to the node that first accepted the request',
  },
  {
    id: 9.66,
    question: 'Session Persistence',
    answer: 'Offered by layer 7 load balancers; keeps client connected to a session, typically by setting a cookie on the node or injected by the load balancer',
  },
  {
    id: 9.67,
    question: 'Is loadbalancing stateful or stateless?',
    answer: 'Stateless',
  },
  {
    id: 9.68,
    question: 'Is loadbalancing stateful or stateless?',
    answer: 'Stateful',
  },
  {
    id: 9.69,
    question: 'Clustering',
    answer: 'Allows multiple redundant nodes to share data with one another seemlessly',
  },
  {
    id: 9.70,
    question: 'Active / Active Cluster',
    answer: 'Uses all nodes in the cluster; ex: 6 out of 6 - if one fails, the work gets shoved on the remaining 5, so it degrades performance',
  },
  {
    id: 9.71,
    question: 'Active / Passive Cluster',
    answer: 'Keeps at least one node on the side, not running, in case a running server fails - the passive one will step in',
  },
  {
    id: 9.72,
    question: 'QoS',
    answer: 'Framework for prioritizing traffic based on its characteristics; MPLS is an example of a QoS protocol',
  },
]
const ten = [
  {
    id: 10.00,
    question: 'LESSON 10 - Implementing Network Security Appliances',
  },
  {
    id: 10.01,
    question: 'Packet Filtering Firewall',
    answer: 'Original, most basic FW; stateless. All modern FWs still perform this function while being stateful. Inspects headers of IP packets; rules can be based on the info found there - IP, protocol, port',
  },
  {
    id: 10.02,
    question: 'Stateless',
    answer: 'Doesnt preserve any information about network sessions; each packet is analyzed independently',
  },
  {
    id: 10.03,
    question: 'Stateful Inspection FW',
    answer: 'Track information about sessions established between two hosts; FW will check incoming packet to see if it belongs to an existing connection - if it does, it is let through; if not, it is scanned first',
  },
  {
    id: 10.04,
    question: 'State Table',
    answer: 'Where stateful firewalls store session data',
  },
  {
    id: 10.05,
    question: 'Stateful Inspection @ Layer 4',
    answer: 'Examines the TCP three-way handshake to distinguish new from establshed connections',
  },
  {
    id: 10.06,
    question: 'Stateful Inspection @ Layer 7',
    answer: 'Inspects the contents of packets at the application layer; verifies if the application protocol matches the port; Application Aware FW',
  },
  {
    id: 10.07,
    question: 'Flood Guard',
    answer: 'Blocks flooding-type DoS/DDoS attacks, frequently part of a stateful inspection FW or IPS',
  },
  {
    id: 10.08,
    question: 'iptables',
    answer: 'Linux command utility that lets admins edit the Linux kernal firewall rules',
  },
  {
    id: 10.09,
    question: 'Appliance Firewall',
    answer: 'A stand-alone hardware firewall deployed to monitor traffic passing into and out of a network zone; can be deployed in two ways: routed and bridged',
  },
  {
    id: 10.10,
    question: 'Routed Deployment',
    answer: 'The appliance firewall performs forwarding between subnets; each interface on the FW connects to a different subnet and represents a different security zone',
  },
  {
    id: 10.11,
    question: 'Bridged Deployment',
    answer: 'The appliance firewall inspects traffic passing between two nodes, like a router and switch - aka transparent mode',
  },
  {
    id: 10.12,
    question: 'Router Firewall',
    answer: 'A firewall/filtering functionality built in as part of the router firmware; SOHOs have these often',
  },
  {
    id: 10.13,
    question: 'Host-Based Firewall',
    answer: 'A software firewall that only protects the host on which its installed',
  },
  {
    id: 10.14,
    question: 'Application Firewall',
    answer: 'A firewall that can control the traffic associated with specific applications; works all the way up to the Application Layer of the OSI model',
  },
  {
    id: 10.15,
    question: 'NOS - Network Operating System Firewell',
    answer: 'A software firewall running under a network server OS',
  },
  {
    id: 10.16,
    question: 'Proxy Server',
    answer: 'A server that mediates the communications between a client and another server; can filter and modify comms, as well as provide caching services to improve performance',
  },
  {
    id: 10.17,
    question: 'Forward Proxy Server',
    answer: 'Handles protocol-specific requests from inside a private network out to the Internet (outbound traffic)',
  },
  {
    id: 10.18,
    question: 'Reverse Proxy Server',
    answer: 'Handles protocol-specific requests from out on the Internet to inside a private network (inbound traffic)',
  },
  {
    id: 10.19,
    question: 'Caching Engine',
    answer: 'An application or service that stores requested data in order to provide faster responses to future requests for the data',
  },
  {
    id: 10.20,
    question: 'Non-Transparent Proxy',
    answer: 'The client must be configured with the proxy server address and port number to use it',
  },
  {
    id: 10.21,
    question: 'Transparent Proxy',
    answer: 'Intercepts client traffic without the client having to be reconfigured; must be implemented on a switch or router or other inline network appliance',
  },
  {
    id: 10.22,
    question: 'Implicit Deny',
    answer: 'An access control principle that maintains that if a condition is not explicitly met, it is to be rejected',
  },
  {
    id: 10.23,
    question: 'NAT - Network Address Translation',
    answer: 'Translates the private IP address to a public address for routing over the Internet',
  },
  {
    id: 10.24,
    question: 'Private Class A Addresses',
    answer: '10.0.0.0 - 10.255.255.255',
  },
  {
    id: 10.25,
    question: 'Private Class B Addresses',
    answer: '172.16.0.0 - 172.31.255.255',
  },
  {
    id: 10.26,
    question: 'Private Class C Addresses',
    answer: '192.168.0.0 - 192.168.255.255',
  },
  {
    id: 10.27,
    question: 'Static and Dynamic Source NAT',
    answer: 'Perform 1:1 mappings between private network address and public address; can be assigned statically or dynamically',
  },
  {
    id: 10.28,
    question: 'PAT - Port Address Translation',
    answer: 'Provides a means for multiple private IP addresses to be mapped to a single public address; aka Overloaded NAT',
  },
  {
    id: 10.29,
    question: 'Port Forwarding',
    answer: 'Uses the routers public address to publish a service, but forwards incoming requests to a different IP/port; aka Destination NAT',
  },
  {
    id: 10.30,
    question: 'Hypervisor-Based Virtual FW',
    answer: 'Filtering functionaility is built into the hypervisor, you can use the web app to write ACLs for traffic arriving or leaving a virtual host or virtual network',
  },
  {
    id: 10.31,
    question: 'Virtual Appliance FW',
    answer: 'Refers to deploying a vendor firewall appliance instance using virtualization in the same way you might deploy a Windows or Linux guest OS',
  },
  {
    id: 10.32,
    question: 'Multiple Context Virtual FW',
    answer: 'Refers to multiple virtual FW instances running on a single hardware firewall appliance; each context has a separate interface and can perform a distinct filtering role',
  },
  {
    id: 10.33,
    question: 'IDS - Intrusion Detection System',
    answer: 'A means of using software tools to provide real-time analysis of network traffic or system and app logs; PASSIVE',
  },
  {
    id: 10.34,
    question: 'IPS - Intrusion Prevention System',
    answer: 'Essentially the same as an IDS but is ACTIVE; can apply FW filters, block attackers, throttle bandwidth, run scripts, etc',
  },
  {
    id: 10.35,
    question: 'SPAN / Mirror Port',
    answer: 'The sensor is attached to a specially configured port on the switch that is receiving copies of frames from other port(s); frames with errors wont be mirrored',
  },
  {
    id: 10.36,
    question: 'TAP - Passive Test Access Port',
    answer: 'A box with ports for incoming and outgoing network cabling and an inductor or optical splitter that physically copies the signal from the cabling to a monitor port',
  },
  {
    id: 10.37,
    question: 'TAP - Active Test Acces Port',
    answer: 'A powered device that performs signal generation; good when were copying Gigabit signals over copper, or a fiber type that is negatively impacted by optical splitters; important to connect to a UPS',
  },
  {
    id: 10.38,
    question: 'Signature-Based Detection',
    answer: 'Aka pattern matching; the engine is loaded with a database of attack patterns or signaures - if traffic matches a pattern, then the engine generates an incident',
  },
  {
    id: 10.39,
    question: 'Behavioral-Based Detection',
    answer: 'The engine is trained to recognize baseline "normal" traffic or events; anything that deviates from this baseline generates an incident',
  },
  {
    id: 10.40,
    question: 'Heuristics',
    answer: '',
  },
  {
    id: 10.41,
    question: 'False Positive',
    answer: 'Legitimate behavior wrongly generates an alert',
  },
  {
    id: 10.42,
    question: 'False Negative',
    answer: 'Malicious activity does not generate an alert',
  },
  {
    id: 10.43,
    question: 'Anomoly-Based Detection',
    answer: 'Often interchangeable with behavior-based, but can specifically refer to looking for irregularities in the use of protocols',
  },
  {
    id: 10.44,
    question: 'NGFW - Next-Generation Firewall',
    answer: 'Powerful modern FW that combines application-aware filtering wth user account-based filtering and the ability to act as an IPS',
  },
  {
    id: 10.45,
    question: 'UTM - Unified Threat Management',
    answer: 'Comprehensive security management tool that combines multiple security tools, including firewalls, VPNs, intrusion detection systems, and web content filtering and anti-spam software',
  },
  {
    id: 10.46,
    question: 'Content Filter',
    answer: 'Applies a number of user-forcused filtering rules, like blocking URLs that appear on content blacklists, or time-based restrictions',
  },
  {
    id: 10.47,
    question: 'SWG - Secure Web Gateway',
    answer: 'Performs content filtering, often DLP, CASB functionality',
  },
  {
    id: 10.48,
    question: 'WAF - Web Application Firewall',
    answer: 'Designed specifically to protect software running on web servers and their backend databases from code injection and DoS attacks',
  },
  {
    id: 10.49,
    question: 'Network Monitor',
    answer: 'Collects data about network appliances like switches, APs, routers, FWs, and servers - used to monitor CPU status, memory, disk capacity, temperature, error stats, etc',
  },
  {
    id: 10.50,
    question: 'SIEM - Security Information and Event Management',
    answer: 'Software designed to assist with managing security data inputs and provide reporting and alerting; core functions are aggregation and correlation',
  },
  {
    id: 10.51,
    question: 'SOAR - Security Orchestraction, Automation, and Response',
    answer: 'The basis of this is to scan the organizations store of security and threat intelligence, analyze it using machine/deep learning techniques, and then use that data to automate and provide data enrichment for the workflows that drive incident response and threat hunting',
  },
  {
    id: 10.52,
    question: 'cat',
    answer: 'A Linux command used to display (or concatenate) the entire contents of one or more files to the screen',
  },
  {
    id: 10.53,
    question: 'head / tail',
    answer: 'Linux command that displays the first/last set of lines of a text file; by default, the first/last 10 lines',
  },
  {
    id: 10.54,
    question: 'logger',
    answer: 'A command that can be used to write system log events to the local system log or a remote syslog server',
  },
  {
    id: 10.55,
    question: 'grep',
    answer: 'A Linux command that invokes simple string matching or regex syntax to search text files for specific strings',
  },
]
const eleven = [
  {
    id: 11.00,
    question: 'LESSON 11 - Implementing Secure Network Protocols',
  },
  {
    id: 11.01,
    question: 'DHCP Starvation',
    answer: 'An attack that uses spoofed MACs to request a bunch of IP address configurations from the DHCP, eventually completely exhausting its scope',
  },
  {
    id: 11.02,
    question: 'Domain Hijacking',
    answer: 'An attack where the attacker steals a domain name by altering its registration info and then transferring the domain name to another entity',
  },
  {
    id: 11.03,
    question: 'URL Redirection',
    answer: 'Refers to the use of HTTP redirects to open a page other than the one the user requested; not always malicious, can be done to guide users to login pages',
  },
  {
    id: 11.04,
    question: 'DNS Poisoning',
    answer: 'An attack that compromises the process by which clients query name servers to locate the IP address for an FQDN; several methods to pull it off',
  },
  {
    id: 11.05,
    question: 'DNS Client Cache Poisoning',
    answer: 'An attack where the attacker places a false name:IP address mapping in the local HOSTS file',
  },
  {
    id: 11.06,
    question: 'DNS Server Cache Poisoning',
    answer: 'Aims to corrupt the records held by the DNS server itself; can be done by posing as an authoritative server and answering queries with malicious information',
  },
  {
    id: 11.07,
    question: 'DNSSEC - Domain Name System Security Extensions',
    answer: 'Uses digital signatures to provide security for DNS communications and helps to minimise the likelihood to spoofing and poisoning attacks',
  },
  {
    id: 11.08,
    question: 'LDAP Authentication Options',
    answer: '- No auth / Simple bind: payload passed in cleartext / SASL: Client and server negotiate use of supported auth mechanism / LDAPS: uses TLS and digital certs',
  },
  {
    id: 11.09,
    question: 'Stratum 1 Server',
    answer: 'Top-level NTP server that obtains the Coordinated Universal Time (UTC) from a highly accurate clock source, like an atomic clock',
  },
  {
    id: 11.10,
    question: 'Stratum 2 Server',
    answer: 'Lower-level NTP server that gets it time from the Stratum 1s and must account for the delay in propogating the signal',
  },
  {
    id: 11.11,
    question: 'What SNMP version supports encryption and strong authentication?',
    answer: 'SNMPv3',
  },
  {
    id: 11.12,
    question: 'HTTP - Hypertext Transfer Protocol',
    answer: 'Protocol that defines how messages are formatted and transmitted over the WWW; enables clients to request resources from an HTTP server',
  },
  {
    id: 11.13,
    question: 'HTTP POST Mechanism',
    answer: 'Allows a user to submit data from the client to the server',
  },
  {
    id: 11.14,
    question: 'Is HTTP Stateful or Stateless?',
    answer: 'Stateless',
  },
  {
    id: 11.15,
    question: 'TLS - Transport Layer Security',
    answer: 'A security protocol that uses certificates for authentication and encryption to protect web communication',
  },
  {
    id: 11.16,
    question: 'What is special about TLS 1.3?',
    answer: 'It removes the ability to perform downgrade attacks by preventing the use of unsecure features and algorithms',
  },
  {
    id: 11.17,
    question: 'ECDHE-RSA-AES128-GCM-SHA256 is an example of what?',
    answer: 'Cipher suite',
  },
  {
    id: 11.18,
    question: 'API - Application Programming Interface',
    answer: '',
  },
  {
    id: 11.19,
    question: 'SFTP',
    answer: 'SSH FTP, encrypts authentication and data transfers between client and server using port 22',
  },
  {
    id: 11.20,
    question: 'FTPES - Explicit TLS',
    answer: 'Uses the AUTH TLS command to upgrade an existing unsecure connection over port 21 to a secure one; more common',
  },
  {
    id: 11.21,
    question: 'FTPS - Implicit TLS',
    answer: 'Negotiates a TLS tunnel before the exchange of any FTP commands over port 990; not as common',
  },
  {
    id: 11.22,
    question: 'STARTTLS',
    answer: 'Explicit TLS for SMTP; upgrades existing unsecure SMTP connection to a secure one; more common',
  },
  {
    id: 11.23,
    question: 'SMTPS',
    answer: 'Implicit TLS for SMTP, establishes a secure connection before any SMTP commands are exchanged; less common',
  },
  {
    id: 11.24,
    question: 'POP3S Port',
    answer: '995',
  },
  {
    id: 11.25,
    question: 'Imaps Port',
    answer: '993',
  },
  {
    id: 11.26,
    question: 'S/MIME',
    answer: 'Provides authentication and confidentiality on a per-message basis for email; helps prevent email account compromise and email spoofing',
  },
  {
    id: 11.27,
    question: 'SIP',
    answer: 'Session Initiation Protocol; one of the most widely used session control protocols, seen widely with VoIP and real time data',
  },
  {
    id: 11.28,
    question: 'RTP',
    answer: 'Real-time Transport Protocol; while SIP provides session management, RTP handles the actual delivery of real-time data',
  },
  {
    id: 11.29,
    question: 'Remote Access VPN Model',
    answer: 'Aka telecommuter model; allows home-workers and employees working in the field to connect to the corporate network',
  },
  {
    id: 11.30,
    question: 'Remote Access VPN Model',
    answer: 'Aka telecommuter model; allows home-workers and employees working in the field to connect to the corporate network',
  },
  {
    id: 11.31,
    question: 'Site-to-Site VPN Model',
    answer: 'Connects two or more private networks',
  },
  {
    id: 11.32,
    question: 'PPTP - Point-to-Point Tunneling Protocol',
    answer: 'A legacy protocol that, while sometimes still seen, is deprecated',
  },
  {
    id: 11.33,
    question: 'TLS VPN',
    answer: 'Requires a remote access server listening on port 443; client connects using TLS which creates an encrypted tunnel for the user to submit credentials',
  },
  {
    id: 11.34,
    question: 'OpenVPN',
    answer: 'An open source TLS VPN; can work in TAP mode (layer 2) or TUN mode (layer 3)',
  },
  {
    id: 11.35,
    question: 'IPSec',
    answer: 'A set of open standards that are used to secure data through authentication and encryption as the data travels across the network/Internet; works at network layer',
  },
  {
    id: 11.36,
    question: 'AH - Authentication Header',
    answer: 'IPSec protocol that performs a cryptographic hash on the whole packet, including the IP header, plus a shared secret key - this HMAC in its header as an ICV',
  },
  {
    id: 11.37,
    question: 'ESP - Encapsulation Security Payload',
    answer: 'Provides confidentiality and/or authentication and integrity; encrypts the whole packet instead of just calculating an HMAC',
  },
  {
    id: 11.38,
    question: 'Transport Mode',
    answer: 'IPsec mode that encrypts only the payload and ESP trailer; so the IP header of the original packet is not encrypted for between hosts on a network',
  },
  {
    id: 11.39,
    question: 'Tunnel Mode',
    answer: 'IPSec mode used for communications between VPN gateways across an unsecure network; the whole IP packet is encrypted and encapsulated as a datagram with a new IP header',
  },
  {
    id: 11.40,
    question: 'IKE - Internet Key Exchange',
    answer: 'Handles authentication and key exchange for IPSec; using v1 requires the use of L2TP, using v2 you dont have to',
  },
  {
    id: 11.41,
    question: 'L2TP - Layer 2 Tunneling Protocol',
    answer: 'Used with IKEv1 in IPSec for remote access VPN functionality',
  },
  {
    id: 11.42,
    question: 'Always-On VPN',
    answer: 'Means the computer establishes the VPN whenever an Internet connection over a trusted network is detected',
  },
  {
    id: 11.43,
    question: 'Split Tunnel',
    answer: 'VPN connection where the client accesses the Internet directly using its "native" IP configuration and DNS servers',
  },
  {
    id: 11.44,
    question: 'Full Tunnel',
    answer: 'VPN connection where the Internet access is mediated by the corporate network, which will alter the clients IP adddress and DNS servers',
  },
  {
    id: 11.45,
    question: 'RDP - Remote Desktop Protocol',
    answer: 'Microsoft protocol to access a machine via a GUI interface, port 3389',
  },
  {
    id: 11.46,
    question: 'HTML5 VPN',
    answer: 'Clientless remote desktop gateway, allows you to use your browser to connect to a GUI interface of a machine',
  },
  {
    id: 11.47,
    question: 'Jump Server',
    answer: 'A hardened server that provides access to other hosts; particularly to provide administrative access to bastion hosts',
  },
  {
    id: 11.48,
    question: 'SSH - Secure Shell',
    answer: 'Principal means of obtaining secure remote access to a command-line terminal; main uses are remote administration and secure FTP',
  },
  {
    id: 11.49,
    question: 'Types of SSH Client Authentication',
    answer: 'Username/Password, Public key authentication, Kerberos',
  },
  {
    id: 11.50,
    question: 'OOB - Out-of-Band Management',
    answer: 'Accessing the administrative interface of a network appliance using a separate network from the usual data networ; this could use a separate VLAN or a different kind of link, such as a dial-up modem',
  },
]
const twelve = [
  {
    id: 12.00,
    question: 'LESSON 12 - Implementing Host Security Solutions',
  },
  {
    id: 12.01,
    question: 'RoT - Root of Trust',
    answer: 'A secure subsystem that is able to provide attestation; established by TPM',
  },
  {
    id: 12.02,
    question: 'TPM - Trusted Platform Module',
    answer: 'A cryptoprocessor that can be used to establish RoT and store encryption keys, hashed passwords, and other user ID information; either part of chipset or embedded in CPU',
  },
  {
    id: 12.03,
    question: 'Endorsement Key',
    answer: 'A hard-coded, unique, unchangeable asymmetric private key that each TPM comes with',
  },
  {
    id: 12.04,
    question: 'UEFI - Unified Extensible Firmware Interface',
    answer: 'An interface between firmware on the motherboard and the operating system that provides the code that allows the host to boot to an OS',
  },
  {
    id: 12.05,
    question: 'Secure Boot',
    answer: 'Designed to prevent a computer from loading a malicious OS; checks digital signatures of OS vendors and prevents boot loaders or kernals changed by malware from being used',
  },
  {
    id: 12.06,
    question: 'Measured Boot',
    answer: 'Uses platform configuration registers (PCRs) at each stage in the boot process to check whether hashes of key system state data have changed; wont usually prevent booting, but will record changes',
  },
  {
    id: 12.07,
    question: 'Boot Attestation',
    answer: 'The capability to transmit a boot log report signed by the TPM/ROT via a trusted process to a remote server',
  },
  {
    id: 12.08,
    question: 'FDE - Full Disk Encryption',
    answer: 'Uses the OS to perform cryptographic operations to encrypt the entire contents of the drive, including system files and folders',
  },
  {
    id: 12.09,
    question: 'SED - Self-Encrypting Drive',
    answer: 'Uses its own drive controller to perform cryptographic operations to encrypt the entire contents of the drive, including system files and folders',
  },
  {
    id: 12.10,
    question: 'EOL - End of Life Phase',
    answer: 'Phase in which support and availability of spares and updates for a product become limited',
  },
  {
    id: 12.11,
    question: 'EOSL - End of Service Life',
    answer: 'A system/product that is no longer supported by its developer or vendor',
  },
  {
    id: 12.12,
    question: 'MOU - Memorandum of Understanding',
    answer: 'A preliminary/exploratory agreement to express an intent to work together; relatively information, not a binding contract',
  },
  {
    id: 12.13,
    question: 'BPA - Business Partnership Agreement',
    answer: 'The most common IT model for partner agreements; used often by large IT companies to set up with resellers and solution providers',
  },
  {
    id: 12.14,
    question: 'NDA - Non-Disclosure Agreement',
    answer: 'Legal contract for protecting information assets; if someone breaks the NDA they may face legal consequences',
  },
  {
    id: 12.15,
    question: 'SLA - Service Level Agreement',
    answer: 'A contractural agreement setting out the detailed terms under which a service is provided',
  },
  {
    id: 12.16,
    question: 'MSA - Measurement Systems Analysis',
    answer: 'Evaluates the data collection and statistical methods used by a quality management process to ensure they are robust',
  },
  {
    id: 12.17,
    question: 'Hardening',
    answer: 'The process of putting something in a secure configuration',
  },
  {
    id: 12.18,
    question: 'EPP- Endpoint Protection Platform',
    answer: 'A single agent performing multiple security tasks on a host; malware/intrusion detection and prevention, host FW, web content filtering, file/message encryption, etc',
  },
  {
    id: 12.19,
    question: 'EDR - Endpoint Detection and Response',
    answer: 'A product whose aim isnt preventing initial execution, but to provide real-time and historical visibility into a compromise, contain malware within a single host, a faciliate remediate of the host to its original state',
  },
  {
    id: 12.20,
    question: 'Sysinternals',
    answer: 'Free technical resources and utilities to manage, diagnose, troubleshoot, and monitor a Microsoft Windows environment - sometimes referred to as "advanced malware tools" by CompTIA',
  },
  {
    id: 12.21,
    question: 'Sandboxing',
    answer: 'A technique that isolates an untrusted host or app in a segregated environment to conduct tests',
  },
  {
    id: 12.22,
    question: 'Embedded System',
    answer: 'A complete computer system that is designed to perform a specific, dedicated function',
  },
  {
    id: 12.23,
    question: 'PLC - Programmable Logic Controller',
    answer: 'The firmware that embedded systems are normally based on; also seen a lot in industrial control systems',
  },
  {
    id: 12.24,
    question: 'SoC - System on a Chip',
    answer: 'This is a single chip containing all the system architecture (CPU, processors, controllers, memory) typically linked via a motherboard for normal PCs; ex: Raspberry Pi',
  },
  {
    id: 12.25,
    question: 'FPGA - Field Programmable Gate Array',
    answer: 'A processor that can be programmed to perform a specific function by a customer, rather than at the time of manufacture',
  },
  {
    id: 12.26,
    question: 'RTOS - Real-Time Operating Systems',
    answer: 'A type of OS that prioritizes deterministic execution of operations to ensure consistent response for time-critical tasks',
  },
  {
    id: 12.27,
    question: 'NB-IoT - Narrowband-IoT',
    answer: 'This refers to a low-power version of the Long Term Evolution (LTE) or 4G cellular standard; the signal occupies less bandwidth than regular cellular; data rates are limited (20-100 kbps)',
  },
  {
    id: 12.28,
    question: 'LTE-M - LTE Machine Type Communication',
    answer: 'This is another low-power system (like NB-IoT), but supports higher bandwidth (up to about 1 Mbps)',
  },
  {
    id: 12.29,
    question: 'Z-Wave',
    answer: 'Wireless communications protocol used primarily for home automation; devices can to work as repeaters to extend the network but there is a limit of four "hops"; uses ~900 Mhz frequencies',
  },
  {
    id: 12.30,
    question: 'Zigbee',
    answer: 'Open source competitor technology to Z-Wave; uses 2.4 GHz band so more vuln to interference; more data bandwidth but less range',
  },
  {
    id: 12.31,
    question: 'ICS - Industrial Control Systems',
    answer: 'A network managing embedded devices (computer systems that are designed to perform a specific, dedicated function)',
  },
  {
    id: 12.32,
    question: 'HMI - Human Machine Interfaces',
    answer: 'Output and configuration of a PLC is performed by one or more of these',
  },
  {
    id: 12.33,
    question: 'Data Historian',
    answer: 'A database of all the information generated by the control loop',
  },
  {
    id: 12.34,
    question: 'SCADA - Supervisory Control and Data Acquisition',
    answer: '',
  },
  {
    id: 12.35,
    question: 'IoT - Internet of Things',
    answer: 'A global network of appliances and personal devices that have been equipped with sensors, software, and network connectivity',
  },
  {
    id: 12.36,
    question: 'BAS - Building Automation System',
    answer: 'Components and protocols that facilitate the centralized configuration and monitoring of mechanical and electrical systems within offices and data centers',
  },
  {
    id: 12.37,
    question: 'Smart Meter',
    answer: 'Provides continually updating reports of electricity, gas, or water usage to the supplier, reducing the need for manual inspections',
  },
  {
    id: 12.38,
    question: 'MFP - Multifunction Printers',
    answer: 'A device that serves as a printer, scanner, fax machine, all in one',
  },
  {
    id: 12.39,
    question: 'CAN - Controller Area Network Bus',
    answer: 'A serial network designed to allow communications between embedded programmable logic controllers',
  },
]
const thirteen = [
  {
    id: 13.00,
    question: 'LESSON 13 - Implementing Secure Mobile Solutions',
  },
  {
    id: 13.01,
    question: 'BYOD - Bring Your Own Device',
    answer: 'The mobile device is owned by the employee; it will have to meet whatever is required by the company and the employee will have to agree on the installation of corporate apps and to some level of oversight and auditing',
  },
  {
    id: 13.02,
    question: 'COBO - Corporate Owned, Business Only',
    answer: 'The device is the property of the company and may only be used for company business',
  },
  {
    id: 13.03,
    question: 'COPE - Corporate Owned, Personally-Enabled',
    answer: 'The device is chosen and supplied by the company and remains its property, but the employee may use it to access personal email and social media accounts and for personal web browsing',
  },
  {
    id: 13.04,
    question: 'CYOD - Choose Your Own Device',
    answer: 'Much the same as COPE but the employee is given a choice of device from a list',
  },
  {
    id: 13.05,
    question: 'MDM - Mobile Device Management',
    answer: 'Management suite that sets device policies for authentication, feature use (camera and microphone), and connectivity; can also allow device resets and remote wipes.',
  },
  {
    id: 13.06,
    question: 'MAM - Mobile Application Management',
    answer: '',
  },
  {
    id: 13.07,
    question: 'UEM - Unified Endpoint Management',
    answer: 'Enterprise software for controlling device settings, apps, and corporate data storage on all types of fixed, mobile, and IoT computing devices',
  },
  {
    id: 13.08,
    question: 'GPS - Global Positioning System',
    answer: 'A means of determining the device latitude and longitude based on information received from satellites via a GPS sensor',
  },
  {
    id: 13.09,
    question: 'IPS - Indoor Positioning System',
    answer: 'Works out a device location by triangulating its proximity to other radio sources, such as cell towers, Wi-Fi access points, and Bluetooth/RFID beacons',
  },
  {
    id: 13.10,
    question: 'Geofencing',
    answer: 'The practice of creating a virtual boundary based on real-world geography',
  },
  {
    id: 13.11,
    question: 'GPS Tagging',
    answer: 'The process of adding geographical identification metadata, such as the latitude and longitude, to media such as photographs, SMS messages, video, ..',
  },
  {
    id: 13.12,
    question: 'Sideloading',
    answer: 'Downloading untrusted apps from a website or 3rd party',
  },
  {
    id: 13.13,
    question: 'Containerization',
    answer: 'A mobile app or workspace that runs within a partitioned environment to prevent other (unauthorized) apps from interacting with it',
  },
  {
    id: 13.14,
    question: 'Rooting',
    answer: 'Term used for Androids; subverting the security measures on the device to gain root access to it',
  },
  {
    id: 13.15,
    question: 'Jailbreaking',
    answer: 'Term used for iOS devices; subverting the security measures on the device to gain administrative access to it',
  },
  {
    id: 13.16,
    question: 'Unlocking',
    answer: 'For either iOS or Android, this means removing the restrictions that lock a device to a single carrier',
  },
  {
    id: 13.17,
    question: 'Ad Hoc Network',
    answer: 'Peer-to-peer wireless network, no access points; can only use WEP for encryption',
  },
  {
    id: 13.18,
    question: 'Wi-Fi Direct',
    answer: 'Peer to peer wireless network; one device acts as a soft access point; uses WPA2 but depends on WPS',
  },
  {
    id: 13.19,
    question: 'Hotspot',
    answer: 'A smartphone sharing its Internet connection over Wi-Fi with multiple other devices',
  },
  {
    id: 13.20,
    question: 'Tethering',
    answer: 'A smartphone sharing its Internet connection to a PC over USB cable or a single PC via Bluetooth',
  },
  {
    id: 13.21,
    question: 'Bluejacking',
    answer: 'A sort of BT spam where someone sends you an unsolicited text (or picture/ video) message or vCard (contact details)',
  },
  {
    id: 13.22,
    question: 'Bluesnarfing',
    answer: 'Refers to using an exploit in Bluetooth to steal information from someone elses phone',
  },
  {
    id: 13.23,
    question: 'IR Blaster',
    answer: 'Infrared tech that allows the device to interact with an IR receiver and operate a device such as a TV as though it were the remote control',
  },
  {
    id: 13.24,
    question: 'IR Sensor',
    answer: 'Infrared tech that is used as proximity sensors (to detect when a smartphone is being held to the ear, for instance) and to measure health information (such as heart rate and blood oxygen levels)',
  },
  {
    id: 13.25,
    question: 'OTA - Over-the-Air Updates',
    answer: 'A firmware update delivered on a cellular data connection',
  },
  {
    id: 13.26,
    question: 'P2P - Point-to-Point Microwave',
    answer: 'Uses high-gain antennas to link two sites; high-gain means that the antenna is highly directional, each one is pointed directly at the other',
  },
  {
    id: 13.27,
    question: 'P2M - Point-to-Multipoint Microwave',
    answer: 'Uses smaller sectoral antennas, each covering a separate quadrant; links multiple sites or subscriber nodes to a single hub; this can be more cost-efficient in high density urban areas and requires less radio spectrum',
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
    question: 'Rsyslog',
    answer: 'An updated version of syslog that uses the same configuration file syntax, but can work over TCP and use a secure connection',
  },
  {
    id: 17.02,
    question: 'Walkthrough Exercise',
    answer: 'A facilitator presents the scenario and the incident responders demonstrate what actions they would take in response; unlike a tabletop exercise, the responders perform actions such as running scans and analyzing sample files, typically on a sandbox',
  },
  {
    id: 17.03,
    question: 'IPFIX',
    answer: 'Redevelopment of Ciscos NetFlow',
  },
  {
    id: 17.04,
    question: 'Security Logs',
    answer: 'Audit events, such as a failed logon or access to a file being denied',
  },
  {
    id: 17.05,
    question: 'Exploitation Phase',
    answer: 'The weaponized code is executed on the target system by the chosen mechanism',
  },
  {
    id: 17.06,
    question: 'Preparation Phase',
    answer: 'Making the system resilient to attack in the first place; writing policies, hardening systems, etc',
  },
  {
    id: 17.07,
    question: 'Tabletop Exercise',
    answer: 'The facilitator presents a scenario and the responders explain what action they would take to identify, contain, and eradicate the threat; the training does not use computer systems; least costly',
  },
  {
    id: 17.08,
    question: 'Syslog-ng',
    answer: 'An updated version of syslog that uses a different configuration file syntax, but can also use TCP/secure communications and more advanced options for message filtering',
  },
  {
    id: 17.09,
    question: 'Correlation',
    answer: 'Interpreting the relationship between individual data points to diagnose incidents of significance to the security team',
  },
  {
    id: 17.10,
    question: 'Setup Logs',
    answer: 'Events generated during the installation of Windows',
  },
  {
    id: 17.11,
    question: 'Metadata',
    answer: 'Information stored or recorded as a property of an object, state of a system, or transaction',
  },
  {
    id: 17.12,
    question: 'BCP - Business Continuity Plan',
    answer: 'Identifies how business processes should deal with both minor and disaster-level disruption',
  },
  {
    id: 17.13,
    question: 'Reconnaissance Phase',
    answer: 'The attacker determines what methods to use to complete the phases of the attack and gathers information about the targets personnel, computer systems, and supply chain',
  },
  {
    id: 17.14,
    question: 'COOP - Continuity of Operations Plan',
    answer: 'Basically just a BCP; identifies how business processes should deal with incidents',
  },
  {
    id: 17.15,
    question: 'System Logs',
    answer: 'Events generated by the operating system and its services, such as storage volume health checks',
  },
  {
    id: 17.16,
    question: 'Diamond Model of Intrusion Analysis',
    answer: 'Attack framework that analyzes an intrusion event by exploring the relationships between four core features: adversary, capability, infrastructure, and victim',
  },
  {
    id: 17.17,
    question: 'Command and Control Phase',
    answer: 'The weaponized code establishes an outbound channel to a remote server that can then be used to control the remote access tool and possibly download additional tools to progress the attack',
  },
  {
    id: 17.18,
    question: 'Playbook',
    answer: 'A data-driven standard operating procedure (SOP) to assist junior analysts in detecting and responding to specific cyberthreat scenarios',
  },
  {
    id: 17.19,
    question: 'Trend Analysis',
    answer: 'The process of detecting patterns or indicators within a data set over a time series and using those patterns to make predictions about future events',
  },
  {
    id: 17.20,
    question: '...',
    answer: 'Dictates for how long information needs to be kept available on backup and archive systems',
  },
  {
    id: 17.21,
    question: 'Weaponization Phase',
    answer: 'The attacker couples payload code that will enable access with exploit code that will use a vulnerability to execute on the target system',
  },
  {
    id: 17.22,
    question: 'Incident Response Lifecycle Stages',
    answer: 'Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned',
  },
  {
    id: 17.23,
    question: 'Lockheed Martin Kill Chain Phases',
    answer: 'Reconnaissance, Weaponization, Delivery, Exploitation, Installation, Command and Control, Actions on Objectives',
  },
  {
    id: 17.24,
    question: 'Forwarded Events Logs',
    answer: 'Events that are sent to the local log from other hosts',
  },
  {
    id: 17.25,
    question: 'System Memory Dump',
    answer: 'Creates an image file that can be analyzed to identify the processes that are running, the contents of temporary file systems, registry data, network connections, cryptographic keys, and more',
  },
  {
    id: 17.26,
    question: 'Syslog',
    answer: 'Provides an open format, protocol, and server software for logging event messages',
  },
  {
    id: 17.27,
    question: 'Recovery Phase',
    answer: 'With the cause of the incident eradicated, the system can be reintegrated into the business process that it supports; this recovery phase may involve restoration of data from backup and security testing',
  },
  {
    id: 17.28,
    question: 'SOAR - Security Orchestration, Automation, and Response',
    answer: 'A class of security tools that facilitates incident response, threat hunting, and security configuration by orchestrating automated runbooks and delivering data enrichment',
  },
  {
    id: 17.29,
    question: 'Lessons Learned Phase',
    answer: 'Analyze the incident and responses to identify whether procedures or systems could be improved',
  },
  {
    id: 17.30,
    question: 'Application Logs',
    answer: 'Events generated by applications and services, such as when a service cannot start',
  },
  {
    id: 17.31,
    question: 'Delivery Phase',
    answer: 'The attacker identifies a vector by which to transmit the weaponized code to the target environment, such as via an email attachment or on a USB drive',
  },
  {
    id: 17.32,
    question: 'sFlow',
    answer: 'Developed by HP; uses sampling to measure traffic statistics at any layer of the OSI model for a wider range of protocol types than the IP-based Netflow',
  },
  {
    id: 17.33,
    question: 'MITRE ATT&CK',
    answer: 'Attack framework that uses matrices to provide access to a database of known TTPs',
  },
  {
    id: 17.34,
    question: 'Installation Phase',
    answer: 'The chosen mechanism enables the weaponized code to run a remote access tool and achieve persistence on the target system',
  },
  {
    id: 17.35,
    question: 'First Responder',
    answer: 'The first member of the CIRT team that is notified and takes charge of the situation',
  },
  {
    id: 17.36,
    question: 'IRP - Incident Response Plan',
    answer: 'Specific procedures that must be performed if a certain type of event is detected or reported',
  },
  {
    id: 17.37,
    question: 'NetFlow',
    answer: 'A Cisco-developed means of reporting network flow information to a structured database',
  },
  {
    id: 17.38,
    question: 'Adversarial AI',
    answer: 'Using AI to identify vulnerabilities and attack vectors to circumvent security systems',
  },
  {
    id: 17.39,
    question: 'Containment Phase',
    answer: 'Limit the scope and magnitude of the incident',
  },
  {
    id: 17.40,
    question: 'Simulation Exercise',
    answer: 'A team-based exercise where the red team attempts an intrusion, the blue team operates response and recovery controls, and a white team moderates and evaluates the exercise',
  },
  {
    id: 17.41,
    question: 'Eradication Phase',
    answer: 'Once the incident is contained, remove the cause and restore the affected system to a secure state by applying secure configuration settings and installing patches',
  },
  {
    id: 17.42,
    question: 'NXlog',
    answer: 'An open-source log normalization tool; one use for it is to collect Windows logs, which use an XML-based format, and normalize them to a syslog format',
  },
  {
    id: 17.43,
    question: 'Actions on Objectives Phase',
    answer: 'The attacker typically uses the access he has achieved to covertly collect information from target systems and transfer it to a remote system (data exfiltration)',
  },
  {
    id: 17.44,
    question: 'Identification Phase',
    answer: 'Determine whether an incident has taken place, assess how severe it may be, and notify stakeholders',
  },
]
const eighteen = [
  {
    id: 18.00,
    question: 'LESSON 18 - Explaining Digital Forensics',
  },
  {
    id: 18.01,
    question: 'Digital Forensics',
    answer: 'The practice of collecting evidence from computer systems to a standard that will be accepted in a court of law',
  },
  {
    id: 18.02,
    question: 'Due Process',
    answer: 'A term used in US and UK common law to require that people only be convicted of crimes following the fair application of the laws of the land',
  },
  {
    id: 18.03,
    question: 'Legal Hold',
    answer: 'Refers to the fact that information that may be relevant to a court case must be preserved',
  },
  {
    id: 18.04,
    question: 'Chain of Custody',
    answer: 'Documentation that reinforces the integrity and proper handling of evidence from collection, to analysis, to storage, and finally to presentation',
  },
  {
    id: 18.05,
    question: 'E-Discovery',
    answer: 'A means of filtering the relevant evidence produced from all the data gathered by a forensic examination and storing it in a database in a format such that it can be used as evidence in a trial; software tools have been produced to assist this process',
  },
  {
    id: 18.06,
    question: 'Timelines',
    answer: 'The visual representation of events happening in chronological order',
  },
  {
    id: 18.07,
    question: 'Counterintelligence',
    answer: 'Identification and analysis of specific adversary tactics, techniques, and procedures (TTP) to help configure and audit our own systems',
  },
  {
    id: 18.08,
    question: 'Strategic Intelligence',
    answer: 'Data and research that has been analyzed to produce actionable insights for risk management and security control provisioning',
  },
  {
    id: 18.09,
    question: 'Acquisition',
    answer: 'The process of obtaining a forensically clean copy of data from a device held as evidence',
  },
  {
    id: 18.10,
    question: 'Order of Volatility',
    answer: 'The order in which volatile data should be recovered from various storage locations and devices after a security incident occurs',
  },
  {
    id: 18.11,
    question: 'Order of Volatility (the actual order)',
    answer: '1. CPU registers and cache memory / 2. RAM (routing table, ARP cache, kernal stats) / 3. Persistent mass storage (System mem caches, temp file caches, OS files) / 4. Remote logging and monitoring data / 5. Physical configuration and network topology / 6. Archival media and printed docs',
  },
  {
    id: 18.12,
    question: 'Live Acquisition',
    answer: 'Capturing the contents of memory while the host is running',
  },
  {
    id: 18.13,
    question: 'Crash Dump',
    answer: 'When Windows encounters an unrecoverable kernel error, it can write contents of memory to a dump file at C:\Windows\MEMORY.DMP, Minidumps are in C:\Windows\Minidumps',
  },
  {
    id: 18.14,
    question: 'Anti-Forensics',
    answer: 'Malware or attacker taking measures to cover their tracks; delete logs, change timestamps, files, etc.',
  },
  {
    id: 18.15,
    question: 'Pagefile',
    answer: 'Stores pages of memory in use that exceed the capacity of the hosts RAM modules',
  },
  {
    id: 18.16,
    question: 'dd',
    answer: 'A Linux command that makes a bit-by-bit copy of an input file, typically used for disk imaging',
  },
  {
    id: 18.17,
    question: 'Provenance',
    answer: 'In digital forensics, being able to trace the source of evidence to a crime scene and show that it has not been tampered with',
  },
  {
    id: 18.18,
    question: 'Write Blocker',
    answer: 'Prevents any data on a disk or volume from being changed by filtering write commands at the driver and OS level',
  },
  {
    id: 18.19,
    question: 'Carving',
    answer: 'The process of recovering file fragments, such as those that may represent deleted or overwritten files',
  },
]
const nineteen = [
  {
    id: 19.00,
    question: 'LESSON 19 - Summarizing Risk Management Concepts',
  },
  {
    id: 19.01,
    question: 'Risk Management',
    answer: 'A process for identifying, assessing, and mitigating vulnerabilities and threats to the essential functions that a business must perform to serve its customers',
  },
  {
    id: 19.02,
    question: 'Likelihood',
    answer: 'The probability of a threat being realized',
  },
  {
    id: 19.03,
    question: 'Impact',
    answer: 'The severity of the risk if realized as a security incident',
  },
  {
    id: 19.04,
    question: 'Quantitative Risk Assessment',
    answer: 'Aims to assign concrete, often monetary, values to each risk factor',
  },
  {
    id: 19.05,
    question: 'SLE - Single Loss Expectancy',
    answer: 'The amount that would be lost in a single occurrence of the risk factor, Reached by multiplying the value of an asset by an Exposure Factor (EF)',
  },
  {
    id: 19.06,
    question: 'EF - Exposure Factor',
    answer: 'The percentage of the asset value that would be lost in an incident',
  },
  {
    id: 19.07,
    question: 'ARO - Annualized Rate of Occurence',
    answer: 'How many times a risk is likely to occur within a year',
  },
  {
    id: 19.08,
    question: 'ALE - Annualized Loss Expectancy',
    answer: 'The amount that would be lost over the course of a year. Reached by multiplying the SLE by the ARO',
  },
  {
    id: 19.09,
    question: 'Qualitative Risk Assessment',
    answer: 'Seeks out peoples opinions on which risk factors are significant, uses simple categories like High Value, Medium Value, Low Value; often use "Traffic Light" grids with red, yellow, and green colors',
  },
  {
    id: 19.10,
    question: 'Inherent Risk',
    answer: 'The level of risk before any type of mitigation has been attempted',
  },
  {
    id: 19.11,
    question: 'Risk Mitigation',
    answer: 'The overall process of reducing exposure to or the effects of risk factors',
  },
  {
    id: 19.12,
    question: 'Risk Deterrence',
    answer: 'When you deploy a countermeasure that reduces exposure to a threat or vulnerability',
  },
  {
    id: 19.13,
    question: 'Risk Avoidance',
    answer: 'You stop doing the activity that is risk-bearing',
  },
  {
    id: 19.14,
    question: 'Risk Transference',
    answer: 'Assigning risk to a third party, such as an insurance company or a contract with a supplier that defines liabilities',
  },
  {
    id: 19.15,
    question: 'Risk Acceptance',
    answer: 'No countermeasures are put in place either because the level of risk does not justify the cost or because there will be unavoidable delay before the countermeasures are deployed',
  },
  {
    id: 19.16,
    question: 'Residual Risk',
    answer: 'The remaining risk after specific mitigation, transference, or acceptance measures have been applied',
  },
  {
    id: 19.17,
    question: 'Risk Appetite',
    answer: 'A strategic assessment of what level of residual risk is tolerable',
  },
  {
    id: 19.18,
    question: 'Control Risk',
    answer: 'A measure of how much less effective a security control has become over time',
  },
  {
    id: 19.19,
    question: 'Risk Register',
    answer: 'A document showing the results of risk assessments in a comprehensible format',
  },
  {
    id: 19.20,
    question: 'BIA - Business Impact Analysis',
    answer: 'The process of assessing what losses (impacts) might occur for a range of threat scenarios',
  },
  {
    id: 19.21,
    question: 'MEF - Mission Essential Function',
    answer: 'A business function that cannot be deferred, org must be able to perform the function as close to continuously as possible; if it goes down, it must be restored first',
  },
  {
    id: 19.22,
    question: 'PBF - Primary Business Function',
    answer: 'Functions that act as support for the business or an MEF but are not critical in themselves',
  },
  {
    id: 19.23,
    question: 'MTD - Maximum Tolerable Downtime',
    answer: 'The longest period of time that a business function outage may occur for without causing irrecoverable business failure',
  },
  {
    id: 19.24,
    question: 'RTO - Recovery Time Objective',
    answer: 'The period following a disaster that an individual IT system may remain offline; represents the amount of time it takes to identify that there is a problem and then perform recovery',
  },
  {
    id: 19.25,
    question: 'WRT - Work Recovery Time',
    answer: 'Following systems recovery, there may be additional work to reintegrate different systems, test overall functionality, and brief system users on any changes or different working practices so that the business function is again fully supported',
  },
  {
    id: 19.26,
    question: 'RPO - Recovery Point Objective',
    answer: 'The amount of data loss that a system can sustain, measured in time',
  },
  {
    id: 19.27,
    question: 'Asset Types',
    answer: 'People (employees) / Tangible (buildings, equipment) / Intangible (ideas, reputation) / Procedures (supply chains, SOPs)',
  },
  {
    id: 19.28,
    question: 'SPoF - Single Point of Failure',
    answer: 'An asset that causes the entire workflow to fail if it is damaged or otherwise not available',
  },
  {
    id: 19.29,
    question: 'MTTF - Mean Time to Failure',
    answer: 'The expected lifetime of a non-repairable asset. Calculation: Total time divided by number of devices',
  },
  {
    id: 19.30,
    question: 'MTBF - Mean Time Between Failures',
    answer: 'The expected usage time of a repairable asset between needing to be repaired again. Calculation: Total time divided by number of failures',
  },
  {
    id: 19.31,
    question: 'MTTR - Mean Time to Repair',
    answer: 'Average time taken to correct a fault so that the system is restored to full operation - important in determining overall RTO',
  },
  {
    id: 19.32,
    question: 'DRP - Disaster Recovery Plan',
    answer: 'Describe the specific procedures to follow to recover a system or site to a working state following a disaster-level event',
  },
]
const twenty = [
  {
    id: 20.00,
    question: 'LESSON 20 - Implementing Cybersecurity Resilience',
  },
  {
    id: 20.01,
    question: 'HA - High Availability',
    answer: 'The property that defines how closely systems approach the goal of providing data availability 100 percent of the time while maintaining a high level of system performance',
  },
  {
    id: 20.02,
    question: 'Availability 99%',
    answer: 'Downtime 87:36:00',
  },
  {
    id: 20.03,
    question: '99.9% / 99.99% / 99.999% / 99.9999%',
    answer: '08:45:36 / 00:52:34 / 00:05:15 / 00:00:32',
  },
  {
    id: 20.04,
    question: 'Scaling Out',
    answer: 'Adding more resources in parallel with existing resources',
  },
  {
    id: 20.05,
    question: 'Scaling Up',
    answer: 'Increasing the power',
  },
  {
    id: 20.06,
    question: 'Fault Tolerant System',
    answer: 'A system that can experience failures and continue to provide the same (or nearly the same) level of service',
  },
  {
    id: 20.07,
    question: 'Redundant Component',
    answer: 'One that is not essential to the normal function of a system but that allows the system to recover from the failure of another component',
  },
  {
    id: 20.08,
    question: 'Brownout',
    answer: 'An intentional or unintentional drop in voltage in an electrical power supply system',
  },
  {
    id: 20.09,
    question: 'PDU - Power Distribution Unit',
    answer: 'Advanced strip socket that provides filtered output voltage',
  },
  {
    id: 20.10,
    question: 'UPS - Uninterruptible Power Supply',
    answer: 'Battery bank based power supply that will provide a temporary power source in the event of a blackout (complete power loss)',
  },
  {
    id: 20.11,
    question: 'Backup Power Generator',
    answer: 'Can provide power to the whole building, often for several days; most use diesel, propane, or natural gas as a fuel source',
  },
  {
    id: 20.12,
    question: 'NIC Teaming',
    answer: 'AKA adapter teaming, means that the server is installed with multiple NICs, or NICs with multiple ports, or both; each port is connected to separate network cabling',
  },
  {
    id: 20.13,
    question: 'RAID - Redundant Array of Independent Disks',
    answer: 'Specifications that support redundancy and fault tolerance for different configurations of multipledevice storage systems',
  },
  {
    id: 20.14,
    question: 'Striping',
    answer: 'Splitting the flow of data into blocks and then writing these blocks across the RAID one by one; improves performance',
  },
  {
    id: 20.15,
    question: 'Mirroring',
    answer: 'Identical copies of data are stored on the RAID members simultaneously; improves redundancy',
  },
  {
    id: 20.16,
    question: 'Parity',
    answer: 'Used for fault tolerance by calculating the data in two drives and storing the results on a third',
  },
  {
    id: 20.17,
    question: 'RAID 0',
    answer: 'stripes data evenly across two or more disks, without parity information, redundancy, or fault tolerance',
  },
  {
    id: 20.18,
    question: 'RAID 1',
    answer: 'Mirroring - Data is written to two disks at the same time, so if one fails there is a backup copy; drawback is storage efficiency is only 50%',
  },
  {
    id: 20.19,
    question: 'RAID 5',
    answer: 'Striping with parity - Data is written across 3 or more disks, but if ONE disk fails the volume will continue; better storage than RAID 1',
  },
  {
    id: 20.20,
    question: 'RAID 6',
    answer: 'Double parity - Like RAID 5 but with an extra parity stripe; allows the volume to continue when TWO disks fail',
  },
  {
    id: 20.21,
    question: 'Multipath',
    answer: 'Overprovisioning controllers and cabling so that a host has failover connections to storage media',
  },
  {
    id: 20.22,
    question: 'Geographical Dispersal',
    answer: 'Refers to data replicating hot and warm sites that are physically distant from one another',
  },
  {
    id: 20.23,
    question: 'Asynchronous Replication',
    answer: 'Writes data to the primary storage first, and then copies data to the replicas at scheduled intervals',
  },
  {
    id: 20.24,
    question: 'Synchronous Replication',
    answer: 'Write data to all replicas simultaneously; therefore, all replicas should always have the same data all of the time',
  },
  {
    id: 20.25,
    question: 'Full Backup',
    answer: 'Includes all selected files and directories; attribute is cleared',
  },
  {
    id: 20.26,
    question: 'Incremental Backup',
    answer: 'Includes any new files, as well as files modified since the last backup; attribute is cleared',
  },
  {
    id: 20.27,
    question: 'Differential Backup',
    answer: 'Includes all new and modified files since the last full backup; attribute is not cleared',
  },
  {
    id: 20.28,
    question: 'Snapshot',
    answer: 'A point-in-time copy of data maintained by the file system; a backup program can use the snapshot rather than live data to perform the backup',
  },
  {
    id: 20.29,
    question: 'VSS - Volume Shadow Copy Service',
    answer: 'A Windows service that enables shadow copies and allows copying files that are open, essentially taking a snapshot of the data',
  },
  {
    id: 20.30,
    question: 'Image Backup',
    answer: 'Made by duplicating an OS installation; this can be done either from a physical hard disk or from a VMs virtual hard disk',
  },
  {
    id: 20.31,
    question: 'NAS - Network Attached Storage',
    answer: 'A specially configured type of server that makes RAID storage available over common network protocols, such as Windows File Sharing (SMB) or FTP; file-level',
  },
  {
    id: 20.32,
    question: 'SAN - Storage Area Network',
    answer: 'A high-speed fiber optic network of storage devices built from technologies such as Fibre Channel, Small Computer System Interface (SCSI), or Infiniband; block-level',
  },
  {
    id: 20.33,
    question: 'Order of Restoration',
    answer: 'The sequence in which different systems must be reinstated in order to avoid additional power, network, OS, or app problems',
  },
  {
    id: 20.34,
    question: 'Order of Restoration (actual order)',
    answer: '1. Power delivery systems / 2. Switch infrastructure, routing appliances / 3. Network security appliances / 4. Critical network servers (DHCP, DNS, NTP) / 5. Back-end/Middleware, verify data integrity / 6. Front-end applications / 7. Client workstations, devices, browser access',
  },
  {
    id: 20.35,
    question: 'Nonpersistence',
    answer: 'Means that any given instance is completely static in terms of processing function',
  },
  {
    id: 20.36,
    question: 'Configuration Management',
    answer: 'Ensures that each component of infrastructure is in a trusted state that has not diverged from its documented properties',
  },
  {
    id: 20.37,
    question: 'Service Assets',
    answer: 'Things, processes, or people that contribute to the delivery of an IT service',
  },
  {
    id: 20.38,
    question: 'CI - Configuration Item',
    answer: 'An asset that requires specific management procedures for it to be used to deliver the service',
  },
  {
    id: 20.39,
    question: 'CMS - Configuration Management System',
    answer: 'The tools and databases that collect, store, manage, update, and present information about CIs and their relationships',
  },
  {
    id: 20.40,
    question: 'Standard Naming Convention',
    answer: 'Applying consistent names and labels to assets and digital resources/identities within a configuration management system',
  },
  {
    id: 20.41,
    question: 'Active Defense',
    answer: 'Engaging with the adversary, maybe using honeypots/nets/files, or disruption strategies',
  },
  {
    id: 20.42,
    question: 'Fake Telemetry',
    answer: 'Deception strategy that returns spoofed data in response to network probes',
  },
  {
    id: 20.43,
    question: 'DNS Sinkhole',
    answer: 'A DNS server that gives out a false result for a domain name, used to route suspicious traffic to something like a honeynet',
  },
]
const twentyone = [
  {
    id: 21.00,
    question: 'LESSON 21 - Explaining Physical Security',
  },
  {
    id: 21.01,
    question: 'Physical Access Controls',
    answer: 'Security measures that restrict and monitor access to specific physical areas or assets',
  },
  {
    id: 21.02,
    question: 'Industrial Camouflage',
    answer: 'Methods of disguising the nature and purpose of buildings or parts of buildings',
  },
  {
    id: 21.03,
    question: 'Turnstile',
    answer: 'A type of gateway that only allows one person through at a time',
  },
  {
    id: 21.04,
    question: 'Mantrap / Access Control Vestibule',
    answer: 'Where one gateway leads to an enclosed space protected by another barrier',
  },
  {
    id: 21.05,
    question: 'Skimming',
    answer: 'Using a counterfeit card reader to capture card details, which are then used to program a duplicate',
  },
  {
    id: 21.06,
    question: 'USB Data Blocker',
    answer: 'Mitigate against juice jacking attacks by preventing any sort of data transfer when the smartphone or laptop is connected to a charge point',
  },
  {
    id: 21.07,
    question: 'Robot Sentries',
    answer: 'Surveillance systems (and in some cases weapon systems) can be mounted on a wholly or partially autonomous robot',
  },
  {
    id: 21.08,
    question: 'Challenge Policy',
    answer: 'Sets out what type of response is appropriate in given situations and helps to defeat social engineering attacks',
  },
  {
    id: 21.09,
    question: 'Air Gap',
    answer: 'A type of network isolation that physically separates a network from all other networks',
  },
  {
    id: 21.10,
    question: 'Vault',
    answer: 'A room that is hardened against unauthorized entry by physical means, such as drilling or explosives',
  },
  {
    id: 21.11,
    question: 'Faraday Cage',
    answer: 'A charged conductive mesh cage that blocks signals from entering or leaving the area',
  },
  {
    id: 21.12,
    question: 'Hot Aisle / Cold Aisle',
    answer: 'Servers are placed back-to-back not front-to-back, so that the warm exhaust from one bank of servers is not forming the air intake for another bank',
  },
  {
    id: 21.13,
    question: 'What class of fire extinguiser can be used where the risk of electric shock makes others unsuitable?',
    answer: 'Class C',
  },
  {
    id: 21.14,
    question: 'Pulping',
    answer: 'Taking shredded remains and mixing them with water as a further form of data destruction',
  },
  {
    id: 21.15,
    question: 'Degaussing',
    answer: 'HDD only! Exposing a hard disk to a powerful electromagnet disrupts the magnetic pattern that stores the data on the disk surface',
  },
  {
    id: 21.16,
    question: 'Zero Filling',
    answer: 'Most basic type of data overwriting which sets each bit to zero',
  },
  {
    id: 21.17,
    question: 'SE - Secure Erase',
    answer: 'On HDDs, performs a single pass of zero filling. On SSDs, this command marks all blocks as empty',
  },
  {
    id: 21.18,
    question: 'ISE - Instant Secure Erase',
    answer: 'Only for SEDs; aka crypto erase. When this command is given, the MEK of the SED is erased, rendering the data unrecoverable',
  },
]

export default App;