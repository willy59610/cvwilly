function afficher_cacher(id)
{
    if(document.getElementById(id).style.visibility=="hidden")
    {
        document.getElementById(id).style.visibility="visible";
        document.getElementById('bouton_'+id).innerHTML='EXPERIENCES PROFESSIONNELLES';
    }
    else

    {
        document.getElementById(id).style.visibility="hidden";
        document.getElementById('bouton_'+id).innerHTML='EXPERIENCES PROFESSIONNELLES';
    }
    return true;
}
function afficher_cacher(id)
{
    if(document.getElementById(id).style.visibility=="hidden")
    {
        document.getElementById(id).style.visibility="visible";
        document.getElementById('bouton1_'+id).innerHTML='FORMATIONS';
    }
    else
    {
        document.getElementById(id).style.visibility="hidden";
        document.getElementById('bouton1_'+id).innerHTML='FORMATIONS';
    }
    return true;
}