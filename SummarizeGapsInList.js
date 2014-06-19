/*
 * Find the first character in a string that doesn't repeat.
 * Catch: Smallest code in terms of code size.
 * Run as: node SummarizeGapsInList.js
 */

function g(a) {
  F(a);
  var seen = {}, c;
  for (var i = 0; i < a.length; i++) {
    ch = a[c];
    if (!seen[ch]) {
      seen[ch] = 1;
    } else {
      seen[ch]++;
    }
  }
  F(seen)
  for (c in seen) {
    if (seen[c] == 1) {
      return a.indexOf(c);
    }
  }
  return -1;
}

function g(a){var f={},c=0,d;for(;c<a.length;){h=a[c++];d=f[h];f[h]=d?d+1:1;}for(c in f){if(f[c]==1){return a.indexOf(c);}}return -1;}
function g(a){var f={},c=0,d;for(;c<a.length;){h=a[c++];d=f[h];f[h]=d?d+1:1}for(c in f){if(f[c]==1){return a.indexOf(c)}}return-1}

function F(a) {
  fu(a, true)
}

function fu(a, supress) {
  if (!supress) {
    console.log(a);
  }
}

fu(g("GOOGLE"));
fu(g("Google"));
fu(g("gOOGLE"));
fu(g("GOOG"));
fu(g(""));
fu(g("GGGG"));
fu(g("G"));
fu(g("abracadabra"));
fu(g("abcdefghijklmnopqrstuvwxyz"));
fu(g("abcdefgfedba"));
fu(g("abcdefggfedcba"));
fu(g("aaabbcdefg"));
fu(g("aa"));
fu(g("ab"));
fu(g("abcabcabc"));
fu(g("~!@#$%^&*()`~!@#$%^&*()"));
fu(g("-=_+{}|--[====]:;',.<|>"));
fu(g("-=====================-"));
fu(g("-====================="));
fu(g("======================-"));
