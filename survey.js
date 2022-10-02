const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer1) => {
  console.log(`Thank you for your valuable feedback: ${answer1}`);
  rl.question(`What's your name? Nicknames are also acceptable :)`, (answer2) => {
    console.log(`Your name is:,  ${answer2}`);
    rl.question(`What's an activity you like doing?`, (answer3) => {
      console.log(`Your favorite activity is: ${answer3}`);
      rl.question(`What do you listen to while doing that?`, (answer4) => {
        console.log(`You like to listen to: ${answer4}`);
        rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (answer5) => {
          console.log(`Your favorite meatime is: ${answer5}`);
          rl.question(`What's your favourite thing to eat for that meal?`, (answer6) => {
            console.log(`You like to eat: ${answer6}`);
            rl.question(`Which sport is your absolute favourite?`, (answer7) => {
              console.log(`You're a fan of: ${answer7}`);
              rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (answer8) => {
                console.log(`You have super: ${answer8}`);
                rl.close();
              });
            });
          });
        });
      });
    });
  });
});