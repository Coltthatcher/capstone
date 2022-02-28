Colton Thatcher 
Project-Name: Workout planner
Project's Purpose or Goal: The goal of this project is to have a space where you can set workout goals and setup a plan for yourself and how you want workouts to go.

List the absolute minimum features the project requires to meet this purpose or goal:

Minimum features.
Users will be able to add new workout goals to a personalized plan
there will be a number of workouts provided with pre coded data users can choose from and add to a workout plan page.
My MVP goal is to only keep on the data till the browser is reloaded. So there will be a set number of workouts hardcoded into the page. my stretch goals will include adding a database with firebase.

What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and your language) will you use to create this MVP? List them all here. Be specific.

Jsx, javaScript, React, 
I wish to use the soundcloud API also so users can add certain music to the workout plan. I think that will be more of stretch goal than MVP though.




If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here: Be specific.

Soundcloud API so users can add music to plans.
Possibly authentication so users can have accounts
I think pictures for workouts wont be a problem, but possibly adding videos to the site (I have absolutely no idea how to do that so we will see)

What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?
Again Soundcloud API requires an API
I haven't dabbled to far into react besides what is taught in the lessons. 
firebase
I've been looking into firebase quite a bit and I think implanting that will make the product able to use full CRUD which is now my stretch goal. I think if I can get the main goal up and running. I can mess around with adding a database so user can store information and possibly come back to where ever the site is hosted for them. So it can actually have some real world use.

Is there anything else you'd like your instructor to know?
Im excited to have creative control over something! I think a lot of the stuff i need to do is going to make more sense to me as I start implementing them.

____________________________________________________________________________________________________________________________

NOTES FOR CAPSTONE STUDY AND PURPOSE.



Function components are literally functions that returns a React element. They can't store or alter state. We will mostly write function components.

Class components are classes that extend React's Component class. They must always include a render() method that will return a React element. They are used when we need state.

Nesting components is a big part of developing with React. Components can be parents, siblings, children or any combination thereof.

Small, modular components are the way to go. This makes our code easier to understand and allows us to separate presentational concerns.


NOTES on State:
state is anything that will be stored and changed.
adding new workouts is a change of state.

State can be changed props can not (at least components can not change the its props)

only define components as classes if it 100% requires state.

Local state will live inside a single component so only in the component that is using it.

Workout Control will be parent component of everything
it will need a class component. 




______________________________________________________________________________________________________________________

CAPSTONE LOG (for Research Recording )

Starting at 3:14-3:25 educating myself on state more, to further plan how my project will interact component wise.
start reviewing these lessons.
https://www.learnhowtoprogram.com/react/react-fundamentals/introduction-to-state
https://www.learnhowtoprogram.com/react/react-fundamentals/planning-our-application-part-2


started to plan out authentication with react took a break in between started watching video around 5:30 took a break after 5:50 started watching again around 9pm total amount of work 1 and half hour ish.
watched this video 

https://video.search.yahoo.com/search/video;_ylt=Awr9ImFOmBFiA6oAGHBXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=planning+out+your+react+website&fr2=piv-web&type=E211US714G0&fr=mcafee#id=5&vid=a62f4df2c49e702873a02e4f27fdc67a&action=view

this video from starting seems very insightful, going to watch through. (come back to this link for study)
https://www.youtube.com/watch?v=LlvBzyy-558
React Hooks Course - All React Hooks Explained
started 8:50 - 10:00

doing extra study to see if I wanna end implementing other features and comparing that to if I will have enough time.


Redux research
Understanding Redux and How it is Used in React Applications
https://www.youtube.com/watch?v=Eop3E4anpL0
started 7:21 finished with some breaks 8:32

React database research
Thinking at this point i will need to implement CRUD and in order to do so firebase will be the best way of accomplishing that. started at 11:40 finished 12:21
https://www.youtube.com/watch?v=jCY6DH8F4oc

Watching a video weather authentication is something i want to include. started 12:26 finished 12:50
https://www.youtube.com/watch?v=9bXhf_TELP4&t=6s

starting playlist, will need to review as i add firebase to website started 3:50 paused 4:15 resumed 5:20
https://www.youtube.com/playlist?list=PL4cUxeGkcC9jERUGvbudErNCeSZHWUVlb

5:20 started part four
https://www.youtube.com/watch?v=2yNyiW_41H8&list=PL4cUxeGkcC9jERUGvbudErNCeSZHWUVlb&index=4
finished 5:32

part five started 5:41 finished 5:55
https://www.youtube.com/watch?v=s1frrNxq4js&list=PL4cUxeGkcC9jERUGvbudErNCeSZHWUVlb&index=5

part six and seven started 5:56 finished 6:10
https://www.youtube.com/watch?v=rfQ2F8kQEUg&list=PL4cUxeGkcC9jERUGvbudErNCeSZHWUVlb&index=6
part seven
https://www.youtube.com/watch?v=gEaY2GZMino&list=PL4cUxeGkcC9jERUGvbudErNCeSZHWUVlb&index=7

React API research (LOOK INTO THIS BEFORE 2/25/22)

started at 11:00 tutorial for exactly what I'm looking for. Implementing sound cloud API.finished 11:28. (COME BACK TO THIS VIDEO WHEN IMPLEMENTING)
https://www.youtube.com/watch?v=fVcz-1rVQcs

___________________________________________________________
                    TODOLIST

1) Get Base site running.
2) Have seeded workout already so users can choose a list. without having to create any work outs.
3)  Have crud ability so users can add new workouts.
4)  Add edit ability to workouts.
5) Add delete ability to workouts.
6) Create a personal plan section.
7)Users can add a personalized list of workouts in a workout plan section.
8)Users can access the soundcloud API to add mixes to their personal workout page.
9) figure out what the heck is going on with using the soundcloud API
10) have the music section be interwoven with the personal page. 
11) styling (not sure on when i should try implementing)
