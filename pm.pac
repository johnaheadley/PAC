function FindProxyForURL(url, host) {
    
if (shExpMatch(url, "*turbo-t6lkj600.edge.prod.fortisase.com:7831*"))
return "PROXY turbo-t6lkj600.edge.prod.fortisase.com:11577";

if (shExpMatch(url, "*.duosecurity.com*") ||
shExpMatch(url, "*turbo-t6lkj600.edge.prod.fortisase.com*"))
return "DIRECT";

if (isInNet(hostIP, '0.0.0.0', '255.0.0.0') ||
isInNet(hostIP, '10.0.0.0', '255.0.0.0') ||
isInNet(hostIP, '127.0.0.0', '255.0.0.0') ||
isInNet(hostIP, '169.254.0.0', '255.255.0.0') ||
isInNet(hostIP, '172.16.0.0', '255.240.0.0') ||
isInNet(hostIP, '192.0.2.0', '255.255.255.0') ||
isInNet(hostIP, '192.88.99.0', '255.255.255.0') ||
isInNet(hostIP, '192.168.0.0', '255.255.0.0') ||
isInNet(hostIP, '198.18.0.0', '255.254.0.0') ||
isInNet(hostIP, '224.0.0.0', '240.0.0.0') ||
isInNet(hostIP, '240.0.0.0', '240.0.0.0'))
return 'DIRECT';

else return "PROXY turbo-t6lkj600.edge.prod.fortisase.com:11577"; }
