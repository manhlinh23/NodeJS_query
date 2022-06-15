module.exports = {
    AddNumber: function (a,b){
        return a + b
    },
    isPrime: function(n){
        let flag = true;
    
        if (n <2) return flag = 0; 
        let i = 2;
        while(i <n){
            if( n%i==0 ) {
                flag = false;
                break; 
            }
            i++;
        }
        return flag;
    },
    ktsnt: function (n) {
        if(typeof n === 'number'){
            return this.isPrime(n)
        }else if(typeof n === 'object') {
            for (let i = 0; i < n.length; i++){
                if (this.isPrime(n[i]) == 1)  console.log(n[i]);
              }
        }
    }
};

