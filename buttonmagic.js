function colorize()
{
    let r=Math.floor(Math.random()*255+1);
    let g=Math.floor(Math.random()*255+1);
    let b=Math.floor(Math.random()*255+1);
    return `rgb(${r},${g},${b})`;
}
const button=document.querySelectorAll('button');

for(let buttons of button)
{
    buttons.addEventListener('click',function()
    {
        this.style.backgroundColor=colorize();
        this.style.color=colorize()
    });
}
