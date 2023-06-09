<h1 align="center">Models</h1>

## Project Model

This should have a backend where users can add things like new projects
The model would have fields for live preview, project media, GitHub link, about project, tools, framework, languages, year, category, name

<br />

## User Model

It would have a user model that would contain a name, about, contact, social links and maybe experience, education, tools frameworks languages and skills, intro text, blog

<br />

## Experience Model

This contains experiences, start and end dates, about, company name

<br />

## Education Model

This would contain things like school, start, end date, degree, field, activities/societies

1. Target fields are necessary and make the either null able or not
2. Build a user interface and landing page
3. Work with authentication and registration react + Django
4. There should be a view where a user can see how the data would look like
5. Should have endpoints to access specific data fields like experience, projects, and contact/user

<br />

```Json
{
    "name": "Esin Shadrach",
    "about": "about me",
    "contact":[numbers, mail],
    "IntoText": "Hi, I'm Shadrach esin stuff",
    "socialLinks":[links to socials],
    "blogLink": ["https://"],
    "experience":[
        {
            "companyName": "krubbs",
            "startDate": 2019,
            "endDate": "present",
            "about": "I did stuff",
            "tools used":["react", "tailwind CSS"],
        },
    ],
    "educations":[
        {
            "name": "The University of Nigeria Nsuka",
            "degree": "degree",
            "startYear":2023,
            "endYear": "present",
            "field": "computer science",
            "societies":["society 1", "society 2"]
        },
    ],
    "tools":[
        "HTML",
        "CSS",
        "Tailwind CSS",
        "javascript",
        "react",
        "flutter",
        "dart",
        "git",
        "Django",
        "firebase"
    ],
    "projects":[
        {
            "name": "project name",
            "aboutProject": "about the project",
            "livePreview": "http://",
            "githubLink": "https://",
            "projectMedia":[project medias],
            "tools":["react", "Django", "python"],
            "year":2023,
            "category": "frontend"
        },
    ]
}
```

<h1 align="center">Views</h1>
1. Landing page
2. Login and register
3. Home/dashboard (view all projects)
4. Edit project
5. Project details view
6. Edit Account / View account
7. Add project

<br />

## 1. Landing

This would contain catchy info about the site and have a login/register

## 2. Login/Register

    -   Register
    
        -   Email
        -   First name
        -   Last name
        -   Password
        -   Profile pic
    
    -   Login
        -   Email
        -   Password

## 3. Home/Dashboard

    -   Basic user information
    -   Projects
    -   Empty fields
    -   Project analysis, like most used languages in percentage and most categories in percentages
    -   How API data would look like

## 4. Edit project
    - This would contain a project detailed view
    - Edit Projects based on fields
    - Fill empty fields
    - Delete Project

## 5. Project detailed view

    - Details about projects including media as a slider or carousel
    - A button at the top to add another project
    - An edit button and a delete button
    - Try integration of github to get "most used languages and repo details here," and after getting languages, add an overflow ellipsis here
       (An edit button might not be needed)

## 6. Edit / view Account

    - Account image at the top, which would have a camera icon at the bottom right to change photo
    
    - Users name with a pencil icon for editing by the end
    
    - Headlines with a pencil icon at end for editing
    
    - About with a pencil icon for editing and should have a text ellipsis or a text fade effect cause about can get pretty long
    
    - A list of socials with an add icon at the end to add a new social and a pencil icon beside each social to edit them
    
    - Experience would be the same as socials
    
    - Education would be the same as socials
    
    - Tools languages, skills, and framework would be the same as socials
    
    - Blog link the same as socials, too

## 7. Add projects

    - Name of project field
    
    - Live preview of project
    
    - Github link
    
    - Languages and tools used, but if you add a github link, "it'd be able to get languages used so all you have to add is tools" - everything in quote would be a help text
    
    - Percentages of languages that make up a project if a github link is found
    
    - Project media like videos and images
    
    - Year created, this can be gotten from github
    
    - Category to categorize projects for easier look up in the home or dashboard

Portfolio Is  a route where users add his/her portfolio

### Design
-nav links
    - Home
    - About
    - Project
    - Doc
    - Portfolio
    
    
    