module.exports = num => 
{
    if((num % 5 === 0) && (num % 3 === 0)) 
        return 'FizzBuzz';
    
    return `${num}`
};