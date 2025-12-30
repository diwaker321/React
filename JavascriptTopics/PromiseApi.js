/*
in this we learn about what are the types of promise api

1.) i.e Promise.all()
        - basically if you want to make parallel api calls then this will be used 

        Promise.all([it takes in array form ])
        Promise.all([p1 , p2 , p3])
            -suppose
            p1 took 3 sec
            p2 took 2 sec and 
            p3 took 1 sec to execute
        to ye promise.all gives me the result in 3 sec 
        (this is the case when all the promise will successfully executed) 

        WHAT HAPPEN WHEN ANY OF THE PROMISE WILL FAIL
        ans) then immediately promise.all() will throw an error of uska wala jiske promise me error ayi he 
        eg. p2 promise is failed then the error of p2 will be shown
        THIS IS ALL ABOUT PROMISE.ALL()




2.) we have another api i.e Promise.allsettled()
    - basically 1st wale me issue ye tha ki agr koi promise break hori he toh tb bhi you can not see the result of baki walo ka 
      but in this type of promise api you can see the result of those jo resolved ho chuke he 
            Promise.allsetteled([p1 , p2 , p3])
            -suppose
            p1 took 3 sec
            p2 took 2 sec and 
            p3 took 1 sec to execute
        to ye promise.allsetteled gives me the result in 3 sec 
        (this is the case when all the promise will successfully executed) 

        WHAT HAPPEN WHEN ANY OF THE PROMISE WILL FAIL
        ans) then ye immediately nhi rukega it will wait till all the promise to setteled no matter whats the status of promises
        and after 3 sec it will give the results 
        [val1 , failed , val3]



3.) we have another api i.e Promise.race()
    -basically isme jo bhi promise sbse phele fullfilled ho jayegi use jitna time lga hoga utne time se ye race() result dedegi
    it will not wait for others to be setteled
    eg
            Promise.race([p1 , p2 , p3])
            -suppose
            p1 took 3 sec
            p2 took 2 sec and 
            p3 took 1 sec to execute
        to ye promise.race() gives me the result in 1 sec q ki p3 ko sbse phele success mil gyi  
        (this is the case when all the promise will successfully executed) 

          WHAT HAPPEN WHEN ANY OF THE PROMISE WILL FAIL
          ans) it will return the result of first setteled promise weather it is resolved or reject 




4.) we have another api i.e Promise.any()
    -basically it is similiar to .race()
    but in any() it will give the result of 1st promise which is resolved 
    agr koi pheli promise he jo reject ho gyi 
    .any() use nhi dega result me 
    it will give only 1st resolved promise
    i.e you will wait for the 1st success
*/