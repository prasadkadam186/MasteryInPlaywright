let browserName = null
switch(browserName?? "Chrome")
{
    case "Chrome" : console.log("Its Chrome Browser");
                    break;
    case "FireFox" : console.log("Its FireFox Browser");
                     break;
    case "Edge" : console.log("Its Edge Browser");
                     break;
    case "Safari" : console.log("Its Safari Browser");
                     break;
    default : console.log("Default Value");
}