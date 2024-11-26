import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

let users = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Admin",
    email: "alice.johnson@example.com",
    status: "Active",
    lastLogin: "2024-01-10T14:23:00Z",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxzJjzxPGbFTU8NQjZxGxRSltwfSvRd2x9NxUr5XG872AL99VfW8z4poKC8DevT7gE3k&usqp=CAU",
    bio: {
      age: 30,
      phone: "+1234567890",
      dateOfJoining: "2020-01-01",
    },
    address: {
      state: "California",
      pincode: "90001",
      area: "Downtown LA",
      buildingHouse: "Apt 101",
    },
    qualifications: [
      "Bachelor's in Computer Science",
      "Certified Project Manager",
    ],
    skills: ["Project Management", "Team Leadership", "Agile Methodologies"],
    experience: [
      "3 years as Product Manager at XYZ Corp",
      "2 years as Team Lead at DEF Inc",
    ],
    languagesSpoken: ["English", "Spanish"],
    hobbies: ["Hiking", "Reading", "Cooking"],
  },
  {
    id: 2,
    name: "Michael Smith",
    role: "Manager",
    email: "michael.smith@example.com",
    status: "Active",
    lastLogin: "2024-01-09T09:15:00Z",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6zq21NVsOxQs4PL4rJU30aiCXEkVrwB-Y19RYowqhUGklgM3SNfj6e-L1UU3mfuyByM&usqp=CAU",
    bio: {
      age: 35,
      phone: "+1234567891",
      dateOfJoining: "2019-05-15",
    },
    address: {
      state: "New York",
      pincode: "10001",
      area: "Manhattan",
      buildingHouse: "Apt 202",
    },
    qualifications: ["MBA from ABC University"],
    skills: ["Leadership", "Strategic Planning", "Financial Analysis"],
    experience: [
      "5 years as Operations Manager at GHI Corp",
      "3 years as Business Analyst at JKL Inc",
    ],
    languagesSpoken: ["English", "French"],
    hobbies: ["Traveling", "Photography"],
  },
  {
    id: 3,
    name: "Sanjeev Kapoor",
    role: "Chef",
    email: "sanjeev.kapoor@example.com",
    status: "Active",
    lastLogin: "2024-01-08T11:45:00Z",
    image:
      "https://img.freepik.com/premium-vector/chef-profile-silhouette_951778-32903.jpg",
    bio: {
      age: 45,
      phone: "+1234567892",
      dateOfJoining: "2017-02-25",
    },
    address: {
      state: "Texas",
      pincode: "75001",
      area: "Downtown Dallas",
      buildingHouse: "House No. 123",
    },
    qualifications: [
      "Culinary Arts Degree from ABC University",
      "Certified Pastry Chef",
    ],
    skills: [
      "Advanced baking techniques",
      "Menu planning and development",
      "Food safety and sanitation",
    ],
    experience: [
      "5 years as Sous Chef at XYZ Restaurant",
      "2 years as Pastry Chef at DEF Bakery",
    ],
    languagesSpoken: ["English", "Hindi"],
    hobbies: ["Traveling", "Reading culinary books", "Painting"],
  },
  {
    id: 4,
    name: "Liam Davis",
    role: "Waiter",
    email: "liam.davis@example.com",
    status: "Active",
    lastLogin: "2024-01-10T12:30:00Z",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4H_KyQH7TFptZ2dmO9ufQHL2vq0Uhh1Fhxg&s",
    bio: {
      age: 28,
      phone: "+1234567893",
      dateOfJoining: "2018-08-01",
    },
    address: {
      state: "Florida",
      pincode: "33101",
      area: "Miami Beach",
      buildingHouse: "Apt 305",
    },
    qualifications: ["Hospitality Management Degree from XYZ University"],
    skills: ["Customer service", "Order accuracy", "Conflict resolution"],
    experience: [
      "3 years as Waiter at ABC Restaurant",
      "2 years as Barista at DEF Cafe",
    ],
    languagesSpoken: ["English", "Portuguese"],
    hobbies: ["Surfing", "Cycling"],
  },
  {
    id: 5,
    name: "Emma Wilson",
    role: "Cashier",
    email: "emma.wilson@example.com",
    status: "Active",
    lastLogin: "2024-01-10T08:20:00Z",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ0OTAqC4xVoXNE8eLYie4DDjlLgZZrwj2cB64su1Z9f5YuarNKHYM8WoOrdFxTqoYjVE&usqp=CAU",
    bio: {
      age: 32,
      phone: "+1234567894",
      dateOfJoining: "2016-03-10",
    },
    address: {
      state: "Nevada",
      pincode: "89001",
      area: "Las Vegas",
      buildingHouse: "House No. 456",
    },
    qualifications: ["Accounting Degree from ABC University"],
    skills: ["Cash handling", "Customer service", "Data entry"],
    experience: [
      "4 years as Cashier at XYZ Store",
      "3 years as Accounts Assistant at DEF Corp",
    ],
    languagesSpoken: ["English", "German"],
    hobbies: ["Gaming", "Cooking"],
  },
  {
    id: 6,
    name: "Oliver Martinez",
    role: "Waiter",
    email: "oliver.martinez@example.com",
    status: "Inactive",
    lastLogin: "2023-12-20T15:00:00Z",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4H_KyQH7TFptZ2dmO9ufQHL2vq0Uhh1Fhxg&s",
    bio: {
      age: 29,
      phone: "+1234567895",
      dateOfJoining: "2019-11-11",
    },
    address: {
      state: "Arizona",
      pincode: "85001",
      area: "Phoenix",
      buildingHouse: "Apt 707",
    },
    qualifications: ["Hospitality Management Degree from XYZ University"],
    skills: ["Customer service", "Team collaboration", "Order accuracy"],
    experience: [
      "2 years as Waiter at GHI Restaurant",
      "1 year as Host at JKL Lounge",
    ],
    languagesSpoken: ["English", "Spanish"],
    hobbies: ["Photography", "Traveling"],
  },
];

// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST a new user
app.post("/users", (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update a user
app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id, 10);
  let userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex > -1) {
    users[userIndex] = { id: userId, ...req.body };
    res.json(users[userIndex]);
  } else {
    res.status(404).send("User not found");
  }
});

// DELETE a user
app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id, 10);
  users = users.filter((user) => user.id !== userId);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
