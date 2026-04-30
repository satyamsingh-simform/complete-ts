/*Triple-Slash Directive
    -Include namespace.ts file before compiling this file

   tsc run does not need ///  
    -Compiles all included files together  -->This is why namespaces work without ///
    
   specific file run need /// 
*/

///<reference path="./namespace.ts"/>
console.log(MySpace1.greet());



/*Regex
    -/(color|Colour) blind/gi
        -g-->all match
        -i-->case-insensitive
        -bcz of | regex will search for color or Colour both now 
        -logical or | operator can be used in regex
        -in regex we can group expression using bracket ()  
    -/\w/gi
        -select all words 

    -/\d/g
        -select all digit
    -/\s/g
        -select all spaces
    -/\t/g
        -tab space
    -/\n/g
        -all new line
    -/./
        -any character except new line
    -/[abc]/gi
        -all character inside [] this bracket will be selected
    -/[a-zA-Z]/
        -support range
    -/[^abc]/
        -all char except abc
        -^ means neglate
    -^
    -/[colou?r]/gi
        -? anything just before it become optional.
    -/[colou?r*]/gi
        -* r here may appear once or may appear multiple time or even no occurence.
        -* zero or multiple occurence.
    /[colou?r+]/gi
        -+ ensure atleast 1 occurenec.
        -+ means 1 or multiple occurence
    /[colou?r{2}]/gi
        -{} ensure exact no. occurence 
    /[colou?r{1-8}]/gi
        -atleast 1 and atmost 8
*/

