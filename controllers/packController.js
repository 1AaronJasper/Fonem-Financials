const express = require('express')
const router = express.Router()
const Pack = require('../models/packs')

router.get('/pack', (req, res) => {
    res.render('pack/orders.ejs'); 
  });

// router.get('/pack', (req, res) => {
//     res.render('packs.ejs')
//   });

  router.get('/pack/cart', async (req, res) => {

    let cartedPack = await Pack.create([
        {name: 'Budgeting', 
        description: "Try the 50/30/20 rule as a simple budgeting framework. Allow up to 50% of your income for needs. Leave 30% of your income for wants. Commit 20% of your income to savings and debt repayment." , 
        image: "https://image.slidesharecdn.com/budgetingbudgetarycontrol-140910123149-phpapp02/85/budget-budgeting-budgetary-control-3-320.jpg?cb=1665668410", 
        instructorLed: true, 
        selfLed: true, 
        price: 250,
    }, 
    
        {name: 'Managing Debt',
        description:"Debt management is a way to get your debt under control through financial planning and budgeting. The goal of a debt management plan is to use these strategies to help you lower your current debt and move toward eliminating it." , 
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.oreilly.com%2Flibrary%2Fview%2Ffinancial-planning-competency%2F9781119094661%2Fc14.xhtml&psig=AOvVaw3zEVJ-vvCPJUN-bXGpZYwk&ust=1692745095282000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCNjw5Yvt7oADFQAAAAAdAAAAABA-", 
        instructorLed: true, 
        selfLed: false, 
        price: 300,
    }, 
        {name: 'Managing Credit',
        description: "Credit management is the process of deciding which customers to extend credit to and evaluating those customers' creditworthiness over time. It involves setting credit limits for customers, monitoring customer payments and collections, and assessing the risks associated with extending credit to customers.", 
        image: "https://www.horstinsurance.com/wp-content/uploads/2016/12/credit-card-debt-relief.png" , 
        instructorLed: true, 
        selfLed: false, 
        price: 350,
    }, 
        {name: 'Investment',
        description: "Investing is a strategic approach to growing your wealth over time by purchasing financial assets, such as stocks, bonds or ETFs, with the goal of generating returns. Investing works by purchasing financial assets that have the potential to grow in value, while managing risk and adhering to a long-term investment plan.", 
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmoney.cnn.com%2F2018%2F05%2F17%2Fpf%2Fhow-to-start-investing%2Findex.html&psig=AOvVaw3wfN0sxOk-I0Shmny9I5fM&ust=1692745472406000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCNi4u7ju7oADFQAAAAAdAAAAABAX" , 
        instructorLed: true, 
        selfLed: true, 
        price: 250,
    },
        {name: 'Retirement',
        description: "Retirement planning involves determining retirement income goals and what's needed to achieve those goals. Retirement planning includes identifying income sources, sizing up expenses, implementing a savings program, and managing assets and risk." , 
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wallstreetmojo.com%2Fretirement-planning%2F&psig=AOvVaw38EIWi3qKNdZPvjH8adKd3&ust=1692745720989000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCLCrpbbv7oADFQAAAAAdAAAAABAP" , 
        instructorLed: true, 
        selfLed: true, 
        price: 300,
    },
]);
res.send(cartedPack);
  });

  

module.exports = router;