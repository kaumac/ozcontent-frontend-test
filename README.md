# OZ Content: Front-end test
Repository for the OZ Content Front-end Test

## 0. Context

### What is your favorite website and why?
I really like Mashable, it gives me a good mix of quality articles about technology, politics, entertainment and business. 
### What is your favorite product in real life and why?
Probably my Moto X as it really helps me keep organized and productive (I know, sometimes it also makes me unproductive).
### What programmers or scientist do you admire and why?
Martin Fowler and TJ Holowaychuk are two of my favorite. TJ makes huge contributions to the front-end development community and was a key contributor to NodeJS. Martin Fowler have great books and talks about both code and workflow improvements.
### What is your favorite startup and why?
AirBnb is my absolute favorite, not only they have a great business & product, they also have a great ideology. I've met a lot of people from all around the world because of AirBnb and it also helps me save some money and not feeling like a complete stranger in a new place.
### What are your hobbies?
I really love to travel, but when I don't have time or money to travel I like to surf, skate and some occasional hikes. 
### What are your favorite movies and books?
My favorite movies are the classics: Star Wars (both trilogies), Matrix, Lord of The Rings, etc. I'm not really a book reader myself, I read mostly tech books like "Refactoring", "Pragmatic Programmer", "Rework", etc. But one drama book that I enjoyed was "The Book Thief".
### What is your daily job routine?
Daily standup meetings around 11 and 2 weeks sprints with sprint reviews in the end. I sometimes work with pair programming and code reviews by the team per feature.
### What tools do you like? Languages, IDE's, Cloud Provider...
Right now I'm working with Sublime Text 3 (tried Atom, Brackets, etc, but ST3 excels in recursive tasks like "find and replace" in a project), my favorite languages are Javascript and Ruby, but mostly JS. Heroku is my go to PAAS provider, even though its more expensive, I believe the time that it saves is worth the trade-off.
### What are your favorite repos on Github and why?
I always check Ionic, React and React Native repos on GitHub. I really believe that there can be a better approach to mobile development, in a more lean way where modules can be shared, and I believe these repo's/projects have the potential to change this.
### What are your favorite websites or blogs to find solutions and why?
To check about a Javascript method that I'm unsure about I always check MDN (Mozilla Developer Network), and for other problems Google and Stackoverflow usually do the trick. Also, there's a brazilian blog called Loop Infinito (Infite Loop) and they write articles and create experiments about beta features and specs from javascript, html and css, pretty cool blog.
### What is the most difficult programming question you encounteredin the past?
I was asked to decrease load time on GetNinjas landing page to test if it would help on conversion rates.
### Did you solve it? Where did you find the solution? How much timedid you spend on it?
Yes, I managed to reduce the load time on the page from 9 seconds to around 4 seconds and improved the conversion rate in around 10%. I had to research a lot about asset optimization, reestructure a lot of the Sprites on the site and tweak the assets build processs. BrowserDiet.com also helped me a lot.
### How you define yourself: A Hacker? A Computer Scientist? A Software Engineer? A Systems Engineer?
I'd say I'm a software engineer, because I like to craft and improve scalable solutions.
### What do you think is the main difference in those definitions?
That's a hard question, but I believe a Hacker is someone that gets around tricky problems to achieve a solution fast, Engineers build structure and scalable solutions, thinking about how easy it will be for others to maintain that solution and Scientists are more focused on theoretical issues and data management.
### Do you participate in local or international events? hackathons? Won any prizes?
I always participate in local tech events and meetups. I did attend a few local hackathons, almost got a prize at the YouTube Dev Hackathon in São Paulo with CodersTV, but in the end we were disqualified because we had started the project prior to the hackathon.
### Do you contribute to your community? (i.e. open source code, teaching, social projects, civics...etc)
Yes, I organized a few front-end meetups in São Paulo and Florianópolis and I used to have a blog to share my learnings and I started to write some articles about lean stacks, but unfortunately I haven't been having the time to write in the last year.

## 1. Your projects
### Describe an interesting project you worked in the past.
99Hotels was a real-time virtual receptionist for hotels. You could check-in and check-out through the app, order room service and chat with the front-desk, all in real-time.
### What stack did you use?
We used Firebase as a back-end as a service along with NodeJS for more complex tasks. In the front-end we used AngularJS, GulpJS, Cordova, Ionic and SASS+Bourbon.

### Describe the composition and attitude of your team. (if you had one)
We had a Front-end developer (me), a UI/UX designer and a sales rep. We were very focused on data and feedback from customers and we tried to build everything, from features to design, based on a feedback from a customer.

### How long did you work on it?
For about 9 months.

### What software engineering methodologies did you use (and they used)?
We were a very small team and not all of us were working full time, so we didn't feel the need for a complete methodology on this project, but we did use a Kanban and had weekly sprints.

### Define a measure of success for a software engineering project.
I believe that a successful engineering project should be able to stick to a roadmap while still quality and scalability.

### Define errors in your job routine at the beginning of your career and how you fixed those?
At the beginning of my career I believed that my job as a front-end was to just turn a PSD into code. After working with some great developers I learned that my job was also to care for the user experience and acessibility, and most all, to care for the readability and scalability of the client-side code.

## 2. Perform an evaluation on the website http://ozcontent.com
### What do you like/dislike about it?
It has an intuitive navigation, it's easy to find the information I'm looking for, but personally I think the design needs some polishing.

### Provide three suggestions to improve it?
On the front-end: There's a lot of inline code on the html, maybe create some classes instead? Also I'd suggest using ".svg" or font-face over ".png" so that the icons arent distoreted/pixalated on Retina or high density displays.
On the design: Some more padding between blocks and a better separation of sections would make a great improvement on the page I believe. I'd also try to make the font-size slightly smaller and change the background or the color on the call-to-action buttons (dark yellow and black don't make a lot of contrast). Of course I haven't done any research on this and I may be biased, so I'd do some A/B testing before making any of these changes.

## 3. Register and Create an account in http://app.ozcontent.com
### What would you say is the purpose of the product?
Just by looking at the dashboard, without reading about the product and with no knowledge of the industry, I'd assume its a content inspiration tool.
### What do you like/dislike about it?
The dashboard is simple and intuitive to a point, but it'd be cool to have an onboarding proccess helping me step by step to get started. I only found the "Product Tour" link later, maybe it could show up automatically on the first access (onboarding) with an option to skip it?
### What do you suggest to improve the user experience?
I believe that call to actions that are more clear to the user would help improve the UX. For instance on the list with the cards to select the subject, instead of clicking on it to show duplicated content on a darker background and then clicking again to select the subject, perhaps it would be better to just show a button with "Select subject" or "Select theme" on hover.
### (optional but very important) If you can, prototype or mockup a solution for it. (push your code into a public repo, produce a git conflict, resolve it and push back in github)
Check the folder "solution_mockup" for the mockup and https://github.com/kaumac/ozcontent-frontend-test/commits/master for the git conflict.
### Write an efficient program that removes stopwords from a given text using the stopword list included here. Why is your solution is efficient?
Check the folder "breakword"

## 4. Onboarding
### If you join our team, what stack do you want to use and why?
ST3 (I'm more productive with it), 
### What practices do you like in your team? TDD, Agile, ...etc?
I really like Scrum (not by the book though) with 2 week sprints and sprint review, TDD, CI/CD, pair-programming and code review. But it really depends on the size of the team and stage of the company, I know not all of this is practicable in early stages.
### What time do you feel efficient to work (day, night)?
I'm used to working during the day, but I'm most efficint during the night, probably because there's less interruptions.
### Describe an optimal environment to program seamless and efficiently.
In my experience a smaller office without a lot of interruptions from other teams and where the sprint or the tasks and features are thoroughly discussed is the one where I'm most efficient.
### What job routine has been effective for you in the past? (time schedules, code reviews...etc)
### Do you prefer large or small projects?
### What do you want to learn in the next 6 and next 12 months? (technology, theory and hobbies)

### What elements do you think are important in the culture of a startup and why?

### Describe diversity in your job environment: if your team is not diverse at the moment, do you think it is important? What our community can do to improve this aspect?