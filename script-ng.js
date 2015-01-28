var GyaanCheckApp = angular.module('GyaanCheck', []);

GyaanCheckApp.controller('getLeftPanel', function ($scope, $element) {
  $scope.sections = sectionLeft;
});

GyaanCheckApp.controller('getRightPanel', function ($scope, $element) {
    $scope.sections = sectionRight;
});

var sectionLeft = [
{
            HeadingTheme: "panel panel-danger",
            Title: "Officer posts in Allahbad Gramin Bank(AGB)",
            ApplicationEndDt: "12/02/2015",
            DetailedNotification: "http://www.allahabadgraminbank.in/career/Allahabad%20UP%20Gramin%20Bank-Advertisement.pdf.pdf",
            GoToSite: "http://www.allahabadgraminbank.in/career.html",
            ApplicationFee: "--",
            PublishedOn: "28/01/2015",
			Age: "read Adv",
			Logo:"agb.jpg",
			AltText:"AGB job",
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
            Title: "Bharat Electronics (BEL) Ghaziabad Engineering Assistant Trainee",
            ApplicationEndDt: "08/02/2015",
            DetailedNotification: "http://bel-india.com/sites/default/files/Recruitments/Detailed%20Advt.pdf",
            GoToSite: "http://bel-india.com/",
            ApplicationFee: "300",
            PublishedOn: "01/2015",
			Age: "30 years as on 01/01/2015",
			Logo:"bel.jpg",
			AltText:"BEL job",
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
            Title: "Bharat Electronics (BEL) Ghaziabad Engineering Assistant Trainee",
            ApplicationEndDt: "14/02/2015",
            DetailedNotification: "https://jobapply.in/belghaziabad2015/",
            GoToSite: "http://bel-india.com/",
            ApplicationFee: "300",
            PublishedOn: "17/01/2015",
			Age: "28",
			Logo:"bel.jpg",
			AltText:"BEL job",
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
            Title: "Job posts in Karnataka Kerela Region(KKR) by Staff Selection Commission(SSC)",
            ApplicationEndDt: "13/02/2015",
            DetailedNotification: "http://ssc.nic.in/notice/examnotice/ADVERTISEMENT%20NO.%20KKR-01-2015.pdf",
            GoToSite: "http://ssckkr.kar.nic.in",
            ApplicationFee: "check Advt",
            PublishedOn: "17/01/2015",
			Age: "refer advertisement",
			Logo:"ssc.jpg",
			AltText:"SSC job",
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
            Title: "National Hydroelectric power Corporation(NHPC) special drive for engineer and officer posts",
            ApplicationEndDt: "23/02/2015",
            DetailedNotification: "http://www.nhpcindia.com/writereaddata/Images/pdf/srd2015.pdf",
            GoToSite: "http://www.nhpcindia.com/career.htm",
            ApplicationFee: "check Advt",
            PublishedOn: "01/2015",
			Age: "refer advertisement",
			Logo:"nhpc.jpg",
			AltText:"NHPC job",
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
            Title: "Recruitment of constables(GD) in CAPFs and rifleman in Assam Rifles 2015",
            ApplicationEndDt: "23/02/2015",
            DetailedNotification: "http://ssconline.nic.in/mainmenu2.php",
            GoToSite: "http://ssconline.nic.in/mainmenu2.php",
            ApplicationFee: "50",
            PublishedOn: "24/01/2015",
			Age: "18 - 23 as on 01/08/2015",
			Logo:"ssc.jpg",
			AltText:"SSC",
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
            Title: "Civil Judge(Junior Division) cum judicial magistrate at Punjab PSC",
            ApplicationEndDt: "25/02/2015",
            DetailedNotification: "http://ppsc.gov.in/pdf/pcsj1415/dae.pdf",
            GoToSite: "http://ppsc.gov.in/advertisement_04.html",
            ApplicationFee: "--",
            PublishedOn: "21/01/2015",
			Age: "21 - 27 as on 25/02/2015",
			Logo:"PunjabPSC.jpg",
			AltText:"PunjabPSC",
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
            Title: "Constable Driver at Indo Tibetan Border Police(ITBP)",
            ApplicationEndDt: "16/02/2015",
            DetailedNotification: "http://itbpolice.nic.in/eKiosk/writeReadData/RectAd/Fresh%20Advertisement%20CT%20%28dvr%29%202014.pdf",
            GoToSite: "http://itbpolice.nic.in/itbpwebsite/index.html",
            ApplicationFee: "50",
            PublishedOn: "2015",
			Age: "21 - 27",
			Logo:"ITBP.jpg",
			AltText:"ITBP",
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
            Title: "Officer posts in Central University of Kerela(CUK)",
            ApplicationEndDt: "01/03/2015",
            DetailedNotification: "http://cukerala.ac.in/index.php?option=com_content&view=article&id=713:teaching-and-non-teaching-recruitment-2&catid=25&Itemid=185&lang=en",
            GoToSite: "http://cukerala.ac.in/index.php?option=com_content&view=category&id=25&Itemid=185&lang=en",
            ApplicationFee: "300",
            PublishedOn: "15/01/2015",
			Age: "Read Adv",
			Logo:"cuk.jpg",
			AltText:"Central University of Kerela job",
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
            Title: "Assistant Engineer and officer posts in Hindustan Aeronautics Limited(HAL)",
            ApplicationEndDt: "17/02/2015",
            DetailedNotification: "http://www.hal-india.com/CAREERS/M__206",
            GoToSite: "http://www.hal-india.com/CAREERS/M__206",
            ApplicationFee: "--",
            PublishedOn: "28/01/2015",
			Age: "Refer Advertisement",
			Logo:"hal.png",
			AltText:"HAL jobs",
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
            Title: "Assistant Professor in Miranda House, Delhi University(DU)",
            ApplicationEndDt: "23/02/2015",
            DetailedNotification: "http://mh.du.ac.in/Docs/M1_Advertisement_JAN_2015.pdf",
            GoToSite: "http://mh.du.ac.in/home.aspx",
            ApplicationFee: "250",
            PublishedOn: "2015",
			Age: "Refer Advertisement",
			Logo:"Miranda.jpg",
			AltText:"MirandaHouse",
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
            Title: "Union Public Service Commission(UPSC) Adv 02 for various jobs",
            ApplicationEndDt: "12/02/2015",
            DetailedNotification: "http://upsc.gov.in/recruitment/advt/2015/Advt%202%20of%202015.pdf",
            GoToSite: "http://upsconline.nic.in/ora/VacancyNoticePub.php",
            ApplicationFee: "Refer Advertisement",
            PublishedOn: "24/01/2015",
			Age: "Refer Advertisement",
			Logo:"upsc.jpg",
			AltText:"UPSC",
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
            Title: "Union Public Service Commission(UPSC) Adv 02 for various jobs",
            ApplicationEndDt: "09/02/2015",
            DetailedNotification: "http://www.ihbt.res.in/recruit/Advt13_2014.pdf",
            GoToSite: "http://www.ihbt.res.in/recruit/recruitNotice.php",
            ApplicationFee: "100",
            PublishedOn: "2014",
			Age: "Refer Advertisement",
			Logo:"upsc.jpg",
			AltText:"UPSC",
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