---
title: "Adobe® Flash® CS3: Building an Interactive Game"
weight: 2
---

**O B J E C T I V E S** In this chapter you’ll learn:

■ Advanced ActionScript 3 in Flash CS3.

■ How to build on Flash CS3 skills learned in Chapter 16.

■ The basics of object-oriented programming in Flash CS3.

■ How to create a functional, interactive Flash game.

■ How to make objects move in Flash.

■ How to embed sound and text objects into a Flash movie.

■ How to detect collisions between objects in Flash.

**_Knowledge must come through action._ —Sophocles**

**_It is circumstance and proper timing that give an action its character and make it either good or bad._ —Agesilaus**

**_Life’s but a walking shadow, a poor player that struts and frets his hour upon the stage and then is heard no more: it is a tale told by an idiot, full of sound and fury, signifying nothing._ —William Shakespeare**

**_Come, Watson, come! The game is afoot._ —Sir Arthur Conan Doyle**

**_Cannon to right of them, Cannon to left of them, Cannon in front of them Volley’d and thunder’d._ —Alfred, Lord Tennyson**

**684** Chapter 17 Adobe® Flash® CS3: Building an Interactive Game **O**

**u tl**

**in e**

**17.1 Introduction** While Adobe Flash CS3 is useful for creating short animations, it is also capable of build- ing large, interactive applications. In this chapter, we build a fully functional interactive video game. First, download the Chapter 17 examples from www.deitel.com/books/

iw3htp4. Then, open FullCannon.swf and run the completed game. In the cannon game, the player has a limited amount of time to hit every part of a moving target. Hitting the target increases the remaining time, and missing the target or hitting the blocker decreases it. Some elements of the FullCannon.swf game are not discussed in the body of the chap- ter, but are presented as supplementary exercises. This case study will sharpen the Flash skills you acquired in Chapter 16 and introduce you to more advanced ActionScript. For this case study, we assume that you are comfortable with the material on Flash in Chapter 16. The completed game should run similar to what is shown in Fig. 17.1. Notice how in

**17.1** Introduction **17.2** Object-Oriented Programming **17.3** Objects in Flash **17.4** Cannon Game: Preliminary Instructions and Notes **17.5** Adding a Start Button **17.6** Creating Moving Objects **17.7** Adding the Rotating Cannon **17.8** Adding the Cannonball **17.9** Adding Sound and Text Objects to the Movie

**17.10** Adding the Time Counter **17.11** Detecting a Miss **17.12** Adding Collision Detection **17.13** Finishing the Game **17.14** ActionScript 3.0 Elements Introduced in This Chapter

Summary | Terminology | Self-Review Exercises | Answers to Self-Review Exercises | Exercises

**Fig. 17.1** | Ball fired from the cannon and hitting the target. (Part 1 of 3.)

a)

17.1 Introduction **685**

**Fig. 17.1** | Ball fired from the cannon and hitting the target. (Part 2 of 3.)

b)

Dotted arrows show direction of blocker and target motion

c)

c)

d)

**686** Chapter 17 Adobe® Flash® CS3: Building an Interactive Game

Fig. 17.1(c), before the ball collides with the target, the timer displays 9 seconds on the clock. Once the topmost part of the target is hit, 5 seconds are added onto the clock but the clock displays only 13 seconds in Fig. 17.1(d). This is because one second has already passed in this duration, causing the timer to decrease from 14 to 13.

**17.2 Object-Oriented Programming ActionScript 3.0** is an object-oriented scripting language that closely resembles JavaScript. The knowledge you gained from the JavaScript treatment in Chapters 6–11 will help you understand the ActionScript used in this case study.

An ActionScript class is a collection of characteristics known as **properties** and behav- iors known as **functions**. You can create your own classes or use any of Flash’s predefined classes. A symbol stored in the **Library** is a class. A class can be used to create many objects. For example, when you created the rotating-book movie clips in the preloader exercise in Chapter 16, you created a class. Dragging a symbol from the **Library** onto the stage created an instance (object) of the class. Multiple instances of one class can exist on the stage at the same time. Any changes made to an individual instance (resizing, rotating, etc.) affect only that one instance. Changes made to a class (accessed through the **Library**), however, affect every instance of the class.

**17.3 Objects in Flash** In this section, we introduce object-oriented programming in Flash. We also demonstrate dynamic positioning (i.e., moving an object). We create two boxes. Each time you click on the left box, the right box will move to the left.

Start by creating a new Flash document named Box.fla. Set the movie’s dimensions to 230 px wide and 140 px high. On the stage, draw a 100-px-wide blue box with a black

**Fig. 17.1** | Ball fired from the cannon and hitting the target. (Part 3 of 3.)

e)

17.3 Objects in Flash **687**

outline and convert it into a movie-clip symbol. You can name this symbol **box**, but that is not necessary. Next, select the box on the stage and delete it, leaving the stage empty. This step ensures that the box will be added using the ActionScript code and that the box is not already on the stage. Now, create a new **ActionScript File** from the **File > New** menu, save it as BoxCode.as in the same directory as Box.fla, and add the code in Fig. 17.3.

The properties x and y refer to the respective _x-_ and \_y-\_coordinates of the boxes. The two imports (lines 5–6) at the top of the code allow for the code to utilize those two classes, which in this case are MouseEvent and Sprite, both of which are built-in Flash classes. Inside the class, the two Box instances are declared. By declaration of the two Box objects at the beginning of the class (lines 11–12), they become instance variables and have scope through the entire class. Once the boxes have been allocated positions (lines 18–21), they must be placed on the stage using the addChild function (lines 23–24). The function han-

dleClick is called every time the user clicks box1**.** The addEventListener function, which is invoked by box1, specifies that handleClick will be called whenever box1 is clicked (line 27).

**Fig. 17.2** | Dynamic positioning.

**1** // Fig. 17.2: BoxCode.as **2** // Object animation in ActionScript. **3** package **4** { **5** import flash.events.MouseEvent; // import MouseEvent class **6** import flash.display.Sprite; // import Sprite class **7 8** public class BoxCode extends Sprite **9** {

**10** // create two new box objects **11** public var box1 = new Box(); **12** public var box2 = new Box(); **13 14** // initialize Box coordinates, add Boxes **15** // to the stage and register MOUSE_DOWN event handler **16** public function BoxCode() : void **17** { **18** box1.x = 15; // set box1's x-coordinate **19** box1.y = 20; // set box1's y-coordinate **20** box2.x = 115; // set box2's x-coordinate **21** box2.y = 20; // set box2's y-coordinate

**Fig. 17.3** | Object animation in ActionScript. (Part 1 of 2.)

**688** Chapter 17 Adobe® Flash® CS3: Building an Interactive Game

To test the code, return to Box.fla. In the **Library** panel, right click the Box symbol and select **Linkage**. In the pop-up box, check off the box next to **Export for ActionScript** and type Box in the space provided next to **Class**. Ignore Flash’s warning that a definition for this class doesn’t exist in the classpath. Once you return to the stage, go to the **Property Inspector** panel and in the space next to **Document Class**, type BoxCode and press _Enter_. Now, the BoxCode ActionScript file has been linked to this specific Flash document. Type _<Ctrl>-Enter_ to test the movie.

**17.4 Cannon Game: Preliminary Instructions and Notes** Open the template file named CannonTemplate.fla from Chapter 17’s examples folder. We’ll build our game from this template. For this case study, the graphics have already been created so that we can focus on the ActionScript. We created all the images using Flash. Chapter 16 provides a detailed coverage of Flash’s graphical capabilities. Take a minute to familiarize yourself with the symbols in the **Library**. Note that the **target** movie clip has movie clips within it. Also, the **ball**, **sound**, **text** and **scoreText** movie clips have stop actions and labels already in place. Throughout the game, we play different sections of these movie clips by referencing their frame labels. The stop action at the end of each section ensures that only the desired animation will be played.

**_Labeling Frames_** Before writing any ActionScript to build the game, we must label each frame in the main timeline to represent its purpose in the game. First, add a keyframe to frames 2 and 3 of the **Labels** layer. Select the first frame of the **Labels** layer and enter **intro** into the **Frame Label** field in the **Property Inspector**. A flag should appear in the corresponding box in the **timeline**. Label the second frame **game** and the third frame **end**. These labels will provide useful references as we create the game.

**_Using the Actions Layer_** In our game, we use an **Actions** layer to hold any ActionScript attached to a specific frame. ActionScript programmers often create an **Actions** layer to better organize Flash movies.

**22 23** addChild( box1 ); // add box1 to the stage **24** addChild( box2 ); // add box2 to the stage **25 26** // handleClick is called when box1 is clicked **27** box1.addEventListener( MouseEvent.MOUSE_DOWN, handleClick ); **28** } // end BoxCode constructor **29 30** // move box2 5 pixels to the left whenever box1 is clicked **31** private function handleClick( args : MouseEvent ) **32** { **33** box2.x -= 5; **34** } // end function handleClick **35** } // end class BoxCode **36** } // end package

**Fig. 17.3** | Object animation in ActionScript. (Part 2 of 2.)

17.5 Adding a Start Button **689**

Add keyframes in the second and third frame of the **Actions** layer, and place a stop func- tion in all three frames.

**17.5 Adding a Start Button** Most games start with an introductory animation. In this section, we create a simple start- ing frame for our game (Fig. 17.1(a)).

Select the first frame of the **Intro/End** layer. From the **Library**, drag the **introText** movie clip and the **Play** button onto the stage. Resize and position both objects any way you like. Set the **Play** button’s instance name to **playButton**. Don’t worry that **introText** is invisible when deselected; it will fade in when the movie is viewed.

Test the movie. The text effects were created by manipulating alpha and gradient values with shape tweening. Explore the different symbols in the **Library** to see how they were created. Now, in the first frame of the **Actions** layer, add the code shown in Fig. 17.4 in the **Actions** panel. When the **Play** button is clicked, the movie will now play the second frame, labeled **game**.

**17.6 Creating Moving Objects _Adding the Target_** In our game, the player’s goal is to hit a moving target, which we create in this section. Create a keyframe in the second frame of the **Target** layer, then drag an instance of the **tar- get** movie clip from the **Library** onto the stage. Using the **Property Inspector**, position the target at the _x-_ and \_y-\_coordinates 490 and 302, respectively. The position (0, 0) is located in the upper-left corner of the screen, so the target should appear near the lower-right cor- ner of the stage. Give the **target** symbol the instance name **target**. Right click the **target** symbol in the **Library** and select **Linkage**. In the box that pops up, select **Export for Action- Script** and enter Target in the **Class** field.

The **target** symbol is now linked with a class named Target. Create a new **ActionScript File** from the **File > New** menu. Save this file immediately and give it the name Target.as. This will serve as the Target class definition. In this file, add the code in Fig. 17.5.

The Target class has four instance variables—the speed of the Target (speed), the direction of the Target (upDown), the number of times the Target has been hit by the ball (hitCounter), and the Timer variable (moveTargetTimer). We specify that moveTarget- Timer is a Timer using the colon syntax in line 18. The first parameter of the Timer con- structor is the delay between timer events in milliseconds. The second parameter is the

**1** // Fig. 17.4: Handle playButton click event. **2 3** // call function playFunction when playButton is clicked **4** playButton.addEventListener( MouseEvent.MOUSE_DOWN, playFunction ); **5 6** // go to game frame **7** function playFunction( event : MouseEvent ) : void **8** { **9** gotoAndPlay( "game" );

**10** } // end function playFunction

**Fig. 17.4** | Handle playButton click event.

**690** Chapter 17 Adobe® Flash® CS3: Building an Interactive Game

**1** // Fig. 17.5: Target.as **2** // Move target, set direction and speed, **3** // and keep track of number of blocks hit. **4** package **5** { **6** // import relevant classes **7** import flash.display.MovieClip; **8** import flash.events.TimerEvent; **9** import flash.utils.Timer;

**10 11** public class Target extends MovieClip **12** { **13** var speed; // speed of Target **14** var upDown; // direction of Target **15** var hitCounter; // number of times Target has been hit **16 17** // timer runs indefinitely every 33 ms **18** var moveTargetTimer : Timer = new Timer ( 33, 0 ); **19 20** // register function moveTarget as moveTargetTimer’s **21** // event handler, start timer **22** public function Target() : void **23** { **24** moveTargetTimer.addEventListener ( **25** TimerEvent.TIMER, moveTarget ); **26** moveTargetTimer.start(); // start timer **27** } // end Target constructor **28 29** // move the Target **30** private function moveTarget( t : TimerEvent ) **31** { **32** // if Target is at the top or bottom of the stage, **33** // change its direction **34** if ( y > 310 ) **35** { **36** upDown = -1; // change direction to up **37** } // end if **38 39** else if ( y < 90 ) **40** { **41** upDown = 1; // change direction to down **42** } // end else **43 44** y += (speed \* upDown); // move target **45** } // end function moveTarget **46 47** // set direction of the Target **48** public function setUpDown( newUpDown : int ) **49** { **50** upDown = newUpDown; **51** } // end function setUpDown **52**

**Fig. 17.5** | Move target, set direction and speed, and track number of blocks hit. (Part 1 of 2.)

17.6 Creating Moving Objects **691**

number of times the Timer should repeat. A value of 0 means that the Timer will run inde- finately. The constructor function (lines 22–27) activates moveTargetTimer, which in turn calls the moveTarget function (lines 30–45) to move the Target every 33 millisec- onds. The moveTarget function contains a nested if…else statement (lines 34–42) that sets upDown to -1 (up) when the target reaches the bottom of the screen and sets upDown to 1 (down) when it reaches the top of the screen. It does this by testing if the target’s _y-\_coor- dinate is greater than 310 or less than 90. \[\_Note:_ The property y refers specifically to the _y-\_coordinate of the small white circle that appears on the main stage.\] Since the stage is 400 pixels high and the target is 180 pixels high (half of which is below its \_y_\-coordinate), when the target’s _y_\-coordinate is equal to 310, the bottom end of the target is even with bottom of the stage. Similar logic applies when the target is at the top of the stage.

**53** // get direction of the Target **54** public function getUpDown() : int **55** { **56** return upDown; **57** } // end function getUpDown **58 59** // set speed of the Target **60** public function setSpeed ( newSpeed : int ) **61** { **62** speed = newSpeed; **63** } // end function setSpeed **64 65** // get speed of the Target **66** public function getSpeed() : int **67** { **68** return speed; **69** } // end function getSpeed **70 71** // set the number of times the Target has been hit **72** public function setHitCounter( newCount : int ) **73** { **74** hitCounter = newCount; **75** } // end setHitCounter function **76 77** // return the number of times the Target has been hit **78** public function getHitCounter () : int **79** { **80** return hitCounter; **81** } // end function getHitCounter **82 83** // stop moveTargetTimer **84** public function stopTimers() : void **85** { **86** moveTargetTimer.stop(); **87** } **88** } // end class Target **89** } // end package

**Fig. 17.5** | Move target, set direction and speed, and track number of blocks hit. (Part 2 of 2.)

**692** Chapter 17 Adobe® Flash® CS3: Building an Interactive Game

Line 44 moves the target by incrementing its _y_\-coordinate by the result of getSpeed() \* upDown. The remaining functions in this class are the public _get_ and _set_ functions for the upDown, speed and hitCounter variables. These allow us to retrieve and set the values out- side of the class. The stopTimers function allows us to stop the moveTargetTimer from outside of the class.

Now, we can enable the target on stage, **target**, to move vertically simply by adding the calling methods setSpeed, setUpDown and setHitCounter in the second frame of the **Actions** layer:

target.setSpeed( 8 ); target.setUpDown( -1 ); target.setHitCounter( 0 );

Now, test the movie to see the target oscillate between the top and bottom of the stage.

**_Adding the Blocker_** An additional moving object is used to block the ball, increasing the game’s difficulty. In- sert a keyframe in the second frame of the Blocker layer and drag an instance of the **block- er** object from the **Library** onto the stage. Give this **blocker** instance the name **blocker**. Set the blocker instance’s _x-_ and \_y-\_coordinates to 415 and 348, respectively. Create a Block-

er.as file and class and link it to the **blocker** symbol. In this file, add the code in Fig. 17.6.

**1** // Fig. 17.6: Blocker.as **2** // Set position and speed of Blocker. **3** package **4** { **5** // import relevant classes **6** import flash.display.MovieClip; **7** import flash.events.TimerEvent; **8** import flash.utils.Timer; **9**

**10** public class Blocker extends MovieClip **11** { **12** var speed : int; // speed of Blocker **13** var upDown : int; // direction of Blocker **14** var moveBlockerTimer : Timer = new Timer ( 33, 0 ); **15 16** // call function moveBlocker as moveBlockerTimer event handler **17** public function Blocker() : void **18** { **19** moveBlockerTimer.addEventListener ( **20** TimerEvent.TIMER, moveBlocker ); **21** moveBlockerTimer.start(); **22** } // end Blocker constructor **23 24** // move the Blocker **25** private function moveBlocker( t : TimerEvent ) **26** { **27** // if Blocker is at the top or bottom of the stage, **28** // change its direction

**Fig. 17.6** | Set position and speed of Blocker. (Part 1 of 2.)

17.6 Creating Moving Objects **693**

This code is very similar to that of the Target.as. Add the following code in the second frame of the **Actions** layer to set the speed and direction of the blocker:

blocker.setSpeed( 5 ); blocker.setUpDown( 1 );

Test the movie. The blocker and target should both oscillate at different speeds (Fig. 17.7).

**29** if ( y > 347.5 ) **30** { **31** upDown = -1; **32** } // end if **33 34** else if ( y < 52.5 ) **35** { **36** upDown = 1; **37** } // end else **38 39** y += getSpeed() \* upDown; **40** } // end function moveBlocker **41 42** // set speed for the Blocker **43** public function setSpeed ( v : int ) **44** { **45** speed = v; **46** } // end function setSpeed **47 48** // get speed of the Blocker **49** public function getSpeed() : int **50** { **51** return speed; **52** } // end function getSpeed **53 54** // set direction for the Blocker **55** public function setUpDown( newUpDown : int ) **56** { **57** upDown = newUpDown; **58** } // end function setUpDown **59 60** // get direction of the Blocker **61** public function getUpDown() : int **62** { **63** return upDown; **64** } // end function getUpDown **65 66** // stop moveBlockerTimer **67** public function stopTimers() : void **68** { **69** moveBlockerTimer.stop(); **70** } **71** } // end class Blocker **72** } // end package

**Fig. 17.6** | Set position and speed of Blocker. (Part 2 of 2.)

**694** Chapter 17 Adobe® Flash® CS3: Building an Interactive Game

**17.7 Adding the Rotating Cannon** Many Flash applications include animation that responds to mouse-cursor motions. In this section, we discuss how to make the cannon’s barrel follow the cursor, allowing the player to aim at the moving target. The skills you learn here can be used to create many effects that respond to cursor movements.

Add a keyframe to the second frame of the **Cannon** layer and drag the **cannon** object from the **Library** onto the stage. Set its _x_\- and _y_\-coordinates to 0 and 200. Give this cannon instance the name **cannon**. The cannon should appear in the middle of the stage’s left edge (Fig. 17.8).

**_Coding the Cannon’s Rotation_** Now, add the code from Fig. 17.9 to the second frame of the **Actions** layer. This code ro- tates the cannon barrel to point toward the cursor. The _x-_ and \_y-\_coordinates of the cursor are directly accessed using the stage.mouseX and stage.mouseY properties. The code ex-

**Fig. 17.7** | Oscillating blocker and target.

**Fig. 17.8** | Cannon position.

17.7 Adding the Rotating Cannon **695**

ecutes any time the player moves the cursor, so the cannon always points toward the mouse cursor. The addEventListener function of the stage object registers the mouseInHandler function as the event handler of the MOUSE_MOVE event (line 2). Inside the mouseInHandler function, an if statement (lines 8–9) checks whether the cursor is within the stage. If it is, the code adjusts the cannon’s rotation so that it points toward the cursor (line 13). The **rotation property** (line 13) controls an object’s rotation, assuming its natural orientation to be 0 degrees.

ActionScript’s **Math class** contains various mathematical functions and values that are useful when performing complex operations. For a full list of the Math class’s functions and values, refer to the **Flash Help** in the **Help** menu. We use the Math class to help us compute the rotation angle required to point the cannon toward the cursor.

First, we need to find the cursor’s coordinates relative to the cannon. Subtracting 200 from the cursor’s _y_\-coordinate gives us the cursor’s vertical position, assuming (0, 0) lies at the cannon’s center (Fig. 17.10). We then determine the desired angle of rotation. Note the

**1** // Fig. 17.9: Register mouseInHandler as MOUSE_MOVE event handler. **2** stage.addEventListener( MouseEvent.MOUSE_MOVE, mouseInHandler ); **3 4** // rotate cannon when mouse is moved **5** function mouseInHandler( args : MouseEvent ) : void **6** { **7** // rotates cannon if cursor is within stage **8** if ( ( stage.mouseX > 0 ) && ( stage.mouseY > 0 ) && **9** ( stage.mouseX < 550 ) && ( stage.mouseY < 400 ) )

**10** { **11** // adjust cannon rotation based on cursor position **12** var angle = Math.atan2( ( stage.mouseY - 200 ), stage.mouseX ); **13** cannon.rotation = angle \* ( 180 / Math.PI ); **14** } // end if **15** } // end function mouseInHandler

**Fig. 17.9** | Register mouseInHandler as MOUSE_MOVE event handler.

**Fig. 17.10** | Trigonometry of the **cannon** object.

α

x

y

Actual position (0, 200)

Position relative to cannon (0, 0)

Actual position: (75, 250) Position relative to cannon: (75, 50)

**696** Chapter 17 Adobe® Flash® CS3: Building an Interactive Game

right triangle created by the cannon and the cursor in Fig. 17.10. From trigonometry, we know that the tangent of angle α equals the length of side _y_ divided by side _x_: tan(α) _\= y/x_. We want the value of α, though, not the value of tan(α). Since the arc tangent is the inverse of the tangent, we can rewrite this equation as α = arctan(_y/x_). The Math object provides us with an arc tangent function: Math.atan2(y, x). This function returns a value, in radians, equal to the angle opposite side y and adjacent to side x (line 12). Radians are a type of angle measurement similar to degrees that range from 0 to 2π instead of 0 to 360. To convert from radians to degrees, we multiply by 180/π (line 13). The constant Math.PI provides the value of π. Since this rotation adjustment is performed every time the mouse moves within the stage, the cannon barrel appears to constantly point at the cursor. Test the movie to observe this effect.

**Error-Prevention Tip 17.1** \_If your code is not working and no error message displays, ensure that every variable points to the correct object. One incorrect reference can prevent an entire function from operating correctly.\_17.1

**_Hiding the Cannon Layer_** We won’t make any other changes to the **Cannon** layer. Hide the **Cannon** layer by selecting the **show/hide** selector (dot) in the portion of the **Timeline** to the right of the layer name (Fig. 17.11). A red **x** should appear in place of the dot to indicate that the layer is hidden while editing the movie. The layer will still be visible when the movie is viewed. Clicking the show/hide **x** again makes the **Cannon** layer visible.

**17.8 Adding the Cannonball** In this section, we add the cannonball to our game. Create a keyframe in frame 2 of the **Ball** layer, then drag the **ball** symbol from the **Library** onto the stage. Give the **ball** object the instance name **ball**. Notice that the ball instance appears as a small white circle on the stage. This circle is Flash’s default appearance for a movie clip that has no graphic in its first frame. The ball will appear hidden beneath the cannon when the movie is viewed, be- cause it is on a lower layer. Provide the Ball object with the _x-_ and \_y-\_coordinates 0 and 200, respectively. This places the ball right under the cannon, so that when the ball is fired, it appears to have been fired from inside the cannon.

**_Initializing the Ball’s Motion Variables_** Link the **ball** symbol to a Ball class, as we did previously with the Target and Blocker

classes. Next, create a new ActionScript 3.0 file named Ball.as and add the code shown in Fig. 17.12 to the file.

**Fig. 17.11** | Using selectors to show/hide layers.

Show/Hide selectors Hidden layer

17.8 Adding the Cannonball **697**

This code defines the Ball class. It has three properties—the speed in the _x-\_direction, speedX (line 12), the speed in the \_y-\_direction, speedY (line 13), and a timer that moves the ball, moveBallTimer (line 16). Since the speed in the \_x_\-direction will be only integer values, it is of type int. However, the speed in the _y_\-direction is also dependent on fire-

Ratio, which can be a decimal value, and thus, speedY is of type Number, which is Action- Script 3’s floating-point variable type. The class definition also creates the _get_ and _set_ functions for these properties. When the Ball object is created, the Ball constructor func- tion starts the moveBallTimer, which calls the moveBall function every 33 ms. Function moveBall (lines 28–32) increments the _x-_ and \_y-\_coordinates by speedX and speedY. The stopTimers function allows us to stop the moveBallTimer from outside of the class.

**1** // Fig. 17.12: Ball.as **2** // Move ball and set speed. **3** package **4** { **5** // import relevant classes **6** import flash.display.MovieClip; **7** import flash.events.TimerEvent; **8** import flash.utils.Timer; **9**

**10** public class Ball extends MovieClip **11** { **12** var speedX : int; // speed in x-direction **13** var speedY : Number; // speed in y-direction **14 15** // Create Timer object to move ball **16** var moveBallTimer : Timer = new Timer( 33, 0 ); **17 18** // Ball constructor starts moveBallTimer **19** public function Ball() : void **20** { **21** // call function moveBall as moveBallTimer event handler **22** moveBallTimer.addEventListener( **23** TimerEvent.TIMER, moveBall ); **24** moveBallTimer.start(); **25** } // end Ball constructor **26 27** // update the x and y coordinates using the specific speeds **28** private function moveBall( t : TimerEvent ) **29** { **30** x += speedX; **31** y += speedY; **32** } // end function moveBall **33 34** // set speed in x direction **35** public function setSpeedX( v : int ) **36** { **37** speedX = v; **38** } // end function setSpeedX **39**

**Fig. 17.12** | Move ball and set speed. (Part 1 of 2.)

**698** Chapter 17 Adobe® Flash® CS3: Building an Interactive Game

**_Scripting the Ball’s Motion_** In the second frame of the **Actions** layer, add the code in Fig. 17.13. The new code moves the ball along a straight line in the direction the cannon was pointing when the mouse was clicked.

**40** // get speed in x direction **41** public function getSpeedX() : int **42** { **43** return speedX; **44** } // end function getSpeedX **45 46** // set speed in y direction **47** public function setSpeedY( v : int, fireRatio : Number ) **48** { **49** speedY = v \* fireRatio; **50** } // end function setSpeedY **51 52** // get speed in y direction **53** public function getSpeedY() : Number **54** { **55** return speedY; **56** } // end function getSpeedY **57 58** public function stopTimers() : void **59** { **60** moveBallTimer.stop(); **61** } // end function stopTimer **62** } // end class Ball **63** } // end package

**1** // Fig. 17.13: Fire ball on click event. **2** var firing : Boolean = false; // is ball firing? **3** var exploding : Boolean = false; // is ball exploding? **4** var fireRatio : Number = 0; // firing direction of ball **5** var speed : int = 30; // speed of ball **6** ball.setSpeedX( 0 ); **7** ball.setSpeedY( 0, 0 ); **8 9** // register function mouseDownHandler as MOUSE_DOWN event handler

**10** stage.addEventListener( MouseEvent.MOUSE_DOWN, mouseDownHandler ); **11 12** function mouseDownHandler( args : MouseEvent ) : void **13** { **14** // if the mouse is within the stage and the ball has not been fired or **15** // exploded yet, fire ball toward mouse cursor **16** if ( ( !firing ) && ( !exploding ) && ( stage.mouseX > 0 ) && **17** ( stage.mouseY > 0 ) && ( stage.mouseX < 550 ) && **18** ( stage.mouseY < 400 ) ) **19** {

**Fig. 17.13** | Fire ball on click event. (Part 1 of 2.)

**Fig. 17.12** | Move ball and set speed. (Part 2 of 2.)

17.9 Adding Sound and Text Objects to the Movie **699**

This code initializes four variables—firing, exploding, fireRatio and speed (lines 2–5). Variables firing and exploding are set to false to signify that the ball is not moving or exploding. Later, we will set exploding to true and play a brief explosion ani- mation upon collision with the target or the blocker. Variables fireRatio and speed

specify the ball’s firing direction and speed, respectively. The function addEventListener

(line 10) registers the function mouseDownHandler (lines 12–25) as the event handler for the stage’s MOUSE*DOWN event. The if statement in the mouseDownHandler function (lines 16–24) checks that the ball is not currently in flight (!firing) or exploding (!exploding), and the mouse is within the stage (lines 16–18). If the condition evaluates to true, firing is set to true (line 20), and fireRatio is set to the mouse’s \_y*\-coordinate (relative to the cannon) divided by its _x_\-coordinate (line 21). This fireRatio will move the ball toward the cursor’s position when it is fired. Lines 22–23 set the ball’s speed in the _x_\-direction to speed, and the ball’s speed in the _y_\-direction to speed \* fireRatio. The expression speed \* fireRatio returns the appropriate change in y based on the given change in x

(speed).

**17.9 Adding Sound and Text Objects to the Movie** Next, we add sound and text to our movie. Add a keyframe to frame 2 of the **Text** layer and drag the **text** symbol from the **Library** onto the stage. Note that the **text** object, like the ball, is represented by a small white dot. This dot will not appear when the movie is viewed. Position the **text** symbol in the center of the stage at coordinate (275, 200), and name the instance **text**. Then, add a keyframe to the second frame of the **Sounds** and **ScoreText** layers, and add an instance of the **sound** and **scoreText** objects, respectively. Center both objects on the stage and give them instance names matching their symbol names—**sound** and **scoreText.** Lock these three layers by clicking the **lock/unlock** selector (dot) to the right of the layer name in the timeline (Fig. 17.14). When a layer is locked,

**20** firing = true; **21** fireRatio = ( stage.mouseY - 200 ) / stage.mouseX; **22** ball.setSpeedX( speed ); **23** ball.setSpeedY( speed, fireRatio ); **24** } // end if **25** } // end function mouseDownHandler

**Fig. 17.14** | **Lock/Unlock** layers.

**Fig. 17.13** | Fire ball on click event. (Part 2 of 2.)

**Lock/Unlock** selector

**700** Chapter 17 Adobe® Flash® CS3: Building an Interactive Game

its elements are visible, but they cannot be edited. This allows you to use one layer’s ele- ments as visual references for designing another layer, while ensuring that no elements are moved unintentionally. To unlock a layer, click the lock symbol to the right of the layer name in the **Timeline**.

All the necessary sound and text capabilities have now been added to the game. In the next section, we add the time counter to the game.

**17.10 Adding the Time Counter** What makes the cannon game challenging is the limited amount of time the player has to completely destroy the target. Time, whether increasing or decreasing, is an important aspect of many games and applications. In this section, we discuss adding a time counter that decreases as the game progresses.

**_Adding the Time Box_** In the cannon game, the player has a limited amount of time to destroy every section of the target. The amount of time remaining appears in a dynamic text box in the bottom- left corner of the screen. To create this dynamic text box, first add a keyframe to frame 2 of the **Time** layer and add an instance of the **time** symbol to the stage**.** Position it at coor- dinate (100, 365), which should be in the lower-left corner of the stage. Name the instance **time**. Open the **time** symbol from the **Library** and select the text field. In the **Property In- spector**, change the text type to **Dynamic Text** and name the instance **timeText**. Return to the main scene, and add the code in Fig. 17.15 to the **Actions** panel in the second frame.

The variable timer is initialized to 10 (line 2). This variable will hold the amount of time remaining. The countTimer (lines 3–7) calls the countDown function (lines 9–18) each second. The countDown function decrements the timer by 1, and also sets the text

of the time symbol’s timeText element to "TIME: ", followed by the current value of timer.

**1** // Fig. 17.15: Timer countdown. **2** var timer = 10; // set initial timer value to 10 seconds **3** var countTimer : Timer = new Timer( 1000, 0 ); **4 5** // call function countDown as countTimer event handler **6** countTimer.addEventListener( TimerEvent.TIMER, countDown ); **7** countTimer.start(); // start Timer **8 9** function countDown( t : TimerEvent )

**10** { **11** \--timer; // decrement timer by 1 every second **12** time.timeText.text = "TIME: " + timer; **13** // player loses game if he/she runs out of time **14** if( ( !firing ) && timer <= 0 ) **15** { **16** gotoAndPlay( "end" ); // call end frame sequence **17** } // end if **18** } // end function countDown

**Fig. 17.15** | Timer countdown.

17.10 Adding the Time Counter **701**

Lines 14–17 test whether time has run out and the ball is not firing. If the condition is true, the movie will skip to the (empty) end frame.

Test the movie. The time should decrease from 10 to 0. When the time reaches 0, the **end** frame should play. Because none of the functions or objects in the second frame cur- rently exist in the third frame, the timers that are still active will try to call those functions and fail, returning an error message. To fix this, we must first include all of the objects on the stage in the second frame in the third frame. You can do this by inserting a new frame (not keyframe) in the third frame of the **Text**, **ScoreText**, **Sounds**, **Time**, **Cannon**, **Ball**, **Target**, and **Blocker** layers. Next, we must stop all timers and hide most of the elements at the beginning of the third frame. Add the code in Fig. 17.16 to the third frame of the Actions layer.

Lines 2–3 remove the event listeners for the stage’s MOUSE_MOVE and MOUSE_DOWN

events, which are no longer needed. Lines 4–7 stop all of the timers that we have used, either by accessing the timer’s stop method directly (line 4), or by accessing the class’s stopTimers method (lines 5–7). Lines 8–13 hide every element on the stage by playing the hidden frame of each element, which is an empty frame.

**_Creating a Final Animation Sequence_** Games generally have a final animation sequence that informs the player of the outcome of the game. In this section, we create a final animation sequence for the game.

First, we must create a winner boolean to keep track of whether the player has won or lost the game. To do this, add the following code to the second frame of the Actions layer.

var winner : Boolean = false; // Keep track of who won

Next, add the code in Fig. 17.17 to the third frame of the Actions layer. This if…else statement checks the winner variable. If winner is true, the **text** movie clip goes to the **win** frame. Otherwise **text** goes to the **lose** frame. Test the movie again. When the time runs out, the **lose** frame, containing the text **Game Over**, should appear on an other- wise blank stage.

**1** // Fig. 17.16: Stops all timers and sends objects into hidden frame. **2** stage.removeEventListener( MouseEvent.MOUSE_MOVE, mouseInHandler ); **3** stage.removeEventListener( MouseEvent.MOUSE_DOWN, mouseDownHandler ); **4** countTimer.stop(); **5** blocker.stopTimers(); **6** ball.stopTimers(); **7** target.stopTimers(); **8** blocker.gotoAndPlay( "hidden" ); **9** cannon.gotoAndPlay( "hidden" );

**10** ball.gotoAndPlay( "hidden" ); **11** target.gotoAndPlay( "hidden" ); **12** time.gotoAndPlay( "hidden" ); **13** scoreText.gotoAndPlay( "hidden" );

**Fig. 17.16** | Stops all timers and sends objects into hidden frame.

**702** Chapter 17 Adobe® Flash® CS3: Building an Interactive Game

**17.11 Detecting a Miss** We now add code to the **ball** instance that detects when the ball has moved outside of the stage. First, add the checkBall function in Fig. 17.18 to the second frame of the **Actions** panel.

Lines 5–6 test whether the ball is outside the bounds of the stage. If it is, the checkBallTimer is stopped (line 8), because the ball is no longer in motion and does not need to be checked until it has been fired again. Boolean firing is set to false (line 9). Then, lines 10–12 play the text movie clip’s miss frame, the scoreText movie clip’s minusTwo frame and the sound movie clip’s miss frame. This will display **MISS** and **\-2** on the stage, and play the miss sound. Also, the timer variable is decreased by 2 (line 13). Finally, the Ball object is reset to its starting position and speed (lines 14–17).

In order to check the ball at regular intervals, we create a timer that calls checkBall every 33 ms. First, add the following code to the second frame of the **Actions** layer:

// Check ball at 33-ms intervals var checkBallTimer : Timer = new Timer( 33, 0 );

**1** // Fig. 17.17: Check winner and show "Winner" or "Game Over". **2** if (winner == true) **3** { **4** text.gotoAndPlay( "win" ); **5** } **6 7** else **8** { **9** text.gotoAndPlay( "lose" );

**10** }

**Fig. 17.17** | Check winner and show **Winner** or **Game Over**.

**1** // Fig. 17.18: Detecting a miss. **2** function checkBall ( e : TimerEvent ) **3** { **4** // if ball is not inside stage, go through miss sequence **5** if ( ( ball.x < 0 ) || ( ball.y < 0 ) || ( ball.x > 550 ) || **6** ( ball.y > 400 ) ) **7** { **8** checkBallTimer.stop(); // stop checkBallTimer **9** firing = false; // ball is no longer being fired

**10** text.gotoAndPlay( "miss" ); // display miss on the stage **11** scoreText.gotoAndPlay ( "minusTwo" ); // display "-2" **12** sound.gotoAndPlay ( "miss" ); // miss sound is played **13** timer -= 2; // deduct 2 seconds from timer **14** ball.x = 0; // set ball back to initial x-coordinate **15** ball.y = 200; // set ball back to initial y-coordinate **16** ball.setSpeedX( 0 ); // set ball speed in x-direction to 0 **17** ball.setSpeedY( 0, 0 ); // set ball speed in y-direction to 0 **18** } // end if **19** } // end function checkBall

**Fig. 17.18** | Detecting a miss.

17.12 Adding Collision Detection **703**

Next, we must start the timer. Since this timer needs to run only after the ball has been fired, we will start the timer in the mouseDownHandler. Insert the following code between lines 13 and 14 of Fig. 17.13.

// call function checkBall as checkBallTimer event handler checkBallTimer.addEventListener( TimerEvent.TIMER, checkBall ); checkBallTimer.start(); // start Timer

We must also stop this timer at the end of the game by adding the following code to the third frame of the Actions layer.

checkBallTimer.stop();

Test the movie with your computer’s sound turned on. At this point, every fired ball should travel off the stage and count as a miss. In the next few sections, we discuss how to add features that allow the player to gain time and win the game.

**17.12 Adding Collision Detection** Before we add collision detection to the target and blocker, we add a function that handles the actions common to all of our collisions. Add the onBallContact function (Fig. 17.19) to the second frame of the Actions layer.

**1** // Fig. 17.19: Common actions after collision. **2** function onBallContact( timeChange : int ) **3** { **4** // adjust variables to play exploding sequence **5** exploding = true; **6** firing = false; **7** timer += timeChange; // add the amount of time passed as parameter **8** ball.gotoAndPlay( "explode" ); // explode the Ball object **9** ball.setSpeedX( 0 ); // set ball speed in x-direction to 0

**10** ball.setSpeedY( 0, 0 ); // set ball speed in y-direction to 0 **11 12** // give explode animation time to finish, then call resetBall **13** explodeTimer.addEventListener( TimerEvent.TIMER, resetBall ); **14** explodeTimer.start(); **15 16** // play appropriate sound and text based on timeChange **17** if ( timeChange < 0 ) **18** { **19** sound.gotoAndPlay( "blocked" ); **20** text.gotoAndPlay( "blocked" ); **21** if ( timeChange == -5 ) **22** { **23** scoreText.gotoAndPlay( "minusFive" ); **24** } // end if **25** } // end if **26 27** else if ( timeChange >= 0 ) **28** {

**Fig. 17.19** | Common actions after collision. (Part 1 of 2.)

**704** Chapter 17 Adobe® Flash® CS3: Building an Interactive Game

The onBallContact function takes a timeChange parameter that specifies how many seconds to add or remove from the time remaining. Line 7 adds timeChange to the timer. Lines 8–10 tell the ball to explode and stop. Lines 13–14 start a timer that calls the reset- Ball function after completion. We must create this timer by adding the following code to the second frame of the **Actions** layer:

// Delay for ball explosion var explodeTimer : Timer = new Timer( 266, 1 );

This timer gives the ball’s explode animation time to complete before it calls reset- Ball. We must stop this timer at the end of the game, by adding the following code to the third frame of the **Actions** layer.

explodeTimer.stop();

The resetBall function (Fig. 17.20) sets exploding to false (line 4), then resets the ball to the starting frame and position (lines 5–7). Add the resetBall function to the second frame of the Actions layer.

The onBallContact function (Fig. 17.19) also plays a frame from the sound, text and scoreText movie clips, depending on the timeChange, to notify the player whether

**29** sound.gotoAndPlay( "hit" ); **30** text.gotoAndPlay( "hit" ); **31 32** // increment the hitCounter by 1 **33** target.setHitCounter( target.getHitCounter() + 1 ); **34 35** if ( target.getHitCounter() >= 5 ) **36** { **37** // if target has been hit 5 times, then declare player winner **38** winner = true; **39** gotoAndPlay( "end" ); // go to third frame **40** } // end if **41 42** if ( timeChange == 5 ) **43** { **44** scoreText.gotoAndPlay( "plusFive" ); **45** } // end if **46 47** else if ( timeChange == 10 ) **48** { **49** scoreText.gotoAndPlay( "plusTen" ); **50** } // end else **51 52** else if ( timeChange == 20 ) **53** { **54** scoreText.gotoAndPlay( "plus20" ); **55** } // end else **56** } // end else **57** } // end function onBallContact

**Fig. 17.19** | Common actions after collision. (Part 2 of 2.)

17.12 Adding Collision Detection **705**

they hit a target or a blocker, and to show the player how many points they gained or lost (lines 17–56). Lines 35–40 test whether the target has been hit 5 times. If it has, winner is set to true and the end frame is played.

**_Adding Collision Detection to the Target and Blocker_** Flash has a built-in **collision detection** function that determines whether two objects are touching. The function _object1_.**hitTestObject**(_object2_) returns true if any part of _object1_ touches _object2_. Many games must detect collisions between moving objects to control game play or add realistic effects. In this game, we rely on collision detection to determine if the ball hits either the blocker or the target.

In this section, we add code to **target** and **blocker** that increases or decreases your remaining time, depending on what you hit. Note that the **target** object comprises five instances of three different symbols: one **targetCenter** (white), two **targetMiddle**s (gray) and two **targetOut**s (red). The closer to the center the **target** is hit, the more seconds get added to the total time.

Add the collision detection function shown in Fig. 17.21 to the second frame of the **Actions** layer.

**1** // Fig. 17.20: Reset the ball to its original position. **2** function resetBall( t : TimerEvent ) **3** { **4** exploding = false; // set the ball explosion status to false **5** ball.gotoAndPlay( "normal" ); **6** ball.x = 0; // set x-coordinate to original position **7** ball.y = 200; // set y-coordinate to original position **8** } // end function resetBall

**Fig. 17.20** | Reset the ball to its original position.

**1** // Fig. 17.21: Detect collision using hitTestObject. **2** function collisionDetection() **3** { **4** if ( target.out1.hitTestObject( ball ) && ( !exploding ) ) **5** { **6** onBallContact ( 5 ); // hit upper outer part of target **7** target.out1.gotoAndPlay( "hit" ); **8** } // end if **9**

**10** else if ( target.mid1.hitTestObject( ball ) && ( !exploding ) ) **11** { **12** onBallContact ( 10 ); // hit upper middle part of target **13** target.mid1.gotoAndPlay( "hit" ); **14** } // end else **15 16** else if ( target.center.hitTestObject( ball ) && ( !exploding ) ) **17** { **18** onBallContact ( 20 ); // hit center of target **19** target.center.gotoAndPlay( "hit" ); **20** } // end else

**Fig. 17.21** | Detect collision using hitTestObject. (Part 1 of 2.)

**706** Chapter 17 Adobe® Flash® CS3: Building an Interactive Game

Function collisionDetection consists of an if…else statement that tests whether the ball has hit the blocker or one of the parts of the target. It ensures that the ball is not currently exploding, to prevent the ball from hitting more than one part of the target at a time. If these conditions return true, the onBallContact function is called with the appro- priate number of seconds to add to or subtract from the timer as the parameter. For each of the parts of the target, that part’s hit animation is played upon being hit. For the blocker, an if statement (lines 39–43) checks whether time has run out (line 39). If it has, the winner is set to false and the movie moves to the end frame.

To run the collisionDetection function at a regular interval, we will call it from the checkBall function. Add the following at the beginning of the checkBall function.

collisionDetection();

Now test the movie. The target pieces should disappear when hit by the ball, as shown in Fig. 17.1. The player can now gain time by hitting the target and lose time by hitting the blocker. The ball should explode in the position where it hit the blocker, then reset to under the cannon, allowing the player to fire again.

**17.13 Finishing the Game** Open the **text** symbol’s editing stage from the **Library**. An action that plays the frame la- beled **intro** in the main scene has already been attached to the last frame of the sections labeled **win** and **lose**. These actions, which were included in the original CannonTem-

plate.fla file, cause the game to restart after the final text animation is played.

**21 22** else if ( target.mid2.hitTestObject( ball ) && ( !exploding ) ) **23** { **24** onBallContact ( 10 ); // hit lower middle part of target **25** target.mid2.gotoAndPlay( "hit" ); **26** } // end else **27 28** else if ( target.out2.hitTestObject( ball ) && ( !exploding ) ) **29** { **30** onBallContact ( 5 ); // hit lower outer part of target **31** target.out2.gotoAndPlay( "hit" ); **32** } // end else **33 34** else if ( blocker.hitTestObject( ball ) && ( !exploding ) ) **35** { **36** onBallContact ( -5 ); **37 38** // if timer runs out, player loses **39** if ( timer < 0 ) **40** { **41** winner = false; **42** gotoAndPlay( "end" ); **43** } // end if **44** } // end else **45** } // end function collisionDetection

**Fig. 17.21** | Detect collision using hitTestObject. (Part 2 of 2.)

17.14 ActionScript 3.0 Elements Introduced in This Chapter **707**

To change the game’s difficulty, adjust speed in the **blocker** and/or the **target**. Adjusting the time change in the timeText instance also changes the difficulty (a smaller decrement gives more time).

Congratulations! You have created an interactive Flash game. Now you can play the completed version. In the chapter exercises, you can improve the game and add additional levels of difficulty.

**17.14 ActionScript 3.0 Elements Introduced in This Chapter** Figure 17.22 lists the Flash ActionScript 3.0 elements introduced in this chapter, which are useful in building complex Flash movies.

Element Description

_object_.x Property that refers to _object_’s _x_\-coordinate.

_object_.y Property that refers to _object_’s _y_\-coordinate.

addChild(_object_) Function that adds the object to the stage.

addEventListener(

_event_, _function_) Function that invokes another function in response to an event.

mouseX Mouse’s _x_\-coordinate property.

mouseY Mouse’s _y_\-coordinate property.

_object_.rotation Property that rotates the _object_.

stage Manipulates objects on the stage.

_object1_.hitTestObject( _object2_ )

Built-in function that determines when two objects collide

Math Built-in object that contains useful functions and properties (refer to Flash’s ActionScript Dictionary for a full list).

**Fig. 17.22** | ActionScript 3.0 elements.

**Summary _Section 17.1 Introduction_** • Adobe Flash CS3 is capable of building large, interactive applications.

**_Section 17.2 Object-Oriented Programming_** • ActionScript 3.0 is an object-oriented scripting language that closely resembles JavaScript. The

knowledge you gained from the JavaScript treatment in Chapters 6–11 will help you understand the ActionScript used in this case study.

• An ActionScript class is a collection of characteristics known as properties and of behaviors known as functions.

**708** Chapter 17 Adobe® Flash® CS3: Building an Interactive Game

• You can create your own classes or use any of Flash’s predefined classes.

• A symbol stored in the **Library** is a class.

• A class can be used to create many instances, or objects, of the class.

• Dragging a symbol from the **Library** onto the stage creates an instance (object) of the class. Mul- tiple instances of one class can exist on the stage at the same time.

• Any changes made to an individual instance (resizing, rotating, etc.) affect only that one instance.

• Changes made to a class (accessed through the **Library**), affect every instance of the class.

**_Section 17.3 Objects in Flash_** • The properties x and y refer to the respective _x-_ and \_y-\_coordinates of an object.

• import allows you to utilize built-in classes of ActionScript 3.0, such as MouseEvent and Sprite.

• Instance variables have scope through the entire class.

• Movie clips in the **Library** can be placed on the stage using the addChild function.

• Function addEventListener registers an event handler to be called when an event is triggered.

**_Section 17.4 Cannon Game: Preliminary Instructions and Notes_** • The stop action at the end of a section ensures that only the desired animation will be played.

• ActionScript programmers often create an **Actions** layer to better organize Flash movies.

**_Section 17.5 Adding a Start Button_** • Most games start with an introductory animation.

**_Section 17.6 Creating Moving Objects_** • The first parameter of a Timer constructor is the delay between timer events in milliseconds. The

second parameter is the number of times the Timer should repeat. A value of 0 means that the Timer will run indefinitely.

**_Section 17.7 Adding the Rotating Cannon_** • Many Flash applications include animation that responds to mouse cursor motions.

• ActionScript’s Math class contains various mathematical functions and values that are useful when performing complex operations. For a full list of the Math class’s functions and values, refer to the **Flash Help** dictionary from the **Help** menu.

• The Math object provides us with an arc tangent function: Math.atan2(y, x). This function re- turns a value, in radians, equal to the angle opposite side y and adjacent to side x.

• The constant Math.PI provides the value of π.

• If your code is not working and no error message displays, ensure that every variable points to the correct object. One incorrect stage can prevent an entire function from operating correctly.

• Hide a layer by selecting the show/hide selector (dot) in the portion of the **Timeline** to the right of the layer name. A red **x** should appear in place of the dot to indicate that the layer is hidden while editing the movie. The layer will still be visible when the movie is viewed. Clicking the show/hide **x** again makes the layer visible.

**_Section 17.8 Adding the Cannonball_** • A small white circle is Flash’s default appearance for a movie clip that has no graphic in its first

frame.

• The Number type is ActionScript 3’s floating-point variable type.

Terminology **709**

**_Section 17.9 Adding Sound and Text Objects to the Movie_** • Lock a layer by clicking the lock/unlock selector (dot) to the right of the layer name in the time-

line. When a layer is locked, its elements are visible, but they cannot be edited. This allows you to use one layer’s elements as visual references for designing another layer, while ensuring that no elements are moved unintentionally. To unlock a layer, click the lock symbol to the right of the layer name in the **Timeline**.

**_Section 17.10 Adding the Time Counter_** • Time, whether increasing or decreasing, is an important aspect of many games and applications.

• Games generally have a final animation sequence that informs the player of the outcome of the game.

**_Section 17.12 Adding Collision Detection_** • Flash has a built-in collision detection function that determines whether two objects are touch-

ing. The function _object1_.hitTestObject(_object2_) returns true if any part of _object1_ touches _object2_. Many games must detect collisions between moving objects to control game play or add realistic effects. In this game, we rely on collision detection to determine if the ball hits either the blocker or the target.

**Terminology** ActionScript 3.0 addChild

addEventListener

Adobe Flash CS 3 function hitTestObject ActionScript collision detection

method import instance instance name instance variable **Library** lock/unlock layer

Math class MouseEvent

Number

property **Property Inspector** rotation property show/hide layers Sprite

stage

stage.mouseX

stage.mouseY

stop

**Self-Review Exercises 17.1** State whether each of the following is _true_ or _false_. If _false_, explain why.

a) ActionScript 3.0 is an object-oriented scripting language that contains functions and classes.

b) There can be multiple instances of one symbol. c) Locking a layer is the same as hiding it, except that a hidden layer can still be edited. d) New functions can never be created in Flash. We must rely on Flash’s predefined func-

tions.

**17.2** Fill in the blanks for each of the following statements. a) Property accesses the main timeline object. b) A movie clip with no animation in its first frame appears as a(n) . c) Flash has a built-in function that returns true when two objects touch.

**710** Chapter 17 Adobe® Flash® CS3: Building an Interactive Game

**Answers to Self-Review Exercises 17.1** a) True. b) True. d) False. Neither locked nor hidden layers can be edited. Locked layers are visible, though, whereas hidden layers are not. e) False. New functions can be created inside a package, or inside a frame’s **Actions** using the keyword function.

**17.2** a) stage. b) small white circle. c) collision detection.

**Exercises 17.3** Add an **instructions** button to the **intro** frame of the main scene. Make it play a brief movie clip explaining the rules of the game. The instructions should not interfere with the actual game play.

**17.4** Use Flash’s random( _n_ ) function (discussed in Chapter 16) to assign a random speed be- tween 1 and 4 to the blocker, and a speed between 5 and 7 to the target. Remember that random( _n_ )

returns a random integer between 0 and _n_.

**17.5** Add a text field to the **end** frame that displays the player’s final score (i.e., the time remain- ing) if the player wins. Output different phrases depending on the player’s final score (e.g., 1–10: Nice job, 11–15: Great!, 16–20: Amazing!). \[_Hint:_ Create a new global variable finalTime if the player wins. Create an if…else statement to determine which text phrase to use based on final-

Time.\]

**17.6** Add a second level to the game with two blockers instead of one. Try to do this without adding a fourth frame to the timeline. Instead, create a duplicate **blocker** symbol and modify it to appear invisible at first. Think about reversing the process we used to make the sections of the **target** invisible. The final score should be a combination of first- and second-round scores. \[_Hint:_ Create an instance variable level that stores the current level (i.e., 1 or 2). Make the second blocker visible only if level == 2.\]

**17.7** Give a brief description of each of the following terms: a) Lock/unlock b) Instance c) Collision detection d) x and y

e) Event handler f) Function
