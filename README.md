# hw8

# A SoundMixer App


## A. Constructing a wireframe

I used the following wireframe for the assignment.
![wireframe](https://dt1930.github.io/connections_labs2022/hw8/wireframe.png?raw=true)

## B. HTML+CSS

The website contains basic html tags, such as h1, p, img, and div. The scripts (for socket and my own) are included in the head. I just created the necessary elements as per my wireframe.I have used a background color of black and images of the drums that also have black color so that they get camouflaged. I have used flex display to the three divisions, namely the left part, middle part (instructions), and the right part. On a smaller viewport, the images get smaller and fit to the screen. I could have changed the layout for a mobile viewport since a significant portion of the space on the bottom of the page gets wasted; however, I couldn’t come up with an ideal layout that displays all the drums at once.

## C. Front-end JS

On the client side, we use ‘connect’ to make the connection to the socket and console log the message that we attempted to connect via sockets. I create all the audio elements of the sounds and store the image elements in an array in the same sequence as the sounds array. Whenever an instrument is clicked, I note its numbering label and emit that information to the server. On receiving the information back from the server, I use it to play the sound on the client side.  


## D. Client-end JS

First, all the necessary dependencies and packages are imported. An express object is defined and stored in an app that is wrapped in http server, and sockets wrap the http server. Then, the server checks for any connection, and on receiving the connection, console logs in (the terminal side) that a new client has joined. Also, if the user disconnects, the server displays a disconnect message in the terminal. The server, on receiving any information about any instrument being clicked, emits that information to all the clients. The overall process is shown in the image below:
![process](https://dt1930.github.io/connections_labs2022/hw8/process.png?raw=true)


## E. Self-evaluation of the final result

I have self-evaluated my final product, the webpage by talking about some of the strengths and weaknesses from my perspective.

      ### 1. Strengths
          a. It looks clean and elegant with a plain and comforting interface. 
          b. It is accessible in terms of navigation and color combinations.
          c. It is organized well semantically.
          
      ### 2. Weaknesses
          a. The mobile version’s layout wastes the bottom space of the webpage.
          b. I am not sure if the font size of the instruments could have been a little bigger.
      
      
## F. Takeaways from the process
  
  1. I have learned how the web works in general.
  2. I have learned how to use sockets so that multiple people can work on the same website.
  
## G. Credits

  1. Professor Mathura Govindarajan 
  2. Mozilla developer references


## H. Link of the final webpage : 
https://marsh-basalt-wound.glitch.me/


