function FindProxyForURL(url, host) {
    
if (shExpMatch(url, "*turbo-t6lkj600.edge.prod.fortisase.com:7831"))
return "PROXY turbo-t6lkj600.edge.prod.fortisase.com:11577; DIRECT";

if (shExpMatch(url, "*.duosecurity.com*") ||
shExpMatch(url, "*turbo-t6lkj600.edge.prod.fortisase.com*"))
return "DIRECT";

else return "PROXY turbo-t6lkj600.edge.prod.fortisase.com:11577; DIRECT"; }
