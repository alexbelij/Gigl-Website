const Gig = require('../database/models/Gig')

function getAllGigs(req, res){
    console.log('Recieved get gigs request')
    // res.status(200).send('response from get gigs')
    // res.json({data: ['test', 'res', 'data']})
      Gig.find()
      .then(docs =>{
          
          res.send(docs)
      })
      .catch(err => {
          res.status(500).json({error: err})
      })
  }

  // get gigs for which performer has applied but not been accepted
  function getPerformerPendingGigs(req, res){
      const user = req.session.userPerformer;
      Gig.find({"applicants": user},{"accepted": { "ne": user}})
      .then(docs =>{
          
        res.send(docs)
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
    }  
    
    //queries
    // get gigs for which performer has been accepted
  // get gigs for which performer has not applied

  module.exports = {getAllGigs}