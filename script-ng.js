var GyaanCheckApp = angular.module('GyaanCheck', []);

GyaanCheckApp.controller('getLeftPanel', function ($scope, $element) {
  $scope.sections = sectionLeft;
});

GyaanCheckApp.controller('getRightPanel', function ($scope, $element) {
    $scope.sections = sectionRight;
});

var sectionLeft = [
    {
        HeadingTheme: "panel panel-info",
        Title: "Gujarat National Law University, Gandhinagar",
        ApplicationEndDt: "30/04/2015",
        DetailedNotification: "http://www.gnlu.ac.in/career/1.%20Research%20Associate%20(Real%20Estate%20Laws).pdf",
        GoToSite: "http://gnlu.ac.in/career.php",
        ApplicationFee: "",
        PublishedOn: "07/04/2015",
        Age: "--",
        Logo: "gnlu.jpg",
        AltText: "Recruitment Of Research Associates",
        JobDetails: [{
            Designation: "Research Associate (Real Estate Laws)",
            NoOfPosts: "",
            PayScale: "30,000 per month (fixed)",
            GradePay: "",
            Eligibility: "Master’s Degree i n Law with at least 55% marks (or an equivalent grade in a point scale wherever grading system is followed) from an Indian University, or an equivalent degree from an accredited foreign university;"
        },
        {
            Designation: "Research Associate ((Law of the Sea and Maritime Laws)",
            NoOfPosts: "",
            PayScale: "30,000 per month (fixed)",
            GradePay: "",
            Eligibility: "Master’s Degree i n Law with at least 55% marks (or an equivalent grade in a point scale wherever grading system is followed) from an Indian University, or an equivalent degree from an accredited foreign university;"
        },
        {
            Designation: "Research Associate ((Mergers and Acquisitions)",
            NoOfPosts: "",
            PayScale: "30,000 per month (fixed)",
            GradePay: "",
            Eligibility: "Master’s Degree i n Law with at least 55% marks (or an equivalent grade in a point scale wherever grading system is followed) from an Indian University, or an equivalent degree from an accredited foreign university, preferably with specialization in M&A, Company Law or fields closely associated with M&A Laws, Policies and Practices"
        },
        {
            Designation: "Research Associate (Gujarat Safai Kamdar Corporation Fellowship)",
            NoOfPosts: "",
            PayScale: "30,000 per month (fixed)",
            GradePay: "",
            Eligibility: "Master’s Degree i n Law with at least 55% marks (or an equivalent grade in a point scale wherever grading system is followed) from an Indian University, or an equivalent degree from an accredited foreign university;"
        }
        ]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Baba Farid University Of Health Sciences, Faridkot",
        ApplicationEndDt: "20/04/2015",
        DetailedNotification: "http://bfuhs.ac.in/careers/add3of154.pdf",
        GoToSite: "http://bfuhs.ac.in/careers/careers.asp",
        ApplicationFee: "1500",
        PublishedOn: "02/04/2015",
        Age: "--",
        Logo: "baba_farid.jpg",
        AltText: "Recruitment Of Professors, Assistant Professors, Associate Professors and Resident Doctors",
        JobDetails: [{
            Designation: "Controller of Examinations",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Professor",
            NoOfPosts: "13",
            PayScale: "37,400 - 67,000",
            GradePay: "10,000",
            Eligibility: ""
        },
        {
            Designation: "Associate Professor",
            NoOfPosts: "12",
            PayScale: "37,400 - 67,000",
            GradePay: "8,900",
            Eligibility: ""
        },
        {
            Designation: "Asstt Professor",
            NoOfPosts: "11",
            PayScale: "37,400 - 67,000",
            GradePay: "8,600",
            Eligibility: ""
        },
        {
            Designation: "Senior Resident",
            NoOfPosts: "26",
            PayScale: "55,000/- per month",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Junior Resident ",
            NoOfPosts: "10",
            PayScale: "35,000/- per month",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Tutor",
            NoOfPosts: "09",
            PayScale: "35,000/- per month",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: " Lady Medical Officer-1 ( for Rural Training Health Centre)",
            NoOfPosts: "01",
            PayScale: "35,000/- per month",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Dialysis Technician",
            NoOfPosts: "01",
            PayScale: " 10,000/- p.m",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Associate Professor Radiotherapy",
            NoOfPosts: "01",
            PayScale: "37,400 - 67,000",
            GradePay: "8,900",
            Eligibility: ""
        },
        {
            Designation: "Assistant Professor Radiology",
            NoOfPosts: "01",
            PayScale: "37,400 - 67,000",
            GradePay: "8,600",
            Eligibility: ""
        },
        {
            Designation: "Medical Physicist",
            NoOfPosts: "02",
            PayScale: "15,600 - 39,100",
            GradePay: "5,400",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Kochi Metro Rail Corporation",
        ApplicationEndDt: "29/04/2015",
        DetailedNotification: "http://kochimetro.org/applications-invited-for-various-posts-2/",
        GoToSite: "http://kochimetro.org/",
        ApplicationFee: "250",
        PublishedOn: "2015",
        Age: "--",
        Logo: "kmrl.jpg",
        AltText: "KMRL Recruitment Of Additional General Manager(Finance And IT) And Executive Trainee",
        JobDetails: [{
            Designation: "Additional General Manager(Finance And IT)",
            NoOfPosts: "01",
            PayScale: "E7,	43200	– 66000	(IDA)",
            GradePay: "",
            Eligibility: "CA/ICWA and  DISA/CISA or	equivalent or any diploma or a higher qualification in Information Technology."
        },
        {
            Designation: "Executive Trainee",
            NoOfPosts: "01",
            PayScale: "E0, 12600 – 32500 (IDA)",
            GradePay: "",
            Eligibility: "Post Graduate with diploma in Public Administration"
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Himachal Gramin Bank",
        ApplicationEndDt: "22/04/2015",
        DetailedNotification: "http://himachalgraminbank.org/pdf/Himachal_Pradesh_Gramin_Bank_2015.pdf",
        GoToSite: "http://himachalgraminbank.org/challan/",
        ApplicationFee: "100",
        PublishedOn: "07/04/2015",
        Age: "--",
        Logo: "hgb.jpg",
        AltText: "HGB Recruitment Of Officers through IBPS",
        JobDetails: [{
            Designation: "Officer Scale III",
            NoOfPosts: "03",
            PayScale: "25700-800/5 – 29700-900/2 – 31500",
            GradePay: "",
            Eligibility: "Eligibility Criteria is to be considered as per RRBs CWE-III Advertisement published in Employment News/Rozgar Samachar Issue Dated 28th June – 4 th July, 2014 released by IBPS and posted on the IBPS’s website www.ibps.in."
        },
        {
            Designation: "Officer Scale II(General Banking)",
            NoOfPosts: "06",
            PayScale: "19400 -700/1 – 20100 – 800/10 - 28100",
            GradePay: "",
            Eligibility: "Eligibility Criteria is to be considered as per RRBs CWE-III Advertisement published in Employment News/Rozgar Samachar Issue Dated 28th June – 4 th July, 2014 released by IBPS and posted on the IBPS’s website www.ibps.in."
        },
        {
            Designation: "Officer Scale II(IT)",
            NoOfPosts: "01",
            PayScale: "19400 -700/1 – 20100 – 800/10 - 28100",
            GradePay: "",
            Eligibility: "Eligibility Criteria is to be considered as per RRBs CWE-III Advertisement published in Employment News/Rozgar Samachar Issue Dated 28th June – 4 th July, 2014 released by IBPS and posted on the IBPS’s website www.ibps.in."
        },
        {
            Designation: "Officer Scale II(Treasury Manager)",
            NoOfPosts: "01",
            PayScale: "19400 -700/1 – 20100 – 800/10 - 28100",
            GradePay: "",
            Eligibility: "Eligibility Criteria is to be considered as per RRBs CWE-III Advertisement published in Employment News/Rozgar Samachar Issue Dated 28th June – 4 th July, 2014 released by IBPS and posted on the IBPS’s website www.ibps.in."
        },
        {
            Designation: "Officer Scale II(Agriculture Officer)",
            NoOfPosts: "20",
            PayScale: "19400 -700/1 – 20100 – 800/10 - 28100",
            GradePay: "",
            Eligibility: "Eligibility Criteria is to be considered as per RRBs CWE-III Advertisement published in Employment News/Rozgar Samachar Issue Dated 28th June – 4 th July, 2014 released by IBPS and posted on the IBPS’s website www.ibps.in."
        },
        {
            Designation: "Officer Scale I",
            NoOfPosts: "38",
            PayScale: "14500-600/7 – 18700-700/2 – 20100-800/7 – 25700",
            GradePay: "",
            Eligibility: "Eligibility Criteria is to be considered as per RRBs CWE-III Advertisement published in Employment News/Rozgar Samachar Issue Dated 28th June – 4 th July, 2014 released by IBPS and posted on the IBPS’s website www.ibps.in."
        },
        {
            Designation: "Office Assistant",
            NoOfPosts: "134",
            PayScale: "- 7200-400/3 -8400-500/3 -9900-600/4 -12300-700/7 -17200-1300/1 - 18500-800/1 -19300",
            GradePay: "",
            Eligibility: "Eligibility Criteria is to be considered as per RRBs CWE-III Advertisement published in Employment News/Rozgar Samachar Issue Dated 28th June – 4 th July, 2014 released by IBPS and posted on the IBPS’s website www.ibps.in."
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Airport Authority Of India",
        ApplicationEndDt: "10/06/2015",
        DetailedNotification: "http://www.aai.aero/employment_news/Re_advt_2015.pdf",
        GoToSite: "http://www.aai.aero/employment_news/Employee_Recruitment_new.jsp",
        ApplicationFee: "",
        PublishedOn: "11/05/2015",
        Age: "--",
        Logo: "aai.jpg",
        AltText: "AAI Recruitment For Multiple Posts",
        JobDetails: [{
            Designation: "Deputy Company Secretary",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: "Graduate with Membership of Institute of Company Secretaries of India"
        },
        {
            Designation: "Deputy General Manager (Commercial)",
            NoOfPosts: "01",
            PayScale: "36600-3%-62000",
            GradePay: "",
            Eligibility: "Graduate and full- time regular MBA of two years duration with Marketing specialization."
        },
        {
            Designation: "Deputy General Manager (Human Resource)",
            NoOfPosts: "07",
            PayScale: "36600-3%-62000",
            GradePay: "",
            Eligibility: "Graduate & full-time regular MBA or equivalent (two years duration) with specialization in HRM/HRD/PM&IR/Labour Welfare."
        },
        {
            Designation: "Deputy General Manager (Information Technology)",
            NoOfPosts: "05",
            PayScale: "36600-3%-62000",
            GradePay: "",
            Eligibility: "Full- time regular Bachelor’s Degree in Engineering /Technology in Computer Science/Computer Engineering / IT"
        },
        {
            Designation: "Deputy General Manager (Fire Services)",
            NoOfPosts: "02",
            PayScale: "36600-3%-62000",
            GradePay: "",
            Eligibility: "Full- time regular Bachelor’s Degree in Engineering/ Technology in Fire Engineering/Mechanical Engineering/Automobile Engineering"
        },
        {
            Designation: "Deputy General Manager (Airport Operations)",
            NoOfPosts: "06",
            PayScale: "36600-3%-62000",
            GradePay: "",
            Eligibility: "Graduate in science and full-time regular MBA of two years duration"
        },
        {
            Designation: "Manager (Corporate Affairs) ",
            NoOfPosts: "02",
            PayScale: "24900-3%-50500",
            GradePay: "",
            Eligibility: "Membership of Institute of Company Secretaries of India. "
        },
        {
            Designation: "Manager (Fire Services)",
            NoOfPosts: "13",
            PayScale: "24900-3%-50500",
            GradePay: "",
            Eligibility: "Full-time regular Bachelor’s Degree in Engineering/ Technology in Fire Engineering / Mechanical Engineering / Automobile Engineering."
        },
        {
            Designation: "Manager (Finance)",
            NoOfPosts: "24",
            PayScale: "24900-3%-50500",
            GradePay: "",
            Eligibility: "B. Com with ICWA / CA / MBA full- time regular (two years duration) with specialization in Finance."
        },
        {
            Designation: "Manager (Human Resource)",
            NoOfPosts: "27",
            PayScale: "24900-3%-50500",
            GradePay: "",
            Eligibility: "Graduate & full-time regular MBA or equivalent (two years duration) with specialization in HRM/HRD/PM&IR/Labour Welfare"
        },
        {
            Designation: "Manager (Information Technology)",
            NoOfPosts: "20",
            PayScale: "24900-3%-50500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Manager (Technical)",
            NoOfPosts: "04",
            PayScale: "24900-3%-50500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Manager (Official Language)",
            NoOfPosts: "02",
            PayScale: "24900-3%-50500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Manager (Commercial)",
            NoOfPosts: "03",
            PayScale: "24900-3%-50500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Manager (Cargo)",
            NoOfPosts: "05",
            PayScale: "24900-3%-50500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Manager (Law)",
            NoOfPosts: "18",
            PayScale: "24900-3%-50500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Manager (Economic Planning)",
            NoOfPosts: "02",
            PayScale: "24900-3%-50500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Manager (Architecture)",
            NoOfPosts: "04",
            PayScale: "24900-3%-50500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Manager (Public Relations)",
            NoOfPosts: "05",
            PayScale: "24900-3%-50500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Manager (Airport Operations)",
            NoOfPosts: "17",
            PayScale: "24900-3%-50500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Junior Executive (Corporate Affairs)",
            NoOfPosts: "02",
            PayScale: "16400-3%-40500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Junior Executive (Finance)",
            NoOfPosts: "30",
            PayScale: "16400-3%-40500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Junior Executive (Technical)",
            NoOfPosts: "30",
            PayScale: "16400-3%-40500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Junior Executive (Cargo)",
            NoOfPosts: "25",
            PayScale: "16400-3%-40500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Junior Executive (Human Resource)",
            NoOfPosts: "30",
            PayScale: "16400-3%-40500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Junior Executive (Commercial)",
            NoOfPosts: "20",
            PayScale: "16400-3%-40500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Junior Executive (Law)",
            NoOfPosts: "15",
            PayScale: "16400-3%-40500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Junior Executive (Official Language) ",
            NoOfPosts: "02",
            PayScale: "16400-3%-40500",
            GradePay: "",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Indian Navy",
        ApplicationEndDt: "01/05/2015",
        DetailedNotification: "http://nausena-bharti.nic.in/pdf/Multiqual/logeduatcjan16.pdf",
        GoToSite: "http://nausena-bharti.nic.in/forthcomingOfficer.php",
        ApplicationFee: "",
        PublishedOn: "11/04/2015",
        Age: "--",
        Logo: "indiannavy.jpg",
        AltText: "Recruitment In Permanent Commission and Short Service Commission",
        JobDetails: [{
            Designation: "Logistics(Only For Male Candidates)",
            NoOfPosts: "",
            PayScale: "PB -3 / 15,600 - 39,100",
            GradePay: "",
            Eligibility: "B.E./B.Tech in any discipline with First Class"
        },
        {
            Designation: "Education(For Male And Female Candidates)",
            NoOfPosts: "",
            PayScale: "PB -3 / 15,600 - 39,100",
            GradePay: "",
            Eligibility: "B.E./B.Tech in any discipline with First Class"
        },
        {
            Designation: "ATC(For Male And Female Candidates)",
            NoOfPosts: "",
            PayScale: "PB -3 / 15,600 - 39,100",
            GradePay: "",
            Eligibility: "B.E./B.Tech in any discipline with First Class"
        }
        ]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Directorate Of Sports And Youth Welfare",
        ApplicationEndDt: "18/04/2015",
        DetailedNotification: "http://career.dsywmp.gov.in/instruction.pdf",
        GoToSite: "http://career.dsywmp.gov.in/",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "mppsc.jpg",
        AltText: "DSYWMP Recruitment Coaches",
        JobDetails: [{
            Designation: "Coaches",
            NoOfPosts: "08",
            PayScale: "40,000 - 150,000 p.m.",
            GradePay: "",
            Eligibility: ""
        }]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Maulana Azad National Urdu University",
        ApplicationEndDt: "24/04/2015",
        DetailedNotification: "http://www.manuu.ac.in/employment/Notification_Apr5.pdf",
        GoToSite: "http://www.manuu.ac.in/",
        ApplicationFee: "500",
        PublishedOn: "05/04/2015",
        Age: "--",
        Logo: "manuu.jpg",
        AltText: "MANUU Recruitment Of Assistant Professors / Professors / Associate Professors / Principal / Post Graduate Teacher(PGT)",
        JobDetails: [{
            Designation: "Professor",
            NoOfPosts: "08",
            PayScale: "37,400 - 67,000",
            GradePay: "10,000",
            Eligibility: ""
        },
        {
            Designation: "Associate Professors",
            NoOfPosts: "15",
            PayScale: "37,400 - 67,000",
            GradePay: "9,000",
            Eligibility: ""
        },
        {
            Designation: "Assistant Professors(MANUU Arts and Science College For Women)",
            NoOfPosts: "03",
            PayScale: "15,600 - 39,100",
            GradePay: "6,000",
            Eligibility: ""
        },
        {
            Designation: "Associate Professors(MANUU Arts and Science College For Women)",
            NoOfPosts: "04",
            PayScale: "37,400 - 67,000",
            GradePay: "9,000",
            Eligibility: ""
        },
        {
            Designation: "Assistant Professors",
            NoOfPosts: "08",
            PayScale: "15,600 - 39,100",
            GradePay: "6,000",
            Eligibility: ""
        },
        {
            Designation: "Principal",
            NoOfPosts: "01",
            PayScale: "37,400 - 67,000",
            GradePay: "9,000",
            Eligibility: ""
        },
        {
            Designation: "Professor",
            NoOfPosts: "08",
            PayScale: "15,600 - 39,100",
            GradePay: "6,000",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Uttarakhand Public Service Commission",
        ApplicationEndDt: "22/04/2015",
        DetailedNotification: "http://ukpsc.gov.in/files/je2013.pdf",
        GoToSite: "http://ukpsc.gov.in/recruitment/view/353",
        ApplicationFee: "300",
        PublishedOn: "07/04/2015",
        Age: "--",
        Logo: "ukpsc.jpg",
        AltText: "UKPSC Comined Junior Engineer Exam",
        JobDetails: [{
            Designation: "Junior Engineer",
            NoOfPosts: "578",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        }]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Center For Development Of Advanced Computing",
        ApplicationEndDt: "23/04/2015",
        DetailedNotification: "http://www.cdac.in/index.aspx?id=ca_pune_april_2015",
        GoToSite: "http://www.cdac.in/index.aspx?id=ca_pune_april_2015",
        ApplicationFee: "300",
        PublishedOn: "07/04/2015",
        Age: "--",
        Logo: "cdac.jpg",
        AltText: "CDAC Invites Applications for Project Engineers (Consolidated Salary)",
        JobDetails: [{
            Designation: "Project Engineer - Software Development",
            NoOfPosts: "40",
            PayScale: "31,000 pm",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Project Engineer - Software Development",
            NoOfPosts: "08",
            PayScale: "37,000 pm",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Project Engineer - System Administration",
            NoOfPosts: "02",
            PayScale: "31,000 pm",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Project Engineer - Testing",
            NoOfPosts: "01",
            PayScale: "31,000 pm",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Project Engineer - Linguistics",
            NoOfPosts: "02",
            PayScale: "37,000 pm",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Project Engineer - Testing And Crawl Engineer",
            NoOfPosts: "40",
            PayScale: "31,000 pm",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Project Engineer - Meteorology",
            NoOfPosts: "01",
            PayScale: "37,000 pm",
            GradePay: "",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Nuclear Power Corporation Of India Ltd.",
        ApplicationEndDt: "31/05/2015",
        DetailedNotification: "http://npcilcareers.co.in/MainSite/DefaultInfo.aspx?info=Oppurtunities",
        GoToSite: "http://npcilcareers.co.in/MainSite/DefaultInfo.aspx?info=Oppurtunities",
        ApplicationFee: "",
        PublishedOn: "01/05/2015",
        Age: "--",
        Logo: "npcil.jpg",
        AltText: "NPCIL Special Recruitment Drive For SC/ST/OBC",
        JobDetails: [{
            Designation: "Scientific Officer 'D'",
            NoOfPosts: "05",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Technical Officer 'D'",
            NoOfPosts: "21",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Medical Officer 'D'",
            NoOfPosts: "03",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Medical Officer 'C'",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Deputy Manager(Finance And Accounts)",
            NoOfPosts: "07",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Deputy Manager(Contracts And Materials Management)",
            NoOfPosts: "04",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Technical Officer 'D'",
            NoOfPosts: "08",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Medical Officer 'C'(GDMO)",
            NoOfPosts: "02",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Scientific Officer 'C'",
            NoOfPosts: "10",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Deputy Fire Officer(DCFO)",
            NoOfPosts: "04",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Deputy Manager(Human Resources)",
            NoOfPosts: "11",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Deputy Manager(Finance And Accounts)",
            NoOfPosts: "23",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Deputy Manager(Contracts And Materials Management)",
            NoOfPosts: "10",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Deputy Manager(Hospitality Services)",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Deputy Manager(Public Relations)",
            NoOfPosts: "11",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Deputy Law Officer(DLO)",
            NoOfPosts: "02",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Deputy Manager(Security)",
            NoOfPosts: "12",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "Coffee Board",
        ApplicationEndDt: "05/05/2015",
        DetailedNotification: "http://www.indiacoffee.org/Tenders.aspx",
        GoToSite: "http://www.indiacoffee.org/Tenders.aspx",
        ApplicationFee: "500",
        PublishedOn: "11/03/2015",
        Age: "--",
        Logo: "indiacoffee.jpg",
        AltText: "Coffee Board Recruitment Of Extension Inspector",
        JobDetails: [{
            Designation: "Extension Inspector",
            NoOfPosts: "09",
            PayScale: "5,200 - 20,200",
            GradePay: "2,800",
            Eligibility: ""
        }]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "Assam Public Service Commission",
        ApplicationEndDt: "05/05/2015",
        DetailedNotification: "http://apsc.nic.in/Advertisement%208_2015.pdf",
        GoToSite: "http://apsc.nic.in/notice.asp",
        ApplicationFee: "",
        PublishedOn: "02/04/2015",
        Age: "--",
        Logo: "apsc.jpg",
        AltText: "APSC Recruitment Of Assistant Professors And Research Assistant",
        JobDetails: [{
            Designation: "Fishery Extension Officer",
            NoOfPosts: "52",
            PayScale: "12,000/- to 40,000",
            GradePay: "5,400",
            Eligibility: ""
        },
        {
            Designation: "Junior Engineer (Civil)",
            NoOfPosts: "32",
            PayScale: "5200 to 20,200",
            GradePay: "3,300",
            Eligibility: ""
        },
        {
            Designation: "Asstt. Food Analyst (Class-I)",
            NoOfPosts: "05",
            PayScale: "12,000/- to 40,000/- (PB-4)",
            GradePay: "5,400",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Assam Public Service Commission",
        ApplicationEndDt: "27/04/2015",
        DetailedNotification: "http://apsc.nic.in/Advertisement%206_2015..pdf",
        GoToSite: "http://apsc.nic.in/notice.asp",
        ApplicationFee: "",
        PublishedOn: "23/03/2015",
        Age: "--",
        Logo: "apsc.jpg",
        AltText: "APSC Recruitment Of Assistant Professors And Research Assistant",
        JobDetails: [{
            Designation: "Research Assistant",
            NoOfPosts: "10",
            PayScale: "8,000/- to 35,000/- PB-3",
            GradePay: "4,300",
            Eligibility: ""
        },
        {
            Designation: "Assistant Professors",
            NoOfPosts: "17",
            PayScale: "15,600/- to 39,100",
            GradePay: "6,600",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Central Institute Of Psychiatry",
        ApplicationEndDt: "30/04/2015",
        DetailedNotification: "http://www.cipranchi.nic.in/",
        GoToSite: "http://www.cipranchi.nic.in/",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "cip.jpg",
        AltText: "CIP Recruitment Of Staff Nurse",
        JobDetails: [{
            Designation: "Staff Nurse",
            NoOfPosts: "20",
            PayScale: "9,300 - 34,800",
            GradePay: "4,600",
            Eligibility: ""
        },
        {
            Designation: "Radiographer",
            NoOfPosts: "01",
            PayScale: "5,200 - 20,200",
            GradePay: "2,800",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "IIT Patna",
        ApplicationEndDt: "30/04/2015",
        DetailedNotification: "http://iitp.ac.in/images/faccareer/Advt-01-04-15.pdf",
        GoToSite: "http://iitp.ac.in/index.php/notice-board/1277-advt-nonfaculty.html",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "iitp.jpg",
        AltText: "IITP Recruitment In Administrative and Technical Cadre",
        JobDetails: [{
            Designation: "Deputy Registrar",
            NoOfPosts: "01",
            PayScale: "PB-3",
            GradePay: "7,600",
            Eligibility: ""
        },
        {
            Designation: "Medical Officer",
            NoOfPosts: "01",
            PayScale: "PB-3",
            GradePay: "5,400",
            Eligibility: ""
        },
        {
            Designation: "Security Officer",
            NoOfPosts: "01",
            PayScale: "PB-3",
            GradePay: "5,400",
            Eligibility: ""
        },
        {
            Designation: "PS to Registrar",
            NoOfPosts: "01",
            PayScale: "PB-2",
            GradePay: "4,800",
            Eligibility: ""
        },
        {
            Designation: "Audit/Accounts Office",
            NoOfPosts: "01",
            PayScale: "PB-2",
            GradePay: "4,600",
            Eligibility: ""
        },
        {
            Designation: "Senior Library Information Assistant",
            NoOfPosts: "01",
            PayScale: "PB-2",
            GradePay: "4,200",
            Eligibility: ""
        },
        {
            Designation: "Junior Technical Superitendent",
            NoOfPosts: "01",
            PayScale: "PB-2",
            GradePay: "4,200",
            Eligibility: ""
        },
        {
            Designation: "Junior Engineer",
            NoOfPosts: "01",
            PayScale: "PB-2",
            GradePay: "4,200",
            Eligibility: ""
        },
        {
            Designation: "Physical Training Instructor",
            NoOfPosts: "01",
            PayScale: "PB-2",
            GradePay: "4,200",
            Eligibility: ""
        },
        {
            Designation: "Pharmacist",
            NoOfPosts: "01",
            PayScale: "PB-1",
            GradePay: "2,800",
            Eligibility: ""
        },
        {
            Designation: "Junior Accountant",
            NoOfPosts: "01",
            PayScale: "PB-1",
            GradePay: "2,400",
            Eligibility: ""
        },
         {
             Designation: "Junior Assistant",
             NoOfPosts: "05",
             PayScale: "PB-1",
             GradePay: "2,000",
             Eligibility: ""
         },
          {
              Designation: "Junior Mechanic",
              NoOfPosts: "01",
              PayScale: "PB-1",
              GradePay: "2,000",
              Eligibility: ""
          }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Rajiv Gandhi National Institute Of Youth And Development",
        ApplicationEndDt: "30/04/2015",
        DetailedNotification: "http://rgniyd.gov.in/sites/default/files/pdfs/advt_prof/assist_pro/associate_professor.pdf",
        GoToSite: "http://rgniyd.gov.in/node/710",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "rgniyd.jpg",
        AltText: "Recruitment Of Assistant Professors / Associate Professors at RGNIYD",
        JobDetails: [{
            Designation: "Associate Professor",
            NoOfPosts: "05",
            PayScale: "37,400 - 67,500",
            GradePay: "9,000",
            Eligibility: ""
        },
        {
            Designation: "Assistant Professor",
            NoOfPosts: "05",
            PayScale: "15,600 - 39,100",
            GradePay: "6,000",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Rajiv Gandhi National Institute Of Youth And Development",
        ApplicationEndDt: "06/05/2015",
        DetailedNotification: "http://rgniyd.gov.in/sites/default/files/pdfs/advt_prof/prof_advt_02_03_1.pdf",
        GoToSite: "http://www.rgniyd.gov.in/content/invites-application-posts-professors",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "rgniyd.jpg",
        AltText: "Recruitment Of Professors at RGNIYD",
        JobDetails: [{
            Designation: "Professor",
            NoOfPosts: "05",
            PayScale: "37,400 - 67,500",
            GradePay: "10,000",
            Eligibility: ""
        }]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Security Printing And Mining Corporation Of India Ltd",
        ApplicationEndDt: "27/04/2015",
        DetailedNotification: "http://www.spmcil.com/UploadDocument/Advt%2001-2015-%20Manager%20%20Dy.%20Manager.f6350551-e3b9-41ee-b6d5-4c6e8f7fe5b0.pdf",
        GoToSite: "http://www.spmcil.com/Interface/JobOpenings.aspx",
        ApplicationFee: "100",
        PublishedOn: "28/03/2015",
        Age: "--",
        Logo: "spmcil.jpg",
        AltText: "Recruitment Of Managers at SPMCIL",
        JobDetails: [{
            Designation: "Manager (R&D)",
            NoOfPosts: "01",
            PayScale: "29,100 - 54,500",
            GradePay: "",
            Eligibility: "1st class B.Tech/B.E. in the area of Mechanical/Electrical/Electronics/Chemical/ Metallurgy/Pulp & Paper or 1st class M.Sc in Chemistry from a recognized University/Institution."
        },
        {
            Designation: "Deputy Manager (R&D)",
            NoOfPosts: "01",
            PayScale: "29,100 - 54,500",
            GradePay: "",
            Eligibility: "1st Class B.Tech. / B.E. in the area of Mechanical / Electrical / Electronics / Chemical /Metallurgy / Pulp & Paper or 1st Class M.Sc. in Chemistry from a recognized University/Institution."
        },
        {
            Designation: "Deputy Manager (Technology)",
            NoOfPosts: "01",
            PayScale: "24,900 - 50,500",
            GradePay: "",
            Eligibility: "1st Class B.Tech./B.E. degree in Electrical / Mechanical / Electronics / Pulp & Paper / Chemical/ Metallurgy Engineering from a recognized University/Institution."
        },
        {
            Designation: "Officer (OL)",
            NoOfPosts: "01",
            PayScale: "16,400 - 40,500",
            GradePay: "",
            Eligibility: "1st Class Master’s Degree from a recognized University in Hindi or English with English/Hindi subject at Graduation level (i.e. Hindi in case the candidate is Post-graduate in English and vice-versa)."
        },
        {
            Designation: "Secretarial Assistant",
            NoOfPosts: "06",
            PayScale: "5,200 - 20,200",
            GradePay: "2400",
            Eligibility: " Graduate with at least 55% marks from a recognised university, computer knowledge, Stenography @ 80 wpm and typing speed of 40 wpm."
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Staff Selection Commission",
        ApplicationEndDt: "26/04/2015",
        DetailedNotification: "http://ssc.nic.in/notice/examnotice/Notice_SI_in_CAPFs_ASI_and_Delhi_Police_2015_27_03_2015.pdf",
        GoToSite: "http://ssconline.nic.in/",
        ApplicationFee: "100",
        PublishedOn: "2015",
        Age: "--",
        Logo: "ssc.jpg",
        AltText: "Recruitment Of Sub Inspectors in Delhi Police, CAPF and CISF",
        JobDetails: [{
            Designation: "Sub Inspectors in Central Armed Forces CAPF",
            NoOfPosts: "1706",
            PayScale: "9300 - 34800",
            GradePay: "4200",
            Eligibility: ""
        },
        {
            Designation: "Sub Inspectors in Delhi Police",
            NoOfPosts: "95",
            PayScale: "9300 - 34800",
            GradePay: "4200",
            Eligibility: ""
        },
        {
            Designation: "Sub Inspectors in CISF",
            NoOfPosts: "1101",
            PayScale: "5200 - 20200",
            GradePay: "2800",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Union Public Service Commission",
        ApplicationEndDt: "16/04/2015",
        DetailedNotification: "http://upsc.gov.in/recruitment/advt/2015/advt.06_2015.pdf",
        GoToSite: "http://upsconline.nic.in/ora/VacancyNoticePub.php",
        ApplicationFee: "25",
        PublishedOn: "28/03/2015",
        Age: "--",
        Logo: "upsc.jpg",
        AltText: "Recruitment OF Professors And Assistant Professor",
        JobDetails: [{
            Designation: "Assistant Director (Cost)",
            NoOfPosts: "12",
            PayScale: "15,600 - 39,100",
            GradePay: "5,400",
            Eligibility: "Qualifications recognized for enrolment in the Register of Members of Institute of Chartered Accountants of India or of the Institute of Cost Accountants of India"
        },
        {
            Designation: "Assistant Mineral Economist (Intelligence)",
            NoOfPosts: "03",
            PayScale: "15,600 - 39,100",
            GradePay: "5,400",
            Eligibility: "Master's Degree in Geology or Applied Geology or Economics or Degree in Mining Engineering from a recognised University or its equivalent"
        },
        {
            Designation: "Assistant Town And Country Planner",
            NoOfPosts: "01",
            PayScale: "15,600 - 39,100",
            GradePay: "5,400",
            Eligibility: "Post Graduate Degree in Town or City or Urban or Housing or Country or Rural or Infrastructure or Regional or Transport or Environmental Planning from a recognised University or Institute OR Bachelor of Planning or Bachelor of Technology in Planning from a recognised University or Institute with three years experience in the field of Urban or Regional Planning in the Central Government or State Governments or Union territories or Universities or Recognised Research Institutions or Public Sector Undertakings or Semi-Government or Statutory or Autonomous Organisations. "
        }
        ]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "King George's Medical University, Lucknow",
        ApplicationEndDt: "30/04/2015",
        DetailedNotification: "http://kgmu.org/upload_file/user_download/d0eab0fada62e79099553eb409c8fcb1.pdf",
        GoToSite: "http://kgmu.org/job-opportunities.php",
        ApplicationFee: "1500",
        PublishedOn: "26/03/2015",
        Age: "--",
        Logo: "king_george_lucknow.jpg",
        AltText: "Recruitment OF Professors And Assistant Professor",
        JobDetails: [{
            Designation: "Professors",
            NoOfPosts: "02",
            PayScale: "37,400 - 67,000",
            GradePay: "10,000",
            Eligibility: ""
        },
        {
            Designation: "Assistant Professor",
            NoOfPosts: "34",
            PayScale: "15,600 - 39,100",
            GradePay: "6,600",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Uttar Pradesh Public Service Commission",
        ApplicationEndDt: "18/04/2015",
        DetailedNotification: "http://uppsc.up.nic.in/View_Enclosure.aspx?ID=520&flag=E&FID=346",
        GoToSite: "http://uppsc.up.nic.in/Notifications.aspx",
        ApplicationFee: "95",
        PublishedOn: "17/03/2015",
        Age: "--",
        Logo: "uppsc.jpg",
        AltText: "UPPSC Recruitmenf of Various Officers",
        JobDetails: [{
            Designation: "Technical Assistant Grade II",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Inspector Cookery",
            NoOfPosts: "02",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Lecturer",
            NoOfPosts: "03",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Research Officer",
            NoOfPosts: "09",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Tracer",
            NoOfPosts: "03",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Research Assistant(Engineering)",
            NoOfPosts: "03",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Engineering Assistant",
            NoOfPosts: "02",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Assistant Statistical Officer",
            NoOfPosts: "373",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Senior Milk Officer",
            NoOfPosts: "08",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Mines Inspector",
            NoOfPosts: "45",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Professor Shalya Tantra",
            NoOfPosts: "02",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Professor Anatomy",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Lecturer(Engineering)",
            NoOfPosts: "36",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Lecturer Stenography",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Workshop Superitendent",
            NoOfPosts: "05",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Training And Placement Officer",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Research Officer",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Publication Officer",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Workshop Instructor",
            NoOfPosts: "60",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Research Officer / Technical Assistant(Civil Engineering)",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Lecturer",
            NoOfPosts: "117",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Lecturer(Engineering Branch)",
            NoOfPosts: "113",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Lecturer(Non Engineering Branch)",
            NoOfPosts: "30",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Junior Engineer",
            NoOfPosts: "22",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Assistant Manager(Non Technical)",
            NoOfPosts: "63",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Senior Technical Assistant",
            NoOfPosts: "02",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Can Fin Homes Ltd.",
        ApplicationEndDt: "07/04/2015",
        DetailedNotification: "http://www.canfinhomes.com/announcements.html",
        GoToSite: "http://www.canfinhomes.com/announcements.html",
        ApplicationFee: "",
        PublishedOn: "100",
        Age: "--",
        Logo: "canfinhomes.jpg",
        AltText: "Can Fin Homes Ltd. Recruitment Of Junior Officers",
        JobDetails: [{
            Designation: "Junior Officers",
            NoOfPosts: "30",
            PayScale: "16,000 p.m.",
            GradePay: "",
            Eligibility: ""
        }]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Mahesh Bank",
        ApplicationEndDt: "13/04/2015",
        DetailedNotification: "http://www.apmaheshbank.com/sites/all/themes/maheshbank/files/po-recruitments-2015.pdf",
        GoToSite: "http://www.apmaheshbank.com/careers",
        ApplicationFee: "600",
        PublishedOn: "31/03/2015",
        Age: "--",
        Logo: "mahesh_bank.jpg",
        AltText: "Mahesh Bank Recruitment of Probationary Officers",
        JobDetails: [{
            Designation: "Probationary Officers",
            NoOfPosts: "",
            PayScale: "14,500 - 25,700",
            GradePay: "",
            Eligibility: "Second Class Degree of a recognized University / Post Graduate / Double Graducation with minimum 50% marks. The Candidate should have passed the degree examination in single attempt."
        }]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Indian Navy",
        ApplicationEndDt: "28/04/2015",
        DetailedNotification: "http://www.joinindiannavy.gov.in/pdf/pilotobserver/sscpilobs.pdf",
        GoToSite: "http://www.joinindiannavy.gov.in/forthcomingOfficer.php",
        ApplicationFee: "",
        PublishedOn: "28/03/2015",
        Age: "--",
        Logo: "indiannavy.jpg",
        AltText: "Indian Navy Recruitment Pilot / Observer",
        JobDetails: [{
            Designation: "Pilot / Observer",
            NoOfPosts: "",
            PayScale: "87600 p.m.",
            GradePay: "",
            Eligibility: ""
        }]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Mangalore Refineries Private Limited",
        ApplicationEndDt: "04/04/2015",
        DetailedNotification: "http://www.mrpl.co.in/sites/default/files/WEB%20ADVT%20NO%2056_0.pdf",
        GoToSite: "http://www.mrpl.co.in/careers",
        ApplicationFee: "",
        PublishedOn: "",
        Age: "--",
        Logo: "mrpl.jpg",
        AltText: "MRPL Recruitment For Management Cadre Employees",
        JobDetails: [{
            Designation: "Chief Manager (Polymer Business ) E6 grade",
            NoOfPosts: "01",
            PayScale: "51300 - 73000",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Sr. Manager (Marketing Operations ) E5 grade",
            NoOfPosts: "01",
            PayScale: "43200 - 66000",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Sr. Manager (Sales ) E5 grade",
            NoOfPosts: "01",
            PayScale: "43200 - 66000",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Manager ( Marketing Operations ) E4 grade",
            NoOfPosts: "01",
            PayScale: "36600 - 62000 ",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Manager ( Consumer Sales ) E4 grade",
            NoOfPosts: "01",
            PayScale: "36600 - 62000",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Manager ( Finance) E4 Grade",
            NoOfPosts: "01",
            PayScale: "36600 - 62000",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Deputy Company Secretary- E4 grade",
            NoOfPosts: "01",
            PayScale: "36600 - 62000",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Deputy Manager (Polymer Sales) E3 Grade",
            NoOfPosts: "01",
            PayScale: "32900 - 58000",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Deputy Manager (Technical Sales) - Polymers E3 grade",
            NoOfPosts: "02",
            PayScale: "32900 - 58000",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Sr. Executive ( Marketing Finance ) E2 grade",
            NoOfPosts: "02",
            PayScale: "29100 - 54500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Senior Executives (Marketing Operations ) E2 grade",
            NoOfPosts: "03",
            PayScale: "29100 - 54500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Senior. Executives (Sales) E2 grade ",
            NoOfPosts: "03",
            PayScale: "29100 - 54500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Senior Executives (Retail Engg) E2 grade ",
            NoOfPosts: "01",
            PayScale: "29100 - 54500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Sr. Executive (Corporate Communications) –E2 grade",
            NoOfPosts: "01",
            PayScale: "29100 - 54500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Engineer (Fire) – E 1 grade",
            NoOfPosts: "01",
            PayScale: "24900 - 50500",
            GradePay: "",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Indian National Centere For Ocean Information Studies",
        ApplicationEndDt: "27/03/2015",
        DetailedNotification: "http://www.incois.gov.in/jobs/vac0215t/docs/advertisement_RMT_0215.pdf",
        GoToSite: "http://www.incois.gov.in/portal/temporary.jsp",
        ApplicationFee: "",
        PublishedOn: "",
        Age: "--",
        Logo: "incois.jpg",
        AltText: "INCOIS Recruitment for Officers on Contract",
        JobDetails: [{
            Designation: "Project Scientist ‘B’",
            NoOfPosts: "06",
            PayScale: "49,770 p.m.",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Senior Executive",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Project Assistant",
            NoOfPosts: "02",
            PayScale: "31,995 p.m.",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Personal Assistant(Coordinator-III)",
            NoOfPosts: "01",
            PayScale: "31,995 p.m.",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Office Assistant",
            NoOfPosts: "01",
            PayScale: "31,995 p.m.",
            GradePay: "",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Staff Selection Commission",
        ApplicationEndDt: "21/04/2015",
        DetailedNotification: "http://www.sscwr.net/",
        GoToSite: "http://www.sscwr.net/",
        ApplicationFee: "50",
        PublishedOn: "",
        Age: "--",
        Logo: "ssc.jpg",
        AltText: "SSC Recruitment for Multiple Posts",
        JobDetails: [{
            Designation: "Court Master",
            NoOfPosts: "03",
            PayScale: "9300 - 34800",
            GradePay: "4200",
            Eligibility: ""
        },
        {
            Designation: "Library And Information Assistant",
            NoOfPosts: "01",
            PayScale: "9300 - 34800",
            GradePay: "4200",
            Eligibility: ""
        },
        {
            Designation: "Speech Therapist",
            NoOfPosts: "03",
            PayScale: "9300 - 34800",
            GradePay: "4200",
            Eligibility: ""
        },
        {
            Designation: "Technical Superintendant(Weaving)",
            NoOfPosts: "04",
            PayScale: "9300 - 34800",
            GradePay: "4200",
            Eligibility: ""
        },
        {
            Designation: "Textile Designer",
            NoOfPosts: "02",
            PayScale: "9300 - 34800",
            GradePay: "4200",
            Eligibility: ""
        },
        {
            Designation: "Technical Superintendant(Processing)",
            NoOfPosts: "01",
            PayScale: "9300 - 34800",
            GradePay: "4200",
            Eligibility: ""
        },
        {
            Designation: "Wildlife Inspector",
            NoOfPosts: "01",
            PayScale: "9300 - 34800",
            GradePay: "4200",
            Eligibility: ""
        },
        {
            Designation: "Senior Technical Assistant",
            NoOfPosts: "02",
            PayScale: "9300 - 34800",
            GradePay: "4200",
            Eligibility: ""
        },
        {
            Designation: "Field Inspector",
            NoOfPosts: "01",
            PayScale: "9300 - 34800",
            GradePay: "4200",
            Eligibility: ""
        },
        {
            Designation: "VTS Console Operator Gr II",
            NoOfPosts: "09",
            PayScale: "9300 - 34800",
            GradePay: "4200",
            Eligibility: ""
        },
        {
            Designation: "Scientific Assistant",
            NoOfPosts: "01",
            PayScale: "9300 - 34800",
            GradePay: "4200",
            Eligibility: ""
        },
        {
            Designation: "Junior Chemist",
            NoOfPosts: "07",
            PayScale: "5200 - 20200",
            GradePay: "2800",
            Eligibility: ""
        },
        {
            Designation: "Junior Librarian",
            NoOfPosts: "01",
            PayScale: "5200 - 20200",
            GradePay: "2800",
            Eligibility: ""
        },
        {
            Designation: "Taxidermist Grade-III",
            NoOfPosts: "01",
            PayScale: "5200 - 20200",
            GradePay: "2800",
            Eligibility: ""
        },
        {
            Designation: "Hostel Warden",
            NoOfPosts: "01",
            PayScale: "5200 - 20200",
            GradePay: "2400",
            Eligibility: ""
        },
        {
            Designation: "Fieldman",
            NoOfPosts: "02",
            PayScale: "5200 - 20200",
            GradePay: "1900",
            Eligibility: ""
        },
        {
            Designation: "Technical Superitendant(Weaving)",
            NoOfPosts: "07",
            PayScale: "9300 - 34800",
            GradePay: "4200",
            Eligibility: ""
        },
        {
            Designation: "Technical Superitendant(Processing)",
            NoOfPosts: "04",
            PayScale: "9300 - 34800",
            GradePay: "4200",
            Eligibility: ""
        },
        {
            Designation: "Technical Designer",
            NoOfPosts: "03",
            PayScale: "9300 - 34800",
            GradePay: "4200",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "National Institute of Unani Medicine",
        ApplicationEndDt: "19/04/2015",
        DetailedNotification: "http://www.nium.in/rtiofficers/rtimanualyrtilinks142682618711.pdf",
        GoToSite: "http://www.nium.in/careers.php",
        ApplicationFee: "",
        PublishedOn: "20/03/2015",
        Age: "--",
        Logo: "nium.jpg",
        AltText: "NIUM Recruitment of Professors and non teaching posts",
        JobDetails: [{
            Designation: "Professor",
            NoOfPosts: "06",
            PayScale: "37,400 – 67,000",
            GradePay: "8700",
            Eligibility: "Degree in Unani Medicine with 60% marks from a University established by Law or Statutory board / Faculty / Examining Body of Indian medicine included in the II schedule of IMCC Act, 1970. 2) Post Graduate qualification in Unani Medicine in the concerned discipline from a recognized University established by Law or Statutory board / Faculty / Examining Body of Indian medicine included in the II schedule of IMCC Act, 1970. 3) Teaching experience in arecognized Institution for 10 years. 4) Original published papers / books on the subject. "
        },
        {
            Designation: "Reader",
            NoOfPosts: "01",
            PayScale: "15600 - 39100",
            GradePay: "7600",
            Eligibility: ""
        },
         {
             Designation: "Lecturer",
             NoOfPosts: "01",
             PayScale: "15600 - 39100",
             GradePay: "5400",
             Eligibility: ""
         },
          {
              Designation: "Anasthetist",
              NoOfPosts: "02",
              PayScale: "15600 - 39100",
              GradePay: "5400",
              Eligibility: ""
          },
         {
             Designation: "Resident Medical Officer",
             NoOfPosts: "01",
             PayScale: "15600 - 39100",
             GradePay: "5400",
             Eligibility: ""
         },
          {
              Designation: "Radiologist",
              NoOfPosts: "01",
              PayScale: "15600 - 39100",
              GradePay: "5400",
              Eligibility: ""
          },
        {
            Designation: "Staff Nurse",
            NoOfPosts: "04",
            PayScale: "9300 - 34800",
            GradePay: "4200",
            Eligibility: ""
        },
        {
            Designation: "EEG Technician",
            NoOfPosts: "01",
            PayScale: "5200 - 20200",
            GradePay: "2800",
            Eligibility: ""
        },
        {
            Designation: "Store Keeper/Upper Division Clerk",
            NoOfPosts: "01",
            PayScale: "5200 - 20200",
            GradePay: "2400",
            Eligibility: ""
        },
        {
            Designation: "Jr. Stenographer",
            NoOfPosts: "02",
            PayScale: "5200 - 20200",
            GradePay: "2400",
            Eligibility: ""
        },
        {
            Designation: "Electrician",
            NoOfPosts: "01",
            PayScale: "5200 - 20200",
            GradePay: "2400",
            Eligibility: ""
        },
        {
            Designation: "LDC / Cashier",
            NoOfPosts: "03",
            PayScale: "5200 - 20200",
            GradePay: "1900",
            Eligibility: ""
        },
        {
            Designation: "Jr. Library Assistant",
            NoOfPosts: "01",
            PayScale: "5200 - 20200",
            GradePay: "1900",
            Eligibility: ""
        }
        ]
        },
    {
        HeadingTheme: "panel panel-success",
        Title: "Bharat Electronics Limited",
        ApplicationEndDt: "26/03/2015",
        DetailedNotification: "http://bel-india.com/sites/default/files/Recruitments/Web%20Ad-Comp%20Smart%20Cards-26.03.2015.pdf",
        GoToSite: "http://bel-india.com/recruitment",
        ApplicationFee: "",
        PublishedOn: "19/03/2015",
        Age: "--",
        Logo: "bel.jpg",
        AltText: "BEL Recruitment of Engineers",
        JobDetails: [{
            Designation: "Data Center & Application Development",
            NoOfPosts: "19",
            PayScale: "18,000 p.m.",
            GradePay: "",
            Eligibility: "First class in BE/ B.Tech (Computer Science, Computer Engineering, Computer Science and Information Technology, Information Technology, Electronics & Communication, Electrical & Electronics, Telecommunication, MCA, M.Sc (CS, IT) from a recognized University/ institution."
        },
        {
            Designation: "Technical Support & Development",
            NoOfPosts: "08",
            PayScale: "18,000 p.m.",
            GradePay: "",
            Eligibility: "First class in BE/ B.Tech (Computer Science, Computer Engineering, Computer Science and Information Technology, Information Technology, Electronics, Electronics & Communication, Electrical & Electronics, Telecommunication, Electronics , MCA, M.Sc (CS, IT) from a recognized University/ institution."
        },
        {
            Designation: " PROJECT COORDINATION & LOGISTICS",
            NoOfPosts: "06",
            PayScale: "18,000 p.m.",
            GradePay: "",
            Eligibility: "First class for General & OBC candidates and Pass Class for SC/ST/PWD (People with Disability) in BE/ B.Tech (Industrial Engineering/ Mechanical) from a recognized University/ institution."
        }
        ]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Gujrat Public Service Commission",
        ApplicationEndDt: "31/03/2015",
        DetailedNotification: "http://www.gpsc.gujarat.gov.in/pdf/Advt-51-2014-15-Gujarati-English.pdf",
        GoToSite: "http://www.gpsc.gujarat.gov.in/advertisements.html",
        ApplicationFee: "",
        PublishedOn: "12/03/2015",
        Age: "--",
        Logo: "gpsc.jpg",
        AltText: "Gujrat Public Service Commission: GPSC Recruitment of Section Officers",
        JobDetails: [{
            Designation: "Deputy Section Officer (Secretariate)",
            NoOfPosts: "318",
            PayScale: "9300 - 34800",
            GradePay: "4400",
            Eligibility: "Graduation Degree"
        },
        {
            Designation: "Deputy Section Officer (Gujarat Legislature Secretariate) ",
            NoOfPosts: "10",
            PayScale: "9300 - 34800",
            GradePay: "4400",
            Eligibility: "Graduation Degree"
        },
        {
            Designation: "Deputy Section Officer (Gujarat Public Service Commission) ",
            NoOfPosts: "05",
            PayScale: "9300 - 34800",
            GradePay: "4400",
            Eligibility: "Graduation Degree"
        },
        {
            Designation: "Deputy Section Officer(Gujarat Public Service Commission) ",
            NoOfPosts: "400",
            PayScale: "9300 - 34800",
            GradePay: "4400",
            Eligibility: "Graduation Degree"
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Oil And Natural Gas Corporation Limited",
        ApplicationEndDt: "10/04/2015",
        DetailedNotification: "http://www.ongcindia.com/job/receng.pdf",
        GoToSite: "http://ongcindia.ongc.co.in/wps/wcm/connect/ongcindia/home/career/recruitment+notices/recruitment-gt-trainees2014",
        ApplicationFee: "",
        PublishedOn: "21/03/2015",
        Age: "--",
        Logo: "ongc.jpg",
        AltText: "ONGC Recruitment of Graduate Trainees through GATE",
        JobDetails: [{
            Designation: "Graduate Trainee",
            NoOfPosts: "745",
            PayScale: "24900 - 50500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Assistant Executive Engineer(Environment)",
            NoOfPosts: "06",
            PayScale: "24900 - 50500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Finance And Accounts",
            NoOfPosts: "56",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Fire Officer",
            NoOfPosts: "08",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "HR Executive",
            NoOfPosts: "27",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Medical Officer",
            NoOfPosts: "24",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Security Officer",
            NoOfPosts: "07",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Central Madhya Pradesh Gramin Bank",
        ApplicationEndDt: "25/03/2015",
        DetailedNotification: "http://centralmpgraminbank.com/Recruitment%20advertisement_10032015.pdf",
        GoToSite: "http://centralmpgraminbank.com/advertisement.htm",
        ApplicationFee: "100",
        PublishedOn: "10/03/2015",
        Age: "--",
        Logo: "cmpgb.jpg",
        AltText: "CMPGB Recruitment for Officer Posts 2015 through IBPS",
        JobDetails: [{
            Designation: "Officer Scale‐III",
            NoOfPosts: "04",
            PayScale: "25700-800/5-29700-900/2-31500",
            GradePay: "",
            Eligibility: "RRBs CWE-III Advertisement published in Employment News/Rozgar Samachar Issue Dated 28th June–4th July, 2014released by IBPS and posted on the IBPS’s website www.ibps.in"
        },
        {
            Designation: "Officer Scale‐II   (General Banking Officer)",
            NoOfPosts: "23",
            PayScale: "19400-700/1-20100-800/10-28100",
            GradePay: "",
            Eligibility: "RRBs CWE-III Advertisement published in Employment News/Rozgar Samachar Issue Dated 28th June–4th July, 2014released by IBPS and posted on the IBPS’s website www.ibps.in"
        },
        {
            Designation: "Officer Scale‐II (IT)",
            NoOfPosts: "10",
            PayScale: "19400-700/1-20100-800/10-28100",
            GradePay: "",
            Eligibility: "RRBs CWE-III Advertisement published in Employment News/Rozgar Samachar Issue Dated 28th June–4th July, 2014released by IBPS and posted on the IBPS’s website www.ibps.in"
        },
        {
            Designation: "Officer Scale‐II (CA)",
            NoOfPosts: "01",
            PayScale: "19400-700/1-20100-800/10-28100",
            GradePay: "",
            Eligibility: "RRBs CWE-III Advertisement published in Employment News/Rozgar Samachar Issue Dated 28th June–4th July, 2014released by IBPS and posted on the IBPS’s website www.ibps.in"
        },
        {
            Designation: "Officer Scale‐II (Law)",
            NoOfPosts: "10",
            PayScale: "19400-700/1-20100-800/10-28100",
            GradePay: "",
            Eligibility: "RRBs CWE-III Advertisement published in Employment News/Rozgar Samachar Issue Dated 28th June–4th July, 2014released by IBPS and posted on the IBPS’s website www.ibps.in"
        },
        {
            Designation: "Officer Scale‐I",
            NoOfPosts: "145",
            PayScale: " 14500-600/7-18700-700/2-20100-800/7-25700",
            GradePay: "",
            Eligibility: "RRBs CWE-III Advertisement published in Employment News/Rozgar Samachar Issue Dated 28th June–4th July, 2014released by IBPS and posted on the IBPS’s website www.ibps.in"
        },
        {
            Designation: "Office Assistant (Multipurpose)",
            NoOfPosts: "86",
            PayScale: "7200-400/3-8400-500/3-9900-600/4-12300-700/7-17200-1300/1-18500-800/1-19300",
            GradePay: "",
            Eligibility: "RRBs CWE-III Advertisement published in Employment News/Rozgar Samachar Issue Dated 28th June–4th July, 2014released by IBPS and posted on the IBPS’s website www.ibps.in"
        }
        ]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "Projects and Development India Limited",
        ApplicationEndDt: "25/03/2015",
        DetailedNotification: "http://careers.pdilin.com/15-mar-regular/",
        GoToSite: "http://careers.pdilin.com/15-mar-regular/",
        ApplicationFee: "",
        PublishedOn: "11/03/2015",
        Age: "--",
        Logo: "pdil.jpg",
        AltText: "PDIL Recruitment Multiple Posts 2015",
        JobDetails: [{
            Designation: "DY.General Manager(E6 Grade)",
            NoOfPosts: "",
            PayScale: "36600- 62000",
            GradePay: "",
            Eligibility: "Engineering Degree in: Chemical Technology"
        },
        {
            Designation: "Chief Engineer ( E5 Grade )",
            NoOfPosts: "",
            PayScale: "32900 - 58000",
            GradePay: "",
            Eligibility: "Engineering Degree in: Civil Structural Engineering"
        },
        {
            Designation: "Addl. Chief Engineer Chemical(E4 Grade )",
            NoOfPosts: "",
            PayScale: "29100-54500",
            GradePay: "",
            Eligibility: "Engineering Degree in: • Chemical • Chemical Technology"
        },
        {
            Designation: "Addl. Chief Engineer Mechanical (Machinery E4 Grade )",
            NoOfPosts: "",
            PayScale: "29100-54500",
            GradePay: "",
            Eligibility: "Engineering Degree in: •Mechanical"
        },
        {
            Designation: "Dy.Chief Engineer Chemical (E3 Grade)",
            NoOfPosts: "",
            PayScale: "24900 - 50500",
            GradePay: "",
            Eligibility: "Engineering Degree in: • Chemical • Chemical Technology"
        },
        {
            Designation: "Dy.Chief Engineer Civil (E3 Grade)",
            NoOfPosts: "",
            PayScale: "24900 - 50500",
            GradePay: "",
            Eligibility: "Engineering Degree in: • Civil • Structural Engineering"
        },
        {
            Designation: "DY. Manager Business Development(E3 Grade)",
            NoOfPosts: "",
            PayScale: "24900 - 50500",
            GradePay: "",
            Eligibility: "Degree in Mechanical/ Chemical Engineering preferably with MBA/PG Diploma of 2 years duration in management with specialization in Marketing Management"
        },
        {
            Designation: "DY. Manager Finance(E3 Grade)",
            NoOfPosts: "",
            PayScale: "24900 - 50500",
            GradePay: "",
            Eligibility: "CA / ICWA"
        },
        {
            Designation: "DY. Manager Materials Management(E3 Grade)",
            NoOfPosts: "",
            PayScale: "24900 - 50500",
            GradePay: "",
            Eligibility: "Degree in Engineering OR PG Degree/PG Diploma of 2 years duration in management with specialization in Materials Management"
        },
        {
            Designation: "Sr. Engineer Chemical( E2 Grade )",
            NoOfPosts: "",
            PayScale: "20600 - 46500",
            GradePay: "",
            Eligibility: "Engineering Degree in: • Chemical • Chemical Technology"
        },
        {
            Designation: "Sr. Engineer Civil( E2 Grade )",
            NoOfPosts: "",
            PayScale: "20600 - 46500",
            GradePay: "",
            Eligibility: "Engineering Degree in: • Civil • Structural Engineering"
        },
        {
            Designation: "Sr. Engineer Civil(Constn.)( E2 Grade )",
            NoOfPosts: "",
            PayScale: "20600 - 46500",
            GradePay: "",
            Eligibility: "Engineering Degree in: • Civil • Structural Engineering"
        },
        {
            Designation: "Sr. Engineer Planning( E2 Grade )",
            NoOfPosts: "",
            PayScale: "20600 - 46500",
            GradePay: "",
            Eligibility: "Engineering Degree in: • Chemical • Chemical Technology."
        },
        {
            Designation: "Sr. Engineer Instrument-Inspection( E2 Grade )",
            NoOfPosts: "",
            PayScale: "20600 - 46500",
            GradePay: "",
            Eligibility: "Degree in Engineering in any discipline : Instrumentation & Control • Applied Instrumentation • Electronics & Instrumentation • Electronics, Instrumentation & Control • Electronics & Communication • Electronics & Telecommunication • Instrumentation • Electrical & Electronics"
        },
        {
            Designation: "Engineer Chemical( E1 Grade )",
            NoOfPosts: "",
            PayScale: "16400 - 40500",
            GradePay: "",
            Eligibility: "Engineering Degree in: • Chemical • Chemical Technology"
        },
        {
            Designation: "Engineer Civil( E1 Grade )",
            NoOfPosts: "",
            PayScale: "16400 - 40500",
            GradePay: "",
            Eligibility: "Engineering Degree in: • Civil • Structural Engineering"
        },
        {
            Designation: "Engineer Environment and Impact Analysis (EIA,RA & Hazop study)( E1 Grade )",
            NoOfPosts: "",
            PayScale: "16400 - 40500",
            GradePay: "",
            Eligibility: "Engineering Degree in: • Chemical • Environmental"
        },
        {
            Designation: "Engineer Environment and Impact Analysis-(ENV.LAB)( E1 Grade )",
            NoOfPosts: "",
            PayScale: "16400 - 40500",
            GradePay: "",
            Eligibility: "M.Sc./B.Tech. Degree as per CPCB Guidelines"
        },
        {
            Designation: "Engineer Mechanical (Piping)( E1 Grade )",
            NoOfPosts: "",
            PayScale: "16400 - 40500",
            GradePay: "",
            Eligibility: "Engineering Degree in • Mechanical"
        },
        {
            Designation: "Officer Business Development(E1 Grade)",
            NoOfPosts: "",
            PayScale: "16400 - 40500",
            GradePay: "",
            Eligibility: "Degree in Mechanical/ Chemical Engineering preferably with MBA/PG Diploma of 2 years duration in management with specialization in Marketing Management"
        },
        {
            Designation: "Officer Finance(E1 Grade)",
            NoOfPosts: "",
            PayScale: "16400 - 40500",
            GradePay: "",
            Eligibility: "CA / ICWA"
        },
        {
            Designation: "Officer C-P&A(E1 Grade)",
            NoOfPosts: "",
            PayScale: "16400 - 40500",
            GradePay: "",
            Eligibility: "Post Graduate Degree/ PG Diploma(2 years regular course) in Personnel Management/ HR/ PM&IR/ Labour & Social Welfare Labour Relations(LSW)/ MBA with major as PM&IR/ HR"
        },
        {
            Designation: "Officer Materials Management(E1 Grade)",
            NoOfPosts: "",
            PayScale: "16400 - 40500",
            GradePay: "",
            Eligibility: "Degree in Engineering OR PG Degree/PG Diploma of 2 years duration in management with specialization in Materials Management"
        },
        {
            Designation: "Research Chemist Catalyst Research(E0 Grade)",
            NoOfPosts: "",
            PayScale: "12600 - 32500",
            GradePay: "",
            Eligibility: "M.Sc.(Chemistry) with specialization in Physical/ Inorganic/ Applied Chemistry. Candidate must have passed with Physics, Chemistry and Mathematics in graduation level"
        },
        {
            Designation: "Jr.Designer Mechanical (Piping)(E0 Grade)",
            NoOfPosts: "",
            PayScale: "12600 - 32500",
            GradePay: "",
            Eligibility: "Diploma in : Mechanical"
        },
        {
            Designation: "Jr.Designer Chemical (3-D Modeller) (E0 Grade)",
            NoOfPosts: "",
            PayScale: "12600 - 32500",
            GradePay: "",
            Eligibility: "Diploma in : Mechanical"
        },
        {
            Designation: "Jr.Designer Mech.-Piping (3-D Modeller)(E0 Grade)",
            NoOfPosts: "",
            PayScale: "12600 - 32500",
            GradePay: "",
            Eligibility: "Diploma in : Mechanical"
        },
        {
            Designation: "Sr. Draftsman Chemical( WM6 Grade )",
            NoOfPosts: "",
            PayScale: "11900 - 30450",
            GradePay: "",
            Eligibility: "Diploma in Chemical"
        },
        {
            Designation: "Sr. Draftsman Mechanical (Piping)( WM6 Grade )",
            NoOfPosts: "",
            PayScale: "11900 - 30450",
            GradePay: "",
            Eligibility: "Diploma in Mechanical"
        },
        {
            Designation: "Sr. Draftsman Civil (3-D Modeller)( WM6 Grade )",
            NoOfPosts: "",
            PayScale: "11900 - 30450",
            GradePay: "",
            Eligibility: "Diploma in Civil"
        },
        {
            Designation: "Sr. Draftsman Mech.-Piping (3-D Modeller)( WM6 Grade )",
            NoOfPosts: "",
            PayScale: "11900 - 30450",
            GradePay: "",
            Eligibility: "Diploma in Mechanical"
        },
        {
            Designation: "Sr. Draftsman Chemical( WM6 Grade )",
            NoOfPosts: "",
            PayScale: "11900 - 30450",
            GradePay: "",
            Eligibility: "Diploma in Chemical"
        },
        {
            Designation: "Draftsman-I Mechanical (Piping)( WM5 Grade )",
            NoOfPosts: "",
            PayScale: "10550-25950",
            GradePay: "",
            Eligibility: "Diploma in : Mechanical"
        },
        {
            Designation: "Jr.Draftsman Mechanical (Piping)( WM4 Grade )",
            NoOfPosts: "",
            PayScale: "9750 - 23150",
            GradePay: "",
            Eligibility: "ITI, D/Manship"
        }
        ]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "Himachal Pradesh Public Service Commission",
        ApplicationEndDt: "10/04/2015",
        DetailedNotification: "http://hp.gov.in/hppsc/file.axd?file=2015%2f3%2fAdvertisement+No.+9_2014.pdf",
        GoToSite: "http://hp.gov.in/hppsc/page/Latest-Advertisement.aspx",
        ApplicationFee: "400",
        PublishedOn: "12/03/2015",
        Age: "--",
        Logo: "hppsc.jpg",
        AltText: "HPPSC  Recruitment Multiple Posts 2015",
        JobDetails: [{
            Designation: "Associate Professor (Forensic Medicine) Class-I (Gazetted)",
            NoOfPosts: "01",
            PayScale: "37400-67000",
            GradePay: "8900",
            Eligibility: "MD (Forensic Medicine)"
        },
        {
            Designation: "Assistant District Attorney, Class-I (Gazetted) (On Contract basis)",
            NoOfPosts: "26",
            PayScale: "10300 - 34800",
            GradePay: "4400",
            Eligibility: "i) Professional degree in Law from a recognized University or its equivalent; and ii) At least two years experience as an advocate. The candidate is required to produce experience certificate duly signed by the President, District Bar Association concerned/ Bar Council."
        },
        {
            Designation: "Divisional Fire Officer/ Fire Prevention Officer, ClassII (Non- Gazetted) (On contract basis)",
            NoOfPosts: "01",
            PayScale: "10300 - 34800",
            GradePay: "4200",
            Eligibility: "B.E. (Fire Engineering) Degree from the National Fire Service College, Nagpur."
        },
        {
            Designation: "Acharya (Sanskrit College Cadre) Class-I (Gazetted) (on Contract basis)",
            NoOfPosts: "06",
            PayScale: "21,600/- p.m. ",
            GradePay: "",
            Eligibility: "A good academic record with at least 55 % marks or an equivalent of 55 %, (Wherever the grading system is followed) in Acharya Degree in the relevant subject from an Indian University or an equivalent degree from foreign University recognized by the Govt. of India."
        },
        {
            Designation: "Name of the post: Principal, ITI, Class-I (Gazetted)",
            NoOfPosts: "42",
            PayScale: "10300 - 34800",
            GradePay: "5000",
            Eligibility: "Bachelor’s Degree of any Branch of Engineering or its equivalent from a recognized University with at least three years experience in reputed industrial concern or in a training institute. "
        },
        {
            Designation: "Name of the post: Professor (Mechanical Engineering) Class-I (Gazetted)",
            NoOfPosts: "03",
            PayScale: "37400-67000",
            GradePay: "10,000",
            Eligibility: "BE / B. Tech. and ME / M. Tech. in the relevant branch of Engineering with First Class or equivalent either in BE/B. Tech. or ME/M. Tech. and Ph.D. or equivalent in the appropriate discipline. Post Ph.D. publication and guiding Ph.D. students is highly desirable. "
        },
        {
            Designation: "Professor (Civil Engineering) Class-I (Gazetted)",
            NoOfPosts: "02",
            PayScale: "37400-67000",
            GradePay: "10,000",
            Eligibility: "BE / B. Tech. and ME / M. Tech. in the relevant branch of Engineering with First Class or equivalent either in BE/B. Tech. or ME/M. Tech. and Ph.D. or equivalent in the appropriate discipline. Post Ph.D. publication and guiding Ph.D. students is highly desirable. "
        },
        {
            Designation: "Professor (Textile Engineering) Class-I (Gazetted)",
            NoOfPosts: "02",
            PayScale: "37400-67000",
            GradePay: "10,000",
            Eligibility: "BE / B. Tech. and ME / M. Tech. in the relevant branch of Engineering with First Class or equivalent either in BE/B. Tech. or ME/M. Tech. and Ph.D. or equivalent in the appropriate discipline. Post Ph.D. publication and guiding Ph.D. students is highly desirable. "
        },
        {
            Designation: "Professor (Electronics & TeleCommunication Engineering) Class-I (Gazetted) ",
            NoOfPosts: "01",
            PayScale: "37400-67000",
            GradePay: "10,000",
            Eligibility: "BE / B. Tech. and ME / M. Tech. in the relevant branch of Engineering with First Class or equivalent either in BE/B. Tech. or ME/M. Tech. and Ph.D. or equivalent in the appropriate discipline. Post Ph.D. publication and guiding Ph.D. students is highly desirable. "
        },
        {
            Designation: "Lecturer (Civil Engineering) (Polytechnic) Class-I (Gazetted) (on Contract basis)",
            NoOfPosts: "08",
            PayScale: "21,000/- per month",
            GradePay: "",
            Eligibility: "First Class Bachelor’s Degree in appropriate branch of Engineering/ Technology or equivalent"
        },
        {
            Designation: "Lecturer in Electrical Engineering (Polytechnic), Class-I (Gazetted) (On Contract basis)",
            NoOfPosts: "05",
            PayScale: "21,000/- per month",
            GradePay: "",
            Eligibility: "First Class Bachelor’s Degree in appropriate branch of Engineering/ Technology or equivalent"
        },
        {
            Designation: "Assistant Architect, Class-I (Gazetted) (on Contract basis)",
            NoOfPosts: "02",
            PayScale: "21,000/- per month",
            GradePay: "",
            Eligibility: "(i) Degree in Architecture or its equivalent from a recognized University or an institute duly recognized by the Central/ State Govt. (ii) At least two years experience in the field on Architecture after qualifying for the degree in Architecture. Preference will be given to those Architects who get registration under the Architect Act, 1972."
        },
        {
            Designation: "Assistant Engineer (Civil), Class-I (on Contract basis)",
            NoOfPosts: "01",
            PayScale: "21,000/- per month",
            GradePay: "",
            Eligibility: "First Class Bachelor’s Degree in appropriate branch of Engineering/ Technology or equivalent"
        },
        {
            Designation: "Assistant Engineer (Mechanical), Class-I (on Contract basis)",
            NoOfPosts: "01",
            PayScale: "16650 - 39100",
            GradePay: "5800",
            Eligibility: "Regular / full time Degree in Civil/ Mech. from a recognized Institution / University duly approved by the AICTE or AMIE from Institution of Engineers (India Calcutta) or Ex-Servicemen, who have the relevant equivalence to a recognized Degree in above stream / discipline recognized by the Govt. of India, for AE (C/M) posts."
        },
        {
            Designation: "Assistant Engineer (Electrical), Class-I (on Contract basis)",
            NoOfPosts: "20",
            PayScale: "16650 - 39100",
            GradePay: "5800",
            Eligibility: "Regular / full time Degree in Electrical Engineering or Electrical & Electronics Engineering from a recognized Institution/ University duly approved by the AICTE or AMIE from Institution of Engineers (India Calcutta) or ExServicemen, who have the relevant equivalence to a recognized Degree in above stream / discipline recognized by the Govt. of India, for AE (E) posts."
        },
        {
            Designation: "Law Officer GradeI, Class-II (on Contract basis)",
            NoOfPosts: "03",
            PayScale: "10900 - 34800",
            GradePay: "4900",
            Eligibility: "(i) Degree of Bachelor of Laws of a recognized University. (ii) At least 5 years practical experience in various courts or having work experience of at least 5 years in various Govt./ autonomous bodies / Statutory bodies/ PSUs etc. on the legal side / courts etc. or practical experience of working in courts or a combination of both. "
        },
        {
            Designation: "Accounts Officer, Class-I",
            NoOfPosts: "02",
            PayScale: "16650 - 39100",
            GradePay: "5800",
            Eligibility: "From persons having degree of ICWA or CA from recognized Institute or on secondment basis."
        },
        {
            Designation: "Assistant Engineer (Executive Trainee- Electrical), Class-I(on Contract basis)",
            NoOfPosts: "07",
            PayScale: "22,450/- per month",
            GradePay: "",
            Eligibility: "Full time B.E. / B. Tech. (Electrical) and B.E./ B. Tech. (Electrical and Electronics)/ M. Tech. (Electrical)/ PG Diploma in Hydro Power Plant Engineering from a recognized University / Institute of India with at least 55% marks in case of SC/ST/internal (HPPCL) candidates and 60% marks in case of other categories. "
        },
        {
            Designation: "Assistant Engineer (Executive Trainee- Civil), Class-I (on Contract basis)",
            NoOfPosts: "09",
            PayScale: "22,450/- per month.",
            GradePay: "",
            Eligibility: "Full time Degree in Civil Engineering discipline/ M. Tech. (Civil)/ Post Graduate Diploma in Hydro Power Plant Engineering from a recognized University / Institute of India with at least 60% marks. "
        },
        {
            Designation: "Assistant Finance Officer (Executive Trainee- Finance), Class-I (on Contract basis)",
            NoOfPosts: "07",
            PayScale: "22,450/- per month.",
            GradePay: "",
            Eligibility: "Full time CA/ ICWA/ M.Com/ MBA (Finance) with at least 50 % marks in case of SC/ST/ internal (HPPCL) candidates and 55% marks in case of other categories from a recognized University/ Institute. Note:- Candidates with M.Com/ MBA (Finance) should have also passed B.Com at Graduation level."
        },
        {
            Designation: "Assistant Engineer (Executive Trainee- Electrical), Class-I(on Contract basis)",
            NoOfPosts: "07",
            PayScale: "22,450/- per month",
            GradePay: "",
            Eligibility: "Full time B.E. / B. Tech. (Electrical) and B.E./ B. Tech. (Electrical and Electronics)/ M. Tech. (Electrical)/ PG Diploma in Hydro Power Plant Engineering from a recognized University / Institute of India with at least 55% marks in case of SC/ST/internal (HPPCL) candidates and 60% marks in case of other categories. "
        },
        {
            Designation: "Assistant Officer (Executive Trainee- Relief & Rehabilitation) Class-I (on Contract basis) ",
            NoOfPosts: "02",
            PayScale: "22,450/- per month fixed.",
            GradePay: "",
            Eligibility: "Full time BE in Rural Engineering or equivalent or M. Phil (Sociology/ Social Work) with at least 55% marks. Preference shall be given to the candidates having R&R experience in hydropower sector. "
        },
        {
            Designation: "Law Officer, ClassII (Gazetted) (on Contract basis) ",
            NoOfPosts: "01",
            PayScale: "10300 - 34800",
            GradePay: "4400",
            Eligibility: "Should possess a professional degree in Law or its equivalent from any recognized University in India with 3 years experience as a practicing advocateor 5 years experience while working in a Govt. / Semi Govt. Institution."
        },
        {
            Designation: "Mining Officer, Class-II (Gazetted) (on Contract basis)",
            NoOfPosts: "03",
            PayScale: "14,500/- p.m.",
            GradePay: "",
            Eligibility: "M.Sc. Degree in Geology or Applied Geology or B.Sc. (Hons.) in Geology or Applied Geology from a recognized University / institution or its equivalent."
        },
        {
            Designation: "Planning Officer, Class-I (Gazetted) (on Contract basis)",
            NoOfPosts: "03",
            PayScale: "10300 - 34800",
            GradePay: "5000",
            Eligibility: "B. Tech. Degree in Urban/ City/ Town/ Regional Planning from a University or Institute duly recognized by H.P. Government / Central Government. "
        },
        {
            Designation: "- Assistant Research Officer, Class-II (Non-Gazetted) (on Contract basis)",
            NoOfPosts: "02",
            PayScale: "10300 - 34800",
            GradePay: "4200",
            Eligibility: "Master’s degree in Economics with Statistics/ Master’s degree in Mathematics/ Master’s degree in Statistics or its equivalent from a recognized University."
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Union Public Service Commission",
        ApplicationEndDt: "10/04/2015",
        DetailedNotification: "http://upsc.gov.in/exams/notifications/2015/CMS_2015/final%20page%20en%20%2850%29%2036-41.pdf",
        GoToSite: "http://upsc.gov.in/",
        ApplicationFee: "200",
        PublishedOn: "14/03/2015",
        Age: "--",
        Logo: "upsc.jpg",
        AltText: "UPSC Combined Medical Services Examination 2015",
        JobDetails: [{
            Designation: "Assistant Divisional Medical Officer in the Railways",
            NoOfPosts: "600",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Assistant Medical Officer in Indian Ordnance Factories Health Services",
            NoOfPosts: "39",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Junior Scale Posts in Central Health Services",
            NoOfPosts: "391",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "General Duty Medical Officer in Grade II",
            NoOfPosts: "372",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "All India Institutue of Medical Sciences",
        ApplicationEndDt: "19/04/2015",
        DetailedNotification: "http://www.aiimspatna.org/news/Advertisement%20Nursing%20-%20Group%20B.14.03.2015.pdf",
        GoToSite: "http://www.aiimspatna.org/pages/recruitment.php",
        ApplicationFee: "",
        PublishedOn: "20/03/2015",
        Age: "--",
        Logo: "aiims_patna.jpg",
        AltText: "AIIMS Patna Recruitment staff Nurse",
        JobDetails: [{
            Designation: "Nurse",
            NoOfPosts: "441",
            PayScale: "9300 - 34800",
            GradePay: "4600",
            Eligibility: "i) Matriculation or its equivalent from a recognised university/Board. ii) Certification in General Nursing and Midwifery from a recognised Institution or Equivalent. iii)Should be a registered 'A' grade Nurse and Midwife with a State Nursing Council or equivalent qualification for male nurses."
        }]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "Atomic Energy Education Society",
        ApplicationEndDt: "30/03/2015",
        DetailedNotification: "http://aees.gov.in/htmldocs/downloads/open_advertisement_aees_01_2015.pdf",
        GoToSite: "http://aees.gov.in/htmldocs/recruitment.html",
        ApplicationFee: "500",
        PublishedOn: "07/03/2015",
        Age: "--",
        Logo: "aees.jpg",
        AltText: "AEES Recruitment of Principal, Teaching and Non-Teaching staff",
        JobDetails: [{
            Designation: "Principal",
            NoOfPosts: "01",
            PayScale: "15600 - 39100 (PB-3) ",
            GradePay: "7600",
            Eligibility: "(i) Master’s Degree from recognized university with at least 50% marks in aggregate. (ii) B.Ed. or equivalent teaching degree. "
        },
        {
            Designation: "Post Graduate Teacher (PGT) ",
            NoOfPosts: "14",
            PayScale: "9300 - 34800 (PB-2)",
            GradePay: "4800",
            Eligibility: ""
        },
        {
            Designation: "Trained Graduate Teacher (TGT)",
            NoOfPosts: "24",
            PayScale: "9300 - 34800 (PB-2)",
            GradePay: "4600",
            Eligibility: ""
        },
        {
            Designation: "Trained Graduate Teacher (Librarian)",
            NoOfPosts: "01",
            PayScale: "9300 - 34800 (PB-2)",
            GradePay: "4600",
            Eligibility: "Bachelor’s Degree in Library Science from a recognized university with a minimum of 50% aggregate marks OR Graduate with a minimum 50% aggregate marks with one year Diploma in Library Science from a recognized Institution. "
        },
        {
            Designation: "Trained Graduate Teacher (Special Educator)",
            NoOfPosts: "07",
            PayScale: "9300 - 34800 (PB-2)",
            GradePay: "4600",
            Eligibility: "(i) Graduate with at least 50% marks from recognized university. (ii) B.Ed (Special Education) OR B.Ed with a two years Diploma in Special Education from recognized university OR Post Graduate Professional Diploma in Special Education from recognized university OR Any other equivalent qualification approved by Rehabilitation Council of India. (iii) Pass in the Central Teacher Eligibility Test (CTET), conducted by CBSE in accordance with the guidelines framed by the NCTE for the purpose. "
        },
        {
            Designation: "Junior Hindi Translator",
            NoOfPosts: "01",
            PayScale: "9300 - 34800 (PB-2)",
            GradePay: "4200",
            Eligibility: "Bachelor’s degree from recognized university & Post Graduate Diploma in Hindi/English Translation."
        }
        ]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Steel Authority of India Limited",
        ApplicationEndDt: "09/04/2015",
        DetailedNotification: "http://103.241.144.145/index.php",
        GoToSite: "http://103.241.144.145/index.php",
        ApplicationFee: "250",
        PublishedOn: "11/03/2015",
        Age: "--",
        Logo: "sail.jpg",
        AltText: "SAIL recruitment for Junior Assistant 2015",
        JobDetails: [{
            Designation: "Junior Assistant (Trainee)",
            NoOfPosts: "100",
            PayScale: "9260 - 3% - 13150",
            GradePay: "",
            Eligibility: ""
        }]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Mazagaon Dock Limited",
        ApplicationEndDt: "09/04/2015",
        DetailedNotification: "http://mazagondock.gov.in/newsite2010/pdf_doc/career_March15/Advertisement_MDL_HR_CR_REC_34_2015.pdf",
        GoToSite: "http://mazagondock.gov.in/newsite2010/index.htm",
        ApplicationFee: "300",
        PublishedOn: "11/03/2015",
        Age: "--",
        Logo: "mdl.jpg",
        AltText: "MDL Recruitment of Executive Trainee(Finance) 2015",
        JobDetails: [{
            Designation: "Executive Trainee (Finance)",
            NoOfPosts: "11",
            PayScale: "16400 - 40500",
            GradePay: "",
            Eligibility: "CA/ CMA OR Two years Full Time MBA (Finance)/ MMS (Finance) from a recognized University or Deemed University or Institute recognized by AICTE with First Class or 60% Marks"
        }]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "MADHYA PRADESH MADHYA KSHETRA VIDYUT VITARAN COMPANY LIMITED",
        ApplicationEndDt: "27/03/2015",
        DetailedNotification: "http://www.mpcz.co.in/ShowProperty/UCMRepository/Contribution%20Folders/Bhopal/PDF/Careers/Recruitment%202015/AE_JE_Network/advert_AE_JE_contract.pdf",
        GoToSite: "http://www.mpcz.co.in/portal/Bhopal_home.portal?_nfpb=true&_pageLabel=careers_opening_bpl",
        ApplicationFee: "1500",
        PublishedOn: "09/03/2015",
        Age: "--",
        Logo: "mpcz.jpg",
        AltText: "MPCZ Recruitment of IT Engineers 2015",
        JobDetails: [{
            Designation: "A.E.(IT)",
            NoOfPosts: "17 ",
            PayScale: "43,260 per month",
            GradePay: "",
            Eligibility: "B.E./B. tech/M. Tech(IT/CS/EC/EI/EE), MCA,MSC(CS,IT) from recognized university."
        },
        {
            Designation: "J.E(T&DNetwork)",
            NoOfPosts: "34",
            PayScale: "28,758 per month",
            GradePay: "",
            Eligibility: "Any Graduate in (IT/CS/EC/EE/EI/Computer application) with recognized university or After 10th ,three(3) years Diploma in (IT/CS/EC/EE/EI)."
        }]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Central University of Kerela",
        ApplicationEndDt: "20/04/2015",
        DetailedNotification: "http://cukerala.ac.in/images/PdfDocs/Empl2015/cuk_r_re_5_2015.pdf",
        GoToSite: "http://cukerala.ac.in/index.php?option=com_content&view=article&id=776:employment-re-notification-no-re-5-15-teaching-posts&catid=25:career-oppurtunities&Itemid=185&lang=en",
        ApplicationFee: "300",
        PublishedOn: "05/03/2015",
        Age: "--",
        Logo: "cuk.jpg",
        AltText: "CUK Faculty Recruitment 2015",
        JobDetails: [{
            Designation: "Professor",
            NoOfPosts: "05",
            PayScale: "37400 - 67000",
            GradePay: "10000",
            Eligibility: ""
        },
        {
            Designation: "Associate Professor",
            NoOfPosts: "13",
            PayScale: "37400 - 67000",
            GradePay: "9000",
            Eligibility: ""
        },
        {
            Designation: "Assistant Professor",
            NoOfPosts: "08",
            PayScale: "15600-39100",
            GradePay: "6600",
            Eligibility: ""
        }]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Composite Regional Centre for Persons with Disabilities",
        ApplicationEndDt: "30 days from date of publication",
        DetailedNotification: "http://www.niepmd.tn.nic.in/documents/crck_emp-012015.pdf",
        GoToSite: "http://www.niepmd.tn.nic.in/recruitment.php",
        ApplicationFee: "",
        PublishedOn: "06/03/2015",
        Age: "--",
        Logo: "niepmd.jpg",
        AltText: "NIEPMD Recruitment 2015",
        JobDetails: [{
            Designation: "Director",
            NoOfPosts: "01",
            PayScale: "15600-39100",
            GradePay: "7600",
            Eligibility: "(1) Master’s degree in any discipline of rehabilitation (Recognized by RCI/MCI). (2) 10 years’ experience in related field. (3) 2-5 years of Experience in Administration (4) RCI registration as Professional"
        },
        {
            Designation: "Assistant Professor",
            NoOfPosts: "01",
            PayScale: "15600-39100",
            GradePay: "6600",
            Eligibility: "(1) MBBS with PG Diploma from a MCI recognized Institute. (2) Minimum 5 Years’ experience in teaching/research in the field of Rehabilitation."
        },
        {
            Designation: "Assistant Professor (Speech and Hearing)",
            NoOfPosts: "01",
            PayScale: "15600-39100",
            GradePay: "6600",
            Eligibility: "(1) Master’s degree in Speech and Hearing (Recognised by RCI). (2) Minimum 5 years’ experience in teaching /research in the field of Rehabilitation (3) RCI registration as Professional."
        },
        {
            Designation: "Assistant Professor (Clinical Psychology)",
            NoOfPosts: "01",
            PayScale: "15600-39100",
            GradePay: "6600",
            Eligibility: "(1) M.Phil in Clinical or Rehabilitation Psychology from a RCI recognized Institute. (2) Minimum 5 years’ experience in teaching /research in the field of Rehabilitation (3) RCI registration as Professional."
        },
        {
            Designation: "Assistant Professor (Special Education)",
            NoOfPosts: "01",
            PayScale: "15600-39100",
            GradePay: "6600",
            Eligibility: "(1) Master’s degree with M.Ed (Special Education) in any category marks from a RCI recognized Institute with minimum of 55% of marks (2) Minimum 5 years’ experience in teaching/research in the field of Rehabilitation (3) RCI registration as Professional."
        },
        {
            Designation: "Assistant Professor (Speech and Hearing)",
            NoOfPosts: "01",
            PayScale: "15600-39100",
            GradePay: "6600",
            Eligibility: "(1) Master’s degree in Speech and Hearing (Recognised by RCI). (2) Minimum 5 years’ experience in teaching /research in the field of Rehabilitation (3) RCI registration as Professional."
        },
        {
            Designation: "Lecturer (Physiotherapy)",
            NoOfPosts: "01",
            PayScale: "15600-39100",
            GradePay: "5400",
            Eligibility: "(1) Masters in Physiotherapy from a recognized Institute. (2) Minimum 3 years of experience teaching/ research in the field of Rehabilitation."
        },
        {
            Designation: "Lecturer (Occupational Therapy)",
            NoOfPosts: "01",
            PayScale: "15600-39100",
            GradePay: "5400",
            Eligibility: "(1) Masters in Occupational Therapy from a recognized Institute. (2) Minimum 3 years’ experience teaching/research in the field of Rehabilitation."
        },
        {
            Designation: "Administrative Officer",
            NoOfPosts: "01",
            PayScale: "15600-39100",
            GradePay: "6600",
            Eligibility: "(1) Post Graduate Degree/MBA from recognized University (2) Minimum 3 years of experience in Establishment/Administration matters in a Government organization in the G.P of Rs.4800/- (or) 5 years’ experience in the G.P of Rs.4600/- (or) 8 years’ experience in the G.P of Rs.4200/- . "
        },
        {
            Designation: "Rehabilitation Officer (Social Work & Placement)",
            NoOfPosts: "01",
            PayScale: "9300-34800",
            GradePay: "4600",
            Eligibility: " (1) Post Graduate Degree in Social Work / Rehabilitation work/ Sociology/ Psychology or equivalent from a recognized university (2) Minimum 4 years’ experience in Vocational training and guidance as Social Worker or in other related field of rehabilitation (3) RCI registration as Professional."
        },
        {
            Designation: "Prosthetist & Orthotist",
            NoOfPosts: "01",
            PayScale: "9300-34800",
            GradePay: "4600",
            Eligibility: "(1) Degree from a recognized institute in Prosthetics & orthotics (2) Minimum 4 years’ experience of having worked in the related field (3) RCI registration as Professional."
        },
        {
            Designation: "Accountant",
            NoOfPosts: "01",
            PayScale: "9300-34800",
            GradePay: "4200",
            Eligibility: "(1) Commerce Graduate from a recognized University with hands on knowledge of computers (2) Minimum 5 years’ experience in handling accounts/cash of which minimum 3 years’ experience in Govt or Semi Govt establishments"
        },
        {
            Designation: "Special Educator",
            NoOfPosts: "01",
            PayScale: "9300-34800",
            GradePay: "4200",
            Eligibility: "(1) Graduate with Diploma in Special Education (2) Minimum of 5 Years’ experience in Teaching and training in the related field (3) RCI registration as Professional."
        },
        {
            Designation: "Orientation & Mobility Instructor",
            NoOfPosts: "01",
            PayScale: "9300-34800",
            GradePay: "4200",
            Eligibility: " (1) Diploma in Orientation & Mobility Instruction (2) 5 years’ experience in Teaching and training in the related field (3) RCI registration as Professional."
        },
        {
            Designation: "Vocational Instructor",
            NoOfPosts: "01",
            PayScale: "9300-34800",
            GradePay: "4200",
            Eligibility: "(1) SSC and Diploma in Vocational Training from a reputed training institute in related field (2) 5 years’ experience including 2 years in organising/conducting vocational training programs (3) RCI registration as Professional."
        },
        {
            Designation: "Assistant",
            NoOfPosts: "01",
            PayScale: "9300-34800",
            GradePay: "4200",
            Eligibility: "(1) Graduate from a recognized University with hands on knowledge of computers (2) Minimum 5 years of experience in administrative works"
        },
        {
            Designation: "Clinical Assistants",
            NoOfPosts: "01",
            PayScale: "9300-34800",
            GradePay: "4200",
            Eligibility: " B.Sc (Sp&Hg) or BRS (MR) equivalent degree from a recognized Institution/University (2) Minimum 2 years’ experience as Clinician or Research Assistant"
        },
        {
            Designation: "Workshop Supervisor-cumstore Keeper",
            NoOfPosts: "01",
            PayScale: "5200-20200",
            GradePay: "2400",
            Eligibility: "(1) 10+2 or equivalent (2) Minimum 5 years’ experience in the concerned area as Store Keeper. "
        },
        {
            Designation: "Typist/Clerk",
            NoOfPosts: "01",
            PayScale: "5200-20200",
            GradePay: "2400",
            Eligibility: " (1) 10+2 or equivalent. Typing speed 35 wpm with computer knowledge (2) Minimum 2 years of experience"
        },
        ]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "The Gujrat Cancer and Research Institute",
        ApplicationEndDt: "24/03/2015",
        DetailedNotification: "http://www.gcriindia.org/Employment/2015/Advt.%20Teaching,%20Non-Teaching%20Post%20&%20Project.pdf",
        GoToSite: "http://www.gcriindia.org/",
        ApplicationFee: "",
        PublishedOn: "07/03/2015",
        Age: "--",
        Logo: "gcri.jpg",
        AltText: "GCRI recruitment 2015",
        JobDetails: [{
            Designation: "Associate Professor",
            NoOfPosts: "05",
            PayScale: "As per Government rules.",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Assistant Professor",
            NoOfPosts: "06",
            PayScale: "As per Government rules.",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Senior Resident",
            NoOfPosts: "05",
            PayScale: "45,000/- P.M.",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Various non Teaching posts",
            NoOfPosts: "36",
            PayScale: "45,000/- P.M.",
            GradePay: "",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Mazagaon Dock Limited",
        ApplicationEndDt: "02/04/2015",
        DetailedNotification: "http://mazagondock.gov.in/newsite2010/pdf_doc/career_March15/Instructions_MDL_HR_CR_REC_33_2015.pdf",
        GoToSite: "http://mazagondock.gov.in/newsite2010/career_executives.htm",
        ApplicationFee: "",
        PublishedOn: "04/03/2015",
        Age: "--",
        Logo: "mdl.jpg",
        AltText: "MDL recruitment 2015",
        JobDetails: [{
            Designation: "Senior Engineer E1",
            NoOfPosts: "14",
            PayScale: "16,400-40,500",
            GradePay: "",
            Eligibility: ""
        }]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Indian Maritime University",
        ApplicationEndDt: "20/04/2015",
        DetailedNotification: "http://imu.edu.in/index.php?latestnews=1&newsid=343",
        GoToSite: "http://imu.edu.in/index.php?latestnews=1&newsid=343",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "imu.jpg",
        AltText: "IMU recruitment 2015",
        JobDetails: [{
            Designation: "Professor",
            NoOfPosts: "08",
            PayScale: "37400 - 67000",
            GradePay: "10000",
            Eligibility: ""
        },
        {
            Designation: "Associate Professor",
            NoOfPosts: "20",
            PayScale: "37400 - 67000",
            GradePay: "9000",
            Eligibility: ""
        },
        {
            Designation: "Assistant Professor",
            NoOfPosts: "26",
            PayScale: "15600 - 39100",
            GradePay: "6000",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Rajiv Gandhi Natioal Institute of Youth Development",
        ApplicationEndDt: "06/04/2015",
        DetailedNotification: "http://rgniyd.gov.in/sites/default/files/pdfs/advt_prof/prof_advt_02_03.pdf",
        GoToSite: "http://www.rgniyd.gov.in/content/invites-application-posts-professors",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "rgniyd.jpg",
        AltText: "RGNIYD recruitment 2015",
        JobDetails: [{
            Designation: "Professor",
            NoOfPosts: "05",
            PayScale: "37400 - 67000",
            GradePay: "10000",
            Eligibility: ""
        }]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Indian Army",
        ApplicationEndDt: "31/03/2015",
        DetailedNotification: "http://www.amcsscentry.gov.in/uploads/not/20150307_122506.pdf",
        GoToSite: "http://www.amcsscentry.gov.in/",
        ApplicationFee: "200",
        PublishedOn: "09/03/2015",
        Age: "--",
        Logo: "indianarmy.jpg",
        AltText: "INDIAN Army SSC recruitment 2015",
        JobDetails: [{
            Designation: "Short Service Commission Officer",
            NoOfPosts: "400",
            PayScale: "17160 - 39100",
            GradePay: "6100",
            Eligibility: ""
        }]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Coal India Limited",
        ApplicationEndDt: "04/04/2015",
        DetailedNotification: "https://www.coalindia.in/Portals/13/PDF/Advertisement_03032015.pdf",
        GoToSite: "https://www.coalindia.in/career/RecruitmentOfMedicalExe.aspx",
        ApplicationFee: "500",
        PublishedOn: "2015",
        Age: "--",
        Logo: "cil.jpg",
        AltText: "CIL recruitment 2015",
        JobDetails: [{
            Designation: "Senior Medical Specialist E4 Grade",
            NoOfPosts: "112",
            PayScale: "29100 - 54000",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Medical Specialist E3 Grade",
            NoOfPosts: "169",
            PayScale: "24900 - 50500",
            GradePay: "",
            Eligibility: ""
        }]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "DMRC Recruitment 2015(Delhi Metro Rail Corporation)",
        ApplicationEndDt: "24/03/2015",
        DetailedNotification: "http://www.delhimetrorail.com/CareerDocuments/Ad64.pdf",
        GoToSite: "http://www.delhimetrorail.com/career.aspx",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "dmrc.jpg",
        AltText: "REQUIREMENT OF RETIRED / EXPERIENCED CIVIL ENGINEERS/MECHANICAL ENGINEERS, ON RE-EMPLOYMENT/CONTRACT BASIS (FROM GOVT./PSU/ ORGANISATIONS",
        JobDetails: [{
            Designation: "Assistant Manager/ Civil ( Track )Post Code -AMC-1",
            NoOfPosts: "05",
            PayScale: "41060",
            GradePay: "",
            Eligibility: "Degree/Diploma in Civil Engineering"
        },
        {
            Designation: "Section Engineer/Junior Engineer(Civil/Track)Post Code -SEC/JEC-02",
            NoOfPosts: "08",
            PayScale: "35880",
            GradePay: "",
            Eligibility: "Diploma in Civil Engineering"
        },
        {
            Designation: "Jr.Engineer (Tie Track Tamper Operator) Post Code JETTTO-03",
            NoOfPosts: "03",
            PayScale: "27,260",
            GradePay: "",
            Eligibility: "Diploma in Mechanical Engineering"
        }]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "MIDHANI",
        ApplicationEndDt: "20/03/2015",
        DetailedNotification: "http://nadrsgis1.nic.in/midhani/JOTSOTJA2015advt.pdf",
        GoToSite: "http://nadrsgis1.nic.in/midhani/",
        ApplicationFee: "100",
        PublishedOn: "28/02/2015",
        Age: "--",
        Logo: "midhani.jpg",
        AltText: "MIDHANI recruitment 2015",
        JobDetails: [{
            Designation: "Senior Operative Trainee Technical(SOT)(WG-4)",
            NoOfPosts: "11",
            PayScale: "8500-3%-20850",
            GradePay: "",
            Eligibility: "Diploma in relevant discipline with minimum 60% of marks with minimum 2 years post qualification industrial experience in the relevant area"
        },
        {
            Designation: "Junior Operative Trainee Technical(JOT)(WG-2)",
            NoOfPosts: "51",
            PayScale: "7750-3%-19040",
            GradePay: "",
            Eligibility: "SSC+ITI in relevant trade with NAC"
        },
        {
            Designation: "Junior Assistant(WG-4)",
            NoOfPosts: "11",
            PayScale: "8500-3%-20850",
            GradePay: "",
            Eligibility: "Graduation (except professional courses like Engineering/Technology/Medicine) with relevant certificate course in PC operation (MS-office) from reputed/recognizer institution OR Degree having PC operation(MS-Office as one of the subjects is essential with minimum 2 years post qualification experience in relevant area, pass in type writing higher(English/Hindi) is preferable."
        }]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "The West Bengal National University of Judicial Sciences",
        ApplicationEndDt: "20/03/2015",
        DetailedNotification: "http://www.nujs.edu/careers/adver_fac_24_02_15.pdf",
        GoToSite: "http://www.nujs.edu/",
        ApplicationFee: "1000",
        PublishedOn: "2015",
        Age: "--",
        Logo: "wbnujs.jpg",
        AltText: "Faculty posts in WBNUJS",
        JobDetails: [{
            Designation: "Professor(Law)",
            NoOfPosts: "02",
            PayScale: "37000 - 67000",
            GradePay: "10000",
            Eligibility: ""
        },
        {
            Designation: "IPR Chair Professor",
            NoOfPosts: "01",
            PayScale: "37000 - 67000",
            GradePay: "10000",
            Eligibility: ""
        },
        {
            Designation: "Professor(Law - Leave Vacancy)",
            NoOfPosts: "01",
            PayScale: "37000 - 67000",
            GradePay: "10000",
            Eligibility: ""
        },
        {
            Designation: "Assistant Professor(Law)",
            NoOfPosts: "01(PWD)",
            PayScale: "15600 - 39100",
            GradePay: "6000",
            Eligibility: ""
        },
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Electronics Corporation of India Ltd",
        ApplicationEndDt: "13/03/2015",
        DetailedNotification: "https://ecil.gov.in/login.php",
        GoToSite: "https://ecil.gov.in/login.php",
        ApplicationFee: "",
        PublishedOn: "26/02/2015",
        Age: "--",
        Logo: "ecil.jpg",
        AltText: "ECIL recruitment Senior Management",
        JobDetails: [{
            Designation: " Executive Director(Nuclear)",
            NoOfPosts: "01",
            PayScale: "1,63,250 monthly",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Executive Director(Nuclear)",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Executive Director(Telecom)",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "General Manager(Instruments and System)",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "General Manager(Defence System)",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "General Manager(Information Technology and e-Governance)",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "General Manager(Control Systems)",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "General Manager(R&D)",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "General Manager(Finance)",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Additional General Manager(Production)",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Additional General Manager(Contracts and Materials Management)",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Additional General Manager(P & A)",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Additional General Manager/Sr. Deputy General Manager(HR)",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Sr. Deputy General Manager(Purchase)",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Steel Authority of India Ltd",
        ApplicationEndDt: "18/03/2015",
        DetailedNotification: "http://182.18.162.54/cpsailoreg/Document/AdvtPDF/Management%20Trainee%20-%20Technical.pdf",
        GoToSite: "http://182.18.162.54/cpsailoreg/FrmJobDetails.aspx",
        ApplicationFee: "500",
        PublishedOn: "26/02/2015",
        Age: "--",
        Logo: "sail.jpg",
        AltText: "SAIL recruitment Management Trainee",
        JobDetails: [{
            Designation: " Management Trainee (Technical)",
            NoOfPosts: "246",
            PayScale: "20600-3%-46500",
            GradePay: "",
            Eligibility: "Degree in Engineering(full time)with 65% marks (average of all semesters), in the disciplines of Mechanical, Electrical, Metallurgy, Electronics&Instrumentation, Ceramics, Civil,Computer Science, MiningorChemical Engineering. For Computer Science discipline, MCA (3 years full time)with 65% marks(average of all semesters) are also eligible. "
        },
        {
            Designation: "Management Trainee (Administration)",
            NoOfPosts: "100",
            PayScale: "20600-3%-46500",
            GradePay: "",
            Eligibility: " Bachelors’ degree in any discipline with 60% marks (average of all subjects of all years)with at least two years full time MBA/PG Diploma in Management with 60% marksin Human Resources/Personnel Management&Industrial Relations/Personnel Management/Masters in Human Resources & Organizational Development for HR discipline,Marketing for Marketing disciplineand Production/Operations/Materials/Logistics/Supply Chain Management for Materials discipline"
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Tezpur University",
        ApplicationEndDt: "25/03/2015",
        DetailedNotification: "http://www.tezu.ernet.in/other/jobs.htm",
        GoToSite: "http://www.tezu.ernet.in/other/jobs.htm",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "tezpur_university.jpg",
        AltText: "Tezpur University recruitment faculty",
        JobDetails: [{
            Designation: "Professor",
            NoOfPosts: "02",
            PayScale: "37400 - 67000",
            GradePay: "10000",
            Eligibility: "Ph.D."
        },
        {
            Designation: "Associate Professor",
            NoOfPosts: "02",
            PayScale: "37400 - 67000",
            GradePay: "9000",
            Eligibility: "Ph.D."
        },
        {
            Designation: "Assistant Professor",
            NoOfPosts: "03",
            PayScale: "15600 - 39100",
            GradePay: "6000",
            Eligibility: "Ph.D."
        }
        ]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "Indian Institute of Information Technology Guwahati",
        ApplicationEndDt: "27/03/2015",
        DetailedNotification: "http://www.iiitg.ac.in/IIITG%20-%20Home%20Page_files/factad-update.html#img",
        GoToSite: "http://www.iiitg.ac.in/",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "iiit_guwahati.jpg",
        AltText: "IIIT Guwahati recruitment faculty",
        JobDetails: [{
            Designation: "Assistant Professor",
            NoOfPosts: "",
            PayScale: "15600 - 39100",
            GradePay: "6000",
            Eligibility: "Ph.D."
        },
        {
            Designation: "Associate Professor",
            NoOfPosts: "",
            PayScale: "37400 - 67000",
            GradePay: "9000",
            Eligibility: "Ph.D."
        },
        {
            Designation: "Professor",
            NoOfPosts: "",
            PayScale: "37400 - 67000",
            GradePay: "10000",
            Eligibility: "Ph.D."
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Rajasthan Public Service Commission",
        ApplicationEndDt: "18/03/2015",
        DetailedNotification: "http://rpsc.rajasthan.gov.in/pdf_reports_files/corrigendum_Medical_24022015.pdf",
        GoToSite: "http://rpsc.rajasthan.gov.in/Recruitment_Advertisement.aspx",
        ApplicationFee: "",
        PublishedOn: "24/02/2015",
        Age: "--",
        Logo: "rpsc.jpg",
        AltText: "RPSC Medical Officer Exam 2015",
        JobDetails: [{
            Designation: "Assistant Professor",
            NoOfPosts: "142",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Senior Demonstrator",
            NoOfPosts: "349(Pathology-234, Biochemistry-115)",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Biochemist",
            NoOfPosts: "26",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "UTTARAKHAND PUBLIC SERVICE COMMISSION",
        ApplicationEndDt: "11/03/2015",
        DetailedNotification: "http://ukpsc.gov.in/files/adv._for_IT_cell.pdf",
        GoToSite: "http://ukpsc.gov.in/recruitment/view/338",
        ApplicationFee: "",
        PublishedOn: "19/02/2015",
        Age: "--",
        Logo: "ukpsc.jpg",
        AltText: "UKPSC assistant accountant Exam",
        JobDetails: [{
            Designation: "System Analyst",
            NoOfPosts: "01",
            PayScale: "15600 - 39100",
            GradePay: "6600",
            Eligibility: ""
        },
        {
            Designation: "Programmer",
            NoOfPosts: "01",
            PayScale: "15600 - 39100",
            GradePay: "5400",
            Eligibility: ""
        },
        {
            Designation: "Assistant Programmer",
            NoOfPosts: "01",
            PayScale: "9300 - 34800",
            GradePay: "4200",
            Eligibility: ""
        },
        {
            Designation: "Data Entry Operator",
            NoOfPosts: "02",
            PayScale: "9300 - 34800",
            GradePay: "4200",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "UTTARAKHAND PUBLIC SERVICE COMMISSION",
        ApplicationEndDt: "17/03/2015",
        DetailedNotification: "http://ukpsc.gov.in/files/advertizment__for_Accountant_Excise.pdf",
        GoToSite: "http://ukpsc.gov.in/recruitment/view/339",
        ApplicationFee: "25",
        PublishedOn: "25/02/2015",
        Age: "--",
        Logo: "ukpsc.jpg",
        AltText: "Assistant Accountant and Junior Auditor Exam-2014 in Excise Department",
        JobDetails: [{
            Designation: "Assistant Accountant",
            NoOfPosts: "14",
            PayScale: "5200 - 20200",
            GradePay: "2400",
            Eligibility: ""
        },
        {
            Designation: "Junior Auditor",
            NoOfPosts: "01",
            PayScale: "5200 - 20200",
            GradePay: "2400",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Indian Coast Guard",
        ApplicationEndDt: "09/03/2015",
        DetailedNotification: "http://www.joinindiancoastguard.gov.in/PDF/Advertisement/YANTRIK.pdf",
        GoToSite: "http://www.joinindiancoastguard.gov.in/",
        ApplicationFee: "",
        PublishedOn: "01/03/2015",
        Age: "--",
        Logo: "icg.jpg",
        AltText: "Indian Coast Guard Recruitment 2015 Yantrik",
        JobDetails: [{
            Designation: "Yantrik (3 years Mechanical/ Electrical/Electronic Diploma holders – 02/2015 batch)",
            NoOfPosts: "",
            PayScale: "5200-20200",
            GradePay: "2400",
            Eligibility: "Matriculate and three years Diploma in Mechanical / Electrical/ Electronic Engg. with 60% in aggregate from Board/Institute recognised by Board of Central/State Government. "
        }]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Union Public Service Commission",
        ApplicationEndDt: "17/03/2015",
        DetailedNotification: "http://upsconline.nic.in/ora/oraauth/candidate/download_ad.php?id=80",
        GoToSite: "http://upsconline.nic.in/ora/VacancyNoticePub.php",
        ApplicationFee: "25",
        PublishedOn: "28/02/2015",
        Age: "--",
        Logo: "upsc.jpg",
        AltText: "UPSC INVITES ONLINE RECRUITMENT APPLICATIONS (ORA*) FOR RECRUITMENT",
        JobDetails: [{
            Designation: "Joint Director(Crop Development Division)",
            NoOfPosts: "02",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Scientist 'B' Chemical",
            NoOfPosts: "04",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Drugs Inspector",
            NoOfPosts: "147",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Architect",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Professor Information Technology(IT)",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Professor Civil Engineering",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Associate Professor Information Technology(IT)",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Associate Professor Civil Engineering",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Assistant Professor(Unani)",
            NoOfPosts: "13",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "NIT Hamirpur",
        ApplicationEndDt: "17/03/2015",
        DetailedNotification: "http://www.nith.ac.in/recruitment/2015/sodr.pdf",
        GoToSite: "http://www.nith.ac.in/recruitment/index.htm",
        ApplicationFee: "",
        PublishedOn: "11/02/2015",
        Age: "--",
        Logo: "nit_hamirpur.jpg",
        AltText: "Applications are invited for the Post of Lecturer on contract in various Departments",
        JobDetails: [{
            Designation: "Deputy Registrar",
            NoOfPosts: "01",
            PayScale: "15600 - 39100",
            GradePay: "7600",
            Eligibility: "Master's Degree in any discipline with atleast 55% marks"
        },
        {
            Designation: "Sr. Scientific/Technical Officer",
            NoOfPosts: "03(regular) 01(deputation)",
            PayScale: "15600 - 39100",
            GradePay: "7600",
            Eligibility: "B.E. or B.Tech. or M.Sc./MCA Degree in relevant field with first class"
        },
        {
            Designation: "Assistant Librarian",
            NoOfPosts: "01",
            PayScale: "15600 - 39100",
            GradePay: "7600",
            Eligibility: "Master's Degree in Library Science"
        },
        {
            Designation: "Scientific/Technical Officer",
            NoOfPosts: "01(deputation)",
            PayScale: "38000 consolidated per month",
            GradePay: "",
            Eligibility: "B.E. or B.Tech. or M.Sc./MCA Degree in relevant field with first class"
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "NIT Hamirpur",
        ApplicationEndDt: "16/03/2015",
        DetailedNotification: "http://www.nith.ac.in/recruitment/2015/lectform.pdf",
        GoToSite: "http://www.nith.ac.in/recruitment/index.htm",
        ApplicationFee: "",
        PublishedOn: "11/02/2015",
        Age: "--",
        Logo: "nit_hamirpur.jpg",
        AltText: "Applications are invited for the Post of Lecturer on contract in various departments",
        JobDetails: [{
            Designation: "Lecturer",
            NoOfPosts: "",
            PayScale: "47200 Consolidatd monthly salary",
            GradePay: "",
            Eligibility: "Ph.D. with First Class both at U.G. and P.G. Level"
        },
        {
            Designation: "Trainee Teacher",
            NoOfPosts: "10",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        }
        ]
        },
    {
        HeadingTheme: "panel panel-info",
        Title: "Rajiv Gandhi University, Arunachal Pradesh",
        ApplicationEndDt: "06/03/2015",
        DetailedNotification: "http://rgu.ac.in/downloads/Advno6jan15.pdf",
        GoToSite: "http://rgu.ac.in/jobsatrgu.html",
        ApplicationFee: "400",
        PublishedOn: "12/02/2015",
        Age: "--",
        Logo: "rgu.jpg",
        AltText: "Faculty position at Rajiv Gandhi University",
        JobDetails: [{
            Designation: "Professor",
            NoOfPosts: "11",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Associate Professor",
            NoOfPosts: "12",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Assistant Professor",
            NoOfPosts: "04",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        }
        ]
        },
    {
        HeadingTheme: "panel panel-warning",
        Title: "FCI Aravali Gypsum And Minerals India Limited(FAGMIL)",
        ApplicationEndDt: "16/03/2015",
        DetailedNotification: "http://fagmil.nic.in/images/Careers/recruitment2015.pdf",
        GoToSite: "http://fagmil.nic.in/index.php/en/services/careers",
        ApplicationFee: "200",
        PublishedOn: "2015",
        Age: "--",
        Logo: "fagmil.jpg",
        AltText: "FCI Aravali Gypsum And Minerals India Limited(FAGMIL) Recruitment",
        JobDetails: [{
            Designation: "Asstt. Finance Manager",
            NoOfPosts: "01",
            PayScale: "24900-3%-50500",
            GradePay: "",
            Eligibility: "CA OR ICWA"
        },
        {
            Designation: "Accounts Officer Grade-II",
            NoOfPosts: "02",
            PayScale: "16400-3%-40500",
            GradePay: "",
            Eligibility: "CA OR ICWA"
        },
        {
            Designation: "Asstt. Mining Engineer",
            NoOfPosts: "01",
            PayScale: "16400-3%-40500",
            GradePay: "",
            Eligibility: "Degree in Mining Engg./AMIE with Second Class Mine Manager’s Certificate of Competency (Restricted) under MMR, 1961."
        },
        {
            Designation: "Asstt. Engineer (Project)",
            NoOfPosts: "01",
            PayScale: "16400-3%-40500",
            GradePay: "",
            Eligibility: "Full time B.E./B.Tech. in IT/Mechanical from a recognized university"
        },
        {
            Designation: "Jr. Chemist",
            NoOfPosts: "01",
            PayScale: "12600-3%-32500",
            GradePay: "",
            Eligibility: "(i) Regular course in M.Sc. (Chemistry) from a recognized university. (ii) Basic knowledge of computer."
        },
        {
            Designation: "Jr. Geologist",
            NoOfPosts: "01",
            PayScale: "12600-3%-32500",
            GradePay: "",
            Eligibility: "(i) Regular course in M.Sc. (Geology) from a recognized university. (ii) Basic knowledge of computer"
        },
        {
            Designation: "Quarry Foreman",
            NoOfPosts: "03",
            PayScale: "11600-3%-26250",
            GradePay: "",
            Eligibility: "1) (i) 12th Pass (ii) Should possess Mine Foreman’s Certificate (Restricted) under MMR , 1961 OR Diploma in Mining & Mine Surveying With Mine Foreman’s Certificate (Restricted) under MMR 1961. 2) Basic knowledge of computer."
        },
        {
            Designation: "Mining Mate",
            NoOfPosts: "05",
            PayScale: "9550-3%-21300",
            GradePay: "",
            Eligibility: "(i) 12th Pass (ii) Should possess Mining Mate’s Certificate under MMR, 1961 (iii) Basic knowledge of computer."
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Sutlej Gramin Bank",
        ApplicationEndDt: "03/03/2015",
        DetailedNotification: "http://sgbbathinda.co.in/Downloads/adsgb2015.pdf",
        GoToSite: "http://sgbbathinda.co.in/Recruitment.aspx",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "sgb.jpg",
        AltText: "Sutlej Gramin Bank recruitment",
        JobDetails: [{
            Designation: "Officer Scale-I",
            NoOfPosts: "21",
            PayScale: "14500-600/7, 18700-700/2, 20100-800/7, 25700",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Office Assistant (Multipurpose)",
            NoOfPosts: "20",
            PayScale: "7200-400/3, 8400-500/3, 9900-600/4, 12300-700/7, 17200-1300/1,18500-800/1,19300.",
            GradePay: "",
            Eligibility: ""
        }]
        },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Central Institute Of Indian Languages",
        ApplicationEndDt: "05/03/2015",
        DetailedNotification: "http://www.ciil.org/Download/CIIL_Project_Staff_2015.pdf",
        GoToSite: "http://www.ciil.org/AnnCIIL2015.aspx",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "ciil.jpg",
        AltText: "CIIL Requirement of Project Staff for various Schemes",
        JobDetails: [{
            Designation: "Chief Resource Officer",
            NoOfPosts: "08",
            PayScale: "43636 Monthly",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Senior Resource Person - I",
            NoOfPosts: "14",
            PayScale: "40738 Monthly",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Senior Resource Person - II",
            NoOfPosts: "09",
            PayScale: "38813 Monthly",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Junior Resource Person - I",
            NoOfPosts: "37",
            PayScale: "38212 Monthly",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Junior Resource Person - II",
            NoOfPosts: "44",
            PayScale: "35482 Monthly",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Junior Resource Person (Technical)- I",
            NoOfPosts: "12",
            PayScale: "38212 Monthly",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Junior Resource Person (Technical)- II",
            NoOfPosts: "04",
            PayScale: "35480 Monthly",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Office Supervisor",
            NoOfPosts: "03",
            PayScale: "37571 Monthly",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Accounts Assistant",
            NoOfPosts: "05",
            PayScale: "23515 Monthly",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Library Assistant",
            NoOfPosts: "03",
            PayScale: "23515 Monthly",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Office Assistant",
            NoOfPosts: "07",
            PayScale: "20515 Monthly",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Data Input Operator",
            NoOfPosts: "12",
            PayScale: "23515 Monthly",
            GradePay: "",
            Eligibility: ""
        },
         {
             Designation: "Office Helper",
             NoOfPosts: "06",
             PayScale: "14490 Monthly",
             GradePay: "",
             Eligibility: ""
         }
        ]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "NIT Meghalaya",
        ApplicationEndDt: "31/03/2015",
        DetailedNotification: "http://nitmeghalaya.in/nitm/notifications/recruitments/docs/advtFacultyFebruary2015_full.pdf",
        GoToSite: "http://nitmeghalaya.in/nitm/notifications/recruitments/faculty_feb2015.html",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "nit_meghalya.jpg",
        AltText: "NIT Meghalaya faculty recruitment",
        JobDetails: [{
            Designation: "Asst. Professor",
            NoOfPosts: "",
            PayScale: " PB3 Min Basic: 30,000",
            GradePay: "8000",
            Eligibility: "Ph. D. with 1st Class at UG & PG levels"
        },
        {
            Designation: "Asst. Professor(On Contract)",
            NoOfPosts: "",
            PayScale: " PB3 + 07 increments",
            GradePay: "7000",
            Eligibility: "Ph. D. with 1st Class at UG & PG levels"
        },
        {
            Designation: "Asst. Professor(On Contract)",
            NoOfPosts: "",
            PayScale: " PB3 + 07 increments",
            GradePay: "6000",
            Eligibility: "Ph. D. with 1st Class at UG & PG levels"
        }
        ]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "NIT Meghalya(National Institute of Technology)",
        ApplicationEndDt: "01/04/2015",
        DetailedNotification: "http://nitmeghalaya.in/nitm/notifications/recruitments/docs/trainee%20teacher%20scheme.pdf",
        GoToSite: "http://nitmeghalaya.in/nitm/notifications/recruitments/Trainee_techerFeb2015.html",
        ApplicationFee: "",
        PublishedOn: "09/02/2015",
        Age: "--",
        Logo: "nit_meghalya.jpg",
        AltText: "Recruitment of Trainee Teacher at NIT Meghalya",
        JobDetails: [{
            Designation: "Trainee Teacher",
            NoOfPosts: "",
            PayScale: "",
            GradePay: "",
            Eligibility: "Candidates within top 15% in other AICTE recognized institutions and having valid GATE score are also eligible for the position."
        }]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "National Institute of Technical Teachers Training and Reserch(NITTR)",
        ApplicationEndDt: "27/03/2015",
        DetailedNotification: "http://www.nitttrchd.ac.in/sitenew1/pdf/Adv.142_2015.pdf",
        GoToSite: "http://recruit.nitttrchd.ac.in/",
        ApplicationFee: "100",
        PublishedOn: "09/02/2015",
        Age: "--",
        Logo: "nitttrchd.jpg",
        AltText: "National Institute of Technical Teachers Training and Reserch(NITTR) recruitment for various posts",
        JobDetails: [{
            Designation: "Sr. Administrative Officer",
            NoOfPosts: "01",
            PayScale: "PB-3 15600-39100",
            GradePay: "6600",
            Eligibility: ""
        },
        {
            Designation: "Research Assistant",
            NoOfPosts: "01",
            PayScale: "PB-3 15600-39100",
            GradePay: "5400",
            Eligibility: ""
        },
        {
            Designation: "Senior Production Assistant",
            NoOfPosts: "03",
            PayScale: "PB-2 9300-34800",
            GradePay: "4200",
            Eligibility: ""
        },
        {
            Designation: "Accounts Officer",
            NoOfPosts: "01",
            PayScale: "PB-2 9300-34800",
            GradePay: "4600",
            Eligibility: ""
        },
        {
            Designation: "Accountant",
            NoOfPosts: "01",
            PayScale: "PB-2 9300-34800",
            GradePay: "4200",
            Eligibility: ""
        },
        {
            Designation: "Hindi Translator",
            NoOfPosts: "01",
            PayScale: "PB-2 9300-34800",
            GradePay: "4200",
            Eligibility: ""
        },
        {
            Designation: "Technicians",
            NoOfPosts: "11",
            PayScale: "PB-1 5200-20200",
            GradePay: "2800",
            Eligibility: ""
        },
        {
            Designation: "Estate Assistant",
            NoOfPosts: "01",
            PayScale: "PB-1 5200-20200",
            GradePay: "2800",
            Eligibility: ""
        },
        {
            Designation: "Stenographer Grade-II",
            NoOfPosts: "06",
            PayScale: "PB-1 5200-20200",
            GradePay: "2400",
            Eligibility: ""
        },
        {
            Designation: "Lower Division Clerks",
            NoOfPosts: "07",
            PayScale: "PB-1 5200-20200",
            GradePay: "1900",
            Eligibility: ""
        },
        {
            Designation: "Drivers",
            NoOfPosts: "02",
            PayScale: "PB-1 5200-20200",
            GradePay: "1900",
            Eligibility: ""
        },
        {
            Designation: "Multi Skilled Attendants (MSA)",
            NoOfPosts: "16",
            PayScale: "PB-1 5200-20200",
            GradePay: "1800",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Indian Oil Corporation",
        ApplicationEndDt: "16/03/2015",
        DetailedNotification: "https://www.iocl.com/download/Mathura_Refinery_AD_2015.pdf",
        GoToSite: "https://www.iocl.com/PeopleCareers/job.aspx",
        ApplicationFee: "100",
        PublishedOn: "20/02/2015",
        Age: "--",
        Logo: "iocl.jpg",
        AltText: "Indian Oil Corporation invites applications for Junior Engineer at Mathura Refinery(IOCL Recruitment)",
        JobDetails: [{
            Designation: "Jr. Engineering Assistant-IV (Production)",
            NoOfPosts: "17",
            PayScale: "11900 - 32000",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Jr. Engineering Assistant-IV (Power & Utility)",
            NoOfPosts: "02",
            PayScale: "11900 - 32000",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Jr. Engineering Assistant-IV (Mechanical Maintenance)",
            NoOfPosts: "10",
            PayScale: "11900 - 32000",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Jr. Engineering Assistant-IV(Instrumentation)",
            NoOfPosts: "05",
            PayScale: "11900 - 32000",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Jr. Engineering Assistant-IV(Instrumentation)",
            NoOfPosts: "07",
            PayScale: "11900 - 32000",
            GradePay: "",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Rajasthan Marudhara Gramin Bank",
        ApplicationEndDt: "26/02/2015",
        DetailedNotification: "http://www.mgbbank.com/IBPSAPPFinal.pdf",
        GoToSite: "http://www.mgbbank.com/",
        ApplicationFee: "100",
        PublishedOn: "12/02/2015",
        Age: "--",
        Logo: "rmgb.jpg",
        AltText: "rajasthan marudhara gramin bank recruitment",
        JobDetails: [{
            Designation: "Officer Scale-III",
            NoOfPosts: "17",
            PayScale: "25700-800/5-29700-900/2-31500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Officer Scale-II (General Banking Officer)",
            NoOfPosts: "69",
            PayScale: "19400-700/1-20100-800/10-28100",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Officer Scale-II (IT)",
            NoOfPosts: "04",
            PayScale: "19400-700/1-20100-800/10-28100",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Officer Scale-II (CA)",
            NoOfPosts: "01",
            PayScale: "19400-700/1-20100-800/10-28100",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Officer Scale-II (Law)",
            NoOfPosts: "01",
            PayScale: "19400-700/1-20100-800/10-28100",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Officer Scale-II (Treasury Manager)",
            NoOfPosts: "01",
            PayScale: "19400-700/1-20100-800/10-28100",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Officer Scale-I",
            NoOfPosts: "153",
            PayScale: "14500 - 600/7 - 18700 - 700/2 – 20100 - 800/7 – 25700",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Office Assistant (Multipurpose)",
            NoOfPosts: "262",
            PayScale: "7200-400/3-8400-500/3-9900-600/4-12300-700/7-17200-1300/1-18500-800/1-19300",
            GradePay: "",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Shipping Corporation Of India Recruitment For Management Posts",
        ApplicationEndDt: "09/03/2015",
        DetailedNotification: "http://www.shipindia.com/uploaded_pdfs/career/detailed%20ad.pdf",
        GoToSite: "http://www.shipindia.com/careers/shore-details.aspx?NjY.",
        ApplicationFee: "1000",
        PublishedOn: "14/02/2015",
        Age: "--",
        Logo: "sci.jpg",
        AltText: "SCI Recruitment For Management Posts",
        JobDetails: [{
            Designation: "Assistant Manager",
            NoOfPosts: "62",
            PayScale: "20600 - 46500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Manager(Company Secretary)",
            NoOfPosts: "01",
            PayScale: "29100 - 54500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Deputy General Manager",
            NoOfPosts: "17",
            PayScale: "32900 - 58000",
            GradePay: "",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "Union Bank of India",
        ApplicationEndDt: "28/02/2015",
        DetailedNotification: "http://www.unionbankofindia.co.in/pdf/UBRP201516EnglishNotificationwebsite.pdf",
        GoToSite: "http://www.unionbankofindia.co.in/abt_recruitmentaspx.aspx",
        ApplicationFee: "600",
        PublishedOn: "13/02/2015",
        Age: "--",
        Logo: "unionbank.jpg",
        AltText: "union bank of india recruitment for Specialist Officer",
        JobDetails: [{
            Designation: "Economist",
            NoOfPosts: "02(UR-02)",
            PayScale: "14500 - 25700",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Forex Officer II",
            NoOfPosts: "11(UR-02, SC-02, ST-01)",
            PayScale: "19400 - 28100",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Forex Officer I",
            NoOfPosts: "36(UR-25, OBC-4, SC-05, ST-02)",
            PayScale: "14500 - 25700",
            GradePay: "",
            Eligibility: ""
        }
        ]
},
    {
        HeadingTheme: "panel panel-info",
        Title: "HARTRON",
        ApplicationEndDt: "",
        DetailedNotification: "http://hartron.org.in/images/SDG/2015/SDGRoles1815.pdf",
        GoToSite: "hartron.org.in/index.php/jobs-career/current-opening",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "hartron.jpg",
        AltText: "Walkin for IT Professionals in HARTRON -27th/28 Feb and 3rd/4th March",
        JobDetails: [{
            Designation: "Program Manager",
            NoOfPosts: "1",
            PayScale: "18+ Lacs",
            GradePay: "",
            Eligibility: "11+ Yrs experience"
        },
        {
            Designation: "IT Infrastructure Manager (SWAN)",
            NoOfPosts: "1",
            PayScale: "10+ Lacs",
            GradePay: "",
            Eligibility: "7+ Yrs experience"
        },
        {
            Designation: "Senior Database Analyst",
            NoOfPosts: "1",
            PayScale: "10+ Lacs",
            GradePay: "",
            Eligibility: "7+ Yrs experience"
        },
        {
            Designation: "Service delivery manager",
            NoOfPosts: "1",
            PayScale: "10+ Lacs",
            GradePay: "",
            Eligibility: "7+ Yrs experience"
        },
        {
            Designation: "Senior Security Analyst",
            NoOfPosts: "1",
            PayScale: "18+",
            GradePay: "",
            Eligibility: "11+ Yrs experience"
        },
        {
            Designation: "Asstt. Manager IT (DevOps)",
            NoOfPosts: "1",
            PayScale: "18+",
            GradePay: "",
            Eligibility: "11+ Yrs experience"
        },
         {
             Designation: "Database Analyst",
             NoOfPosts: "2",
             PayScale: "6+ Lacs",
             GradePay: "",
             Eligibility: "4+ Yrs experience"
         },
        {
            Designation: "Software Developer",
            NoOfPosts: "2",
            PayScale: "6+ Lacs",
            GradePay: "",
            Eligibility: "4+ Yrs experience"
        },
        {
            Designation: "Security Analyst",
            NoOfPosts: "1",
            PayScale: "6+ Lacs",
            GradePay: "",
            Eligibility: "4+ Yrs experience"
        },
        {
            Designation: "Business Analyst",
            NoOfPosts: "4",
            PayScale: "6+ Lacs",
            GradePay: "",
            Eligibility: "4+ Yrs experience"
        },
        {
            Designation: "IT Manager",
            NoOfPosts: "1",
            PayScale: "10+ Lacs",
            GradePay: "",
            Eligibility: "7+ Yrs experience"
        }
        ]
    },
{
            HeadingTheme: "panel panel-warning",
            Title: "Uttar Pradesh Public Service Commission",
            ApplicationEndDt: "28/02/2015",
            DetailedNotification: "http://uppsc.up.nic.in/View_Enclosure.aspx?ID=103&flag=E&FID=334",
            GoToSite: "http://uppsc.up.nic.in/Notifications.aspx",
            ApplicationFee: "115",
            PublishedOn: "2015",
			Age: "--",
			Logo:"uppsc.jpg",
			AltText:"COMBINED STATE / UPPER SUBORDINATE SERVICES (GEN. RECTT.) EXAMINATION-2015",
            JobDetails: [{
                Designation: "Multiple posts",
                NoOfPosts: "450",
                PayScale: "93,00 - 34,800",
                GradePay: "4,200",
                Eligibility: "Bachelors Degree"
            }]
},
{
            HeadingTheme: "panel panel-info",
            Title: "Benaras Hindu University(BHU)",
            ApplicationEndDt: "20/02/2015",
            DetailedNotification: "http://www.bhu.ac.in/rac/jan2015/RollingFinal.pdf",
            GoToSite: "http://www.bhu.ac.in/rac/",
            ApplicationFee: "--",
            PublishedOn: "2015",
			Age: "--",
			Logo:"bhu.jpg",
			AltText: "Faculty posts at Benaras Hindu University(BHU)",
            JobDetails: [{
                Designation: "Professor",
                NoOfPosts: "",
                PayScale: "37,400 - 67,000",
                GradePay: "10,000",
                Eligibility: ""
            },
			{
                Designation: "Reader",
                NoOfPosts: "",
                PayScale: "12000-420-18300",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Assistant Professor",
                NoOfPosts: "",
                PayScale: "15,600 - 39,100",
                GradePay: "6,000",
                Eligibility: ""
            },
			{
                Designation: "Associate Professor",
                NoOfPosts: "",
                PayScale: "37,400 - 67,000",
                GradePay: "9,000",
                Eligibility: ""
            }
			]
},
{
            HeadingTheme: "panel panel-info",
            Title: "Mangalore Refinery and Petrochemicals Limited(MRPL)",
            ApplicationEndDt: "11/02/2015",
            DetailedNotification: "http://www.mrpl.co.in/careers",
            GoToSite: "http://www.mrpl.co.in/careers",
            ApplicationFee: "--",
            PublishedOn: "2015",
			Age: "--",
			Logo:"mrpl.jpg",
			AltText: "Non Managerial positions in Mangalore Refinery and Petrochemicals Limited(MRPL)",
            JobDetails: [{
                Designation: "Workman(chemical)",
                NoOfPosts: "92",
                PayScale: "W2",
                GradePay: "--",
                Eligibility: ""
            },
			{
                Designation: "Assistant(Materials)",
                NoOfPosts: "04",
                PayScale: "JMS",
                GradePay: "--",
                Eligibility: ""
            },
			{
                Designation: "Assistant(Finance)",
                NoOfPosts: "04",
                PayScale: "JMS",
                GradePay: "--",
                Eligibility: ""
            }
			]
},
{
            HeadingTheme: "panel panel-danger",
            Title: "National Thermal Power Corporation",
            ApplicationEndDt: "03/03/2015",
            DetailedNotification: "http://www.ntpccareers.net/et15/my_files/advt_et15.pdf",
            GoToSite: "http://www.ntpccareers.net/et15/hm.php",
            ApplicationFee: "--",
            PublishedOn: "02/02/2015",
			Age: "--",
			Logo:"ntpc.jpg",
			AltText: "Recruitment Of Engineering Executive Trainee at NTPC through GATE-2015",
            JobDetails: [{
                Designation: "Executive Trainee Engineer-Electrical",
                NoOfPosts: "40",
                PayScale: "24,900-3%-50,500",
                GradePay: "--",
                Eligibility: "Engineering Degree with minimum 65%"
            },
			{
                Designation: "Executive Trainee Engineer-Mechanical",
                NoOfPosts: "60",
                PayScale: "24,900-3%-50,500",
                GradePay: "--",
                Eligibility: "Engineering Degree with minimum 65%"
            },
			{
                Designation: "Executive Trainee Engineer-Instrumentation",
                NoOfPosts: "10",
                PayScale: "24,900-3%-50,500",
                GradePay: "--",
                Eligibility: "Engineering Degree with minimum 65%"
            },
			{
                Designation: "Executive Trainee Engineer-Electronics",
                NoOfPosts: "10",
                PayScale: "24,900-3%-50,500",
                GradePay: "--",
                Eligibility: "Engineering Degree with minimum 65%"
            }
			]
},
{
            HeadingTheme: "panel panel-success",
            Title: "Ministry of Earth Sciences",
            ApplicationEndDt: "21/02/2015",
            DetailedNotification: "http://moes.gov.in/writereaddata/files/project%20scientist%20B%20%26%20C.pdf",
            GoToSite: "http://moes.gov.in/",
            ApplicationFee: "--",
            PublishedOn: "06/02/2015",
			Age: "--",
			Logo:"moes.jpg",
			AltText: "Project Scientist in Ministry of Earth Sciences on Contract Basis",
            JobDetails: [{
                Designation: "Project Scientist 'B'",
                NoOfPosts: "08",
                PayScale: "21,000 + HRA + DA",
                GradePay: "--",
                Eligibility: "Post Graduate Degree"
            },
			{
                Designation: "Project Scientist 'C'",
                NoOfPosts: "04",
                PayScale: "22,000 + HRA + DA",
                GradePay: "--",
                Eligibility: "Post Graduate Degree"
            }
			]
},
{
            HeadingTheme: "panel panel-info",
            Title: "Bihar Agricultural University",
            ApplicationEndDt: "16/02/2015",
            DetailedNotification: "http://bausabour.ac.in.199-79-63-199.plesk-web24.webhostbox.net/bau/files/Advertisement/4e10b0c6-9b4d-40be-bed5-6aacb1e751d9-harshit01.docx",
            GoToSite: "http://bausabour.ac.in.199-79-63-199.plesk-web24.webhostbox.net/bau/index.aspx",
            ApplicationFee: "--",
            PublishedOn: "02/02/2015",
			Age: "--",
			Logo:"bau.jpg",
			AltText:"job at Bihar Agricultural University",
            JobDetails: [{
                Designation: "Deputy Director Research",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Deputy Director Training",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Deputy Comptroller",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Assistant Director Recruitment",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Assistant Director Administration",
                NoOfPosts: "02",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Assistant Registrar",
                NoOfPosts: "02",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Audit Officer",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            }]
},
{
            HeadingTheme: "panel panel-success",
            Title: "Uttarakhand Public Service Commission(UKPSC)",
            ApplicationEndDt: "23/02/2015",
            DetailedNotification: "http://ukpsc.gov.in/files/Group_C_Vigapati.pdf",
            GoToSite: "http://ukpsc.gov.in/recruitment/view/331",
            ApplicationFee: "--",
            PublishedOn: "07/02/2015",
			Age: "--",
			Logo:"ukpsc.jpg",
			AltText: "Various Group-C posts at Uttarakhand Public Service Commission(UKPSC)",
            JobDetails: [{
                Designation: "Lecturer(Cookery, Bakery, Housekeeping, Restaurant, Reception)",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Deputy Sports Officer",
                NoOfPosts: "03",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Technical Assistant Geophysics",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Technical Assistant Geology",
                NoOfPosts: "02",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Technical Assistant Chemistry",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Mines Inspector",
                NoOfPosts: "10",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Draughtsman",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Assistant Engineer(Civil)",
                NoOfPosts: "05",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Head Clerk",
                NoOfPosts: "24",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Surveyor",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            }]
},
{
            HeadingTheme: "panel panel-danger",
            Title: "Uttarakhand Public Service Commission(UKPSC)",
            ApplicationEndDt: "18/02/2015",
            DetailedNotification: "http://ukpsc.gov.in/files/Group_B.pdf",
            GoToSite: "http://ukpsc.gov.in/recruitment/view/330",
            ApplicationFee: "--",
            PublishedOn: "31/01/2015",
			Age: "--",
			Logo:"ukpsc.jpg",
			AltText: "Various Group-B posts at Uttarakhand Public Service Commission(UKPSC)",
            JobDetails: [{
                Designation: "Principal Grade II",
                NoOfPosts: "18",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Engineer",
                NoOfPosts: "06",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Lecturer(Cookery, Bakery, Housekeeping, Restaurant, Reception)",
                NoOfPosts: "04",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Lecturer(Food Science and nutrition)",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Personnel Officer",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Assistant Geologist",
                NoOfPosts: "04",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Extension Officer",
                NoOfPosts: "12",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "District Sports Officer",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Superintendent",
                NoOfPosts: "05",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Assistant Director(Printing)",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            }]
},
{
            HeadingTheme: "panel panel-warning",
            Title: "Bhabha Atomic Research Centre(BARC)",
            ApplicationEndDt: "23/02/2015",
            DetailedNotification: "http://barc.gov.in/careers/vacancy242.pdf",
            GoToSite: "http://barc.gov.in/careers/",
            ApplicationFee: "--",
            PublishedOn: "02/02/2015",
			Age: "18 - 27",
			Logo:"barc.jpg",
			AltText: "Category II stipendiary trainee at Bhabha Atomic Research Centre(BARC)",
            JobDetails: [{
                Designation: "Category II stipendiary trainee",
                NoOfPosts: "41(SC-13, OBC-28)",
                PayScale: "5200 - 20200",
                GradePay: "2400",
                Eligibility: "--"
            }]
},
{
            HeadingTheme: "panel panel-warning",
            Title: "Coast guard",
            ApplicationEndDt: "10/02/2015",
            DetailedNotification: "http://www.joinindiancoastguard.gov.in/PDF/Advertisement/Navik%28GD%29.pdf",
            GoToSite: "http://www.joinindiancoastguard.gov.in/",
            ApplicationFee: "--",
            PublishedOn: "02/02/2015",
			Age: "18 - 22",
			Logo:"coastguard.jpg",
			AltText: "Coast guard Navik general duty",
            JobDetails: [{
                Designation: "Navik(General Duty)",
                NoOfPosts: "--",
                PayScale: "5200 - 20200",
                GradePay: "2200",
                Eligibility: "10+2 with Maths and Physics"
            }]
},
{
            HeadingTheme: "panel panel-info",
            Title: "Indira Gandhi National Tribal University(IGNTU)",
            ApplicationEndDt: "28/02/2015",
            DetailedNotification: "http://igntu.ac.in/recruitment/Advt_Non_Teaching_2015.pdf",
            GoToSite: "http://igntu.ac.in/recruitment.htm",
            ApplicationFee: "500",
            PublishedOn: "20/01/2015",
			Age: "read Adv",
			Logo:"igntu.jpg",
			AltText: "Non faculty posts at Indira Gandhi National Tribal University(IGNTU)",
            JobDetails: [{
                Designation: "Librarian",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Executive Engineer(Civil)",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Assistant Librarian",
                NoOfPosts: "03(1 for regional campus Manipur)",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Public Relations Officer",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Information Scientist",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Section Officer",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Private Secretary",
                NoOfPosts: "03",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Assistant Engineer(Civil)",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Security Officer",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Assistant",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Personal Assistant",
                NoOfPosts: "02",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Professional Assistant",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Senior Technical Assistant",
                NoOfPosts: "05",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Senior Technical Assistant(Computer)",
                NoOfPosts: "02",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Junior Engineer(Civil)",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Semi Professional Assistant",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Technical Assistant",
                NoOfPosts: "06",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Pharmacist",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Security Inspector",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Upper Divisional Clerk",
                NoOfPosts: "03",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Library Assistant",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Laboratory Assistant",
                NoOfPosts: "09",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Lower Divisional Clerk",
                NoOfPosts: "11",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Driver",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Cook",
                NoOfPosts: "02",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Library Attendant",
                NoOfPosts: "02",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Laboratory Attendant",
                NoOfPosts: "08",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Multi tasking staff",
                NoOfPosts: "06",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Kitchen Attendant",
                NoOfPosts: "02",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Hostel Attendant",
                NoOfPosts: "02",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            }
            ]
        },
{
            HeadingTheme: "panel panel-info",
            Title: "National Small Industries corporation limited(NSIC)",
            ApplicationEndDt: "17/02/2015",
            DetailedNotification: "http://nsicnet.com/hrnsic15/Instruction.asp?Ad=2",
            GoToSite: "http://nsicnet.com/hrnsic15/Instruction.asp?Ad=2",
            ApplicationFee: "--",
            PublishedOn: "24/01/2015",
			Age: "read Adv",
			Logo:"nsic.gif",
			AltText: "Manager posts in National Small Industries corporation limited(NSIC)",
            JobDetails: [{
                Designation: "Chief Manager",
                NoOfPosts: "05(UR-03,OBC-01, SC-01)",
                PayScale: "24,900 - 50,500",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Chief Manager(Finance and Accounts)",
                NoOfPosts: "05(UR-04, SC-01)",
                PayScale: "24,900 - 50,500",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Deputy Manager",
                NoOfPosts: "15(UR-06,OBC-06,ST-01, SC-02)",
                PayScale: "16,400 - 40,500",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Chief Manager(Finance and Accounts)",
                NoOfPosts: "05(UR-01,OBC-02, SC-02,ST-01)",
                PayScale: "16,400 - 40,500",
                GradePay: "--",
                Eligibility: "--"
            }
            ]
        },
{
            HeadingTheme: "panel panel-danger",
            Title: "Allahbad Gramin Bank(AGB)",
            ApplicationEndDt: "12/02/2015",
            DetailedNotification: "http://www.allahabadgraminbank.in/career/Allahabad%20UP%20Gramin%20Bank-Advertisement.pdf.pdf",
            GoToSite: "http://www.allahabadgraminbank.in/career.html",
            ApplicationFee: "--",
            PublishedOn: "28/01/2015",
			Age: "read Adv",
			Logo:"agb.jpg",
			AltText: "Officer posts in Allahbad Gramin Bank(AGB)",
            JobDetails: [{
                Designation: "Officer Scale - I",
                NoOfPosts: "113(UR-41,OBC-41, SC-21, ST-10)",
                PayScale: "14500 - 25700",
                GradePay: "--",
                Eligibility: "qualified the CWE RRB-III September/ October 2014 of IBPS for RRBs"
            }
            ]
        },
{
            HeadingTheme: "panel panel-info",
            Title: "Bharat Electronics (BEL)",
            ApplicationEndDt: "08/02/2015",
            DetailedNotification: "http://bel-india.com/sites/default/files/Recruitments/Detailed%20Advt.pdf",
            GoToSite: "http://bel-india.com/",
            ApplicationFee: "300",
            PublishedOn: "01/2015",
			Age: "30 years as on 01/01/2015",
			Logo:"bel.jpg",
			AltText: "Bharat Electronics (BEL) Ghaziabad Engineering Assistant Trainee",
            JobDetails: [{
                Designation: "Contract Engineer",
                NoOfPosts: "25",
                PayScale: "15000 -20000 per month",
                GradePay: "--",
                Eligibility: "Read Adv"
            }
            ]
        },
{
            HeadingTheme: "panel panel-success",
            Title: "Bharat Electronics (BEL)",
            ApplicationEndDt: "14/02/2015",
            DetailedNotification: "https://jobapply.in/belghaziabad2015/",
            GoToSite: "http://bel-india.com/",
            ApplicationFee: "300",
            PublishedOn: "17/01/2015",
			Age: "28",
			Logo:"bel.jpg",
			AltText: "Bharat Electronics (BEL) Ghaziabad Engineering Assistant Trainee",
            JobDetails: [{
                Designation: "Engineering Assistant Trainee(EAT)",
                NoOfPosts: "11",
                PayScale: "4000 per month for 1 year",
                GradePay: "--",
                Eligibility: "Read Adv"
            }
            ]
        },
{
            HeadingTheme: "panel panel-danger",
            Title: "Karnataka Kerela Region(KKR)",
            ApplicationEndDt: "13/02/2015",
            DetailedNotification: "http://ssc.nic.in/notice/examnotice/ADVERTISEMENT%20NO.%20KKR-01-2015.pdf",
            GoToSite: "http://ssckkr.kar.nic.in",
            ApplicationFee: "check Advt",
            PublishedOn: "17/01/2015",
			Age: "refer advertisement",
			Logo:"ssc.jpg",
			AltText: "Job posts in Karnataka Kerela Region(KKR) by Staff Selection Commission(SSC",
            JobDetails: [{
                Designation: "Senior Radio Technician",
                NoOfPosts: "01(UR)",
                PayScale: "9300 - 34800",
                GradePay: "4200",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Research Assistant(Environment))",
                NoOfPosts: "08(UR-04,OBC01,SC-02,ST-01)",
               PayScale: "9300 - 34800",
                GradePay: "4200",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Technical Assistant",
                NoOfPosts: "01 UR",
                PayScale: "5200 - 20200",
                GradePay: "2800",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Technical Officer",
                NoOfPosts: "01 UR",
                PayScale: "9300 - 34800",
                GradePay: "4200",
                Eligibility: "Read Adv"
            }
            ]
        },
{
            HeadingTheme: "panel panel-info",
            Title: "National Hydroelectric power Corporation(NHPC)",
            ApplicationEndDt: "23/02/2015",
            DetailedNotification: "http://www.nhpcindia.com/writereaddata/Images/pdf/srd2015.pdf",
            GoToSite: "http://www.nhpcindia.com/career.htm",
            ApplicationFee: "check Advt",
            PublishedOn: "01/2015",
			Age: "refer advertisement",
			Logo:"nhpc.jpg",
			AltText: "National Hydroelectric power Corporation(NHPC) special drive for engineer and officer posts",
            JobDetails: [{
                Designation: "Trainee Engineer(Civil)",
                NoOfPosts: "35",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Trainee Engineer(Mechanical)",
                NoOfPosts: "16",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Trainee Engineer(E & C)",
                NoOfPosts: "05",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Trainee Engineer / Officer(IT)",
                NoOfPosts: "01",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Trainee Engineer / Officer(Geology)",
                NoOfPosts: "03",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Trainee Engineer / Officer(Geophysicist)",
                NoOfPosts: "01",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Trainee Engineer / Officer(Geo Technical)",
                NoOfPosts: "02",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Trainee Engineer / Officer(Earthquake)",
                NoOfPosts: "01",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Constable(General Duty)/Rifleman(GD)",
                NoOfPosts: "62390",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Trainee Officer(HR)",
                NoOfPosts: "05",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Trainee Officer(Finance)",
                NoOfPosts: "20",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Medical Officer",
                NoOfPosts: "05",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Trainee Officer(Law)",
                NoOfPosts: "03",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Trainee Officer(PR)",
                NoOfPosts: "03",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Assistant Rajbhasha Officer",
                NoOfPosts: "13",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Trainee Officer(Company Secretary)",
                NoOfPosts: "05",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Trainee Officer(Safety)",
                NoOfPosts: "10",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            }
            ]
        },
        {
            HeadingTheme: "panel panel-success",
            Title: "Assam Rifles 2015",
            ApplicationEndDt: "23/02/2015",
            DetailedNotification: "http://ssconline.nic.in/mainmenu2.php",
            GoToSite: "http://ssconline.nic.in/mainmenu2.php",
            ApplicationFee: "50",
            PublishedOn: "24/01/2015",
			Age: "18 - 23 as on 01/08/2015",
			Logo:"ssc.jpg",
			AltText: "Recruitment of constables(GD) in CAPFs and rifleman in Assam Rifles 2015",
            JobDetails: [{
                Designation: "Constable(General Duty)/Rifleman(GD)",
                NoOfPosts: "62390",
                PayScale: "5200 - 20200",
                GradePay: "2000",
                Eligibility: "10th pass or matriculation"
            }
            ]
        },
        {
            HeadingTheme: "panel panel-danger",
            Title: "Punjab PSC",
            ApplicationEndDt: "25/02/2015",
            DetailedNotification: "http://ppsc.gov.in/pdf/pcsj1415/dae.pdf",
            GoToSite: "http://ppsc.gov.in/advertisement_04.html",
            ApplicationFee: "--",
            PublishedOn: "21/01/2015",
			Age: "21 - 27 as on 25/02/2015",
			Logo:"PunjabPSC.jpg",
			AltText: "Civil Judge(Junior Division) cum judicial magistrate at Punjab PSC",
            JobDetails: [{
                Designation: "Civil Judge",
                NoOfPosts: "118",
                PayScale: "27,700-44,770",
                GradePay: "--",
                Eligibility: "1. Degree of Bachelor of Laws. 2. Punjabi upto Matric or its equivalent Standard"
            }
            ]
        },
		{
            HeadingTheme: "panel panel-warning",
            Title: "Indo Tibetan Border Police(ITBP)",
            ApplicationEndDt: "16/02/2015",
            DetailedNotification: "http://itbpolice.nic.in/eKiosk/writeReadData/RectAd/Fresh%20Advertisement%20CT%20%28dvr%29%202014.pdf",
            GoToSite: "http://itbpolice.nic.in/itbpwebsite/index.html",
            ApplicationFee: "50",
            PublishedOn: "2015",
			Age: "21 - 27",
			Logo:"itbp.jpg",
			AltText: "Constable Driver at Indo Tibetan Border Police(ITBP)",
            JobDetails: [{
                Designation: "Constable Driver",
                NoOfPosts: "472",
                PayScale: "5,200 - 20,200",
                GradePay: "2000",
                Eligibility: "1. Matriculation or 10th pass. 2. Valid driving license for light, medium or heavy vehicles with 2 years of driving experience"
            }
            ]
        }
];

var sectionRight = [
    {
        HeadingTheme: "panel panel-info",
        Title: "National Institute Of Financial Management",
        ApplicationEndDt: "01/06/2015",
        DetailedNotification: "http://nifm.ac.in/downloads/Brochures/NIFM-NISM%20Single%20Pages.pdf",
        GoToSite: "http://nifm.ac.in/Site/MiddlemenuDesc.aspx?Name=Vacancy",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "nifm.jpg",
        AltText: "Faculty Recruitment At NIFM",
        JobDetails: [{
            Designation: "Assistant Professor",
            NoOfPosts: "04",
            PayScale: "15,600 - 39,100",
            GradePay: "6,600",
            Eligibility: ""
        },
        {
            Designation: "Associate Professor",
            NoOfPosts: "02",
            PayScale: "15,600 - 39,100",
            GradePay: "7,600",
            Eligibility: ""
        },
        {
            Designation: "Hostel Manager",
            NoOfPosts: "01",
            PayScale: "9,300 - 34,800",
            GradePay: "4,600",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Bharti College - Delhi University",
        ApplicationEndDt: "01/05/2015",
        DetailedNotification: "https://drive.google.com/uc?export=download&id=0BxY-gM5xJz6VTnI2THk5MjlKems",
        GoToSite: "http://bharaticollege.com/online-application-form-for-the-post-assistant-professor/",
        ApplicationFee: "600",
        PublishedOn: "2015",
        Age: "--",
        Logo: "du.jpg",
        AltText: "DU Recruitment Of Assistant Professors",
        JobDetails: [{
            Designation: "Assistant Professor",
            NoOfPosts: "57",
            PayScale: "15,600 - 30,100",
            GradePay: "6,000",
            Eligibility: "The eligibility criteria and qualifications are as per the University of Delhi/UGC norms."
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "CSIR-Central Electronics Engineering Research Institute",
        ApplicationEndDt: "28/04/2015",
        DetailedNotification: "http://www.ceeri.res.in/recr/2015/Advt_No_02_GrIV_Eng_27032015.pdf",
        GoToSite: "http://www.cottageemporium.in/careers.php",
        ApplicationFee: "100",
        PublishedOn: "2015",
        Age: "--",
        Logo: "csir.jpg",
        AltText: "CEERI CSIR Recruitment Of Scientists",
        JobDetails: [{
            Designation: "Scientist / Senior Scientist",
            NoOfPosts: "33",
            PayScale: "15,600 - 39,100",
            GradePay: "6,600",
            Eligibility: ""
        },
        {
            Designation: "Principal Scientist / Senior Principal Scientist",
            NoOfPosts: "03",
            PayScale: "37,400 - 67,000",
            GradePay: "8,700",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "Central Cottage Industries Corporation of India Ltd.",
        ApplicationEndDt: "11/05/2015",
        DetailedNotification: "http://www.cottageemporium.in/pdf/Recruitment_2015.pdf",
        GoToSite: "http://www.cottageemporium.in/careers.php",
        ApplicationFee: "200",
        PublishedOn: "2015",
        Age: "--",
        Logo: "cottage.jpg",
        AltText: "Cottage Emporium Recruitment For Multiple Posts",
        JobDetails: [{
            Designation: "General Manager (Commercial / Marketing)",
            NoOfPosts: "01",
            PayScale: "32,900 - 58,000",
            GradePay: "",
            Eligibility: "2nd class graduate with MBA with specialization in Sales and Marketing from an Institute of repute"
        },
        {
            Designation: "Additional General Manager (Merchandising / Buying)",
            NoOfPosts: "01",
            PayScale: "32,900 - 58,000",
            GradePay: "",
            Eligibility: "2nd class graduate with MBA with specialization in Sales and Marketing from an Institute of repute"
        },
        {
            Designation: "General Manager (Commercial / Marketing)",
            NoOfPosts: "01",
            PayScale: "29,100 - 54,500",
            GradePay: "",
            Eligibility: "2nd class graduate with 50% marks in aggregate with MBA/Post Graduate Diploma in purchasing / Marketing in Handicrafts/ Handlooms etc. from an Institute of repute."
        },
        {
            Designation: "Manager (Marketing & Corporate Communication)",
            NoOfPosts: "01",
            PayScale: "24,900 - 50,500",
            GradePay: "",
            Eligibility: "2nd class graduate with MBA with specialization in Sales and Marketing from an Institute of repute"
        },
        {
            Designation: "Manager (Information Technology)",
            NoOfPosts: "01",
            PayScale: "24,900 - 50,500",
            GradePay: "",
            Eligibility: "MCA 1st class or equivalent"
        },
        {
            Designation: "Manager (Commercial, ISD & Publicity)",
            NoOfPosts: "01",
            PayScale: "24,900 - 50,500",
            GradePay: "",
            Eligibility: "2nd class graduate with MBA with specialization in Sales and Marketing from an Institute of repute "
        },
        {
            Designation: "Deputy Manager (Marketing & Corporate Communication)",
            NoOfPosts: "01",
            PayScale: "20,600 - 46,500",
            GradePay: "",
            Eligibility: "2nd class graduate with MBA with specialization in Sales and Marketing from an Institute of repute "
        },
        {
            Designation: "Deputy Manager (Finance)",
            NoOfPosts: "03",
            PayScale: "20,600 - 46,500",
            GradePay: "",
            Eligibility: "CA / MBA with specialization in Finance"
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Union Public Service Commission",
        ApplicationEndDt: "30/04/2015",
        DetailedNotification: "http://upsc.gov.in/recruitment/advt/2015/Advt_07_2015.pdf",
        GoToSite: "http://upsconline.nic.in/ora/VacancyNoticePub.php",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "upsc.jpg",
        AltText: "UPSC Recruitment For Multiple Posts",
        JobDetails: [{
            Designation: "Live Stock Officer",
            NoOfPosts: "01",
            PayScale: "9,300-34,800",
            GradePay: "4,600",
            Eligibility: "Bachelors Degree in Agriculture with Animal Science from a recognised University."
        },
        {
            Designation: "Junior Scientific Officer (Bio - Chemistry)",
            NoOfPosts: "01",
            PayScale: "15,600-39,100",
            GradePay: "5,400",
            Eligibility: "Post Graduate degree in Chemistry with specialisation in Bio-Chemistry from a recognised University or equivalent."
        },
        {
            Designation: "Associate Bacteriologist",
            NoOfPosts: "01",
            PayScale: "9,300-34,800",
            GradePay: "4,800",
            Eligibility: "M. Sc Degree in Bacteriology or Bio-chemistry or Micro-biology of a recognized University or equivalent."
        },
        {
            Designation: "Additional Law Officer",
            NoOfPosts: "01",
            PayScale: "37400- 67000",
            GradePay: "8700",
            Eligibility: " Educational A person shall not be eligible for appointment to a duty post in Grade II, unless he holds a Degree in Law of a recognised University or equivalent(-) and unless he has been a member of a State Judicial Service for a period of not less than thirteen years or has held a superior(/) post in the Legal Department of a State for a period of not less than thirteen years or is a Central Government servant who has had experience in legal affairs for not less than thirteen years or is a qualified legal practitioner(-/)."
        },
        {
            Designation: "Assistant Director (Grade-II) (Electrical)",
            NoOfPosts: "05",
            PayScale: "9,300-34,800",
            GradePay: "4,600",
            Eligibility: "Degree in Electrical Engineering from a recognized University / Institute or equivalent"
        },
        {
            Designation: "Assistant Director (Grade-II) (Electronics)",
            NoOfPosts: "05",
            PayScale: "9,300-34,800",
            GradePay: "4,600",
            Eligibility: "Degree in Electronics / Telecommunication Engineering from a recognized University/Institute or equivalent and B. EXPERIENCE Two years experience in a supervisory capacity in a technical / industrial unit in development and production of electronic components, equipments and instruments / testing / inspection of Electronics Engineering products or experience in promotion of small-scale industries in areas of entrepreneurship development and quality control."
        },
        {
            Designation: "Drugs Inspector",
            NoOfPosts: "07",
            PayScale: "9,300-34,800",
            GradePay: "4,800",
            Eligibility: "  Essential Degree in Pharmacy or Pharmaceutical Sciences or in Medicine with specialization in Clinical Pharmacology or Microbiology from a recognized University established in India by law."
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "State Bank Of India",
        ApplicationEndDt: "02/05/2015",
        DetailedNotification: "https://www.sbi.co.in/portal/documents/44978/143453/revised-crpd-sbipo-rectruitment-english+advertisement.pdf/65da1b01-0111-48f0-8019-7c9939e1aeab",
        GoToSite: "https://www.sbi.co.in/portal/web/home/careers-with-us",
        ApplicationFee: "600",
        PublishedOn: "13/04/2015",
        Age: "--",
        Logo: "sbi.jpg",
        AltText: "Recruitment Of Probationary Officers(SBI PO)",
        JobDetails: [{
            Designation: "Probationary Officers (POs)",
            NoOfPosts: "2000",
            PayScale: "16,900",
            GradePay: " 14500-600/7-18700-700/2-20100-800/7-25700",
            Eligibility: "Graduation in any discipline from a recognised University or any equivalent qualification recognised as such by the Central Government."
        }]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Cement Corporation Of India Ltd.",
        ApplicationEndDt: "18/04/2015",
        DetailedNotification: "http://www.cementcorporation.co.in/UserFiles/files/Employment%20Notice%20No%2002%20of%202015.pdf",
        GoToSite: "http://www.cementcorporation.co.in/",
        ApplicationFee: "200",
        PublishedOn: "2015",
        Age: "--",
        Logo: "cci.jpg",
        AltText: "Recruitment Of Jr. Chemist / Jr. Engg.(Process)/Burner",
        JobDetails: [{
            Designation: "Jr. Chemist",
            NoOfPosts: "03",
            PayScale: "8,600 - 20,900",
            GradePay: "",
            Eligibility: "M.Sc. with one year’s experience or B.Sc. with 3 years’ experience in Cement Industry."
        },
        {
            Designation: "Jr. Engg.(Process)/Burner",
            NoOfPosts: "05",
            PayScale: "12,500 - 30,400",
            GradePay: "",
            Eligibility: "Graduate in Science or Diploma in Chemical/Elect./Mech. Engg. with 2 years experience as Burner"
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Cement Corporation Of India Ltd.",
        ApplicationEndDt: "30/04/2015",
        DetailedNotification: "http://www.cementcorporation.co.in/UserFiles/files/ADVT_%2001-15%20mt-ADVT%282%29.pdf",
        GoToSite: "http://www.cementcorporation.co.in/",
        ApplicationFee: "500",
        PublishedOn: "08/04/2015",
        Age: "--",
        Logo: "cci.jpg",
        AltText: "Recruitment Of Management Trainees – in Chemical/Production, HR, Finance and Marketing. Disciplines",
        JobDetails: [{
            Designation: "Management Trainees – in Chemical/Production",
            NoOfPosts: "02",
            PayScale: "16,400 - 3% - 40,500",
            GradePay: "",
            Eligibility: "Full time & regular Bachelor Degree in Chemical Engineering/Full time & regular M. Sc. in Chemistry"
        },
        {
            Designation: "Management Trainees – in Human Resources",
            NoOfPosts: "02",
            PayScale: "16,400 - 3% - 40,500",
            GradePay: "",
            Eligibility: "Post Graduate Degree/Diploma/MBA/MSW - (2 years full time) in HRM/Personnel."
        },
        {
            Designation: "Management Trainees – in Finance",
            NoOfPosts: "02",
            PayScale: "16,400 - 3% - 40,500",
            GradePay: "",
            Eligibility: "Graduate from a recognized University and qualified Chartered or Cost & Works Accountants from recognized Institutions in India or abroad or MBA - 60% marks with specialization in Finance Management"
        },
        {
            Designation: "Management Trainees – in Marketing",
            NoOfPosts: "01",
            PayScale: "16,400 - 3% - 40,500",
            GradePay: "",
            Eligibility: "Post Graduate Degree/Diploma/MBA - (2 years full time) with specialization in Marketing Management "
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Vijaya Bank",
        ApplicationEndDt: "29/04/2015",
        DetailedNotification: "http://www.vijayabank.com/UserFiles/vijayabank/file/Vijaya%20Bank/Recruitment/ADVERTSEMENT-ENGLISH.pdf",
        GoToSite: "http://www.vijayabank.com/Careers",
        ApplicationFee: "300",
        PublishedOn: "08/04/2015",
        Age: "--",
        Logo: "vijaya_bank.jpg",
        AltText: "Recruitment Of Probationary Manager- Chartered Accountants In MMGS-II In Specialist Category",
        JobDetails: [{
            Designation: "Probationary Manager- Chartered Accountants",
            NoOfPosts: "27",
            PayScale: "19,400 - 28,100",
            GradePay: "",
            Eligibility: ""
        }]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Parliament Of India",
        ApplicationEndDt: "05/05/2015",
        DetailedNotification: "http://164.100.47.132/JRCell/Module/Notice/Advt.1-2015.pdf",
        GoToSite: "http://164.100.47.132/JRCell/Module/Notice/Advt.1-2015.pdf",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "lok_sabha.jpg",
        AltText: "Lok Sabha Recruitment Of Security Assistant Grade II",
        JobDetails: [{
            Designation: "Security Assistant Grade II",
            NoOfPosts: "12",
            PayScale: "9300 - 34800",
            GradePay: "4200",
            Eligibility: "Ex-Servicemen possessing qualification of Intermediate (Class XII) from a recognised Board and possessing experience/training in handling and operation of Arms and also well versed in all types of chores concerned with anti-sabotage checks, area sanitization, CCTV operation and other security related ground duties. Preference will be given to persons possessing Bachelor’s degree in any discipline"
        }]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Ellaquai Dehati Bank",
        ApplicationEndDt: "24/04/2015",
        DetailedNotification: "http://edb.org.in/Recruitment_Notice31032015.pdf",
        GoToSite: "http://edb.org.in/",
        ApplicationFee: "",
        PublishedOn: "10/04/2015",
        Age: "--",
        Logo: "edb.jpg",
        AltText: "EDB Recruitment Of Officer In Scale-II And III Through CWE-III(2014)",
        JobDetails: [{
            Designation: "Officer Scale-III",
            NoOfPosts: "02",
            PayScale: "25700 – 800/5 – 29700 900/2 - 31500",
            GradePay: "",
            Eligibility: "Eligibility Criteria is to be considered as per RRBs CWE-III Advertisement published in Employment News/Rozgar Samachar Issue Dated 28th June–4th July, 2014released by IBPS and posted on the IBPS‟s website www.ibps.in"
        },
        {
            Designation: "Officer Scale-II (General Banking Officer)",
            NoOfPosts: "09",
            PayScale: "19400 - 700/1 - 20100 – 800/10 - 28100",
            GradePay: "",
            Eligibility: "Eligibility Criteria is to be considered as per RRBs CWE-III Advertisement published in Employment News/Rozgar Samachar Issue Dated 28th June–4th July, 2014released by IBPS and posted on the IBPS‟s website www.ibps.in"
        },
        {
            Designation: "Officer Scale-II (IT)",
            NoOfPosts: "01",
            PayScale: "19400 - 700/1 - 20100 – 800/10 - 28100",
            GradePay: "",
            Eligibility: "Eligibility Criteria is to be considered as per RRBs CWE-III Advertisement published in Employment News/Rozgar Samachar Issue Dated 28th June–4th July, 2014released by IBPS and posted on the IBPS‟s website www.ibps.in"
        },
        {
            Designation: "Officer Scale-II (CA)",
            NoOfPosts: "01",
            PayScale: "19400 - 700/1 - 20100 – 800/10 - 28100",
            GradePay: "",
            Eligibility: "Eligibility Criteria is to be considered as per RRBs CWE-III Advertisement published in Employment News/Rozgar Samachar Issue Dated 28th June–4th July, 2014released by IBPS and posted on the IBPS‟s website www.ibps.in"
        },
        {
            Designation: "Officer Scale-II (Law)",
            NoOfPosts: "01",
            PayScale: "19400 - 700/1 - 20100 – 800/10 - 28100",
            GradePay: "",
            Eligibility: "Eligibility Criteria is to be considered as per RRBs CWE-III Advertisement published in Employment News/Rozgar Samachar Issue Dated 28th June–4th July, 2014released by IBPS and posted on the IBPS‟s website www.ibps.in"
        },
        {
            Designation: "Officer Scale-II (Agricultural Officer)",
            NoOfPosts: "01",
            PayScale: "19400 - 700/1 - 20100 – 800/10 - 28100",
            GradePay: "",
            Eligibility: "Eligibility Criteria is to be considered as per RRBs CWE-III Advertisement published in Employment News/Rozgar Samachar Issue Dated 28th June–4th July, 2014released by IBPS and posted on the IBPS‟s website www.ibps.in"
        },
        {
            Designation: "Officer Scale-I",
            NoOfPosts: "51",
            PayScale: "14500 - 600/7 – 18700 – 700/2 – 20100 – 800/7 - 25700",
            GradePay: "",
            Eligibility: "Eligibility Criteria is to be considered as per RRBs CWE-III Advertisement published in Employment News/Rozgar Samachar Issue Dated 28th June–4th July, 2014released by IBPS and posted on the IBPS‟s website www.ibps.in"
        },
        {
            Designation: "Office Assistant (Multipurpose)",
            NoOfPosts: "64",
            PayScale: "7200 - 400/3 – 8400 – 500/3 – 9900 – 600/4 – 12300 – 700/7 – 17200 – 1300/1 – 18500 – 800/1 - 19300",
            GradePay: "",
            Eligibility: "Eligibility Criteria is to be considered as per RRBs CWE-III Advertisement published in Employment News/Rozgar Samachar Issue Dated 28th June–4th July, 2014released by IBPS and posted on the IBPS‟s website www.ibps.in"
        }
        ]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Madhya Bihar Gramin Bank",
        ApplicationEndDt: "22/04/2015",
        DetailedNotification: "http://mbgbpatna.com/home/imagebag/image227_1427971707.pdf",
        GoToSite: "http://mbgbpatna.com/home/super_page_details.php?menu_id=Career",
        ApplicationFee: "100",
        PublishedOn: "07/04/2015",
        Age: "--",
        Logo: "mbgb.jpg",
        AltText: "MBGB Recruitment Of Officer In Scale-II And III Through CWE-III(2014)",
        JobDetails: [{
            Designation: "Officer MMG Scale-III",
            NoOfPosts: "01(OBC)",
            PayScale: "25,700 - 31,500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Officer MMG Scale-II(General Banking)",
            NoOfPosts: "27",
            PayScale: "19,400 - 28,100",
            GradePay: "",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Bharat Electronics Limited",
        ApplicationEndDt: "13/04/2015",
        DetailedNotification: "http://bel-india.com/sites/default/files/Recruitments/ADVT%20NCS%20detail-WEB%20FINAL.pdf",
        GoToSite: "http://www.bel-india.com/",
        ApplicationFee: "",
        PublishedOn: "02/04/2015",
        Age: "--",
        Logo: "bel.jpg",
        AltText: "Recruitment Of Managers/Engineers At BEL",
        JobDetails: [{
            Designation: "Dy. Manager (Civil)",
            NoOfPosts: "",
            PayScale: "24900 – 3%- 50500",
            GradePay: "E-IV",
            Eligibility: "BE/B.Tech (Civil)"
        },
        {
            Designation: "Sr.Engineer ( Civil)",
            NoOfPosts: "",
            PayScale: "20600 – 3%- 46500",
            GradePay: "E-III",
            Eligibility: "BE/B.Tech (Civil)"
        },
         {
             Designation: "Sr.Engineer ( Mechanical)",
             NoOfPosts: "",
             PayScale: "20600 – 3%- 46500",
             GradePay: "E-III",
             Eligibility: "BE /B.Tech (Mechanical)"
         },
          {
              Designation: "Sr.Engineer (Electrical)",
              NoOfPosts: "",
              PayScale: "20600 – 3%- 46500",
              GradePay: "E-III",
              Eligibility: "BE/B.Tech (Electrical)"
          }
        ]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Bharat Electronics Limited",
        ApplicationEndDt: "08/04/2015",
        DetailedNotification: "http://bel-india.com/sites/default/files/Recruitments/TN-CE-web-ad.pdf",
        GoToSite: "http://www.bel-india.com/",
        ApplicationFee: "",
        PublishedOn: "03/04/2015",
        Age: "--",
        Logo: "bel.jpg",
        AltText: "Recruitment Of Engineers On Contract for One Year At BEL",
        JobDetails: [{
            Designation: "Engineer",
            NoOfPosts: "85",
            PayScale: "18,000",
            GradePay: "",
            Eligibility: "First Class for GEN/OBC and Pass Class for SC/ST/PWD in B.E / B. Tech (Computer Science, IS, IT, ECE, EEE, Electronics & Telecommunication), M.C.A, M.Sc., (CS, IT) from a recognised University/Institution."
        }]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "Border Security Force",
        ApplicationEndDt: "",
        DetailedNotification: "http://bsf.nic.in/en/recruitment.html",
        GoToSite: "http://bsf.nic.in/en/recruitment.html",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "bsf.jpg",
        AltText: "BSF Recruitment Of Sports Persons Constables",
        JobDetails: [{
            Designation: "Constable",
            NoOfPosts: "346",
            PayScale: "5,200 - 20,200",
            GradePay: "2,800",
            Eligibility: "Matriculation or its equivalent"
        }]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "IIT Patna",
        ApplicationEndDt: "30/04/2015",
        DetailedNotification: "http://iitp.ac.in/faccareer/fac_adv_30_03-2015.pdf",
        GoToSite: "http://iitp.ac.in/index.php/notice-board/1089-faculty-positions-standing-advertisement.html",
        ApplicationFee: "",
        PublishedOn: "30/03/2015",
        Age: "--",
        Logo: "iitp.jpg",
        AltText: "IITP Recruitment Of Professors, Assistant Professor, And Associate Professor",
        JobDetails: [{
            Designation: "Assistant Professor (on contract)",
            NoOfPosts: "",
            PayScale: "15,600 - 39,100",
            GradePay: "6,000",
            Eligibility: " One should have a Ph.D. with first class or equivalent (in terms of Grades etc.) at the preceding degree in the appropriate branch with a very good academic record throughout and at least three years' post-Ph.D. experience in teaching/research/industry for the post of Assistant Professor (Regular)"
        },
        {
            Designation: "Assistant Professor",
            NoOfPosts: "",
            PayScale: "15,600 - 39,100",
            GradePay: "8,000",
            Eligibility: " One should have a Ph.D. with first class or equivalent (in terms of Grades etc.) at the preceding degree in the appropriate branch with a very good academic record throughout and at least three years' post-Ph.D. experience in teaching/research/industry for the post of Assistant Professor (Regular)"
        },
        {
            Designation: "Associate Professor",
            NoOfPosts: "",
            PayScale: "37,400 - 67,000",
            GradePay: "9,500",
            Eligibility: "One should have a Ph.D. with first class or equivalent (in terms of Grades etc.) at the preceding degree in the appropriate branch with a very good academic record throughout and a minimum of six years in teaching/research/industry of which at least three years should be at the level of Assistant Professor/Senior Scientific Officer/Senior Design Engineer or equivalent, excluding however, the experience gained while pursuing Ph.D."
        },
        {
            Designation: "Professor",
            NoOfPosts: "",
            PayScale: "37, 400 - 67,000",
            GradePay: "10,500",
            Eligibility: " One should have a Ph.D. with first class or equivalent (in terms of Grades etc.) at the preceding degree in the appropriate branch with a very good academic record throughout and a minimum of ten years of total post-Ph.D. experience in teaching/research/industry of which at least four years should be at the level of Associate Professor in any of the following: IITs, IISc Bangalore, IIMs, NITIE Mumbai and IISERs or at an equivalent level in any such industry or other Indian or foreign institution/institutions of comparable standards as may be so decided by the institute"
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "RITES",
        ApplicationEndDt: "21/04/2015",
        DetailedNotification: "http://rites.com/web/images/stories/uploadVacancy/HW_NATRIP_19_24.pdf",
        GoToSite: "http://rites.com/vacancy/",
        ApplicationFee: "",
        PublishedOn: "30/03/2015",
        Age: "--",
        Logo: "rites.jpg",
        AltText: "Professional in Civil Engg. discipline through Walk-in-Interview",
        JobDetails: [{
            Designation: "Engineer (Civil) – Test Tracks",
            NoOfPosts: "02",
            PayScale: "18420",
            GradePay: "",
            Eligibility: "Graduate in Civil Engg. from AICTE / Govt. approved institutes."
        },
        {
            Designation: "Engineer (CivilQC) – Tracks",
            NoOfPosts: "01",
            PayScale: "19550",
            GradePay: "",
            Eligibility: "Graduate in Civil Engg. from AICTE / Govt. approved institutes."
        },
        {
            Designation: "Safety Engineer (Civil)",
            NoOfPosts: "01",
            PayScale: "18420",
            GradePay: "",
            Eligibility: "Graduate in Civil Engg. from AICTE / Govt. approved institutes."
        },
        {
            Designation: "Surveyor (Civil) – Tracks",
            NoOfPosts: "01",
            PayScale: "13470",
            GradePay: "",
            Eligibility: "Diploma in Civil/Survey Engg. from AICTE / Govt. approved institutes"
        },
        {
            Designation: "Assistant Quantity Surveyors (Civil)",
            NoOfPosts: "05",
            PayScale: "11600",
            GradePay: "",
            Eligibility: "Diploma in Civil/Survey Engg. from AICTE / Govt. approved institutes"
        },
        {
            Designation: "Assistant Quality Control Engineer (Civil)",
            NoOfPosts: "06",
            PayScale: "11600",
            GradePay: "",
            Eligibility: "Diploma in Civil/Survey Engg. from AICTE / Govt. approved institutes"
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Daulat Ram College",
        ApplicationEndDt: "20/04/2015",
        DetailedNotification: "http://dr.du.ac.in/index.php?page=advertisement",
        GoToSite: "http://dr.du.ac.in/index.php?page=online-application-form-for-the-post-of-assistant-professor",
        ApplicationFee: "600",
        PublishedOn: "2015",
        Age: "--",
        Logo: "dlrc.jpg",
        AltText: "DLRC Recruitment For Assistant Professor",
        JobDetails: [{
            Designation: "Assistant Professor",
            NoOfPosts: "65",
            PayScale: "15,600 - 39,100",
            GradePay: "6,000",
            Eligibility: "Good academic record as defined by the concerned university with at least 55% marks (or an equivalent grade in a point scale wherever grading system is followed) at the Master’s Degree level in a relevant subject from an Indian University, or an equivalent degree from an accredited foreign university."
        }]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Punjab State Institute Of Sports",
        ApplicationEndDt: "20/04/2015",
        DetailedNotification: "http://gyaancheck.com/psis-job-april-2015.jpg",
        GoToSite: "http://gyaancheck.com/psis-job-april-2015.jpg",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "punjab_govt.jpg",
        AltText: "PSIS Recruitment of Coach, Physical Trainer, and Dietician",
        JobDetails: [{
            Designation: "Coach",
            NoOfPosts: "",
            PayScale: " ",
            GradePay: "",
            Eligibility: "NIS Diploma"
        },
        {
            Designation: "Physical Trainer",
            NoOfPosts: "",
            PayScale: " ",
            GradePay: "",
            Eligibility: "NIS Diploma"
        },
        {
            Designation: "Dietician",
            NoOfPosts: "",
            PayScale: " ",
            GradePay: "",
            Eligibility: "M.Sc. in Food and Nutrition, Dietetic, Nutrition with minimum 3 years experience"
        }
        ]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "Rajasthan Electronics And Instruments Ltd",
        ApplicationEndDt: "20/04/2015",
        DetailedNotification: "http://reiljp.com/pdf/REILad_37_Job%20Description%20Engineer.pdf",
        GoToSite: "http://reiljp.com/reilad37.html",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "reil.jpg",
        AltText: "Recruitment Of Engineer / Technician",
        JobDetails: [{
            Designation: "Engineer",
            NoOfPosts: "",
            PayScale: " 16400 - 3% - 40500",
            GradePay: "",
            Eligibility: "The incumbent should be a Bachelor of Engineering in Computer Science/Information Technology/Electronics & Communication Branch, with minimum 60% marks from a recognized University/Institution. The candidate should have a post qualification experience of three years or more in an industrial organization having hands-on working/exposure on installation, commissioning operation, maintenance & support on electronic equipment, computer systems, peripherals, data communication equipment, application software etc"
        },
        {
            Designation: "Technician",
            NoOfPosts: "",
            PayScale: "7300 - 3% - 18100",
            GradePay: "",
            Eligibility: "ITI (NCVT) in Electronics Mechanical/Radio & TV / Electrical/PASAA/ ‘O’ Level Computer Course equivalent to Foundation Level Course having minimum 60% marks with minimum 01 year Apprenticeship under the Apprenticeship Act. 1961, as applicable."
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "NIT Hamirpur",
        ApplicationEndDt: "05/05/2015",
        DetailedNotification: "http://www.nith.ac.in/recruitment/2015/iiitunaform.pdf",
        GoToSite: "http://www.nith.ac.in/recruitment/index.htm",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "nit_hamirpur.jpg",
        AltText: "Recruitment Of Lecturer",
        JobDetails: [{
            Designation: "Lecturer",
            NoOfPosts: "",
            PayScale: "54,000/47,000/44,000 p.m.",
            GradePay: "",
            Eligibility: ""
        }]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "NIT Hamirpur",
        ApplicationEndDt: "05/05/2015",
        DetailedNotification: "http://www.nith.ac.in/recruitment/2015/an1.pdf",
        GoToSite: "http://www.nith.ac.in/recruitment/index.htm",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "nit_hamirpur.jpg",
        AltText: "Faculty Recruitment For SC/ST/OBC",
        JobDetails: [{
            Designation: "Professor",
            NoOfPosts: "",
            PayScale: "37,400 - 67,000",
            GradePay: "10,500",
            Eligibility: ""
        },
        {
            Designation: "Associate Professor",
            NoOfPosts: "",
            PayScale: "37,400 - 67,000",
            GradePay: "9,500",
            Eligibility: ""
        },
        {
            Designation: "Assistant Professor",
            NoOfPosts: "",
            PayScale: "15,600 - 39,100",
            GradePay: "6,000",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Bharat Electronics Ltd",
        ApplicationEndDt: "10/04/2015",
        DetailedNotification: "http://bel-india.com/sites/default/files/Recruitments/PSR-AD-detail-Web-29.pdf",
        GoToSite: "http://sailcareers.com/bokaro",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "bel.jpg",
        AltText: "BEL Recruitment Of Senior Assistant Engineer",
        JobDetails: [{
            Designation: "Senior Assistant Engineer Electrical ",
            NoOfPosts: "19",
            PayScale: "12600 - 32500",
            GradePay: "",
            Eligibility: "3 Years Diploma in Electrical or equivalent"
        },
        {
            Designation: "Senior Assistant Engineer Mechanical",
            NoOfPosts: "02",
            PayScale: "12600 - 32500",
            GradePay: "",
            Eligibility: "3 Years Diploma in Mechanical or equivalent"
        },
        {
            Designation: "Senior Assistant Engineer Electronics",
            NoOfPosts: "06",
            PayScale: "12600 - 32500",
            GradePay: "",
            Eligibility: "3 Years Diploma in Electronics or equivalent"
        },
        {
            Designation: "Senior Assistant Engineer",
            NoOfPosts: "05",
            PayScale: "12600 - 32500",
            GradePay: "",
            Eligibility: "Graduation or equivalent"
        },
        {
            Designation: "Senior Assistant Engineer Electronics",
            NoOfPosts: "07",
            PayScale: "12600 - 32500",
            GradePay: "",
            Eligibility: "3 Years Diploma in Electronics or equivalent"
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Steel Authority Of India Ltd",
        ApplicationEndDt: "27/04/2015",
        DetailedNotification: "http://sailcareers.com/pdf/Model_advert_ACTT%20124.pdf",
        GoToSite: "http://sailcareers.com/bokaro",
        ApplicationFee: "150",
        PublishedOn: "30/03/2015",
        Age: "--",
        Logo: "sail.jpg",
        AltText: "SAIL Recruitment Of Attendant-cum-Technician Trainee- S-1",
        JobDetails: [{
            Designation: "Attendant-cum-Technician Trainee- S-1",
            NoOfPosts: "124",
            PayScale: "15830 – 3% - 22150",
            GradePay: "",
            Eligibility: "Matriculation and Govt. or PSU sponsored, ITI passed candidates having undergone at least one year’s training in an integrated steel plant."
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Bihar Public Service Commission",
        ApplicationEndDt: "30/04/2015",
        DetailedNotification: "http://bpsc.bih.nic.in/Advt/PR-06-2015-MDO.pdf",
        GoToSite: "http://bpsc.bih.nic.in/",
        ApplicationFee: "",
        PublishedOn: "27/03/2015",
        Age: "--",
        Logo: "bpsc.jpg",
        AltText: "BPSC Recruitment Of Mining Development Officer under Mines & Geology Dept., Bihar",
        JobDetails: [{
            Designation: "Mining Development Officer",
            NoOfPosts: "12",
            PayScale: "9300 - 34800",
            GradePay: "4800",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Bihar Public Service Commission",
        ApplicationEndDt: "18/04/2015",
        DetailedNotification: "http://bpsc.bih.nic.in/Advt/PR-05-2015-Dentist.pdf",
        GoToSite: "http://bpsc.bih.nic.in/",
        ApplicationFee: "",
        PublishedOn: "27/03/2015",
        Age: "--",
        Logo: "bpsc.jpg",
        AltText: "BPSC Recruitment Of Dentist",
        JobDetails: [{
            Designation: "Dentist",
            NoOfPosts: "558",
            PayScale: "9300 - 34800",
            GradePay: "5400",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "Madhya Pradesh Public Service Commission",
        ApplicationEndDt: "30/04/2015",
        DetailedNotification: "http://mpinfo.org/MPinfoStatic/rojgar/2015/3003/MPPSC.pdf",
        GoToSite: "http://www.mppsc.nic.in/",
        ApplicationFee: "",
        PublishedOn: "26/03/2015",
        Age: "--",
        Logo: "mppsc.jpg",
        AltText: "Recruitment Of Insurance Medical Officer/Assistant Surgeon",
        JobDetails: [{
            Designation: "Stenographer Grade III",
            NoOfPosts: "77",
            PayScale: "15200 - 39100",
            GradePay: "5400",
            Eligibility: "MBBS"
        }
        ]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "High Court Of Punjab And Haryana, Chandigarh",
        ApplicationEndDt: "26/04/2015",
        DetailedNotification: "https://www.recruitmenthighcourtchd.com/NewAdvertisment/advertisementsss.pdf",
        GoToSite: "https://www.recruitmenthighcourtchd.com/",
        ApplicationFee: "",
        PublishedOn: "06/04/2015",
        Age: "--",
        Logo: "punjab_haryana_high_court.jpg",
        AltText: "Recruitment Of Stenographer",
        JobDetails: [{
            Designation: "Stenographer Grade III",
            NoOfPosts: "157",
            PayScale: "5200 - 20200",
            GradePay: "2400",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Anna University, Chennai",
        ApplicationEndDt: "10/04/2015",
        DetailedNotification: "https://www.annauniv.edu/pdf/ADVT%20RECRUITMENT%20OF%20FACULTY%20POSITION.pdf",
        GoToSite: "https://www.annauniv.edu/",
        ApplicationFee: "",
        PublishedOn: "20/03/2015",
        Age: "--",
        Logo: "anna_university.jpg",
        AltText: "Faculty Recruitment at Anna University",
        JobDetails: [{
            Designation: "Associate Professor",
            NoOfPosts: "178",
            PayScale: "37400 - 67000",
            GradePay: "9000",
            Eligibility: ""
        },
        {
            Designation: "Professor",
            NoOfPosts: "102",
            PayScale: "37400 - 67000",
            GradePay: "10000",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Punjab Public Service Commission",
        ApplicationEndDt: "09/04/2015",
        DetailedNotification: "http://ppsc.gov.in/usermanual.ashx?id=c3570",
        GoToSite: "http://ppsc.gov.in/Advertisement/detailadv.aspx?advno=201540&postid=64",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "ppsc.jpg",
        AltText: "PPSC Four Hundred & Four Posts of Medical Officers (General)",
        JobDetails: [{
            Designation: "Medical Officers",
            NoOfPosts: "404",
            PayScale: "15600 - 39100",
            GradePay: "5400",
            Eligibility: "(i) M.B.B.S. (ii) Registered with the Punjab Medical Council or with any other duly constituted Medical Council in India; (iii) Knowledge of Punjabi Language upto Matriculation Standard or its equivalent. Candidate who do not possess this qualification shall have to acquire this qualification within six months of their joining the service failing which their services shall be terminated. (Relaxable for Sikh Migrants to the extent that they will have to acquire such qualification within two years after joining the service failing which their services shall liable to be terminated)"
        }]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "Punjab National Bank",
        ApplicationEndDt: "16/04/2015",
        DetailedNotification: "http://pnbindia.com/En/ui/Recruitment.aspx",
        GoToSite: "http://pnbindia.com/En/ui/Recruitment.aspx",
        ApplicationFee: "400",
        PublishedOn: "31/03/2015",
        Age: "--",
        Logo: "pnb.jpg",
        AltText: "PNB Recruitment OF Officers ",
        JobDetails: [{
            Designation: "Company Secretary",
            NoOfPosts: "01",
            PayScale: "MMG Scale III",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Manager Security",
            NoOfPosts: "35",
            PayScale: "MMG Scale II",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Officer Data Analyst",
            NoOfPosts: "01",
            PayScale: "JMG Scale I",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Officer(Industry) - Mechanical",
            NoOfPosts: "03",
            PayScale: "JMG Scale I",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Fire Officers",
            NoOfPosts: "09",
            PayScale: "JMG Scale I",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Officer(Printing Technology)",
            NoOfPosts: "03",
            PayScale: "JMG Scale I",
            GradePay: "",
            Eligibility: ""
        },
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Brahmaputra Valley Fertilizer Corporation Limited",
        ApplicationEndDt: "08/05/2015",
        DetailedNotification: "http://www.bvfcl.com/Uploads/File/Careers/Ad-MT-240315.pdf",
        GoToSite: "http://www.bvfcl.com/showpage.asp?id=56",
        ApplicationFee: "500",
        PublishedOn: "25/03/2015",
        Age: "--",
        Logo: "bfvcl.jpg",
        AltText: "BFVCL Recruitment Of Management Trainee",
        JobDetails: [{
            Designation: "Management Trainee Chemical",
            NoOfPosts: "15",
            PayScale: "8600 - 250 - 14600",
            GradePay: "",
            Eligibility: "Full time BE / B.Tech in Chemical Engineering"
        },
        {
            Designation: "Management Trainee Mechanical",
            NoOfPosts: "05",
            PayScale: "8600 - 250 - 14600",
            GradePay: "",
            Eligibility: "Full time BE/B.Tech in Mechanical Eng ineering"
        },
        {
            Designation: "Management Trainee Electrical",
            NoOfPosts: "05",
            PayScale: "8600 - 250 - 14600",
            GradePay: "",
            Eligibility: "Full time BE/B.Tech in Electrical Engineering "
        },
        {
            Designation: "Management Trainee Instrumentation",
            NoOfPosts: "05",
            PayScale: "8600 - 250 - 14600",
            GradePay: "",
            Eligibility: "Full time BE/B.Tech in Instrumentation OR Electronics Engineering"
        },
        {
            Designation: "Management Trainee Civil",
            NoOfPosts: "02",
            PayScale: "8600 - 250 - 14600",
            GradePay: "",
            Eligibility: "Full time BE / B.Tech in Civil Engineering"
        },
        {
            Designation: "Management Trainee Materials Management",
            NoOfPosts: "04",
            PayScale: "8600 - 250 - 14600",
            GradePay: "",
            Eligibility: "Full time Degree in Engineering or Two year full time MBA/ P.G Diploma with spec ialization in Materials Management."
        },
        {
            Designation: "Management Trainee Finance & Accounts",
            NoOfPosts: "07",
            PayScale: "8600 - 250 - 14600",
            GradePay: "",
            Eligibility: "Graduate with CA/ICWA"
        },
        {
            Designation: "Management Trainee Personnel & Administration",
            NoOfPosts: "02",
            PayScale: "8600 - 250 - 14600",
            GradePay: "",
            Eligibility: "Two year full time P.G. degree or diploma in PM&IR/HRM/ Labour & Social Works/ MBA with specialisation in PM &IR /HRM."
        },
        {
            Designation: "Management Trainee Legal",
            NoOfPosts: "01",
            PayScale: "8600 - 250 - 14600",
            GradePay: "",
            Eligibility: "Full time regular BL or L.LB. degree with minimum 02 years experience of legal practice"
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "National Institute Of Technology Goa",
        ApplicationEndDt: "24/04/2015",
        DetailedNotification: "http://www.nitgoa.ac.in/fac_rec/FacultyRecruitement/845Faculty%20advt%2026mar15.pdf",
        GoToSite: "http://www.nitgoa.ac.in/fac_rec/fac_rec.aspx",
        ApplicationFee: "",
        PublishedOn: "26/03/2015",
        Age: "--",
        Logo: "nit_goa.jpg",
        AltText: "Recruitment of Professors, Assistant Professors and Associate Professors",
        JobDetails: [{
            Designation: "Assistant Professor",
            NoOfPosts: "08",
            PayScale: "15600 - 39100",
            GradePay: "6,000",
            Eligibility: "Ph.D. "
        },
        {
            Designation: "Associate Professor",
            NoOfPosts: "09",
            PayScale: "37400 - 67000",
            GradePay: "9,500",
            Eligibility: "Ph.D. "
        },
        {
            Designation: "Professor",
            NoOfPosts: "05",
            PayScale: "37400 - 67000",
            GradePay: "10,500",
            Eligibility: "Ph.D. "
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Saha Institute Of Nuclear Physics",
        ApplicationEndDt: "20/05/2015",
        DetailedNotification: "http://www.saha.ac.in/web/portal/applications/vacancy/file/25_03_2015.pdf",
        GoToSite: "http://www.saha.ac.in/web/job-opportunities",
        ApplicationFee: "",
        PublishedOn: "25/03/2015",
        Age: "--",
        Logo: "saha_institute.jpg",
        AltText: "Saha Institute Of Nuclear Physics Recruitment of Scientific Assistant-‘B’ & Technician-‘B’",
        JobDetails: [{
            Designation: "Scientific Assistant-‘B’",
            NoOfPosts: "05",
            PayScale: "9300 - 34800",
            GradePay: "4,200",
            Eligibility: ""
        },
        {
            Designation: "Technician-‘B’",
            NoOfPosts: "06",
            PayScale: ".5200 - 20200",
            GradePay: "2,000",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Sikkim University",
        ApplicationEndDt: "30/04/2015",
        DetailedNotification: "http://www.cus.ac.in/images/contents/Dya/ad/2015/recruitment_2015/SU_Ad_Teaching_Recruitment_2015.pdf",
        GoToSite: "http://www.cus.ac.in/index.php/su-rec-teaching-2015",
        ApplicationFee: "300",
        PublishedOn: "22/03/2015",
        Age: "--",
        Logo: "sikkim_university.jpg",
        AltText: "Sikkim University Faculty Recruitment",
        JobDetails: [{
            Designation: "Professor",
            NoOfPosts: "",
            PayScale: "37400 - 67000",
            GradePay: "10000",
            Eligibility: "An eminent scholar with Ph.D. degree in the concerned/allied/relevant discipline and published work of high quality, actively engaged in research with evidence of published work with at least 10 publications as books and/or research/policy papers in indexed/ISBN/ISSN numbered journals and/orISBN/ISSN numbered books."
        },
        {
            Designation: "Associate Professor",
            NoOfPosts: "",
            PayScale: "37400 - 67000",
            GradePay: "9000",
            Eligibility: "Good academic record with a Ph.D. degree in the concerned/allied/relevant disciplines"
        },
        {
            Designation: "Assistant Professor",
            NoOfPosts: "",
            PayScale: "15600 - 39100",
            GradePay: "6000",
            Eligibility: "Good academic record as defined by the concerned university with at least 55% marks or equivalent grade where grading system is practiced at the Master’s degree level in a relevant subject from an Indian University, or an equivalent degree from an accredited foreign university. 5% relaxation shall be made for DA/SC/ST/OBC candidates and those with PhD prior to September 1991."
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Mega Metro",
        ApplicationEndDt: "30/04/2015",
        DetailedNotification: "http://www.gujaratmetrorail.com/Career_Documents/18.03.2015/Recruitment%20Notification%20-%20Technical%20Staff%202015.pdf",
        GoToSite: "http://www.gujaratmetrorail.com/career.html",
        ApplicationFee: "",
        PublishedOn: "17/03/2015",
        Age: "--",
        Logo: "mega_metro.jpg",
        AltText: "Gujrat Metro Recruitment For Appointment On Contract Basis",
        JobDetails: [{
            Designation: "Deputy General Manager (Construction)",
            NoOfPosts: "01",
            PayScale: " 90000/- to Rs.120000/- p.m.",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Assistant General Manager (QA & QC)",
            NoOfPosts: "01",
            PayScale: "75000/- to 100000/- p.m.",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Assistant General Manager (Architect)",
            NoOfPosts: "01",
            PayScale: "75000/- to 100000/- p.m.",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Manager (Civil)",
            NoOfPosts: "05",
            PayScale: "50000/- to 65000/- p.m.",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Deputy Manager (Civil)",
            NoOfPosts: "05",
            PayScale: "40000/- to 55000/- p.m.",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Assistant Manager (Civil)",
            NoOfPosts: "05",
            PayScale: "25000/- to 40000/- p.m.",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Engineer (Civil)",
            NoOfPosts: "05",
            PayScale: "20000/- to 30000/- p.m.",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Deputy Manager (Electrical - Traction)",
            NoOfPosts: "01",
            PayScale: "40000/- to 55000/- p.m.",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Deputy Manager (Electrical - E& M) ",
            NoOfPosts: "01",
            PayScale: "40000/- to 55000/- p.m.",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Deputy Manager (Signaling)",
            NoOfPosts: "01",
            PayScale: "40000/- to 55000/- p.m.",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Assistant Manager (Electrical - Traction)",
            NoOfPosts: "01",
            PayScale: "25000/- to 40000/- p.m.",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Assistant Manager (Signaling)",
            NoOfPosts: "01",
            PayScale: "25000/- to 40000/- p.m.",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Assistant Manager (Telecom)",
            NoOfPosts: "01",
            PayScale: "25000/- to 40000/- p.m.",
            GradePay: "",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "Ministry Of Environment, Forest And Climate Change",
        ApplicationEndDt: "30/04/2015",
        DetailedNotification: "http://envfor.nic.in/sites/default/files/ADv_dated_23_03_2015.pdf",
        GoToSite: "http://envfor.nic.in/tenders-advertisements/filling-vacant-25-group-scientific-posts-ministry",
        ApplicationFee: "",
        PublishedOn: "21/03/2015",
        Age: "--",
        Logo: "envfor.jpg",
        AltText: "Filling up of vacant 25 Group 'A' Scientific posts in the Ministry",
        JobDetails: [{
            Designation: "Scientist 'F'",
            NoOfPosts: "05",
            PayScale: "37400 - 67000",
            GradePay: "8900",
            Eligibility: ""
        },
        {
            Designation: "Scientist 'D'",
            NoOfPosts: "10",
            PayScale: "15600 - 39100",
            GradePay: "7600",
            Eligibility: ""
        },
        {
            Designation: "Scientist 'C'",
            NoOfPosts: "08",
            PayScale: "15600 - 39100",
            GradePay: "6600",
            Eligibility: ""
        },
        {
            Designation: "Scientist 'B'",
            NoOfPosts: "02",
            PayScale: "15600 - 39100",
            GradePay: "5400",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Defence Research And Development Organisation",
        ApplicationEndDt: "10/04/2015",
        DetailedNotification: "http://rac.gov.in/cgibin/2015/advt_117/public/pdf/advt_117.pdf?82b12f18816fe7964eb15fc1d52ccf51=1",
        GoToSite: "http://rac.gov.in/index.php?lang=en&id=0",
        ApplicationFee: "",
        PublishedOn: "",
        Age: "--",
        Logo: "drdo.jpg",
        AltText: "DRDO Special Recruitment Drive for the post of Scientist ‘B’ For OBC/SC/ST Candidates",
        JobDetails: [{
            Designation: "Electronics & Communication Engg",
            NoOfPosts: "06",
            PayScale: "15,600 - 39,100",
            GradePay: "5,400",
            Eligibility: "At least First Class Bachelor's Degree in Engineering or Technology in Electronics & Communication Engg. only, from a recognized university or equivalent. "
        },
        {
            Designation: "Computer Sc. & Engg.",
            NoOfPosts: "04",
            PayScale: "15,600 - 39,100",
            GradePay: "5,400",
            Eligibility: "At least First Class Bachelor's Degree in Engineering or Technology in Computer Sc. & Engg. only, from a recognized university or equivalent."
        },
        {
            Designation: "Mechanical Engg.",
            NoOfPosts: "08",
            PayScale: "15,600 - 39,100",
            GradePay: "5,400",
            Eligibility: "At least First Class Bachelor's Degree in Engineering or Technology in Mechanical Engg. only, from a recognized university or equivalent."
        },
        {
            Designation: "Aeronautical Engg.",
            NoOfPosts: "03",
            PayScale: "15,600 - 39,100",
            GradePay: "5,400",
            Eligibility: "At least First Class Bachelor's Degree in Engineering or Technology in Aeronautical Engg. only, from a recognized university or equivalent."
        },
        {
            Designation: "Electrical Engg",
            NoOfPosts: "06",
            PayScale: "15,600 - 39,100",
            GradePay: "5,400",
            Eligibility: "At least First Class Bachelor's Degree in Engineering or Technology in Electrical Engg. only, from a recognized university or equivalent."
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Bharat Electronics Limited",
        ApplicationEndDt: "31/03/2015",
        DetailedNotification: "http://bel-india.com/sites/default/files/Recruitments/website-AD-English-1-10-March-2015.pdf",
        GoToSite: "http://bel-india.com/recruitment",
        ApplicationFee: "",
        PublishedOn: "",
        Age: "--",
        Logo: "bel.jpg",
        AltText: "Recruitment of ME/M.TECH Engineers For BEL HYD UNIT",
        JobDetails: [{
            Designation: "Deputy Engineer",
            NoOfPosts: "04",
            PayScale: "16,400/- 3% - Rs. 40,500",
            GradePay: "",
            Eligibility: "Full time M.E. / M. Tech/MS graduates from any AICTE approved institution with First Class for General & OBC candidates and Pass for SC/ST/PWD candidates in the following discipline"
        }]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Bharat Electronics Limited",
        ApplicationEndDt: "01/04/2015",
        DetailedNotification: "http://bel-india.com/sites/default/files/Recruitments/Chemical%20Engineer%20web%20ad.pdf",
        GoToSite: "http://bel-india.com/recruitment",
        ApplicationFee: "",
        PublishedOn: "",
        Age: "--",
        Logo: "bel.jpg",
        AltText: "Engineer Recruitment at BEL",
        JobDetails: [{
            Designation: "Deputy Engineer",
            NoOfPosts: "02",
            PayScale: "16400 - 40500",
            GradePay: "",
            Eligibility: "B.E./B.Tech in Chemical Engineering"
        }]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "Mahatma Gandhi Antarrashtriya Vishwavidyalya",
        ApplicationEndDt: "22/04/2015",
        DetailedNotification: "http://www.mgahv.in/Pdf/ADVT/Advt._No.__Dated_27.02.Pdf",
        GoToSite: "http://www.mgahv.in/",
        ApplicationFee: "",
        PublishedOn: "27/02/2015",
        Age: "--",
        Logo: "mgahv.jpg",
        AltText: "Faculty Recruitment at MGAHV",
        JobDetails: [{
            Designation: "Professor",
            NoOfPosts: "07",
            PayScale: "37400 - 67000",
            GradePay: "10000",
            Eligibility: ""
        },
        {
            Designation: "Associate Professor",
            NoOfPosts: "05",
            PayScale: "37400 - 67000",
            GradePay: "9000",
            Eligibility: ""
        },
        {
            Designation: "Assistant Professor",
            NoOfPosts: "20",
            PayScale: "15600 - 39100",
            GradePay: "6000",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Narmada Jhabua Gramin Bank",
        ApplicationEndDt: "08/04/2015",
        DetailedNotification: "http://www.njgb.in/pdf/career/advertisement.pdf",
        GoToSite: "http://www.njgb.in/career/advertisment.php",
        ApplicationFee: "100",
        PublishedOn: "24/03/2015",
        Age: "--",
        Logo: "njgb.jpg",
        AltText: "NJBG post of Officer for those who are declared qualified at the Online CWE for RRBs conducted by IBPS during September/ October 2014",
        JobDetails: [{
            Designation: "Officer Scale-II (General Banking Officer)",
            NoOfPosts: "10",
            PayScale: "19400-700/1-20100-800/10-28100",
            GradePay: "",
            Eligibility: "Eligibility Criteria is to be considered as per RRBs CWE-III Advertisement published in Employment News/Rozgar Samachar Issue Dated 28th June – 4th July, 2014 released by IBPS and posted on the IBPS’s website www.ibps.in."
        },
        {
            Designation: "Officer Scale-II (IT)",
            NoOfPosts: "03",
            PayScale: "19400-700/1-20100-800/10-28100",
            GradePay: "",
            Eligibility: "Eligibility Criteria is to be considered as per RRBs CWE-III Advertisement published in Employment News/Rozgar Samachar Issue Dated 28th June – 4th July, 2014 released by IBPS and posted on the IBPS’s website www.ibps.in."
        },
        {
            Designation: "Officer Scale-II (CA)",
            NoOfPosts: "01",
            PayScale: "19400-700/1-20100-800/10-28100",
            GradePay: "",
            Eligibility: "Eligibility Criteria is to be considered as per RRBs CWE-III Advertisement published in Employment News/Rozgar Samachar Issue Dated 28th June – 4th July, 2014 released by IBPS and posted on the IBPS’s website www.ibps.in."
        },
        {
            Designation: "Officer Scale-II (Treasury Manager)",
            NoOfPosts: "01",
            PayScale: "19400-700/1-20100-800/10-28100",
            GradePay: "",
            Eligibility: "Eligibility Criteria is to be considered as per RRBs CWE-III Advertisement published in Employment News/Rozgar Samachar Issue Dated 28th June – 4th July, 2014 released by IBPS and posted on the IBPS’s website www.ibps.in."
        },
        {
            Designation: "Officer Scale-II (Agricultural Officer)",
            NoOfPosts: "03",
            PayScale: "19400-700/1-20100-800/10-28100",
            GradePay: "",
            Eligibility: "Eligibility Criteria is to be considered as per RRBs CWE-III Advertisement published in Employment News/Rozgar Samachar Issue Dated 28th June – 4th July, 2014 released by IBPS and posted on the IBPS’s website www.ibps.in."
        },
        {
            Designation: "Officer Scale-I",
            NoOfPosts: "114",
            PayScale: "14500-600/7-18700-700/2-20100-800/7-25700",
            GradePay: "",
            Eligibility: "Eligibility Criteria is to be considered as per RRBs CWE-III Advertisement published in Employment News/Rozgar Samachar Issue Dated 28th June – 4th July, 2014 released by IBPS and posted on the IBPS’s website www.ibps.in."
        },
        {
            Designation: "Office Assistant (Multipurpose)",
            NoOfPosts: "218",
            PayScale: "7200-400/3-8400-500/3-9900-600/4-12300-700/7-17200-1300/1-18500-800/1-19300",
            GradePay: "",
            Eligibility: "Eligibility Criteria is to be considered as per RRBs CWE-III Advertisement published in Employment News/Rozgar Samachar Issue Dated 28th June – 4th July, 2014 released by IBPS and posted on the IBPS’s website www.ibps.in."
        }
        ]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Rajendra Institute of Medical Sciences",
        ApplicationEndDt: "30/04/2015",
        DetailedNotification: "http://www.rimsranchi.org/current/recruitment.htm",
        GoToSite: "http://www.rimsranchi.org/current/recruitment.htm",
        ApplicationFee: "500",
        PublishedOn: "12/03/2015",
        Age: "--",
        Logo: "rims.jpg",
        AltText: "Faculty Recruitment at RIMS",
        JobDetails: [{
            Designation: "Professor",
            NoOfPosts: "03",
            PayScale: "",
            GradePay: "",
            Eligibility: "",
        },
        {
            Designation: "Associate Professor",
            NoOfPosts: "08",
            PayScale: "",
            GradePay: "",
            Eligibility: "",
        },
        {
            Designation: "Assistant Professor",
            NoOfPosts: "11",
            PayScale: "",
            GradePay: "",
            Eligibility: "",
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Telangana Grameen Bank",
        ApplicationEndDt: "27/03/2015",
        DetailedNotification: "http://www.tgbhyd.in/adminpanel/tender/Ad%20for%20RRBs-2014-15%20FINAL.pdf",
        GoToSite: "http://www.tgbhyd.in/",
        ApplicationFee: "",
        PublishedOn: "12/03/2015",
        Age: "--",
        Logo: "tgb.jpg",
        AltText: "TBG Recuitment of Officers through IBPS",
        JobDetails: [{
            Designation: "Officer Scale-III",
            NoOfPosts: "04",
            PayScale: "25,700-800/5-29,700-900/2-31,500",
            GradePay: "",
            Eligibility: "",
        },
        {
            Designation: "Officer Scale-II (General Banking Officer)",
            NoOfPosts: "18",
            PayScale: "19,400-700/1-20,100-800/10-28,100",
            GradePay: "",
            Eligibility: "",
        },
        {
            Designation: "Officer Scale-II (IT)",
            NoOfPosts: "03",
            PayScale: "19,400-700/1-20,100-800/10-28,100",
            GradePay: "",
            Eligibility: "",
        },
        {
            Designation: "Officer Scale-II (CA) ",
            NoOfPosts: "01",
            PayScale: "19,400-700/1-20,100-800/10-28,100",
            GradePay: "",
            Eligibility: "",
        },
        {
            Designation: "Officer Scale-II (Law)",
            NoOfPosts: "01",
            PayScale: "19,400-700/1-20,100-800/10-28,100",
            GradePay: "",
            Eligibility: "",
        },
        {
            Designation: "Officer Scale-II (Treasury Manager)",
            NoOfPosts: "01",
            PayScale: "19,400-700/1-20,100-800/10-28,100",
            GradePay: "",
            Eligibility: "",
        },
        {
            Designation: "Officer Scale-II (Agricultural Officer)",
            NoOfPosts: "01",
            PayScale: "19,400-700/1-20,100-800/10-28,100",
            GradePay: "",
            Eligibility: "",
        },
        {
            Designation: "Officer Scale-I",
            NoOfPosts: "78",
            PayScale: "14,500-600/7-18,700-700/2-20,100-800/7-25,700",
            GradePay: "",
            Eligibility: "",
        },
        {
            Designation: "Office Assistant (Multipurpose)",
            NoOfPosts: "136",
            PayScale: "7200-400/3-8,400-500/3-9,900-600/4-12,300-700/7-17,200-1300/01-18,500-800/1-19,300",
            GradePay: "",
            Eligibility: "",
        },
        ]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Power Grid Corporation of India Limited",
        ApplicationEndDt: "22/05/2015",
        DetailedNotification: "http://www.powergridindia.com/_layouts/PowerGrid/WriteReadData/file/career/cc/2015/et-law/Detailed_Advt_ET%2020_CLAT.pdf",
        GoToSite: "http://www.powergridindia.com/_layouts/PowerGrid/User/ContentPage.aspx?PId=166&LangID=English",
        ApplicationFee: "",
        PublishedOn: "01/05/2015",
        Age: "--",
        Logo: "powergrid.jpg",
        AltText: "Power Grid Recruitment for Executive Trainee (Law) -2015 through CLAT-2015",
        JobDetails: [{
            Designation: "Executive Trainee (Law)",
            NoOfPosts: "10",
            PayScale: "24900 - 50500",
            GradePay: "10000",
            Eligibility: "",
        }]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Narendra Deva University of Agriculture and Technology",
        ApplicationEndDt: "13/04/2015",
        DetailedNotification: "http://www.nduat.in/Doc/advertisementagriculture170315.pdf",
        GoToSite: "http://www.nduat.in/",
        ApplicationFee: "1500",
        PublishedOn: "25/03/2015",
        Age: "--",
        Logo: "nduat.jpg",
        AltText: "NDUAT Recruitment of Faculty",
        JobDetails: [{
            Designation: "Professor",
            NoOfPosts: "01",
            PayScale: "37400 - 67000",
            GradePay: "10000",
            Eligibility: "",
        },
        {
            Designation: "Associate Professor",
            NoOfPosts: "11",
            PayScale: "37400 - 67000",
            GradePay: "9000",
            Eligibility: "",
        },
        {
            Designation: "Assistant Professor",
            NoOfPosts: "22",
            PayScale: "15600 - 39100",
            GradePay: "6000",
            Eligibility: "",
        }
        ]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "Bharat Earth Movers Limited",
        ApplicationEndDt: "13/04/2015",
        DetailedNotification: "http://www.bemlindia.com/documents/jobs/Advt_KP_S_1_2015.pdf",
        GoToSite: "http://www.bemlindia.com/Job_KP_S_01_2015.php",
        ApplicationFee: "200",
        PublishedOn: "25/03/2015",
        Age: "--",
        Logo: "beml.jpg",
        AltText: "BEML Recruitment for Managers and Rajbhasha Officers",
        JobDetails: [{
            Designation: "Deputy General Manager",
            NoOfPosts: "19",
            PayScale: "36600 - 62000",
            GradePay: "",
            Eligibility: "",
        },
        {
            Designation: "Assistant General Manager",
            NoOfPosts: "21",
            PayScale: "32900 - 58000",
            GradePay: "",
            Eligibility: "",
        },
        {
            Designation: "Assistant Officer(Rajbhasha)",
            NoOfPosts: "01",
            PayScale: "12600 - 32500",
            GradePay: "",
            Eligibility: "",
        },
        {
            Designation: "Office Assistant Trainee(Rajbhasha)",
            NoOfPosts: "01",
            PayScale: "7000 - 20000",
            GradePay: "",
            Eligibility: "",
        }
        ]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Center For Development Of Advanced Computing",
        ApplicationEndDt: "06/04/2015",
        DetailedNotification: "http://www.cdac.in/index.aspx?id=ca_pune_march_technical",
        GoToSite: "http://www.cdac.in/index.aspx?id=ca_pune_march_2015",
        ApplicationFee: "500",
        PublishedOn: "17/03/2015",
        Age: "--",
        Logo: "cdac.jpg",
        AltText: "CDAC Recruitment For Engineers",
        JobDetails: [{
            Designation: "Senior Technical Officer/ Senior Engineer",
            NoOfPosts: "12",
            PayScale: "PB3 15600-39100",
            GradePay: "6600",
            Eligibility: "a. 1st class B. E./ B. Tech./ MCA/ or equivalent degree in relevant discipline with 3 years experience OR Postgraduate in Engineering/Technology in relevant discipline with 1 year experience 1st class Postgraduate degree in relevant discipline with 3 years experience or Postgraduate degree in domain specific discipline. with 3 years experience PhD in relevant discipline.",
        },
        {
            Designation: "Technical Officer/ Engineer",
            NoOfPosts: "92",
            PayScale: "PB3 15600-39100",
            GradePay: "5400",
            Eligibility: "a. 1st class B. E./ B. Tech./ MCA/ or equivalent degree in relevant discipline. OR Postgraduate in Engineering/Technology in relevant discipline. OR 1st class Postgraduate degree in Science in relevant discipline or Postgraduate degree in domain specific discipline.",
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Water And Power Consultancy Services",
        ApplicationEndDt: "31/03/2015",
        DetailedNotification: "http://wapcos.gov.in/Applicant/AdvertisementList.aspx",
        GoToSite: "http://wapcos.gov.in/Applicant/AdvertisementList.aspx",
        ApplicationFee: "",
        PublishedOn: "17/03/2015",
        Age: "--",
        Logo: "wapcos.jpg",
        AltText: "WAPCOS Recruitment For Engineers",
        JobDetails: [{
            Designation: "Engineer Civil",
            NoOfPosts: "05",
            PayScale: "",
            GradePay: "",
            Eligibility: "",
        },
        {
            Designation: "Surveyor",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: "",
        },
        {
            Designation: "Geologist",
            NoOfPosts: "04",
            PayScale: "",
            GradePay: "",
            Eligibility: "",
        },
        {
            Designation: "Geophysicist",
            NoOfPosts: "04",
            PayScale: "",
            GradePay: "",
            Eligibility: "",
        },
        {
            Designation: "Sr. Engineer",
            NoOfPosts: "03",
            PayScale: "",
            GradePay: "",
            Eligibility: "",
        },
        {
            Designation: "Dy. Chief Engineer",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: "",
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Vasantrao Naik Marathwada Krishi Vidyapeeth",
        ApplicationEndDt: "10/04/2015",
        DetailedNotification: "http://jipmer.edu.in/wp-content/uploads/2015/02/SPECIAL-RECRUITMENT-DRIVE-FOR-FILLING-UP-THE-POST-OF-STAFF-NURSE-UNDER-ST-CATEGORY-ONLY.pdf",
        GoToSite: "http://mkv2.mah.nic.in/reg/advt.html",
        ApplicationFee: "1000",
        PublishedOn: "10/03/2015",
        Age: "--",
        Logo: "vnmkv.jpg",
        AltText: "VNKMV Revruitment for Assistant Professor and Assistant Registrar",
        JobDetails: [{
            Designation: "Assistant Professor",
            NoOfPosts: "44",
            PayScale: "15600 - 39100",
            GradePay: "6000",
            Eligibility: "",
        },
        {
            Designation: "Assistant Registrar",
            NoOfPosts: "05",
            PayScale: "9300 - 34800",
            GradePay: "4600",
            Eligibility: "",
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Jawaharlal Institute Of Postgraduate Medical Education And Research",
        ApplicationEndDt: "03/04/2015",
        DetailedNotification: "http://jipmer.edu.in/wp-content/uploads/2015/02/SPECIAL-RECRUITMENT-DRIVE-FOR-FILLING-UP-THE-POST-OF-STAFF-NURSE-UNDER-ST-CATEGORY-ONLY.pdf",
        GoToSite: "http://jipmer.edu.in/category/jobs/",
        ApplicationFee: "250",
        PublishedOn: "2015",
        Age: "--",
        Logo: "jipmer.jpg",
        AltText: "JIPMER Special Recruitment Drive for the post of Staff Nurse For Scheduled Tribes (ST)-2015",
        JobDetails: [{
            Designation: "Staff Nurse",
            NoOfPosts: "40",
            PayScale: "9300 - 34800",
            GradePay: "",
            Eligibility: "",
        }]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Delhi Metro Rail Corporation",
        ApplicationEndDt: "16/04/2015",
        DetailedNotification: "http://eapplynew.com/dmrc2015/Document/Advertisement.pdf",
        GoToSite: "http://www.delhimetrorail.com/career.aspx",
        ApplicationFee: "400",
        PublishedOn: "16/03/2015",
        Age: "--",
        Logo: "dmrc.jpg",
        AltText: "DMRC Recruitment of Executive and Non Executive",
        JobDetails: [{
            Designation: "Asstt. Manager/Architecture",
            NoOfPosts: "05",
            PayScale: "20600 - 46500",
            GradePay: "",
            Eligibility: "GATE qualified candidates for the year 2014. Candidates should have got a minimum of 60% marks in B.Arch from a Govt. recognized University/Institute.",
        },
        {
            Designation: "Asstt. Manager/Legal (Presenting Officer for Claims Commissioners Office)",
            NoOfPosts: "01",
            PayScale: "20600 - 46500",
            GradePay: "",
            Eligibility: "Full time LLB with a minimum of 60% marks from a Government recognized reputed Institute/University. Post qualification experience of 3 years in relevant field is mandatory",
        },
        {
            Designation: "Asstt. Manager/Finance",
            NoOfPosts: "05",
            PayScale: "20600 - 46500",
            GradePay: "",
            Eligibility: "CA/ICWA with minimum of 50% marks and with post qualification work experience in relevant field of one year. Knowledge of SAP/ERP will be preferred",
        },
        {
            Designation: "Section Officer (Finance) on contract basis for a period of 4 years",
            NoOfPosts: "03",
            PayScale: "16000 - 30770",
            GradePay: "",
            Eligibility: "CA(inter)/ICWA (inter) with minimum 50% marks with 7 years‟ post qualification experience in relevant field.",
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "IRCON International Limited",
        ApplicationEndDt: "31/03/2015",
        DetailedNotification: "http://www.ircon.org/images/file/Recruitment_vacancy/2015/GATE%20final%20Ad/Detailed%20ad%20GATE_March_%2016.03.2015.1.pdf",
        GoToSite: "http://www.ircon.org/Content.aspx?Title=93",
        ApplicationFee: "",
        PublishedOn: "13/03/2015",
        Age: "--",
        Logo: "ircon.jpg",
        AltText: "IRCON Recruitment of Executive Trainees(Civil, Mechanical, Electrical, Signaling and Telecom)",
        JobDetails: [{
            Designation: " Executive Trainee-Civil",
            NoOfPosts: "20",
            PayScale: " 20600 - 46500",
            GradePay: "",
            Eligibility: "Full time regular Bachelor’s Degree in Civil Engineering from recognized Indian University/Institute approved by AICTE with minimum 60% marks or equivalent grade**",
        },
        {
            Designation: " Executive Trainee-Mechanical",
            NoOfPosts: "03",
            PayScale: " 20600 - 46500",
            GradePay: "",
            Eligibility: "Full time regular Bachelor’s Degree in Mechanical Engineering from recognized Indian University/Institute approved by AICTE with minimum 60% marks or equivalent grade**",
        },
        {
            Designation: " Executive Trainee-Electrical",
            NoOfPosts: "10",
            PayScale: " 20600 - 46500",
            GradePay: "",
            Eligibility: "Full time regular Bachelor’s Degree in Electrical Engineering from recognized Indian University/Institute approved by AICTE with minimum 60% marks or equivalent grade**",
        },
        {
            Designation: " Executive Trainee-Civil",
            NoOfPosts: "05",
            PayScale: " 20600 - 46500",
            GradePay: "",
            Eligibility: "Full time regular Bachelor’s Degree in 1) Electronics/ 2) Electronics & Communication Engineering/ 3) Electrical & Electronics Engineering 4) Electronics & Instrumentation Engineering",
        }
        ]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Securities and Exchange Board Of India",
        ApplicationEndDt: "31/03/2015",
        DetailedNotification: "http://www.sebi.gov.in/cms/sebi_data/commondocs/SEBI_Recruitment2015_p.pdf",
        GoToSite: "http://www.sebi.gov.in/cms/sebi_data/otherdocs/1426152268094.html",
        ApplicationFee: "500",
        PublishedOn: "13/03/2015",
        Age: "--",
        Logo: "sebi.jpg",
        AltText: "SEBI Recruitment of Officer Grade A - Information System (Technical Stream)",
        JobDetails: [{
            Designation: "Officer Grade A - Information System (Technical Stream)",
            NoOfPosts: "4",
            PayScale: "17100 - 33200",
            GradePay: "",
            Eligibility: "First class graduate in Engineering (electrical / electronics / electronics and communication engineering / information technology / computer science) / Masters degree in Computers Application / First class graduate in any discipline with post graduate qualification (minimum two years duration) in computers / information technology.",
        }]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "National Institute Of Technology Durgapur",
        ApplicationEndDt: "17/04/2015",
        DetailedNotification: "http://nitdgp.ac.in/tender15/_FINAL_ADV.pdf",
        GoToSite: "http://nitdgp.ac.in/",
        ApplicationFee: "600",
        PublishedOn: "11/03/2015",
        Age: "--",
        Logo: "nit_durgapur.jpg",
        AltText: "NIT Durgapur Faculty Recruitment",
        JobDetails: [{
            Designation: "Assistant Professor",
            NoOfPosts: "59",
            PayScale: "15600 - 39100",
            GradePay: "6000/7000/8000",
            Eligibility: "As per MHRD OM (F. No. 33-9/2011- TS.III dated 15th January,2014 ) (Refer Page No: 3 to 9)",
        }]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Staff Selection Commission",
        ApplicationEndDt: "13/04/2015",
        DetailedNotification: "http://sscer.org/MATTER/IMPORTANT_NOTICE.html",
        GoToSite: "http://sscer.org/MATTER/IMPORTANT_NOTICE.html",
        ApplicationFee: "50",
        PublishedOn: "14/03/2015",
        Age: "--",
        Logo: "ssc.jpg",
        AltText: "SSC Recruitment for Assistants(Multiple Departments)",
        JobDetails: [{
            Designation: "Junior Geographical Assistant",
            NoOfPosts: "02",
            PayScale: "",
            GradePay: "",
            Eligibility: "",
        },
        {
            Designation: "Statistical Assistant",
            NoOfPosts: "02",
            PayScale: "",
            GradePay: "",
            Eligibility: "Candidate must hold a Degree in Engineering",
        },
        {
            Designation: "Technical Assistant(Process)",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: "",
        },
        {
            Designation: "Research Assitant",
            NoOfPosts: "02",
            PayScale: "",
            GradePay: "",
            Eligibility: "",
        },
        {
            Designation: "Assistant Pharmacognocist",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: "",
        },
        {
            Designation: "Assistant Chemist",
            NoOfPosts: "02",
            PayScale: "",
            GradePay: "",
            Eligibility: "",
        },
        {
            Designation: "Assistant BioChemist",
            NoOfPosts: "02",
            PayScale: "",
            GradePay: "",
            Eligibility: "",
        }
        ]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "Union Public Service Commission",
        ApplicationEndDt: "10/04/2015",
        DetailedNotification: "http://upsconline.nic.in/mainmenu2.php",
        GoToSite: "http://upsconline.nic.in/mainmenu2.php",
        ApplicationFee: "200",
        PublishedOn: "14/03/2015",
        Age: "--",
        Logo: "upsc.jpg",
        AltText: "UPSC Engineering Services Examination-2015 for filling 475 posts",
        JobDetails: [{
            Designation: "Civil Engineering",
            NoOfPosts: "",
            PayScale: "",
            GradePay: "",
            Eligibility: "Candidate must hold a Degree in Engineering",
        },
        {
            Designation: "Mechanical Engineering",
            NoOfPosts: "",
            PayScale: "",
            GradePay: "",
            Eligibility: "Candidate must hold a Degree in Engineering",
        },
        {
            Designation: "Electrical Engineering",
            NoOfPosts: "",
            PayScale: "",
            GradePay: "",
            Eligibility: "Candidate must hold a Degree in Engineering",
        },
        {
            Designation: "Electronics and Telecommunication Engineering",
            NoOfPosts: "",
            PayScale: "",
            GradePay: "",
            Eligibility: "Candidate must hold a Degree in Engineering",
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Lucknow Metro Rail Corporation",
        ApplicationEndDt: "31/03/2015",
        DetailedNotification: "http://www.lmrcl.com/Doc/Fast%20scan%20to%20a%20color%20PDF%20file_1_20150310124039417.pdf",
        GoToSite: "http://www.lmrcl.com/",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "lmrc.jpg",
        AltText: "LMRC Recruitment for Engineers",
        JobDetails: [{
            Designation: "Dy. CE/Quality",
            NoOfPosts: "",
            PayScale: "29100 - 54500",
            GradePay: "",
            Eligibility: "Graduate Degree in Civil Engineering",
        },
        {
            Designation: "Dy CE/Safety",
            NoOfPosts: "",
            PayScale: "29100 - 54500",
            GradePay: "",
            Eligibility: "",
        },
        {
            Designation: "AM/Environment",
            NoOfPosts: "",
            PayScale: "20600 - 46500",
            GradePay: "",
            Eligibility: "",
        }
        ]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Uttar Pradesh Subordinate Services Selection Commission",
        ApplicationEndDt: "15/03/2015",
        DetailedNotification: "http://upsssc.gov.in/OuterPages/View_Enclosure.aspx?ID=502&flag=E&FID=1029",
        GoToSite: "http://upsssc.gov.in/AllNotifications.aspx",
        ApplicationFee: "160",
        PublishedOn: "13/03/2015",
        Age: "--",
        Logo: "uppsc.jpg",
        AltText: "UPPSC recruitment for Stenographers",
        JobDetails: [{
            Designation: "Stenographer",
            NoOfPosts: "635",
            PayScale: "5200 - 20200",
            GradePay: "2800",
            Eligibility: "",
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Purvanchal Bank",
        ApplicationEndDt: "31/03/2015",
        DetailedNotification: "http://www.pgbgorakhpur.com/",
        GoToSite: "http://www.pgbgorakhpur.com/",
        ApplicationFee: "",
        PublishedOn: "17/03/2015",
        Age: "--",
        Logo: "pgb.jpg",
        AltText: "Purvanchal Bank invites online applications for the post of Officer Scale-I and Office Assistant (Multipurpose), who have appeared at the CWE-III- 2014 for RRBs conducted by IBPS",
        JobDetails: [{
            Designation: "Officer Scale I",
            NoOfPosts: "77",
            PayScale: "14500 - 25700",
            GradePay: "",
            Eligibility: "",
        },
        {
            Designation: "Office Assistant",
            NoOfPosts: "165",
            PayScale: "7200 - 19300",
            GradePay: "",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Council for Scientific and Industrial Research",
        ApplicationEndDt: "25/03/2015",
        DetailedNotification: "http://www.csirhrdg.res.in/notification_main_june2015.pdf",
        GoToSite: "http://www.csirhrdg.res.in/",
        ApplicationFee: "1000",
        PublishedOn: "13/02/2015",
        Age: "--",
        Logo: "csir.jpg",
        AltText: "Joint CSIR-UGC Test For Junior Research Fellowship And Eligibility for Lectureship Tentatively on 21st June, 2015",
        JobDetails: [{
            Designation: "CSIR JRF NET 2015",
            NoOfPosts: "",
            PayScale: "",
            GradePay: "",
            Eligibility: "BS-4 years program/BE/BTech/BPharma/MBBS/Integrated BS-MS/MSc or equivalent degree with at least 55% marks for general and OBC-Non Creamy layer candidates (50% for SC/ST candidates, physically and Visually Handicapped candidates)."
        }]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Bharat Electronics Ltd",
        ApplicationEndDt: "31/03/2015",
        DetailedNotification: "http://www.bel-india.com/sites/default/files/Recruitments/website-AD-English-1-10-March-2015.pdf",
        GoToSite: "http://www.bel-india.com/recruitment",
        ApplicationFee: "500",
        PublishedOn: "2015",
        Age: "--",
        Logo: "bel.jpg",
        AltText: "Recruitment of Deputy Engineer(E-II) at BEL",
        JobDetails: [{
            Designation: "Deputy Engineer(E-II)",
            NoOfPosts: "04",
            PayScale: " 16,400/- 3% - 40,500",
            GradePay: "",
            Eligibility: "Full time M.E. / M. Tech/MS graduates from any AICTE approved institution with First Class for General & OBC candidates and Pass for SC/ST/PWD candidates in the following disciplines: i) M.E./M. Tech/MS in Electronics & Communications Engineering with specialization in RF & Microwave Engg./ Radar Engg. / Embedded Systems / Digital Signal Processing only. ii) Prior to M.E/M.Tech, the candidates must have successfully completed B.E/B.Tech in electronics/Telecom from any AICTE institution with aggregate first class for General/OBC candidates and pass class for SC/ST/PWD candidates. "
        }]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Rashtriya Chemicals and Fertilizers Ltd",
        ApplicationEndDt: "21/03/2015",
        DetailedNotification: "http://www.rcfltd.com/webdocs/3040/2015/03/Final_Advertisement.pdf",
        GoToSite: "http://www.rcfltd.com/index.php/hrmain/recruitment/10942-officer-finance-recruitment-2015",
        ApplicationFee: "500",
        PublishedOn: "2015",
        Age: "--",
        Logo: "rcfl.jpg",
        AltText: "Recruitment of Finance Officers at RCFL",
        JobDetails: [{
            Designation: "Officer (Finance)",
            NoOfPosts: "12",
            PayScale: "16400-40500",
            GradePay: "",
            Eligibility: "B.Com plus Chartered Accountant/Cost and Management Accountant"
        }]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Oil and Natural Gas Limited",
        ApplicationEndDt: "15/05/2015",
        DetailedNotification: "http://www.ongcindia.com/wps/wcm/connect/16f58b45-58a7-4672-927d-57583ebf2dd7/1advtengmar04.pdf?MOD=AJPERES&CACHEID=16f58b45-58a7-4672-927d-57583ebf2dd7",
        GoToSite: "http://www.ongcindia.com/wps/wcm/connect/ongcindia/home/career/recruitment+notices/assistant+legal+advisor",
        ApplicationFee: "",
        PublishedOn: "16/04/2015",
        Age: "--",
        Logo: "ongc.jpg",
        AltText: "Recruitment of Assistant Legal Advisor  through CLAT 2015 Examination  for LLM",
        JobDetails: [{
            Designation: "Assistant Legal Advisor",
            NoOfPosts: "17",
            PayScale: "24900 - 50500",
            GradePay: "",
            Eligibility: "Graduate Degree in Law(Professional) with minimum 60% marks. Practicing advocate with 3 years experience would be preferred for all categories"
        }]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "Railtel Corporation Of India Limited",
        ApplicationEndDt: "27/03/2015",
        DetailedNotification: "http://www.railtelindia.com/images/stories/OA%20vacancy%20notice-%20detailed.pdf",
        GoToSite: "http://www.railtelindia.com/index.php?option=com_content&view=article&id=67&Itemid=140&lang=en",
        ApplicationFee: "",
        PublishedOn: "07/03/2015",
        Age: "--",
        Logo: "railtel.jpg",
        AltText: "Recruitment of Office Assistants on Contract Basis through Walk-in-interview",
        JobDetails: [{
            Designation: "Office Assistant (on Contract basis) Corporate Office, Gurgaon",
            NoOfPosts: "02",
            PayScale: "19000 per month",
            GradePay: "",
            Eligibility: "Graduation from any stream. Proficiency in MS Office (MS word, MS Excel and Power Point) will be a pre-requisite."
        },
        {
            Designation: "Office Assistant (on Contract basis) Secunderabad/Chennai under RO/ Secunderabad",
            NoOfPosts: "02",
            PayScale: "19000 per month",
            GradePay: "",
            Eligibility: "Graduation from any stream. Proficiency in MS Office (MS word, MS Excel and Power Point) will be a pre-requisite."
        },
        {
            Designation: "Office Assistant (on Contract basis) Mumbai/Ahmedabad under RO/ Mumbai",
            NoOfPosts: "02",
            PayScale: "19000 per month",
            GradePay: "",
            Eligibility: "Graduation from any stream. Proficiency in MS Office (MS word, MS Excel and Power Point) will be a pre-requisite."
        },
        {
            Designation: "Office Assistant (on Contract basis) Kolkata/Guwahati under RO/ Kolkata ",
            NoOfPosts: "02",
            PayScale: "19000 per month",
            GradePay: "",
            Eligibility: "Graduation from any stream. Proficiency in MS Office (MS word, MS Excel and Power Point) will be a pre-requisite."
        }
        ]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "IRCON International Limited",
        ApplicationEndDt: "27/03/2015",
        DetailedNotification: "http://www.ircon.org/images/file/Recruitment_vacancy/2015/JE-%20Elect.%20-%20Detailed%20Ad_upload.pdf",
        GoToSite: "http://www.rvnl.org/opportunity02.php",
        ApplicationFee: "",
        PublishedOn: "07/03/2015",
        Age: "--",
        Logo: "ircon.jpg",
        AltText: "Recruitment of Junior Engineer/Electrical on regular basis",
        JobDetails: [{
            Designation: "Junior Engineer /Electrical – NE-7",
            NoOfPosts: "10",
            PayScale: "10700 – 21400",
            GradePay: "",
            Eligibility: "3 years Engineering Diploma in Electrical Discipline with not less than 60% marks"
        }]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Rail Vikas Nigam Limited",
        ApplicationEndDt: "20/03/2015",
        DetailedNotification: "http://www.rvnl.org/admin/uploaded1/opportunity_form/20150305154312_Advertisement.pdf",
        GoToSite: "http://www.rvnl.org/opportunity02.php",
        ApplicationFee: "",
        PublishedOn: "10/03/2015",
        Age: "--",
        Logo: "rvnl.jpg",
        AltText: "Recruitment of Site Engineer(Civil, Electrical and Signals)",
        JobDetails: [{
            Designation: "Site Engineer ( Civil, Electrical & Signals)",
            NoOfPosts: "",
            PayScale: "27,000/- per month",
            GradePay: "",
            Eligibility: "B.E./B. Tech in Civil Engineering, Electrical Engineering & Electronics & Communication Engineering with valid GATE 2014 or 2015 Score. "
        }]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "King George's Medical University Lucknow",
        ApplicationEndDt: "18/03/2015",
        DetailedNotification: "http://14.139.237.164/kgmu_nursing/",
        GoToSite: "http://14.139.237.164/kgmu_nursing/",
        ApplicationFee: "1000",
        PublishedOn: "11/02/2015",
        Age: "--",
        Logo: "kgmu.jpg",
        AltText: "KGMU Nurse Recruitment 2015",
        JobDetails: [{
            Designation: "Staff Nurse (Female)",
            NoOfPosts: "341",
            PayScale: "9300-34800",
            GradePay: "4600",
            Eligibility: ""
        },
        {
            Designation: "Staff Nurse (Male)",
            NoOfPosts: "18",
            PayScale: "9300-34800",
            GradePay: "4600",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Indian Institute of Management",
        ApplicationEndDt: "24/03/2015",
        DetailedNotification: "http://www.iimidr.ac.in/iimi/images/careers/Application%20Format-IIMIFaculty.pdf",
        GoToSite: "http://www.iimidr.ac.in/iimi/index.php/faculty-positions",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "iim_indore.jpg",
        AltText: "IIM Indore Faculty Recruitment 2015",
        JobDetails: [{
            Designation: "Professor",
            NoOfPosts: "",
            PayScale: "37400 – 67000",
            GradePay: "10500",
            Eligibility: "Ph.D or equivalent in appropriate branch with first class or equivalent (in terms of grades, etc.), at the preceding degree with a very good academic record throughout."
        },
        {
            Designation: "Associate Professor",
            NoOfPosts: "",
            PayScale: "37400-67000",
            GradePay: "9500",
            Eligibility: "Ph.D or equivalent in appropriate branch with first class or equivalent (in terms of grades, etc.), at the preceding degree with a very good academic record throughout."
        },
        {
            Designation: "Assistant Professor",
            NoOfPosts: "",
            PayScale: "15600-39100",
            GradePay: "8000",
            Eligibility: "Ph.D or equivalent in appropriate branch with first class or equivalent (in terms of grades, etc.), at the preceding degree with a very good academic record throughout."
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Institute for Development and Research in Banking Technology",
        ApplicationEndDt: "31/03/2015",
        DetailedNotification: "http://www.idrbt.ac.in/PDFs/Facultyad_Mar_2015.pdf",
        GoToSite: "http://www.idrbt.ac.in/careers.html",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "idrbt.jpg",
        AltText: "IDRBT invites top talent with high passion for Research and Academics and Practice in the area of BANKING TECHNOLOGY for the positions of ASSOCIATE PROFESSOR AND ASSISTANT PROFESSOR",
        JobDetails: [{
            Designation: "Associate Professor",
            NoOfPosts: "",
            PayScale: "37400 – 67000",
            GradePay: "9500",
            Eligibility: "Ph.D in Computer Science / Information Technology / Information Systems / Information Security / Banking Technologies"
        },
        {
            Designation: "Assistant Professor",
            NoOfPosts: "",
            PayScale: "15600 – 39100",
            GradePay: "8000",
            Eligibility: "Ph.D in Computer Science / Information Technology / Information Systems / Information Security / Banking Technologies"
        },
        {
        Designation: "Associate Professor",
        NoOfPosts: "",
        PayScale: "15600 – 39100",
        GradePay: "6000",
        Eligibility: "Ph.D in Computer Science / Information Technology / Information Systems / Information Security / Banking Technologies"
        }   
        ]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "NMDC Steel Limited (NSL) and NMDC Limited",
        ApplicationEndDt: "24/03/2015",
        DetailedNotification: "https://www.nmdc.co.in/Docs/Careers/NMDC%20ET%20ADVERTISEMENT.pdf",
        GoToSite: "https://www.nmdc.co.in/Careers/Default.aspx",
        ApplicationFee: "300",
        PublishedOn: "20/02/2015",
        Age: "--",
        Logo: "nmdc.jpg",
        AltText: "NMDC Steel Limited (NSL) and NMDC Limited is looking for Executive Trainee (Technical) and Executive Trainee (Administration)",
        JobDetails: [{
            Designation: "Executive Trainee (Technical)",
            NoOfPosts: "169(NSL) + 32(NMDC)",
            PayScale: "20600-3%-46500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Executive Trainee (Administration)",
            NoOfPosts: "208(NSL) + 42(NMDC)",
            PayScale: "20600-3%-46500",
            GradePay: "",
            Eligibility: ""
        }]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Indian Institute of Madras",
        ApplicationEndDt: "27/03/2015",
        DetailedNotification: "https://www.iitm.ac.in/sites/default/files/notices/fac_ad_2015-website.pdf",
        GoToSite: "https://www.iitm.ac.in/content/faculty-recruitment-2015",
        ApplicationFee: "",
        PublishedOn: "25/02/2015",
        Age: "--",
        Logo: "iit_madras.jpg",
        AltText: "IIT Madras Faculty Recruitment 2015",
        JobDetails: [{
            Designation: "Assistant Professor",
            NoOfPosts: "",
            PayScale: "15600-39100",
            GradePay: "8000",
            Eligibility: "Ph.D., with first class or equivalent at the preceding degree in the appropriate branch with consistently good academic record throughout."
        },
        {
            Designation: "Associate Professor",
            NoOfPosts: "",
            PayScale: "37400-67000",
            GradePay: "9500",
            Eligibility: "Ph.D., with first class or equivalent at the preceding degree in the appropriate branch with consistently good academic record throughout."
        },
        {
            Designation: "Assistant Professor",
            NoOfPosts: "",
            PayScale: "37400-67000",
            GradePay: "10500",
            Eligibility: "Ph.D., with first class or equivalent at the preceding degree in the appropriate branch with consistently good academic record throughout."
        }
        ]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "Tehri Hydro Development Corporation Ltd(THDC Recruitment)",
        ApplicationEndDt: "15/05/2015",
        DetailedNotification: "http://thdc.gov.in/writereaddata/English/PDF/DetailedAdvtCLAT.pdf",
        GoToSite: "http://www.thdc.gov.in/English/Scripts/Consultancy_Clients.aspx",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "thdc.jpg",
        AltText: "THDC Recruitment of Executive Trainees(Law) through CLAT-2015",
        JobDetails: [{
            Designation: "Executive Trainee (Law)",
            NoOfPosts: "",
            PayScale: "20,600-3%-46500",
            GradePay: "",
            Eligibility: "Full time regular Bachelor’s Degree in Law (Three Years/Five Years integrated course) from recognized Indian Universities / Institutes. The degree should also enjoy recognition by the Bar Council."
        }
        ]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "Doon University",
        ApplicationEndDt: "30/03/2015",
        DetailedNotification: "http://uk.gov.in/app/webroot/files/Announcements/Recruitment_2015.pdf",
        GoToSite: "http://uk.gov.in/announcements/view/96",
        ApplicationFee: "1000",
        PublishedOn: "03/03/2015",
        Age: "--",
        Logo: "doon_university.jpg",
        AltText: "Doon University Faculty Recruitment 2015",
        JobDetails: [{
            Designation: "Professor",
            NoOfPosts: "08",
            PayScale: "37400 - 67000",
            GradePay: "10000",
            Eligibility: ""
        },
        {
            Designation: "Associate Professor",
            NoOfPosts: "14",
            PayScale: "15600 - 39100",
            GradePay: "9000",
            Eligibility: ""
        },
        {
            Designation: "Assistant Professor",
            NoOfPosts: "20",
            PayScale: "15600 - 39100",
            GradePay: "6000",
            Eligibility: ""
        },
        {
            Designation: "Librarian",
            NoOfPosts: "01",
            PayScale: "37400 - 67000",
            GradePay: "10000",
            Eligibility: ""
        },
        {
            Designation: "Deputy Librarian",
            NoOfPosts: "01",
            PayScale: "15600 - 39100",
            GradePay: "8000",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Reserve Bank Of India",
        ApplicationEndDt: "23/03/2015",
        DetailedNotification: "http://rbi.org.in/",
        GoToSite: "http://rbi.org.in/",
        ApplicationFee: "",
        PublishedOn: "09/03/2015",
        Age: "--",
        Logo: "rbi.jpg",
        AltText: "Reserve Bank of India invites application for Managers",
        JobDetails: [{
            Designation: "Assistant Manager(Rajbhasha)",
            NoOfPosts: "06",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Manager (Technical-Civil)",
            NoOfPosts: "02",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Manager (Technical-Electrical)",
            NoOfPosts: "06",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Assistant Manager(Security)",
            NoOfPosts: "09",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "National Textile Corporation Ltd",
        ApplicationEndDt: "25/03/2015",
        DetailedNotification: "http://ntcltd.co.in:84/uploads/advertisement-it-cell.pdf",
        GoToSite: "http://ntcltd.co.in:84/index.php?option=com_career&view=career&Itemid=143&lang=en",
        ApplicationFee: "300",
        PublishedOn: "25/02/2015",
        Age: "--",
        Logo: "ntc.jpg",
        AltText: "National Textile Corporation Ltd Recruitment 2015",
        JobDetails: [{
            Designation: "Chief General Manager (Information Technology and Communication system)",
            NoOfPosts: "01",
            PayScale: "43200-66000",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Dy General Manager (Information Technology and Communication system)",
            NoOfPosts: "03",
            PayScale: "32900- 58000",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Deputy Manager (IT)",
            NoOfPosts: "04",
            PayScale: "16400- 40500",
            GradePay: "",
            Eligibility: ""
        },
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "IIM Rohtak",
        ApplicationEndDt: "17/03/2015",
        DetailedNotification: "http://www.iimrohtak.ac.in/staff-positions-feb2015.html",
        GoToSite: "http://www.iimrohtak.ac.in/staff-positions-feb2015.html",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "iim_rohtak.jpg",
        AltText: "IIM Rohtak Recruitment For Non Teaching Posts",
        JobDetails: [{
            Designation: "Librarian",
            NoOfPosts: "01",
            PayScale: "15600-39100",
            GradePay: "7600",
            Eligibility: ""
        },
        {
            Designation: "Administrative Officer(PRogramme)",
            NoOfPosts: "01",
            PayScale: "9300-34800",
            GradePay: "5400",
            Eligibility: ""
        },
        {
            Designation: "Superintendant(Establishment and Administration)",
            NoOfPosts: "01",
            PayScale: "9300-34800",
            GradePay: "4600",
            Eligibility: ""
        },
        {
            Designation: "Programmer",
            NoOfPosts: "01",
            PayScale: "9300-34800",
            GradePay: "4600",
            Eligibility: ""
        },
        {
            Designation: "Office Assistant",
            NoOfPosts: "02",
            PayScale: "9300-34800",
            GradePay: "4200",
            Eligibility: ""
        },
        {
            Designation: "Personal Assistant",
            NoOfPosts: "02",
            PayScale: "9300-34800",
            GradePay: "4200",
            Eligibility: ""
        },
        {
            Designation: "Driver",
            NoOfPosts: "01",
            PayScale: "5200-20200",
            GradePay: "1900",
            Eligibility: ""
        },
        {
            Designation: "Attendant",
            NoOfPosts: "01",
            PayScale: "5200-20200",
            GradePay: "1800",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Kochi Metro Rail Corporation",
        ApplicationEndDt: "18/03/2015",
        DetailedNotification: "http://kochimetro.org/wp-content/uploads/2015/02/Phase_I_Advertisement_-23.02.2015.pdf",
        GoToSite: "http://www.iob.in/Credit2015.aspx",
        ApplicationFee: "250",
        PublishedOn: "23/02/2015",
        Age: "--",
        Logo: "kmrl.jpg",
        AltText: "KMRL recruitment 2014 various managers",
        JobDetails: [{
            Designation: "Operations Department",
            NoOfPosts: "74",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Maintenance Department",
            NoOfPosts: "67",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Customer Relations and Business Development",
            NoOfPosts: "08",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Health and Safety Department",
            NoOfPosts: "03",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Finance and Accounts Department",
            NoOfPosts: "08",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Human Resources Department",
            NoOfPosts: "05",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Indian Overseas Bank",
        ApplicationEndDt: "06/03/2015",
        DetailedNotification: "http://www.iob.in/uploads/CEDocuments/2%20%20LATERAL%20RECRUITMENT%20OF%20CREDIT%20OFFICERS%202015.pdf",
        GoToSite: "http://www.iob.in/Credit2015.aspx",
        ApplicationFee: "500",
        PublishedOn: "18/02/2015",
        Age: "--",
        Logo: "iob.jpg",
        AltText: "LATERAL RECRUITMENT OF CREDIT OFFICERS IN MMG SCALE III – 2014-15(Indian Overseas Bank)",
        JobDetails: [{
            Designation: "Senior Manager-Credit",
            NoOfPosts: "100",
            PayScale: "25700 – 800/5 / 29700 – 900/2 - 31500",
            GradePay: "",
            Eligibility: ""
        }]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Center for Development of Advanced Computing",
        ApplicationEndDt: "13/03/2015",
        DetailedNotification: "http://www.cdac.in/index.aspx?id=current_jobs",
        GoToSite: "http://www.cdac.in/index.aspx?id=current_jobs",
        ApplicationFee: "500",
        PublishedOn: "25/02/2015",
        Age: "--",
        Logo: "asrb.jpg",
        AltText: "CDAC Recruitment for Project posts",
        JobDetails: [{
            Designation: "Chief Project Manager",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Project Manager",
            NoOfPosts: "02",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Assistant Project Manager",
            NoOfPosts: "04",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Project Engineer",
            NoOfPosts: "02",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Project Assistant",
            NoOfPosts: "03",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "AGRICUL AGRICULTURAL SCIENTISTS RECRUITMENT BOARD",
        ApplicationEndDt: "24/03/2015",
        DetailedNotification: "http://asrb.org.in/administrator/uploads_dir/1424859407english.pdf",
        GoToSite: "http://asrb.org.in/index.php?option=com_vacancy&Itemid=56",
        ApplicationFee: "500",
        PublishedOn: "2015",
        Age: "--",
        Logo: "asrb.jpg",
        AltText: "ASRB Scientist Recruitment 2015",
        JobDetails: [{
            Designation: "Senior Reserch Management Position(SRMP)",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Reserch Management Position(RMP)",
            NoOfPosts: "26",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Project Coordinator",
            NoOfPosts: "06",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Head of Division(HoD/equivalent)",
            NoOfPosts: "23",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Principal Scientist",
            NoOfPosts: "08",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Senior Scientist/Programme Coordinator",
            NoOfPosts: "07",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "Hidayatullah National Law University(HNLU Raipur)",
        ApplicationEndDt: "31/03/2015",
        DetailedNotification: "https://www.hnlu.ac.in/upload2015/Reg/Appointment_cum_Corrigendum_Notification_No._HNLU_14473_2015.pdf",
        GoToSite: "https://www.hnlu.ac.in/index.php/17-what-s-new/169-appointment-cum-corrigendum-notification",
        ApplicationFee: "500",
        PublishedOn: "14/02/2015",
        Age: "--",
        Logo: "hnlu.jpg",
        AltText: "HNLU recruitment 2015",
        JobDetails: [{
            Designation: "Professor (Law)",
            NoOfPosts: "08",
            PayScale: " As prescribed by UGC",
            GradePay: " As prescribed by UGC",
            Eligibility: " As prescribed by UGC"
        },
        {
            Designation: "Associate Professor (Law)",
            NoOfPosts: "13",
            PayScale: " As prescribed by UGC",
            GradePay: " As prescribed by UGC",
            Eligibility: " As prescribed by UGC"
        },
        {
            Designation: "Assistant Professor (Law)",
            NoOfPosts: "27",
            PayScale: " 15600 - 39100",
            GradePay: " 6000",
            Eligibility: " As prescribed by UGC"
        },
        {
            Designation: "Registrar",
            NoOfPosts: "01",
            PayScale: " As prescribed by UGC",
            GradePay: " As prescribed by UGC",
            Eligibility: " As prescribed by UGC"
        },
        {
            Designation: "Residential Male Doctor",
            NoOfPosts: "01",
            PayScale: " As prescribed by UGC",
            GradePay: " As prescribed by UGC",
            Eligibility: "M.D.OR MBBS with Three years’ post qualification experience."
        },
        {
            Designation: "Residential Female Doctor",
            NoOfPosts: "01",
            PayScale: " 15600 - 39100",
            GradePay: " 5400",
            Eligibility: "M.D.OR MBBS with Three years’ post qualification experience."
        },
        {
            Designation: "Assistant Registrar ",
            NoOfPosts: "01",
            PayScale: " 15600-39100",
            GradePay: "5400",
            Eligibility: "Good academic record plus Master’s degree with at least 55% of the marks or its equivalent grade of B in the UGC Seven Point Scale "
        },
        {
            Designation: "Placement-cum-Public Relations Officer",
            NoOfPosts: "01",
            PayScale: " 15600-39100",
            GradePay: "5400",
            Eligibility: "M.D.OR MBBS with Three years’ post qualification experience."
        },
        {
            Designation: "Placement-cum-Public Relations Officer",
            NoOfPosts: "01",
            PayScale: " 15600 - 39100",
            GradePay: " 5400",
            Eligibility: "Must have obtained minimum 55% of marks in LL.B. and MBA (HR)/ Must have obtained minimum 55% of marks in LL.M. with P.G. Diploma (H.R.) from a recognized and reputed institution"
        },
        {
            Designation: "Administrative-cum-Liaison Officer",
            NoOfPosts: "01",
            PayScale: " 15600-39100",
            GradePay: "5400",
            Eligibility: "Good academic record plus Master’s degree with at least 55% of the marks or its equivalent grade of B in the UGC Seven Point Scale"
        },
        {
            Designation: "Estate Officer",
            NoOfPosts: "01",
            PayScale: " 15600-39100",
            GradePay: "5400",
            Eligibility: "Good academic record plus Master’s degree with at least 55% of the marks or its equivalent grade of B in the UGC Seven Point Scale"
        },
        {
            Designation: "Assistant Grade-III",
            NoOfPosts: "01",
            PayScale: "5200-20200",
            GradePay: "2400",
            Eligibility: "Bachelor’s degree from a recognized/reputed University and Knowledge of Computer Applications"
        },
        {
            Designation: "Girls’ Hostel Assistant (Female)",
            NoOfPosts: "01",
            PayScale: " 5200-20200",
            GradePay: "2400",
            Eligibility: "Bachelor’s degree from a recognized/reputed University and Knowledge of Computer Applications"
        },
        {
            Designation: "Sub-Engineer (Civil)",
            NoOfPosts: "01",
            PayScale: "5200-20200",
            GradePay: "2400",
            Eligibility: "Diploma in Civil Engineering, Three years post qualification experience. "
        },
        {
            Designation: "Sports Assistant-cum-Gym Instructor (Male)",
            NoOfPosts: "01",
            PayScale: "5200-20200",
            GradePay: "2400",
            Eligibility: "(i) Bachelor’s degree from a recognized & reputed institution. (ii) Must have represented the University/College at the interUniversity/inter-college competitions OR the State in National Championships."
        },
        {
            Designation: "Sports Assistant-cum-GymInstructor (Female)",
            NoOfPosts: "01",
            PayScale: " 5200-20200",
            GradePay: "2400",
            Eligibility: "(i) Bachelor’s degree from a recognized & reputed institution. (ii) Must have represented the University/College at the interUniversity/inter-college competitions OR the State in National Championships"
        },
        {
            Designation: "Outsourcing Supervisor",
            NoOfPosts: "01",
            PayScale: "5200-20200",
            GradePay: "2400",
            Eligibility: "Bachelor’s Degree and Knowledge of Computer Applications."
        },
        {
            Designation: "Driver",
            NoOfPosts: "05",
            PayScale: "5200-20200",
            GradePay: "1900",
            Eligibility: "Driving License for four wheelers/heavy vehicles. Must have passed fifth standard. Proper eye-sight and vision."
        },
        {
            Designation: "Motor Mechanic-cum Driver",
            NoOfPosts: "01",
            PayScale: " 5200-20200",
            GradePay: "1900",
            Eligibility: "Driving License for four wheelers/heavy vehicles. Must have passed fifth standard. Proper eye-sight and vision."
        },
        {
            Designation: "Library Attendant",
            NoOfPosts: "06",
            PayScale: "5200-20200",
            GradePay: "1800",
            Eligibility: "Must have passed eighth standard"
        },
        {
            Designation: "Field Assistant",
            NoOfPosts: "01",
            PayScale: "5200-20200",
            GradePay: "1800",
            Eligibility: "Must have passed eighth standard."
        },
        {
            Designation: "Caretaker-cum-Office Assistant",
            NoOfPosts: "01",
            PayScale: " 5200-20200",
            GradePay: "1800",
            Eligibility: "Must have passed Tenth standard"
        },
        {
            Designation: "Cook-cum-Attendant",
            NoOfPosts: "04",
            PayScale: "4440-7440",
            GradePay: "1300",
            Eligibility: "Must have passed fifth standard."
        },
        {
            Designation: "Gardener-cum-Attendant",
            NoOfPosts: "04",
            PayScale: "5200-20200",
            GradePay: "1300",
            Eligibility: "Must have passed fifth standard."
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Kendriya Vidyalaya Sangathan",
        ApplicationEndDt: "30/03/2015",
        DetailedNotification: "https://jobapply.in/KVS2015DCACPR/Adv-Eng.pdf",
        GoToSite: "https://jobapply.in/KVS2015DCACPR/",
        ApplicationFee: "1200",
        PublishedOn: "21/02/2015",
        Age: "--",
        Logo: "kvs.jpg",
        AltText: "Recruitment For The Post Of Deputy Commissioner, Assistant Commissioner And Principal For The Years 2014-15 And 2015-16",
        JobDetails: [{
            Designation: "Deputy Commissioner (DC)",
            NoOfPosts: "02",
            PayScale: "15600 - 39100",
            GradePay: "7600",
            Eligibility: "1. Atleast a second class Master’s degree 2. B.Ed. or equivalent degree. 3. 05 years regular service as Assistant Commissioner."
        },
        {
            Designation: "Assistant Commissioner (AC) ",
            NoOfPosts: "03",
            PayScale: "15600 - 39100",
            GradePay: "7600",
            Eligibility: "Master Degree from recognized University with atleast 45% marks. ii) B.Ed or equivalent degree."
        },
        {
            Designation: "Principal (PPL)",
            NoOfPosts: "90",
            PayScale: "15600 - 39100",
            GradePay: "7600",
            Eligibility: "i) Master’s Degree from recognized university with atleast 45% marks in aggregate. ii) B.Ed. or equivalent teaching degree"
        }
        ]
        },
    {
        HeadingTheme: "panel panel-success",
        Title: "National Thermal Power Corporation",
        ApplicationEndDt: "16/03/2015",
        DetailedNotification: "http://open.ntpccareers.net/fin15/index.php",
        GoToSite: "http://open.ntpccareers.net/fin15/index.php",
        ApplicationFee: "250",
        PublishedOn: "24/02/2015",
        Age: "--",
        Logo: "ntpc.jpg",
        AltText: "NTPC Special Drive for Finance Executive: National Thermal Power Corporation recruitment 2015",
        JobDetails: [{
            Designation: "Finance Executives",
            NoOfPosts: "15 posts in E2/E3/E4",
            PayScale: "(E2 24900 - 50500)/(E3 29100-54500)/(E4 32900-58000)",
            GradePay: "",
            Eligibility: "CA/ICWA with 2/4/6 years of experience"
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Nuclear Power Corporation of India Ltd.",
        ApplicationEndDt: "15/03/2015",
        DetailedNotification: "http://www.npcil.nic.in/",
        GoToSite: "http://www.npcil.nic.in/",
        ApplicationFee: "250",
        PublishedOn: "28/02/2015",
        Age: "--",
        Logo: "npcil.jpg",
        AltText: "NPCIL recruitment 2015 for Engineers:Executive Trainee at Nuclear Power Corporation of India Ltd",
        JobDetails: [{
            Designation: "Executive Trainee(ET)",
            NoOfPosts: "110",
            PayScale: "15600 - 39100",
            GradePay: "6000",
            Eligibility: "Full Time B.E./B.Tech/B.Sc. Engineering"
        }
        ]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "Hemwati Nandan Bahuguna Garhwal University, Srinagar (Garhwal), Uttarakhand – 246 174",
        ApplicationEndDt: "30/04/2015",
        DetailedNotification: "http://www.recruitmenthnbgu.co.in/GENERAL%20INSTRUCTIONS%20TEACHING.pdf",
        GoToSite: "http://www.recruitmenthnbgu.co.in/",
        ApplicationFee: "",
        PublishedOn: "28/02/2015",
        Age: "--",
        Logo: "hnbgu.jpg",
        AltText: "Faculty posts at Hemwati Nandan Bahuguna Garhwal University, Srinagar (Garhwal), Uttarakhand – 246 174",
        JobDetails: [{
            Designation: "Assistant Professor",
            NoOfPosts: "88",
            PayScale: "15600 - 39100",
            GradePay: "6000",
            Eligibility: "Ph.D."
        },
        {
            Designation: "Associate Professor",
            NoOfPosts: "46",
            PayScale: "37400 - 67000",
            GradePay: "9000",
            Eligibility: "Ph.D."
        },
        {
            Designation: "Professor",
            NoOfPosts: "29",
            PayScale: "37400 - 67000",
            GradePay: "10000",
            Eligibility: "Ph.D."
        }]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Indian Institute of Information Technology, Una (saloh) Himachal Pradesh 2015(IIIT Una)",
        ApplicationEndDt: "16/03/2015",
        DetailedNotification: "http://www.nith.ac.in/recruitment/2015/iiituna.pdf",
        GoToSite: "http://www.nith.ac.in/recruitment/index.htm",
        ApplicationFee: "",
        PublishedOn: "11/02/2015",
        Age: "--",
        Logo: "iiit_guwahati.jpg",
        AltText: "Recruitment at Indian Institute of Information Technology, Una (saloh) Himachal Pradesh 2015(IIIT Una)",
        JobDetails: [{
            Designation: "Lecturer(on Contract)",
            NoOfPosts: "",
            PayScale: "47200 consolidated",
            GradePay: "",
            Eligibility: "Ph.D. with First Class both at UG and PG level"
        },
        {
            Designation: "Data Entry Operator",
            NoOfPosts: "03",
            PayScale: "13500 consolidated monthly",
            GradePay: "",
            Eligibility: "Graduate in any discipline alongwith PGDCAor DOEACC 'A' level Computer course"
        },
        {
            Designation: "Officer on Special Duty",
            NoOfPosts: "01",
            PayScale: "49400 consolidated monthly",
            GradePay: "",
            Eligibility: "Retired officers from central of state government"
        }]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Union Public Service Commission",
        ApplicationEndDt: "20/03/2015",
        DetailedNotification: "http://upsc.gov.in/exams/notifications/2015/IES_ISS/Notice_IES_ISS_Exam_2015_English.pdf",
        GoToSite: "http://upsconline.nic.in/mainmenu2.php",
        ApplicationFee: "200",
        PublishedOn: "21/02/2015",
        Age: "--",
        Logo: "upsc.jpg",
        AltText: "UPSC Indian Economic Service Examination 2015",
        JobDetails: [{
            Designation: "Indian Economic Service",
            NoOfPosts: "06",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Indian Statistical Service",
            NoOfPosts: "55",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        ]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "Union Public Service Commission",
        ApplicationEndDt: "23/03/2015",
        DetailedNotification: "http://upsc.gov.in/exams/notifications/2015/Geol/Notice_Geol_2015_English.pdf",
        GoToSite: "http://upsconline.nic.in/mainmenu2.php",
        ApplicationFee: "200",
        PublishedOn: "21/02/2015",
        Age: "--",
        Logo: "upsc.jpg",
        AltText: "UPSC Combined Geo-Scientist And Geologist Examination 2015",
        JobDetails: [{
            Designation: "Geologist Group A",
            NoOfPosts: "150",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Geophysicist Group A",
            NoOfPosts: "40",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Jr. HydroGeologist(Scientist B)",
            NoOfPosts: "29",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Chemist Group A",
            NoOfPosts: "50",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Income Tax Department, Chennai",
        ApplicationEndDt: "06/04/2015",
        DetailedNotification: "http://tnincometax.gov.in/vdo_library/902e9550-b988-11e4-9f25-5254005c208b.pdf",
        GoToSite: "http://tnincometax.gov.in/vdo_library/902e9550-b988-11e4-9f25-5254005c208b.pdf",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "tn_it.jpg",
        AltText: "Recruitment Of Meritorious Sportsperson in the Income Tax Department, Chennai",
        JobDetails: [{
            Designation: "Income Tax Inspectors",
            NoOfPosts: "07",
            PayScale: "9300 - 34800",
            GradePay: "4600",
            Eligibility: ""
        },
        {
            Designation: "Tax Assistant",
            NoOfPosts: "20",
            PayScale: "5200 - 20200",
            GradePay: "2400",
            Eligibility: ""
        },
        {
            Designation: "Multi Tasking Officer",
            NoOfPosts: "10",
            PayScale: "5200 - 20200",
            GradePay: "1800",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Central Industrial Security Force(CISF)",
        ApplicationEndDt: "14/03/2015",
        DetailedNotification: "http://www.cisf.gov.in/wp-content/uploads/2015/02/HC_MIN_2015_ENGLISH.pdf",
        GoToSite: "http://www.cisf.gov.in/head-constablemin-2015/",
        ApplicationFee: "50",
        PublishedOn: "",
        Age: "--",
        Logo: "cisf.jpg",
        AltText: "Recruitment of Head Constable(Ministerial) at Central Industrial Security Force(CISF)",
        JobDetails: [{
            Designation: "Head Constable(Ministerial)",
            NoOfPosts: "700",
            PayScale: "5200 - 20200",
            GradePay: "2400",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "IISER Bhopal",
        ApplicationEndDt: "10/03/2015",
        DetailedNotification: "https://www.iiserb.ac.in/PDF/Advertisement_for_the_post_of_Resident_Medical_Officer.pdf",
        GoToSite: "https://www.iiserb.ac.in/page.php?bulletin=Vacancies-&type=NonAcademic&id=87",
        ApplicationFee: "",
        PublishedOn: "",
        Age: "--",
        Logo: "iiser.jpg",
        AltText: "Advertisement for the post of Resident Medical Officer at IISER Bhopal",
        JobDetails: [{
            Designation: "Resident Medical Officer",
            NoOfPosts: "02",
            PayScale: "57,500 Gross Salary",
            GradePay: "",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "IISER Thiruvananthapuram",
        ApplicationEndDt: "31/03/2015",
        DetailedNotification: "http://www.orientalinsurance.org.in/Career.jsp",
        GoToSite: "http://www.iisertvm.ac.in/openings/faculty_special_recruitment_drive.phpx",
        ApplicationFee: "",
        PublishedOn: "",
        Age: "--",
        Logo: "iiser.jpg",
        AltText: "Faculty Position Under Special Recruitment Drive For SC/ST at Indian Institue of Science Education and Reserch(IISER)",
        JobDetails: [{
            Designation: "Assistant Professor ( on contract)",
            NoOfPosts: "",
            PayScale: "15600-39100",
            GradePay: "6000",
            Eligibility: ""
        },
        {
            Designation: "Assistant Professor (Regular)",
            NoOfPosts: "",
            PayScale: "15600-39100",
            GradePay: "6000",
            Eligibility: "PhD with a very good academic record throughout and at least three years "
        }
        ]
    },
   {
       HeadingTheme: "panel panel-danger",
       Title: "Oriental Insurance Co. Ltd",
       ApplicationEndDt: "20/03/2015",
       DetailedNotification: "http://www.orientalinsurance.org.in/Career.jsp",
       GoToSite: "http://www.orientalinsurance.org.in/Career.jsp",
       ApplicationFee: "600",
       PublishedOn: "27/02/2015",
       Age: "--",
       Logo: "orientalinsurance.jpg",
       AltText: "Recruitment of Administrative Officers (Scale-I)-2015 in Oriental Insurance Co. Ltd",
       JobDetails: [{
           Designation: "Administrative Officer",
           NoOfPosts: "246",
           PayScale: "17,240-840(14)-29,000-910(4)-32640",
           GradePay: "",
           Eligibility: ""
       },
       ]
   },
    {
        HeadingTheme: "panel panel-info",
        Title: "Center For Development of Advanced Computing(CDAC)",
        ApplicationEndDt: "05/03/2015",
        DetailedNotification: "http://cdac.in/index.aspx?id=ca_pune_feb_general_terms",
        GoToSite: "http://cdac.in/index.aspx?id=job_pune_feb_2015",
        ApplicationFee: "500",
        PublishedOn: "17/02/2015",
        Age: "--",
        Logo: "cdac.jpg",
        AltText: "Center For Development of Advanced Computing(CDAC) invites applications for Group A non Technical posts",
        JobDetails: [{
            Designation: "Senior HRD Officer",
            NoOfPosts: "02",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Senior Finance Officer",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Senior Admin Officer(Chief Executive Office/Registrar Office)",
            NoOfPosts: "02",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "HRD Officer",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Admin Officer(Legal)",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Admin Officer",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Finance Officer",
            NoOfPosts: "02",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Purchase Officer",
            NoOfPosts: "02",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Food Corporation Of India(FCI)",
        ApplicationEndDt: "17/03/2015",
        DetailedNotification: "https://fcijobsportal.com/AGIII2014/pages/FCI_Advt_2015.pdf",
        GoToSite: "https://fcijobsportal.com/AGIII2014/pages/fciindex.aspx",
        ApplicationFee: "350",
        PublishedOn: "16/02/2015",
        Age: "--",
        Logo: "fci.jpg",
        AltText: "Zone Wise Recruitment for Junior Engineer(Civil/Electrical/Mechanical), Assistant Grade II, Typist(Hindi) and Assistant Grade III at Food Corporation Of India(FCI)",
        JobDetails: [{
            Designation: "Junior Engineer(Civil)",
            NoOfPosts: "66",
            PayScale: "11100-29950",
            GradePay: "",
            Eligibility: "Degree in Civil Engineering or Diploma in Civil Engineering with one year experience."
        },
        {
            Designation: "Junior Engineer(Electrical)",
            NoOfPosts: "17",
            PayScale: "11100-29950",
            GradePay: "",
            Eligibility: "Degree in Electrical Engineering or Diploma in Electrical Engineering with one year experience in the case of Diploma holders only."
        },
        {
            Designation: "Junior Engineer(Mechanical)",
            NoOfPosts: "06",
            PayScale: "11100-29950",
            GradePay: "",
            Eligibility: "Degree in Mechanical Engineering or Diploma in Mechanical Engineering with one year experience in the case of Diploma holders."
        },
        {
            Designation: "AG-II (Hindi)",
            NoOfPosts: "54",
            PayScale: "9900 – 25530",
            GradePay: "",
            Eligibility: "1. Degree of a recognized University with Hindi as the main subject. 2. Proficiency in English. 3. One year experience of translation from English to Hindi and viceversa."
        },
        {
            Designation: "Typist (Hindi)",
            NoOfPosts: "100",
            PayScale: "9900 – 25530",
            GradePay: "",
            Eligibility: "(1) Graduation or equivalent. (2) 30 W.P.M speed in Hindi Typing. (3) Preference will be given to the candidates knowing by-lingual typing (English and Hindi) and Computer knowledge."
        },
        {
            Designation: "AG-III (General)",
            NoOfPosts: "699",
            PayScale: "9900 – 25530",
            GradePay: "",
            Eligibility: "Graduate Degree in any discipline from a recognized University with proficiency in use of computers."
        },
        {
            Designation: "AG-III (Accounts)",
            NoOfPosts: "269",
            PayScale: "9900 – 25530",
            GradePay: "",
            Eligibility: "Bachelor of Commerce from a recognized University with proficiency in use of computers."
        },
        {
            Designation: "AG-III (Technical)",
            NoOfPosts: "1429",
            PayScale: "9900 – 25530",
            GradePay: "",
            Eligibility: "1. B.Sc. in Agriculture from a recognized University. 2. Proficiency in use of computers."
        },
        {
            Designation: "AG-III (Depot)",
            NoOfPosts: "1652",
            PayScale: "9900 – 25530",
            GradePay: "",
            Eligibility: "Graduate Degree in any discipline from a recognized University withproficiency in use of computers."
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Container Corporation Of India",
        ApplicationEndDt: "08/03/2015",
        DetailedNotification: "http://careers1.concorindia.co.in/AdvEng.Pdf",
        GoToSite: "http://www.concorindia.com/recruitment_notices.aspx",
        ApplicationFee: "350",
        PublishedOn: "14/02/2015",
        Age: "--",
        Logo: "concor.jpg",
        AltText: "CCI Recruitment 2015 Management Trainee",
        JobDetails: [{
            Designation: "Management Trainee",
            NoOfPosts: "25",
            PayScale: "16400 - 40500",
            GradePay: "",
            Eligibility: "Graduate with minimum 55% marks and 2 years full time MBA"
        },
        {
            Designation: "Assistant Company Secretary",
            NoOfPosts: "01",
            PayScale: "11800 - 28600",
            GradePay: "",
            Eligibility: "Commerce Graduate with minimum 60% marks and membership of ICSI"
        }
        ]
    },
  {
      HeadingTheme: "panel panel-success",
      Title: "Indian Navy SSC",
      ApplicationEndDt: "04/03/2015",
      DetailedNotification: "http://www.nausena-bharti.nic.in/pdf/Triadentry/sscxtechsubmjan16.pdf",
      GoToSite: "http://www.nausena-bharti.nic.in/forthcomingOfficer.php",
      ApplicationFee: "",
      PublishedOn: "14/02/2015",
      Age: "--",
      Logo: "indiannavy.jpg",
      AltText: "Indian Navy SSC Technical Recruitment 2015",
      JobDetails: [{
          Designation: "SSC Technical",
          NoOfPosts: "71",
          PayScale: "15600 - 39100",
          GradePay: "5400",
          Eligibility: "B.E./B.Tech Engineering with minimum 65%"
      }]
  },
    {
        HeadingTheme: "panel panel-warning",
        Title: "BPCL Kochi Refinery",
        ApplicationEndDt: "28/02/2015",
        DetailedNotification: "http://www.bharatpetroleum.com/Kochicareers/pdf/advertisement%20feb%202015.pdf",
        GoToSite: "http://www.bpclcareers.in/joblisting.aspx",
        ApplicationFee: "",
        PublishedOn: "14/02/2015",
        Age: "--",
        Logo: "bpcl.jpg",
        AltText: "BPCL Kochi Refinery Workman Recruitment",
        JobDetails: [{
            Designation: "General Workman",
            NoOfPosts: "71",
            PayScale: "5.51 CTC",
            GradePay: "",
            Eligibility: "First class Diploma in Engineering"
        }]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Union Public Service Commission",
        ApplicationEndDt: "05/03/2015",
        DetailedNotification: "http://upsc.gov.in/recruitment/advt/2015/advt3&51_20015.pdf",
        GoToSite: "http://upsconline.nic.in/ora/VacancyNoticePub.php",
        ApplicationFee: "500",
        PublishedOn: "14/02/2015",
        Age: "--",
        Logo: "upsc.jpg",
        AltText: "UPSC vacancy",
        JobDetails: [{
            Designation: "Stores Officer",
            NoOfPosts: "20(SC-03, ST-01, OBC-05, UR-11)",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Stores Officer",
            NoOfPosts: "20(SC-03, ST-01, OBC-05, UR-11)",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Assistant Public Prosecutor",
            NoOfPosts: "22(SC-02, ST-01, OBC-01, UR-13)",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Assistant Surveyor Officers",
            NoOfPosts: "04(ST-01, OBC-01, UR-02)",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
         {
             Designation: "Engineer and Ship Surveyor cum Deputy Director General(Tech.)",
             NoOfPosts: "03(ST-01, OBC-01, UR-01)",
             PayScale: "",
             GradePay: "",
             Eligibility: ""
         }
        ]
},
{
    HeadingTheme: "panel panel-danger",
    Title: "Uttar Pradesh National Rural Health Mission",
    ApplicationEndDt: "28/02/2015",
    DetailedNotification: "http://upnrhm.gov.in/site-files/careers/JD_BCPM-NHM__SS-ARS-GN_3__1_.doc",
    GoToSite: "http://upnrhm.gov.in/careers.php",
    ApplicationFee: "500",
    PublishedOn: "2015",
    Age: "--",
    Logo: "nrhm.jpg",
    AltText: "UP NRHM vacancy",
    JobDetails: [{
        Designation: "Block Community Process Managers",
        NoOfPosts: "820",
        PayScale: "",
        GradePay: "",
        Eligibility: ""
    },
    {
        Designation: "Rogi Sahayata Kendra Managers",
        NoOfPosts: "50",
        PayScale: "",
        GradePay: "",
        Eligibility: ""
    },
    {
        Designation: "Rogi Sahayata Kendra Operators",
        NoOfPosts: "200",
        PayScale: "",
        GradePay: "",
        Eligibility: ""
    }
    ]
},
{
            HeadingTheme: "panel panel-danger",
            Title: "Indian Institute Of Technology Bhubaneswar(IIT)",
            ApplicationEndDt: "20/02/2015",
            DetailedNotification: "http://www.iitbbs.ac.in/staffrecruitment/advt/postadvt_1422493625.pdf",
            GoToSite: "http://www.iitbbs.ac.in/staffrecruitment/index.php",
            ApplicationFee: "500",
            PublishedOn: "30/01/2015",
			Age: "--",
			Logo:"iit_bhubaneswar.jpg",
			AltText:"Indian Institute Of Technology Bhubaneswar recruitment 2015",
            JobDetails: [{
                Designation: "Junior Superintendent",
                NoOfPosts: "05(UR-03, OBC-02)",
                PayScale: "9,300 - 34,800",
                GradePay: "4200",
                Eligibility: ""
            },
			{
                Designation: "Junior Assistant",
                NoOfPosts: "05(UR-02, SC-01, ST-02)",
                PayScale: "5,200 - 20,200",
                GradePay: "2,000",
                Eligibility: ""
            }
			]
},
{
            HeadingTheme: "panel panel-warning",
            Title: "Tripura Public Service Commission(TPSC)",
            ApplicationEndDt: "28/02/2015",
            DetailedNotification: "http://www.tpsc.gov.in/2015/310115.pdf",
            GoToSite: "http://www.tpsc.gov.in/examination.htm",
            ApplicationFee: "200",
            PublishedOn: "2015",
			Age: "--",
			Logo:"tpsc.jpg",
			AltText:"Tripura Public Service Commission recruitment 2015",
            JobDetails: [{
                Designation: "Junior Medical Officer / General Duty Medical Officer",
                NoOfPosts: "350",
                PayScale: "13,575 - 37,000",
                GradePay: "3,700",
                Eligibility: ""
            },
			{
                Designation: "Scientific Officer",
                NoOfPosts: "03",
                PayScale: "9,570 - 30,000",
                GradePay: "3,500",
                Eligibility: ""
            },
			{
                Designation: "Statistical Officer",
                NoOfPosts: "02",
                PayScale: "9,570 - 30,000",
                GradePay: "3,500",
                Eligibility: ""
            }
			]
},
{
            HeadingTheme: "panel panel-info",
            Title: "Microbial Technology(IMTECH) Chandigarh",
            ApplicationEndDt: "12/03/2015",
            DetailedNotification: "http://www.imtech.res.in/index.php?option=com_chronocontact&chronoformname=Job&task=summary&Itemid=123",
            GoToSite: "http://www.imtech.res.in/",
            ApplicationFee: "",
            PublishedOn: "2015",
			Age: "--",
			Logo:"csir.jpg",
			AltText: "Faculty posts in Institute of Microbial Technology(IMTECH) Chandigarh",
            JobDetails: [{
                Designation: "Senior Principal Scientist / Principal Scientist",
                NoOfPosts: "04",
                PayScale: "37,400 - 67,000",
                GradePay: "8,900",
                Eligibility: ""
            },
			{
                Designation: "Senior Scientist / Scientist",
                NoOfPosts: "11",
                PayScale: "15,600 - 39,100",
                GradePay: "6,600",
                Eligibility: ""
            }
			]
},
{
            HeadingTheme: "panel panel-info",
            Title: "Berhampur University",
            ApplicationEndDt: "28/02/2015",
            DetailedNotification: "http://www.buodisha.edu.in/",
            GoToSite: "http://www.buodisha.edu.in/",
            ApplicationFee: "1000",
            PublishedOn: "2015",
			Age: "--",
			Logo:"berhampur_university.jpg",
			AltText:"Faculty posts in Berhampur University",
            JobDetails: [{
                Designation: "Reader",
                NoOfPosts: "03",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Lecturer",
                NoOfPosts: "10",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            }
			]
},
{
            HeadingTheme: "panel panel-danger",
            Title: "All India Institute of Medical Sciences(AIIMS) Patna",
            ApplicationEndDt: "14/03/2015",
            DetailedNotification: "http://www.aiimspatna.org/news/Faculty%20Ad%20Employment%20News.pdf",
            GoToSite: "http://www.aiimspatna.org/pages/recruitment.php",
            ApplicationFee: "500",
            PublishedOn: "07/02/2015",
			Age: "--",
			Logo:"aiims_patna.jpg",
			AltText:"Faculty posts at AIIMS Patna",
            JobDetails: [{
                Designation: "Professor",
                NoOfPosts: "29",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Additional Professor",
                NoOfPosts: "23",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Associate Professor",
                NoOfPosts: "60",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Assistant Professor",
                NoOfPosts: "82",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            }
			]
},
{
            HeadingTheme: "panel panel-warning",
            Title: "Tata Memorial Hospital(TMH)",
            ApplicationEndDt: "20/02/2015",
            DetailedNotification: "https://tmc.gov.in/work/Notification2015/work03_15.html",
            GoToSite: "https://tmc.gov.in/work/Notification2015/work03_15.html",
            ApplicationFee: "500",
            PublishedOn: "30/01/2015",
			Age: "--",
			Logo:"tmh.jpg",
			AltText:"Faculty and non faculty posts at TMH",
            JobDetails: [{
                Designation: "Professor 'G' / Associate Professor 'F' / Assistant Professor 'E' Gastroenterology",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Assistant Professor 'E' Gastroenterology",
                NoOfPosts: "03",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Professor 'G' / Associate Professor 'F', Assistant Professor 'E' Gastroenterology",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Scientific Officer",
                NoOfPosts: "03",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Officer In charge(Dispensary)",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Junior Engineer",
                NoOfPosts: "03",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Assistant Dietician",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Scientific Assistant 'B'",
                NoOfPosts: "13",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Pharmacist 'B'",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Technician 'C'",
                NoOfPosts: "03",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Stenographer",
                NoOfPosts: "04",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Technician 'A'",
                NoOfPosts: "03",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Lower Divisional Clerk",
                NoOfPosts: "15",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            }
			]
},
{
            HeadingTheme: "panel panel-success",
            Title: "Patna High Court",
            ApplicationEndDt: "13/03/2015",
            DetailedNotification: "http://patnahighcourt.bih.nic.in/ViewPDF.aspx?File=UPLOADED/575.PDF",
            GoToSite: "http://patnahighcourt.bih.nic.in/",
            ApplicationFee: "200",
            PublishedOn: "12/02/2015",
			Age: "--",
			Logo:"patna_high_court.jpg",
			AltText:"Personal Assistant / Stenographer in Patna High Court",
            JobDetails: [{
                Designation: "Personal Assistant / Stenographer",
                NoOfPosts: "64 +30(anticipated)",
                PayScale: "9,300 - 34,800",
                GradePay: "4,600",
                Eligibility: ""
            }]
},
{
            HeadingTheme: "panel panel-warning",
            Title: "Hindustan Shipyard Limited(HSL)",
            ApplicationEndDt: "28/02/2015",
            DetailedNotification: "http://hsl.gov.in/WriteReadData/userfiles/file/Recruitment/ADVT_NO_HR_E_0102_01_2015_03Feb2015_Final.pdf",
            GoToSite: "http://hsl.gov.in/content/200_1_Careers.aspx",
            ApplicationFee: "100",
            PublishedOn: "2015",
			Age: "--",
			Logo:"hsl.jpg",
			AltText:"Manager and officer posts at HSL",
            JobDetails: [{
                Designation: "General Manager(Finance)",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Additional General Manager(Finance)",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
               Designation: "Additional General Manager(Submarine Technical)",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Assistant Professor(Nephrology)",
                NoOfPosts: "02",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Additional General Manager(Technical)",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Assistant Professor(Nephrology)",
                NoOfPosts: "02",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Additional General Manager(Safety and Security)",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Deputy General Manager(Technical)",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Additional General Manager(Safety and Security)",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Deputy General Manager(Technical)",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Senior Manager(HR and Admin)",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Senior Manager(Purchase and Material)",
                NoOfPosts: "02",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Dock Master",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Manager(HR and Admin)",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Management Trainee(Technical)",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            }
			]
},
{
            HeadingTheme: "panel panel-danger",
            Title: "Himachal Pradesh Public Service Commission",
            ApplicationEndDt: "05/03/2015",
            DetailedNotification: "http://hp.gov.in/hppsc/file.axd?file=2015%2f2%2fAdvertisement+No.+8_2014+++(Various+Posts).pdf",
            GoToSite: "http://hp.gov.in/hppsc/page/Latest-Advertisement.aspx",
            ApplicationFee: "400",
            PublishedOn: "2014",
			Age: "--",
			Logo:"hppsc.jpg",
			AltText:"Various posts at HPPSC",
            JobDetails: [{
                Designation: "Assistant Professor(Nephrology)",
                NoOfPosts: "02",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Principal(Department of Ayurveda)",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Lecturer(Samhita and Siddhanta)",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Lecturer(Rog Nidhan)",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Law Officer(English)",
                NoOfPosts: "02",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Manager",
                NoOfPosts: "02",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Accounts Officer",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Commandant / Junior Staff Officer",
                NoOfPosts: "02",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Assistant Town Planner",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            }
            ]
        },
{
            HeadingTheme: "panel panel-info",
            Title: "Chaitanya Godavri Grameen Bank",
            ApplicationEndDt: "18/02/2015",
            DetailedNotification: "http://www.cggb.in/Final_approved_Advertisement_CGGB_for%20RRBs_2015_to%20IBPS.pdf",
            GoToSite: "http://www.cggb.in/",
            ApplicationFee: "",
            PublishedOn: "07/02/2015",
			Age: "--",
			Logo:"cggb.jpg",
			AltText:"Officer posts at CGGB",
            JobDetails: [{
                Designation: "Officer Scale I",
                NoOfPosts: "69",
                PayScale: "14,500 - 25700",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Office Assistant(Multi-purpose)",
                NoOfPosts: "32",
                PayScale: "7200 - 19300",
                GradePay: "",
                Eligibility: ""
            }
            ]
        },
{
            HeadingTheme: "panel panel-warning",
            Title: "Solar Energy Corporation Of India(SOLAR)",
            ApplicationEndDt: "08/03/2015",
            DetailedNotification: "http://www.seci.gov.in/upload/uploadfiles/files/English%20Solar%20Energy%20Ad%20for%20Employment%20News.pdf",
            GoToSite: "http://www.seci.gov.in/content/news_update/recruitment-notification-no-12015.php",
            ApplicationFee: "--",
            PublishedOn: "07/02/2015",
			Age: "--",
			Logo:"solar.jpg",
			AltText: "Solar Energy Corporation Of India(SOLAR) invites application for Engineer and Assistant",
            JobDetails: [{
                Designation: "Senior Engineer",
                NoOfPosts: "13",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "Full time Engineering Graduate"
            },
			{
                Designation: "Personal Assistant",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "Bachelors degree from recognised university"
            }
            ]
        },
{
            HeadingTheme: "panel panel-info",
            Title: "Motilal Nehru Instituteof Technology(MNNIT)",
            ApplicationEndDt: "02/03/2015",
            DetailedNotification: "http://mnnit.ac.in/images/newstories/Extension_Faculty_advertisement_No_new.pdf",
            GoToSite: "http://mnnit.ac.in/index.php/faculty-positions",
            ApplicationFee: "500",
            PublishedOn: "04/02/2015",
			Age: "--",
			Logo:"mnnit.jpg",
			AltText: "Last date extended for faculty posts at Motilal Nehru Instituteof Technology(MNNIT)",
            JobDetails: [{
                Designation: "Professor",
                NoOfPosts: "--",
                PayScale: "37,400 - 67,000",
                GradePay: "10,500",
                Eligibility: "--"
            },
			{
                Designation: "Associate Professor",
                NoOfPosts: "--",
                PayScale: "37,400 - 67,000",
                GradePay: "9500",
                Eligibility: "--"
            }
            ]
        },
{
            HeadingTheme: "panel panel-danger",
            Title: "Madhyanchal Gramin Bank(MGBank)",
            ApplicationEndDt: "13/02/2015",
            DetailedNotification: "http://www.mgbank.co.in/recruitment/1422447994Final%20recruitment%20advt%202015.pdf",
            GoToSite: "http://www.mgbank.co.in/career.php",
            ApplicationFee: "--",
            PublishedOn: "29/01/2015",
			Age: "--",
			Logo:"mgb.jpg",
			AltText: "Officer and office assistant post at Madhyanchal Gramin Bank(MGBank)",
            JobDetails: [{
                Designation: "Officer scale I",
                NoOfPosts: "100",
                PayScale: "14,500 - 25,700",
                GradePay: "--",
                Eligibility: "qualified online CWB for RRBs conducted by IBPS during Sep/Oct 2014"
            },
			{
                Designation: "Office Assistant(multi purpose)",
                NoOfPosts: "350",
                PayScale: "7200 - 19,300",
                GradePay: "--",
                Eligibility: "--"
            }
            ]
        },
{
            HeadingTheme: "panel panel-warning",
            Title: "Indian Air force(IAF)",
            ApplicationEndDt: "14/02/2015",
            DetailedNotification: "http://careerairforce.nic.in",
            GoToSite: "http://careerairforce.nic.in/tview3.asp?link_temp_id=256&lid=124",
            ApplicationFee: "--",
            PublishedOn: "2015",
			Age: "20 - 26 as on 01/01/2016",
			Logo:"iaf.jpg",
			AltText: "Short service commission in meteorological branch of Indian Air force(IAF) for course commencing January 2016",
            JobDetails: [{
                Designation: "Short Service Commission",
                NoOfPosts: "--",
                PayScale: "15,600 - 39,100",
                GradePay: "5400 plus 6000 MSP and other allowances",
                Eligibility: "Post graduate degree and physical standards"
            }
            ]
        },
{
            HeadingTheme: "panel panel-success",
            Title: "Aryabhatta Knowledge University(AKU)",
            ApplicationEndDt: "21/02/2015",
            DetailedNotification: "http://www.akubihar.org/pdf/Notice/Appointment%20of%20ACE,%20SO%20&%20LO%20of%20AKU,%20Patna.pdf",
            GoToSite: "http://www.akubihar.org/careers.html",
            ApplicationFee: "500",
            PublishedOn: "19/01/2015",
			Age: "Read Adv",
			Logo:"aku.jpg",
			AltText: "Registrar and officer posts in Aryabhatta Knowledge University(AKU)",
            JobDetails: [{
                Designation: "Assistant Controller of examination",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Section Officer",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Liaison officer",
                NoOfPosts: "01(purely on contract)",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Registrar",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Finance officer",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Assistant Professor",
                NoOfPosts: "02",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Senior Technical assistant",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Technical assistant",
                NoOfPosts: "02",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Laboratory Assistant",
                NoOfPosts: "03",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "Read Adv"
            }
            ]
        },
{
            HeadingTheme: "panel panel-info",
            Title: "Central University of Kerela(CUK)",
            ApplicationEndDt: "01/03/2015",
            DetailedNotification: "http://cukerala.ac.in/index.php?option=com_content&view=article&id=713:teaching-and-non-teaching-recruitment-2&catid=25&Itemid=185&lang=en",
            GoToSite: "http://cukerala.ac.in/index.php?option=com_content&view=category&id=25&Itemid=185&lang=en",
            ApplicationFee: "300",
            PublishedOn: "15/01/2015",
			Age: "Read Adv",
			Logo:"cuk.jpg",
			AltText: "Officer posts in Central University of Kerela(CUK)",
            JobDetails: [{
                Designation: "Public Relation officer",
                NoOfPosts: "01",
                PayScale: "37400 - 67000",
                GradePay: "10000",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Technical Officer",
                NoOfPosts: "01",
                PayScale: "37400 - 67000",
                GradePay: "10000",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Finance officer",
                NoOfPosts: "01",
                PayScale: "37400 - 67000",
                GradePay: "10000",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Registrar",
                NoOfPosts: "01",
                PayScale: "37400 - 67000",
                GradePay: "10000",
                Eligibility: "Read Adv"
            }
            ]
        },
{
            HeadingTheme: "panel panel-warning",
            Title: "Hindustan Aeronautics Limited(HAL)",
            ApplicationEndDt: "17/02/2015",
            DetailedNotification: "http://www.hal-india.com/CAREERS/M__206",
            GoToSite: "http://www.hal-india.com/CAREERS/M__206",
            ApplicationFee: "--",
            PublishedOn: "28/01/2015",
			Age: "Refer Advertisement",
			Logo:"hal.jpg",
			AltText: "Assistant Engineer and officer posts in Hindustan Aeronautics Limited(HAL)",
            JobDetails: [{
                Designation: "Assistant Engineer(Civil)",
                NoOfPosts: "37",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Assistant Scientific Officer",
                NoOfPosts: "01",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Assistant Officer(Library)",
                NoOfPosts: "01",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Assistant Officer(Catering)",
                NoOfPosts: "01",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
              Designation: "Assistant Officer(Estate)",
                NoOfPosts: "01",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Assistant Officer(Horticulture)",
                NoOfPosts: "01",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Assistant Officer(Safety)",
                NoOfPosts: "01",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Assistant Officer(Security)",
                NoOfPosts: "01",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Russian Language Interpreter",
                NoOfPosts: "02",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            }
            ]
        },
{
            HeadingTheme: "panel panel-info",
            Title: "Miranda House, Delhi University(DU)",
            ApplicationEndDt: "23/02/2015",
            DetailedNotification: "http://mh.du.ac.in/Docs/M1_Advertisement_JAN_2015.pdf",
            GoToSite: "http://mh.du.ac.in/home.aspx",
            ApplicationFee: "250",
            PublishedOn: "2015",
			Age: "Refer Advertisement",
			Logo:"Miranda.jpg",
			AltText: "Assistant Professor in Miranda House, Delhi University(DU)",
            JobDetails: [{
                Designation: "Assistant Professor",
                NoOfPosts: "37",
                PayScale: "15600 - 30100",
                GradePay: "6000",
                Eligibility: "--"
            }
            ]
        },
{
            HeadingTheme: "panel panel-warning",
            Title: "Union Public Service Commission",
            ApplicationEndDt: "12/02/2015",
            DetailedNotification: "http://upsc.gov.in/recruitment/advt/2015/Advt%202%20of%202015.pdf",
            GoToSite: "http://upsconline.nic.in/ora/VacancyNoticePub.php",
            ApplicationFee: "Refer Advertisement",
            PublishedOn: "24/01/2015",
			Age: "Refer Advertisement",
			Logo:"upsc.jpg",
			AltText: "Union Public Service Commission(UPSC) Adv 02 for various jobs",
            JobDetails: [{
                Designation: "Junior Scientific Officer",
                NoOfPosts: "01(SC)",
                PayScale: "--",
                GradePay: "--",
                Age: "--",
                Eligibility: "--"
            },
            {
                Designation: "Specialist Grade III (Medicine) in the Non Teaching Specialist Sub Cadre of CHS at A&N Islands",
                NoOfPosts: "07(SC-01,ST-01,OBC-01,UR-04)",
                PayScale: "--",
                GradePay: "--",
                Age: "--",
                Eligibility: "--"
            },
			{
                Designation: "Specialist Grade III Assistant Professor (Nephrology)",
                NoOfPosts: "02(SC-01,UR-01)",
                PayScale: "--",
                GradePay: "--",
                Age: "--",
                Eligibility: "--"
            },
			{
                Designation: "Specialist Grade III Assistant Professor (Anaesthesia)",
                NoOfPosts: "37(SC-04,ST-02,OBC-13,UR-18)",
                PayScale: "--",
                GradePay: "--",
                Age: "--",
                Eligibility: "--"
            },
			{
                Designation: "Deputy Controller of Mines",
                NoOfPosts: "04(OBC-02,UR-02)",
                PayScale: "--",
                GradePay: "--",
                Age: "--",
                Eligibility: "--"
            },
			{
                Designation: "SENIOR LECTURER (GENERAL SURGERY)",
                NoOfPosts: "01(OBC-01)",
                PayScale: "--",
                GradePay: "--",
                Age: "--",
                Eligibility: "--"
            },
			{
                Designation: "Senior Lecturer (Microbiology)",
                NoOfPosts: "01(OBC-01)",
                PayScale: "--",
                GradePay: "--",
                Age: "--",
                Eligibility: "--"
            },
			{
                Designation: "SENIOR LECTURER (IMMUNO HAEMATOLOGY AND BLOOD TRANSFUSION)",
                NoOfPosts: "01(OBC-01)",
                PayScale: "--",
                GradePay: "--",
                Age: "--",
                Eligibility: "--"
            },
			{
                Designation: "Senior Lecturer (Tuberculosis and Respiratory Diseases)",
                NoOfPosts: "01(OBC-01)",
                PayScale: "--",
                GradePay: "--",
                Age: "--",
                Eligibility: "--"
            },
			{
                Designation: "Senior Lecturer (Paediatrics)",
                NoOfPosts: "04(OBC-01,UR-03)",
                PayScale: "--",
                GradePay: "--",
                Age: "--",
                Eligibility: "--"
            },
			{
                Designation: "SENIOR LECTURER (RADIO DIAGNOSIS)",
                NoOfPosts: "03(OBC-01,UR-02)",
                PayScale: "--",
                GradePay: "--",
                Age: "--",
                Eligibility: "--"
            }
            ]
        },
		{
            HeadingTheme: "panel panel-danger",
            Title: "Institute of Himalayan Bioresource Technology",
            ApplicationEndDt: "09/02/2015",
            DetailedNotification: "http://www.ihbt.res.in/recruit/Advt13_2014.pdf",
            GoToSite: "http://www.ihbt.res.in/recruit/recruitNotice.php",
            ApplicationFee: "100",
            PublishedOn: "2014",
			Age: "Refer Advertisement",
			Logo:"csir.jpg",
			AltText: "Institute of Himalayan Bioresource Technology (CSIR-IHBT) technical jobs",
            JobDetails: [{
                Designation: "Senior Technical Officer",
                NoOfPosts: "02(OBC-01,UR-01)",
                PayScale: "15600 - 39100",
                GradePay: "5400",
                Eligibility: "--"
            },
            {
                Designation: "Technical Assistant",
                NoOfPosts: "01(UR-01)",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            }
            ]
        }
];
