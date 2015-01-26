var GyaanCheckApp = angular.module('GyaanCheck', []);

GyaanCheckApp.controller('getLeftPanel', function ($scope, $element) {
  $scope.sections = sectionLeft;
});

GyaanCheckApp.controller('getRightPanel', function ($scope, $element) {
    $scope.sections = sectionRight;
});

var sectionLeft = [
        {
            HeadingTheme: "panel panel-success",
            Title: "Recruitment of constables(GD) in CAPFsand rifleman in Assam Rifles 2015",
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