const express=require('express')
const router=new express.Router()
const Invoice = require('../model/invoiceModel')


router.post('/addinvoice', async (req, res) => {  
         try {
          const newInvoice = new Invoice(req.body);
  
          await newInvoice.save();
          res.status(201).send(newInvoice);
      } catch (e) {
          res.status(400).send({ message: e.message });
      }
  });

module.exports = router;