function compute()
{
    var principal = document.getElementById("principal").value;
    if (document.getElementById("principal").value <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").value = "1";
        document.getElementById("principal").focus();
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML = "<br>If you deposit <span class='number'>"+principal+"</span>,<br>at an interest rate of <span class='number'>"+rate+"%</span>.<br>You will receive an amount of <span class='number'>"+interest+"</span>,<br>in the year <span class='number'>"+year+"</span>.";
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
