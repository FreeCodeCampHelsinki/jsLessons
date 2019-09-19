/*
Qualifiers
^ begins with
$ ends with
[] one of
[^] Not one of
[-] Range
\ Escape character
\d = [0-9]
\D = [^0-9]
\w = [a-zA-Z0-9\_]
\W = [^a-zA-Z0-9\_]
\s = [ \t\n\r]
\S  = [^ \t\n\r]
() Group
| Or

Quantifiers
? 0 or 1
* 0 or more
+ 1 or more
{n} n times
{n,} n or more
{n,m} n to m times
*/

var regex = /^(0[1-9]|[12]\d|3[01])(0[1-9]|1[0-2])\d{2}[\-A]\d{3}[0-9A-Z]$/;
// var regex = new RegExp("^\d{6}\-\d{3}[A-Z]$");

document.getElementById("clicker").onclick = function()
{
    if(regex.test(document.getElementById('ssn').value))
    {
        document.getElementById('result').innerHTML = "Valid";
    }
    else
    {
        document.getElementById('result').innerHTML = "Invalid";
    }
}