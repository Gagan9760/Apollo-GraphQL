
const mobile = [
    {id:1,model:'Galaxy S21',price:1000,year:2021,os:"OneUI",companyID:2},
    {id:2,model:'Galaxy A52',price:500,year:2021,os:"OneUI",companyID:2},
    {id:3,model:'X50',price:600,year:2020,os:"RealmeOS",companyID:1},
    {id:4,model:'Reno 4',price:400,year:2019,os:"ColorOS",companyID:3},
]
const company = [
    {id:1,name:'Realme',web:"realme.com"},
    {id:2,name:'Samsung',web:"samsung.com"},
    {id:3,name:'Oppo',web:"oppo.com"},
]
const resolvers = {
    Mobile:{
        getCom(parent){
            return company.find(com=>com.id==parent.companyID)
        }
    },
    Company:{
        getMob(parent){
            return mobile.filter(mob=>mob.companyID==parent.id)
        }
    },
    Query:{
        getPhones(){
            return mobile
        },
        getPhone(parent,args){
            return mobile.find(mob=>mob.id==args.id)
        },
        getCompanies(){
            return company
        },
        getCompany(parent,args){
            return company.find(com=>com.id==args.id)
        }
    },
    Mutation:{
        createPhone(parent,args){
            const newuser = args
            mobile.push(newuser)
            return newuser
        }
    }
}

module.exports = {resolvers}