//1000:2000:3000:4000:5000:6000:7000:8000

//function to convert hev number to binary
function hex2bin(hex){
    return (parseInt(hex, 16).toString(2)).padStart(8, '0');
}

//function to split string and concatentate binary results
function convertIPv6NetworkToBinary(pIpv6)
{

    var result1 = ""
    pIpv6.value.split(':').forEach(str => {
    result1 += hex2bin(str) + ':'
    })
    console.log(result1)
    document.getElementById("ipv6AnsNetwork").innerHTML = result1;
}
//function to split string and concatentate binary results
function convertIPv6HostToBinary(pIpv6)
{
    var result2 = ""
    pIpv6.value.split(':').forEach(str => {
    result2 += hex2bin(str) + ':'
    })
    console.log(result2)
    document.getElementById("ipv6AnsHost").innerHTML = result2;
}
//fucntion to split string and concatenate binary conversion
function convertToBinaryNetwork(pIpv4){
    var oct1,oct2,oct3,oct4;
    let ipv4 = pIpv4;
    console.log(ipv4.value);
    var ipv4ToBinary = ipv4.value.split('.');
    var ip = [oct1,oct2,oct3,oct4];
    ip[0] = Number(ipv4ToBinary[0]).toString(2);
    ip[1] = Number(ipv4ToBinary[1]).toString(2);
    ip[2] = Number(ipv4ToBinary[2]).toString(2);
    ip[3] = Number(ipv4ToBinary[3]).toString(2);
    for(var i = 0;i < ip.length;i++)
    {
        while(ip[i].length <= 7)
        {
            ip[i] = "0" + ip[i];
        }
    }
    console.log(ip[0]);
    console.log(ip[1]);
    console.log(ip[2]);
    console.log(ip[3]);
    var ans = ip[0];
    ans += '.';
    ans += ip[1];
    ans += '.';
    ans += ip[2];
    ans += '.';
    ans += ip[3];
    console.log(ans);
    document.getElementById("ipv4AnsNetwork").innerHTML = ans;
    
}
//fucntion to split string and concatenate binary conversion
function convertToBinarySubnetMask(subNetMask){
    var oct1,oct2,oct3,oct4;
    let ipv4 = subNetMask;
    console.log(ipv4.value);
    var ipv4ToBinary = ipv4.value.split('.');
    var ip = [oct1,oct2,oct3,oct4];
    ip[0] = Number(ipv4ToBinary[0]).toString(2);
    ip[1] = Number(ipv4ToBinary[1]).toString(2);
    ip[2] = Number(ipv4ToBinary[2]).toString(2);
    ip[3] = Number(ipv4ToBinary[3]).toString(2);
    for(var i = 0;i < ip.length;i++)
    {
        while(ip[i].length <= 7)
        {
            ip[i] = "0" + ip[i];
        }
    }
    console.log(ip[0]);
    console.log(ip[1]);
    console.log(ip[2]);
    console.log(ip[3]);
    var ans = ip[0];
    ans += '.';
    ans += ip[1];
    ans += '.';
    ans += ip[2];
    ans += '.';
    ans += ip[3];
    console.log(ans);
    document.getElementById("ipv4AnsSubnetMask").innerHTML = ans;
    
}
//fucntion to split string and concatenate binary conversion
function convertToBinaryHost(pIpv4){
    var oct1,oct2,oct3,oct4;
    let ipv4 = pIpv4;
    console.log(ipv4.value);
    var ipv4ToBinary = ipv4.value.split('.');
    var ip = [oct1,oct2,oct3,oct4];
    ip[0] = Number(ipv4ToBinary[0]).toString(2);
    ip[1] = Number(ipv4ToBinary[1]).toString(2);
    ip[2] = Number(ipv4ToBinary[2]).toString(2);
    ip[3] = Number(ipv4ToBinary[3]).toString(2);
    for(var i = 0;i < ip.length;i++)
    {
        while(ip[i].length < 7)
        {
            ip[i] = "0" + ip[i];
        }
    }
    console.log(ip[0]);
    console.log(ip[1]);
    console.log(ip[2]);
    console.log(ip[3]);
    var ans = ip[0];
    ans += '.';
    ans += ip[1];
    ans += '.';
    ans += ip[2];
    ans += '.';
    ans += ip[3];

    document.getElementById("ipv4AnsHost").innerHTML = ans;
    
}
//fucntion to split string, calculate wildmask and concatenate string
function convertToBinaryWildcard(pIpv4,subnetMask){
    let ipv4 = pIpv4;
    let sM = subnetMask;
    var wildcard = "";
    var holdIt;
    var oct1 = 0,oct2 = 0,oct3 = 0,oct4 = 0;
    var ip = [oct1,oct2,oct3,oct4]
    var sm1 = 0,sm2 = 0,sm3 = 0,sm4 = 0;
    var subM = [sm1,sm2,sm3,sm4];
    var octs = ipv4.value.split('.');
    var octsM = sM.value.split('.');
    
    //console.log(octs);
    //console.log(octsM);
    

    for(var i = 0;i < 4;i++)
    {
        ip[i] = octs[i];
        //console.log(ip[i]);
        subM[i] = octsM[i];
        //console.log(subM[i]);
    }

    for(var j = 0; j < 4; j++)
    {
        holdIt = subM[j] - ip[j];
        if(j < 3)
        {
            wildcard += holdIt + ".";
        
        }
        else
        {
            wildcard += holdIt;
            break;
        }
        
    }

    document.getElementById("ipv4AnsWildcard").innerHTML = wildcard;
    
}