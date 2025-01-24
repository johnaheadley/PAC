function FindProxyForURL(url, host) {

if (shExpMatch(url, "*.duosecurity.com*") ||
shExpMatch(url, "*turbo-t6lkj600.edge.prod.fortisase.com:443") ||
shExpMatch(url, "https://turbo-t6lkj600.edge.prod.fortisase.com")) 
return "DIRECT";

else return "PROXY turbo-t6lkj600.edge.prod.fortisase.com:11577; DIRECT"; }
