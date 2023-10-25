const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question(`What's your name? Nicknames are also acceptable :)\n`, (answer) => {
  let outputString = '';

  outputString = `${answer} likes `;
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question(`What's an activity you like doing?`, (answer) => {
    outputString += `${answer} and at that time, like to listen to `;
    console.log(`Thank you for your valuable feedback: ${answer}, \nOutput: ${outputString}`);
    
    rl.question(`What do you listen to while doing that?`, (answer) => {
      outputString += `${answer}. In addition to that, favourite meal is `;
      console.log(`Thank you for your valuable feedback: ${answer}`);
      
      rl.question(`Which meal is your favourite? (eg: dinner, brunch, etc.)?`, (answer) => {
        outputString += `${answer} and `;
        console.log(`Thank you for your valuable feedback: ${answer}`);
        
        rl.question(`What's your favourite thing to eat for that meal?`, (answer) => {
          outputString += `${answer} along with it.`;
          console.log(`Thank you for your valuable feedback: ${answer}`);
          
          rl.question(`Which sport is your absolute favourite?`, (answer) => {
            outputString += `${answer} is one of the favourite sports. Strengths are: `;
            console.log(`Thank you for your valuable feedback: ${answer}`);
            
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (answer) => {
              outputString += `${answer}`;
              console.log(`Thank you for your valuable feedback: ${answer}`);
              console.log(`Here is a short paragraph: ${outputString}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});