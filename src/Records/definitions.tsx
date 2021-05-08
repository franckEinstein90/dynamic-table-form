
export interface Registry{
    id()    :number ; //generates a unique ID
    create(): Record ; 
}

export interface Record{
    ID       : number ;
}

const registry = (function(){

    let _id = 1; 
    return {
        id : ()=> {
            _id += 1 ; 
            return _id ; 
        }
    }
})() ; 

export const newRecordId = ()=> registry.id();

export interface Definition extends Record{
    Term : string ; 
    Definition : string ; 
}

export interface FinancialRecord extends Record{
    Amount : number ; 
}
