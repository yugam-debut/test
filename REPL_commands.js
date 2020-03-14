//Print star pattern 
for(var i=1; i<=5; i++)
{ 
    for(var j=i; j<5; j++)
    {
        process.stdout.write(" ");
    }
    for(var j=1; j<=(2*i-1); j++)
    {
        process.stdout.write("*");
    }
    console.log("\n");
}

//{rogram to print and sum the multiples of 3 and 5 under 100.
var sum = 0;
for (var x = 0; x < 100; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);
