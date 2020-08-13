## Pratice app for mini project

## Closure and Hook

## Clousre
 : is function that call the function. According to MDN , A closure is the combination of a  function and the lexcial enviornment within which that function was declared. 

 ## Things to do
 1. All zero button should change the {count} to zero.
 2. Recycle butotn should put all four button back after removed.

 ## Examples of using hooks
 1. Calling on every render
    ex.) useEffect(function callmeEveryRender(){

    });
 2. Calling on Mount
    ex.) useEffect(fucntion callMeOnMount(){

    });
 3. Calling when values changes
    ex.) useEffect(fucntion callMeOnCountChanges(){

    },[count]);

 4. Calling and cleaning up on Every render
    ex.) useEffect(fucntion callMeAndCleanUpEveryRender(){
        return functiono foo(){
        };
    });
 5. Calling on Mount and clean up before on mount 
    ex.) useEffect(fucntion callMeOnmountAndCleanUpBeforeunMount(){
        return function foo(){

        };
    });