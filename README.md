# RPS-Multiplayer
// firebase data is JSON with property of player number 
// and value of object which has 3 properties: name, wins 
// and losses

/* PseudoCode

header up top
 
textbox up top with a start button next to it



when you enter your name into the text box and click
start, display under the header "hello name! You are player
# __." As soon as you click start, your name and 
wins/losses shows up on the database. And in your player div 
that says "waiting for player 1", you'll clear that out
and have the player name displayed at the top and the 
wins/losses displayed at the bottom. The opponent div on
the right will remain saying "Waiting for Player 2" until
your opponent types his name in.

Once 2nd player signs in, then underneath where it says
"hello name! You are player# 2" His name/wins/losses will
then be logged to the database. it'll say "waiting for
Player 1 to move underneath his name heading. And on 
Player 1's screen beneath "Hi name, you are player 1", 
itll say 'It's your turn.'Then in the middle of player 
1's screen will have RPS displayed and ready for input. 
Another thing that'll show up in the database will be a 
third object of "turn: 1" as a sibling of the players
object. The 1 denotes which player's turn it is. 

When user 1 chooses, then his choice will show up in
large font in the middle of his box, and on top it'll 
display "waiting for player 2 to choose." And player 2's
screen will say "it's your turn" up top and in his box 
will be his RPS choices. Player 2 does not see what
player 1 chose. The 'turn' object's value gets updated 
to 2. 

As soon as player 2 chooses, his choice will show up 
in large font and player 1's choice will be revealed. The
wins/losses at the bottom of each player's box will update.
The middle box will display "Player Name wins!" There will
be a timeout function showing who won, and afterwards
it automatically restarts for round 2. 

A player can leave the game by closing the browser or
refreshing the page. The textbox has to show that the
other user has disconnected.

Make sure chat box is functional

*/