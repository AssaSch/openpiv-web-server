const express = require('express');
const router = express.Router();

router.post('/upload', async (req, res) => {
  console.log('upload backend');
  
  // let imageFile = req.files.file;
  res.status(200).send();
  
  // imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function(err) {
  //   if (err) {
  //     return res.status(500).send(err);
  //   }

  //   res.json({file: `public/${req.body.filename}.jpg`});
  // });
});

module.exports = router;