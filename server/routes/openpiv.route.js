const express = require('express');
const router = express.Router();



router.post('/', async (req, res) => {
    console.log("test openpibv");
    console.log(JSON.stringify(req.body));
    // Consider using python-shell module
    const { spawn } = require('child_process');
        const pyProg = spawn('python', ['../openpiv/example-scripts/test_script.py']);

        pyProg.stdout.on('data', function(data) {

            console.log(data.toString());
            // res.write(data);
            // res.end('end');
            res.status(200).send();
        });
});

module.exports = router;