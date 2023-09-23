import {
    faMoneyBillTrendUp,
    faHotel,
    faBasketball,
    faCampground,
} from "@fortawesome/free-solid-svg-icons";

const projects_list = [
    {
        id: 5,
        logo: faBasketball,
        text: "Designer Portfolio Landing Page",
        date_range: "AUG 31, 2023 - SEP 10, 2023",
        built_with: [
            "JavaScript"
        ],
        learnt: [
            "Building a simple Landing Page site without any framework"
        ],
        summary: [
            "This is a landing page site that I worked on for a friend who is a Graphic Designer. I also invited another novice front end developer to work on it with me as an opportunity for her to practice. He requested a simple landing page website so I decided that this would be a good opportunity to work on a project with only HTML/CSS and JavaScript. "
        ],
        demoURL: "https://lk-01-sigma.vercel.app/",
        sourceURL: "https://github.com/yanling-99/LK_01",
    },
    {
        id: 4,
        logo: faBasketball,
        text: "RGA Basketball Tracker (desktop/ipad)",
        date_range: "May 24, 2023 - Jun 10, 2023",
        built_with: [
            "React.js",
            "Redux",
            "React-Bootstrap",
            "Node.js",
            "Express.js",
            "MongoDB",
        ],
        learnt: [
            "How to use Redux",
            "How to use useEffect to re-render data on page directly without refreshing",
            "How to create UI designs on Figma",
            "How to use useParams",
            "How to work with spreader syntax including ones that are deeply nested",
            "How to write a code with multiple layers of .map() to display more complex data on a table",
            "How to find/edit/insert data on MongoDB",
            "How to upload both frontend and backend server onto free webhosting service such as netlify and render.com",
        ],
        summary: [
            "RGA Basketball Tracker is a site that helps amateur league court-side assistant record player stats on the spot instead of using old-school style of jotting everything down on paper. Data being tracked includes player scores, assist, fouls, blocks, steals, etc",
            "This is the first project that I created that wasn't just another landing page without any real functional purpose to it. It was initially inspired by a friend who helps keep track of player stats in weekend basketball leagues. I also use MongoDB as database so users can add their own team and players information on the site. All the games that are recorded will also be saved on the database and the site has a feature that allows users to view historical game data.",
        ],
        imageURL: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        demoURL: "https://rga-v210.netlify.app/",
        sourceURL: "https://github.com/ofins/RGA2.0",
    },
    {
        id: 3,
        logo: faHotel,
        text: "Bed & Board",
        date_range: "Jun 17, 2023 - Jun 23, 2023",
        built_with: ["React.js", "Redux"],
        learnt: [
            "How to make animation sliding carousel using CSS",
            "how to use Link and useLocation in React-Router to pass state to other components in React",
            "how to create checkbox for user to filter a list of item with different types of properties",
        ],
        summary: [
            "Bed & Board is a website that simulates a simple hotel booking site where it takes users from browsing through hotels to picking rooms and eventually making reservation.",
            "While coding this site, I put more emphasis on the UI design rather than having a more complex and functional site. Bed & Board is mobile-responsive and I also included a pseudo login system where user can create their own username and password and using that same one to login to the site. ",
        ],
        imageURL: ["1", "2"],
        demoURL: "https://bedandboard-v1.netlify.app/",
        sourceURL: "https://github.com/ofins/bed-and-board",
    },

    {
        id: 2,
        logo: faCampground,
        text: "RT Camp",
        date_range: "May 14, 2023 - May 20, 2023",
        built_with: ["React.js"],
        learnt: ["How to make scrolling animation in React", "How to toggle Darkmode theme",],
        summary: [
            "RT Camp is a one-page landing page created using React and emphasize on scrolling animation such has fade-in/out, flips, and zoom effects. Dark mode option is also included.",
            "This landing page is one of the first complete site I create after becoming more familiar with React. I wanted to give a more exciting user experience so I added scrolling animation for the entire page and also added an option for dark mode.",
        ],
        imageURL: ["1", "2"],
        demoURL: "https://rtcamp.netlify.app/",
        sourceURL: "https://github.com/ofins/landing-pages-portfolio/tree/main/rt_camp",
    },
    {

        id: 1,
        logo: faMoneyBillTrendUp,
        text: "TraderREACT",
        date_range: "Jun 27, 2023 - present",
        built_with: [
            "React.js",
            "Redux",
            "React-Router",
            "Node.js",
            "Express.js",
            "MongoDB",
        ],
        learnt: [
            "How to use .fetch() to get API",
            "How to map objects with Object.entries method",
            "How to find and modify data nested deep within JSON object in MongoDB",
        ],
        summary: [
            "TraderREACT is a stock/forex/crypto trading journal designed to help users easily keep track of their trades and use features built within the site to help analyze their past trading strategies.",
            "This project is by far the most complex one I will be designing from beginning to the end.There are more organization of data involved and where I had to take time to think about how to structure my data on MongoDB so that it can easily be utilized whenever necessary.",
        ],
        imageURL: ["1", "2"],
        demoURL: "coming soon",
        sourceURL: "coming soon",
    },
];

export default projects_list;
