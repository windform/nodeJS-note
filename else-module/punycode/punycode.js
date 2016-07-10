var punycode = require('punycode');
punycode.encode('廖东')
punycode.decode('xhqq12b')
punycode.toASCII('www.廖东.com')
punycode.toASCII('www.google.com')
punycode.toUnicode('www.xn--xhqq12b.com')
punycode.toUnicode('www.google.com.cn')
punycode.ucs2.encode([76,45,12])
punycode.ucs2.encode([97,98,99])
punycode.ucs2.encode([0x1d306])
punycode.ucs2.decode('abc')
punycode.ucs2.decode('~')
punycode.version
