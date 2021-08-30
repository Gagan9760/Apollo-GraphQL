const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Mobile{
        id:ID!
        model:String!,
        price:Int!,
        year:Int!,
        os:String!,
        companyID: ID!,
        getCom:Company!
        
    }
    type Company{
        id:ID!
        name:String!,
        web:String!,
        getMob:[Mobile!]!               
    }
    #Queries
    type Query{
        getPhones: [Mobile!]!,
        getPhone(id:ID!): Mobile,
        getCompanies:[Company!]!,
        getCompany(id:ID!):Company
    }
    #Mutations
    type Mutation{
        createPhone(
            model:String!,
            price:Int!,
            year:Int!,
            os:String!,
            companyID: ID!
        ): Mobile!,
        createCompany(
            name:String!,
            web:String!
        ): Company!
    }
`

module.exports = { typeDefs }