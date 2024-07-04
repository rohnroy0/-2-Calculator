let x=true
Boolean(x)

function btnclick(val)
{
    if(x==true)
    {
        document.getElementById("screen-inp").value=val
        x=false
    }else
    {
        document.getElementById("screen-inp").value=document.getElementById("screen-inp").value+val    
    }
    
    

}
function clrbtn()
{
    document.getElementById("screen-inp").value=" "
    
}
function equalbtn()
{
    values=document.getElementById("screen-inp").value
    result=eval(values)
    document.getElementById("screen-inp").value=result
    x=true
    
}

function opbtnclick(val)
{
    document.getElementById("screen-inp").value=document.getElementById("screen-inp").value+val 
    x=false
}