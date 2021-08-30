const Phone = require('../models/Phone')
const Company = require('../models/Company')


// const mobile = [
//     {id:1,model:'Galaxy S21',price:1000,year:2021,os:"OneUI",companyID:2},
//     {id:2,model:'Galaxy A52',price:500,year:2021,os:"OneUI",companyID:2},
//     {id:3,model:'X50',price:600,year:2020,os:"RealmeOS",companyID:1},
//     {id:4,model:'Reno 4',price:400,year:2019,os:"ColorOS",companyID:3},
// ]
// const company = [
//     {id:1,name:'Realme',web:"realme.com"},
//     {id:2,name:'Samsung',web:"samsung.com"},
//     {id:3,name:'Oppo',web:"oppo.com"},
// ]
const resolvers = {
    Mobile:{
        async getCom(parent){
            // return company.find(com=>com.id==parent.companyID)\
            return await Company.findById(parent.companyID)
        }
    },
    Company:{
        async getMob(parent){
            // return mobile.filter(mob=>mob.companyID==parent.id)
            return await Phone.find({companyID:parent.id})
        }
    },
    Query:{
        async getPhones(){
            return await Phone.find({})
        },
        async getPhone(parent,args){
            return await Phone.findById(args.id)
        },
        async getCompanies(){
            return await Company.find({})
        },
        async getCompany(parent,args){
            return await Company.findById(args.id)
        }
    },
    Mutation:{
        createPhone(parent,args){
            // const newuser = args
            // mobile.push(newuser)
            // return newuser
            const newPhone = new Phone({
                model: args.model,
                price: args.price,
                year: args.year,
                os:args.os,
                companyID:args.companyID
            })
            return newPhone.save()
        },
        createCompany(_,args){
            const newCompany = new Company({
                name:args.name,
                web:args.web
            })
            return newCompany.save()
        }
    }
}

module.exports = {resolvers}