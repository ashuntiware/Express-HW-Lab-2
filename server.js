const express = require('express');

const app = express();

const port = 3000;

app.get('/greeting/:name', (req, res) => {
    res.send('Hey girl, hey!' + [req.params.name]);
});

//Tip Calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
    const bigTip = (req.params.total * (req.params.tipPercentage / 100))
   res.send('Your tip is' + ' ' + bigTip);
})

//Magic 8 Ball
app.get('/magic/Will%20I%20Be%20A%20Millionaire', (req, res) => {
    res.send('<h1>Will I be a millionaire?</h1>');
});





app.listen(port,() => {
    console.log('listening on port' , port);
});