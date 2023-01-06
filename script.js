//1000:2000:3000:4000:5000:6000:7000:8000
function hex2bin(hex){
    return (parseInt(hex, 16).toString(2)).padStart(8, '0');
}
function convertIPv6NetworkToBinary(pIpv6)
{

    var result1 = ""
    pIpv6.value.split(':').forEach(str => {
    result1 += hex2bin(str) + ':'
    })
    console.log(result1)
    document.getElementById("ipv6AnsNetwork").innerHTML = result1;
}

function convertIPv6HostToBinary(pIpv6)
{
    var result2 = ""
    pIpv6.value.split(':').forEach(str => {
    result2 += hex2bin(str) + ':'
    })
    console.log(result2)
    document.getElementById("ipv6AnsHost").innerHTML = result2;
}

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