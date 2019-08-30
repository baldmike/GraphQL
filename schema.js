const {
    GraphQLObjectType, 
    GraphQLInt,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql')

const RecordType = new GraphQLObjectType({
    name: 'Record',
    fields:() => ({
        id: {type:GraphQLString},
        name: {type:GraphQLString},
        email: {type:GraphQLString},
        age: {type:GraphQLInt},
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        record: {
            type: RecordType,
            args:{
                id:{type:GraphQLString}
            },
            resolve(parentValue, args){
                for(let i = 0; i < records.length;i++) {
                    if(records[i].id=args.id) {
                        return records[i]
                    }
                }
            }
        },
        records: {
            type: new GraphQLList(RecordType),
            resolve(parentValue, args){
                return records
            }
        }
    }
    
});

module.exports = new GraphQLSchema({
    query: RootQuery
});





// example data
const records = [
    {id: '1', name: 'Joe Doe', email: 'joe@email.com', age:12},
    {id: '2', name: 'Julie Doe', email: 'julie@email.com', age:28},
    {id: '3', name: 'Jack Doe', email: 'jack@email.com', age:49},
];