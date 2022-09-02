var data = {"bug_cases": {"BugType": "Use after free", "Severity": 12, "DocHTML": "<div class=\"toc\">\n<ul>\n<li><a href=\"#description\">Description</a></li>\n<li><a href=\"#vulnerability-and-risk\">Vulnerability and risk</a></li>\n<li><a href=\"#likelihood-of-exploit\">Likelihood of Exploit</a></li>\n<li><a href=\"#potential-mitigations\">Potential mitigations</a></li>\n<li><a href=\"#demonstrative-examples\">Demonstrative Examples</a><ul>\n<li><a href=\"#code-example-1\">Code example 1</a></li>\n<li><a href=\"#fixed-code-example-1\">Fixed code example 1</a></li>\n<li><a href=\"#code-example-2\">Code example 2</a></li>\n<li><a href=\"#fixed-code-example-2\">Fixed code example 2</a></li>\n</ul>\n</li>\n<li><a href=\"#references\">References</a></li>\n</ul>\n</div>\n\n  <div>\n    \n<h1 id=\"description\">Description</h1>\n<p>The use of previously-freed memory can have any number of adverse consequences, ranging from the corruption of valid data to the execution of arbitrary code, depending on the instantiation and timing of the flaw. The simplest way data corruption may occur involves the system's reuse of the freed memory. Use-after-free errors have two common and sometimes overlapping causes:</p>\n<ul>\n<li>Error conditions and other exceptional circumstances.</li>\n<li>Confusion over which part of the program is responsible for freeing the memory. </li>\n</ul>\n<p>In this scenario, the memory in question is allocated to another pointer validly at some point after it has been freed. The original pointer to the freed memory is used again and points to somewhere within the new allocation. As the data is changed, it corrupts the validly used memory; this induces undefined behavior in the process.</p>\n<p>If the newly allocated data chances to hold a class, in C++ for example, various function pointers may be scattered within the heap data. If one of these function pointers is overwritten with an address to valid shellcode, execution of arbitrary code can be achieved.</p>\n<h1 id=\"vulnerability-and-risk\">Vulnerability and risk</h1>\n<ul>\n<li>The use of previously freed memory may corrupt valid data, if the memory area in question has been allocated and used properly elsewhere. </li>\n<li>If chunk consolidation occurs after the use of previously freed data, the process may crash when invalid data is used as chunk information. </li>\n<li>If malicious data is entered before chunk consolidation can take place, it may be possible to take advantage of a write-what-where primitive to execute arbitrary code. </li>\n</ul>\n<h1 id=\"likelihood-of-exploit\">Likelihood of Exploit</h1>\n<p>Critical</p>\n<h1 id=\"potential-mitigations\">Potential mitigations</h1>\n<ul>\n<li>Make sure the memory is no longer used before release</li>\n<li>When freeing pointers, be sure to set them to NULL once they are freed. However, the utilization of multiple or complex data structures may lower the usefulness of this strategy.</li>\n</ul>\n<h1 id=\"demonstrative-examples\">Demonstrative Examples</h1>\n<h3 id=\"code-example-1\">Code example 1</h3>\n<table class=\"highlighttable\"><tr><td class=\"linenos\"><div class=\"linenodiv\"><pre>1\n2\n3\n4\n5\n6\n7\n8</pre></div></td><td class=\"code\"><div class=\"highlight\"><pre><span></span><span class=\"kt\">char</span><span class=\"o\">*</span> <span class=\"n\">ptr</span> <span class=\"o\">=</span> <span class=\"p\">(</span><span class=\"kt\">char</span><span class=\"o\">*</span><span class=\"p\">)</span><span class=\"n\">malloc</span> <span class=\"p\">(</span><span class=\"n\">SIZE</span><span class=\"p\">);</span>\n<span class=\"k\">if</span> <span class=\"p\">(</span><span class=\"n\">err</span><span class=\"p\">)</span> <span class=\"p\">{</span>\n  <span class=\"n\">abrt</span> <span class=\"o\">=</span> <span class=\"mi\">1</span><span class=\"p\">;</span>\n  <span class=\"n\">free</span><span class=\"p\">(</span><span class=\"n\">ptr</span><span class=\"p\">);</span>\n<span class=\"p\">}</span>\n<span class=\"k\">if</span> <span class=\"p\">(</span><span class=\"n\">abrt</span><span class=\"p\">)</span> <span class=\"p\">{</span>\n  <span class=\"n\">logError</span><span class=\"p\">(</span><span class=\"s\">\"operation aborted before commit\"</span><span class=\"p\">,</span> <span class=\"n\">ptr</span><span class=\"p\">);</span> <span class=\"c1\">// ptr is freed by free(ptr)</span>\n<span class=\"p\">}</span>\n</pre></div>\n</td></tr></table>\n<h3 id=\"fixed-code-example-1\">Fixed code example 1</h3>\n<table class=\"highlighttable\"><tr><td class=\"linenos\"><div class=\"linenodiv\"><pre>1\n2\n3\n4\n5\n6\n7\n8</pre></div></td><td class=\"code\"><div class=\"highlight\"><pre><span></span><span class=\"kt\">char</span><span class=\"o\">*</span> <span class=\"n\">ptr</span> <span class=\"o\">=</span> <span class=\"p\">(</span><span class=\"kt\">char</span><span class=\"o\">*</span><span class=\"p\">)</span><span class=\"n\">malloc</span> <span class=\"p\">(</span><span class=\"n\">SIZE</span><span class=\"p\">);</span>\n<span class=\"k\">if</span> <span class=\"p\">(</span><span class=\"n\">err</span><span class=\"p\">)</span> <span class=\"p\">{</span>\n  <span class=\"n\">abrt</span> <span class=\"o\">=</span> <span class=\"mi\">1</span><span class=\"p\">;</span>\n<span class=\"p\">}</span>\n<span class=\"k\">if</span> <span class=\"p\">(</span><span class=\"n\">abrt</span><span class=\"p\">)</span> <span class=\"p\">{</span>\n  <span class=\"n\">logError</span><span class=\"p\">(</span><span class=\"s\">\"operation aborted before commit\"</span><span class=\"p\">,</span> <span class=\"n\">ptr</span><span class=\"p\">);</span>\n  <span class=\"n\">free</span><span class=\"p\">(</span><span class=\"n\">ptr</span><span class=\"p\">);</span>\n<span class=\"p\">}</span>\n</pre></div>\n</td></tr></table>\n<h3 id=\"code-example-2\">Code example 2</h3>\n<table class=\"highlighttable\"><tr><td class=\"linenos\"><div class=\"linenodiv\"><pre>1\n2\n3\n4\n5\n6</pre></div></td><td class=\"code\"><div class=\"highlight\"><pre><span></span><span class=\"kt\">void</span> <span class=\"nf\">bad2</span><span class=\"p\">(){</span>\n    <span class=\"kt\">int</span> <span class=\"o\">*</span><span class=\"n\">p</span> <span class=\"o\">=</span> <span class=\"p\">(</span><span class=\"kt\">int</span> <span class=\"o\">*</span><span class=\"p\">)</span><span class=\"n\">malloc</span><span class=\"p\">(</span><span class=\"k\">sizeof</span><span class=\"p\">(</span><span class=\"kt\">int</span><span class=\"p\">));</span>\n    <span class=\"o\">*</span><span class=\"n\">p</span> <span class=\"o\">=</span> <span class=\"mi\">100</span><span class=\"p\">;</span>\n    <span class=\"n\">free</span><span class=\"p\">(</span><span class=\"n\">p</span><span class=\"p\">);</span>\n    <span class=\"n\">free</span><span class=\"p\">(</span><span class=\"n\">p</span><span class=\"p\">);</span> <span class=\"c1\">// double free</span>\n<span class=\"p\">}</span>\n</pre></div>\n</td></tr></table>\n<h3 id=\"fixed-code-example-2\">Fixed code example 2</h3>\n<table class=\"highlighttable\"><tr><td class=\"linenos\"><div class=\"linenodiv\"><pre>1\n2\n3\n4\n5</pre></div></td><td class=\"code\"><div class=\"highlight\"><pre><span></span><span class=\"kt\">void</span> <span class=\"nf\">good2</span><span class=\"p\">(){</span>\n    <span class=\"kt\">int</span> <span class=\"o\">*</span><span class=\"n\">p</span> <span class=\"o\">=</span> <span class=\"p\">(</span><span class=\"kt\">int</span> <span class=\"o\">*</span><span class=\"p\">)</span><span class=\"n\">malloc</span><span class=\"p\">(</span><span class=\"k\">sizeof</span><span class=\"p\">(</span><span class=\"kt\">int</span><span class=\"p\">));</span>\n    <span class=\"o\">*</span><span class=\"n\">p</span> <span class=\"o\">=</span> <span class=\"mi\">100</span><span class=\"p\">;</span>\n    <span class=\"n\">free</span><span class=\"p\">(</span><span class=\"n\">p</span><span class=\"p\">);</span>\n<span class=\"p\">}</span>\n</pre></div>\n</td></tr></table>\n<h1 id=\"references\">References</h1>\n<div class=\"footnote\">\n<hr>\n<ol>\n<li id=\"fn-CWE415\">\n<p>https://cwe.mitre.org/data/definitions/415.html\u00a0<a class=\"footnote-backref\" href=\"#fnref-CWE415\" title=\"Jump back to footnote 1 in the text\">\u21a9</a></p>\n</li>\n<li id=\"fn-CWE416\">\n<p>https://cwe.mitre.org/data/definitions/416.html\u00a0<a class=\"footnote-backref\" href=\"#fnref-CWE416\" title=\"Jump back to footnote 2 in the text\">\u21a9</a></p>\n</li>\n<li id=\"fn-CERT-MEM30-C\">\n<p>https://wiki.sei.cmu.edu/confluence/display/c/MEM30-C.+Do+not+access+freed+memory\u00a0<a class=\"footnote-backref\" href=\"#fnref-CERT-MEM30-C\" title=\"Jump back to footnote 3 in the text\">\u21a9</a></p>\n</li>\n<li id=\"fn-CERT-MEM50-CPP\">\n<p>https://wiki.sei.cmu.edu/confluence/display/cplusplus/MEM50-CPP.+Do+not+access+freed+memory\u00a0<a class=\"footnote-backref\" href=\"#fnref-CERT-MEM50-CPP\" title=\"Jump back to footnote 4 in the text\">\u21a9</a></p>\n</li>\n</ol>\n</div>\n  </div>\n  ", "CaseList": [{"HashID": "f27f2210639829a5eafac7780055b836", "ReportChecker": "PSA Use After Free Checker", "Score": 60, "Steps": [{"FileMD5": "200a1fa5e00bd7edadecfafc7942ee46.c", "FileName": "crypto/x509v3/v3_pci.c", "Line": 134, "Tip": "<b>policy-&gt;data</b> is used as the 1st parameter in function <b>CRYPTO_realloc</b>", "SrcLines": ["            if (!tmp_data2) {", "                X509V3_conf_err(val);", "                goto err;", "            }", "", "            tmp_data = OPENSSL_realloc((*policy)->data,", "                                       (*policy)->length + val_len + 1);", "            if (tmp_data) {", "                (*policy)->data = tmp_data;", "                memcpy(&(*policy)->data[(*policy)->length],"], "SrcStart": 129}, {"FileMD5": "3c28889ad3768a30a32c10490d855b17.c", "FileName": "crypto/mem.c", "Line": 123, "Tip": "<b>str</b> is used as the 1st parameter in function <b>CRYPTO_free</b>", "SrcLines": ["", "    if (str == NULL)", "        return CRYPTO_malloc(num, file, line);", "", "    if (num == 0) {", "        CRYPTO_free(str, file, line);", "        return NULL;", "    }", "", "#ifndef OPENSSL_NO_CRYPTO_MDEBUG"], "SrcStart": 118}, {"FileMD5": "3c28889ad3768a30a32c10490d855b17.c", "FileName": "crypto/mem.c", "Line": 185, "Tip": "<b>str</b> is used as the 1st parameter in function <b>free</b><font color=red> (memory freed here)</font>", "SrcLines": ["        CRYPTO_mem_debug_free(str, 1, file, line);", "    } else {", "        free(str);", "    }", "#else", "    free(str);", "#endif", "}", "", "void CRYPTO_clear_free(void *str, size_t num, const char *file, int line)"], "SrcStart": 180}, {"FileMD5": "200a1fa5e00bd7edadecfafc7942ee46.c", "FileName": "crypto/x509v3/v3_pci.c", "Line": 148, "Tip": "<b>policy-&gt;data</b> is used as the 1st parameter in function <b>CRYPTO_free</b>, which has already been freed", "SrcLines": ["                OPENSSL_free(tmp_data2);", "                /*", "                 * realloc failure implies the original data space is b0rked", "                 * too!", "                 */", "                OPENSSL_free((*policy)->data);", "                (*policy)->data = NULL;", "                (*policy)->length = 0;", "                X509V3err(X509V3_F_PROCESS_PCI_VALUE, ERR_R_MALLOC_FAILURE);", "                X509V3_conf_err(val);"], "SrcStart": 143}], "Review": 80, "Time": 1630075188000, "DocID": "PE0703", "File": "crypto/x509v3/v3_pci.c", "Line": 148}, {"HashID": "61ba9934198d74651e6ee7c5d38de73a", "ReportChecker": "PSA Use After Free Checker", "Score": 60, "Steps": [{"FileMD5": "200a1fa5e00bd7edadecfafc7942ee46.c", "FileName": "crypto/x509v3/v3_pci.c", "Line": 198, "Tip": "<b>policy-&gt;data</b> is used as the 1st parameter in function <b>CRYPTO_realloc</b>", "SrcLines": ["                X509V3_conf_err(val);", "                goto err;", "            }", "        } else if (strncmp(val->value, \"text:\", 5) == 0) {", "            val_len = strlen(val->value + 5);", "            tmp_data = OPENSSL_realloc((*policy)->data,", "                                       (*policy)->length + val_len + 1);", "            if (tmp_data) {", "                (*policy)->data = tmp_data;", "                memcpy(&(*policy)->data[(*policy)->length],"], "SrcStart": 193}, {"FileMD5": "3c28889ad3768a30a32c10490d855b17.c", "FileName": "crypto/mem.c", "Line": 123, "Tip": "<b>str</b> is used as the 1st parameter in function <b>CRYPTO_free</b>", "SrcLines": ["", "    if (str == NULL)", "        return CRYPTO_malloc(num, file, line);", "", "    if (num == 0) {", "        CRYPTO_free(str, file, line);", "        return NULL;", "    }", "", "#ifndef OPENSSL_NO_CRYPTO_MDEBUG"], "SrcStart": 118}, {"FileMD5": "3c28889ad3768a30a32c10490d855b17.c", "FileName": "crypto/mem.c", "Line": 185, "Tip": "<b>str</b> is used as the 1st parameter in function <b>free</b><font color=red> (memory freed here)</font>", "SrcLines": ["        CRYPTO_mem_debug_free(str, 1, file, line);", "    } else {", "        free(str);", "    }", "#else", "    free(str);", "#endif", "}", "", "void CRYPTO_clear_free(void *str, size_t num, const char *file, int line)"], "SrcStart": 180}, {"FileMD5": "200a1fa5e00bd7edadecfafc7942ee46.c", "FileName": "crypto/x509v3/v3_pci.c", "Line": 211, "Tip": "<b>policy-&gt;data</b> is used as the 1st parameter in function <b>CRYPTO_free</b>, which has already been freed", "SrcLines": ["            } else {", "                /*", "                 * realloc failure implies the original data space is b0rked", "                 * too!", "                 */", "                OPENSSL_free((*policy)->data);", "                (*policy)->data = NULL;", "                (*policy)->length = 0;", "                X509V3err(X509V3_F_PROCESS_PCI_VALUE, ERR_R_MALLOC_FAILURE);", "                X509V3_conf_err(val);"], "SrcStart": 206}], "Review": 80, "Time": 1630075188000, "DocID": "PE0703", "File": "crypto/x509v3/v3_pci.c", "Line": 211}]}, "start": 1, "end": 2, "page": 11, "total_pages": 11, "language": "en"}