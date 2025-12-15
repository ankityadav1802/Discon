const express = require('express');
const app = express();
const port = 3000;
const ejsMate = require("ejs-mate");

const path = require("path");  
const { v4: uuidv4 } = require('uuid');

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.engine("ejs", ejsMate);
app.set("view engine","ejs");                               
app.set("views", path.join(__dirname, "views")) 

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const moment = require("moment");
app.locals.moment = moment;

let infos = [
  {
    id: uuidv4(),
    publisher: "John Doe",
    question: "Will AI replace most human jobs?",
    description: "Artificial intelligence is rapidly developing. Many people fear that machines will take over human roles.",
    createdAt: new Date(),
    favorResist: {
      favor: [
        { name: "Amit", view: "AI can easily automate repetitive tasks and reduce the need for human labor." },
        { name: "Sara", view: "Many companies will prefer AI because it is faster and more accurate." },
        { name: "Raj", view: "In the future, most desk jobs may disappear due to AI systems." },
        { name: "Neha", view: "Robots and AI can work 24/7 without breaks." },
        { name: "Karan", view: "Businesses will adopt AI to cut costs and increase efficiency." }
      ],
      resist: [
        { name: "Priya", view: "AI will help humans, not replace them. New jobs will be created." },
        { name: "Rahul", view: "Creative and emotional jobs cannot be replaced by machines." },
        { name: "Anjali", view: "Humans will always be needed to control AI systems." },
        { name: "Vikram", view: "Technology has always created more jobs than it destroyed." },
        { name: "Meena", view: "AI lacks true intelligence and human understanding." }
      ]
    }
  },

  {
    id: uuidv4(),
    publisher: "Amit Sharma",
    question: "Is remote work the future of offices?",
    description: "Work-from-home culture has increased after the pandemic.",
    createdAt: new Date(),
    favorResist: {
      favor: [
        { name: "Rohit", view: "Remote work saves travel time and increases productivity." },
        { name: "Simran", view: "People can balance personal and professional life better." },
        { name: "Kunal", view: "Companies can save money on office spaces." },
        { name: "Divya", view: "Work from home reduces pollution and traffic." },
        { name: "Arman", view: "Employees feel more comfortable working from home." }
      ],
      resist: [
        { name: "Pooja", view: "Office work improves teamwork and collaboration." },
        { name: "Suresh", view: "Not everyone has a good home environment for work." },
        { name: "Aakash", view: "Face-to-face interaction is important for creativity." },
        { name: "Nikhil", view: "Work-life balance becomes worse when working from home." },
        { name: "Ritu", view: "Managers find it difficult to monitor remote workers." }
      ]
    }
  },

  {
    id: uuidv4(),
    publisher: "Sara Khan",
    question: "Can electric vehicles completely replace petrol cars?",
    description: "Electric vehicles are becoming more popular worldwide.",
    createdAt: new Date(),
    favorResist: {
      favor: [
        { name: "Aditya", view: "Electric cars are eco-friendly and reduce pollution." },
        { name: "Neel", view: "Rising fuel prices make EVs a better option." },
        { name: "Isha", view: "Government support will boost EV adoption." },
        { name: "Ravi", view: "EV technology is improving very fast." },
        { name: "Tara", view: "Charging infrastructure will improve in the future." }
      ],
      resist: [
        { name: "Manoj", view: "Charging stations are not available everywhere." },
        { name: "Deepak", view: "Battery disposal can harm the environment." },
        { name: "Sunita", view: "Electric cars are too expensive for most people." },
        { name: "Vijay", view: "Long-distance travel is difficult with EVs." },
        { name: "Kapil", view: "Petrol cars are still more powerful and reliable." }
      ]
    }
  },

  {
    id: uuidv4(),
    publisher: "Rahul Verma",
    question: "Is online education better than offline education?",
    description: "Education is rapidly shifting towards digital platforms.",
    createdAt: new Date(),
    favorResist: {
      favor: [
        { name: "Sneha", view: "Online education gives access to global resources." },
        { name: "Arjun", view: "Students can learn at their own pace." },
        { name: "Mehul", view: "It is more affordable than traditional education." },
        { name: "Priti", view: "Learning from home feels more comfortable." },
        { name: "Yusuf", view: "Recorded lectures help students revise easily." }
      ],
      resist: [
        { name: "Ankit", view: "Offline classes build better discipline." },
        { name: "Ramesh", view: "Students get distracted easily online." },
        { name: "Kajal", view: "Practical subjects need physical presence." },
        { name: "Mahesh", view: "Internet access is not available to everyone." },
        { name: "Tina", view: "Teacher-student interaction is better offline." }
      ]
    }
  },

  {
    id: uuidv4(),
    publisher: "Emily Watson",
    question: "Will humans live on Mars in the next 50 years?",
    description: "Space exploration has reached a new level.",
    createdAt: new Date(),
    favorResist: {
      favor: [
        { name: "Elon", view: "Space technology is advancing fast enough." },
        { name: "Aryan", view: "Mars missions are already in planning stages." },
        { name: "Nisha", view: "Mars can become humanity’s backup planet." },
        { name: "Kriti", view: "Private companies are investing heavily in space tech." },
        { name: "Dev", view: "Mars colonization can solve future population problems." }
      ],
      resist: [
        { name: "Rohini", view: "Mars has very harsh and deadly conditions." },
        { name: "Sanjay", view: "The cost of Mars missions is extremely high." },
        { name: "Anil", view: "Humans are not physically ready for Mars life." },
        { name: "Poonam", view: "We should fix Earth before thinking about Mars." },
        { name: "Keshav", view: "Long-term survival on Mars is unrealistic." }
      ]
    }
  },
  {
    id: uuidv4(),
    publisher: "John Doe",
    question: "Will AI replace most human jobs?",
    description: "Artificial intelligence is rapidly developing. Many people fear that machines will take over human roles.",
    createdAt: new Date(),
    favorResist: {
      favor: [
        { name: "Amit", view: "AI can easily automate repetitive tasks and reduce the need for human labor." },
        { name: "Sara", view: "Many companies will prefer AI because it is faster and more accurate." },
        { name: "Raj", view: "In the future, most desk jobs may disappear due to AI systems." },
        { name: "Neha", view: "Robots and AI can work 24/7 without breaks, which makes humans replaceable." },
        { name: "Karan", view: "Businesses will adopt AI to cut costs and increase efficiency." }
      ],
      resist: [
        { name: "Priya", view: "AI will help humans, not replace them. New jobs will be created." },
        { name: "Rahul", view: "Creative and emotional jobs cannot be replaced by machines." },
        { name: "Anjali", view: "Humans will always be needed to control and manage AI." },
        { name: "Vikram", view: "Technology has always created more jobs than it destroyed." },
        { name: "Meena", view: "AI lacks true intelligence and human understanding." }
      ]
    }
  },

  {
    id: uuidv4(),
    publisher: "Amit Sharma",
    question: "Is remote work the future of offices?",
    description: "Work-from-home culture has increased after the pandemic.",
    createdAt: new Date(),
    favorResist: {
      favor: [
        { name: "Rohit", view: "Remote work saves travel time and increases productivity." },
        { name: "Simran", view: "People can balance their personal and professional life better." },
        { name: "Kunal", view: "Companies can save money on office spaces." },
        { name: "Divya", view: "Work from home reduces pollution and traffic." },
        { name: "Arman", view: "Employees feel more comfortable working from home." }
      ],
      resist: [
        { name: "Pooja", view: "Office work improves teamwork and communication." },
        { name: "Suresh", view: "Not everyone has a good home environment for work." },
        { name: "Aakash", view: "Face-to-face interaction is important for creativity." },
        { name: "Nikhil", view: "Work-life balance becomes worse when working from home." },
        { name: "Ritu", view: "Managers find it difficult to monitor remote workers." }
      ]
    }
  },

  {
    id: uuidv4(),
    publisher: "Sara Khan",
    question: "Can electric vehicles completely replace petrol cars?",
    description: "Electric vehicles are becoming more popular worldwide.",
    createdAt: new Date(),
    favorResist: {
      favor: [
        { name: "Aditya", view: "Electric cars are eco-friendly and reduce pollution." },
        { name: "Neel", view: "Fuel prices keep rising, so EVs are better." },
        { name: "Isha", view: "Government support will increase EV adoption." },
        { name: "Ravi", view: "EV technology is improving very fast." },
        { name: "Tara", view: "Charging infrastructure will improve in the future." }
      ],
      resist: [
        { name: "Manoj", view: "Charging stations are not easily available everywhere." },
        { name: "Deepak", view: "Battery disposal can harm the environment." },
        { name: "Sunita", view: "Electric cars are too expensive for middle-class people." },
        { name: "Vijay", view: "Long-distance travel is difficult with EVs." },
        { name: "Kapil", view: "Petrol cars are still more powerful and reliable." }
      ]
    }
  },
  {
  id: uuidv4(),
  publisher: "Arjun Singh",
  question: "Should social media platforms be strictly regulated?",
  description: "With the rise of misinformation and privacy issues, strict control of social platforms is debated.",
  createdAt: new Date(),
  favorResist: {
    favor: [
      { name: "Neha", view: "Regulations can reduce fake news and harmful content." },
      { name: "Ravi", view: "User data privacy can be better protected with strict rules." },
      { name: "Anita", view: "Social platforms should be accountable for their impact." },
      { name: "Vikas", view: "It will create safer online communities." },
      { name: "Suman", view: "Regulation is necessary to protect children online." }
    ],
    resist: [
      { name: "Karan", view: "Too much control will limit freedom of speech." },
      { name: "Pooja", view: "Creative expression will be restricted." },
      { name: "Amit", view: "Innovation may slow down due to heavy regulations." },
      { name: "Rahul", view: "Government control can be misused." },
      { name: "Tina", view: "People should be responsible for their own online behavior." }
    ]
  }
},
{
  id: uuidv4(),
  publisher: "Neha Patel",
  question: "Is nuclear energy the best solution for future power needs?",
  description: "As the world shifts to clean energy, nuclear power remains a controversial option.",
  createdAt: new Date(),
  favorResist: {
    favor: [
      { name: "Rohit", view: "Nuclear energy produces large amounts of electricity." },
      { name: "Kavita", view: "It is a low carbon emission energy source." },
      { name: "Arun", view: "It provides reliable and stable power." },
      { name: "Simran", view: "It reduces dependence on fossil fuels." },
      { name: "Deepak", view: "Nuclear plants help meet high energy demand." }
    ],
    resist: [
      { name: "Anjali", view: "Nuclear accidents can be extremely dangerous." },
      { name: "Vivek", view: "Radioactive waste disposal is a major problem." },
      { name: "Sonia", view: "Renewable energy is safer than nuclear." },
      { name: "Mahesh", view: "Nuclear plants are very expensive to build." },
      { name: "Ritu", view: "Risk to human life is too high." }
    ]
  }
},
{
  id: uuidv4(),
  publisher: "Rohit Verma",
  question: "Should school education focus more on practical skills?",
  description: "There is growing demand to make education more skill-based rather than theory-heavy.",
  createdAt: new Date(),
  favorResist: {
    favor: [
      { name: "Ankit", view: "Practical skills prepare students for real-life situations." },
      { name: "Meena", view: "Skill-based learning improves job readiness." },
      { name: "Rahul", view: "Students learn better by doing rather than memorizing." },
      { name: "Tanya", view: "Hands-on learning increases creativity." },
      { name: "Vijay", view: "Industry needs more skilled workers." }
    ],
    resist: [
      { name: "Sunil", view: "Strong theoretical base is also very important." },
      { name: "Pooja", view: "Not all subjects can be taught in a practical way." },
      { name: "Kiran", view: "Practical learning requires more resources." },
      { name: "Asha", view: "Traditional education system has worked well." },
      { name: "Mohan", view: "Too much practicality may reduce academic depth." }
    ]
  }
},
{
  id: uuidv4(),
  publisher: "Priya Sharma",
  question: "Is space tourism a good idea?",
  description: "Private companies are planning commercial space travel for civilians.",
  createdAt: new Date(),
  favorResist: {
    favor: [
      { name: "Arjun", view: "Space tourism promotes technological advancements." },
      { name: "Neelam", view: "It inspires people to learn about space." },
      { name: "Rakesh", view: "It can create new job opportunities." },
      { name: "Simran", view: "Tourism in space is a great human achievement." },
      { name: "Dev", view: "It will make space more accessible." }
    ],
    resist: [
      { name: "Anita", view: "It is too expensive and only for rich people." },
      { name: "Kunal", view: "Space travel is still very risky." },
      { name: "Ritu", view: "We should solve Earth’s problems first." },
      { name: "Aman", view: "It can increase space pollution." },
      { name: "Sunita", view: "Resources are being wasted." }
    ]
  }
},
{
  id: uuidv4(),
  publisher: "Karan Malhotra",
  question: "Should artificial intelligence be strictly controlled by govt.?",
  description: "There are growing concerns about AI safety and misuse.",
  createdAt: new Date(),
  favorResist: {
    favor: [
      { name: "Rajesh", view: "Government control can prevent misuse of AI." },
      { name: "Sneha", view: "It ensures ethical use of AI technology." },
      { name: "Amit", view: "Strict laws can stop dangerous AI development." },
      { name: "Riya", view: "Public safety should be the priority." },
      { name: "Vivek", view: "AI needs regulation at global level." }
    ],
    resist: [
      { name: "Arnav", view: "Too much control can slow innovation." },
      { name: "Pankaj", view: "Private companies need freedom to develop AI." },
      { name: "Tina", view: "Government may misuse its power." },
      { name: "Sahil", view: "Open development leads to faster progress." },
      { name: "Neeraj", view: "Control should be balanced, not strict." }
    ]
  }
}

];


app.get("/discon", (req, res) => {
  res.render("index", {infos} );
  // console.log("Hello World");
});

app.get("/discon/new", (req, res) => {
  res.render("pages/new");
});

app.post("/discon", (req, res) => {

  let { publisher, question, description } = req.body;
  let id = uuidv4();
  infos.push({
    id,
    publisher,
    question,
    description,
    createdAt: new Date(),
    favorResist: {
      favor: [],
      resist: []
    }
  });
  console.log(req.body);
  res.redirect("/discon");
});

//upate and delete routes
app.patch("/discon/:id", (req,res) => {
  const { id } = req.params;
  const { question, description } = req.body;

  const info = infos.find(p => p.id === id);
  if (!info) return res.status(404).send("Card not found");

  info.question = question;
  info.description = description;

  res.redirect("/discon");
});


//for favor and resit
app.post("/discon/:id/opinion", (req, res) => {
  const { id } = req.params;
  const { name, view, type } = req.body;

  const info = infos.find(p => p.id === id);
  if (!info) return res.status(404).send("Post not found");

  // If both are checked, reject
  if (Array.isArray(type)) {
    return res.send("Please select only one option.");
  }

  if (type === "favor") {
    info.favorResist.favor.push({ name, view });
  } else if (type === "resist") {
    info.favorResist.resist.push({ name, view });
  }

  res.redirect(`/discon/${id}`);
});

//for search
app.get("/discon/search", (req, res) => {
  const query = req.query.q; // get search text
  if (!query) return res.redirect("/discon");
  const info = infos.find(item =>
    item.question.toLowerCase().includes(query.toLowerCase())
  );
  if (!info) {
    return res.redirect("/discon");
  }
  res.redirect(`/discon/${info.id}`);
});


app.get("/discon/:id/edit", (req,res) => {
  const { id } = req.params;
  const info = infos.find(p => p.id === id);

  if (!info) {
    return res.status(404).send("Card not found");
  }

  res.render("pages/edit", { info });
});

//to read page
app.get("/discon/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);

  const info = infos.find((p) => p.id === id);

  if (!info) {
    return res.status(404).send("Post not found");
  }

  res.render("pages/read", { info });
});

//delete
app.delete("/discon/:id",(req,res)=>{
    const {id} = req.params;
    console.log("DELETING ID:", id);
    infos = infos.filter((p)=> id !== p.id);
    res.redirect("/discon");

})


app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});