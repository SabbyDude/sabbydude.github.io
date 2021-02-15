export default class DataService {
    _data = {
        projectRepo: "https://github.com/SabbyDude/portfolio",
        react95Repo: "https://github.com/React95/React95",
        items: [
            {
                id: 'about',
                name: 'About.txt',
                icon: 'info_bubble',
                content: {
                    paragraphs: [
                        "Hi! I am a student at Amity University, Rajasthan, currently pursuing a Bachelor's degree in Computer Application at AUR, and I'm really eager to learn new things and meet new people. I'm learning coding and writing fiction, and I've tried animation and video editing as well.",
                        "I grew up in love with two things, technology and stories, on a ground level, these two things are different from each other, however there are two traits they share, and they 're at the soul of these two things, Imagination and Creativity. Without them, people can't do anything in these two fields, and that's what I want to improve in myself, Imagination and Creativity.",
                        "The major application I've been using is C, Python, and I'm also trained with Blender and Wondershare Filmora as well. But recently, my interest in Web Development is growing and I'm learning more about it, and I'm also writing stories and planning on building a PC soon and get into Data Structure and Algorithms.",
                        "I'm currently working on a game, 'Labyrinth of Breughel', an 8-bit text based, choose your own adventure game with a music to keep you hooked, a demo for the game is available at 'Projects.txt'."
                    ]
                }
            },
            {
                id: 'resume',
                name: 'Resume.txt',
                icon: 'notepad_2',
                content: {
                    resumeLink:"https://drive.google.com/file/d/1uEOQN-EEEXAIskxU2S0McK2xwBqM3JRP/view?usp=sharing",
                    workExperience: [
                        {
                            jobTitle: "Bussiness Partner",
                            company: "Shakti Infotech",
                            location: "Agra",
                            period: "JULY 2020 – SEP 2020",
                            accomplishments: [
                                "I helped my father as a bussiness partner for 2 moths",
                                "I interacted with the employees and managed the company during my time before beginning college"
                            ]
                        }
                    ],
                    education: [
                        
                        {
                            credit: "Bachelor in Computer Application",
                            place: "Amity University,Rajasthan",
                            
                            period: "SEP 2020 – PRESENT"
                        }
                    ]
                }
            },
            {
                id: "projects",
                name: "Projects.txt",
                icon: "flying_through_space_100",
                content: {
                    projects:[
                        {
                            title:"Labyrinth of Breughel Demo",
                            description:"It is an 8-bit text based choose your own adventure game, inspired heavily from the book 'Cave of Time'.",
                            myRole: "As of now,everything in the game is done by me and planning to complete this with assisstance from a group",
                            techStack:"HTML5, Twine 2",
                            url:"http://sabbydude.github.io/lob"
                        },
                    ]                    
                }
            },
            {
                id: 'skills',
                name: 'Skills.txt',
                icon: 'progman_11',
                content: {
                    hard: [
                        {
                            name: "C",
                            progress: 95
                        },
                        {
                            name: "Python",
                            progress: 88
                        },
                        {
                            name: "Twine",
                            progress: 100
                        },
                        {
                            name: "Blender",
                            progress: 80
                        },
                        {
                            name: "Wondershare Filmora",
                            progress: 100
                        },
                        {
                            name: "Story Writing",
                            progress: 99
                        },
                        {
                            name: "HTML5",
                            progress: 50
                        },
                        {
                            name: "2D Drawing",
                            progress: 70
                        }
                    ],
                    soft: "Analytical thinking, Teamwork, Creative, Problem solving, Logic Building, Entrepreneurship"
                }
            },
            {
                id: 'contact',
                name: 'Contact.txt',
                icon: 'inetcfg_2301',
                content: {
                    emailText: "If you want to hire me or invite to a project, just email me on ",
                    email: "incsabbydude@gmail.com",
                    socialText: "Or you can reach me out through social media:",
                    social: [
                        {
                            name: "FaLinkedin",
                            link: "https://www.linkedin.com/in/sarthak-bansal-bb5675198/"
                        },
                        {
                            name: "FaGithub",
                            link: "https://github.com/SabbyDude"
                        }
                    ]
                }
            }    
        ]
    }

    getItems() {
        return this._data.items.map(({ id, name, icon }) => ({ id, name, icon }));
    }

    getItem(id) {
        return this._data.items.find(x => x.id === id);
    }

    getProjectInfo() {
        return {
            projectRepo: this._data.projectRepo,
            react95Repo: this._data.react95Repo
        };
    }
}